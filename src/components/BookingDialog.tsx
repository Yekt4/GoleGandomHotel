"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, MessageCircle } from "lucide-react";
import { toast } from "sonner";

interface BookingDialogProps {
  initialRoom?: string;
  trigger?: React.ReactNode;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function BookingDialog({
  initialRoom = "اتاق تالار آینه قاجاری",
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

    toast.success("درخواست رزرو شما ثبت شد و در حال اتصال به واتس‌اپ هتل هستید.");
    window.open(`https://wa.me/989170000000?text=${text}`, "_blank");
    setOpen(false);
  };

  const renderedTrigger = trigger && React.isValidElement(trigger)
    ? React.cloneElement(trigger as React.ReactElement<{ onClick?: () => void }>, {
        onClick: () => setOpen(true),
      })
    : trigger ? (
      <div onClick={() => setOpen(true)} className="inline-block cursor-pointer">
        {trigger}
      </div>
    ) : null;

  return (
    <>
      {renderedTrigger}
      <Dialog open={openState} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[500px] p-6 text-right bg-white rounded-[16px] border border-[#e2e8f0] shadow-2xl">
          <DialogHeader className="text-right">
            <DialogTitle className="text-xl font-bold text-[#172554]">
              درخواست رزرو و استعلام ظرفیت
            </DialogTitle>
          </DialogHeader>

          <p className="text-sm text-[#475569] mb-3">
            اطلاعات اقامت خود را وارد نمایید تا پذیرش هتل سریعاً از طریق واتس‌اپ پاسخگوی شما باشد:
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="b-name" className="text-xs sm:text-sm font-semibold text-[#172554]">نام و نام خانوادگی</Label>
              <Input
                id="b-name"
                placeholder="مثال: سهراب حسینی"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-[8px] border-[#cbd5e1] focus:border-[#172554] h-10"
                required
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="b-phone" className="text-xs sm:text-sm font-semibold text-[#172554]">شماره تماس همراه</Label>
              <Input
                id="b-phone"
                type="tel"
                placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="rounded-[8px] border-[#cbd5e1] focus:border-[#172554] h-10"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label htmlFor="b-checkin" className="text-xs sm:text-sm font-semibold text-[#172554]">تاریخ ورود</Label>
                <Input
                  id="b-checkin"
                  type="date"
                  value={checkin}
                  onChange={(e) => setCheckin(e.target.value)}
                  className="rounded-[8px] border-[#cbd5e1] focus:border-[#172554] h-10"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="b-checkout" className="text-xs sm:text-sm font-semibold text-[#172554]">تاریخ خروج</Label>
                <Input
                  id="b-checkout"
                  type="date"
                  value={checkout}
                  onChange={(e) => setCheckout(e.target.value)}
                  className="rounded-[8px] border-[#cbd5e1] focus:border-[#172554] h-10"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label htmlFor="b-room" className="text-xs sm:text-sm font-semibold text-[#172554]">نوع اتاق</Label>
                <select
                  id="b-room"
                  value={room}
                  onChange={(e) => setRoom(e.target.value)}
                  className="w-full h-10 px-3 bg-white border border-[#cbd5e1] rounded-[8px] text-xs sm:text-sm focus:outline-none focus:border-[#172554]"
                >
                  <option value="اتاق تالار آینه قاجاری">اتاق تالار آینه قاجاری</option>
                  <option value="سوئیت رویال شاه‌نشین">سوئیت رویال شاه‌نشین</option>
                  <option value="اتاق پنج‌دری رو به آفتاب">اتاق پنج‌دری رو به آفتاب</option>
                  <option value="اتاق دبل سنتی با طاق خشتی">اتاق دبل سنتی با طاق خشتی</option>
                  <option value="اتاق ارسی سه‌دری مشرف به مهتابی">اتاق ارسی سه‌دری مشرف به مهتابی</option>
                </select>
              </div>

              <div className="space-y-1">
                <Label htmlFor="b-guests" className="text-xs sm:text-sm font-semibold text-[#172554]">تعداد نفرات</Label>
                <select
                  id="b-guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full h-10 px-3 bg-white border border-[#cbd5e1] rounded-[8px] text-xs sm:text-sm focus:outline-none focus:border-[#172554]"
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
                className="w-full h-11 bg-[#172554] hover:bg-[#0f172a] text-white rounded-[12px] font-bold text-base gap-2 cursor-pointer shadow-md"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                ارسال درخواست به واتس‌اپ هتل
              </Button>
              <a
                href="tel:07132220000"
                className="w-full h-11 border border-[#cbd5e1] hover:border-[#172554] hover:bg-[#eff6ff] text-[#172554] rounded-[12px] flex items-center justify-center gap-2 text-sm font-medium transition-colors"
              >
                <Phone className="w-4 h-4 text-[#172554]" />
                یا تماس تلفنی مستقیم: ۰۷۱-۳۲۲۲۰۰۰۰
              </a>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
