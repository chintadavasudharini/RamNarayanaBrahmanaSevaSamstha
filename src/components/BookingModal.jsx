import React, { useState } from 'react';
import { X, Sparkles, MessageCircle, Phone, Calendar, User, Hash } from 'lucide-react';
import { ritualsList } from '../data/ritualsData';

export default function BookingModal({ isOpen, onClose, initialServiceId, lang }) {
  const [selectedService, setSelectedService] = useState(initialServiceId || 'pitru-karyalu');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [gotram, setGotram] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const currentServiceObj = ritualsList.find(s => s.id === selectedService) || ritualsList[2];
  const serviceName = currentServiceObj[lang]?.title || currentServiceObj.te.title;

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const isTe = lang === 'te';
    
    let msg = isTe 
      ? `🙏 *రామ్ నారాయణ బ్రాహ్మణ సేవా సంస్థ - పూజా విచారణ / బుకింగ్*\n`
      : `🙏 *Ram Narayana Brahmana Seva Samstha - Ritual Booking Inquiry*\n`;
      
    msg += `━━━━━━━━━━━━━━━━━━━\n`;
    msg += `📌 *${isTe ? 'సేవ' : 'Service'}:* ${serviceName}\n`;
    if (name) msg += `👤 *${isTe ? 'భక్తుని పేరు' : 'Devotee Name'}:* ${name}\n`;
    if (phone) msg += `📞 *${isTe ? 'ఫోన్ నంబర్' : 'Phone'}:* ${phone}\n`;
    if (gotram) msg += `🕉️ *${isTe ? 'గోత్రం' : 'Gotram'}:* ${gotram}\n`;
    if (date) msg += `📅 *${isTe ? 'ఆశించిన తేదీ / తిథి' : 'Preferred Date / Tithi'}:* ${date}\n`;
    if (notes) msg += `📝 *${isTe ? 'వివరాలు' : 'Notes'}:* ${notes}\n`;
    msg += `━━━━━━━━━━━━━━━━━━━\n`;
    msg += isTe 
      ? `దిల్సుఖ్నగర్ సంస్థలో నిర్వహణ వివరాలు మరియు అందుబాటు తెలపగలరు.` 
      : `Please provide details on availability and arrangements at your Dilsukhnagar Samstha.`;

    const url = `https://wa.me/917780223977?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-temple-deep border-2 border-temple-gold rounded-3xl p-6 sm:p-8 text-white shadow-2xl my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-temple-gold/20 border border-temple-gold/40 text-[11px] font-bold text-temple-gold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-temple-gold" />
            <span>{lang === 'te' ? 'వేదోక్త శ్రాద్ధ & పితృ సేవా బుకింగ్' : 'Vedic Ritual Consultation'}</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
            {lang === 'te' ? 'పూజా విచారణ / తేదీ నమోదు' : 'Inquire & Schedule Ceremony'}
          </h3>
          <p className="text-xs text-amber-200/80 mt-1">
            {lang === 'te' 
              ? 'దిల్సుఖ్నగర్ సంస్థలో సమగ్ర సౌకర్యాలతో నిర్వహణ' 
              : 'Conducted at our sacred Samstha premises in Dilsukhnagar'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleWhatsAppSubmit} className="space-y-4 text-xs sm:text-sm">
          
          {/* Select Service */}
          <div>
            <label className="block text-amber-200 font-semibold mb-1">
              {lang === 'te' ? 'కావలసిన సేవ ఎంచుకోండి *' : 'Select Desired Service *'}
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-temple-gold/40 text-white focus:outline-none focus:border-temple-gold"
            >
              {ritualsList.map(s => (
                <option key={s.id} value={s.id} className="bg-neutral-900 text-white">
                  {s[lang]?.title || s.te.title}
                </option>
              ))}
            </select>
          </div>

          {/* Devotee Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-amber-200 font-semibold mb-1">
                {lang === 'te' ? 'మీ పేరు (Name) *' : 'Your Name *'}
              </label>
              <input
                type="text"
                required
                placeholder={lang === 'te' ? 'ఉదా: శర్మ గారు' : 'e.g., Sharma'}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-temple-gold/40 text-white focus:outline-none focus:border-temple-gold"
              />
            </div>
            <div>
              <label className="block text-amber-200 font-semibold mb-1">
                {lang === 'te' ? 'ఫోన్ నంబర్ *' : 'Phone Number *'}
              </label>
              <input
                type="tel"
                required
                placeholder="77802 23977"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-temple-gold/40 text-white focus:outline-none focus:border-temple-gold"
              />
            </div>
          </div>

          {/* Gotram & Preferred Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-amber-200 font-semibold mb-1">
                {lang === 'te' ? 'గోత్రం (Gotram)' : 'Gotram (Optional)'}
              </label>
              <input
                type="text"
                placeholder={lang === 'te' ? 'ఉదా: కౌశిక, భారద్వాజ...' : 'e.g., Koushika'}
                value={gotram}
                onChange={(e) => setGotram(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-temple-gold/40 text-white focus:outline-none focus:border-temple-gold"
              />
            </div>
            <div>
              <label className="block text-amber-200 font-semibold mb-1">
                {lang === 'te' ? 'ఆశించిన తేదీ / తిథి' : 'Preferred Date / Tithi'}
              </label>
              <input
                type="text"
                placeholder={lang === 'te' ? 'తేదీ లేదా తిథి వివరాలు' : 'Preferred Date or Tithi'}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-temple-gold/40 text-white focus:outline-none focus:border-temple-gold"
              />
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-amber-200 font-semibold mb-1">
              {lang === 'te' ? 'అదనపు వివరాలు / ప్రశ్నలు' : 'Any Specific Requirements / Notes'}
            </label>
            <textarea
              rows="2"
              placeholder={lang === 'te' ? 'భోక్తలు, వంట లేదా ప్రత్యేక విధి వివరాలు...' : 'Details regarding Bhokthas, food, or specific rites...'}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-black/50 border border-temple-gold/40 text-white focus:outline-none focus:border-temple-gold"
            ></textarea>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col gap-2.5">
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2 active:scale-95 transition"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{lang === 'te' ? 'వాట్సాప్‌లో పంపండి (Submit via WhatsApp)' : 'Submit via WhatsApp'}</span>
            </button>

            <a
              href="tel:7780223977"
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-temple-gold via-amber-300 to-temple-gold text-temple-deep font-bold text-xs sm:text-sm shadow-gold-glow flex items-center justify-center gap-2 hover:brightness-110 transition"
            >
              <Phone className="w-4 h-4 text-temple-deep fill-current" />
              <span>{lang === 'te' ? 'ప్రత్యక్షంగా కాల్ చేయండి: 77802 23977' : 'Call Directly: +91 77802 23977'}</span>
            </a>
          </div>

        </form>
      </div>
    </div>
  );
}
