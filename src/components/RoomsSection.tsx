"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "./BookingDialog";
import { Users, Maximize2, Sparkles, MessageCircle, Phone, ArrowLeft, CheckCircle2 } from "lucide-react";

interface Room {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  capacity: string;
  size: string;
  architectureFeature: string;
  highlights: string[];
  description: string;
}

const ROOMS: Room[] = [
  {
    id: "mirror",
    title: "اتاق تالار آینه قاجاری",
    subtitle: "شکوه آینه‌کاری دست‌ساز و پنجره‌های هفت‌رنگ ارسی",
    badge: "اقامتگاه سلطنتی و ویژه",
    image: "/images/room-mirror-hall.jpg",
    capacity: "۲ الی ۳ نفر",
    size: "۳۵ متر مربع",
    architectureFeature: "سقف و دیواره‌های تمام آینه‌کاری دوره قاجار",
    highlights: [
      "پنجره ارسی بزرگ با شیشه‌های رنگی دست‌ساز",
      "تخت‌خواب دست‌ساز شاهانه با منبت‌کاری کهن",
      "سرویس بهداشتی و حمام مدرن اختصاصی",
      "چشم‌انداز اختصاصی رو به حوض فیروزه‌ای حیاط",
    ],
    description: "تالار آینه نگین درخشان عمارت فرهادی است. هزاران قطعه آینه دست‌تراش با نقوش اسلیمی همراه با ارسی اصیل قاجاری، در ساعات روز بازتابی رویایی از نورهای رنگین‌کمان را خلق می‌کنند.",
  },
  {
    id: "royal",
    title: "سوئیت رویال شاه‌نشین",
    subtitle: "بلندترین سقف عمارت با مقرنس‌کاری و تخت سایه‌بان‌دار",
    badge: "مجلل‌ترین سوئیت عمارت",
    image: "/images/room-royal-suite.jpg",
    capacity: "۲ الی ۴ نفر",
    size: "۴۵ متر مربع",
    architectureFeature: "مقرنس‌کاری، گچ‌بری و نقاشی‌های اسلیمی صفوی-قاجاری",
    highlights: [
      "تخت چهارستون سایه‌بان‌دار با پارچه‌های زربفت",
      "نشیمن مجزا با مبل‌های منبت‌کاری و صندوقچه‌های قدیمی",
      "فضای بسیار دلباز و تهویه مطبوع هوشمند",
      "پذیرایی اختصاصی چای سنتی و عرقیات شیراز در سوئیت",
    ],
    description: "شاه‌نشین عمارت با سقف بلند مقرنس‌کاری و تزیینات اصیل نقاشی دیواری، تجربه‌ای ملموس از شکوه زندگی اشرافی در شیراز قدیم را برای مهمانان بازآفرینی می‌کند.",
  },
  {
    id: "pandari",
    title: "اتاق پنج‌دری رو به آفتاب",
    subtitle: "پنج لنگه در چوبی ارسی و فرش دستباف فارس",
    badge: "نورگیرترین اتاق عمارت",
    image: "/images/room-pandari.jpg",
    capacity: "۲ نفر",
    size: "۲۸ متر مربع",
    architectureFeature: "پنج لنگه درب بازشو به حیاط با طاق هلالی خشتی",
    highlights: [
      "بازشو سراسری رو به عطر بهارنارنج‌های حیاط مرکزی",
      "فرش‌های دستباف اصیل قشقایی و مبلمان سنتی",
      "سماور برنجی دکوری و چیدمان کهن شیرازی",
      "عایق کامل صوتی با حفظ پنجره‌های چوبی اصیل",
    ],
    description: "اتاق پنج‌دری محبوب‌ترین فضای معماری ایرانی برای سحرخیزان است. تابش آفتاب صبحگاهی از میان شیشه‌های رنگی پنج درِ چوبی، اتاقی پر از انرژی و نور طبیعی پدید می‌آورد.",
  },
  {
    id: "double",
    title: "اتاق دبل سنتی با طاق خشتی",
    subtitle: "سقف‌های ضربی آرامش‌بخش با اندود گچ و کاه‌گل عطرآگین",
    badge: "دنج‌ترین واحد برای استراحت",
    image: "/images/room-double.jpg",
    capacity: "۲ نفر",
    size: "۲۴ متر مربع",
    architectureFeature: "طاق و تویزه ضربی با دیواره‌های ضخیم خشتی",
    highlights: [
      "دمای طبیعی بسیار معتدل به لطف معماری خشتی",
      "دو تخت مجزا (تویین) یا یک تخت دبل بزرگ",
      "روتختی‌های اصیل ترمه دوزی‌شده دست‌ساز",
      "سیستم سرمایش و گرمایش هوشمند اینورتر",
    ],
    description: "برای مهمانانی که به دنبال نهایت آرامش و سکوت در دل بافت کهن شیراز هستند؛ دیوارهای قطور خشتی و طاق‌های ضربی، فضایی خنک، دنج و عاری از هرگونه صدای شهری را تضمین می‌کنند.",
  },
  {
    id: "arsi",
    title: "اتاق ارسی سه‌دری مشرف به مهتابی",
    subtitle: "پنجره‌های کشویی چوبی با دسترسی به ایوان اختصاصی",
    badge: "منظره مستقیم حوض فیروزه",
    image: "/images/detail-orsi.jpg",
    capacity: "۲ نفر",
    size: "۲۲ متر مربع",
    architectureFeature: "گره‌چینی چوبی دست‌ساز و دسترسی به مهتابی",
    highlights: [
      "نشیمن اختصاصی در ایوان مشرف به حیاط",
      "شیشه‌های رنگی یاقوتی، فیروزه‌ای و کهربایی",
      "مینی‌بار، صندوق امانات دیجیتال و کتری برقی",
      "اینترنت فیبر نوری پرسرعت و میز کار سنتی",
    ],
    description: "اتاق ارسی سه‌دری پیوندی ناگسستنی با حیاط مرکزی دارد. باز کردن ارسی رو به صدای آب فواره حوض فیروزه‌ای و شب‌نشینی در ایوان مهتابی، لحظاتی خاطره‌انگیز را رقم می‌زند.",
  },
];

