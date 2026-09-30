"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, MessageCircle } from "lucide-react";

interface BookingDialogProps {
  initialRoom?: string;
  trigger?: React.ReactNode;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function BookingDialog({
  initialRoom = "اتاق تالار آینه",
  trigger,
  isOpen,
  onOpenChange,
}: BookingDialogProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [room, setRoom] = useState(initialRoom);
  const [guests, setGuests] = useState("2");

  const openState = isOpen !== undefined ? isOpen : internalOpen;
  const setOpen = onOpenChange !== undefined ? onOpenChange : setInternalOpen;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `سلام، درخواست رزرو در بوتیک هتل فرهادی شیراز:%0A` +
      `نام: ${encodeURIComponent(name || "مهمان گرامی")}%0A` +
      `شماره همراه: ${encodeURIComponent(phone)}%0A` +
      `اتاق انتخابی: ${encodeURIComponent(room)}%0A` +
      `تاریخ ورود: ${encodeURIComponent(checkin)}%0A` +
      `تاریخ خروج: ${encodeURIComponent(checkout)}%0A` +
      `تعداد مهمانان: ${encodeURIComponent(guests)} نفر`;

    window.open(`https://wa.me/989170000000?text=${text}`, "_blank");
    setOpen(false);
  };

  return (
    <Dialog open={openState} onOpenChange={setOpen}>
      {trigger && <DialogTrigger>{trigger}</DialogTrigger>}
      <DialogContent className="sm:max-w-[500px] p-6 text-right bg-white rounded-[12px] border border-[#e0ded4]">
        <DialogHeader className="text-right">
          <DialogTitle className="text-xl font-medium text-black">
            درخواست رزرو و استعلام ظرفیت
          </DialogTitle>
        </DialogHeader>

        <p className="text-sm text-[#333333] mb-3">
          اطلاعات اقامت خود را وارد نمایید تا پذیرش هتل سریعاً از طریق واتس‌اپ پاسخگوی شما باشد:
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="b-name" className="text-sm font-normal text-[#333333]">نام و نام خانوادگی</Label>
            <Input
              id="b-name"
              placeholder="مثال: سهراب حسینی"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-[6px] border-[#e0ded4] focus:border-[#0096f7] h-10"
              required
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="b-phone" className="text-sm font-normal text-[#333333]">شماره تماس همراه</Label>
            <Input
              id="b-phone"
              type="tel"
              placeholder="۰۹۱۲۳۴۵۶۷۸۹"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="rounded-[6px] border-[#e0ded4] focus:border-[#0096f7] h-10"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label htmlFor="b-checkin" className="text-sm font-normal text-[#333333]">تاریخ ورود</Label>
              <Input
                id="b-checkin"
                type="date"
                value={checkin}
                onChange={(e) => setCheckin(e.target.value)}
                className="rounded-[6px] border-[#e0ded4] focus:border-[#0096f7] h-10"
                required
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="b-checkout" className="text-sm font-normal text-[#333333]">تاریخ خروج</Label>
              <Input
                id="b-checkout"
                type="date"
                value={checkout}
                onChange={(e) => setCheckout(e.target.value)}
                className="rounded-[6px] border-[#e0ded4] focus:border-[#0096f7] h-10"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label htmlFor="b-room" className="text-sm font-normal text-[#333333]">نوع اتاق</Label>
              <select
                id="b-room"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                className="w-full h-10 px-3 bg-white border border-[#e0ded4] rounded-[6px] text-sm focus:outline-none focus:border-[#0096f7]"
              >
                <option value="اتاق تالار آینه">اتاق تالار آینه</option>
                <option value="سوئیت سلطنتی شاه‌نشین">سوئیت سلطنتی شاه‌نشین</option>
                <option value="اتاق پنج‌دری قاجاری">اتاق پنج‌دری قاجاری</option>
                <option value="اتاق دبل سنتی">اتاق دبل سنتی</option>
                <option value="اتاق ارسی سه‌دری">اتاق ارسی سه‌دری</option>
                <option value="سوئیت خانوادگی عمارت">سوئیت خانوادگی عمارت</option>
              </select>
            </div>

            <div className="space-y-1">
              <Label htmlFor="b-guests" className="text-sm font-normal text-[#333333]">تعداد نفرات</Label>
              <select
                id="b-guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full h-10 px-3 bg-white border border-[#e0ded4] rounded-[6px] text-sm focus:outline-none focus:border-[#0096f7]"
              >
                <option value="1">۱ نفر</option>
                <option value="2">۲ نفر</option>
                <option value="3">۳ نفر</option>
                <option value="4">۴ نفر یا بیشتر</option>
              </select>
            </div>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <Button
              type="submit"
              className="w-full h-11 bg-[#0096f7] hover:bg-[#0084dc] text-white rounded-[12px] font-medium text-base gap-2 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              ارسال درخواست به واتس‌اپ هتل
            </Button>
            <a
              href="tel:07132220000"
              className="w-full h-11 border border-[#e0ded4] hover:border-[#0096f7] hover:bg-[#e6f5fe] text-black hover:text-[#0096f7] rounded-[12px] flex items-center justify-center gap-2 text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              یا تماس تلفنی مستقیم: ۰۷۱-۳۲۲۲۰۰۰۰
            </a>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
