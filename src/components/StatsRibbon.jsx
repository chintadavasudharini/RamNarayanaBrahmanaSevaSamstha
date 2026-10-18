import React from 'react';

export default function StatsRibbon({ t }) {
  const stats = [
    {
      icon: "🕉️",
      title: t.hero_stat_exp,
      sub: t.hero_stat_exp_sub
    },
    {
      icon: "📜",
      title: t.hero_stat_purohits,
      sub: t.hero_stat_purohits_sub
    },
    {
      icon: "🍲",
      title: t.hero_stat_service,
      sub: t.hero_stat_service_sub
    },
    {
      icon: "🙏",
      title: t.hero_stat_satisfaction,
      sub: t.hero_stat_satisfaction_sub
    }
  ];

  return (
    <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((item, idx) => (
          <div 
            key={idx}
            className="rounded-2xl p-4 sm:p-5 bg-white/95 backdrop-blur-md border border-temple-gold/30 shadow-sacred-card hover:shadow-gold-glow transition-all duration-300 hover:-translate-y-1 text-center flex flex-col items-center justify-center group"
          >
            <span className="text-2xl sm:text-3xl mb-1.5 transform group-hover:scale-110 transition duration-300">
              {item.icon}
            </span>
            <h3 className="font-serif font-bold text-xs sm:text-sm md:text-base text-temple-maroon">
              {item.title}
            </h3>
            <p className="text-[11px] sm:text-xs text-neutral-600 font-medium mt-0.5">
              {item.sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
