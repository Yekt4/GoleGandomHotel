import { hotelConfig } from "@/config/hotel.config";

export const translations = {
  fa: {
    brand: {
      name: hotelConfig.meta.nameFa,
      title: hotelConfig.meta.fullNameFa,
      subtitle: hotelConfig.meta.subtitleFa,
      badge: hotelConfig.meta.badgeFa,
    },
    nav: {
      address: hotelConfig.location.addressFa,
      phone: hotelConfig.contact.phone.displayFa,
      mobile: hotelConfig.contact.mobile.displayFa,
      reception: "پذیرش:",
      home: "صفحه اصلی",
      story: "داستان عمارت",
      rooms: "اتاق‌ها",
      gallery: "تصاویر",
      reels: "ویدیوها",
      amenities: "خدمات",
      location: "موقعیت",
      contact: "تماس",
      bookBtn: "پذیرش هتل",
      langSwitch: "English",
    },
    hero: {
      title: hotelConfig.meta.nameFa,
      subtitle: hotelConfig.meta.badgeFa,
      reserveBtn: "تماس و رزرو تلفنی",
      scrollHint: "رفتن به بخش داستان عمارت",
      snappPayHeroBadge: hotelConfig.features.snappPay.heroDescFa,
      images: [
        {
          src: "/images/areas/courtyard-1.webp",
          alt: "حیاط باصفا و حوض فیروزه‌ای عمارت تاریخی فرهادی",
        },
        {
          src: "/images/areas/reception-1.webp",
          alt: "پذیرش و هشتی ورودی تاریخی عمارت با چیدمان اصیل سنتی",
        },
        {
          src: "/images/rooms/talar-ayineh-1.webp",
          alt: "تالار آینه قاجاری و انعکاس پنجره‌های ارسی هفت‌رنگ",
        },
        {
          src: "/images/areas/breakfast-1.webp",
          alt: "سالن صبحانه و چای‌خانه سنتی با سماورهای برنجی کهن",
        },
        {
          src: "/images/areas/courtyard-2.webp",
          alt: "ایوان مهتابی و ستون‌های گچ‌بری مشرف به درختان نارنج حیاط",
        },
        {
          src: "/images/areas/reception-2.webp",
          alt: "لابی نشیمن سنتی عمارت با قالی‌های دستباف کهن",
        },
      ],
    },
    story: {
      heading: "روایت عمارت و شیراز کهن",
      desc: "خانه‌ای با پیشینه یک سده در قلب شیراز؛ تلفیق آینه‌کاری دست‌تراش، گره‌چینی چوب گردو و خلوت دلنشین حیاط مرکزی.",
      scenes: [
        {
          id: "courtyard",
          title: "حوض فیروزه‌ای و ترنم آب حیاط",
          caption: "آرامش برگرفته از معماری درون‌گرای قاجار؛ خلوت دلنشین حیاط در سایه‌سار درختان نارنج و نوای فواره که هیاهوی شهر را پشت دیوارهای خشتی خاموش می‌کند.",
          image: "/images/areas/courtyard-1.webp",
          alt: "حیاط باصفای عمارت تاریخی فرهادی شیراز با حوض فیروزه‌ای",
        },
        {
          id: "orsi",
          title: "رقص آفتاب بر شیشه‌های هفت‌رنگ ارسی",
          caption: "شاهکار گره‌چینی استادکاران شیراز؛ صبح‌ها با تابش نخستین پرتوهای خورشید از میان شیشه‌های رنگین، تالار شاه‌نشین غرق نقش و رنگ‌های گرم می‌شود.",
          image: "/images/rooms/orsi-pasto-1.webp",
          alt: "پنجره‌های ارسی و گره‌چینی سنتی چوب گردو در عمارت فرهادی",
        },
        {
          id: "reception",
          title: "پذیرش و هشتی باوقار عمارت",
          caption: "استقبال در فضای اصیل تاریخی؛ طاق‌های استوار، کتیبه‌های کهن و صمیمیت میزبانی شیرازی از لحظه ورود به عمارت.",
          image: "/images/areas/reception-1.webp",
          alt: "پذیرش و هشتی سنتی بوتیک هتل فرهادی شیراز",
        },
      ],
      calloutTitle: "اقامت در یک اثر تاریخی",
      calloutDesc: "اتاق‌ها و سوئیت‌های عمارت با حفظ اصالت معماری قاجار و آرامش ناب شیراز میزبان شما هستند.",
      reserveDirect: "تماس و رزرو تلفنی",
      viewRooms: "مشاهده اتاق‌ها",
    },
    rooms: {
      heading: "اتاق‌ها و سوئیت‌های عمارت",
      desc: "۱۴ اتاق و سوئیت تاریخی با هویتی اصیل از عصر زندیه، قاجار و پهلوی؛ تلفیق شاهکارهای آینه‌کاری و ارسی‌های سنتی با بالاترین استانداردهای هتلداری لوکس.",
      inquireBtn: "استعلام و رزرو",
      viewGalleryBtn: "مشاهده گالری تصاویر",
      photosLabel: "تصویر",
      allPhotosCount: "مشاهده همه",

      callToBook: "تماس برای رزرو",
      whatsapp: "واتس‌اپ",
      capacityLabel: "ظرفیت:",
      sizeLabel: "مساحت:",
      snappPayBannerBadge: "امکان ویژه رزرو اقساطی",
      snappPayBannerTitle: "رزرو اقامت در شیراز با پرداخت ۴ قسطه اسنپ‌پی",
      snappPayBannerDesc: "بدون سود، بدون کارمزد و بدون نیاز به چک و ضامن. اتاق مورد علاقه خود را انتخاب کنید و هزینه آن را طی ۴ قسط ماهانه بپردازید.",
      snappPayBtn: "استعلام و رزرو ۴ قسطه",
      snappPayTag: "پرداخت در ۴ قسط با اسنپ‌پی (بدون کارمزد)",
      snappPayShortTag: "۴ قسطه با اسنپ‌پی",
      categories: [
        {
                "id": "all",
                "label": "همه ۱۴ اتاق"
        },
        {
                "id": "mirror",
                "label": "تالارهای آیینه و شاه‌نشین"
        },
        {
                "id": "traditional",
                "label": "اتاق‌های ارسی و سنتی"
        },
        {
                "id": "serene",
                "label": "اتاق‌های دنج و آرام"
        }
],
      items: [
        {
                "id": "talar-ayineh",
                "title": "اتاق تالار آیینه",
                "subtitle": "شاهکار سقف هندسی و دیوارهای تمام آینه‌کاری",
                "image": "/images/rooms/talar-ayineh-1.webp",
                "images": [
              "/images/rooms/talar-ayineh-1.webp",
              "/images/rooms/talar-ayineh-2.webp",
              "/images/rooms/talar-ayineh-3.webp",
              "/images/rooms/talar-ayineh-4.webp",
              "/images/rooms/talar-ayineh-5.webp",
              "/images/rooms/talar-ayineh-6.jpg",
              "/images/rooms/talar-ayineh-7.webp"
],
                "capacity": "۲ الی ۳ نفر",
                "size": "۳۵ متر مربع",
                "architectureFeature": "سقف شاهکار هندسی سنتی و دیوارهای سراسر آینه‌کاری ظریف",
                "category": "mirror",
                "categoryLabel": "شاه‌نشین و آیینه",
                "highlights": [
			"دیوارهای آینه‌کاری ظریف با انعکاس درخشان نور",
			"سقف شاهکار با طرح‌های هندسی و نقوش سنتی",
			"پنجره ارسی هفت‌رنگ رو به حوض فیروزه‌ای حیاط",
			"کفپوش کاشی‌کاری سنتی با چیدمان اصیل"
		],
                "description": "تالار آیینه با دیوارهای ظریف آینه‌کاری، سقف هندسی سنتی و پنجره‌های هفت‌رنگ ارسی قاجاری، بازتابی خیره‌کننده از نور و هنر اصیل ایرانی را به نمایش می‌گذارد."
        },
        {
                "id": "hezar-ayineh",
                "title": "اتاق هزار آیینه",
                "subtitle": "اقامتی مجلل با لوستر کریستالی و آینه‌کاری‌های شاهانه",
                "image": "/images/rooms/hezar-ayineh-1.webp",
                "images": [
              "/images/rooms/hezar-ayineh-1.webp",
              "/images/rooms/hezar-ayineh-2.webp",
              "/images/rooms/hezar-ayineh-3.webp",
              "/images/rooms/hezar-ayineh-4.webp",
              "/images/rooms/hezar-ayineh-5.webp",
              "/images/rooms/hezar-ayineh-6.jpg"
],
                "capacity": "۲ الی ۴ نفر",
                "size": "۳۸ متر مربع",
                "architectureFeature": "آینه‌کاری‌های هنرمندانه، نقوش هندسی سقف و لوستر کریستالی",
                "category": "mirror",
                "categoryLabel": "شاه‌نشین و آیینه",
                "highlights": [
			"دیوارهای سراسر آینه‌کاری با بازتاب چشم‌نواز نور",
			"سقف هندسی مزین به نقوش گل و لوستر کریستالی",
			"تخت دونفره منبت‌کاری دست‌ساز و نشیمن اختصاصی",
			"کفپوش کاشی‌کاری دست‌ساز و دکوراسیون مجلل"
		],
                "description": "اتاق هزار آینه با سقف منقش به طرح‌های هندسی، لوستر کریستالی باشکوه و دیوارهای آینه‌کاری ظریف، فضایی رویایی و شاهانه را خلق کرده است."
        },
        {
                "id": "orsi-pasto",
                "title": "اتاق ارسی پستو",
                "subtitle": "اتاق کانکت سنتی با دو فضای مستقل و متصل",
                "image": "/images/rooms/orsi-pasto-1.webp",
                "images": [
              "/images/rooms/orsi-pasto-1.webp",
              "/images/rooms/orsi-pasto-2.webp",
              "/images/rooms/orsi-pasto-3.webp",
              "/images/rooms/orsi-pasto-4.webp",
              "/images/rooms/orsi-pasto-5.webp"
],
                "capacity": "۲ الی ۳ نفر (کانکت)",
                "size": "۳۰ متر مربع",
                "architectureFeature": "اتاق کانکت دو فضایی با نشیمن کلاسیک، تخت اضافه و ارسی کهن",
                "category": "traditional",
                "categoryLabel": "اتاق‌های ارسی و سنتی",
                "highlights": [
			"دو فضای متصل شامل نشیمن کلاسیک و اتاق خواب اختصاصی",
			"تخت خواب اضافه در نشیمن برای اقامت راحت تا ۳ نفر",
			"پنجره ارسی چوب گردو با شیشه‌های رنگی قاجاری",
			"فرش‌های دستبافت شیراز و چیدمان اصیل سنتی"
		],
                "description": "این اتاق کانکت شامل دو فضای مستقل ولی متصل است؛ یک اتاق نشیمن کلاسیک با تخت اضافه و یک اتاق خواب دنج با تخت دونفره در پناه پنجره‌های ارسی کهن."
        },
        {
                "id": "panjdari",
                "title": "اتاق پنج‌دری",
                "subtitle": "گوهری از هنر و آرامش؛ سقف چوبی منقش و درهای بازشو رو به حیاط",
                "image": "/images/rooms/panjdari-1.webp",
                "images": [
              "/images/rooms/panjdari-1.webp",
              "/images/rooms/panjdari-2.webp",
              "/images/rooms/panjdari-3.webp",
              "/images/rooms/panjdari-4.webp",
              "/images/rooms/panjdari-5.webp",
              "/images/rooms/panjdari-6.webp",
              "/images/rooms/panjdari-7.webp"
],
                "capacity": "۲ الی ۳ نفر",
                "size": "۳۲ متر مربع",
                "architectureFeature": "سقف چوبی با نقوش منحصربه‌فرد و پنج لنگه در چوبی بازشو رو به حیاط",
                "category": "traditional",
                "categoryLabel": "اتاق‌های ارسی و سنتی",
                "highlights": [
			"پنج لنگه در چوبی بازشو رو به حیاط باصفا و حوض فیروزه",
			"سقف چوبی با نقوش منحصربه‌فرد و دست‌ساز ایرانی",
			"نورگیری دل‌انگیز صبحگاهی از میان شیشه‌های رنگی",
			"استشمام عطر بهارنارنج و صدای آرامش‌بخش آب"
		],
                "description": "سقف چوبی منقش و پنج لنگه درب ارسی با شیشه‌های رنگی، قلب تپنده این اتاق‌اند؛ فضایی دلباز که پیوند هنر، تاریخ و طبیعت شیراز را زنده می‌کند."
        },
        {
                "id": "pahlavi",
                "title": "اتاق پهلوی",
                "subtitle": "شکوه هنر در معماری اصیل با سقف قوس‌دار زرین",
                "image": "/images/rooms/pahlavi-1.webp",
                "images": [
              "/images/rooms/pahlavi-1.webp",
              "/images/rooms/pahlavi-2.webp",
              "/images/rooms/pahlavi-3.webp",
              "/images/rooms/pahlavi-4.webp",
              "/images/rooms/pahlavi-5.webp",
              "/images/rooms/pahlavi-6.webp",
              "/images/rooms/pahlavi-7.webp",
              "/images/rooms/pahlavi-8.webp"
],
                "capacity": "۲ الی ۳ نفر",
                "size": "۳۴ متر مربع",
                "architectureFeature": "سقف قوس‌دار مزین به نقوش طلایی، کاشی‌کاری دست‌ساز و گچ‌بری",
                "category": "mirror",
                "categoryLabel": "شاه‌نشین و آیینه",
                "highlights": [
			"سقف قوس‌دار با نقوش طلایی و گچ‌بری هنرمندانه",
			"کفپوش کاشی‌کاری دست‌ساز و فرش‌های نفیس ایرانی",
			"مبلمان کلاسیک با جزئیات طلایی و نورپردازی ملایم",
			"حال‌وهوای آرام و اصیل در قلب بافت تاریخی"
		],
                "description": "اتاق پهلوی با سقف قوس‌دار مزین به نقوش طلایی، کفپوش کاشی‌کاری دست‌ساز و مبلمان کلاسیک، فضایی آرام و اصیل را در دل بافت کهن شیراز فراهم ساخته است."
        },
        {
                "id": "karimkhan",
                "title": "اتاق کریم‌خان",
                "subtitle": "صلابت و وقار معماری زندیه با طاق‌های خشتی قرینه",
                "image": "/images/rooms/karimkhan-1.webp",
                "images": [
              "/images/rooms/karimkhan-1.webp",
              "/images/rooms/karimkhan-2.webp",
              "/images/rooms/karimkhan-3.webp",
              "/images/rooms/karimkhan-4.webp",
              "/images/rooms/karimkhan-5.webp"
],
                "capacity": "۲ نفر",
                "size": "۲۸ متر مربع",
                "architectureFeature": "طاق‌های خشتی اصیل دوره زندیه با هندسه قرینه و طاق‌های قوسی",
                "category": "traditional",
                "categoryLabel": "اتاق‌های ارسی و سنتی",
                "highlights": [
			"طاق‌های خشتی استوار با هندسه قرینه دوره زندیه",
			"نقوش سنتی سقف با روایتی از تاریخ کهن شیراز",
			"سکوت و آرامش عمیق به دور از هیاهوی شهری",
			"کف‌پوش سنتی با قالی‌های دست‌بافت و حمام مدرن"
		],
                "description": "اتاق کریم‌خان با الهام از معماری دوران زندیه، طاق‌های خشتی استوار و نقوش تاریخی سقف، فضایی امن، دنج و سرشار از اصالت را پدید آورده است."
        },
        {
                "id": "sehdari",
                "title": "اتاق سه‌دری",
                "subtitle": "فضایی رمانتیک با دیوارنگاره‌های مراحل عروسی سنتی",
                "image": "/images/rooms/sehdari-1.webp",
                "images": [
              "/images/rooms/sehdari-1.webp",
              "/images/rooms/sehdari-2.webp",
              "/images/rooms/sehdari-3.webp",
              "/images/rooms/sehdari-4.webp"
],
                "capacity": "۲ نفر",
                "size": "۲۴ متر مربع",
                "architectureFeature": "دیوارنگاره‌های مراحل عروسی سنتی (خواستگاری تا جشن) و ارسی سه‌لنگه",
                "category": "traditional",
                "categoryLabel": "اتاق‌های ارسی و سنتی",
                "highlights": [
			"دیوارنگاره‌های روایتگر مراحل عروسی از خواستگاری تا جشن",
			"سقف‌های پر از نقاشی و پنجره‌های ارسی با شیشه‌های رنگی",
			"فضایی گرم و رمانتیک؛ مناسب ماه عسل و اقامت زوج‌ها",
			"ارسی‌های چوبی رو به نور ملایم و دلنشین روز"
		],
                "description": "دیوارهای این اتاق مزین به نگاره‌های زیبای عروسی سنتی و سقف آن پر از نقاشی‌های اصیل است؛ انتخابی ایده‌آل و خاطره‌انگیز برای ماه عسل و زوج‌ها."
        },
        {
                "id": "vesal-shirazi",
                "title": "اتاق وصال شیرازی",
                "subtitle": "بزرگداشت ادیب نامدار شیراز با فضایی آرام و اهل قلم",
                "image": "/images/rooms/vesal-shirazi-1.webp",
                "images": [
              "/images/rooms/vesal-shirazi-1.webp",
              "/images/rooms/vesal-shirazi-2.webp",
              "/images/rooms/vesal-shirazi-3.webp",
              "/images/rooms/vesal-shirazi-4.webp"
],
                "capacity": "۲ نفر",
                "size": "۲۷ متر مربع",
                "architectureFeature": "کتیبه‌های کهن خوشنویسی و دست‌بافته‌های اصیل فارس",
                "category": "traditional",
                "categoryLabel": "اتاق‌های ارسی و سنتی",
                "highlights": [
			"آثار خوشنویسی اصیل و کتیبه‌های کهن شیراز",
			"میز تحریر سنتی چوبی با نور مناسب مطالعه",
			"سکوت دلپذیر برای تمرکز، آرامش و استراحت",
			"پنجره رو به حیاط با نورگیری مطبوع و طبیعی"
		],
                "description": "به یاد وصال شیرازی؛ این اتاق با تابلوهای خطاطی نفیس، میز تحریر چوبی و هارمونی آرامش‌بخش، محیطی الهام‌بخش برای دوستداران ادب و فرهنگ است."
        },
        {
                "id": "sangi",
                "title": "اتاق سنگی",
                "subtitle": "عایق طبیعی با ازاره‌های سنگی کهن و سکوت مطلق",
                "image": "/images/rooms/sangi-1.webp",
                "images": [
              "/images/rooms/sangi-1.webp",
              "/images/rooms/sangi-2.webp",
              "/images/rooms/sangi-3.webp",
              "/images/rooms/sangi-4.webp",
              "/images/rooms/sangi-5.webp",
              "/images/rooms/sangi-6.webp"
],
                "capacity": "۲ نفر",
                "size": "۲۶ متر مربع",
                "architectureFeature": "دیواره‌های قطور سنگی و طاق ضربی خشتی",
                "category": "serene",
                "categoryLabel": "اتاق‌های دنج و آرام",
                "highlights": [
			"دیوارهای قطور سنگی با عایق‌بندی صوتی و حرارتی طبیعی",
			"خنکی دلپذیر در روزهای گرم و حفظ گرمای مطبوع در زمستان",
			"سنگ‌تراشی‌های اصیل دوره قاجار با بافت کهن",
			"تخت‌خواب ارگونومیک راحت برای خواب عمیق و بی‌دغدغه"
		],
                "description": "اتاق سنگی با دیوارهای قطور تاریخی و ازاره‌های سنگی دست‌تراش قاجاری، خنکی طبیعی و آرامشی عمیق و بی‌صدا را برای خوابی دلپذیر به ارمغان می‌آورد."
        },
        {
                "id": "parvindokht",
                "title": "اتاق پروین‌دخت",
                "subtitle": "فضایی لطیف و شاعرانه مزین به دست‌بافته‌های اصیل فارس",
                "image": "/images/rooms/parvindokht-1.jpg",
                "images": [
              "/images/rooms/parvindokht-1.jpg",
              "/images/rooms/parvindokht-2.jpg",
              "/images/rooms/parvindokht-3.jpg",
              "/images/rooms/parvindokht-4.jpg"
],
                "capacity": "۲ نفر",
                "size": "۲۵ متر مربع",
                "architectureFeature": "طاقچه و رف‌های سنتی با گچ‌بری ظریف",
                "category": "serene",
                "categoryLabel": "اتاق‌های دنج و آرام",
                "highlights": [
			"چیدمان گرم و صمیمی با دست‌بافته‌های محلی و عشایری",
			"طاقچه‌های سنتی با گچ‌بری‌های کهن و آینه‌های کوچک",
			"نورگیری ملایم و منظره دلپذیر رو به باغچه حیاط",
			"امکانات رفاهی کامل و دوش حمام مدرن"
		],
                "description": "اتاق پروین‌دخت با طاقچه‌های گچ‌بری کهن، قالیچه‌های عشایری فارس و پنجره رو به باغچه، تصویری گرم و دلنشین از زندگی اصیل شیرازی را بازمی‌آفریند."
        },
        {
                "id": "shoorideh",
                "title": "اتاق شوریده",
                "subtitle": "طاق ضربی خشتی و ذوق ادبی در پناه بافت کهن",
                "image": "/images/rooms/shoorideh-1.webp",
                "images": [
              "/images/rooms/shoorideh-1.webp",
              "/images/rooms/shoorideh-2.webp",
              "/images/rooms/shoorideh-3.webp",
              "/images/rooms/shoorideh-4.webp",
              "/images/rooms/shoorideh-5.webp",
              "/images/rooms/shoorideh-6.webp",
              "/images/rooms/shoorideh-7.jpg"
],
                "capacity": "۲ نفر",
                "size": "۲۶ متر مربع",
                "architectureFeature": "طاق ضربی خشتی و اندود گچ سپید شیرازی",
                "category": "serene",
                "categoryLabel": "اتاق‌های دنج و آرام",
                "highlights": [
			"طاق ضربی خشتی سنتی با هندسه اصیل معماری شیراز",
			"نورپردازی دیواری ملایم و آرامش‌بخش شبانه",
			"کمد دیواری چوبی سنتی و فضای استراحت دلباز",
			"حمام اختصاصی شیک و مجهز با امکانات مدرن"
		],
                "description": "به یاد شوریده شیرازی؛ این اتاق با طاق‌های قوسی خشتی و اندود سپید، پناهگاهی دنج، آرام و دل‌انگیز پس از گشت‌وگذار در کوچه‌باغ‌های تاریخی است."
        },
        {
                "id": "lotus",
                "title": "اتاق لوتوس",
                "subtitle": "الهام‌گرفته از نقش کهن نیلوفر آبی؛ نماد صلح و پاکیزگی",
                "image": "/images/rooms/lotus-1.webp",
                "images": [
              "/images/rooms/lotus-1.webp",
              "/images/rooms/lotus-2.webp",
              "/images/rooms/lotus-3.webp",
              "/images/rooms/lotus-4.webp",
              "/images/rooms/lotus-5.webp",
              "/images/rooms/lotus-6.jpg"
],
                "capacity": "۲ نفر",
                "size": "۲۵ متر مربع",
                "architectureFeature": "قرنیزهای گچی با موتیف‌های هخامنشی نیلوفر آبی",
                "category": "serene",
                "categoryLabel": "اتاق‌های دنج و آرام",
                "highlights": [
			"قرنیزهای گچی با نقش‌مایه‌های تاریخی نیلوفر آبی",
			"تخت دونفره راحت با ملحفه‌های کتان ارگانیک",
			"عایق صوتی کامل و سیستم سرمایش و گرمایش نوین",
			"فضایی روشن، مینیمال و آکنده از آرامش فکری"
		],
                "description": "طراحی این اتاق با الهام از موتیف‌های نیلوفر آبی تخت‌جمشید و خطوط آرامش‌بخش، فضایی سرشار از آسایش روحی و پاکی را فراهم کرده است."
        },
        {
                "id": "arjan",
                "title": "اتاق ارجان",
                "subtitle": "کاشی‌های فیروزه‌ای، سقف اسلیمی و منظره دلنشین حیاط و حوض",
                "image": "/images/rooms/arjan-1.webp",
                "images": [
              "/images/rooms/arjan-1.webp",
              "/images/rooms/arjan-2.webp",
              "/images/rooms/arjan-3.jpg",
              "/images/rooms/arjan-4.webp",
              "/images/rooms/arjan-5.webp"
],
                "capacity": "۲ نفر",
                "size": "۲۴ متر مربع",
                "architectureFeature": "سقف نقاشی اسلیمی زرین، کاشی فیروزه‌ای و لوستر کریستالی",
                "category": "serene",
                "categoryLabel": "اتاق‌های دنج و آرام",
                "highlights": [
			"کفپوش کاشی‌های فیروزه‌ای دست‌ساز شیراز",
			"سقف نقاشی‌شده با طرح‌های اسلیمی در رنگ‌های طلایی و آبی",
			"پنجره‌های چوبی دلباز رو به حوض و حیاط مرکزی",
			"لوستر کریستالی درخشان و پرده‌های مخملی لاجوردی"
		],
                "description": "اتاق ارجان با کاشی‌های دست‌ساز فیروزه‌ای، سقف نقاشی‌شده با طرح‌های اسلیمی، لوستر کریستالی و پنجره‌های رو به حوض، فضایی دلباز و دل‌انگیز است."
        },
        {
                "id": "marjook",
                "title": "اتاق مرجوک",
                "subtitle": "سقف چوبی مرجوک با نقاشی دستی و پنجره‌های رنگین",
                "image": "/images/rooms/marjook-1.webp",
                "images": [
              "/images/rooms/marjook-1.webp",
              "/images/rooms/marjook-2.webp",
              "/images/rooms/marjook-3.webp",
              "/images/rooms/marjook-4.webp",
              "/images/rooms/marjook-5.webp",
              "/images/rooms/marjook-6.webp",
              "/images/rooms/marjook-7.webp",
              "/images/rooms/marjook-8.webp",
              "/images/rooms/marjook-9.webp",
              "/images/rooms/marjook-10.webp"
],
                "capacity": "۲ نفر",
                "size": "۲۴ متر مربع",
                "architectureFeature": "هنر اصیل سقف چوبی مرجوک شیراز مربوط به دوره زندیه و قاجاریه",
                "category": "serene",
                "categoryLabel": "اتاق‌های دنج و آرام",
                "highlights": [
			"سقف چوبی با تکنیک کهن «مرجوک» ویژه استادکاران شیراز",
			"نقاشی دستی ظریف روی تیرها و تخته‌های چوبی سقف",
			"کاشی‌های دست‌ساز کف و پنجره‌های چوبی با شیشه‌های رنگی",
			"چیدمان دنج و نقلی با حداکثر آرامش و تمیزی"
		],
                "description": "نام‌گذاری شده به اصطلاح محلی چوب‌های سقف «مرجوک» در دوره زندیه؛ این اتاق با نقاشی دستی چوب، کاشی‌های دست‌ساز و شیشه‌های رنگی، فضایی دنج و اصیل است."
        }
],
    },
    gallery: {
      "heading": "آلبوم تصویری عمارت",
      "desc": "روایتی اصیل از بازی نور در پنجره‌های ارسی، آرامش حیاط فیروزه‌ای و شکوه اتاق‌های تاریخی عمارت فرهادی شیراز.",
      "categories": [
            {
                  "id": "all",
                  "label": "همه تصاویر"
            },
            {
                  "id": "rooms",
                  "label": "اتاق‌ها و سوئیت‌ها"
            },
            {
                  "id": "courtyard",
                  "label": "حیاط و معماری"
            },
            {
                  "id": "dining",
                  "label": "صبحانه و پذیرایی"
            },
            {
                  "id": "reception",
                  "label": "پذیرش و لابی"
            }
      ],
      "items": [
            {
                  "id": 1,
                  "category": "courtyard",
                  "src": "/images/areas/courtyard-1.webp",
                  "title": "حوض فیروزه‌ای، شب‌های مهتابی و آرامش دل‌انگیز حیاط مرکزی",
                  "categoryName": "حیاط و معماری"
            },
            {
                  "id": 2,
                  "category": "rooms",
                  "src": "/images/rooms/talar-ayineh-1.webp",
                  "title": "اتاق تالار آیینه با انعکاس نور پنجره‌های ارسی و آینه‌کاری قاجاری",
                  "categoryName": "اتاق‌ها و سوئیت‌ها"
            },
            {
                  "id": 3,
                  "category": "rooms",
                  "src": "/images/rooms/hezar-ayineh-1.webp",
                  "title": "اتاق هزار آیینه؛ شاهکار آینه‌کاری دست‌تراش با مقرنس‌های زرین",
                  "categoryName": "اتاق‌ها و سوئیت‌ها"
            },
            {
                  "id": 4,
                  "category": "reception",
                  "src": "/images/areas/reception-1.webp",
                  "title": "پذیرش و هشتی ورودی عمارت با چیدمان اصیل سنتی",
                  "categoryName": "پذیرش و لابی"
            },
            {
                  "id": 5,
                  "category": "rooms",
                  "src": "/images/rooms/orsi-pasto-1.webp",
                  "title": "اتاق ارسی پستو؛ پنجره‌های مشبک چوب گردو و نورهای هفت‌رنگ",
                  "categoryName": "اتاق‌ها و سوئیت‌ها"
            },
            {
                  "id": 6,
                  "category": "dining",
                  "src": "/images/areas/breakfast-1.webp",
                  "title": "سالن صبحانه و چای‌خانه سنتی با سماورهای برنجی کهن",
                  "categoryName": "صبحانه و پذیرایی"
            },
            {
                  "id": 7,
                  "category": "courtyard",
                  "src": "/images/areas/courtyard-2.webp",
                  "title": "ستون‌های گچ‌بری و ایوان مهتابی مشرف به درختان نارنج حیاط",
                  "categoryName": "حیاط و معماری"
            },
            {
                  "id": 8,
                  "category": "rooms",
                  "src": "/images/rooms/panjdari-1.webp",
                  "title": "اتاق پنج‌دری با پنج لنگه درب چوبی بازشو رو به حیاط باصفا",
                  "categoryName": "اتاق‌ها و سوئیت‌ها"
            },
            {
                  "id": 9,
                  "category": "rooms",
                  "src": "/images/rooms/pahlavi-1.webp",
                  "title": "اتاق پهلوی با سقف مرتفع، گچ‌بری‌های فاخر و چیدمان شاهانه",
                  "categoryName": "اتاق‌ها و سوئیت‌ها"
            },
            {
                  "id": 10,
                  "category": "dining",
                  "src": "/images/areas/breakfast-2.webp",
                  "title": "میز پذیرایی صبحانه اصیل شیرازی و عرقیات سنتی",
                  "categoryName": "صبحانه و پذیرایی"
            },
            {
                  "id": 11,
                  "category": "rooms",
                  "src": "/images/rooms/karimkhan-1.webp",
                  "title": "اتاق کریم‌خان با معماری استوار و طاق‌های خشتی زندیه",
                  "categoryName": "اتاق‌ها و سوئیت‌ها"
            },
            {
                  "id": 12,
                  "category": "rooms",
                  "src": "/images/rooms/sangi-1.webp",
                  "title": "اتاق سنگی با ازاره‌های دست‌تراش و نهایت آرامش و سکوت",
                  "categoryName": "اتاق‌ها و سوئیت‌ها"
            },
            {
                  "id": 13,
                  "category": "reception",
                  "src": "/images/areas/reception-2.webp",
                  "title": "لابی نشیمن عمارت با مبل‌های چوبی اصیل و فرش‌های دستباف",
                  "categoryName": "پذیرش و لابی"
            },
            {
                  "id": 14,
                  "category": "rooms",
                  "src": "/images/rooms/parvindokht-1.jpg",
                  "title": "اتاق پروین‌دخت مزین به دست‌بافته‌های ایلیاتی و گچ‌بری ظریف",
                  "categoryName": "اتاق‌ها و سوئیت‌ها"
            },
            {
                  "id": 15,
                  "category": "courtyard",
                  "src": "/images/areas/courtyard-3.webp",
                  "title": "انعکاس آسمان شیراز در آب زلال حوض فیروزه‌ای عمارت",
                  "categoryName": "حیاط و معماری"
            }
      ],
      "close": "بستن (Esc)",
      "prev": "قبلی (کلید راست)",
      "next": "بعدی (کلید چپ)",
      "arrowsHint": "کلیدهای جهت‌نما برای جابجایی",
      "escHint": "Esc برای بستن",
      "of": "از"
},
    reels: {
      items: [
        {
          id: "story-1",
          caption: "شکوه سقف‌های نگارین و لوستر شاهانه عمارت",
          poster: "/images/reel-poster-1.jpg",
          videoSrc: "/videos/reel-1.mp4",
        },
        {
          id: "story-2",
          caption: "نمای هوایی و آرامش باصفای حیاط مرکزی",
          poster: "/images/reel-poster-2.jpg",
          videoSrc: "/videos/reel-2.mp4",
        },
        {
          id: "story-3",
          caption: "حوض فیروزه‌ای و نیلوفرهای آبی در آفتاب نیمروزی",
          poster: "/images/reel-poster-3.jpg",
          videoSrc: "/videos/reel-3.mp4",
        },
        {
          id: "story-4",
          caption: "گشودن درب‌های چوبی کهن به سوی تالار آینه",
          poster: "/images/reel-poster-4.jpg",
          videoSrc: "/videos/reel-4.mp4",
        },
        {
          id: "story-5",
          caption: "گشت و گذار در اتاق‌های دلنشین و آرامش‌بخش عمارت",
          poster: "/images/reel-poster-5.jpg",
          videoSrc: "/videos/reel-5.mp4",
        },
        {
          id: "story-6",
          caption: "اصالت اتاق پهلوی با فرش دستباف و سقف نقاشی‌شده",
          poster: "/images/reel-poster-6.jpg",
          videoSrc: "/videos/reel-6.mp4",
        },
        {
          id: "story-7",
          caption: "سردر تاریخی و کوبه‌های درب کهن عمارت فرهادی",
          poster: "/images/reel-poster-7.jpg",
          videoSrc: "/videos/reel-7.mp4",
        },
        {
          id: "story-8",
          caption: "خوش‌آمدگویی گرم و میزبانی در اتاق‌های سنتی شیراز",
          poster: "/images/reel-poster-8.jpg",
          videoSrc: "/videos/reel-8.mp4",
        },
        {
          id: "story-9",
          caption: "هنر بی‌نظیر نقاشی سقف و اقامت در عمارت تاریخی",
          poster: "/images/reel-poster-9.jpg",
          videoSrc: "/videos/reel-9.mp4",
        },
        {
          id: "story-10",
          caption: "ضیافت صبحانه سنتی شیرازی در شکوه تالار آینه",
          poster: "/images/reel-poster-10.jpg",
          videoSrc: "/videos/reel-10.mp4",
        },
        {
          id: "story-11",
          caption: "جزییات نوستالژیک و حال‌وهوای آرامش‌بخش عمارت",
          poster: "/images/reel-poster-11.jpg",
          videoSrc: "/videos/reel-11.mp4",
        },
      ],
      hotelTitle: "بوتیک هتل عمارت فرهادی",
      mute: "قطع صدا",
      unmute: "وصل صدا",
      pause: "توقف",
      play: "پخش",
      prev: "قبلی",
      next: "بعدی",
      of: "از",
      videoPending: "فایل ویدیو در مسیر زیر قرار می‌گیرد:",
    },
    amenities: {
      heading: "میزبانی و خدمات عمارت",
      desc: "آرامش خانه‌ای قاجاری با کیفیتی بی‌تکلف؛ فراهم آوردن هرآنچه برای اقامتی آسوده در شیراز نیاز دارید.",
      items: [
        {
          title: "صبحانه اصیل در حیاط مرکزی",
          desc: "سرو روزانه نان تازه محلی، سرشیر شیرازی، پنیر سنتی، مرباهای خانگی و عرقیات بهارنارنج در کنار حوض فیروزه‌ای.",
          detail: "سلف‌سرویس · ۸:۰۰ تا ۱۰:۳۰",
        },
        {
          title: "چای‌خانه و کافه سنتی عمارت",
          desc: "پذیرایی عصرگاهی با فالوده شیرازی، چای دمی در استکان‌های قاجاری، دمنوش‌های گیاهی و شیرینی‌های سنتی در مهتابی.",
          detail: "همه روزه تا نیمه‌شب",
        },
        {
          title: "کانسیرج و راهنمای بافت کهن",
          desc: "راهنمایی تخصصی جهت پیاده‌گردی در کوچه‌های آرام سنگ‌سیاه، دسترسی به بازار وکیل و روایت‌های ناشنیده شیراز تاریخی.",
          detail: "پذیرش شبانه‌روزی",
        },
        {
          title: "اینترنت پرسرعت فیبر نوری",
          desc: "پوشش سراسری و نامحدود در تمام اتاق‌ها، شاه‌نشین، حیاط مرکزی و بام اختصاصی عمارت بدون قطعی.",
          detail: "Wi-Fi رایگان",
        },
        {
          title: "پارکینگ اختصاصی و نگهبانی",
          desc: "هماهنگی فضای پارک اختصاصی، امن و مسقف در چندقدمی عمارت با نگهبانی ۲۴ ساعته برای خودروهای مهمانان.",
          detail: "امن و در مجاورت هتل",
        },
        {
          title: "ترانسفر و گشت‌های اختصاصی",
          desc: "استقبال مستقیم از فرودگاه بین‌المللی شیراز و هماهنگی گشت‌های روزانه به تخت‌جمشید، نقش‌رستم و پاسارگاد.",
          detail: "با هماهنگی قبلی",
        },
      ],
    },
    location: {
      heading: "موقعیت در قلب بافت تاریخی",
      desc: "عمارت در بافت پیاده‌مدار و آرام شیراز کهن واقع شده و دسترسی چند دقیقه‌ای به شاهچراغ و راسته وکیل را میسر می‌سازد.",
      addressLabel: "نشانی عمارت:",
      address: "شیراز، سه‌راه نمازی، خیابان شهید دستغیب، کوچه ۶، عمارت تاریخی فرهادی",
      attractionsHeading: "فاصله تا اماکن تاریخی شیراز:",
      attractions: [
        {
          name: "حرم مطهر حضرت شاهچراغ (ع)",
          desc: "پیاده‌روی مستقیم از کوچه دستغیب",
          time: "۴ دقیقه پیاده",
          highlight: true,
        },
        {
          name: "مجموعه زندیه، بازار و حمام وکیل",
          desc: "گذر از بافت تاریخی زندیه",
          time: "۸ دقیقه پیاده",
          highlight: false,
        },
        {
          name: "مسجد نصیرالملک (مسجد صورتی)",
          desc: "گذر از محله تاریخی گود عربان",
          time: "۱۲ دقیقه پیاده",
          highlight: false,
        },
        {
          name: "ارگ کریم‌خان زند",
          desc: "میدان شهدا (توپخانه کهن)",
          time: "۵ دقیقه با خودرو",
          highlight: false,
        },
        {
          name: "فرودگاه بین‌المللی شیراز",
          desc: "مسیر بزرگراه شهید مدرس",
          time: "۲۰ دقیقه با خودرو",
          highlight: false,
        },
      ],
      navDirect: "مسیریابی مستقیم:",
      googleMaps: "گوگل مپ",
      neshan: "مسیریاب نشان",
      balad: "مسیریاب بلد",
      mapLoading: "در حال بارگذاری نقشه شیراز...",
      traceHint: "با کلیک روی هر مکان، مسیر مورب آن تا عمارت روی نقشه رسم می‌شود",
      resetView: "تمرکز بر موقعیت عمارت",
      collapseBtn: "بستن",
      expandBtn: "مشاهده اماکن تاریخی",
      landmarksCount: "۵ مکان تاریخی",
    },
    contact: {
      heading: "پذیرش و ارتباط مستقیم",
      desc: "رزرو بدون واسطه و دریافت راهنمایی اقامت؛ همکاران ما در پذیرش عمارت به صورت شبانه‌روزی پاسخگوی شما هستند.",
      phoneHeading: "راه‌های ارتباط تلفنی و پیام‌رسان",
      landlineLabel: "تلفن ثابت پذیرش",
      mobileLabel: "همراه پذیرش و مدیریت",
      whatsappBtn: "گفتگو در واتس‌اپ",
      instagramBtn: "صفحه رسمی اینستاگرام",
      instagramLabel: "اینستاگرام عمارت فرهادی",
      stayInfoHeading: "اطلاعات اقامتی",
      addressTitle: "نشانی عمارت:",
      addressDesc: "شیراز، سه‌راه نمازی، خیابان شهید دستغیب، کوچه ۶",
      checkInOutTitle: "ساعات تحویل و تخلیه اتاق:",
      checkInOutDesc: "تحویل اتاق: از ساعت ۱۴:۰۰ | تخلیه اتاق: تا ساعت ۱۲:۰۰ ظهر",
      buyoutTitle: "رزرو اختصاصی و دربست:",
      buyoutDesc: "امکان رزرو کامل عمارت برای جلسات، مراسم‌های خانوادگی و سفرهای گروهی با هماهنگی مدیریت وجود دارد.",
      emailTitle: "پست الکترونیک:",
    },
    booking: {
      title: "پذیرش عمارت فرهادی",
      selectedRoomPrefix: "واحد انتخابی:",
      desc: "جهت آگاهی از ظرفیت خالی اتاق‌ها و هماهنگی اقامت در شیراز، با پذیرش عمارت تماس بگیرید یا در واتس‌اپ پیام ارسال فرمایید:",
      whatsappText: "ارسال پیام در واتس‌اپ",
      whatsappQuick: "پاسخگویی سریع ←",
      landlineText: "تلفن ثابت هتل",
      mobileText: "همراه پذیرش ۲۴ ساعته",
    },
    floatingCTA: {
      receptionBtn: "پذیرش هتل",
      whatsappAria: "گفتگو با پذیرش در واتس‌اپ",
    },
    footer: {
      desc: "عمارتی با بیش از یک قرن پیشینه در بافت فرهنگی-تاریخی شیراز. حیاط مرکزی باصفا با حوض فیروزه، پنجره‌های ارسی با شیشه‌های رنگین، عطر بهارنارنج و میزبانی اصیل شیرازی.",
      quickNav: "دسترسی سریع",
      roomsNav: "اتاق‌های عمارت",
      directReserve: "رزرو مستقیم هتل",
      receptionNotice: "پذیرش شبانه‌روزی عمارت تاریخی فرهادی:",
      contactBtn: "ارتباط با پذیرش",
      copyright: "بوتیک هتل عمارت تاریخی فرهادی شیراز",
      locationTag: "شیراز · بافت کهن زندیه و قاجار",
    },
  },
  en: {
    brand: {
      name: hotelConfig.meta.nameEn,
      title: hotelConfig.meta.fullNameEn,
      subtitle: hotelConfig.meta.subtitleEn,
      badge: hotelConfig.meta.badgeEn,
    },
    nav: {
      address: hotelConfig.location.addressEn,
      phone: hotelConfig.contact.phone.displayEn,
      mobile: hotelConfig.contact.mobile.displayEn,
      reception: "Reception:",
      home: "Home",
      story: "Story",
      rooms: "Rooms",
      gallery: "Gallery",
      reels: "Videos",
      amenities: "Services",
      location: "Location",
      contact: "Contact",
      bookBtn: "Reception",
      langSwitch: "فارسی",
    },
    hero: {
      title: hotelConfig.meta.nameEn,
      subtitle: hotelConfig.meta.badgeEn,
      reserveBtn: "Direct Reservation",
      scrollHint: "Scroll down to mansion story",
      snappPayHeroBadge: hotelConfig.features.snappPay.heroDescEn,
      images: [
        {
          src: "/images/areas/courtyard-1.webp",
          alt: "Peaceful courtyard and turquoise pool at historic Farhadi Mansion",
        },
        {
          src: "/images/areas/reception-1.webp",
          alt: "Heritage hotel reception and entrance foyer with authentic decor",
        },
        {
          src: "/images/rooms/talar-ayineh-1.webp",
          alt: "Mirror Hall suite reflecting rainbow sunlight through Qajar orsi windows",
        },
        {
          src: "/images/areas/breakfast-1.webp",
          alt: "Traditional breakfast hall & tea house with antique brass samovars",
        },
        {
          src: "/images/areas/courtyard-2.webp",
          alt: "Carved plaster pillars and balcony overlooking courtyard citrus trees",
        },
        {
          src: "/images/areas/reception-2.webp",
          alt: "Traditional lobby salon with handcrafted wooden furnishings and Persian carpets",
        },
      ],
    },
    story: {
      heading: "The Story of the Mansion & Old Shiraz",
      desc: "A century-old residence in the historic heart of Shiraz; hand-cut mirrorwork, walnut woodwork, and the tranquil sanctuary of a traditional central courtyard.",
      scenes: [
        {
          id: "courtyard",
          title: "The Turquoise Pool & Water's Song",
          caption: "The quiet serenity of introverted Persian architecture; secluded courtyard beneath bitter orange trees, where gentle fountains silence the bustle of the city.",
          image: "/images/areas/courtyard-1.webp",
          alt: "Serene courtyard of historic Farhadi Mansion with turquoise pool",
        },
        {
          id: "orsi",
          title: "Morning Sun Through Seven-Color Orsi",
          caption: "Master craftsmanship of Shiraz woodwork; morning rays illuminate jewel-toned stained glass, painting the royal chamber in warm radiant hues.",
          image: "/images/rooms/orsi-pasto-1.webp",
          alt: "Traditional stained glass and walnut woodwork at Farhadi Mansion",
        },
        {
          id: "reception",
          title: "Historic Foyer & Welcoming Reception",
          caption: "Welcoming guests into authentic historic grandeur; stately arches, heritage inscriptions, and genuine Shiraz warmth from the very first moment.",
          image: "/images/areas/reception-1.webp",
          alt: "Traditional reception and foyer at Farhadi Boutique Hotel Shiraz",
        },
      ],
      calloutTitle: "Living Inside a Heritage Monument",
      calloutDesc: "Each room and suite welcomes guests with authentic Qajar architecture and the peaceful soul of Shiraz.",
      reserveDirect: "Direct Booking",
      viewRooms: "Explore Rooms",
    },
    rooms: {
      heading: "Rooms & Suites of the Mansion",
      desc: "14 authentic historical rooms and suites reviving the Zand, Qajar, and Pahlavi eras; combining handcrafted mirror mosaics and stained-glass orsi with premier boutique hotel comfort.",
      inquireBtn: "Inquire & Reserve",
      viewGalleryBtn: "View Photo Gallery",
      photosLabel: "photos",
      allPhotosCount: "View all",

      callToBook: "Call to Reserve",
      whatsapp: "WhatsApp",
      capacityLabel: "Capacity:",
      sizeLabel: "Area:",
      snappPayBannerBadge: "Special Installment Booking",
      snappPayBannerTitle: "Book Your Stay in Shiraz with 4 Snapp! Pay Installments",
      snappPayBannerDesc: "Zero interest, zero extra fees, and no guarantee checks required. Choose your favorite suite and split the payment into 4 easy monthly installments.",
      snappPayBtn: "Inquire 4x Installments",
      snappPayTag: "Pay in 4 installments with Snapp! Pay (0% interest)",
      snappPayShortTag: "4x Snapp! Pay",
      categories: [
        {
                "id": "all",
                "label": "All 14 Rooms"
        },
        {
                "id": "mirror",
                "label": "Mirror & Royal Suites"
        },
        {
                "id": "traditional",
                "label": "Traditional Orsi"
        },
        {
                "id": "serene",
                "label": "Serene Heritage"
        }
],
      items: [
        {
                "id": "talar-ayineh",
                "title": "Talar Ayineh Suite (Mirror Hall)",
                "subtitle": "Geometric ceiling masterpiece with radiant mirror mosaics",
                "image": "/images/rooms/talar-ayineh-1.webp",
                "images": [
              "/images/rooms/talar-ayineh-1.webp",
              "/images/rooms/talar-ayineh-2.webp",
              "/images/rooms/talar-ayineh-3.webp",
              "/images/rooms/talar-ayineh-4.webp",
              "/images/rooms/talar-ayineh-5.webp",
              "/images/rooms/talar-ayineh-6.jpg",
              "/images/rooms/talar-ayineh-7.webp"
],
                "capacity": "2 to 3 Guests",
                "size": "35 sq.m",
                "architectureFeature": "Traditional geometric masterpiece ceiling with full-surface mirror mosaic",
                "category": "mirror",
                "categoryLabel": "Mirror Suites",
                "highlights": [
			"Full-wall mirror mosaics with radiant reflections",
			"Handcrafted geometric ceiling and traditional motifs",
			"Seven-color orsi windows facing the courtyard pool",
			"Artisanal tiled flooring with classic Persian decor"
		],
                "description": "The Mirror Hall features exquisite full-wall mirror mosaics, historic geometric ceiling motifs, and seven-color Qajar orsi windows reflecting radiant natural light."
        },
        {
                "id": "hezar-ayineh",
                "title": "Hezar Ayineh Suite (Thousand Mirrors)",
                "subtitle": "Regal retreat with crystal chandelier and ornate mirrorcraft",
                "image": "/images/rooms/hezar-ayineh-1.webp",
                "images": [
              "/images/rooms/hezar-ayineh-1.webp",
              "/images/rooms/hezar-ayineh-2.webp",
              "/images/rooms/hezar-ayineh-3.webp",
              "/images/rooms/hezar-ayineh-4.webp",
              "/images/rooms/hezar-ayineh-5.webp",
              "/images/rooms/hezar-ayineh-6.jpg"
],
                "capacity": "2 to 4 Guests",
                "size": "38 sq.m",
                "architectureFeature": "Delicate geometric floral ceiling with radiant mirror mosaic & crystal fixture",
                "category": "mirror",
                "categoryLabel": "Mirror Suites",
                "highlights": [
			"Full-surface mirror mosaics with dazzling illumination",
			"Artisanal floral ceiling with grand crystal chandelier",
			"Hand-carved double bed and private sitting area",
			"Bespoke handcrafted tilework and aristocratic furnishings"
		],
                "description": "Hezar Ayineh combines geometric floral ceilings, an imposing crystal chandelier, and intricate mirrorwork for a truly royal Persian stay."
        },
        {
                "id": "orsi-pasto",
                "title": "Orsi Pasto Room",
                "subtitle": "Connected heritage suite with two distinct interconnected chambers",
                "image": "/images/rooms/orsi-pasto-1.webp",
                "images": [
              "/images/rooms/orsi-pasto-1.webp",
              "/images/rooms/orsi-pasto-2.webp",
              "/images/rooms/orsi-pasto-3.webp",
              "/images/rooms/orsi-pasto-4.webp",
              "/images/rooms/orsi-pasto-5.webp"
],
                "capacity": "2 to 3 Guests (Connected)",
                "size": "30 sq.m",
                "architectureFeature": "Two-room connected layout with classic parlor, extra bed & heritage orsi",
                "category": "traditional",
                "categoryLabel": "Traditional Orsi",
                "highlights": [
			"Two interconnected rooms: classic salon plus private bedroom",
			"Extra full bed in parlor comfortably hosting a third guest",
			"Antique walnut orsi windows with colored lattice glass",
			"Handwoven Shiraz carpets and authentic period styling"
		],
                "description": "Features two interconnected spaces: a classic parlor with an extra companion bed and a peaceful bedroom framed by historic walnut orsi windows."
        },
        {
                "id": "panjdari",
                "title": "Panj Dari Room (Five-Door)",
                "subtitle": "Art and tranquility; carved timber ceiling and courtyard doors",
                "image": "/images/rooms/panjdari-1.webp",
                "images": [
              "/images/rooms/panjdari-1.webp",
              "/images/rooms/panjdari-2.webp",
              "/images/rooms/panjdari-3.webp",
              "/images/rooms/panjdari-4.webp",
              "/images/rooms/panjdari-5.webp",
              "/images/rooms/panjdari-6.webp",
              "/images/rooms/panjdari-7.webp"
],
                "capacity": "2 to 3 Guests",
                "size": "32 sq.m",
                "architectureFeature": "Artisanal patterned timber ceiling with five arched doors to the courtyard",
                "category": "traditional",
                "categoryLabel": "Traditional Orsi",
                "highlights": [
			"Five arched timber doors opening to the central pool",
			"Handcrafted wooden ceiling with rare Persian motifs",
			"Vibrant morning sunshine filtered through colored glass",
			"Fresh courtyard breeze scented with bitter orange blossoms"
		],
                "description": "An ornate timber ceiling and five arched stained-glass doors form the soul of this room, opening wide to the central courtyard and fountain breeze."
        },
        {
                "id": "pahlavi",
                "title": "Pahlavi Suite",
                "subtitle": "Persian architectural grandeur with golden vaulted ceiling",
                "image": "/images/rooms/pahlavi-1.webp",
                "images": [
              "/images/rooms/pahlavi-1.webp",
              "/images/rooms/pahlavi-2.webp",
              "/images/rooms/pahlavi-3.webp",
              "/images/rooms/pahlavi-4.webp",
              "/images/rooms/pahlavi-5.webp",
              "/images/rooms/pahlavi-6.webp",
              "/images/rooms/pahlavi-7.webp",
              "/images/rooms/pahlavi-8.webp"
],
                "capacity": "2 to 3 Guests",
                "size": "34 sq.m",
                "architectureFeature": "Golden vaulted ceiling with artisan tilework & classical details",
                "category": "mirror",
                "categoryLabel": "Mirror Suites",
                "highlights": [
			"Gilded vaulted ceiling with refined plaster moldings",
			"Handcrafted floor tiles and fine Persian carpets",
			"Classical armchairs with antique gold detailing",
			"Tranquil heritage ambiance in historic Shiraz"
		],
                "description": "Showcases soaring gilded vaults, handcrafted tiles, and classical furnishings, offering a distinguished retreat steeped in historical elegance."
        },
        {
                "id": "karimkhan",
                "title": "Karim Khan Room",
                "subtitle": "Stately Zand era architecture with vaulted brick arches",
                "image": "/images/rooms/karimkhan-1.webp",
                "images": [
              "/images/rooms/karimkhan-1.webp",
              "/images/rooms/karimkhan-2.webp",
              "/images/rooms/karimkhan-3.webp",
              "/images/rooms/karimkhan-4.webp",
              "/images/rooms/karimkhan-5.webp"
],
                "capacity": "2 Guests",
                "size": "28 sq.m",
                "architectureFeature": "Stately Zand era vaulted brick arches with timeless symmetry",
                "category": "traditional",
                "categoryLabel": "Traditional Orsi",
                "highlights": [
			"Solid brick arches honoring Zand architectural symmetry",
			"Atmospheric ceiling telling stories of ancient Shiraz",
			"Profound quiet and shelter from urban noise",
			"Traditional terracotta floors, artisan rugs, modern bath"
		],
                "description": "Inspired by the golden Zand era, featuring symmetrical brick vaulting and quiet proportions for a deeply authentic historical experience."
        },
        {
                "id": "sehdari",
                "title": "Seh Dari Room (Three-Door)",
                "subtitle": "Romantic sanctuary with historic Shirazi wedding frescoes",
                "image": "/images/rooms/sehdari-1.webp",
                "images": [
              "/images/rooms/sehdari-1.webp",
              "/images/rooms/sehdari-2.webp",
              "/images/rooms/sehdari-3.webp",
              "/images/rooms/sehdari-4.webp"
],
                "capacity": "2 Guests",
                "size": "24 sq.m",
                "architectureFeature": "Historic Shirazi wedding mural frescoes from courtship to celebration",
                "category": "traditional",
                "categoryLabel": "Traditional Orsi",
                "highlights": [
			"Historic murals depicting courtship and wedding festivities",
			"Hand-painted ceiling and colorful stained-glass orsi",
			"Intimate romantic atmosphere tailored for honeymooners",
			"Lattice timber doors welcoming soft natural daylight"
		],
                "description": "Features ceiling paintings and wall murals illustrating traditional Persian wedding customs, creating a poetic setting perfect for couples."
        },
        {
                "id": "vesal-shirazi",
                "title": "Vesal Shirazi Room",
                "subtitle": "Honoring the celebrated Shiraz poet and calligrapher",
                "image": "/images/rooms/vesal-shirazi-1.webp",
                "images": [
              "/images/rooms/vesal-shirazi-1.webp",
              "/images/rooms/vesal-shirazi-2.webp",
              "/images/rooms/vesal-shirazi-3.webp",
              "/images/rooms/vesal-shirazi-4.webp"
],
                "capacity": "2 Guests",
                "size": "27 sq.m",
                "architectureFeature": "Historic calligraphy panels and Fars handwoven textiles",
                "category": "traditional",
                "categoryLabel": "Traditional Orsi",
                "highlights": [
			"Master calligraphy artworks and historic Persian inscriptions",
			"Traditional wooden writing desk with focused reading light",
			"Serene acoustic quiet for contemplation and rest",
			"Window overlooking the courtyard with soft daylight"
		],
                "description": "Dedicated to poet Vesal Shirazi, featuring curated calligraphy panels, a classic writing desk, and soothing harmony ideal for literary minds."
        },
        {
                "id": "sangi",
                "title": "Sangi Room (Stone Chamber)",
                "subtitle": "Natural acoustic cocoon with hand-carved stone plinths",
                "image": "/images/rooms/sangi-1.webp",
                "images": [
              "/images/rooms/sangi-1.webp",
              "/images/rooms/sangi-2.webp",
              "/images/rooms/sangi-3.webp",
              "/images/rooms/sangi-4.webp",
              "/images/rooms/sangi-5.webp",
              "/images/rooms/sangi-6.webp"
],
                "capacity": "2 Guests",
                "size": "26 sq.m",
                "architectureFeature": "Thick masonry stone walls and historic vaulted ceiling",
                "category": "serene",
                "categoryLabel": "Serene Heritage",
                "highlights": [
			"Thick masonry walls providing natural thermal and sound shielding",
			"Pleasant natural coolness during warm sunny days",
			"Authentic hand-dressed Qajar era stonework",
			"Premium ergonomic bedding for uninterrupted deep rest"
		],
                "description": "Thick heritage stone masonry delivers complete acoustic isolation and natural seasonal coolness for profoundly restful sleep."
        },
        {
                "id": "parvindokht",
                "title": "Parvin Dokht Room",
                "subtitle": "Poetic, warm haven styled with tribal nomadic textiles",
                "image": "/images/rooms/parvindokht-1.jpg",
                "images": [
              "/images/rooms/parvindokht-1.jpg",
              "/images/rooms/parvindokht-2.jpg",
              "/images/rooms/parvindokht-3.jpg",
              "/images/rooms/parvindokht-4.jpg"
],
                "capacity": "2 Guests",
                "size": "25 sq.m",
                "architectureFeature": "Traditional plaster niches and delicate heritage moldings",
                "category": "serene",
                "categoryLabel": "Serene Heritage",
                "highlights": [
			"Warm interiors decorated with authentic Fars tribal rugs",
			"Heritage plaster niches with antique mirror accents",
			"Garden-facing window welcoming gentle diffused daylight",
			"Full ensuite conveniences with modern walk-in shower"
		],
                "description": "Adorned with heritage plaster niches, authentic nomadic rugs, and a garden-facing window, offering a gentle glimpse into traditional Shirazi life."
        },
        {
                "id": "shoorideh",
                "title": "Shoorideh Room",
                "subtitle": "Exposed brick vaulting celebrating a legendary lyricist",
                "image": "/images/rooms/shoorideh-1.webp",
                "images": [
              "/images/rooms/shoorideh-1.webp",
              "/images/rooms/shoorideh-2.webp",
              "/images/rooms/shoorideh-3.webp",
              "/images/rooms/shoorideh-4.webp",
              "/images/rooms/shoorideh-5.webp",
              "/images/rooms/shoorideh-6.webp",
              "/images/rooms/shoorideh-7.jpg"
],
                "capacity": "2 Guests",
                "size": "26 sq.m",
                "architectureFeature": "Brick barrel vaulting with pure white Shirazi plaster",
                "category": "serene",
                "categoryLabel": "Serene Heritage",
                "highlights": [
			"Traditional brick barrel vaulting with genuine heritage lines",
			"Warm ambient sconce lighting for quiet evenings",
			"Built-in timber closet and comfortable lounge space",
			"Contemporary private ensuite with walk-in rainfall shower"
		],
                "description": "Commemorating poet Shoorideh of Shiraz, this room blends traditional brick arches and white plaster for a serene, intimate sanctuary."
        },
        {
                "id": "lotus",
                "title": "Lotus Room",
                "subtitle": "Inspired by timeless Persepolis lotus waterlily motifs",
                "image": "/images/rooms/lotus-1.webp",
                "images": [
              "/images/rooms/lotus-1.webp",
              "/images/rooms/lotus-2.webp",
              "/images/rooms/lotus-3.webp",
              "/images/rooms/lotus-4.webp",
              "/images/rooms/lotus-5.webp",
              "/images/rooms/lotus-6.jpg"
],
                "capacity": "2 Guests",
                "size": "25 sq.m",
                "architectureFeature": "Plaster friezes with classical Persian lotus motifs",
                "category": "serene",
                "categoryLabel": "Serene Heritage",
                "highlights": [
			"Decorative plaster friezes featuring classical lotus motifs",
			"Comfortable queen bed dressed in crisp organic cotton",
			"Comprehensive acoustic insulation and climate control",
			"Bright, minimalist atmosphere designed for mental stillness"
		],
                "description": "Draws inspiration from the ancient Persian lotus symbol of peace and purity, blending minimalist harmony with modern hotel comforts."
        },
        {
                "id": "arjan",
                "title": "Arjan Room",
                "subtitle": "Turquoise tiles, arabesque ceiling, and central pool views",
                "image": "/images/rooms/arjan-1.webp",
                "images": [
              "/images/rooms/arjan-1.webp",
              "/images/rooms/arjan-2.webp",
              "/images/rooms/arjan-3.jpg",
              "/images/rooms/arjan-4.webp",
              "/images/rooms/arjan-5.webp"
],
                "capacity": "2 Guests",
                "size": "24 sq.m",
                "architectureFeature": "Hand-painted arabesque ceiling, turquoise tiles & crystal chandelier",
                "category": "serene",
                "categoryLabel": "Serene Heritage",
                "highlights": [
			"Handcrafted turquoise ceramic flooring made in Shiraz",
			"Ceiling painted with gold and cobalt arabesque curves",
			"Generous wooden windows opening to the courtyard fountain",
			"Radiant crystal chandelier paired with azure velvet drapery"
		],
                "description": "Bright and airy, featuring turquoise ceramic tiles, hand-painted gilded arabesques, a sparkling crystal fixture, and courtyard pool vistas."
        },
        {
                "id": "marjook",
                "title": "Marjook Room",
                "subtitle": "Shirazi 'Marjook' painted timber beams and stained glass",
                "image": "/images/rooms/marjook-1.webp",
                "images": [
              "/images/rooms/marjook-1.webp",
              "/images/rooms/marjook-2.webp",
              "/images/rooms/marjook-3.webp",
              "/images/rooms/marjook-4.webp",
              "/images/rooms/marjook-5.webp",
              "/images/rooms/marjook-6.webp",
              "/images/rooms/marjook-7.webp",
              "/images/rooms/marjook-8.webp",
              "/images/rooms/marjook-9.webp",
              "/images/rooms/marjook-10.webp"
],
                "capacity": "2 Guests",
                "size": "24 sq.m",
                "architectureFeature": "Exclusive Shirazi 'Marjook' timber-beam artistry from Zand & Qajar eras",
                "category": "serene",
                "categoryLabel": "Serene Heritage",
                "highlights": [
			"Historic Shirazi 'Marjook' painted ceiling woodwork",
			"Hand-painted floral detailing across heritage ceiling beams",
			"Artisan floor tiles and tinted lattice timber windows",
			"Intimate and spotless layout maximizing tranquility"
		],
                "description": "Celebrates the regional Zand-era timber beam technique known as 'Marjook', pairing hand-painted beams with bespoke tiles and colorful stained glass."
        }
],
    },
    gallery: {
      "heading": "Visual Journal & Gallery",
      "desc": "An authentic narrative of colored sunlight through stained-glass orsi, courtyard stillness, and historic suites of Farhadi Boutique Hotel.",
      "categories": [
            {
                  "id": "all",
                  "label": "All Photos"
            },
            {
                  "id": "rooms",
                  "label": "Rooms & Suites"
            },
            {
                  "id": "courtyard",
                  "label": "Courtyard & Architecture"
            },
            {
                  "id": "dining",
                  "label": "Breakfast & Dining"
            },
            {
                  "id": "reception",
                  "label": "Reception & Lobby"
            }
      ],
      "items": [
            {
                  "id": 1,
                  "category": "courtyard",
                  "src": "/images/areas/courtyard-1.webp",
                  "title": "Central turquoise pool, moonlit evenings and serene courtyard atmosphere",
                  "categoryName": "Courtyard & Architecture"
            },
            {
                  "id": 2,
                  "category": "rooms",
                  "src": "/images/rooms/talar-ayineh-1.webp",
                  "title": "Mirror Hall suite reflecting rainbow sunlight through Qajar orsi windows",
                  "categoryName": "Rooms & Suites"
            },
            {
                  "id": 3,
                  "category": "rooms",
                  "src": "/images/rooms/hezar-ayineh-1.webp",
                  "title": "Hezar Ayineh suite: Handcrafted glass mosaic with gilded muqarnas",
                  "categoryName": "Rooms & Suites"
            },
            {
                  "id": 4,
                  "category": "reception",
                  "src": "/images/areas/reception-1.webp",
                  "title": "Heritage hotel reception and entrance foyer with authentic decor",
                  "categoryName": "Reception & Lobby"
            },
            {
                  "id": 5,
                  "category": "rooms",
                  "src": "/images/rooms/orsi-pasto-1.webp",
                  "title": "Orsi Pasto room: Walnut lattice windows and stained glass hues",
                  "categoryName": "Rooms & Suites"
            },
            {
                  "id": 6,
                  "category": "dining",
                  "src": "/images/areas/breakfast-1.webp",
                  "title": "Traditional breakfast hall & tea house with antique brass samovars",
                  "categoryName": "Breakfast & Dining"
            },
            {
                  "id": 7,
                  "category": "courtyard",
                  "src": "/images/areas/courtyard-2.webp",
                  "title": "Carved plaster pillars and balcony overlooking courtyard citrus trees",
                  "categoryName": "Courtyard & Architecture"
            },
            {
                  "id": 8,
                  "category": "rooms",
                  "src": "/images/rooms/panjdari-1.webp",
                  "title": "Panj Dari room with five wooden doors opening toward the courtyard",
                  "categoryName": "Rooms & Suites"
            },
            {
                  "id": 9,
                  "category": "rooms",
                  "src": "/images/rooms/pahlavi-1.webp",
                  "title": "Pahlavi Suite featuring towering ceilings and aristocratic furnishings",
                  "categoryName": "Rooms & Suites"
            },
            {
                  "id": 10,
                  "category": "dining",
                  "src": "/images/areas/breakfast-2.webp",
                  "title": "Authentic Shiraz morning breakfast and traditional distillates",
                  "categoryName": "Breakfast & Dining"
            },
            {
                  "id": 11,
                  "category": "rooms",
                  "src": "/images/rooms/karimkhan-1.webp",
                  "title": "Karim Khan room with solid brick vaults inspired by Zand architecture",
                  "categoryName": "Rooms & Suites"
            },
            {
                  "id": 12,
                  "category": "rooms",
                  "src": "/images/rooms/sangi-1.webp",
                  "title": "Sangi room with hand-cut stone plinths and profound restful quiet",
                  "categoryName": "Rooms & Suites"
            },
            {
                  "id": 13,
                  "category": "reception",
                  "src": "/images/areas/reception-2.webp",
                  "title": "Lobby salon featuring handcrafted wooden furnishings and Persian carpets",
                  "categoryName": "Reception & Lobby"
            },
            {
                  "id": 14,
                  "category": "rooms",
                  "src": "/images/rooms/parvindokht-1.jpg",
                  "title": "Parvin Dokht room styled with tribal carpets and fine plasterwork",
                  "categoryName": "Rooms & Suites"
            },
            {
                  "id": 15,
                  "category": "courtyard",
                  "src": "/images/areas/courtyard-3.webp",
                  "title": "Shiraz sky reflections in the tranquil turquoise courtyard fountain",
                  "categoryName": "Courtyard & Architecture"
            }
      ],
      "close": "Close (Esc)",
      "prev": "Previous (Right arrow)",
      "next": "Next (Left arrow)",
      "arrowsHint": "Arrow keys to navigate",
      "escHint": "Esc to close",
      "of": "of"
},
    reels: {
      items: [
        {
          id: "story-1",
          caption: "Hand-painted ceilings and royal chandeliers of the mansion",
          poster: "/images/reel-poster-1.jpg",
          videoSrc: "/videos/reel-1.mp4",
        },
        {
          id: "story-2",
          caption: "Aerial view and tranquil ambiance of the central courtyard",
          poster: "/images/reel-poster-2.jpg",
          videoSrc: "/videos/reel-2.mp4",
        },
        {
          id: "story-3",
          caption: "Turquoise pool and water lilies in the afternoon sun",
          poster: "/images/reel-poster-3.jpg",
          videoSrc: "/videos/reel-3.mp4",
        },
        {
          id: "story-4",
          caption: "Opening historical wooden doors to the Grand Mirror Hall",
          poster: "/images/reel-poster-4.jpg",
          videoSrc: "/videos/reel-4.mp4",
        },
        {
          id: "story-5",
          caption: "Guided tour through spacious and peaceful boutique suites",
          poster: "/images/reel-poster-5.jpg",
          videoSrc: "/videos/reel-5.mp4",
        },
        {
          id: "story-6",
          caption: "Heritage of Pahlavi room with Persian rugs & painted vaults",
          poster: "/images/reel-poster-6.jpg",
          videoSrc: "/videos/reel-6.mp4",
        },
        {
          id: "story-7",
          caption: "Historic portal and door knockers of Farhadi Mansion",
          poster: "/images/reel-poster-7.jpg",
          videoSrc: "/videos/reel-7.mp4",
        },
        {
          id: "story-8",
          caption: "Warm Persian hospitality and welcome to boutique rooms",
          poster: "/images/reel-poster-8.jpg",
          videoSrc: "/videos/reel-8.mp4",
        },
        {
          id: "story-9",
          caption: "Ceiling fresco masterpieces and luxury heritage stay",
          poster: "/images/reel-poster-9.jpg",
          videoSrc: "/videos/reel-9.mp4",
        },
        {
          id: "story-10",
          caption: "Authentic breakfast feast in the splendid Mirror Hall",
          poster: "/images/reel-poster-10.jpg",
          videoSrc: "/videos/reel-10.mp4",
        },
        {
          id: "story-11",
          caption: "Nostalgic antique details and tranquil mansion corners",
          poster: "/images/reel-poster-11.jpg",
          videoSrc: "/videos/reel-11.mp4",
        },
      ],
      hotelTitle: "Farhadi Historic Boutique Hotel",
      mute: "Mute",
      unmute: "Unmute",
      pause: "Pause",
      play: "Play",
      prev: "Previous",
      next: "Next",
      of: "of",
      videoPending: "Video file is loaded from:",
    },
    amenities: {
      heading: "Hospitality & Mansion Services",
      desc: "The serenity of a historic residence with effortless care; everything you need for an unforgettable stay in Shiraz.",
      items: [
        {
          title: "Authentic Courtyard Breakfast",
          desc: "Fresh baked local breads, clotted cream, regional cheeses, homemade jams, and bitter orange extracts beside the pool.",
          detail: "Buffet · 8:00 to 10:30 AM",
        },
        {
          title: "Traditional Tea House & Cafe",
          desc: "Afternoon service with authentic Shiraz faloodeh, brewed black tea in Qajar glassware, herbal infusions, and sweets.",
          detail: "Open Daily Until Midnight",
        },
        {
          title: "Historic Old Town Concierge",
          desc: "Tailored walking guides through the quiet lanes of Sang-e Siah, hidden alleys to Vakil Bazaar, and untold city stories.",
          detail: "24/7 Front Desk",
        },
        {
          title: "High-Speed Fiber-Optic Wi-Fi",
          desc: "Seamless, uninterrupted high-speed coverage across all guestrooms, royal hall, courtyard, and rooftop terrace.",
          detail: "Complimentary Wi-Fi",
        },
        {
          title: "Secure Private Parking",
          desc: "Dedicated, secure, and sheltered parking bays located just steps from the mansion with 24-hour security.",
          detail: "Secure & Adjacent to Hotel",
        },
        {
          title: "Transfers & Private Tours",
          desc: "Personalized airport transfers from Shiraz International Airport, and guided day excursions to Persepolis and Pasargadae.",
          detail: "Upon Request",
        },
      ],
    },
    location: {
      heading: "Located in the Historic Heart of Shiraz",
      desc: "Set within the tranquil pedestrian lanes of old Shiraz, offering effortless walking access to Shah Cheragh and Vakil Bazaar.",
      addressLabel: "Mansion Address:",
      address: "Alley 6, Shahid Dastgheib St, Namazi Intersection, Shiraz, Iran",
      attractionsHeading: "Walking Distance to Historic Landmarks:",
      attractions: [
        {
          name: "Holy Shrine of Shah Cheragh",
          desc: "Direct walking route via Dastgheib Alley",
          time: "4 min walk",
          highlight: true,
        },
        {
          name: "Zand Complex & Vakil Bazaar",
          desc: "Passing through the historic Zand quarter",
          time: "8 min walk",
          highlight: false,
        },
        {
          name: "Nasir al-Mulk Mosque (Pink Mosque)",
          desc: "Stroll through Goud-e Araban quarter",
          time: "12 min walk",
          highlight: false,
        },
        {
          name: "Arg of Karim Khan",
          desc: "Shohada Square (historic citadel)",
          time: "5 min drive",
          highlight: false,
        },
        {
          name: "Shiraz International Airport",
          desc: "Via Shahid Modarres Expressway",
          time: "20 min drive",
          highlight: false,
        },
      ],
      navDirect: "Direct Navigation:",
      googleMaps: "Google Maps",
      neshan: "Neshan Navigation",
      balad: "Balad Navigation",
      mapLoading: "Loading Shiraz interactive map...",
      traceHint: "Click any landmark to draw its diagonal route to the mansion on the map",
      resetView: "Focus on Farhadi Mansion",
      collapseBtn: "Collapse",
      expandBtn: "View Landmarks",
      landmarksCount: "5 Landmarks",
    },
    contact: {
      heading: "Reception & Direct Inquiries",
      desc: "Book directly without intermediaries; our concierge reception team is available 24/7 to assist with your reservations.",
      phoneHeading: "Direct Telephone & Messaging",
      landlineLabel: "Reception Landline",
      mobileLabel: "Reception Mobile & Management",
      whatsappBtn: "Chat on WhatsApp",
      instagramBtn: "Official Instagram Page",
      instagramLabel: "Farhadi Boutique Hotel Instagram",
      stayInfoHeading: "Stay Information",
      addressTitle: "Address:",
      addressDesc: "Alley 6, Shahid Dastgheib St, Namazi Intersection, Shiraz",
      checkInOutTitle: "Check-in & Check-out:",
      checkInOutDesc: "Check-in: from 14:00 | Check-out: by 12:00 noon",
      buyoutTitle: "Exclusive Mansion Buyout:",
      buyoutDesc: "The entire mansion can be reserved exclusively for private family retreats, executive meetings, and group stays.",
      emailTitle: "Official Email:",
    },
    booking: {
      title: "Farhadi Mansion Reception",
      selectedRoomPrefix: "Selected Unit:",
      desc: "To check live room availability and coordinate your stay in Shiraz, contact our front desk team 24/7 or message on WhatsApp:",
      whatsappText: "Message on WhatsApp",
      whatsappQuick: "Instant Reply →",
      landlineText: "Hotel Landline",
      mobileText: "24/7 Mobile Reception",
    },
    floatingCTA: {
      receptionBtn: "Hotel Reception",
      whatsappAria: "Chat with hotel reception on WhatsApp",
    },
    footer: {
      desc: "A boutique mansion with over a century of history in the cultural heart of Shiraz. Peaceful central courtyard, turquoise pool, stained-glass orsi, and heartfelt Persian hospitality.",
      quickNav: "Quick Navigation",
      roomsNav: "Mansion Rooms",
      directReserve: "Direct Reservation",
      receptionNotice: "24-Hour Front Desk & Concierge:",
      contactBtn: "Contact Reception",
      copyright: "Farhadi Historic Boutique Hotel Shiraz",
      locationTag: "Shiraz · Historic Zand & Qajar Quarter",
    },
  },
};
