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
      if (window.innerWidth < 1240) {
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

    // Back to top visibility
    if (backToTopBtn) {
      if (scrollY > 400) {
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
