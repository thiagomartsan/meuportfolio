(() => {
  const search = document.querySelector('#blogSearch');
  const filters = [...document.querySelectorAll('[data-blog-filter]')];
  const entries = [...document.querySelectorAll('[data-blog-entry]')];
  const empty = document.querySelector('#blogEmpty');
  if (!entries.length) return;

  let topic = 'all';
  const normalize = (value = '') => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

  function applyFilters() {
    const query = normalize(search?.value || '');
    let visible = 0;
    entries.forEach((entry) => {
      const entryTopic = entry.dataset.topic || '';
      const haystack = normalize(entry.dataset.search || entry.textContent);
      const matchTopic = topic === 'all' || entryTopic === topic;
      const matchQuery = !query || haystack.includes(query);
      const show = matchTopic && matchQuery;
      entry.hidden = !show;
      if (show) visible += 1;
    });
    if (empty) empty.hidden = visible !== 0;
  }

  filters.forEach((button) => {
    button.addEventListener('click', () => {
      topic = button.dataset.blogFilter || 'all';
      filters.forEach((item) => {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      applyFilters();
    });
  });

  search?.addEventListener('input', applyFilters);
  filters.forEach((button) => button.setAttribute('aria-pressed', String(button.classList.contains('is-active'))));
})();
