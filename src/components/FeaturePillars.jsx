import React from 'react';

export default function FeaturePillars({ t }) {
  const features = [
    {
      icon: "🔥",
      title: t.feature_1_title,
      desc: t.feature_1_desc,
      color: "from-amber-500/10 to-orange-500/5"
    },
    {
      icon: "📿",
      title: t.feature_2_title,
      desc: t.feature_2_desc,
      color: "from-rose-500/10 to-temple-maroon/5"
    },
    {
      icon: "🍲",
      title: t.feature_3_title,
      desc: t.feature_3_desc,
      color: "from-yellow-500/10 to-amber-500/5"
    },
    {
      icon: "🏛️",
      title: t.feature_4_title,
      desc: t.feature_4_desc,
      color: "from-amber-600/10 to-yellow-600/5"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-temple-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((item, idx) => (
            <div 
              key={idx}
              className={`rounded-2xl p-6 bg-gradient-to-br ${item.color} bg-white border border-temple-gold/30 shadow-sacred-card hover:shadow-gold-glow transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-temple-gold/40 flex items-center justify-center text-2xl mb-4 shadow-sm">
                {item.icon}
              </div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-temple-maroon mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
