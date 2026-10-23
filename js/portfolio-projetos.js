(() => {
  'use strict';

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#navMobile');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function closeMenu() {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
    nav.hidden = true;
    document.body.style.overflow = '';
  }

  toggle?.addEventListener('click', () => {
    if (!nav) return;
    const isOpen = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    nav.hidden = !isOpen;
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  window.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 900) closeMenu(); });

  const buttons = [...document.querySelectorAll('.filter')];
  const search = document.querySelector('#projectSearch');
  const cards = [...document.querySelectorAll('#catalogueGrid .project-card')];
  const empty = document.querySelector('#noResults');
  let active = 'all';

  const updateFilter = () => {
    const query = (search?.value || '').trim().toLocaleLowerCase('pt-BR');
    let visible = 0;
    cards.forEach((card) => {
      const matches = (active === 'all' || card.dataset.type === active)
        && (!query || (card.dataset.search || '').includes(query));
      card.hidden = !matches;
      if (matches) visible++;
    });
    if (empty) empty.hidden = visible > 0;
  };
  buttons.forEach((button) => button.addEventListener('click', () => {
    active = button.dataset.filter;
    buttons.forEach((item) => {
      const on = item === button;
      item.classList.toggle('is-active', on);
      item.setAttribute('aria-pressed', String(on));
    });
    updateFilter();
  }));
  search?.addEventListener('input', updateFilter);

  // Motion is progressively enhanced: without JS everything remains visible.
  const reveals = [...document.querySelectorAll('.reveal')];
  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.07, rootMargin: '0px 0px -7% 0px' });
    reveals.forEach(el => observer.observe(el));
    document.body.classList.add('js-motion');
  }
})();
