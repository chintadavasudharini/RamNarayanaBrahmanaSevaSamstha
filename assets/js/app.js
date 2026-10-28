/**
 * Main Application Logic for Ram Narayana Brahmana Seva Samstha / Matham
 * Features:
 * - Language Switcher with Dropdown Menu (Telugu / English)
 * - Navigation Services Dropdown (Desktop & Mobile Drawer)
 * - Lightbox Image Modal
 * - Mobile Navigation Drawer
 * - Smooth Scrolling & Back to Top
 */

document.addEventListener('DOMContentLoaded', () => {
  // Ensure pristine light theme
  document.documentElement.removeAttribute('data-theme');
  localStorage.removeItem('rnbs_theme');

  initLanguage();
  initDropdowns();
  initMobileNav();
  initScrollEffects();
  initLightbox();
  initRitualForm();
});

/* ==========================================================================
   2. Language Management (Telugu / English)
   ========================================================================== */
function initLanguage() {
  const langDropdownWrapper = document.querySelector('.lang-dropdown-wrapper');
  const langDropdownBtn = document.getElementById('langDropdownBtn');
  const langOptionBtns = document.querySelectorAll('.lang-option-btn');
  const storedLang = localStorage.getItem('rnbs_lang') || 'te';
  
  setLanguage(storedLang);

  if (langDropdownBtn && langDropdownWrapper) {
    langDropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = langDropdownWrapper.classList.toggle('open');
      langDropdownBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  langOptionBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
      if (langDropdownWrapper) {
        langDropdownWrapper.classList.remove('open');
        langDropdownBtn?.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Mobile quick action bar language toggle
  const mobileLangBtn = document.querySelector('.mobile-action-bar .lang-toggle-btn');
  if (mobileLangBtn) {
    mobileLangBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const current = document.documentElement.getAttribute('lang') || 'te';
      setLanguage(current === 'te' ? 'en' : 'te');
    });
  }

  // Close language dropdown on outside click
  document.addEventListener('click', (e) => {
    if (langDropdownWrapper && !langDropdownWrapper.contains(e.target)) {
      langDropdownWrapper.classList.remove('open');
      langDropdownBtn?.setAttribute('aria-expanded', 'false');
    }
  });
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  
  document.documentElement.setAttribute('lang', lang);
  localStorage.setItem('rnbs_lang', lang);

  if (lang === 'te') {
    document.title = "రామ్ నారాయణ బ్రాహ్మణ సేవా సంస్థ - దిల్సుఖ్నగర్, హైదరాబాద్";
  } else {
    document.title = "Ram Narayana Brahmana Seva Samstha - Dilsukhnagar, Hyderabad";
  }

  const dict = translations[lang];

  // Update text content for elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update HTML content for elements with data-i18n-html
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update image source for elements with data-i18n-src
  document.querySelectorAll('[data-i18n-src]').forEach(el => {
    const key = el.getAttribute('data-i18n-src');
    if (dict[key]) {
      el.src = dict[key];
    }
  });

  // Update alt text for elements with data-i18n-alt
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.getAttribute('data-i18n-alt');
    if (dict[key]) {
      el.alt = dict[key];
    }
  });

  // Update placeholders for inputs with data-i18n-ph
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // Update language trigger text & active options
  document.querySelectorAll('.lang-btn-text').forEach(el => {
    el.textContent = lang === 'te' ? 'తెలుగు' : 'English';
  });

  document.querySelectorAll('.lang-option-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

/* ==========================================================================
   3. Dropdown Menus Management (Desktop & Mobile)
   ========================================================================== */
function initDropdowns() {
  // Mobile Drawer Services Submenu Toggle
  const drawerServicesBtn = document.getElementById('drawerServicesBtn');
  const drawerDropdownItem = drawerServicesBtn?.closest('.drawer-dropdown-item');

  if (drawerServicesBtn && drawerDropdownItem) {
    drawerServicesBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = drawerDropdownItem.classList.toggle('open');
      drawerServicesBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Desktop Services Dropdown Hover/Touch
  const navDropdown = document.querySelector('.nav-dropdown-item');
  const dropdownToggle = document.getElementById('servicesDropdownLink');

  if (navDropdown && dropdownToggle) {
    dropdownToggle.addEventListener('click', (e) => {
      if (window.innerWidth < 1140) {
        e.preventDefault();
        navDropdown.classList.toggle('open');
      }
    });

    document.addEventListener('click', (e) => {
      if (!navDropdown.contains(e.target)) {
        navDropdown.classList.remove('open');
      }
    });
  }

  // Close all open dropdowns on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelector('.lang-dropdown-wrapper')?.classList.remove('open');
      document.querySelector('.nav-dropdown-item')?.classList.remove('open');
    }
  });
}

/* ==========================================================================
   4. Mobile Navigation Drawer
   ========================================================================== */
