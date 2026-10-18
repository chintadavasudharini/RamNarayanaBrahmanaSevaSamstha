import React, { useState } from 'react';
import { Sparkles, ZoomIn, Download, X } from 'lucide-react';

export default function GalleryLightbox({ lang, t, activeImage, onCloseLightbox, onOpenLightbox }) {
  const flyerSrc = lang === 'en' ? 'assets/images/flyer-en.jpg' : 'assets/images/flyer-te.jpg';
  const flyerAlt = lang === 'en' ? t.flyer_img_alt : t.flyer_img_alt;

  const galleryItems = [
    {
      src: "assets/images/banner-new.jpg",
      title: t.banner_main_title,
      badge: "Master Banner"
    },
    {
      src: "assets/images/card-cream.jpg",
      title: t.card_cream_title,
      badge: "Visiting Card"
    },
    {
      src: flyerSrc,
      title: t.card_pamphlet_title,
      badge: lang === 'te' ? "తెలుగు కరపత్రం" : "English Brochure"
    },
    {
      src: "assets/images/pamphlet.jpg",
      title: lang === 'te' ? "సేవా పత్రం" : "Samstha Document",
      badge: "Information Sheet"
    }
  ];

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-gradient-to-b from-white via-amber-50/30 to-temple-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-temple-maroon/10 border border-temple-maroon/20 text-xs font-bold text-temple-maroon">
            <Sparkles className="w-3.5 h-3.5 text-temple-gold" />
            <span>{t.gallery_badge}</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-temple-maroon leading-tight">
            {t.gallery_title}
          </h2>

          <p className="text-xs sm:text-base text-neutral-600 leading-relaxed">
            {t.gallery_sub}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, idx) => (
            <div 
              key={idx}
              className="group rounded-2xl overflow-hidden bg-white border border-temple-gold/30 shadow-sacred-card hover:shadow-gold-glow transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-black/5">
                <img 
                  src={item.src} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-temple-deep/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-xs">
                  <button
                    onClick={() => onOpenLightbox(item.src, item.title)}
                    className="p-3 rounded-full bg-temple-gold text-temple-deep hover:scale-110 shadow-gold-glow transition"
                    title={t.btn_view_full}
                  >
                    <ZoomIn className="w-5 h-5" />
                  </button>
                  <a
                    href={item.src}
                    download
                    className="p-3 rounded-full bg-white/90 text-temple-deep hover:scale-110 shadow transition"
                    title="Download"
                  >
                    <Download className="w-5 h-5" />
                  </a>
                </div>

                <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-sm text-[10px] font-semibold text-amber-200 border border-temple-gold/30">
                  {item.badge}
                </span>
              </div>

              <div className="p-4 flex items-center justify-between">
                <h3 className="font-serif font-bold text-xs sm:text-sm text-temple-maroon">
                  {item.title}
                </h3>
                <button
                  onClick={() => onOpenLightbox(item.src, item.title)}
                  className="text-xs font-semibold text-temple-gold hover:text-amber-700 transition"
                >
                  🔍
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in"
          onClick={onCloseLightbox}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-temple-deep border-2 border-temple-gold rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-3 sm:p-4 bg-temple-dark border-b border-temple-gold/30 text-white">
              <h4 className="font-serif font-bold text-xs sm:text-sm text-temple-gold-light truncate pr-4">
                {activeImage.title}
              </h4>
              <div className="flex items-center gap-2">
                <a
                  href={activeImage.src}
                  download
                  className="p-1.5 rounded-lg bg-temple-gold/20 hover:bg-temple-gold text-white hover:text-temple-deep transition"
                  title="Download Image"
                >
                  <Download className="w-4 h-4" />
                </a>
                <button
                  onClick={onCloseLightbox}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image */}
            <div className="overflow-auto max-h-[75vh] flex items-center justify-center p-2 bg-black">
              <img 
                src={activeImage.src} 
                alt={activeImage.title}
                className="max-w-full max-h-[72vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
