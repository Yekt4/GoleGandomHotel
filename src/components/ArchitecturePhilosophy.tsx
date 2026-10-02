"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "./BookingDialog";

interface ParallaxScene {
  id: string;
  title: string;
  caption: string;
  image: string;
  alt: string;
}

const SCENES: ParallaxScene[] = [
  {
    id: "courtyard",
    title: "حوض فیروزه‌ای و ترنم آب",
    caption: "آرامش برگرفته از معماری درون‌گرای قاجار؛ خلوت دلنشین حیاط در سایه‌سار درختان نارنج و نوای فواره که هیاهوی شهر را پشت دیوارهای خشتی خاموش می‌کند.",
    image: "/images/courtyard.jpg",
    alt: "حیاط باصفای عمارت تاریخی فرهادی شیراز با حوض فیروزه‌ای",
  },
  {
    id: "orsi",
    title: "رقص آفتاب بر شیشه‌های هفت‌رنگ ارسی",
    caption: "شاهکار گره‌چینی استادکاران شیراز؛ صبح‌ها با تابش نخستین پرتوهای خورشید از میان شیشه‌های رنگین، تالار شاه‌نشین غرق نقش و رنگ‌های گرم می‌شود.",
    image: "/images/detail-orsi.jpg",
    alt: "شیشه‌های ارسی و گره‌چینی سنتی شیراز در عمارت فرهادی",
  },
  {
    id: "rooftop",
    title: "چشم‌انداز غروب بر بام کهن",
    caption: "عصرانه و چای بهارنارنج در ساعت طلایی، با چشم‌انداز ۳۶۰ درجه به بادگیرهای قدیمی بافت تاریخی و گنبد زرین بارگاه شاهچراغ.",
    image: "/images/rooftop.jpg",
    alt: "بام سنتی بوتیک هتل فرهادی مشرف به حرم شاهچراغ",
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
      className="relative py-24 md:py-36 bg-[#faf8f5] text-[#172554] border-b border-[#e8e4db] overflow-hidden"
    >
      {/* Persian Geometric Gereh-Chini Vector Pattern */}
      <div
        className="absolute inset-0 pointer-events-none z-0 transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(0, ${scrollY * 0.06}px, 0)`,
        }}
      >
        <svg
          className="absolute inset-0 w-full h-[140%] opacity-[0.04] text-[#172554]"
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
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Heading - Dignified & Natural */}
        <div className="max-w-2xl mb-20 sm:mb-28 text-right">
          <h2 className="text-[32px] sm:text-[44px] lg:text-[48px] font-bold leading-[44px] sm:leading-[58px] tracking-tight text-[#172554] mb-4">
            روایت عمارت و شیراز کهن
          </h2>
          <p className="text-base sm:text-lg text-[#555f6d] leading-relaxed font-light">
            خانه‌ای با پیشینه یک سده در قلب شیراز؛ تلفیق آینه‌کاری دست‌تراش، گره‌چینی چوب گردو و خلوت دلنشین حیاط مرکزی.
          </p>
        </div>

        {/* Parallax Cinematic Story Stream */}
        <div className="flex flex-col gap-28 sm:gap-40">
          {SCENES.map((scene, index) => {
            const isEven = index % 2 === 0;
            const imgParallaxFactor = isEven ? 0.05 : -0.05;

            return (
              <div
                key={scene.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Visual Frame */}
                <div
                  className={`lg:col-span-7 relative ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div
                    className="relative h-[360px] sm:h-[460px] lg:h-[500px] rounded-[24px] overflow-hidden border border-[#dfd9cc] shadow-lg group"
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
                  </div>
                </div>

                {/* Narrative Text */}
                <div
                  className={`lg:col-span-5 text-right space-y-4 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#172554] tracking-tight leading-snug">
                    {scene.title}
                  </h3>

                  <p className="text-base sm:text-lg leading-8 text-[#555f6d] font-light">
                    {scene.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quiet Editorial Reservation Note */}
        <div className="mt-28 sm:mt-36 pt-10 border-t border-[#dfd9cc] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="text-right max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-[#172554] mb-2">
              اقامت در یک اثر تاریخی
            </h3>
            <p className="text-sm text-[#555f6d] font-light leading-relaxed">
              اتاق‌ها و سوئیت‌های عمارت با حفظ اصالت معماری قاجار و آرامش ناب شیراز میزبان شما هستند.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <BookingDialog
              trigger={
                <Button className="h-11 px-6 rounded-full bg-[#172554] text-white hover:bg-[#0f172a] font-semibold text-sm cursor-pointer shadow-sm">
                  رزرو مستقیم
                </Button>
              }
            />
            <a
              href="#rooms"
              className="h-11 px-5 rounded-full text-[#172554] hover:bg-[#172554]/5 font-medium text-sm border border-[#dfd9cc] flex items-center gap-1.5 transition-colors"
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

