(() => {
  'use strict';
  const root = document.querySelector('.sites-portfolio');
  if (!root) return;
  const buttons = [...root.querySelectorAll('.sp-filter')];
  const cards = [...root.querySelectorAll('.sp-project')];
  const search = root.querySelector('#spSearch');
  const count = root.querySelector('#spCount');
  const empty = root.querySelector('#spEmpty');
  let active = 'all';
  const normalize = (s) => (s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR');

  const update = () => {
    const query = normalize(search?.value.trim());
    let visible = 0;
    cards.forEach((card) => {
      const kind = card.dataset.kind;
      const segment = card.dataset.segment;
      const matchFilter = active === 'all' || active === kind || active === segment || (active === 'demo' && (kind === 'demo' || kind === 'concept'));
      const matchQuery = !query || normalize(card.dataset.search).includes(query);
      card.hidden = !(matchFilter && matchQuery);
      if (!card.hidden) visible++;
    });
    if (count) count.textContent = `${visible} ${visible === 1 ? 'projeto' : 'projetos'} nesta seleção`;
    if (empty) empty.hidden = visible !== 0;
  };
  buttons.forEach((button) => button.addEventListener('click', () => {
    active = button.dataset.filter;
    buttons.forEach((b) => {
      const isCurrent = b === button;
      b.classList.toggle('is-active', isCurrent);
      b.setAttribute('aria-pressed', String(isCurrent));
    });
    update();
  }));
  search?.addEventListener('input', update);
  update();

  // Movement is progressive enhancement: without JS, every section stays visible.
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold:0.06,rootMargin:'0px 0px 65px 0px'});
    root.querySelectorAll('.sp-reveal').forEach((el) => observer.observe(el));
    root.classList.add('sp-animate');
  }
})();
