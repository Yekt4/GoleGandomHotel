"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "./BookingDialog";
import { Users, Maximize2, Sparkles, MessageCircle, Phone } from "lucide-react";

interface Room {
  id: string;
  title: string;
  badge: string;
  image: string;
  capacity: string;
  size: string;
  feature: string;
  description: string;
}

const ROOMS: Room[] = [
  {
    id: "mirror",
    title: "اتاق تالار آینه",
    badge: "ویژه و سلطنتی",
    image: "/images/room-mirror-hall.jpg",
    capacity: "۲ الی ۳ نفر",
    size: "۳۵ متر مربع",
    feature: "آینه‌کاری دست‌ساز و پنجره ارسی",
    description: "دیواره‌ها و سقف تماماً تزیین‌شده با آینه‌کاری‌های نفیس قاجاری، ارسی با شیشه‌های هفت‌رنگ، تخت‌خواب دست‌ساز شاهانه، و سرویس بهداشتی مدرن.",
  },
  {
    id: "royal",
    title: "سوئیت رویال شاه‌نشین",
    badge: "مجلل‌ترین واحد عمارت",
    image: "/images/room-royal-suite.jpg",
    capacity: "۲ الی ۴ نفر",
    size: "۴۵ متر مربع",
    feature: "سقف مقرنس و تخت سایه‌بان",
    description: "مرتفع‌ترین سقف عمارت با نقاشی‌های اسلیمی اصیل، گچ‌بری و مقرنس‌کاری، تخت سایه‌بان‌دار خاتم‌کاری، فضای نشیمن مجزا و چشم‌انداز اختصاصی به حوض مرکزی.",
  },
  {
    id: "pandari",
    title: "اتاق پنج‌دری قاجاری",
    badge: "اصیل و نورگیر",
    image: "/images/room-pandari.jpg",
    capacity: "۲ نفر",
    size: "۲۸ متر مربع",
    feature: "پنجره پنج‌لنگه ارسی رو به حیاط",
    description: "پنج لنگه در چوبی بازشو به حیاط با شیشه‌های رنگارنگ که هنگام صبح فرشی از نور رنگی می‌گسترانند، طاق‌های خشتی و مبلمان سنتی چوبی با دسترسی آسان.",
  },
  {
    id: "double",
    title: "اتاق دبل / تویین سنتی",
    badge: "دنج و آرام",
    image: "/images/room-double.jpg",
    capacity: "۲ نفر",
    size: "۲۴ متر مربع",
    feature: "طاق ضربی و روتختی ترمه",
    description: "سقف‌های خشتی طاق ضربی با اندود کاه‌گل و گچ، دو تخت استاندارد با روتختی‌های دست‌دوز ترمه، تهویه مطبوع هوشمند، و عایق صوتی کامل جهت استراحت عمیق.",
  },
  {
    id: "arsi",
    title: "اتاق ارسی سه‌دری",
    badge: "پنجره رو به مهتابی",
    image: "/images/detail-orsi.jpg",
    capacity: "۲ نفر",
    size: "۲۲ متر مربع",
    feature: "ارسی کشویی مشرف به حیاط",
    description: "پنجره‌های چوبی ارسی کشویی مشرف به مهتابی و حوض فیروزه‌ای، چیدمان الهام‌گرفته از دوره پهلوی اول، مجهز به مینی‌بار، صندوق امانات و اینترنت پرسرعت.",
  },
  {
    id: "family",
    title: "سوئیت خانوادگی عمارت",
    badge: "مناسب خانواده‌ها",
    image: "/images/room-royal-suite.jpg",
    capacity: "۴ الی ۵ نفر",
    size: "۵۰ متر مربع",
    feature: "دو اتاق خواب متصل",
    description: "دارای دو فضای خواب مجزا متصل به هم، حمام بزرگ اختصاصی، مبلمان نشیمن راحت و فضای بزرگ برای اقامت‌های خانوادگی در قلب بافت تاریخی شیراز.",
  },
];

export function RoomsSection() {
  const [selectedRoomForDialog, setSelectedRoomForDialog] = useState<string>("اتاق تالار آینه");
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const handleOpenBooking = (roomTitle: string) => {
    setSelectedRoomForDialog(roomTitle);
    setDialogOpen(true);
  };

  return (
    <section id="rooms" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <Badge className="bg-[#fcfbf7] text-[#1e2952] border border-[#e0ded4] rounded-[12px] px-3.5 py-1 text-xs mb-3">
              واحدهای اقامتی عمارت
            </Badge>
            <h2 className="text-[30px] sm:text-[36px] font-normal leading-[42px] tracking-[-0.5px] text-[#1e2952] mb-3">
              ۱۴ اتاق اختصاصی با هویت و روایتی منحصر به فرد
            </h2>
            <p className="text-base sm:text-lg leading-8 text-[#555555]">
              هر واحد با دقت به جزییات تاریخی، چیدمان فرش‌های دستباف، مبلمان کهن چوبی و استانداردهای آسایش هتلی تجهیز گردیده است.
            </p>
          </div>

          <div>
            <Button
              onClick={() => handleOpenBooking("همه اتاق‌ها")}
              className="bg-[#0096f7] hover:bg-[#0084dc] text-white rounded-[12px] h-11 px-5 text-sm font-medium"
            >
              استعلام ظرفیت کلیه اتاق‌ها
            </Button>
          </div>
        </div>

        {/* Samara-Style Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROOMS.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-[16px] border border-[#e0ded4] overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-md hover:border-[#0096f7]"
            >
              {/* Image Frame */}
              <div className="relative h-[250px] w-full overflow-hidden bg-[#f7f7f5]">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3.5 right-3.5">
                  <span className="bg-white/95 backdrop-blur-md text-[#1e2952] text-xs font-medium px-3 py-1 rounded-[12px] border border-[#e0ded4] shadow-xs">
                    {room.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl font-medium text-[#1e2952]">{room.title}</h3>
                </div>

                {/* Specs */}
                <div className="flex flex-wrap items-center gap-4 py-3 border-y border-[#e0ded4] text-xs text-[#555555] mb-4">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#0096f7]" />
                    {room.capacity}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5 text-[#0096f7]" />
                    {room.size}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#0096f7]" />
                    {room.feature}
                  </span>
                </div>

                <p className="text-sm leading-6 text-[#555555] mb-6 flex-1">
                  {room.description}
                </p>

                {/* Card Actions */}
                <div className="flex items-center gap-2 mt-auto pt-2">
                  <Button
                    onClick={() => handleOpenBooking(room.title)}
                    className="flex-1 bg-[#0096f7] hover:bg-[#0084dc] text-white rounded-[12px] h-10 text-xs sm:text-sm font-medium gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    تماس برای رزرو
                  </Button>

                  <a
                    href={`https://wa.me/989170000000?text=${encodeURIComponent(`سلام، درخواست رزرو ${room.title} در بوتیک هتل فرهادی شیراز`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-[12px] bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center transition-colors shadow-xs"
                    aria-label={`رزرو ${room.title} در واتس‌اپ`}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Dialog triggered from cards */}
        <BookingDialog
          initialRoom={selectedRoomForDialog}
          isOpen={dialogOpen}
          onOpenChange={setDialogOpen}
        />
      </div>
    </section>
  );
}
