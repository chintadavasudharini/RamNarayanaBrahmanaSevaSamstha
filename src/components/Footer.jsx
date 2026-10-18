import React from 'react';
import { ArrowUp, Sparkles, Instagram } from 'lucide-react';

export default function Footer({ lang, t }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-temple-deep text-white border-t-2 border-temple-gold/40 relative overflow-hidden">
      
      {/* Decorative top gold gradient accent */}
      <div className="h-1 bg-gradient-to-r from-temple-gold via-amber-200 to-temple-gold"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Info Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full p-0.5 bg-temple-gold flex-shrink-0">
                <img 
                  src="assets/images/logo.jpg" 
                  alt="రామ్ నారాయణ బ్రాహ్మణ సేవా సంస్థ లోగో" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-amber-200 leading-snug">
                  {t.hero_title_main}
                </h3>
                <span className="text-xs text-temple-gold block">
                  {t.hero_badge}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              {t.footer_desc}
            </p>

            {/* Sacred Chants */}
            <div className="space-y-1.5 pt-2 text-xs text-amber-300/90 font-medium">
              <div className="flex items-center gap-2">
                <span>🕉️</span>
                <span>{t.top_invocation}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✨</span>
                <span>{t.top_vedoktam}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🪔</span>
                <span>{t.top_motto}</span>
              </div>
            </div>

            {/* Official Instagram Connection */}
            <div className="pt-2">
              <a
                href="https://www.instagram.com/ramnarayana_brahmana_seva?xtok=MTAwMWFiY245OWJrcQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-gradient-to-r hover:from-purple-900/80 hover:via-pink-900/80 hover:to-amber-900/80 border border-pink-400/40 text-xs font-semibold text-white transition group shadow-sm"
                title="Instagram: Ram Narayana Brahmana Seva Samastha (@ramnarayana_brahmana_seva)"
              >
                <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white flex-shrink-0 shadow">
                  <Instagram className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-amber-200 text-[11px] leading-tight">Ram Narayana Brahmana Seva Samastha</div>
                  <div className="text-[10px] text-pink-300 font-normal">@ramnarayana_brahmana_seva</div>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-temple-gold-light uppercase tracking-wider">
              {t.footer_quick_links}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/80">
              <li><a href="#home" className="hover:text-temple-gold transition">{t.nav_home}</a></li>
              <li><a href="#about" className="hover:text-temple-gold transition">{t.nav_about}</a></li>
              <li><a href="#services" className="hover:text-temple-gold transition">{t.nav_services}</a></li>
              <li><a href="#rituals-guide" className="hover:text-temple-gold transition">{lang === 'te' ? 'కర్మల మార్గదర్శి' : 'Ritual Guide'}</a></li>
              <li><a href="#benefits" className="hover:text-temple-gold transition">{t.nav_benefits}</a></li>
              <li><a href="#why-us" className="hover:text-temple-gold transition">{t.nav_why_us}</a></li>
              <li><a href="#gallery" className="hover:text-temple-gold transition">{t.nav_gallery}</a></li>
              <li><a href="#contact" className="hover:text-temple-gold transition">{t.nav_contact}</a></li>
              <li>
                <a 
                  href="https://www.instagram.com/ramnarayana_brahmana_seva?xtok=MTAwMWFiY245OWJrcQ==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-pink-300 transition inline-flex items-center gap-1.5 text-pink-200/90 font-medium"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-sm text-temple-gold-light uppercase tracking-wider">
              {t.footer_services}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/80">
              <li><a href="#services" className="hover:text-temple-gold transition">🕉️ {t.srv_1_name}</a></li>
              <li><a href="#services" className="hover:text-temple-gold transition">🍲 {t.srv_2_name}</a></li>
              <li><a href="#services" className="hover:text-temple-gold transition">🕯️ {t.srv_3_name}</a></li>
              <li><a href="#services" className="hover:text-temple-gold transition">🍱 {t.srv_4_name}</a></li>
            </ul>

            <div className="pt-4">
              <div className="p-3.5 rounded-xl bg-black/40 border border-temple-gold/30 text-xs text-amber-200">
                <span className="font-bold text-white block mb-1">🏛️ {t.hero_founder}</span>
                <span>దిల్సుఖ్నగర్, హైదరాబాద్, తెలంగాణ.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-temple-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-white/70">
          <div>
            &copy; {new Date().getFullYear()} {t.footer_rights}
          </div>
          <div className="text-amber-300 font-medium">
            {t.footer_developed}
          </div>
        </div>

      </div>

      {/* Back to Top Floating Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-20 sm:bottom-8 right-4 sm:right-8 z-30 p-3 rounded-full bg-temple-gold text-temple-deep shadow-gold-glow hover:scale-110 active:scale-95 transition"
        title="Scroll to Top"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 font-bold" />
      </button>

    </footer>
  );
}
