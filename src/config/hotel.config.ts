/**
 * Central Hotel Configuration File (Single Source of Truth)
 * 
 * To adapt this website for another hotel:
 * 1. Update this file with the new hotel's details (Name, Contact, Location, Coordinates, Brand).
 * 2. Update room types and photos in `src/data/rooms.ts`.
 * 3. Update `.env.local` if you wish to change analytics credentials.
 * 
 * All components, navigation, maps, contact buttons, WhatsApp tags, and SEO metadata
 * automatically inherit these configuration values.
 */

export interface HotelAttraction {
  id: number;
  coords: [number, number];
  nameFa: string;
  nameEn: string;
  distFa: string;
  distEn: string;
  timeFa: string;
  timeEn: string;
  icon: string;
}

export interface HotelContactConfig {
  phone: {
    raw: string; // Dialing string without dashes (e.g., "07132222294")
    international: string; // E.164 dialing string (e.g., "+987132222294")
    displayFa: string; // Persian formatted display (e.g., "۰۷۱-۳۲۲۲۲۲۹۴")
    displayEn: string; // English formatted display (e.g., "+98 71 3222 2294")
  };
  mobile: {
    raw: string; // Dialing string without dashes (e.g., "09173029002")
    international: string; // E.164 dialing string (e.g., "+989173029002")
    displayFa: string; // Persian formatted display (e.g., "۰۹۱۷-۳۰۲-۹۰۰۲")
    displayEn: string; // English formatted display (e.g., "+98 917 302 9002")
  };
  whatsapp: {
    number: string; // WhatsApp international digits only (e.g., "989173029002")
  };
  social: {
    instagramUrl: string;
    instagramHandle: string;
    telegramUrl?: string;
    telegramHandle?: string;
    email?: string;
  };
}

export interface HotelLocationConfig {
  cityFa: string;
  cityEn: string;
  addressFa: string;
  addressEn: string;
  coordinates: [number, number]; // [Latitude, Longitude]
  mapZoom: number;
  mapCenterOffset?: [number, number];
  routingAlleyFa: string;
  routingAlleyEn: string;
}

export interface HotelFeaturesConfig {
  snappPay: {
    enabled: boolean;
    installmentCount: number;
    badgeFa: string;
    badgeEn: string;
    heroDescFa: string;
    heroDescEn: string;
  };
  establishedEraFa: string;
  establishedEraEn: string;
}

export interface HotelMetaConfig {
  id: string;
  siteUrl: string;
  nameFa: string;
  nameEn: string;
  fullNameFa: string;
  fullNameEn: string;
  subtitleFa: string;
  subtitleEn: string;
  badgeFa: string;
  badgeEn: string;
  metaTitleFa: string;
  metaTitleEn: string;
  metaDescriptionFa: string;
  metaDescriptionEn: string;
  keywordsFa: string[];
  keywordsEn: string[];
  ogImage: string;
}

export interface HotelBrandConfig {
  id: string;
  nameFa: string;
  nameEn: string;
  fullNameFa: string;
  fullNameEn: string;
  subtitleFa: string;
  subtitleEn: string;
}

export interface HotelConfig {
  id: string;
  brand: HotelBrandConfig;
  meta: HotelMetaConfig;
  contact: HotelContactConfig;
  location: HotelLocationConfig;
  features: HotelFeaturesConfig;
  attractions: HotelAttraction[];
}

