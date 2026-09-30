import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "بوتیک هتل فرهادی شیراز | اقامت در عمارت تاریخی قاجار-پهلوی",
  description: "بوتیک هتل سنتی فرهادی در بافت تاریخی شیراز، بازسازی اصیل دوران قاجار و پهلوی با ۱۴ اتاق اختصاصی، تالار آینه، پنج‌دری، کافه سنتی و چشم‌انداز گنبد شاهچراغ. رزرو مستقیم.",
  keywords: ["بوتیک هتل فرهادی شیراز", "هتل سنتی شیراز", "رزرو هتل شیراز", "شاهچراغ", "هتل بافت تاریخی"],
  openGraph: {
    title: "بوتیک هتل فرهادی شیراز | اقامتگاه تاریخی و بومی",
    description: "تجربه‌ای فراموش‌نشدنی از اقامت در قلب تاریخی شیراز؛ سه‌راه نمازی، خیابان شهید دستغیب.",
    images: ["/images/hero.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="h-full">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rastikerdar/estedad-font@v5.0.0/dist/font-face.css" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-black antialiased selection:bg-[#e6f5fe] selection:text-[#0096f7]">
        {children}
      </body>
    </html>
  );
}
