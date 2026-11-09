(() => {
  'use strict';
  const buttons = [...document.querySelectorAll('.sp-filter')];
  const cards = [...document.querySelectorAll('#spGrid .sp-card')];
  const search = document.querySelector('#spSearch');
  const count = document.querySelector('#spCount');
  const empty = document.querySelector('#spEmpty');
  let active = 'all';
  const normal = (str) => (str || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR');
  function filter() {
    const q = normal(search?.value.trim());
    let n = 0;
    cards.forEach(card => {
      const matches = (active === 'all' || card.dataset.segment === active || card.dataset.kind === active) && (!q || normal(card.dataset.search).includes(q));
      card.hidden = !matches;
      if (matches) n++;
    });
    count.textContent = `Exibindo ${n} ${n === 1 ? 'projeto' : 'projetos'}${active === 'real' ? ' nesta lista; Matte & Martins está em destaque acima' : ''}`;
    empty.hidden = n > 0;
  }
  buttons.forEach(btn => btn.addEventListener('click', () => {
    active = btn.dataset.filter;
    buttons.forEach(b => { const selected = b === btn; b.classList.toggle('is-active',selected); b.setAttribute('aria-pressed',String(selected)); });
    filter();
  }));
  search?.addEventListener('input', filter);
  filter();
})();
