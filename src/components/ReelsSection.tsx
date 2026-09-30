"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX, Maximize2, ChevronRight, ChevronLeft, X, Sparkles, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export interface VideoStoryItem {
  id: string;
  title: string;
  description: string;
  poster: string;
  videoSrc: string; // Path in public/videos/ e.g. "/videos/reel-1.mp4"
  duration: string;
  tag: string;
}

const VIDEO_STORIES: VideoStoryItem[] = [
  {
    id: "story-1",
    title: "رقص نور صبحگاهی در ارسی‌های هفت‌رنگ",
    description: "لحظه ورود پرتوهای خورشید صبح شیراز از میان شیشه‌های رنگارنگ قاجاری به شاه‌نشین عمارت.",
    poster: "/images/reel-orsi.jpg",
    videoSrc: "/videos/reel-1.mp4",
    duration: "۰:۳۵",
    tag: "شاه‌نشین و ارسی",
  },
  {
    id: "story-2",
    title: "آرامش عصرگاهی و بازتاب مهتاب در حوض فیروزه‌ای",
    description: "نوای آب، روشنایی ملایم فانوس‌ها و نسیم خنک شبانه در حیاط باصفای عمارت فرهادی.",
    poster: "/images/reel-courtyard.jpg",
    videoSrc: "/videos/reel-2.mp4",
    duration: "۰:۴۲",
    tag: "حیاط مرکزی",
  },
  {
    id: "story-3",
    title: "عصرانه و چای بر بام مشرف به شاهچراغ",
    description: "چشم‌انداز ۳۶۰ درجه بافت کهن شیراز و گنبد زرین شاهچراغ در ساعت طلایی غروب آفتاب.",
    poster: "/images/reel-rooftop.jpg",
    videoSrc: "/videos/reel-3.mp4",
    duration: "۰:۳۰",
    tag: "بام اختصاصی",
  },
  {
    id: "story-4",
    title: "عطر نان تازه و سفره صبحانه شیرازی",
    description: "سرو صبحانه سنتی دست‌چین شده با سرشیر محلی، پنیر شیرازی و عرق بهارنارنج در ایوان.",
    poster: "/images/breakfast.jpg",
    videoSrc: "/videos/reel-4.mp4",
    duration: "۰:۳۸",
    tag: "میزبانی سنتی",
  },
];

