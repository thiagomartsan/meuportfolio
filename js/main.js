(() => {
  'use strict';

  const root = document.documentElement;
  const body = document.body;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const qs = (selector, context = document) => context.querySelector(selector);
  const qsa = (selector, context = document) => [...context.querySelectorAll(selector)];

  // Preloader, shown only once per session.
  const preloader = qs('#preloader');
  const preloaderSeen = root.dataset.preloader === 'seen';

  if (preloader) {
    if (reduceMotion || preloaderSeen) {
      preloader.classList.add('is-hidden');
      root.dataset.preloader = 'seen';
    } else {
      window.setTimeout(() => {
        preloader.classList.add('is-hidden');
        root.dataset.preloader = 'seen';
        try {
          sessionStorage.setItem('tm21-preloader-seen', '1');
        } catch (error) {}
      }, window.innerWidth <= 720 ? 220 : 460);
    }
  }

  // Header state.
  const header = qs('#siteHeader');
  const syncHeader = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  };
  syncHeader();
  window.addEventListener('scroll', syncHeader, { passive: true });

  // Mobile menu.
  const menuToggle = qs('.menu-toggle');
  const mobileMenu = qs('#mobileMenu');

  const setMenu = (open) => {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    mobileMenu.setAttribute('aria-hidden', String(!open));
    mobileMenu.classList.toggle('is-open', open);
    body.style.overflow = open ? 'hidden' : '';
  };

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
    });

    qsa('a', mobileMenu).forEach((link) => {
      link.addEventListener('click', () => setMenu(false));
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        menuToggle.focus();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 960) setMenu(false);
    });
  }

  // Reveal elements.
  const revealItems = qsa('.reveal-item, .reveal-title');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

    revealItems.forEach((item, index) => {
      item.style.transitionDelay = `${Math.min((index % 4) * 55, 165)}ms`;
      revealObserver.observe(item);
    });
  }

  // Floating WhatsApp appears after the hero.
  const whatsappFloat = qs('.whatsapp-float');
  const hero = qs('.hero');
  if (whatsappFloat && hero && 'IntersectionObserver' in window) {
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        whatsappFloat.classList.toggle('is-visible', !entry.isIntersecting);
      });
    }, { threshold: 0.15 });
    heroObserver.observe(hero);
  } else if (whatsappFloat) {
    whatsappFloat.classList.add('is-visible');
  }

  // Hero collage subtle pointer depth on desktop.
  const heroCollage = qs('#heroCollage');
  if (heroCollage && !reduceMotion && window.matchMedia('(pointer:fine)').matches) {
    let rafId = null;
    let targetX = 0;
    let targetY = 0;
    let collageRect = null;

    const updateCollageRect = () => {
      collageRect = heroCollage.getBoundingClientRect();
    };

    const paintHeroDepth = () => {
      qsa('[data-depth]', heroCollage).forEach((shot) => {
        const depth = Number(shot.dataset.depth || 1);
        shot.style.setProperty('--mx', `${targetX * depth}px`);
        shot.style.setProperty('--my', `${targetY * depth}px`);
      });
      rafId = null;
    };

    heroCollage.addEventListener('pointerenter', updateCollageRect);
    window.addEventListener('resize', updateCollageRect, { passive: true });

    heroCollage.addEventListener('pointermove', (event) => {
      if (!collageRect) updateCollageRect();
      targetX = ((event.clientX - collageRect.left) / collageRect.width - 0.5) * 8;
      targetY = ((event.clientY - collageRect.top) / collageRect.height - 0.5) * 8;
      if (!rafId) rafId = requestAnimationFrame(paintHeroDepth);
    });

    heroCollage.addEventListener('pointerleave', () => {
      targetX = 0;
      targetY = 0;
      if (!rafId) rafId = requestAnimationFrame(paintHeroDepth);
    });
  }

  // Project accent follows the project currently in view.
  const projectAura = qs('#projectAura');
  const projects = qsa('.project[data-project-color]');
  if (projectAura && projects.length && 'IntersectionObserver' in window) {
    const projectObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible) {
        const accent = visible.target.dataset.projectColor;
        root.style.setProperty('--project-accent', accent);
      }
    }, { threshold: [0.18, 0.35, 0.55, 0.75] });

    projects.forEach((project) => projectObserver.observe(project));
  }

  // Portfolio category switch: pages / platforms.
  const portfolioTabs = qsa('[data-portfolio-target]');
  const portfolioGroups = qsa('[data-portfolio-group]');

  const setPortfolioGroup = (target) => {
    if (!portfolioTabs.length || !portfolioGroups.length) return;

    portfolioTabs.forEach((tab) => {
      const active = tab.dataset.portfolioTarget === target;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });

    portfolioGroups.forEach((group) => {
      const active = group.dataset.portfolioGroup === target;
      group.hidden = !active;
      group.classList.toggle('is-active', active);
    });

    const firstVisibleProject = qs(`[data-portfolio-group="${target}"] .project[data-project-color]`);
    if (firstVisibleProject) {
      root.style.setProperty('--project-accent', firstVisibleProject.dataset.projectColor);
    }
  };

  portfolioTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => setPortfolioGroup(tab.dataset.portfolioTarget));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      const direction = event.key === 'ArrowRight' ? 1 : -1;
      const nextIndex = (index + direction + portfolioTabs.length) % portfolioTabs.length;
      const nextTab = portfolioTabs[nextIndex];
      setPortfolioGroup(nextTab.dataset.portfolioTarget);
      nextTab.focus();
    });
  });

  if (portfolioTabs.length && portfolioGroups.length) {
    const initialTab = portfolioTabs.find((tab) => tab.getAttribute('aria-selected') === 'true') || portfolioTabs[0];
    setPortfolioGroup(initialTab.dataset.portfolioTarget);
  }

  // Timeline progress based on intersection, without continuous scroll calculations.
  const timeline = qs('.timeline');
  if (timeline && 'IntersectionObserver' in window) {
    const items = qsa('.timeline-item', timeline);
    let visibleCount = 0;

    const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          entry.target.dataset.counted = '1';
          visibleCount += 1;
          const progress = Math.min(100, (visibleCount / items.length) * 100);
          timeline.style.setProperty('--timeline-progress', `${progress}%`);
          timeline.style.setProperty('--timeline-progress-y', `${progress}%`);
        }
      });
    }, { threshold: 0.4 });

    items.forEach((item) => timelineObserver.observe(item));
  }

  // Contact form: validate and open the default e-mail client.
  const contactForm = qs('#contactForm');
  const feedback = qs('#formFeedback');

  if (contactForm) {
    const fields = qsa('input, select, textarea', contactForm);

    const markValidity = (field) => {
      const wrapper = field.closest('.field');
      if (!wrapper) return field.checkValidity();
      const valid = field.checkValidity();
      wrapper.classList.toggle('is-invalid', !valid);
      return valid;
    };

    fields.forEach((field) => {
      field.addEventListener('input', () => markValidity(field));
      field.addEventListener('change', () => markValidity(field));
    });

    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      let firstInvalid = null;
      fields.forEach((field) => {
        if (!markValidity(field) && !firstInvalid) firstInvalid = field;
      });

      if (firstInvalid) {
        if (feedback) feedback.textContent = 'Revise os campos obrigatórios antes de continuar.';
        firstInvalid.focus();
        return;
      }

      const data = new FormData(contactForm);
      const subject = `Contato pelo TM21 - ${data.get('subject')}`;
      const bodyLines = [
        `Nome: ${data.get('name')}`,
        `Empresa ou projeto: ${data.get('company') || 'Não informado'}`,
        `E-mail: ${data.get('email')}`,
        `WhatsApp: ${data.get('phone') || 'Não informado'}`,
        `Assunto: ${data.get('subject')}`,
        '',
        'Mensagem:',
        data.get('message')
      ];

      const mailto = `mailto:thiagomartsan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;

      if (feedback) feedback.textContent = 'Abrindo seu aplicativo de e-mail para concluir o envio.';
      window.location.href = mailto;
    });
  }

  // Keep internal anchor jumps clear of the fixed header for browsers that ignore scroll-margin.
  qsa('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = qs(targetId);
      if (!target || reduceMotion) return;
      event.preventDefault();
      const headerOffset = (header?.offsetHeight || 0) + 8;
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();
