import React from 'react';
import { Phone, MessageCircle, MapPin, Sparkles, Flame, ShieldCheck } from 'lucide-react';

export default function HeroSection({ lang, t, onOpenBooking }) {
  return (
    <section id="home" className="relative py-8 md:py-16 overflow-hidden bg-gradient-to-b from-temple-deep via-temple-dark to-[#2c0406] text-white">
      
      {/* Background Sacred Geometric & Glow Effects */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-temple-gold/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Grand Card Container */}
        <div className="relative rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-temple-gold/40 bg-gradient-to-br from-temple-maroon/90 via-temple-dark/95 to-black/90 shadow-2xl backdrop-blur-sm overflow-hidden">
          
          {/* Subtle Decorative Golden Corner Borders */}
          <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-temple-gold/60 rounded-tl-lg pointer-events-none"></div>
          <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-temple-gold/60 rounded-tr-lg pointer-events-none"></div>
          <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-temple-gold/60 rounded-bl-lg pointer-events-none"></div>
          <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-temple-gold/60 rounded-br-lg pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Official Emblem Logo Showcase */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center text-center">
              <div className="relative group">
                
                {/* Glowing Outer Rings */}
                <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-temple-gold via-amber-300 to-amber-600 opacity-60 blur-lg group-hover:opacity-85 transition duration-500 animate-pulse"></div>
                
                {/* Emblem Frame with Gold Rim */}
                <div className="relative w-56 h-56 sm:w-68 sm:h-68 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-temple-gold via-amber-100 to-temple-gold-dark shadow-gold-glow-lg transition duration-500 transform group-hover:scale-102">
                  <img 
                    src="assets/images/logo.jpg" 
                    alt="రామ్ నారాయణ బ్రాహ్మణ సేవా సంస్థ అధికారిక లోగో"
                    className="w-full h-full object-cover rounded-full shadow-inner border-2 border-amber-900"
                    loading="eager"
                  />
                </div>

                {/* Floating Divine Diya / Sacred Badges */}
                <div className="absolute -bottom-3 -right-2 bg-temple-deep/95 border border-temple-gold px-3.5 py-1.5 rounded-full shadow-xl flex items-center gap-1.5 text-xs text-temple-gold-light animate-float">
                  <span className="text-base animate-diya">🪔</span>
                  <span className="font-semibold tracking-wider">EST. 2026</span>
                </div>
              </div>

              {/* Founder Tag under Logo */}
              <div className="mt-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-temple-gold/30 text-xs sm:text-sm text-amber-200 shadow-md">
                <span className="text-temple-gold">🏛️</span>
                <span className="font-semibold">{t.hero_founder}</span>
              </div>
            </div>

            {/* Right Column: Content & Direct Actions */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-5">
              
              {/* Motto Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-temple-gold/30 to-amber-500/20 border border-temple-gold/50 text-xs sm:text-sm font-semibold text-temple-gold-light">
                <Sparkles className="w-4 h-4 text-temple-gold" />
                <span>{t.hero_badge}</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                <span className="gold-shimmer-text block">{t.hero_title_main}</span>
              </h1>

              {/* Tagline & Subheading */}
              <div className="space-y-1">
                <p className="text-base sm:text-xl font-bold text-amber-300 flex items-center justify-center lg:justify-start gap-2">
                  <Flame className="w-5 h-5 text-amber-400 inline" />
                  <span>{t.hero_tagline}</span>
                </p>
                <p className="text-xs sm:text-base text-amber-100/90 font-medium">
                  {t.hero_tagline_sub}
                </p>
              </div>

              {/* Descriptive Overview */}
              <p className="text-xs sm:text-base text-white/85 leading-relaxed max-w-2xl bg-black/25 p-4 rounded-2xl border border-temple-gold/20">
                {t.hero_desc}
              </p>

              {/* CTA Action Cluster */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 w-full">
                
                {/* Call Button */}
                <a 
                  href="tel:7780223977" 
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-temple-gold via-amber-300 to-temple-gold text-temple-deep font-bold text-sm sm:text-base shadow-gold-glow hover:brightness-110 active:scale-95 transition"
                >
                  <Phone className="w-4 h-4 text-temple-deep fill-current" />
                  <span>{t.hero_cta_call}</span>
                </a>

                {/* WhatsApp Button */}
                <a 
                  href="https://wa.me/917780223977?text=%E0%B0%A8%E0%B0%AE%E0%B0%B8%E0%B1%8D%E0%B0%95%E0%B0%BE%E0%B0%B0%E0%B0%82%20-%20%E0%B0%B0%E0%B0%BE%E0%B0%AE%E0%B1%8D%20%E0%B0%A8%E0%B0%BE%E0%B0%B0%E0%B0%BE%E0%B0%AF%E0%B0%A3%20%E0%B0%AC%E0%B1%8D%E0%B0%B0%E0%B0%BE%E0%B0%B9%E0%B1%8D%E0%B0%AE%E0%B0%A3%20%E0%B0%B8%E0%B1%87%E0%B0%B5%E0%B0%BE%20%E0%B0%B8%E0%B0%82%E0%B0%B8%E0%B1%8D%E0%B0%A5%20%E0%B0%B5%E0%B1%88%E0%B0%A6%E0%B0%BF%E0%B0%95%20/%20%E0%B0%AA%E0%B0%BF%E0%B0%A4%E0%B1%83%20%E0%B0%B8%E0%B1%87%E0%B0%B5%E0%B0%B2%20%E0%B0%B5%E0%B0%BF%E0%B0%9A%E0%B0%BE%E0%B0%B0%E0%B0%A3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm sm:text-base border border-emerald-400/50 shadow-lg active:scale-95 transition"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{t.hero_cta_whatsapp}</span>
                </a>

                {/* Ritual Booking / Inquiry Modal Trigger */}
                <button
                  onClick={onOpenBooking}
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-black/40 hover:bg-black/60 text-temple-gold border border-temple-gold/60 font-bold text-sm sm:text-base hover:border-temple-gold shadow-md active:scale-95 transition"
                >
                  <Sparkles className="w-4 h-4 text-temple-gold" />
                  <span>{lang === 'te' ? 'పూజా విచారణ' : 'Ritual Inquiry'}</span>
                </button>

                {/* Google Maps Location */}
                <a 
                  href="https://maps.app.goo.gl/kL4BedYNx17JEaZs9?g_st=aw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium border border-white/20 transition"
                >
                  <MapPin className="w-4 h-4 text-amber-300" />
                  <span>{t.hero_cta_location}</span>
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