export function ReelsSection() {
  const [activeStoryIndex, setActiveStoryIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const activeStory = activeStoryIndex !== null ? VIDEO_STORIES[activeStoryIndex] : null;

  useEffect(() => {
    setIsPlaying(true);
    setProgress(0);
    setVideoError(false);
  }, [activeStoryIndex]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration;
    if (total > 0) {
      setProgress((current / total) * 100);
    }
  };

  const nextStory = () => {
    if (activeStoryIndex === null) return;
    setActiveStoryIndex((activeStoryIndex + 1) % VIDEO_STORIES.length);
  };

  const prevStory = () => {
    if (activeStoryIndex === null) return;
    setActiveStoryIndex((activeStoryIndex - 1 + VIDEO_STORIES.length) % VIDEO_STORIES.length);
  };

  return (
    <section id="reels" className="py-20 md:py-32 bg-[#090f1d] text-white relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-[#1e3a8a]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-[#0284c7]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl text-right">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-medium text-[#93c5fd] mb-4">
              <Film className="w-3.5 h-3.5 text-[#60a5fa]" />
              <span>روایت‌های کوتاه ویدیویی (عمودی ۹:۱۶)</span>
            </div>

            <h2 className="text-[32px] sm:text-[44px] lg:text-[50px] font-bold leading-[44px] sm:leading-[58px] tracking-[-1px] text-white mb-3">
              تماشای حال و هوای زنده عمارت
            </h2>

            <p className="text-sm sm:text-lg leading-7 sm:leading-8 text-white/70">
              چند ثانیه تماشای آرامش جاری در حیاط، رقص آفتاب روی ارسی‌ها و شب‌های دلنشین شیراز؛ روی هر ویدیو کلیک کنید تا با کیفیت بالا پخش شود.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-white/60 bg-white/5 px-4 py-2.5 rounded-full border border-white/10">
            <Sparkles className="w-4 h-4 text-[#60a5fa]" />
            <span>پخش مستقیم روی تمام دستگاه‌ها بدون نیاز به فیلترشکن</span>
          </div>
        </div>

        {/* 9:16 Video Story Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {VIDEO_STORIES.map((story, index) => (
            <div
              key={story.id}
              onClick={() => setActiveStoryIndex(index)}
              className="group relative aspect-[9/16] rounded-[24px] overflow-hidden bg-slate-900 border border-white/10 hover:border-white/30 shadow-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Poster Image */}
              <Image
                src={story.poster}
                alt={story.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/40 group-hover:from-black/95 transition-all" />

              {/* Top Tag & Duration */}
              <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-[11px] font-semibold text-white">
                  {story.tag}
                </span>

                <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-mono text-white/90 border border-white/10">
                  {story.duration}
                </span>
              </div>

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div className="w-14 h-14 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-2xl transition-all duration-300 group-hover:scale-115 group-hover:bg-white group-hover:text-[#172554]">
                  <Play className="w-6 h-6 fill-current translate-x-[-1px]" />
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-0 inset-x-0 p-5 z-10 text-right flex flex-col justify-end">
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug line-clamp-2 mb-1.5 group-hover:text-[#93c5fd] transition-colors">
                  {story.title}
                </h3>
                <p className="text-xs text-white/70 line-clamp-2 leading-5">
                  {story.description}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-[#60a5fa] font-bold">
                  <span>پخش ویدیو</span>
                  <span>&larr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Vertical Story/Reel Video Player Modal */}
      {activeStory && (
        <Dialog open={activeStoryIndex !== null} onOpenChange={(open) => !open && setActiveStoryIndex(null)}>
          <DialogContent
            className="sm:max-w-[430px] w-[95vw] h-[85vh] max-h-[780px] p-0 bg-black border border-white/20 text-white rounded-[28px] overflow-hidden shadow-2xl flex flex-col justify-between"
            aria-describedby={undefined}
          >
            <DialogTitle className="sr-only">{activeStory.title}</DialogTitle>

            {/* Video Container */}
            <div className="relative w-full h-full flex items-center justify-center bg-black overflow-hidden select-none">
              {/* Native Video Element */}
              <video
                ref={videoRef}
                src={activeStory.videoSrc}
                poster={activeStory.poster}
                playsInline
                autoPlay
                loop
                muted={isMuted}
                onTimeUpdate={handleTimeUpdate}
                onError={() => setVideoError(true)}
                onClick={togglePlay}
                className="w-full h-full object-cover cursor-pointer"
              />

              {/* If Video file is not yet placed in public/videos/, show graceful interactive fallback */}
              {videoError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-black/75 backdrop-blur-sm z-20">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                    <Film className="w-8 h-8 text-[#60a5fa]" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{activeStory.title}</h4>
                  <p className="text-xs sm:text-sm text-white/70 mb-4 max-w-xs leading-6">
                    فایل ویدیوی این بخش با فرمت MP4 در مسیر زیر قرار می‌گیرد:
                  </p>
                  <code className="bg-white/10 text-[#93c5fd] px-3 py-1.5 rounded-lg text-xs font-mono mb-4 text-ltr" dir="ltr">
                    public{activeStory.videoSrc}
                  </code>
                  <p className="text-[11px] text-white/50">
                    به محض قرار دادن فایل، ویدیو به صورت خودکار و زنده پخش خواهد شد.
                  </p>
                </div>
              )}

              {/* Gradient Scrims for Top & Bottom Controls */}
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none z-10" />

              {/* Top Bar: Progress Indicator & Controls */}
              <div className="absolute top-0 inset-x-0 p-4 z-30 flex flex-col gap-3">
                {/* Story Timeline Progress Bar */}
                <div className="w-full h-1 bg-white/25 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white transition-all duration-150 ease-linear rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full overflow-hidden bg-white relative border border-white/30">
                      <Image src="/images/logo.jpg" alt="لوگو" fill sizes="28px" className="object-contain" />
                    </div>
                    <span className="text-xs font-bold text-white drop-shadow">عمارت تاریخی فرهادی</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleMute}
                      className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
                      title={isMuted ? "وصل صدا" : "قطع صدا"}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => setActiveStoryIndex(null)}
                      className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Previous / Next Side Tap Zones */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevStory();
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 hover:bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all z-20"
                title="ویدیوی قبلی"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextStory();
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 hover:bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all z-20"
                title="ویدیوی بعدی"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Play / Pause Center Overlay Toggle when paused */}
              {!isPlaying && !videoError && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center z-20 bg-black/30 cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white shadow-2xl">
                    <Play className="w-8 h-8 fill-current translate-x-[-1px]" />
                  </div>
                </div>
              )}

              {/* Bottom Caption & Controls */}
              <div className="absolute bottom-0 inset-x-0 p-5 z-30 text-right space-y-2 pointer-events-auto">
                <span className="inline-block text-[11px] px-2.5 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-md font-medium">
                  {activeStory.tag}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white drop-shadow">
                  {activeStory.title}
                </h4>
                <p className="text-xs text-white/80 leading-5 drop-shadow">
                  {activeStory.description}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs text-white/60 border-t border-white/15">
                  <button
                    onClick={togglePlay}
                    className="flex items-center gap-1.5 text-white/90 hover:text-white"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                    <span>{isPlaying ? "توقف پخش" : "ادامه پخش"}</span>
                  </button>

                  <span className="text-[11px] text-white/50">
                    {(activeStoryIndex ?? 0) + 1} از {VIDEO_STORIES.length}
                  </span>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
