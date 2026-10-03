(() => {
  'use strict';

  const TRACKING_ID = 'G-1WBRRW7W12';

  const cleanText = (value = '') => value.replace(/\s+/g, ' ').trim().slice(0, 100);

  const getLocationLabel = (element) => {
    const section = element.closest('section[id], header, footer, .mobile-menu, .project');
    if (!section) return 'page';
    if (section.id) return section.id;
    if (section.matches('header')) return 'header';
    if (section.matches('footer')) return 'footer';
    if (section.matches('.mobile-menu')) return 'mobile_menu';
    if (section.matches('.project')) return 'portfolio';
    return 'page';
  };

  const getProjectName = (element) => {
    const project = element.closest('.project');
    if (!project) return '';
    return cleanText(project.querySelector('h3')?.textContent || '');
  };

  const track = (eventName, params = {}) => {
    if (typeof window.gtag !== 'function') return;

    window.gtag('event', eventName, {
      page_path: window.location.pathname,
      page_title: document.title,
      ...params
    });
  };

  // Expose a small, privacy-conscious tracking helper to the rest of the site.
  // Never pass names, emails, phone numbers or free-text messages as event parameters.
  window.tm21Track = track;

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href]');
    if (!link) return;

    const href = link.href || '';
    const linkText = cleanText(link.textContent || link.getAttribute('aria-label') || '');
    const ctaLocation = getLocationLabel(link);

    if (/wa\.me\//i.test(href) || /api\.whatsapp\.com/i.test(href)) {
      track('click_whatsapp', {
        link_text: linkText,
        cta_location: ctaLocation
      });
      return;
    }

    if (href.startsWith('mailto:')) {
      track('click_email', {
        link_text: linkText,
        cta_location: ctaLocation
      });
      return;
    }

    if (/linkedin\.com/i.test(href)) {
      track('click_linkedin', {
        link_text: linkText,
        cta_location: ctaLocation
      });
      return;
    }

    const projectName = getProjectName(link);
    if (projectName && /^https?:/i.test(href)) {
      track('view_project', {
        project_name: projectName,
        link_text: linkText
      });
    }
  });

  window.addEventListener('tm21:form_success', (event) => {
    const leadType = cleanText(event.detail?.leadType || 'site_contact');

    // Recommended GA4 event for a real form submission / information request.
    track('generate_lead', {
      method: 'contact_form',
      lead_type: leadType
    });

    track('form_submit_success', {
      form_id: 'contactForm',
      lead_type: leadType
    });
  });

  window.addEventListener('tm21:form_error', () => {
    track('form_submit_error', {
      form_id: 'contactForm'
    });
  });

  if (document.body?.dataset.pageType === 'not_found') {
    track('page_not_found', {
      requested_path: window.location.pathname
    });
  }
})();
