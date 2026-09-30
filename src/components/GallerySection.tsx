"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

interface GalleryItem {
  id: number;
  category: "rooms" | "courtyard" | "dining" | "rooftop";
  src: string;
  title: string;
  categoryName: string;
  aspect: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    category: "courtyard",
    src: "/images/hero.jpg",
    title: "نمای هوایی عمارت، بادگیرهای تاریخی و حیاط مرکزی",
    categoryName: "حیاط و معماری",
    aspect: "col-span-1 md:col-span-2 aspect-[16/10]",
  },
  {
    id: 2,
    category: "rooms",
    src: "/images/room-mirror-hall.jpg",
    title: "تالار آینه با انعکاس نور پنجره‌های ارسی قاجاری",
    categoryName: "اتاق‌ها و سوئیت‌ها",
    aspect: "col-span-1 aspect-[4/3]",
  },
  {
    id: 3,
    category: "courtyard",
    src: "/images/courtyard.jpg",
    title: "حوض فیروزه‌ای و شب‌های باصفای حیاط در غروب شیراز",
    categoryName: "حیاط و معماری",
    aspect: "col-span-1 aspect-[4/3]",
  },
  {
    id: 4,
    category: "rooms",
    src: "/images/detail-orsi.jpg",
    title: "رقص نورهای هفت‌رنگ شیشه‌های ارسی بر دیوارهای خشتی",
    categoryName: "اتاق‌ها و سوئیت‌ها",
    aspect: "col-span-1 aspect-[4/3]",
  },
  {
    id: 5,
    category: "rooms",
    src: "/images/room-royal-suite.jpg",
    title: "سوئیت رویال شاه‌نشین با گچ‌بری و سقف مقرنس",
    categoryName: "اتاق‌ها و سوئیت‌ها",
    aspect: "col-span-1 aspect-[4/3]",
  },
  {
    id: 6,
    category: "dining",
    src: "/images/cafe.jpg",
    title: "چای‌خانه سنتی عمارت با سماورهای برنجی و پشتی‌های شاهانه",
    categoryName: "کافه و پذیرایی",
    aspect: "col-span-1 md:col-span-2 aspect-[16/10]",
  },
  {
    id: 7,
    category: "rooftop",
    src: "/images/rooftop.jpg",
    title: "بام سنتی عمارت با چشم‌انداز گنبد طلایی حرم شاهچراغ (ع)",
    categoryName: "بام و چشم‌انداز",
    aspect: "col-span-1 aspect-[4/3]",
  },
  {
    id: 8,
    category: "rooms",
    src: "/images/room-pandari.jpg",
    title: "اتاق پنج‌دری قاجاری با شیشه‌های رنگین و فرش دستباف",
    categoryName: "اتاق‌ها و سوئیت‌ها",
    aspect: "col-span-1 aspect-[4/3]",
  },
  {
    id: 9,
    category: "dining",
    src: "/images/breakfast.jpg",
    title: "سفره صبحانه اصیل سنتی شیرازی در ایوان رو به حیاط",
    categoryName: "کافه و پذیرایی",
    aspect: "col-span-1 md:col-span-2 aspect-[16/10]",
  },
  {
    id: 10,
    category: "rooms",
    src: "/images/room-double.jpg",
    title: "اتاق دبل دو تخته با سقف طاق ضربی خشتی و نورپردازی آرامش‌بخش",
    categoryName: "اتاق‌ها و سوئیت‌ها",
    aspect: "col-span-1 aspect-[4/3]",
  },
];

export function GallerySection() {
  const [filter, setFilter] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = filter === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  // In RTL: Next moves left (index + 1), Previous moves right (index - 1)
  const showNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const showPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#fcfbf7] border-y border-[#e0ded4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Badge className="bg-white text-[#1e2952] border border-[#e0ded4] rounded-[12px] px-3.5 py-1 text-xs mb-3">
            آلبوم تصویری عمارت
          </Badge>
          <h2 className="text-[30px] sm:text-[36px] font-normal leading-[42px] tracking-[-0.5px] text-[#1e2952] mb-3">
            جلوه‌های چشم‌نواز از شکوه، نور و آرامش
          </h2>
          <p className="text-base leading-7 text-[#555555]">
            گوشه‌هایی از زیبایی‌های دست‌ساز معماری ایرانی، رنگ‌های زنده ارسی‌ها و شب‌های مهتابی شیراز.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: "all", label: "همه تصاویر" },
            { id: "courtyard", label: "حیاط و معماری" },
            { id: "rooms", label: "اتاق‌ها و ارسی‌ها" },
            { id: "dining", label: "کافه و صبحانه" },
            { id: "rooftop", label: "بام شاهچراغ" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-[12px] text-sm transition-all ${
                filter === tab.id
                  ? "bg-[#0096f7] text-white shadow-xs font-medium"
                  : "bg-white text-black hover:border-[#0096f7] border border-[#e0ded4]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Photo Grid - Masonry style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className={`relative rounded-[16px] overflow-hidden border border-[#e0ded4] cursor-pointer group shadow-xs ${item.aspect}`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-xs text-[#33abf9] mb-1 font-medium">
                  {item.categoryName}
                </span>
                <p className="text-sm sm:text-base font-normal leading-snug text-white">
                  {item.title}
                </p>
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <Dialog open={true} onOpenChange={() => closeLightbox()}>
            <DialogContent className="max-w-4xl p-2 bg-black/95 border-none text-white overflow-hidden rounded-[16px]">
              <div className="relative flex flex-col items-center">
                {/* Close Button on the LEFT for RTL */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-2 left-2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
                  aria-label="بستن"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Main Lightbox Image */}
                <div className="relative w-full h-[65vh] sm:h-[75vh] mt-6">
                  <Image
                    src={filteredItems[lightboxIndex].src}
                    alt={filteredItems[lightboxIndex].title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* RTL Chevrons: Next moves left, Prev moves right */}
                <button
                  onClick={showPrev}
                  className="absolute top-1/2 -translate-y-1/2 right-3 w-11 h-11 rounded-full bg-white/20 hover:bg-[#0096f7] text-white flex items-center justify-center transition-colors z-20"
                  aria-label="تصویر قبلی"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <button
                  onClick={showNext}
                  className="absolute top-1/2 -translate-y-1/2 left-3 w-11 h-11 rounded-full bg-white/20 hover:bg-[#0096f7] text-white flex items-center justify-center transition-colors z-20"
                  aria-label="تصویر بعدی"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Caption */}
                <div className="w-full text-center py-3 px-4">
                  <p className="text-sm sm:text-base text-white/90">
                    {filteredItems[lightboxIndex].title}
                  </p>
                  <span className="text-xs text-[#33abf9] mt-1 block">
                    {filteredItems[lightboxIndex].categoryName} ({lightboxIndex + 1} از {filteredItems.length})
                  </span>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
}
