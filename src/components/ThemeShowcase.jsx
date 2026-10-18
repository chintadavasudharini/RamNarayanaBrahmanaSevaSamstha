import React from 'react';
import { Palette, Sparkles, Check, ArrowRight } from 'lucide-react';
import { themePalettes } from '../data/themesData';

export default function ThemeShowcase({ currentTheme, onSelectTheme, lang }) {
  return (
    <section id="themes" className="py-16 sm:py-20 bg-gradient-to-b from-white via-amber-50/40 to-temple-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-temple-maroon/10 border border-temple-maroon/20 text-xs font-bold text-temple-maroon">
            <Palette className="w-3.5 h-3.5 text-temple-gold" />
            <span>{lang === 'te' ? 'ప్రత్యేక వర్ణ కలయికలు' : 'Divine Color Palettes'}</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-temple-maroon leading-tight">
            {lang === 'te' ? 'ఆధ్యాత్మిక వర్ణ వైభవం & థీమ్ ఎంపిక' : 'Spiritual Theme & Color Combinations'}
          </h2>

          <p className="text-xs sm:text-base text-neutral-600 leading-relaxed">
            {lang === 'te' 
              ? 'మా సంస్థకు అత్యంత శ్రేయోదాయకమైన 5 వేదోక్త వర్ణ కలయికలు. క్రింద ఉన్న ఏదైనా థీమ్‌ను క్లిక్ చేసి మీ వెబ్‌సైట్‌కు వర్తింపజేయండి.'
              : 'Explore 5 authentic Shastric color harmonies tailored for Ram Narayana Brahmana Seva Samstha. Click any card to apply instantly.'}
          </p>
        </div>

        {/* 5 Theme Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {themePalettes.map((theme) => {
            const isActive = currentTheme === theme.id;
            return (
              <div 
                key={theme.id}
                className={`rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                  isActive 
                    ? 'bg-white border-2 border-temple-gold shadow-gold-glow ring-2 ring-temple-gold/40' 
                    : 'bg-white/90 border border-temple-gold/30 hover:border-temple-gold/60 shadow-sacred-card hover:shadow-md'
                }`}
              >
                {/* Active Pill */}
                {isActive && (
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-temple-maroon text-white text-[10px] font-bold tracking-wider uppercase flex items-center gap-1 shadow-sm">
                    <Check className="w-3 h-3 text-temple-gold stroke-[3]" />
                    <span>{lang === 'te' ? 'ప్రస్తుత థీమ్' : 'Active'}</span>
                  </div>
                )}

                <div>
                  {/* Badge */}
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 mb-3 inline-block">
                    {theme.badge}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif font-bold text-base sm:text-lg text-temple-maroon mb-1">
                    {lang === 'te' ? theme.nameTe : theme.nameEn}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    {lang === 'te' ? theme.descTe : theme.descEn}
                  </p>

                  {/* Color Swatches Grid with HEX Codes */}
                  <div className="p-3 rounded-2xl bg-amber-50/60 border border-amber-200/50 mb-5 space-y-2">
                    <span className="text-[11px] font-bold text-neutral-700 block">
                      {lang === 'te' ? 'వర్ణ పట్టిక (Color Swatches & Hex):' : 'Palette Swatches & Hex Codes:'}
                    </span>
                    <div className="grid grid-cols-5 gap-1.5">
                      <div className="text-center">
                        <div className="w-full h-8 rounded-lg shadow-xs border border-black/10" style={{ backgroundColor: theme.primary }}></div>
                        <span className="text-[9px] font-mono font-medium text-neutral-600 block mt-1">{theme.primary}</span>
                      </div>
                      <div className="text-center">
                        <div className="w-full h-8 rounded-lg shadow-xs border border-black/10" style={{ backgroundColor: theme.accentGold }}></div>
                        <span className="text-[9px] font-mono font-medium text-neutral-600 block mt-1">{theme.accentGold}</span>
                      </div>
                      <div className="text-center">
                        <div className="w-full h-8 rounded-lg shadow-xs border border-black/10" style={{ backgroundColor: theme.accentLight }}></div>
                        <span className="text-[9px] font-mono font-medium text-neutral-600 block mt-1">{theme.accentLight}</span>
                      </div>
                      <div className="text-center">
                        <div className="w-full h-8 rounded-lg shadow-xs border border-black/10" style={{ backgroundColor: theme.primaryDeep }}></div>
                        <span className="text-[9px] font-mono font-medium text-neutral-600 block mt-1">{theme.primaryDeep}</span>
                      </div>
                      <div className="text-center">
                        <div className="w-full h-8 rounded-lg shadow-xs border border-black/10" style={{ backgroundColor: theme.bgCream }}></div>
                        <span className="text-[9px] font-mono font-medium text-neutral-600 block mt-1">{theme.bgCream}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Apply Button */}
                <button
                  onClick={() => onSelectTheme(theme.id)}
                  className={`w-full py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition active:scale-95 ${
                    isActive 
                      ? 'bg-temple-maroon text-white shadow-md cursor-default' 
                      : 'bg-amber-100/80 hover:bg-amber-200 text-temple-maroon border border-amber-300'
                  }`}
                >
                  {isActive ? (
                    <>
                      <Check className="w-4 h-4 text-temple-gold" />
                      <span>{lang === 'te' ? 'ఈ థీమ్ వర్తించబడింది' : 'Currently Active'}</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>{lang === 'te' ? 'ఈ థీమ్‌ను ఎంచుకోండి' : 'Apply This Theme'}</span>
                    </>
                  )}
                </button>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}