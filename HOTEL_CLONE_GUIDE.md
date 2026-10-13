# 🏨 راهنمای جامع کلون و سفارشی‌سازی قالب برای هتل جدید
### Modular & White-Label Hotel Architecture Guide

این مخزن به صورت **ساختارمحور (Configuration-Driven / White-label)** طراحی شده است. به این معنی که تمام بخش‌های کلیدی وب‌سایت (نام هتل، شماره تماس‌ها، واتساپ، مختصات نقشه، جاذبه‌های اطراف، متادیتای سئو و حتی سیستم اقساطی اسنپ‌پی) از یک فایل پیکربندی مرکزی تغذیه می‌شوند.

برای راه‌اندازی این وب‌سایت برای هر هتل دیگری، نیازی به تغییر کدهای کامپوننت‌ها ندارید و کافی است مراحل زیر را طی کنید:

---

## 🚀 مراحل راه‌اندازی برای هتل جدید

### گام ۱: کلون کردن مخزن (Clone)
ابتدا یک کپی از این پروژه در پوشه‌ای جدید بگیرید:
```bash
git clone <آدرس_مخزن_گیت> new-hotel-website
cd new-hotel-website
npm install
```

---

### گام ۲: تغییر اطلاعات در فایل پیکربندی مرکزی
تمام تنظیمات و هویت برند هتل در فایل زیر قرار دارد:
👉 `src/config/hotel.config.ts`

تنها با ویرایش این فایل، موارد زیر در کل سایت، نوبار، فوتر، دکمه‌های شناور، نقشه و سئو به‌صورت خودکار به‌روزرسانی می‌شوند:

```typescript
export const hotelConfig: HotelConfig = {
  id: "saraye-amiri", // شناسه یکتا انگلیسی

  brand: {
    id: "saraye-amiri",
    nameFa: "بوتیک هتل سرای امیری",
    nameEn: "Amiri Heritage Boutique Hotel",
    fullNameFa: "عمارت و بوتیک هتل سنتی سرای امیری",
    fullNameEn: "Amiri Historic Traditional Hotel",
    subtitleFa: "هتل سنتی و عمارت تاریخی",
    subtitleEn: "Traditional Boutique Hotel",
  },

  meta: {
    siteUrl: "https://amiri-hotel.com",
    metaTitleFa: "بوتیک هتل سرای امیری | رزرو مستقیم و اقامت در عمارت تاریخی",
    metaTitleEn: "Amiri Boutique Hotel | Direct Booking & Historic Stay",
    metaDescriptionFa: "بوتیک هتل سنتی سرای امیری با معماری اصیل ایرانی...",
    keywordsFa: ["بوتیک هتل", "رزرو هتل", "اقامت سنتی"],
    keywordsEn: ["Boutique hotel", "Hotel booking"],
    ogImage: "/images/hero.webp",
    ...
  },

  contact: {
    phone: {
      raw: "03132222222",        // شماره ثابت بدون خط تیره جهت شماره‌گیری سریع
      international: "+983132222222",
      displayFa: "۰۳۱-۳۲۲۲۲۲۲۲", // فرمت نمایشی فارسی
      displayEn: "+98 31 3222 2222",
    },
    mobile: {
      raw: "09130000000",        // شماره همراه پذیرش
      international: "+989130000000",
      displayFa: "۰۹۱۳-۰۰۰-۰۰۰۰",
      displayEn: "+98 913 000 0000",
    },
    whatsapp: {
      number: "989130000000",    // شماره بین‌المللی واتساپ بدون +
    },
    social: {
      instagramUrl: "https://instagram.com/amiri_hotel",
      instagramHandle: "@amiri_hotel",
    },
  },

  location: {
    cityFa: "اصفهان",
    cityEn: "Isfahan",
    addressFa: "اصفهان، میدان نقش جهان، خیابان...",
    addressEn: "Isfahan, Naqsh-e Jahan Sq, ...",
    coordinates: [32.6577, 51.6776], // [عرض جغرافیایی, طول جغرافیایی]
    mapZoom: 15,
    routingAlleyFa: "کوچه سنتی ۲",
    routingAlleyEn: "Traditional Alley 2",
  },

  features: {
    snappPay: {
      enabled: false, // اگر هتل جدید اسنپ‌پی ندارد false بگذارید تا نشان‌های اقساطی محو شوند
      installmentCount: 4,
      ...
    },
    establishedEraFa: "دوران صفویه",
    establishedEraEn: "Safavid Era",
  },

  // مکان‌های دیدنی اطراف هتل (روی نقشه تعاملی لایه‌بندی می‌شوند)
  attractions: [
    {
      id: 1,
      coords: [32.6572, 51.6775],
      nameFa: "میدان نقش جهان",
      nameEn: "Naqsh-e Jahan Square",
      distFa: "۱۵۰ متر",
      distEn: "150 m",
      timeFa: "۲ دقیقه پیاده",
      timeEn: "2 min walk",
      icon: "Landmark",
    },
    ...
  ],
};
```

