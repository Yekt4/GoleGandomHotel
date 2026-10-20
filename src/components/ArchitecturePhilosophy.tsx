"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export function ArchitecturePhilosophy() {
  const { language } = useLanguage();
  const t = translations[language];
  const isEn = language === "en";

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
      className="relative py-24 md:py-36 bg-[#faf6e8] text-[#563820] border-b border-[#e9ddca] overflow-hidden"
    >
      {/* Eight-point rosettes and arabesques inspired by shrine tilework. */}
      <div
        className="absolute inset-0 pointer-events-none z-0 transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(0, ${scrollY * 0.06}px, 0)`,
        }}
      >
        <svg
          className="absolute inset-0 w-full h-[140%] opacity-[0.14]"
          aria-hidden="true"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern id="shrine-tile-pattern" width="160" height="160" patternUnits="userSpaceOnUse">
              <g fill="none" stroke="#cf9f2d" strokeWidth="1" strokeLinejoin="round">
                <path d="M80 24 96 42 120 40 118 64 136 80 118 96 120 120 96 118 80 136 64 118 40 120 42 96 24 80 42 64 40 40 64 42Z" />
                <rect x="55" y="55" width="50" height="50" />
                <rect x="55" y="55" width="50" height="50" transform="rotate(45 80 80)" />
                <path d="M0 0Q40 0 40 40Q0 40 0 0ZM160 0Q120 0 120 40Q160 40 160 0ZM0 160Q40 160 40 120Q0 120 0 160ZM160 160Q120 160 120 120Q160 120 160 160Z" />
              </g>
              <g fill="none" stroke="#cf9f2d" strokeWidth="1.3" strokeLinecap="round">
                <path d="M80 0Q58 12 80 24Q102 12 80 0ZM160 80Q148 58 136 80Q148 102 160 80ZM80 160Q58 148 80 136Q102 148 80 160ZM0 80Q12 58 24 80Q12 102 0 80Z" />
                <path d="M80 65Q96 80 80 95Q64 80 80 65Z" />
              </g>
              <circle cx="80" cy="80" r="3" fill="#cf9f2d" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#shrine-tile-pattern)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Heading - Dignified & Natural */}
        <div className={`max-w-2xl mb-20 sm:mb-28 ${isEn ? "text-left" : "text-right"}`}>
          <h2 className="text-[32px] sm:text-[44px] lg:text-[48px] font-bold leading-[44px] sm:leading-[58px] tracking-tight text-[#563820] mb-4">
            {t.story.heading}
          </h2>
          <p className="text-base sm:text-lg text-[#6b5948] leading-relaxed font-light">
            {t.story.desc}
          </p>
        </div>

        {/* Parallax Cinematic Story Stream */}
        <div className="flex flex-col gap-28 sm:gap-40">
          {t.story.scenes.map((scene, index) => {
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
                    className="relative h-[360px] sm:h-[460px] lg:h-[500px] rounded-[24px] overflow-hidden border border-[#e3d5bf] shadow-lg group"
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
                  className={`lg:col-span-5 space-y-4 ${
                    isEn ? "text-left" : "text-right"
                  } ${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#563820] tracking-tight leading-snug">
                    {scene.title}
                  </h3>

                  <p className="text-base sm:text-lg leading-8 text-[#6b5948] font-light">
                    {scene.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

