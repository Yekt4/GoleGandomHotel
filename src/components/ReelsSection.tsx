"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Eye, Heart, Music, ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

interface ReelItem {
  id: string;
  title: string;
  description: string;
  image: string;
  views: string;
  likes: string;
  duration: string;
  sound: string;
  instagramUrl: string;
}

const REELS: ReelItem[] = [
  {
    id: "reel-1",
    title: "رقص نور صبحگاهی در ارسی‌های هفت‌رنگ",
    description: "وقتی آفتاب صبح شیراز از شیشه‌های رنگارنگ ارسی قاجاری عبور می‌کند و اتاق شاه‌نشین را غرق رنگ می‌سازد.",
    image: "/images/reel-orsi.jpg",
    views: "۴۲.۵K",
    likes: "۳.۸K",
    duration: "۰:۳۸",
    sound: "صدای سماور و آرامش صبحگاهی شیراز",
    instagramUrl: "https://instagram.com",
  },
  {
    id: "reel-2",
    title: "غروب فیروزه‌ای و شب‌های حیاط عمارت",
    description: "انعکاس نور گرم فانوس‌ها در آب زلال حوض فیروزه‌ای و نسیم دل‌انگیز شبانه شیراز در عمارت کهن فرهادی.",
    image: "/images/reel-courtyard.jpg",
    views: "۵۸.۱K",
    likes: "۵.۲K",
    duration: "۰:۴۵",
    sound: "نوای دلنشین تار و سنتور شیرازی",
    instagramUrl: "https://instagram.com",
  },
  {
    id: "reel-3",
    title: "چای بهارنارنج بر بام مشرف به شاهچراغ",
    description: "لذت نوشیدن چای اصیل با شیرینی‌های سنتی شیراز هنگام غروب آفتاب با چشم‌انداز بی‌نظیر به گنبد زرین.",
    image: "/images/reel-rooftop.jpg",
    views: "۳۷.۹K",
    likes: "۴.۱K",
    duration: "۰:۳۲",
    sound: "صدای اذان مغرب و همهمه بافت تاریخی",
    instagramUrl: "https://instagram.com",
  },
  {
    id: "reel-4",
    title: "سفره صبحانه سنتی شیراز در حیاط",
    description: "عطر نان تازه، سرشیر محلی، پنیر گوسفندی و عرقیات اصیل شیراز که هر صبح در حیاط مرکزی سرو می‌شود.",
    image: "/images/breakfast.jpg",
    views: "۲۹.۴K",
    likes: "۲.۹K",
    duration: "۰:۴۰",
    sound: "صدای زندگی در بافت کهن شیراز",
    instagramUrl: "https://instagram.com",
  },
];