function initMobileNav() {
  const menuToggle = document.querySelector('.mobile-menu-btn');
  const navDrawer = document.querySelector('.nav-drawer');
  const drawerOverlay = document.querySelector('.drawer-overlay');
  const navLinks = document.querySelectorAll('.nav-drawer a');

  function openDrawer() {
    navDrawer.classList.add('active');
    drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    navDrawer.classList.remove('active');
    drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      if (navDrawer.classList.contains('active')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', closeDrawer);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ==========================================================================
   4. Scroll Effects, Sticky Header, ScrollSpy & Back to Top
   ========================================================================== */
function initScrollEffects() {
  const header = document.querySelector('.site-header');
  const backToTopBtn = document.querySelector('.back-to-top');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const sections = document.querySelectorAll('section[id], #home');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Sticky header transition
    if (header) {
      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Back to top visibility - on mobile, only show after scrolling well past hero CTAs
    if (backToTopBtn) {
      const threshold = window.innerWidth < 768 ? 750 : 400;
      if (scrollY > threshold) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // ScrollSpy active link highlight
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

/* ==========================================================================
   5. Image Lightbox for Visiting Cards & Pamphlets
   ========================================================================== */
function initLightbox() {
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeBtn = document.querySelector('.lightbox-close');
  const galleryItems = document.querySelectorAll('.gallery-card img, .gallery-zoom-btn');

  function openLightbox(src, caption) {
    if (!lightboxModal || !lightboxImg) return;
    lightboxImg.src = src;
    if (lightboxCaption) lightboxCaption.textContent = caption || '';
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  galleryItems.forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const card = el.closest('.gallery-card') || el.closest('.about-image-card') || el.closest('.card-emblem-frame');
      const img = card ? card.querySelector('img') : el;
      if (img) {
        const title = card?.querySelector('h3')?.textContent || img.alt;
        openLightbox(img.src, title);
      }
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });
}

/* ==========================================================================
   Ritual Intake Form Logic (WhatsApp & Copy)
   ========================================================================== */
function initRitualForm() {
  const form = document.getElementById('ritualIntakeForm');
  const btnWhatsApp = document.getElementById('btnSendWhatsApp');
  const btnCopy = document.getElementById('btnCopyDetails');
  const toast = document.getElementById('formToast');

  if (!form || !btnWhatsApp) return;

  function buildMessage() {
    const lang = document.documentElement.getAttribute('lang') || 'te';
    const name = document.getElementById('rf_name')?.value.trim() || '__________';
    const ancestor = document.getElementById('rf_ancestor')?.value.trim() || '__________';
    const relation = document.getElementById('rf_relation')?.value || '__________';
    const ritual = document.getElementById('rf_ritual')?.value || '__________';
    const tithi = document.getElementById('rf_tithi')?.value.trim() || '__________';
    const masikamMonth = document.getElementById('rf_masikam_month')?.value || '__________';
    const gotram = document.getElementById('rf_gotram')?.value.trim() || '__________';
    const kartha = document.getElementById('rf_kartha')?.value.trim() || '__________';
    const attendees = document.getElementById('rf_attendees')?.value.trim() || '__________';
    const dateTime = document.getElementById('rf_date_time')?.value.trim() || '__________';
    const special = document.getElementById('rf_special')?.value.trim() || (lang === 'en' ? 'None' : 'ఏమీ లేవు');

    if (lang === 'en') {
      return `🙏 Namaskaram.
Heartfelt thanks for contacting Ram Narayana Brahmana Seva Samstha.

Details Required for Ancestral Rituals:
1. Your Name: ${name}
2. Ancestor's Name: ${ancestor}
3. Relationship to Ancestor: ${relation}
4. Ritual to be Performed: ${ritual}
5. Departure Tithi / Date: ${tithi}
6. If Masikam — Month: ${masikamMonth}
7. Gotram: ${gotram}
8. Performer (Kartha) Name: ${kartha}
9. Number of Attendees: ${attendees}
10. Preferred Date & Time: ${dateTime}
11. Special Requirements: ${special}

We kindly request you to review the above details and guide us with the procedure, auspicious date/time, dakshina, and arrangements.

🙏 Dhanyavadhalu.
Ram Narayana Brahmana Seva Samstha`;
    } else {
      return `🙏 నమస్కారం.
రామ్ నారాయణ బ్రాహ్మణ సేవా సంస్థను సంప్రదించినందుకు హృదయపూర్వక ధన్యవాదాలు.

కర్మ నిర్వహణకు అవసరమైన వివరాలు:
1. మీ పేరు: ${name}
2. పితృదేవత పేరు: ${ancestor}
3. పితృదేవతకు మీ సంబంధం: ${relation}
4. నిర్వహించవలసిన కర్మ: ${ritual}
5. మరణించిన తిథి/తేదీ: ${tithi}
6. మాసికం అయితే — ఎన్నో నెల: ${masikamMonth}
7. గోత్రం: ${gotram}
8. కర్మ నిర్వహించే కర్త పేరు: ${kartha}
9. కర్మకు హాజరయ్యే వారి సంఖ్య: ${attendees}
10. మీకు అనుకూలమైన తేదీ & సమయం: ${dateTime}
11. ప్రత్యేక అవసరాలు: ${special}

మీరు అందించిన వివరాలను పరిశీలించిన అనంతరం, మీ కర్మకు అనుగుణంగా కర్మ విధానం, తేదీ, సమయం, స్థలం, ఖర్చు మరియు ఇతర అవసరమైన ఏర్పాట్లకు సంబంధించిన పూర్తి వివరాలను మాకు తెలియజేయగలరు.

🙏 ధన్యవాదాలు.
రామ్ నారాయణ బ్రాహ్మణ సేవా సంస్థ`;
    }
  }

  btnWhatsApp.addEventListener('click', () => {
    const msg = buildMessage();
    const encoded = encodeURIComponent(msg);
    const url = `https://wa.me/917780223977?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });

  if (btnCopy) {
    btnCopy.addEventListener('click', () => {
      const msg = buildMessage();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(msg).then(() => {
          showToast();
        }).catch(() => {
          fallbackCopy(msg);
        });
      } else {
        fallbackCopy(msg);
      }
    });
  }

  function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showToast();
    } catch (e) {
      console.warn('Copy failed', e);
    }
    document.body.removeChild(ta);
  }

  function showToast() {
    if (!toast) return;
    const lang = document.documentElement.getAttribute('lang') || 'te';
    const dict = translations[lang] || {};
    toast.textContent = dict['form_copied_msg'] || (lang === 'en' ? 'Details copied to clipboard!' : 'వివరాలు కాపీ అయ్యాయి!');
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }
}
