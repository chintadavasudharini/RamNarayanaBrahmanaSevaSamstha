import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Flame, 
  Calendar,
  Sparkles,
  Palette,
  Instagram
} from 'lucide-react';

export default function Navbar({ lang, setLang, t, onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const nextLang = lang === 'te' ? 'en' : 'te';
    setLang(nextLang);
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-temple-deep/95 backdrop-blur-md shadow-lg border-b border-temple-gold/30 py-2' 
        : 'bg-temple-deep text-white border-b border-temple-gold/25 py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Title */}
        <a href="#home" className="flex items-center gap-3 group text-left">
          <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full p-0.5 bg-gradient-to-tr from-temple-gold via-amber-200 to-temple-gold shadow-gold-glow flex-shrink-0 group-hover:scale-105 transition duration-300">
            <img 
              src="assets/images/logo.jpg" 
              alt="రామ్ నారాయణ బ్రాహ్మణ సేవా సంస్థ లోగో" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-sm sm:text-base md:text-lg font-bold tracking-wide text-white group-hover:text-temple-gold-light transition leading-tight">
              {t.hero_title_main}
            </span>
            <span className="text-[11px] sm:text-xs text-temple-gold font-medium tracking-wide">
              {t.hero_badge}
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <a href="#home" className="text-white/90 hover:text-temple-gold transition hover:-translate-y-0.5">
            {t.nav_home}
          </a>
          <a href="#about" className="text-white/90 hover:text-temple-gold transition hover:-translate-y-0.5">
            {t.nav_about}
          </a>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <a 
              href="#services" 
              className="flex items-center gap-1 text-white/90 hover:text-temple-gold transition py-1"
            >
              <span>{t.nav_services}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-temple-gold' : ''}`} />
            </a>

            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 w-64 bg-temple-dark border border-temple-gold/40 rounded-xl shadow-2xl p-2 z-50 text-xs backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
                <a href="#services" className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-white/10 text-white/90 hover:text-temple-gold transition">
                  <span className="text-base">🕉️</span>
                  <span>{t.srv_1_name}</span>
                </a>
                <a href="#services" className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-white/10 text-white/90 hover:text-temple-gold transition">
                  <span className="text-base">🍲</span>
                  <span>{t.srv_2_name}</span>
                </a>
                <a href="#services" className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-white/10 text-white/90 hover:text-temple-gold transition">
                  <span className="text-base">🕯️</span>
                  <span>{t.srv_3_name}</span>
                </a>
                <a href="#services" className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-white/10 text-white/90 hover:text-temple-gold transition">
                  <span className="text-base">🍱</span>
                  <span>{t.srv_4_name}</span>
                </a>
              </div>
            )}
          </div>

          <a href="#rituals-guide" className="text-white/90 hover:text-temple-gold transition hover:-translate-y-0.5">
            {lang === 'te' ? 'కర్మల మార్గదర్శి' : 'Rituals Guide'}
          </a>
          <a href="#benefits" className="text-white/90 hover:text-temple-gold transition hover:-translate-y-0.5">
            {t.nav_benefits}
          </a>
          <a href="#themes" className="text-amber-300 hover:text-white transition hover:-translate-y-0.5 flex items-center gap-1">
            <Palette className="w-3.5 h-3.5" />
            <span>{lang === 'te' ? 'వర్ణ థీమ్స్' : 'Themes'}</span>
          </a>
          <a href="#gallery" className="text-white/90 hover:text-temple-gold transition hover:-translate-y-0.5">
            {t.nav_gallery}
          </a>
          <a href="#contact" className="text-white/90 hover:text-temple-gold transition hover:-translate-y-0.5">
            {t.nav_contact}
          </a>
        </nav>

        {/* Action Buttons: Language Switcher & Quick Booking */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language Switch Button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-temple-gold/40 hover:border-temple-gold bg-black/25 hover:bg-black/40 text-xs font-semibold text-temple-gold-light transition shadow-sm"
            title="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-temple-gold" />
            <span>{lang === 'te' ? 'English' : 'తెలుగు'}</span>
          </button>

          {/* Direct Consultation / Booking CTA */}
          <button
            onClick={onOpenBooking}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-temple-gold via-amber-300 to-temple-gold text-temple-deep font-bold text-xs shadow-gold-glow hover:brightness-110 active:scale-95 transition"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'te' ? 'విచారణ / బుకింగ్' : 'Ritual Inquiry'}</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="px-2.5 py-1 rounded-full border border-temple-gold/40 text-xs font-medium text-temple-gold-light"
          >
            {lang === 'te' ? 'EN' : 'తె'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-temple-gold focus:outline-none"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-temple-gold" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-temple-deep/98 border-t border-temple-gold/30 px-5 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-4">
          <div className="flex items-center justify-between pb-3 border-b border-temple-gold/20">
            <span className="text-xs text-temple-gold-light font-medium">
              {t.top_invocation}
            </span>
            <button
              onClick={() => {
                toggleLanguage();
                setMobileMenuOpen(false);
              }}
              className="text-xs px-2.5 py-1 rounded-md border border-temple-gold/50 text-temple-gold font-semibold"
            >
              {lang === 'te' ? 'Switch to English' : 'తెలుగులోకి మార్చండి'}
            </button>
          </div>

          <div className="flex flex-col space-y-3 text-sm font-medium">
            <a 
              href="#home" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-white hover:text-temple-gold py-1"
            >
              {t.nav_home}
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-white hover:text-temple-gold py-1"
            >
              {t.nav_about}
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-white hover:text-temple-gold py-1"
            >
              {t.nav_services}
            </a>
            <a 
              href="#rituals-guide" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-white hover:text-temple-gold py-1"
            >
              {lang === 'te' ? 'కర్మల మార్గదర్శి' : 'Rituals Guide'}
            </a>
            <a 
              href="#themes" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-amber-300 hover:text-white py-1 flex items-center gap-1.5 font-bold"
            >
              <Palette className="w-4 h-4" />
              <span>{lang === 'te' ? 'వర్ణ థీమ్స్ (Themes)' : 'Color Themes'}</span>
            </a>
            <a 
              href="#benefits" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-white hover:text-temple-gold py-1"
            >
              {t.nav_benefits}
            </a>
            <a 
              href="#why-us" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-white hover:text-temple-gold py-1"
            >
              {t.nav_why_us}
            </a>
            <a 
              href="#gallery" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-white hover:text-temple-gold py-1"
            >
              {t.nav_gallery}
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-white hover:text-temple-gold py-1"
            >
              {t.nav_contact}
            </a>
          </div>

          <div className="pt-3 border-t border-temple-gold/20 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-temple-gold via-amber-300 to-temple-gold text-temple-deep font-bold text-sm shadow-gold-glow flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'te' ? 'పూజా విచారణ / బుకింగ్' : 'Ritual Inquiry / Booking'}</span>
            </button>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <a 
                href="tel:7780223977" 
                className="py-2 rounded-lg bg-temple-maroon border border-temple-gold/40 text-white font-medium flex items-center justify-center gap-1"
              >
                <Phone className="w-3.5 h-3.5 text-temple-gold" />
                <span className="truncate">{lang === 'te' ? 'కాల్' : 'Call'}</span>
              </a>
              <a 
                href="https://wa.me/917780223977" 
                target="_blank" 
                rel="noopener noreferrer"
                className="py-2 rounded-lg bg-emerald-700/80 border border-emerald-500 text-white font-medium flex items-center justify-center gap-1"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span className="truncate">{lang === 'te' ? 'వాట్సాప్' : 'WhatsApp'}</span>
              </a>
              <a 
                href="https://www.instagram.com/ramnarayana_brahmana_seva?xtok=MTAwMWFiY245OWJrcQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="py-2 rounded-lg bg-gradient-to-r from-purple-700 via-pink-600 to-amber-600 border border-pink-400/50 text-white font-medium flex items-center justify-center gap-1"
                title="Instagram: Ram Narayana Brahmana Seva Samastha"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-200" />
                <span className="truncate">ఇన్‌స్టా</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}