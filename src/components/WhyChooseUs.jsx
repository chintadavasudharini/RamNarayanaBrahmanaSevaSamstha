import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs({ t }) {
  const points = [
    {
      icon: "📜",
      title: t.why_1_title,
      desc: t.why_1_desc
    },
    {
      icon: "🕉️",
      title: t.why_2_title,
      desc: t.why_2_desc
    },
    {
      icon: "🏛️",
      title: t.why_3_title,
      desc: t.why_3_desc
    },
    {
      icon: "🍲",
      title: t.why_4_title,
      desc: t.why_4_desc
    },
    {
      icon: "🤝",
      title: t.why_5_title,
      desc: t.why_5_desc
    },
    {
      icon: "⏰",
      title: t.why_6_title,
      desc: t.why_6_desc
    }
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-gradient-to-b from-temple-cream via-amber-50/40 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-temple-maroon/10 border border-temple-maroon/20 text-xs font-bold text-temple-maroon">
            <ShieldCheck className="w-3.5 h-3.5 text-temple-gold" />
            <span>{t.why_badge}</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-temple-maroon leading-tight">
            {t.why_title}
          </h2>

          <p className="text-xs sm:text-base text-neutral-600 leading-relaxed">
            {t.why_sub}
          </p>
        </div>

        {/* Why Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => (
            <div 
              key={idx}
              className="flex gap-4 p-6 rounded-2xl bg-white border border-temple-gold/30 shadow-sacred-card hover:shadow-gold-glow transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-temple-gold/40 flex items-center justify-center text-2xl flex-shrink-0 shadow-sm">
                {pt.icon}
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-temple-maroon mb-1.5">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
