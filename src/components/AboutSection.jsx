import React from 'react';
import { CheckCircle2, MapPin, Sparkles, ZoomIn } from 'lucide-react';

export default function AboutSection({ t, onOpenLightbox }) {
  const points = [
    t.about_point_1,
    t.about_point_2,
    t.about_point_3,
    t.about_point_4
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-gradient-to-b from-white via-amber-50/40 to-temple-cream relative overflow-hidden">
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-temple-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Showcase Frame with Master Banner & Floating Badges */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-md">
              
              {/* Outer Golden Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-temple-gold via-amber-400 to-amber-600 opacity-30 blur-md group-hover:opacity-60 transition duration-500"></div>

              {/* Banner Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-temple-gold/50 shadow-2xl bg-black">
                <img 
                  src="assets/images/banner-new.jpg" 
                  alt="రామ్ నారాయణ బ్రాహ్మణ సేవా సంస్థ అధికారిక గ్రాండ్ బ్యానర్"
                  className="w-full h-auto object-cover transform group-hover:scale-102 transition duration-500"
                  loading="lazy"
                />

                {/* Click to Zoom Overlay */}
                <button
                  onClick={() => onOpenLightbox("assets/images/banner-new.jpg", t.banner_main_title)}
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-2 text-white font-semibold text-sm backdrop-blur-xs"
                >
                  <ZoomIn className="w-5 h-5 text-temple-gold" />
                  <span>{t.btn_view_full}</span>
                </button>
              </div>

              {/* Floating Location Pill */}
              <div className="absolute -bottom-4 left-4 bg-white/95 backdrop-blur-md border border-temple-gold/60 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-xs font-semibold text-temple-deep">
                <MapPin className="w-3.5 h-3.5 text-temple-maroon" />
                <span>{t.pill_loc}</span>
              </div>

            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-7 space-y-5">
            
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-temple-maroon/10 border border-temple-maroon/20 text-xs font-bold text-temple-maroon">
              <Sparkles className="w-3.5 h-3.5 text-temple-gold" />
              <span>{t.about_badge}</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-temple-maroon leading-tight">
              {t.about_title}
            </h2>

            <p className="text-sm sm:text-base font-medium text-neutral-800 leading-relaxed border-l-4 border-temple-gold pl-4 italic bg-amber-50/50 py-2 rounded-r-lg">
              {t.about_lead}
            </p>

            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              {t.about_text_1}
            </p>

            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              {t.about_text_2}
            </p>

            {/* Sacred Quote Card */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-temple-maroon to-temple-deep text-white border border-temple-gold/40 shadow-md">
              <p className="font-serif text-sm sm:text-base italic text-amber-200 text-center">
                {t.about_quote}
              </p>
            </div>

            {/* Feature Points Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-medium text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-temple-maroon flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