export function RoomsSection() {
  const [selectedRoomForDialog, setSelectedRoomForDialog] = useState<string>("اتاق تالار آینه قاجاری");
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const handleOpenBooking = (roomTitle: string) => {
    setSelectedRoomForDialog(roomTitle);
    setDialogOpen(true);
  };

  return (
    <section id="rooms" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header - Bold & Architectural */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20 pb-8 border-b border-[#e2e8f0]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#172554]"></span>
              <span className="text-xs sm:text-sm font-bold tracking-wider text-[#172554] uppercase">
                اتاق‌ها و سوئیت‌های عمارت
              </span>
            </div>
            <h2 className="text-[34px] sm:text-[46px] lg:text-[52px] font-bold leading-[44px] sm:leading-[58px] text-[#172554] tracking-[-1px] mb-4">
              معرفی اختصاصی واحدهای اقامتی
            </h2>
            <p className="text-base sm:text-xl leading-8 sm:leading-9 text-[#475569]">
              هر اتاق یک اثر هنری ماندگار از عصر قاجار و پهلوی؛ تلفیق چیدمان اصیل سنتی با بالاترین استانداردهای هتلداری لوکس.
            </p>
          </div>

          <div className="flex-shrink-0">
            <BookingDialog
              trigger={
                <Button className="bg-[#172554] hover:bg-[#0f172a] text-white rounded-[12px] h-13 px-7 text-base font-bold shadow-md cursor-pointer">
                  استعلام ظرفیت و رزرو اتاق‌ها
                </Button>
              }
            />
          </div>
        </div>

        {/* Big Bolder Showcase Cards - Alternating High-Impact Layout */}
        <div className="flex flex-col gap-16 md:gap-24">
          {ROOMS.map((room, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={room.id}
                className="bg-[#f8fafc] rounded-[24px] border border-[#e2e8f0] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 items-stretch"
              >
                {/* Large Photo Frame (Takes 7 cols on desktop) */}
                <div
                  className={`lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] overflow-hidden group ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                  
                  {/* Floating Badges */}
                  <div className="absolute top-5 right-5 z-10 flex flex-wrap gap-2">
                    <span className="bg-[#172554]/90 backdrop-blur-md text-white text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-[12px] shadow-md border border-white/20">
                      {room.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-5 right-5 left-5 text-white lg:hidden z-10">
                    <h3 className="text-2xl font-bold text-white mb-1">{room.title}</h3>
                    <p className="text-xs text-white/90">{room.subtitle}</p>
                  </div>
                </div>

                {/* Content Panel (Takes 5 cols on desktop) */}
                <div
                  className={`lg:col-span-5 p-7 sm:p-10 lg:p-12 flex flex-col justify-between ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div>
                    <span className="hidden lg:block text-xs font-bold text-[#2563eb] tracking-wider uppercase mb-2">
                      {room.architectureFeature}
                    </span>

                    <h3 className="hidden lg:block text-[28px] sm:text-[34px] font-bold text-[#172554] leading-tight mb-2">
                      {room.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#475569] mb-6 leading-7">
                      {room.description}
                    </p>

                    {/* Room Key Metrics */}
                    <div className="grid grid-cols-2 gap-3 p-4 rounded-[14px] bg-white border border-[#e2e8f0] mb-6">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-[10px] bg-[#eff6ff] text-[#172554] flex items-center justify-center flex-shrink-0">
                          <Users className="w-5 h-5 text-[#2563eb]" />
                        </div>
                        <div>
                          <span className="block text-[11px] text-[#64748b]">ظرفیت اتاق</span>
                          <strong className="text-sm font-bold text-[#172554]">{room.capacity}</strong>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-[10px] bg-[#eff6ff] text-[#172554] flex items-center justify-center flex-shrink-0">
                          <Maximize2 className="w-5 h-5 text-[#2563eb]" />
                        </div>
                        <div>
                          <span className="block text-[11px] text-[#64748b]">متراژ مفید</span>
                          <strong className="text-sm font-bold text-[#172554]">{room.size}</strong>
                        </div>
                      </div>
                    </div>

                    {/* Architectural Highlights Checklist */}
                    <div className="space-y-2 mb-8">
                      <span className="block text-xs font-bold text-[#172554] mb-2">
                        ویژگی‌های بارز اقامت:
                      </span>
                      {room.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#334155]">
                          <CheckCircle2 className="w-4 h-4 text-[#2563eb] flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions - Big & Bold */}
                  <div className="pt-4 border-t border-[#e2e8f0] flex flex-wrap items-center gap-3">
                    <Button
                      onClick={() => handleOpenBooking(room.title)}
                      className="flex-1 bg-[#172554] hover:bg-[#0f172a] text-white rounded-[12px] h-12 text-sm sm:text-base font-bold gap-2 shadow-md transition-all hover:scale-102 cursor-pointer"
                    >
                      <Phone className="w-4 h-4 text-[#60a5fa]" />
                      تماس برای رزرو
                    </Button>

                    <a
                      href={`https://wa.me/989170000000?text=${encodeURIComponent(`سلام، درخواست رزرو ${room.title} در بوتیک هتل فرهادی شیراز را دارم.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 px-5 rounded-[12px] bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center gap-2 text-sm sm:text-base font-bold transition-all shadow-md hover:scale-102"
                      aria-label={`رزرو ${room.title} در واتس‌اپ`}
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>واتس‌اپ</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
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
