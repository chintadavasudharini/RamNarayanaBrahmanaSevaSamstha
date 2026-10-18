import React, { useState, useEffect } from 'react';
import { translations } from './data/translations';
import TopSacredBar from './components/TopSacredBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsRibbon from './components/StatsRibbon';
import FeaturePillars from './components/FeaturePillars';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import RitualGuideSection from './components/RitualGuideSection';
import BenefitsSection from './components/BenefitsSection';
import WhyChooseUs from './components/WhyChooseUs';
import ThemeShowcase from './components/ThemeShowcase';
import GalleryLightbox from './components/GalleryLightbox';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';
import BookingModal from './components/BookingModal';
import ThemeSelector from './components/ThemeSelector';

export default function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('rnbs_lang') || 'te';
  });

  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('rnbs_theme') || 'classic-maroon';
  });

  const [lightboxImage, setLightboxImage] = useState(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [initialServiceId, setInitialServiceId] = useState('pitru-karyalu');

  useEffect(() => {
    localStorage.setItem('rnbs_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('rnbs_theme', currentTheme);
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  const t = translations[lang] || translations.te;

  const handleOpenBooking = (serviceId) => {
    if (serviceId) setInitialServiceId(serviceId);
    setBookingModalOpen(true);
  };

  const handleOpenLightbox = (src, title) => {
    setLightboxImage({ src, title });
  };

  const handleCloseLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-temple-cream text-neutral-800 font-sans selection:bg-amber-200 selection:text-temple-deep pb-16 sm:pb-0 transition-colors duration-400">
      
      {/* 1. Top Sacred Announcement Bar */}
      <TopSacredBar lang={lang} t={t} />

      {/* 2. Sticky Glassmorphism Header & Navigation */}
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        t={t} 
        onOpenBooking={() => handleOpenBooking()} 
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 3. Grand Hero Section */}
        <HeroSection 
          lang={lang} 
          t={t} 
          onOpenBooking={() => handleOpenBooking()} 
        />

        {/* 4. Stats Ribbon */}
        <StatsRibbon t={t} />

        {/* 5. 4 Feature Pillars */}
        <FeaturePillars t={t} />

        {/* 6. About Section */}
        <AboutSection 
          t={t} 
          onOpenLightbox={handleOpenLightbox} 
        />

        {/* 7. Key Services with Direct Inquiries */}
        <ServicesSection 
          lang={lang} 
          t={t} 
          onOpenBooking={handleOpenBooking} 
        />

        {/* 8. Ritual & Tithi Guide */}
        <RitualGuideSection 
          lang={lang} 
          onOpenBooking={handleOpenBooking} 
        />

        {/* 9. Benefits of Performing Shraddha */}
        <BenefitsSection t={t} />

        {/* 10. Why Choose Us */}
        <WhyChooseUs t={t} />

        {/* 11. Theme & Color Palettes Showcase */}
        <ThemeShowcase 
          currentTheme={currentTheme} 
          onSelectTheme={setCurrentTheme} 
          lang={lang} 
        />

        {/* 12. Official Cards & Lightbox Showcase */}
        <GalleryLightbox 
          lang={lang} 
          t={t} 
          activeImage={lightboxImage} 
          onOpenLightbox={handleOpenLightbox} 
          onCloseLightbox={handleCloseLightbox} 
        />

        {/* 13. Contact & Interactive Google Map */}
        <ContactSection t={t} />
      </main>

      {/* 14. Site Footer */}
      <Footer lang={lang} t={t} />

      {/* 15. Mobile Sticky Bottom Action Bar */}
      <MobileActionBar 
        lang={lang} 
        setLang={setLang} 
        t={t} 
      />

      {/* 16. Interactive Ritual Booking & Inquiry Modal */}
      <BookingModal 
        isOpen={bookingModalOpen} 
        onClose={() => setBookingModalOpen(false)} 
        initialServiceId={initialServiceId}
        lang={lang} 
      />

      {/* 17. Floating Theme Selector Widget */}
      <ThemeSelector 
        currentTheme={currentTheme} 
        onSelectTheme={setCurrentTheme} 
        lang={lang} 
      />

    </div>
  );
}