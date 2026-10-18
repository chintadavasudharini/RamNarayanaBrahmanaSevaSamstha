import React, { useState } from 'react';
import { Palette, Check, Sparkles, X } from 'lucide-react';
import { themePalettes } from '../data/themesData';

export default function ThemeSelector({ currentTheme, onSelectTheme, lang }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-20 sm:bottom-24 left-4 z-40">
      
      {/* Floating Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-temple-deep/95 text-white border-2 border-temple-gold shadow-gold-glow hover:scale-105 active:scale-95 transition backdrop-blur-md"
        title="Theme & Color Combinations"
        aria-label="Select Theme & Colors"
      >
        <Palette className="w-4 h-4 text-temple-gold animate-spin-slow" />
        <span className="text-xs font-bold text-amber-200 hidden sm:inline">
          {lang === 'te' ? 'రంగుల థీమ్స్' : 'Color Themes'}
        </span>
      </button>

      {/* Floating Popup Menu */}
      {open && (
        <div 
          className="absolute bottom-12 left-0 w-72 sm:w-80 bg-temple-deep/98 border-2 border-temple-gold/60 rounded-3xl p-4 shadow-2xl backdrop-blur-xl text-white animate-in slide-in-from-bottom-3 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between pb-3 border-b border-temple-gold/30">
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-temple-gold" />
              <h4 className="font-serif font-bold text-xs sm:text-sm text-white">
                {lang === 'te' ? 'ఆధ్యాత్మిక వర్ణ కలయికలు' : 'Sacred Theme Palettes'}
              </h4>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1 rounded-full hover:bg-white/10 text-white/70 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-2 space-y-2 max-h-72 overflow-y-auto pr-1">
            {themePalettes.map((theme) => {
              const isActive = currentTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => {
                    onSelectTheme(theme.id);
                  }}
                  className={`w-full text-left p-2.5 rounded-xl border transition flex items-center justify-between gap-2 ${
                    isActive 
                      ? 'bg-white/15 border-temple-gold shadow-sm' 
                      : 'bg-black/30 border-white/10 hover:border-temple-gold/40 hover:bg-white/5'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      {lang === 'te' ? theme.nameTe.split(' ')[0] : theme.nameEn}
                    </span>
                    <div className="flex items-center gap-1 mt-1.5">
                      {theme.swatches.map((color, cIdx) => (
                        <span 
                          key={cIdx} 
                          className="w-3.5 h-3.5 rounded-full border border-black/30 shadow-xs" 
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  {isActive && (
                    <span className="w-5 h-5 rounded-full bg-temple-gold flex items-center justify-center text-temple-deep flex-shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-temple-gold/20 text-[10px] text-amber-200/80 text-center">
            {lang === 'te' ? 'ఏదైనా థీమ్‌ను క్లిక్ చేసి వెబ్‌సైట్ మార్పును చూడండి' : 'Click any palette to instantly apply to the entire site'}
          </div>

        </div>
      )}

    </div>
  );
}