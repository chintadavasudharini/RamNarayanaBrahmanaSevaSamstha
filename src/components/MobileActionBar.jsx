import React from 'react';
import { Phone, MessageCircle, MapPin, Globe } from 'lucide-react';

export default function MobileActionBar({ lang, setLang, t }) {
  const toggleLanguage = () => {
    setLang(lang === 'te' ? 'en' : 'te');
  };

  return (
    <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-temple-deep/95 backdrop-blur-md border-t border-temple-gold/40 shadow-2xl py-2 px-3 flex items-center justify-around text-[11px] font-semibold text-white">
      
      {/* Call Button */}
      <a 
        href="tel:7780223977" 
        className="flex flex-col items-center gap-0.5 text-amber-300 hover:text-white"
      >
        <div className="p-1.5 rounded-full bg-temple-maroon border border-temple-gold/40">
          <Phone className="w-4 h-4 text-temple-gold fill-current" />
        </div>
        <span>{t.mob_call}</span>
      </a>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/917780223977" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-0.5 text-emerald-400 hover:text-emerald-300"
      >
        <div className="p-1.5 rounded-full bg-emerald-600 border border-emerald-400">
          <MessageCircle className="w-4 h-4 text-white fill-current" />
        </div>
        <span>{t.mob_whatsapp}</span>
      </a>

      {/* Location Button */}
      <a 
        href="https://maps.app.goo.gl/kL4BedYNx17JEaZs9?g_st=aw" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-0.5 text-white/90 hover:text-white"
      >
        <div className="p-1.5 rounded-full bg-white/10 border border-white/20">
          <MapPin className="w-4 h-4 text-amber-300" />
        </div>
        <span>{t.mob_location}</span>
      </a>

      {/* Language Switch */}
      <button 
        onClick={toggleLanguage}
        className="flex flex-col items-center gap-0.5 text-amber-200"
      >
        <div className="p-1.5 rounded-full bg-black/40 border border-temple-gold/40">
          <Globe className="w-4 h-4 text-temple-gold" />
        </div>
        <span>{lang === 'te' ? 'English' : 'తెలుగు'}</span>
      </button>

    </nav>
  );
}
