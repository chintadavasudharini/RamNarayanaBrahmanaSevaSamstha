import React, { useState } from 'react';
import { Phone, MessageCircle, Instagram, BellRing, Volume2, VolumeX } from 'lucide-react';

export default function TopSacredBar({ lang, t }) {
  const [soundPlaying, setSoundPlaying] = useState(false);

  // Gentle meditative temple chime using standard Web Audio API (100% self-contained)
  const playTempleChime = () => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const now = audioCtx.currentTime;

      // Primary chime tone
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(528, now); // 528 Hz sacred Solfeggio / miracle tone
      osc.frequency.exponentialRampToValueAtTime(1056, now + 0.15);
      osc.frequency.exponentialRampToValueAtTime(528, now + 1.2);

      // Warm harmonic overtone
      const osc2 = audioCtx.createOscillator();
      const gain2 = audioCtx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(264, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(0.25, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

      gain2.gain.setValueAtTime(0.001, now);
      gain2.gain.exponentialRampToValueAtTime(0.12, now + 0.08);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + 2.8);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc2.connect(gain2);
      gain2.connect(audioCtx.destination);

      osc.start(now);
      osc2.start(now);
      osc.stop(now + 2.6);
      osc2.stop(now + 2.9);

      setSoundPlaying(true);
      setTimeout(() => setSoundPlaying(false), 2600);
    } catch (e) {
      console.log('Audio playback error', e);
    }
  };

  return (
    <aside className="bg-gradient-to-r from-temple-deep via-temple-maroon to-temple-deep text-amber-100 text-xs sm:text-sm py-2 px-3 sm:px-6 border-b border-temple-gold/30 shadow-sm relative z-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
        
        {/* Left: Sacred Invocations */}
        <div className="flex items-center flex-wrap justify-center md:justify-start gap-2 sm:gap-3 text-amber-200">
          <span className="inline-flex items-center gap-1.5 font-bold tracking-wider text-temple-gold-light">
            <span className="text-amber-400 text-base leading-none">ॐ</span>
            <span>{t.top_invocation}</span>
          </span>
          <span className="text-temple-gold/50 hidden sm:inline">•</span>
          <span className="font-medium text-white/90 text-xs sm:text-sm">
            {t.top_vedoktam}
          </span>
          <span className="text-temple-gold/50 hidden sm:inline">•</span>
          <span className="text-amber-300/90 italic hidden md:inline text-xs sm:text-sm">
            {t.top_motto}
          </span>
        </div>

        {/* Right: Sound Chime + Direct Contact Badges */}
        <div className="flex items-center gap-2 sm:gap-4 text-xs">
          <button
            onClick={playTempleChime}
            title={lang === 'te' ? 'దేవాలయ ఘంటా నాదం' : 'Sacred Temple Bell Sound'}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border transition-all text-xs ${
              soundPlaying 
                ? 'bg-temple-gold text-temple-deep border-temple-gold shadow-gold-glow animate-pulse' 
                : 'bg-black/20 hover:bg-black/40 text-amber-200 border-temple-gold/40'
            }`}
          >
            <BellRing className={`w-3.5 h-3.5 ${soundPlaying ? 'animate-bounce' : ''}`} />
            <span className="hidden sm:inline font-medium">
              {soundPlaying 
                ? (lang === 'te' ? 'శుభ నాదం...' : 'Sacred Chime...') 
                : (lang === 'te' ? 'ఘంటా నాదం 🔔' : 'Temple Chime 🔔')}
            </span>
          </button>

          <a 
            href="tel:7780223977" 
            className="inline-flex items-center gap-1 text-white hover:text-temple-gold-light transition font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-temple-gold" />
            <span>+91 77802 23977</span>
          </a>

          <a 
            href="https://wa.me/917780223977" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-emerald-300 hover:text-emerald-200 transition font-medium hidden sm:inline-flex"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          <a 
            href="https://www.instagram.com/ramnarayana_brahmana_seva?xtok=MTAwMWFiY245OWJrcQ==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-pink-300 hover:text-pink-200 transition font-medium hidden md:inline-flex"
            title="Instagram: Ram Narayana Brahmana Seva Samastha (@ramnarayana_brahmana_seva)"
          >
            <Instagram className="w-3.5 h-3.5 text-pink-400" />
            <span>Instagram</span>
          </a>
        </div>

      </div>
    </aside>
  );
}