export function ReelsSection() {
  const [activeReel, setActiveReel] = useState<ReelItem | null>(null);

  return (
    <section id="reels" className="py-20 md:py-32 bg-[#0a1120] text-white relative overflow-hidden">
      {/* Subtle Persian background glow */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#172554]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-[#2563eb]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header with Instagram Profile Teaser */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl text-right">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-medium text-[#93c5fd] mb-4">
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
              <span>نبض زندگی در عمارت · ریلزهای اینستاگرام</span>
            </div>

            <h2 className="text-[32px] sm:text-[44px] lg:text-[50px] font-bold leading-[44px] sm:leading-[58px] tracking-[-1px] text-white mb-3">
              روایت‌های تصویری از عمارت فرهادی
            </h2>

            <p className="text-sm sm:text-lg leading-7 sm:leading-8 text-white/70">
              گوشه‌هایی از رقص نور ارسی‌ها، صدای آرامش‌بخش آب در حوض فیروزه‌ای و شب‌های دلنشین شیراز؛ زندگی را در قاب ریلزهای ما تماشا کنید.
            </p>
          </div>

          {/* Instagram Follow Badge Card */}
          <div className="flex-shrink-0 flex items-center gap-4 bg-white/5 hover:bg-white/10 backdrop-blur-md p-3.5 sm:p-4 rounded-[20px] border border-white/10 transition-all">
            <div className="relative w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600">
              <div className="w-full h-full rounded-full overflow-hidden bg-white relative">
                <Image
                  src="/images/logo.jpg"
                  alt="اینستاگرام بوتیک هتل فرهادی شیراز"
                  fill
                  sizes="48px"
                  className="object-contain p-0.5"
                />
              </div>
            </div>

            <div className="text-right">
              <span className="block text-xs font-bold text-white">farhadihotel.shiraz@</span>
              <span className="text-[11px] text-white/60">صفحه رسمی در اینستاگرام</span>
            </div>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 hover:opacity-90 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-md transition-all hover:scale-102"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>دنبال کردن</span>
            </a>
          </div>
        </div>

        {/* 9:16 Vertical Reels Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {REELS.map((reel) => (
            <div
              key={reel.id}
              onClick={() => setActiveReel(reel)}
              className="group relative aspect-[9/16] rounded-[24px] overflow-hidden bg-slate-900 border border-white/10 hover:border-white/30 shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Background Reel Cover Image */}
              <Image
                src={reel.image}
                alt={reel.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40 group-hover:from-black/95 transition-all" />

              {/* Top Ribbon: Duration & Instagram Badge */}
              <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[11px] font-semibold text-white">
                  <InstagramIcon className="w-3 h-3 text-pink-400" />
                  <span>ریلز</span>
                </span>

                <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-mono text-white/90 border border-white/10">
                  {reel.duration}
                </span>
              </div>

              {/* Center Play Button with Pulse Animation */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-2xl transition-all duration-300 group-hover:scale-115 group-hover:bg-white group-hover:text-[#172554]">
                  <Play className="w-6 h-6 fill-current translate-x-[-1px]" />
                </div>
              </div>

              {/* Bottom Info: Title, Views, Audio */}
              <div className="absolute bottom-0 inset-x-0 p-5 z-10 text-right flex flex-col justify-end">
                <div className="flex items-center gap-3 text-[11px] text-white/80 font-medium mb-2">
                  <span className="inline-flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5 text-[#60a5fa]" />
                    {reel.views}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-rose-400" />
                    {reel.likes}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white leading-snug line-clamp-2 mb-2 group-hover:text-[#93c5fd] transition-colors">
                  {reel.title}
                </h3>

                <div className="flex items-center gap-1.5 text-[11px] text-white/60 truncate">
                  <Music className="w-3 h-3 text-white/50 flex-shrink-0 animate-spin" style={{ animationDuration: "6s" }} />
                  <span className="truncate">{reel.sound}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to View More Reels */}
        <div className="mt-12 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 hover:border-white/40 text-white text-sm font-semibold transition-all hover:scale-102"
          >
            <InstagramIcon className="w-4 h-4 text-pink-400" />
            <span>مشاهده همه ریلزها و استوری‌های روز در صفحه اینستاگرام</span>
            <ExternalLink className="w-3.5 h-3.5 text-white/60" />
          </a>
        </div>
      </div>

      {/* Interactive Reel Preview Modal */}
      {activeReel && (
        <Dialog open={!!activeReel} onOpenChange={(open) => !open && setActiveReel(null)}>
          <DialogContent className="sm:max-w-[420px] p-0 bg-black border border-white/20 text-white rounded-[24px] overflow-hidden shadow-2xl">
            <div className="relative aspect-[9/16] w-full">
              <Image
                src={activeReel.image}
                alt={activeReel.title}
                fill
                sizes="(max-width: 640px) 100vw, 420px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/50" />

              {/* Header inside modal */}
              <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-white relative border border-white/40">
                    <Image
                      src="/images/logo.jpg"
                      alt="لوگو"
                      fill
                      sizes="32px"
                      className="object-contain p-0.5"
                    />
                  </div>
                  <span className="text-xs font-bold">farhadihotel.shiraz</span>
                </div>
              </div>

              {/* Bottom Content inside modal */}
              <div className="absolute bottom-0 inset-x-0 p-6 z-10 text-right space-y-3">
                <h3 className="text-lg font-bold text-white">
                  {activeReel.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 leading-6">
                  {activeReel.description}
                </p>

                <div className="flex items-center justify-between text-xs text-white/60 pt-2 border-t border-white/10">
                  <span className="flex items-center gap-1">
                    <Music className="w-3 h-3 text-white/60" />
                    {activeReel.sound}
                  </span>
                  <span>{activeReel.views} بازدید</span>
                </div>

                <div className="pt-2">
                  <a
                    href={activeReel.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-11 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 text-white font-bold text-sm flex items-center justify-center gap-2 hover:opacity-95 transition-opacity"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    <span>مشاهده و ارسال نظر در اینستاگرام</span>
                  </a>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