export const hotelConfig: HotelConfig = {
  id: "farhadi",

  brand: {
    id: "farhadi",
    nameFa: "بوتیک هتل فرهادی",
    nameEn: "Farhadi Boutique Hotel",
    fullNameFa: "عمارت تاریخی فرهادی شیراز",
    fullNameEn: "Farhadi Historic Boutique Hotel Shiraz",
    subtitleFa: "بوتیک هتل سنتی شیراز",
    subtitleEn: "Traditional Boutique Hotel in Shiraz",
  },

  meta: {
    id: "farhadi",
    siteUrl: "https://farhadihotel.com",
    nameFa: "بوتیک هتل فرهادی",
    nameEn: "Farhadi Boutique Hotel",
    fullNameFa: "عمارت تاریخی فرهادی شیراز",
    fullNameEn: "Farhadi Historic Boutique Hotel Shiraz",
    subtitleFa: "بوتیک هتل سنتی شیراز",
    subtitleEn: "Traditional Boutique Hotel in Shiraz",
    badgeFa: "شیراز · قدمت قاجار",
    badgeEn: "Shiraz · Qajar Era Heritage",
    metaTitleFa: "بوتیک هتل فرهادی شیراز | اقامت در عمارت تاریخی قاجار-پهلوی",
    metaTitleEn: "Farhadi Boutique Hotel Shiraz | Qajar-Pahlavi Historic Stay",
    metaDescriptionFa:
      "بوتیک هتل سنتی فرهادی در بافت تاریخی شیراز، بازسازی اصیل دوران قاجار و پهلوی با ۱۴ اتاق اختصاصی، تالار آینه، پنج‌دری، کافه سنتی و چشم‌انداز گنبد شاهچراغ. رزرو مستقیم.",
    metaDescriptionEn:
      "Farhadi Traditional Boutique Hotel in historic Shiraz. Authentic Qajar-Pahlavi restoration with 14 unique rooms, Mirror Hall, Panjdari, rooftop cafe, and direct reservations.",
    keywordsFa: [
      "بوتیک هتل فرهادی شیراز",
      "هتل سنتی شیراز",
      "رزرو هتل شیراز",
      "شاهچراغ",
      "هتل بافت تاریخی",
      "عمارت قاجاری",
    ],
    keywordsEn: [
      "Farhadi Boutique Hotel Shiraz",
      "Traditional hotel Shiraz",
      "Shiraz heritage boutique hotel",
      "Book hotel in Shiraz",
      "Shah Cheragh hotel",
    ],
    ogImage: "/images/areas/courtyard-1.webp",
  },

  contact: {
    phone: {
      raw: "07132222294",
      international: "+987132222294",
      displayFa: "۰۷۱-۳۲۲۲۲۲۹۴",
      displayEn: "+98 71 3222 2294",
    },
    mobile: {
      raw: "09173029002",
      international: "+989173029002",
      displayFa: "۰۹۱۷-۳۰۲-۹۰۰۲",
      displayEn: "+98 917 302 9002",
    },
    whatsapp: {
      number: "989173029002",
    },
    social: {
      instagramUrl: "https://www.instagram.com/farhadi.boutique.hotel/",
      instagramHandle: "@farhadi.boutique.hotel",
      email: "info@farhadihotel.com",
    },
  },

  location: {
    cityFa: "شیراز",
    cityEn: "Shiraz",
    addressFa: "شیراز، سه‌راه نمازی، خیابان شهید دستغیب، کوچه ۶",
    addressEn: "Alley 6, Dastgheib St, Namazi Intersection, Shiraz",
    coordinates: [29.6112, 52.5442],
    mapZoom: 15,
    routingAlleyFa: "کوچه دستغیب ۶",
    routingAlleyEn: "Dastgheib Alley 6",
  },

  features: {
    snappPay: {
      enabled: true,
      installmentCount: 4,
      badgeFa: "۴ قسطه با اسنپ‌پی",
      badgeEn: "4x Snapp! Pay",
      heroDescFa: "امکان پرداخت در ۴ قسط با اسنپ‌پی (بدون کارمزد و ضامن)",
      heroDescEn: "Pay in 4 installments with Snapp! Pay (0% interest)",
    },
    establishedEraFa: "قدمت قاجار",
    establishedEraEn: "Qajar Era Heritage",
  },

  attractions: [
    {
      id: 0,
      coords: [29.6096, 52.5432],
      nameFa: "حرم مطهر حضرت شاهچراغ (ع)",
      nameEn: "Holy Shrine of Shah Cheragh",
      distFa: "۴ دقیقه پیاده",
      distEn: "4 min walk",
      timeFa: "پیاده‌روی مستقیم از کوچه دستغیب",
      timeEn: "Direct walking route via Dastgheib Alley",
      icon: "🕌",
    },
    {
      id: 1,
      coords: [29.6152, 52.5458],
      nameFa: "مجموعه زندیه، بازار و حمام وکیل",
      nameEn: "Zand Complex & Vakil Bazaar",
      distFa: "۸ دقیقه پیاده",
      distEn: "8 min walk",
      timeFa: "گذر از بافت تاریخی زندیه",
      timeEn: "Historic Zand quarter",
      icon: "🏛️",
    },
    {
      id: 2,
      coords: [29.6085, 52.551],
      nameFa: "مسجد نصیرالملک (مسجد صورتی)",
      nameEn: "Nasir al-Mulk Mosque (Pink Mosque)",
      distFa: "۱۲ دقیقه پیاده",
      distEn: "12 min walk",
      timeFa: "گذر از محله تاریخی گود عربان",
      timeEn: "Goud-e Araban quarter",
      icon: "🌸",
    },
    {
      id: 3,
      coords: [29.6178, 52.5448],
      nameFa: "ارگ کریم‌خان زند",
      nameEn: "Arg of Karim Khan",
      distFa: "۵ دقیقه با خودرو",
      distEn: "5 min drive",
      timeFa: "میدان شهدا (توپخانه کهن)",
      timeEn: "Shohada Square",
      icon: "🏰",
    },
    {
      id: 4,
      coords: [29.5392, 52.5898],
      nameFa: "فرودگاه بین‌المللی شیراز",
      nameEn: "Shiraz International Airport",
      distFa: "۲۰ دقیقه با خودرو",
      distEn: "20 min drive",
      timeFa: "مسیر بزرگراه شهید مدرس",
      timeEn: "Via Modarres Expressway",
      icon: "✈️",
    },
  ],
};

export default hotelConfig;
