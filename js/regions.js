(() => {
  'use strict';
  const dataNode = document.getElementById('rs-coverage-data');
  if (!dataNode) return;
  let data;
  try { data = JSON.parse(dataNode.textContent); } catch { return; }
  const mapCard = document.querySelector('.rs-map-card');
  const controls = document.querySelector('.rs-region-controls');
  const panelName = document.getElementById('region-name');
  const mode = document.getElementById('region-mode');
  const examples = document.getElementById('region-examples');
  const description = document.getElementById('region-description');
  const contact = document.getElementById('region-contact');
  const motion = document.getElementById('rs-motion');
  const form = document.getElementById('rs-city-lookup');
  const input = document.getElementById('rs-city');
  const result = document.getElementById('rs-city-result');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR').trim().replace(/\s+/g, ' ');
  const citiesByName = new Map(data.cities.map(city => [normalize(city.name), city]));
  const options = document.getElementById('rs-city-options');
  const fragment = document.createDocumentFragment();
  data.cities.forEach(city => {
    const option = document.createElement('option');
    option.value = city.name;
    fragment.appendChild(option);
  });
  options.appendChild(fragment);

  const selectRegion = (region, cityName = '') => {
    if (!['all', 'online', ...Object.keys(data.zones)].includes(region)) return;
    controls.querySelectorAll('[data-region]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.region === region));
    });
    mapCard.dataset.selection = region === 'all' ? 'all' : region === 'online' ? 'online' : 'region';
    mapCard.querySelectorAll('[data-map-region]').forEach(path => {
      path.classList.toggle('is-selected', path.dataset.mapRegion === region);
    });
    const online = region === 'online';
    mode.textContent = online ? 'ATENDIMENTO ONLINE' : 'PRESENCIAL SOB COMBINAÇÃO + ONLINE';
    if (region === 'all') {
      panelName.textContent = 'Uma conversa próxima. Um projeto bem conduzido.';
      examples.textContent = 'Vale do Paranhana, Grande Porto Alegre, Vale do Sinos, Vale do Caí, parte da Serra, Região Carbonífera, Litoral e Costa Doce.';
      description.textContent = 'A forma de atendimento é combinada no primeiro contato. Reuniões, revisão de conteúdo e apresentação do site também podem acontecer integralmente online.';
    } else if (online) {
      panelName.textContent = cityName || 'Todo o estado, online.';
      examples.textContent = cityName ? `${cityName}, Rio Grande do Sul. Atendimento online do briefing à publicação.` : 'Serra, Norte, Centro, Sul, Fronteira e demais regiões do Rio Grande do Sul.';
      description.textContent = 'Briefing, apresentação, revisões e aprovação são feitos online. A distância não muda os entregáveis: estrutura, conteúdo, visual, versão mobile e SEO básico conforme o projeto.';
    } else {
      const zone = data.zones[region];
      panelName.textContent = cityName || zone.name;
      examples.textContent = cityName ? `${cityName}, na área de ${zone.name}. Encontro presencial sujeito à agenda e ao deslocamento; projeto completo também online.` : zone.examples;
      description.textContent = zone.description;
    }
    const place = cityName ? `${cityName}, RS` : region === 'all' ? 'Rio Grande do Sul' : online ? 'RS, com atendimento online' : `${data.zones[region].name}, RS`;
    contact.href = `https://wa.me/5551997890145?text=${encodeURIComponent(`Olá, Thiago. Vi a página da TM21 sobre criação de sites no RS. Meu negócio fica em ${place} e gostaria de conversar sobre um projeto.`)}`;
  };
  controls.addEventListener('click', event => {
    const button = event.target.closest('[data-region]');
    if (!button) return;
    selectRegion(button.dataset.region);
    // Only a fixed region code is tracked; city searches and free text are never sent.
    window.tm21Track?.('region_select', { region: button.dataset.region });
  });
  mapCard.addEventListener('click', event => {
    const path = event.target.closest('[data-map-region]');
    if (!path) return;
    selectRegion(path.dataset.mapRegion);
    const button = controls.querySelector(`[data-region="${path.dataset.mapRegion}"]`);
    button?.focus({ preventScroll: true });
    window.tm21Track?.('region_select', { region: path.dataset.mapRegion });
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    const city = citiesByName.get(normalize(input.value));
    result.classList.toggle('is-match', Boolean(city));
    if (!city) {
      result.textContent = 'Não encontrei esse município do RS. Confira o nome completo nas sugestões ou converse pelo WhatsApp.';
      return;
    }
    input.value = city.name;
    selectRegion(city.zone, city.name);
    result.textContent = city.zone === 'online' ? `${city.name}: atendimento online em todas as etapas do projeto.` : `${city.name}: atendimento online e possibilidade de encontro presencial sob combinação.`;
  });
  let userPaused = false;
  const syncMotion = () => {
    const paused = reduced.matches || userPaused;
    mapCard.classList.toggle('is-paused', paused);
    motion.setAttribute('aria-pressed', String(paused));
    motion.disabled = reduced.matches;
    motion.textContent = reduced.matches ? 'Movimento reduzido' : paused ? 'Retomar animação' : 'Pausar animação';
  };
  motion.addEventListener('click', () => { userPaused = !userPaused; syncMotion(); });
  reduced.addEventListener('change', syncMotion);
  syncMotion();
  document.body.classList.add('rs-enhanced');
  controls.hidden = false;
  motion.hidden = false;
  form.hidden = false;
})();
