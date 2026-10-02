"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "./BookingDialog";
import { MessageCircle, Phone } from "lucide-react";

interface Room {
  id: string;
  title: string;
  subtitle: string;
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
    image: "/images/room-mirror-hall.jpg",
    capacity: "۲ الی ۳ نفر",
    size: "۳۵ متر مربع",
    architectureFeature: "آینه‌کاری دست‌تراش دوره قاجار",
    highlights: [
      "پنجره ارسی بزرگ با شیشه‌های رنگی دست‌ساز",
      "تخت‌خواب دست‌ساز شاهانه با منبت‌کاری کهن",
      "سرویس بهداشتی و حمام اختصاصی مدرن",
      "چشم‌انداز رو به حوض فیروزه‌ای حیاط مرکزی",
    ],
    description: "تالار آینه نگین درخشان عمارت فرهادی است. هزاران قطعه آینه دست‌تراش با نقوش اسلیمی همراه با ارسی اصیل قاجاری، در ساعات روز بازتابی رویایی از نورهای رنگین‌کمان را خلق می‌کنند.",
  },
  {
    id: "royal",
    title: "سوئیت رویال شاه‌نشین",
    subtitle: "بلندترین سقف عمارت با مقرنس‌کاری و تخت سایه‌بان‌دار",
    image: "/images/room-royal-suite.jpg",
    capacity: "۲ الی ۴ نفر",
    size: "۴۵ متر مربع",
    architectureFeature: "مقرنس‌کاری و نقاشی اسلیمی",
    highlights: [
      "تخت چهارستون سایه‌بان‌دار با پارچه‌های زربفت",
      "نشیمن مجزا با مبل‌های منبت‌کاری کهن",
      "فضای دلباز و تهویه مطبوع هوشمند",
      "پذیرایی اختصاصی چای سنتی و عرقیات شیراز",
    ],
    description: "شاه‌نشین عمارت با سقف بلند مقرنس‌کاری و تزیینات اصیل نقاشی دیواری، تجربه‌ای ملموس از شکوه زندگی اشرافی در شیراز قدیم را بازآفرینی می‌کند.",
  },
  {
    id: "pandari",
    title: "اتاق پنج‌دری رو به آفتاب",
    subtitle: "پنج لنگه در چوبی ارسی و فرش دستباف فارس",
    image: "/images/room-pandari.jpg",
    capacity: "۲ نفر",
    size: "۲۸ متر مربع",
    architectureFeature: "پنج لنگه درب ارسی با طاق هلالی",
    highlights: [
      "بازشو سراسری رو به عطر بهارنارنج‌های حیاط مرکزی",
      "فرش‌های دستباف اصیل قشقایی و مبلمان سنتی",
      "سماور برنجی دکوری و چیدمان کهن شیرازی",
      "عایق کامل صوتی با حفظ ساختار چوبی اصیل",
    ],
    description: "اتاق پنج‌دری محبوب‌ترین فضای معماری ایرانی برای سحرخیزان است. تابش آفتاب صبحگاهی از میان شیشه‌های رنگی پنج درِ چوبی، فضایی سرشار از زندگی و نور طبیعی پدید می‌آورد.",
  },
  {
    id: "double",
    title: "اتاق دبل سنتی با طاق خشتی",
    subtitle: "سقف‌های ضربی آرامش‌بخش با اندود گچ و کاه‌گل عطرآگین",
    image: "/images/room-double.jpg",
    capacity: "۲ نفر",
    size: "۲۴ متر مربع",
    architectureFeature: "طاق و تویزه ضربی با دیواره‌های قطور",
    highlights: [
      "دمای طبیعی معتدل و سکوت کامل به لطف معماری خشتی",
      "دو تخت مجزا (تویین) یا یک تخت دبل بزرگ",
      "روتختی‌های اصیل ترمه دست‌دوز",
      "سیستم سرمایش و گرمایش اینورتر بی‌صدا",
    ],
    description: "برای مهمانانی که به دنبال نهایت آرامش و سکوت در دل بافت کهن شیراز هستند؛ دیوارهای قطور خشتی و طاق‌های ضربی، فضایی خنک، دنج و عاری از هرگونه صدای شهری را تضمین می‌کنند.",
  },
  {
    id: "arsi",
    title: "اتاق ارسی سه‌دری مشرف به مهتابی",
    subtitle: "پنجره‌های کشویی چوبی با دسترسی به ایوان اختصاصی",
    image: "/images/detail-orsi.jpg",
    capacity: "۲ نفر",
    size: "۲۲ متر مربع",
    architectureFeature: "گره‌چینی دست‌ساز با دسترسی به ایوان",
    highlights: [
      "نشیمن اختصاصی در ایوان مشرف به حیاط",
      "شیشه‌های رنگی یاقوتی، فیروزه‌ای و کهربایی",
      "مینی‌بار و صندوق امانات دیجیتال",
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
    <section id="rooms" className="py-24 md:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header - Editorial & Restrained */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-24 pb-8 border-b border-[#dfd9cc]">
          <div className="max-w-2xl text-right">
            <h2 className="text-[32px] sm:text-[44px] lg:text-[48px] font-bold leading-tight text-[#172554] tracking-tight mb-4">
              اتاق‌ها و سوئیت‌های عمارت
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#555f6d] font-light">
              هر اتاق بازآفرینی هویتی از عصر قاجار و پهلوی؛ تلفیق چیدمان اصیل سنتی با بالاترین استانداردهای آسایش و هتلداری.
            </p>
          </div>

          <div className="flex-shrink-0">
            <BookingDialog
              trigger={
                <Button className="bg-[#172554] hover:bg-[#0f172a] text-white rounded-full h-11 px-7 text-sm font-semibold shadow-sm cursor-pointer">
                  استعلام و رزرو
                </Button>
              }
            />
          </div>
        </div>

        {/* Room Showcases - Alternating Editorial Layout */}
        <div className="flex flex-col gap-20 sm:gap-28">
          {ROOMS.map((room, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={room.id}
                className="bg-[#faf8f5] rounded-[24px] border border-[#dfd9cc] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch"
              >
                {/* Photo Frame */}
                <div
                  className={`lg:col-span-7 relative min-h-[360px] sm:min-h-[440px] lg:min-h-[500px] overflow-hidden group ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:hidden" />

                  <div className="absolute bottom-5 right-5 left-5 text-white lg:hidden z-10 text-right">
                    <h3 className="text-2xl font-bold text-white mb-1">{room.title}</h3>
                    <p className="text-xs text-white/90">{room.subtitle}</p>
                  </div>
                </div>

                {/* Content Panel */}
                <div
                  className={`lg:col-span-5 p-7 sm:p-9 lg:p-11 flex flex-col justify-between text-right ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div>
                    <h3 className="hidden lg:block text-2xl sm:text-3xl font-bold text-[#172554] leading-snug mb-3">
                      {room.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#555f6d] mb-6 leading-relaxed font-light">
                      {room.description}
                    </p>

                    {/* Room Specs - Editorial Line */}
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 py-3 border-y border-[#dfd9cc] text-xs sm:text-sm text-[#555f6d] mb-6">
                      <span>ظرفیت: <strong className="text-[#172554] font-semibold">{room.capacity}</strong></span>
                      <span>·</span>
                      <span>مساحت: <strong className="text-[#172554] font-semibold">{room.size}</strong></span>
                      <span>·</span>
                      <span>{room.architectureFeature}</span>
                    </div>

                    {/* Highlights - Editorial Typography, No Checkmark Icons */}
                    <ul className="space-y-2.5 mb-8 text-xs sm:text-sm text-[#475569] font-light">
                      {room.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5">
                          <span className="text-[#8c7b64] font-bold select-none">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[#dfd9cc] flex items-center gap-3">
                    <Button
                      onClick={() => handleOpenBooking(room.title)}
                      className="flex-1 bg-[#172554] hover:bg-[#0f172a] text-white rounded-full h-11 text-sm font-semibold gap-2 shadow-sm cursor-pointer"
                    >
                      <Phone className="w-4 h-4 text-white/80" />
                      تماس برای رزرو
                    </Button>

                    <a
                      href={`https://wa.me/989170000000?text=${encodeURIComponent(`سلام، درخواست رزرو ${room.title} در بوتیک هتل فرهادی شیراز را دارم.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-11 px-5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center gap-2 text-sm font-semibold transition-colors shadow-sm"
                      aria-label={`رزرو ${room.title} در واتس‌اپ`}
                    >
                      <MessageCircle className="w-4 h-4" />
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

