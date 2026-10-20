/**
 * Central Hotel Configuration File (Single Source of Truth)
 * 
 * To adapt this website for another hotel:
 * 1. Update this file with the new hotel's details (Name, Contact, Location, Coordinates, Brand).
 * 2. Update room types and photos in the room data inside `src/lib/translations.ts`.
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
    raw: string; // Dialing string without dashes (e.g., "05138553671")
    international: string; // E.164 dialing string (e.g., "+985138553671")
    displayFa: string; // Persian formatted display (e.g., "۰۵۱-۳۸۵۵۳۶۷۱")
    displayEn: string; // English formatted display (e.g., "+98 51 3855 3671")
  };
  mobile: {
    raw: string; // Dialing string without dashes (e.g., "09374144235")
    international: string; // E.164 dialing string (e.g., "+989374144235")
    displayFa: string; // Persian formatted display (e.g., "۰۹۳۷-۴۱۴-۴۲۳۵")
    displayEn: string; // English formatted display (e.g., "+98 937 414 4235")
  };
  whatsapp: {
    number: string; // WhatsApp international digits only (e.g., "989374144235")
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
  id: "gole-gandom",

  brand: {
    id: "gole-gandom",
    nameFa: "هتل گل گندم",
    nameEn: "Gol Gandom Hotel",
    fullNameFa: "هتل گل گندم مشهد",
    fullNameEn: "Gol Gandom Hotel Mashhad",
    subtitleFa: "اقامتی آرام در قلب مشهد",
    subtitleEn: "A calm stay in the heart of Mashhad",
  },

  meta: {
    id: "gole-gandom",
    siteUrl: "https://hotelgandom.com",
    nameFa: "هتل گل گندم",
    nameEn: "Gol Gandom Hotel",
    fullNameFa: "هتل گل گندم مشهد",
    fullNameEn: "Gol Gandom Hotel Mashhad",
    subtitleFa: "اقامتی آرام در قلب مشهد",
    subtitleEn: "A calm stay in the heart of Mashhad",
    badgeFa: "مشهد · هتل دو ستاره · ۳۰ واحد",
    badgeEn: "Mashhad · 2-star hotel · 30 units",
    metaTitleFa: "هتل گل گندم مشهد | اقامتی آرام نزدیک حرم امام رضا",
    metaTitleEn: "Gol Gandom Hotel Mashhad | A calm stay near Imam Reza Shrine",
    metaDescriptionFa:
      "هتل آپارتمان گل گندم در مشهد، اقامتگاهی شهری و مجهز با دو نوبت ترانسفر رایگان رفت به حرم و دسترسی آسان به خطوط بی‌آرتی حرم است؛ اتاق‌های آن برای اقامت اقتصادی، آرام و نزدیک به مراکز شهری ارائه می‌شوند.",
    metaDescriptionEn:
      "Gol Gandom is a city hotel apartment in Mashhad with two complimentary daily transfers to the Imam Reza Shrine, practical rooms, complimentary breakfast, an elevator, and easy BRT access.",
    keywordsFa: [
      "هتل گل گندم مشهد",
      "هتل نزدیک حرم امام رضا",
      "رزرو هتل مشهد",
      "بازار رضا",
      "هتل امام رضا ۶۴",
      "اقامت در مشهد",
    ],
    keywordsEn: [
      "Gol Gandom Hotel Mashhad",
      "Hotel near Imam Reza Shrine",
      "Mashhad hotel",
      "Book hotel in Mashhad",
      "Imam Reza 64 hotel",
    ],
    ogImage: "/images/areas/courtyard-1.webp",
  },

  contact: {
    phone: {
      raw: "05138553671",
      international: "+985138553671",
      displayFa: "۰۵۱-۳۸۵۵۳۶۷۱",
      displayEn: "+98 51 3855 3671",
    },
    mobile: {
      raw: "09374144235",
      international: "+989374144235",
      displayFa: "۰۹۳۷-۴۱۴-۴۲۳۵",
      displayEn: "+98 937 414 4235",
    },
    whatsapp: {
      number: "989374144235",
    },
    social: {
      instagramUrl: "https://instagram.com/hotelgandom",
      instagramHandle: "@hotelgandom",
      email: undefined,
    },
  },

  location: {
    cityFa: "مشهد",
    cityEn: "Mashhad",
    addressFa: "مشهد، امام رضا ۶۴، نبش چهارراه اول",
    addressEn: "Mashhad, Imam Reza 64, on the corner of the first intersection",
    coordinates: [36.2638855, 59.5966564],
    mapZoom: 15,
    routingAlleyFa: "امام رضا ۶۴",
    routingAlleyEn: "Imam Reza 64",
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
    establishedEraFa: "افتتاح ۱۳۹۱ · هتل دو ستاره",
    establishedEraEn: "Opened in 2012 · 2-star hotel",
  },

  attractions: [
    {
      id: 0,
      coords: [36.2878549, 59.6156637],
      nameFa: "حرم مطهر امام رضا",
      nameEn: "Imam Reza Holy Shrine",
      distFa: "۳.۲ کیلومتر",
      distEn: "3.2 km",
      timeFa: "۸ دقیقه با ماشین",
      timeEn: "8 min drive",
      icon: "🕌",
    },
    {
      id: 1,
      coords: [36.2815697, 59.6092965],
      nameFa: "بازار رضا",
      nameEn: "Reza Bazaar",
      distFa: "۲.۵ کیلومتر",
      distEn: "2.5 km",
      timeFa: "۶ دقیقه با ماشین",
      timeEn: "6 min drive",
      icon: "🏛️",
    },
    {
      id: 2,
      coords: [36.25995, 59.59754],
      nameFa: "سرزمین بازی‌ها",
      nameEn: "Sarzamin-e Baziha Family Park",
      distFa: "۶۶۲ متر",
      distEn: "662 m",
      timeFa: "۳ دقیقه با ماشین",
      timeEn: "3 min drive",
      icon: "🌸",
    },
    {
      id: 3,
      coords: [36.2537172, 59.6066931],
      nameFa: "باغ گیاه‌شناسی",
      nameEn: "Mashhad Botanical Garden",
      distFa: "۱.۶ کیلومتر",
      distEn: "1.6 km",
      timeFa: "۴ دقیقه با ماشین",
      timeEn: "4 min drive",
      icon: "🌿",
    },
    {
      id: 4,
      coords: [36.2792574, 59.6038382],
      nameFa: "سرای بلور",
      nameEn: "Saray-e Bolour",
      distFa: "۱.۹ کیلومتر",
      distEn: "1.9 km",
      timeFa: "۵ دقیقه با ماشین",
      timeEn: "5 min drive",
      icon: "🏺",
    },
    {
      id: 5,
      coords: [36.2948646, 59.607823],
      nameFa: "آرامگاه نادرشاه افشار (باغ موزه نادری)",
      nameEn: "Nader Shah Afshar Mausoleum (Naderi Garden Museum)",
      distFa: "۳.۷ کیلومتر",
      distEn: "3.7 km",
      timeFa: "۹ دقیقه با ماشین",
      timeEn: "9 min drive",
      icon: "🏛️",
    },
    {
      id: 6,
      coords: [36.28279, 59.56398],
      nameFa: "بوستان کوهسنگی",
      nameEn: "Kuhsangi Park",
      distFa: "۳.۹ کیلومتر",
      distEn: "3.9 km",
      timeFa: "۹ دقیقه با ماشین",
      timeEn: "9 min drive",
      icon: "🌳",
    },
    {
      id: 7,
      coords: [36.3188413, 59.5374002],
      nameFa: "شهربازی پارک ملت",
      nameEn: "Mellat Park Amusement Park",
      distFa: "۸.۴ کیلومتر",
      distEn: "8.4 km",
      timeFa: "۱۴ دقیقه با ماشین",
      timeEn: "14 min drive",
      icon: "🎡",
    },
  ],
};

export default hotelConfig;


