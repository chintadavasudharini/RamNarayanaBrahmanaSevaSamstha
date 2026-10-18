import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  Check, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { ritualGuideItems, faqList } from '../data/ritualsData';

export default function RitualGuideSection({ lang, onOpenBooking }) {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <section id="rituals-guide" className="py-16 sm:py-20 bg-gradient-to-b from-amber-50/40 via-white to-temple-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-temple-maroon/10 border border-temple-maroon/20 text-xs font-bold text-temple-maroon">
            <BookOpen className="w-3.5 h-3.5 text-temple-gold" />
            <span>{lang === 'te' ? 'పవిత్ర కర్మల మార్గదర్శి' : 'Sacred Ritual Guide'}</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-temple-maroon leading-tight">
            {lang === 'te' ? 'శ్రాద్ధ కర్మల వివరణ & సమగ్ర మార్గదర్శనం' : 'Ancestral Rituals & Shastric Significance'}
          </h2>

          <p className="text-xs sm:text-base text-neutral-600 leading-relaxed">
            {lang === 'te' 
              ? 'ఆబ్దికం, మాసికం, సంవత్సరీకం మరియు తర్పణ విధులను శాస్త్రోక్తంగా నిర్వహించే సమగ్ర వివరాలు' 
              : 'Detailed guide to Abdikam, Masikam, Samvatsarikam, and Tarpanam rituals conducted at our Samstha'}
          </p>
        </div>

        {/* 4 Ritual Guide Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {ritualGuideItems.map((item) => {
            const data = item[lang] || item.te;
            return (
              <div 
                key={item.key}
                className="rounded-2xl p-6 bg-white border border-temple-gold/30 shadow-sacred-card hover:shadow-gold-glow transition duration-300"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-temple-maroon">
                    {data.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 flex-shrink-0">
                    <Clock className="w-3 h-3 text-amber-700" />
                    <span>{data.duration}</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4">
                  {data.desc}
                </p>

                <div className="bg-amber-50/60 p-3.5 rounded-xl border border-amber-200/50">
                  <span className="text-xs font-bold text-neutral-800 block mb-2">
                    {lang === 'te' ? 'సంస్థ ద్వారా సమకూర్చే సదుపాయాలు:' : 'Arrangements Provided by Samstha:'}
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs text-neutral-700">
                    {data.included.map((inc, iIdx) => (
                      <div key={iIdx} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-temple-maroon">
              {lang === 'te' ? 'తరచుగా అడిగే ప్రశ్నలు (FAQ)' : 'Frequently Asked Questions'}
            </h3>
          </div>

          <div className="space-y-3">
            {faqList.map((faq, fIdx) => {
              const isOpen = activeFaq === fIdx;
              const fData = faq[lang] || faq.te;
              return (
                <div 
                  key={fIdx}
                  className="rounded-xl border border-temple-gold/30 bg-white overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? -1 : fIdx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-3 hover:bg-amber-50/50 transition font-semibold text-xs sm:text-sm text-temple-deep"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-temple-gold flex-shrink-0" />
                      <span>{fData.q}</span>
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-temple-maroon flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="p-4 pt-1 text-xs sm:text-sm text-neutral-600 bg-amber-50/20 border-t border-amber-100 leading-relaxed">
                      {fData.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Call Out Banner */}
          <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-temple-maroon to-temple-deep text-white text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
            <div className="text-left">
              <h4 className="font-serif font-bold text-sm sm:text-base text-amber-200">
                {lang === 'te' ? 'మీ తిథి లేదా గోత్ర సందేహాలు ఉన్నాయా?' : 'Need guidance on your Lunar Tithi or Gotra?'}
              </h4>
              <p className="text-xs text-white/80">
                {lang === 'te' ? 'వేద పండితుల ప్రత్యక్ష మార్గదర్శకత్వం కోసం ఇప్పుడే సంప్రదించండి.' : 'Call our senior Vedic scholars directly for personal traditional consultation.'}
              </p>
            </div>
            <a 
              href="tel:7780223977"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-temple-gold text-temple-deep font-bold text-xs shadow-gold-glow flex-shrink-0 hover:brightness-110 active:scale-95 transition"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>+91 77802 23977</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
