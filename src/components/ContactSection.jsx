import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Instagram,
  Mail, 
  Clock, 
  ExternalLink 
} from 'lucide-react';

export default function ContactSection({ t }) {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-b from-white via-amber-50/40 to-temple-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-temple-maroon/10 border border-temple-maroon/20 text-xs font-bold text-temple-maroon">
            <Sparkles className="w-3.5 h-3.5 text-temple-gold" />
            <span>{t.contact_badge}</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-temple-maroon leading-tight">
            {t.contact_title}
          </h2>
        </div>

        {/* Contact Grid: Details + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Contact Details Cards */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Address Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-temple-gold/30 shadow-sacred-card flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-temple-gold/40 flex items-center justify-center text-xl flex-shrink-0 text-temple-maroon">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-xs sm:text-sm text-temple-maroon uppercase tracking-wide">
                  {t.contact_address_label}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">
                  {t.contact_address_val}
                </p>
              </div>
            </div>

            {/* Phone Numbers Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-temple-gold/30 shadow-sacred-card flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-temple-gold/40 flex items-center justify-center text-xl flex-shrink-0 text-temple-maroon">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-2 w-full">
                <h4 className="font-serif font-bold text-xs sm:text-sm text-temple-maroon uppercase tracking-wide">
                  {t.contact_phone_label}
                </h4>
                <div className="flex flex-wrap gap-2">
                  <a 
                    href="tel:7780223977" 
                    className="px-3.5 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 border border-amber-300 text-temple-maroon font-bold text-xs sm:text-sm transition flex items-center gap-1.5"
                  >
                    📞 +91 77802 23977
                  </a>
                  <a 
                    href="tel:8790323977" 
                    className="px-3.5 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 border border-amber-300 text-temple-maroon font-bold text-xs sm:text-sm transition flex items-center gap-1.5"
                  >
                    📞 +91 87903 23977
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-emerald-300 shadow-sacred-card flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-300 flex items-center justify-center text-xl flex-shrink-0 text-emerald-600">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="space-y-2 w-full">
                <h4 className="font-serif font-bold text-xs sm:text-sm text-emerald-800 uppercase tracking-wide">
                  {t.contact_whatsapp_label}
                </h4>
                <div>
                  <a 
                    href="https://wa.me/917780223977" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>+91 77802 23977</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Instagram Official Page Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-pink-300 shadow-sacred-card flex gap-4 transition hover:border-pink-400">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-xl flex-shrink-0 text-white shadow-sm">
                <Instagram className="w-6 h-6" />
              </div>
              <div className="space-y-2 w-full">
                <div className="flex items-center justify-between flex-wrap gap-1">
                  <h4 className="font-serif font-bold text-xs sm:text-sm text-pink-900 uppercase tracking-wide">
                    {t.contact_instagram_label}
                  </h4>
                  <span className="text-[11px] font-semibold text-neutral-600 bg-pink-50 px-2 py-0.5 rounded-full border border-pink-200">
                    {t.contact_instagram_name}
                  </span>
                </div>
                <div>
                  <a 
                    href={t.contact_instagram_url || "https://www.instagram.com/ramnarayana_brahmana_seva?xtok=MTAwMWFiY245OWJrcQ=="} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:from-purple-700 hover:via-pink-700 hover:to-amber-600 text-white font-bold text-xs sm:text-sm transition shadow-sm hover:scale-[1.02]"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>{t.contact_instagram_id || "@ramnarayana_brahmana_seva"}</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-90" />
                  </a>
                </div>
              </div>
            </div>

            {/* Timings & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-temple-gold/30 shadow-xs flex items-center gap-3">
                <Clock className="w-5 h-5 text-temple-gold flex-shrink-0" />
                <div>
                  <span className="text-[11px] font-bold text-neutral-500 uppercase block">{t.contact_hours_label}</span>
                  <span className="text-xs font-semibold text-neutral-800">{t.contact_hours_val}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-temple-gold/30 shadow-xs flex items-center gap-3">
                <Mail className="w-5 h-5 text-temple-gold flex-shrink-0" />
                <div className="truncate">
                  <span className="text-[11px] font-bold text-neutral-500 uppercase block">{t.contact_email_label}</span>
                  <a href="mailto:ramnarayanabrahmanasevasamstha@gmail.com" className="text-xs font-semibold text-temple-maroon hover:underline truncate block">
                    ramnarayanabrahmana...
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Button */}
            <a 
              href="https://maps.app.goo.gl/kL4BedYNx17JEaZs9?g_st=aw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-temple-maroon to-temple-deep text-amber-200 font-bold text-xs sm:text-sm border border-temple-gold/40 flex items-center justify-center gap-2 shadow-md hover:text-white transition"
            >
              <MapPin className="w-4 h-4 text-temple-gold" />
              <span>{t.contact_cta_maps}</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>

          </div>

          {/* Right Column: Google Maps Embed Frame */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative w-full h-full min-h-[350px] lg:min-h-[420px] rounded-2xl overflow-hidden border-2 border-temple-gold/40 shadow-xl bg-neutral-200">
              <iframe 
                src="https://maps.google.com/maps?q=17.3607629,78.5250294+(11-62,+Ram+Narayana+Brahmana+Seva+Samstha,+Pragathi+Nagar+Rd,+Sahithi+Nagar,+Dilsukhnagar)&t=&z=17&ie=UTF8&iwloc=B&output=embed" 
                title="Ram Narayana Brahmana Seva Samstha Location" 
                className="w-full h-full min-h-[350px] border-0"
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-temple-gold/40 shadow text-[11px] font-semibold text-temple-maroon flex items-center gap-1.5 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Dilsukhnagar, Hyderabad</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
