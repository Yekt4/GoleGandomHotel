"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "./BookingDialog";

interface ParallaxScene {
  id: string;
  tag: string;
  title: string;
  caption: string;
  image: string;
  alt: string;
  statNumber: string;
  statLabel: string;
}

const SCENES: ParallaxScene[] = [
  {
    id: "courtyard",
    tag: "هسته مرکزی عمارت",
    title: "حوض فیروزه‌ای و ترنم آب",
    caption: "آرامش برگرفته از معماری درون‌گرای قاجار؛ خلوت دلنشین حیاط در سایه‌سار درختان نارنج.",
    image: "/images/courtyard.jpg",
    alt: "حیاط باصفای عمارت تاریخی فرهادی شیراز با حوض فیروزه‌ای",
    statNumber: "۱ قرن",
    statLabel: "قدمت و اصالت تاریخی",
  },
  {
    id: "orsi",
    tag: "هنر گره‌چینی و نور",
    title: "رقص نور هفت‌رنگ ارسی‌ها",
    caption: "صبح‌ها با تابش آفتاب از شیشه‌های لاجوردی و یاقوتی، عمارت غرق رنگ و موسیقی نور می‌شود.",
    image: "/images/detail-orsi.jpg",
    alt: "شیشه‌های ارسی و گره‌چینی سنتی شیراز در عمارت فرهادی",
    statNumber: "۷ رنگ",
    statLabel: "شیشه‌های دست‌ساز ارسی",
  },
  {
    id: "rooftop",
    tag: "چشم‌انداز اختصاصی بام",
    title: "غروب شیراز و گنبد شاهچراغ",
    caption: "نوشیدن چای بهارنارنج در ساعت طلایی غروب، با دید ۳۶۰ درجه به بافت تاریخی و گنبد زرین.",
    image: "/images/rooftop.jpg",
    alt: "بام سنتی بوتیک هتل فرهادی مشرف به حرم شاهچراغ",
    statNumber: "۴ دقیقه",
    statLabel: "فاصله پیاده تا شاهچراغ",
  },
];

export function ArchitecturePhilosophy() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      // Relative scroll progress inside this section
      const offset = -rect.top;
      setScrollY(offset);
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative py-20 md:py-32 bg-[#faf8f5] text-[#172554] border-b border-[#e8e4db] overflow-hidden"
    >
      {/* Parallax Background: Persian Geometric Gereh-Chini Vector Grid */}
      <div
        className="absolute inset-0 pointer-events-none z-0 transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(0, ${scrollY * 0.08}px, 0)`,
        }}
      >
        <svg
          className="absolute inset-0 w-full h-[140%] opacity-[0.05] text-[#172554]"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern id="persian-tile-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
              <path
                d="M 24 0 L 56 0 L 80 24 L 80 56 L 56 80 L 24 80 L 0 56 L 0 24 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <polygon
                points="40,16 46,34 64,40 46,46 40,64 34,46 16,40 34,34"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <circle cx="40" cy="40" r="7" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#persian-tile-pattern)" />
        </svg>

        {/* Floating Persian Grand Shamseh (Top-Right Parallax) */}
        <div
          className="absolute top-10 -right-24 w-[480px] h-[480px] opacity-[0.06] text-[#172554]"
          style={{
            transform: `translate3d(0, ${scrollY * -0.05}px, 0)`,
          }}
        >
          <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="w-full h-full">
            <circle cx="100" cy="100" r="95" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="100" cy="100" r="80" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="50" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="24" strokeWidth="1" />
            {[...Array(16)].map((_, i) => (
              <path
                key={i}
                d="M 100 20 L 105 50 L 100 70 L 95 50 Z"
                transform={`rotate(${i * 22.5} 100 100)`}
                strokeWidth="1"
                fill="currentColor"
                fillOpacity="0.06"
              />
            ))}
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Crisp, Minimal Section Intro */}
        <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#172554]/5 border border-[#172554]/10 text-xs font-semibold text-[#172554] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#2563eb]" />
            <span>روایت زیستن در عمارت</span>
          </div>

          <h2 className="text-[32px] sm:text-[44px] lg:text-[50px] font-bold leading-[42px] sm:leading-[56px] tracking-[-1px] text-[#172554]">
            سه پرده از آرامش شیراز کهن
          </h2>
        </div>

        {/* Parallax Cinematic Story Stream */}
        <div className="flex flex-col gap-24 sm:gap-36">
          {SCENES.map((scene, index) => {
            const isEven = index % 2 === 0;
            // Differentiated parallax translation factor per card
            const imgParallaxFactor = isEven ? 0.06 : -0.06;

            return (
              <div
                key={scene.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                {/* Visual Frame with Parallax Floating Effect */}
                <div
                  className={`lg:col-span-7 relative ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div
                    className="relative h-[360px] sm:h-[480px] lg:h-[540px] rounded-[28px] overflow-hidden border border-[#e2dacb] shadow-xl group"
                    style={{
                      transform: `translate3d(0, ${scrollY * imgParallaxFactor}px, 0)`,
                      transition: "transform 100ms ease-out",
                    }}
                  >
                    <Image
                      src={scene.image}
                      alt={scene.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                    {/* On-Image Floating Badge */}
                    <div className="absolute bottom-6 right-6 left-6 text-white flex items-end justify-between">
                      <span className="text-xs font-semibold text-white/90 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                        {scene.tag}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Concise Punchy Text Content */}
                <div
                  className={`lg:col-span-5 text-right space-y-5 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="inline-flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#2563eb]" />
                    <span className="text-xs font-bold text-[#2563eb] tracking-wider uppercase">
                      {scene.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172554] tracking-tight leading-tight">
                    {scene.title}
                  </h3>

                  <p className="text-sm sm:text-base leading-7 sm:leading-8 text-[#475569] font-light">
                    {scene.caption}
                  </p>

                  {/* Refined Metric Pill */}
                  <div className="pt-2 flex items-center gap-4">
                    <div className="px-5 py-3 rounded-[16px] bg-white border border-[#e2dacb] shadow-2xs inline-flex items-center gap-3">
                      <span className="text-2xl font-black text-[#172554]">{scene.statNumber}</span>
                      <span className="text-xs text-[#64748b] font-medium">{scene.statLabel}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Lightweight Craft Callout - Replaces repetitive heavy essay */}
        <div className="mt-28 sm:mt-36 p-8 sm:p-12 rounded-[28px] bg-[#172554] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          {/* Subtle Persian tile background shimmer */}
          <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-[#0284c7]/20 blur-3xl pointer-events-none" />

          <div className="space-y-2 text-right relative z-10 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#93c5fd]">
              اقامت در یک اثر تاریخی
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              چهارده اتاق اختصاصی با هویت ناب قاجار و پهلوی
            </h3>
            <p className="text-xs sm:text-sm text-white/75 font-light">
              امکان رزرو مستقیم هریک از واحدها با پذیرش شبانه‌روزی هتل بدون واسطه.
            </p>
          </div>

          <div className="flex-shrink-0 relative z-10 flex items-center gap-3">
            <BookingDialog
              trigger={
                <Button className="h-11 px-7 rounded-full bg-white text-[#172554] hover:bg-slate-100 font-bold text-sm shadow-md cursor-pointer">
                  رزرو مستقیم
                </Button>
              }
            />
            <a
              href="#rooms"
              className="h-11 px-5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm border border-white/20 flex items-center gap-1.5"
            >
              <span>مشاهده اتاق‌ها</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
