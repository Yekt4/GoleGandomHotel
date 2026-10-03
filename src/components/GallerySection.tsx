"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
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

  const filteredItems = useMemo(() => {
    return filter === "all"
      ? t.gallery.items
      : t.gallery.items.filter((item) => item.category === filter);
  }, [filter, t.gallery.items]);

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

  // Keyboard navigation
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

  // Count items per category
  const getCategoryCount = (categoryId: string) => {
    if (categoryId === "all") return t.gallery.items.length;
    return t.gallery.items.filter((i) => i.category === categoryId).length;
  };

  // Convert digits to Persian format if language is FA
  const formatNumber = (num: number) => {
    if (language === "fa") {
      const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
      return String(num).replace(/\d/g, (d) => persianDigits[Number(d)]);
    }
    return String(num);
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#faf8f5] border-t border-[#e8e4db] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header - Dignified & Restrained */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14 ${isEn ? "text-left" : "text-right"}`}>
          <div className="max-w-2xl">
            <h2 className="text-[30px] sm:text-[42px] font-bold text-[#172554] tracking-tight leading-tight mb-3">
              {t.gallery.heading}
            </h2>
            <p className="text-sm sm:text-base text-[#555f6d] leading-relaxed font-light">
              {t.gallery.desc}
            </p>
          </div>

          {/* Minimalist Segmented Filter Bar */}
          <div
            role="tablist"
            aria-label="Gallery Categories"
            className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-none [scrollbar-width:none] flex-shrink-0"
          >
            {t.gallery.categories.map((tab) => {
              const isActive = filter === tab.id;
              const count = getCategoryCount(tab.id);
              return (
                <button
                  key={tab.id}
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls="gallery-grid"
                  onClick={() => setFilter(tab.id)}
                  className={`h-9 px-3.5 sm:px-4 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#172554] ${
                    isActive
                      ? "bg-[#172554] text-white shadow-xs"
                      : "bg-white/80 hover:bg-white text-[#555f6d] hover:text-[#172554] border border-[#dfd9cc]"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive ? "bg-white/20 text-white" : "bg-[#faf8f5] text-[#8c7b64]"
                    }`}
                  >
                    {formatNumber(count)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Modern Asymmetric Editorial Gallery Grid */}
        <div
          id="gallery-grid"
          role="region"
          aria-label="Gallery Grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {filteredItems.map((item, idx) => {
            // Curated rhythmic layout when viewing all photos:
            // Item 1 (Aerial Hero) & Item 7 (Rooftop sunset) span 2 columns on desktop for editorial breathing room
            const isFeatured = filter === "all" && (idx === 0 || idx === 6);

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => openLightbox(idx)}
                aria-label={item.title}
                className={`group relative rounded-[20px] sm:rounded-[24px] overflow-hidden border border-[#dfd9cc] bg-[#f0ece1]/50 shadow-xs hover:shadow-xl transition-all duration-500 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#172554] ${
                  isFeatured
                    ? "sm:col-span-2 aspect-[16/10] sm:aspect-[16/9]"
                    : "col-span-1 aspect-[4/3]"
                } ${isEn ? "text-left" : "text-right"}`}
              >
                {/* Visual Image Asset */}
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes={
                    isFeatured
                      ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  }
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Quiet Editorial Scrim on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 sm:p-6 text-white pointer-events-none z-10">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-medium text-white/90 bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                      {item.categoryName}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-medium leading-snug text-white/95 drop-shadow-sm line-clamp-2">
                    {item.title}
                  </p>
                </div>

                {/* Floating Subtle Expand Icon */}
                <div
                  className={`absolute top-4 w-8.5 h-8.5 rounded-full bg-black/40 backdrop-blur-md border border-white/25 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105 z-20 ${
                    isEn ? "right-4" : "left-4"
                  }`}
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Modern Minimalist Lightbox Modal */}
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
                  {formatNumber(lightboxIndex + 1)} {t.gallery.of} {formatNumber(filteredItems.length)}
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
                className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all z-20 cursor-pointer shadow-lg hover:scale-105 focus-visible:outline-2 focus-visible:outline-white"
                aria-label={isEn ? t.gallery.prev : t.gallery.next}
                title={isEn ? t.gallery.prev : t.gallery.next}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={isEn ? showNext : showNext}
                className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all z-20 cursor-pointer shadow-lg hover:scale-105 focus-visible:outline-2 focus-visible:outline-white"
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
