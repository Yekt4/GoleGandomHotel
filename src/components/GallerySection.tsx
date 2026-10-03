"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export function GallerySection() {
  const { language } = useLanguage();
  const t = translations[language];
  const isEn = language === "en";

  const [filter, setFilter] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = filter === "all"
    ? t.gallery.items
    : t.gallery.items.filter((item) => item.category === filter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard accessibility
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        if (isEn) {
          showPrev();
        } else {
          showNext();
        }
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        if (isEn) {
          showNext();
        } else {
          showPrev();
        }
      } else if (e.key === "Escape") {
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, showNext, showPrev, isEn]);

  return (
    <section id="gallery" className="pt-10 pb-0 bg-[#faf9f5] border-t border-[#e8e4db] relative">
      {/* Filter Tabs Only - Clean, Minimal & Centered */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div
          role="tablist"
          aria-label="Gallery Categories"
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          {t.gallery.categories.map((tab) => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls="gallery-grid"
                onClick={() => setFilter(tab.id)}
                className={`h-10 px-5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#172554] focus-visible:outline-offset-2 ${
                  isActive
                    ? "bg-[#172554] text-white shadow-md scale-102"
                    : "bg-white text-[#475569] hover:text-[#172554] hover:bg-slate-50 border border-[#e2dacb]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Seamless Edge-to-Edge Photo Grid - Zero Whitespace */}
      <div
        id="gallery-grid"
        role="region"
        aria-label="Gallery Grid"
        className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 overflow-hidden"
      >
        {filteredItems.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            onClick={() => openLightbox(idx)}
            aria-label={`${item.title}`}
            className={`relative w-full aspect-[4/3] overflow-hidden cursor-pointer group focus-visible:outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-white ${
              isEn ? "text-left" : "text-right"
            }`}
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />

            {/* Seamless Vignette Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white pointer-events-none z-10">
              <span className="text-[11px] text-[#93c5fd] font-semibold mb-1">
                {item.categoryName}
              </span>
              <p className="text-xs sm:text-sm font-medium leading-snug text-white/95 line-clamp-2">
                {item.title}
              </p>

              {/* Floating Enlarge Indicator */}
              <div
                className={`absolute top-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white ${
                  isEn ? "right-3" : "left-3"
                }`}
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Accessible Lightbox Modal */}
      {lightboxIndex !== null && (
        <Dialog open={true} onOpenChange={() => closeLightbox()}>
          <DialogContent
            className="max-w-5xl w-[96vw] max-h-[92vh] p-4 sm:p-6 bg-[#0a1120]/95 backdrop-blur-2xl border border-white/15 text-white overflow-hidden rounded-[28px] shadow-2xl flex flex-col justify-between"
            aria-describedby={undefined}
          >
            <DialogTitle className="sr-only">
              {filteredItems[lightboxIndex].title}
            </DialogTitle>

            {/* Lightbox Header Bar */}
            <div className="flex items-center justify-between z-20 pb-3 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-[#93c5fd] border border-white/15">
                  {filteredItems[lightboxIndex].categoryName}
                </span>
                <span className="text-xs text-white/60 font-mono">
                  {lightboxIndex + 1} {t.gallery.of} {filteredItems.length}
                </span>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={closeLightbox}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
                aria-label={t.gallery.close}
                title={t.gallery.close}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image Stage */}
            <div className="relative w-full h-[55vh] sm:h-[65vh] my-auto flex items-center justify-center select-none">
              <Image
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].title}
                fill
                priority
                className="object-contain"
                sizes="100vw"
              />

              {/* Navigation Buttons */}
              <button
                type="button"
                onClick={isEn ? showPrev : showPrev}
                className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all z-20 cursor-pointer shadow-lg hover:scale-105 focus-visible:outline-2 focus-visible:outline-white"
                aria-label={isEn ? t.gallery.prev : t.gallery.next}
                title={isEn ? t.gallery.prev : t.gallery.next}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={isEn ? showNext : showNext}
                className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all z-20 cursor-pointer shadow-lg hover:scale-105 focus-visible:outline-2 focus-visible:outline-white"
                aria-label={isEn ? t.gallery.next : t.gallery.prev}
                title={isEn ? t.gallery.next : t.gallery.prev}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Caption and Keyboard Shortcuts Hint */}
            <div className={`pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 ${isEn ? "text-left" : "text-right"}`}>
              <p className="text-xs sm:text-sm font-medium text-white/90">
                {filteredItems[lightboxIndex].title}
              </p>

              <div className="hidden sm:flex items-center gap-3 text-[11px] text-white/50">
                <span>{t.gallery.arrowsHint}</span>
                <span>·</span>
                <span>{t.gallery.escHint}</span>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
