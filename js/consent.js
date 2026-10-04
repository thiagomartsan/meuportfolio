(() => {
  'use strict';

  const STORAGE_KEY = 'tm21_cookie_choice';
  const GA_ID = 'G-1WBRRW7W12';
  let analyticsLoaded = false;

  const getChoice = () => {
    try { return localStorage.getItem(STORAGE_KEY); } catch (error) { return null; }
  };

  const saveChoice = (choice) => {
    try { localStorage.setItem(STORAGE_KEY, choice); } catch (error) {}
  };

  const loadAnalytics = () => {
    if (analyticsLoaded || document.querySelector(`script[data-tm21-ga="${GA_ID}"]`)) return;
    analyticsLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.dataset.tm21Ga = GA_ID;
    document.head.appendChild(script);
  };

  const buildBanner = () => {
    if (document.querySelector('.cookie-banner')) return;
    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-live', 'polite');
    banner.setAttribute('aria-label', 'Preferências de cookies');
    banner.innerHTML = `
      <div class="cookie-banner__copy">
        <strong>Cookies e medição</strong>
        <p>Uso cookies de análise para entender como o site é encontrado e utilizado. Você pode aceitar a medição ou continuar apenas com os recursos necessários.</p>
        <a href="/privacidade/">Política de Privacidade</a>
      </div>
      <div class="cookie-banner__actions">
        <button type="button" class="cookie-banner__secondary" data-cookie-choice="necessary">Somente necessários</button>
        <button type="button" class="cookie-banner__primary" data-cookie-choice="analytics">Aceitar análise</button>
      </div>`;
    document.body.appendChild(banner);

    requestAnimationFrame(() => banner.classList.add('is-visible'));

    banner.querySelectorAll('[data-cookie-choice]').forEach((button) => {
      button.addEventListener('click', () => {
        const choice = button.dataset.cookieChoice;
        saveChoice(choice);
        if (choice === 'analytics') loadAnalytics();
        banner.classList.remove('is-visible');
        window.setTimeout(() => banner.remove(), 260);
      });
    });
  };

  const openPreferences = () => {
    const current = document.querySelector('.cookie-banner');
    if (current) {
      current.classList.add('is-visible');
      current.querySelector('button')?.focus();
      return;
    }
    buildBanner();
  };

  window.tm21CookiePreferences = openPreferences;

  const choice = getChoice();
  if (choice === 'analytics') loadAnalytics();

  document.addEventListener('DOMContentLoaded', () => {
    if (!choice) buildBanner();
    document.addEventListener('click', (event) => {
      const trigger = event.target.closest('[data-cookie-settings]');
      if (!trigger) return;
      event.preventDefault();
      openPreferences();
    });
  });
})();
