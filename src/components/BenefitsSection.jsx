import React from 'react';
import { Sparkles } from 'lucide-react';

export default function BenefitsSection({ t }) {
  const benefits = [
    {
      num: "01",
      title: t.ben_1_title,
      desc: t.ben_1_desc,
      icon: "🙏"
    },
    {
      num: "02",
      title: t.ben_2_title,
      desc: t.ben_2_desc,
      icon: "🕊️"
    },
    {
      num: "03",
      title: t.ben_3_title,
      desc: t.ben_3_desc,
      icon: "🌟"
    },
    {
      num: "04",
      title: t.ben_4_title,
      desc: t.ben_4_desc,
      icon: "🕉️"
    },
    {
      num: "05",
      title: t.ben_5_title,
      desc: t.ben_5_desc,
      icon: "🌿"
    },
    {
      num: "06",
      title: t.ben_6_title,
      desc: t.ben_6_desc,
      icon: "🪔"
    }
  ];

  return (
    <section id="benefits" className="py-16 sm:py-24 bg-gradient-to-b from-white to-temple-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-temple-maroon/10 border border-temple-maroon/20 text-xs font-bold text-temple-maroon">
            <Sparkles className="w-3.5 h-3.5 text-temple-gold" />
            <span>{t.benefits_badge}</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-temple-maroon leading-tight">
            {t.benefits_title}
          </h2>

          <p className="text-xs sm:text-base text-neutral-600 leading-relaxed">
            {t.benefits_sub}
          </p>
        </div>

        {/* 6 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((ben, idx) => (
            <div 
              key={idx}
              className="rounded-2xl p-6 sm:p-7 bg-white border border-temple-gold/30 shadow-sacred-card hover:shadow-gold-glow transition-all duration-300 hover:-translate-y-1 relative group overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-full bg-amber-50 border border-temple-gold/40 flex items-center justify-center font-serif font-black text-sm text-temple-maroon">
                  {ben.num}
                </span>
                <span className="text-2xl transform group-hover:scale-110 transition">
                  {ben.icon}
                </span>
              </div>

              <h3 className="font-serif font-bold text-base sm:text-lg text-temple-maroon mb-2">
                {ben.title}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {ben.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