---

### گام ۳: به‌روزرسانی اتاق‌ها و تصاویر
1. **اتاق‌ها:** در فایل `src/data/rooms.ts` مشخصات اتاق‌ها، ظرفیت، قیمت، متراژ و تصاویر را متناسب با هتل جدید قرار دهید.
2. **تصاویر:** تصاویر هتل جدید را در پوشه `public/images/` جایگزین کنید:
   - `public/images/areas/`: تصاویر محوطه، حیاط، رستوران، پذیرش
   - `public/images/rooms/`: تصاویر اتاق‌ها
   - `public/videos/`: در صورت نیاز، ویدیوهای عمارت

---

### گام ۴: تنظیم فایل متغیرهای محیطی (`.env.local`)
فایل `.env.local` را ایجاد کنید و اطلاعات امنیتی پنل آمار هتل جدید را وارد کنید:
```env
# احراز هویت پنل آمارگیر
ANALYTICS_USER=admin_amiri
ANALYTICS_PASSWORD=رمز_عبور_قوی_و_اختصاصی_هتل_جدید
AUTH_SECRET=کلید_هش_تصادفی_حداقل_۳۲_کاراکتر
```

---

### گام ۵: تست و خروجی نهایی
برای بررسی صحت همه اتصالات و نبود خطای تایپ اسکریپت:
```bash
npm run build
npm run start
```
سایت را در مرورگر در آدرس `http://localhost:3000` باز کنید. مشاهده خواهید کرد که:
- تمام دکمه‌های تماس به شماره‌های جدید وصل شده‌اند.
- پیام‌های رزرو واتساپ هتل جدید با نام و شماره جدید تولید می‌شوند.
- نقشه تعاملی دقیقاً روی لوکیشن هتل جدید و جاذبه‌های اطراف آن متمرکز شده است.
- متادیتای گوگل، شبکه‌های اجتماعی و تگ‌های اشتراک‌گذاری به‌روز شده‌اند.
- پنل آمارگیر `/stats` برای هتل جدید تفکیک و اختصاصی است.

---

### 💡 لیست بخش‌هایی که خودکار از Config تغییر می‌کنند:
| بخش | فایل پیاده‌سازی | منبع داده |
| :--- | :--- | :--- |
| **هدر و نوبار** | `Navbar.tsx` | شماره تلفن، موبایل، آدرس، برند هتل |
| **فوتر** | `Footer.tsx` | شماره‌ها، اینستاگرام، آدرس و کپی‌رایت |
| **دکمه شناور تماس/رزرو** | `FloatingCTA.tsx` | شماره واتساپ، تماس سریع، نشان اقساطی |
| **مودال رزرو اتاق** | `BookingDialog.tsx` | تلفن، موبایل، واتساپ با پیام پیش‌فرض هتل |
| **کارت‌های اتاق** | `RoomsSection.tsx` | لینک مستقیم پیام واتساپ |
| **نقشه و مسیریابی** | `HotelMap.tsx` | مختصات GPS، نام هتل، نقاط گردشگری اطراف |
| **بخش تماس با ما** | `ContactSection.tsx` | اطلاعات کامل تماس، ساعات پاسخگویی، نقشه |
| **سئو و پیش‌نمایش** | `layout.tsx` | عناوین، توضیحات، OpenGraph و کلمات کلیدی |
| **سیستم آمار و UTM** | `tracker.ts` و `/stats` | لینک پایه کمپین‌ها و نام گزارش اکسل |
