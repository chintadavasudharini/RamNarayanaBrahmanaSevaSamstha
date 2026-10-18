import React, { useState } from 'react';
import { 
  Sparkles, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight,
  Flame,
  UtensilsCrossed,
  Scroll,
  CalendarCheck
} from 'lucide-react';
import { ritualsList } from '../data/ritualsData';

export default function ServicesSection({ lang, t, onOpenBooking }) {
  const [selectedTab, setSelectedTab] = useState('all');

  return (
    <section id="services" className="py-16 sm:py-24 bg-gradient-to-b from-temple-cream via-white to-amber-50/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-temple-maroon/10 border border-temple-maroon/20 text-xs font-bold text-temple-maroon">
            <Sparkles className="w-3.5 h-3.5 text-temple-gold" />
            <span>{t.services_badge}</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-temple-maroon leading-tight">
            {t.services_title}
          </h2>

          <p className="text-xs sm:text-base text-neutral-600 leading-relaxed">
            {t.services_sub}
          </p>
        </div>

        {/* Services Grid (4 Key Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {ritualsList.map((service) => {
            const data = service[lang] || service.te;
            return (
              <div 
                key={service.id}
                className="group relative rounded-3xl p-6 sm:p-8 bg-white border border-temple-gold/35 shadow-sacred-card hover:shadow-gold-glow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
              >
                {/* Background Card Gradient Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/40 rounded-full blur-2xl group-hover:scale-150 transition duration-500 pointer-events-none"></div>

                <div>
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900">
                      {service.badge}
                    </span>
                    <span className="font-serif font-black text-2xl sm:text-3xl text-temple-gold/70 group-hover:text-temple-gold transition">
                      {service.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-temple-maroon group-hover:text-amber-700 transition mb-2.5">
                    {data.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-5">
                    {data.shortDesc}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6 border-t border-amber-100 pt-4">
                    {data.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Buttons */}
                <div className="pt-4 border-t border-amber-100/80 flex flex-wrap items-center gap-3">
                  
                  {/* WhatsApp Direct Inquiry */}
                  <a 
                    href={`https://wa.me/917780223977?text=${encodeURIComponent(data.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[140px] flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition shadow-sm active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{lang === 'te' ? 'వాట్సాప్ విచారణ' : 'WhatsApp Inquiry'}</span>
                  </a>

                  {/* Booking Modal Trigger */}
                  <button
                    onClick={() => onOpenBooking(service.id)}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-temple-deep hover:bg-temple-maroon text-amber-200 hover:text-white text-xs sm:text-sm font-semibold border border-temple-gold/40 transition shadow-sm active:scale-95"
                  >
                    <CalendarCheck className="w-4 h-4 text-temple-gold" />
                    <span>{lang === 'te' ? 'సేవ బుకింగ్' : 'Book Service'}</span>
                  </button>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
