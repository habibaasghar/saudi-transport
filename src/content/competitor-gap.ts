import type { ServicePage } from "./types";

/**
 * Competitor query-gap pass (2026-11-27).
 *
 * The route pages of saudicabco.com, taxiserviceksa.com, umrahtransit.com, saudiprivatetransfers.com
 * and taxisaudiarabia.com all answer the same buyer questions: price, per person or per vehicle,
 * distance, hours, train or flight against a car, which vehicle for a family, return booking,
 * night travel and luggage. This adds the questions each of our 30 priority route pages is missing,
 * in English and Arabic. Facts reuse the distances and times already on each page (Google Maps or
 * public sources, as cited there). No fares, no unconfirmed policies, no "taxi" wording.
 */

type City = { en: string; ar: string };
const C = {
  jed: { en: "Jeddah", ar: "جدة" },
  mak: { en: "Makkah", ar: "مكة" },
  med: { en: "Madinah", ar: "المدينة المنورة" },
  ruh: { en: "Riyadh", ar: "الرياض" },
  dmm: { en: "Dammam", ar: "الدمام" },
  ula: { en: "AlUla", ar: "العلا" },
  tif: { en: "Taif", ar: "الطائف" },
  ynb: { en: "Yanbu", ar: "ينبع" },
  ahb: { en: "Abha", ar: "أبها" },
  giz: { en: "Jazan", ar: "جازان" },
} satisfies Record<string, City>;

type Fact = {
  from: City;
  to: City;
  /** Full answer sentences, reused from the page's own verified figures. */
  far: { en: string; ar: string };
  long: { en: string; ar: string };
  /** Short duration phrase used inside other answers. */
  dur: { en: string; ar: string };
  /** Holy-city route: Zamzam, Miqat and Ziyarat details apply. */
  holy?: boolean;
  /** Long-haul route (300 km or more): night travel and overnight stops apply. */
  longHaul?: boolean;
  /** Train or flight against a private car, only where a real alternative exists. */
  alt?: { q: { en: string; ar: string }; a: { en: string; ar: string } };
};

const fly = (from: City, to: City, airportEn: string, airportAr: string, durEn: string, durAr: string): Fact["alt"] => ({
  q: { en: `Is it better to fly or drive from ${from.en} to ${to.en}?`, ar: `هل الأفضل الطيران أم السفر بالسيارة من ${from.ar} إلى ${to.ar}؟` },
  a: {
    en: `Domestic flights connect the two cities through ${airportEn}, and flying is quicker for one or two people with light bags. A private car suits families and groups sharing one vehicle, heavy luggage, and travellers who want door-to-door travel with stops of their choice instead of airport transfers at both ends. On a drive of ${durEn}, plan the departure around your arrival time.`,
    ar: `ترتبط المدينتان برحلات داخلية عبر ${airportAr}، والطيران أسرع لشخص أو اثنين بأمتعة خفيفة. أما السيارة الخاصة فتناسب العائلات والمجموعات في سيارة واحدة، والأمتعة الكثيرة، ومن يريد التوصيل من الباب إلى الباب مع توقفات يختارها بدل التنقل إلى المطار في الطرفين. وفي رحلة تستغرق ${durAr} خطط وقت الانطلاق على موعد وصولك.`,
  },
});

const F: Record<string, Fact> = {
  "jeddah-to-makkah": {
    from: C.jed, to: C.mak, holy: true,
    far: { en: "About 88 km from central Jeddah to the Masjid al-Haram area on Route 40.", ar: "حوالي 88 كم من وسط جدة إلى منطقة المسجد الحرام عبر الطريق 40." },
    long: { en: "About one hour in normal traffic, according to Google Maps.", ar: "نحو ساعة في حركة السير العادية بحسب خرائط Google." },
    dur: { en: "about one hour", ar: "نحو ساعة" },
    alt: {
      q: { en: "Is the Haramain train better than a private car from Jeddah to Makkah?", ar: "هل قطار الحرمين أفضل من السيارة الخاصة من جدة إلى مكة؟" },
      a: {
        en: "The Haramain High Speed Railway links Jeddah and Makkah and suits light travellers. The Makkah station is not at the Haram, so with suitcases you still need a car for the last part. A private car goes from your Jeddah address to the nearest accessible point to your hotel with the bags loaded once, which suits families, elderly passengers and groups.",
        ar: "يربط قطار الحرمين السريع بين جدة ومكة ويناسب من يسافر بأمتعة خفيفة. لكن محطة مكة ليست عند الحرم، فمع الحقائب تحتاج سيارة للجزء الأخير. أما السيارة الخاصة فتنقلك من عنوانك في جدة إلى أقرب نقطة مسموحة من فندقك وتُحمَّل الحقائب مرة واحدة، وهذا يناسب العائلات وكبار السن والمجموعات.",
      },
    },
  },
  "makkah-to-jeddah": {
    from: C.mak, to: C.jed, holy: true,
    far: { en: "About 98 km to Jeddah airport and 88 km to central Jeddah on Route 40.", ar: "حوالي 98 كم إلى مطار جدة و88 كم إلى وسط جدة عبر الطريق 40." },
    long: { en: "About 1 hour 5 minutes to the airport in normal traffic, according to Google Maps.", ar: "نحو ساعة وخمس دقائق إلى المطار في حركة السير العادية بحسب خرائط Google." },
    dur: { en: "about an hour", ar: "نحو ساعة" },
  },
  "jeddah-to-madinah": {
    from: C.jed, to: C.med, holy: true, longHaul: true,
    far: { en: "About 404 km from central Jeddah to the Prophet's Mosque area, mostly on Route 15.", ar: "حوالي 404 كم من وسط جدة إلى منطقة المسجد النبوي، أغلبها عبر الطريق 15." },
    long: { en: "About 4 hours 7 minutes in normal traffic, according to Google Maps, before stops.", ar: "نحو 4 ساعات و7 دقائق في حركة السير العادية بحسب خرائط Google، قبل التوقفات." },
    dur: { en: "about four hours", ar: "نحو أربع ساعات" },
  },
  "madinah-to-jeddah": {
    from: C.med, to: C.jed, holy: true, longHaul: true,
    far: { en: "About 400 km, mostly on Route 15, from the Prophet's Mosque area.", ar: "حوالي 400 كم من منطقة المسجد النبوي، أغلبها عبر الطريق 15." },
    long: { en: "About 3 hours 56 minutes to Jeddah airport in normal traffic, according to Google Maps.", ar: "نحو 3 ساعات و56 دقيقة إلى مطار جدة بحسب خرائط Google." },
    dur: { en: "about four hours", ar: "نحو أربع ساعات" },
  },
  "makkah-to-madinah": {
    from: C.mak, to: C.med, holy: true, longHaul: true,
    far: { en: "About 436 km by Route 15 from the Masjid al-Haram area to the Prophet's Mosque area.", ar: "حوالي 436 كم عبر الطريق 15 من منطقة المسجد الحرام إلى منطقة المسجد النبوي." },
    long: { en: "About 4 hours 20 minutes of driving, according to Google Maps, before stops.", ar: "نحو 4 ساعات و20 دقيقة قيادة بحسب خرائط Google، قبل التوقفات." },
    dur: { en: "about 4 hours 20 minutes", ar: "نحو 4 ساعات و20 دقيقة" },
  },
  "madinah-to-makkah": {
    from: C.med, to: C.mak, holy: true, longHaul: true,
    far: { en: "Public sources give about 420 to 450 km.", ar: "تذكر المصادر العامة نحو 420 إلى 450 كم." },
    long: { en: "Four to five hours of driving by public sources, plus the Miqat stop and breaks.", ar: "من أربع إلى خمس ساعات قيادة بحسب المصادر العامة، يضاف إليها التوقف عند الميقات والاستراحات." },
    dur: { en: "four to five hours", ar: "أربع إلى خمس ساعات" },
  },
  "riyadh-to-dammam": {
    from: C.ruh, to: C.dmm, longHaul: true,
    far: { en: "About 410 km by Route 40 from central Riyadh to central Dammam.", ar: "حوالي 410 كم عبر الطريق 40 من وسط الرياض إلى وسط الدمام." },
    long: { en: "About 3 hours 55 minutes in normal traffic, according to Google Maps, before stops.", ar: "نحو 3 ساعات و55 دقيقة بحسب خرائط Google، قبل التوقفات." },
    dur: { en: "close to four hours", ar: "قرابة أربع ساعات" },
  },
  "dammam-to-riyadh": {
    from: C.dmm, to: C.ruh, longHaul: true,
    far: { en: "Public mapping sources give roughly 400 to 415 km.", ar: "تذكر مصادر الخرائط العامة نحو 400 إلى 415 كم." },
    long: { en: "About three and a half to four hours of driving before stops, by public mapping sources.", ar: "من ثلاث ساعات ونصف إلى أربع ساعات قيادة قبل التوقفات بحسب مصادر الخرائط العامة." },
    dur: { en: "three and a half to four hours", ar: "ثلاث ساعات ونصف إلى أربع ساعات" },
  },
  "riyadh-to-jeddah": {
    from: C.ruh, to: C.jed, longHaul: true,
    far: { en: "About 955 km on Route 40 from central Riyadh to central Jeddah.", ar: "حوالي 955 كم عبر الطريق 40 من وسط الرياض إلى وسط جدة." },
    long: { en: "About 9 hours 48 minutes of driving, according to Google Maps, before stops.", ar: "نحو 9 ساعات و48 دقيقة قيادة بحسب خرائط Google، قبل التوقفات." },
    dur: { en: "close to ten hours", ar: "قرابة عشر ساعات" },
  },
  "jeddah-to-riyadh": {
    from: C.jed, to: C.ruh, longHaul: true,
    far: { en: "Public mapping sources give about 950 km, mostly on Route 40.", ar: "تذكر مصادر الخرائط العامة نحو 950 كم، أغلبها عبر الطريق 40." },
    long: { en: "Around nine and a half hours of driving before stops, by public mapping sources.", ar: "نحو تسع ساعات ونصف قيادة قبل التوقفات بحسب مصادر الخرائط العامة." },
    dur: { en: "around nine and a half hours", ar: "نحو تسع ساعات ونصف" },
  },
  "riyadh-to-makkah": {
    from: C.ruh, to: C.mak, holy: true, longHaul: true,
    far: { en: "About 871 km on Route 40 from central Riyadh to the Masjid al-Haram area.", ar: "حوالي 871 كم عبر الطريق 40 من وسط الرياض إلى منطقة المسجد الحرام." },
    long: { en: "About 9 hours 3 minutes of driving, according to Google Maps, before stops.", ar: "نحو 9 ساعات و3 دقائق قيادة بحسب خرائط Google، قبل التوقفات." },
    dur: { en: "about nine hours", ar: "نحو تسع ساعات" },
    alt: {
      q: { en: "Can I fly or take the train from Riyadh to Makkah instead of driving?", ar: "هل يمكنني الطيران أو ركوب القطار من الرياض إلى مكة بدل السيارة؟" },
      a: {
        en: "Makkah has no airport, so the usual alternative is a flight from Riyadh to Jeddah and then the road or the Haramain train to Makkah. That is quicker for one or two people with light bags. A private car avoids the change of transport over the 871 km, carries all the luggage from your door to your hotel, and stops where you choose, including the Miqat.",
        ar: "لا يوجد مطار في مكة، فالبديل المعتاد هو الطيران من الرياض إلى جدة ثم الطريق أو قطار الحرمين إلى مكة، وهذا أسرع لشخص أو اثنين بأمتعة خفيفة. أما السيارة الخاصة فتغنيك عن تغيير وسيلة النقل على مسافة 871 كم، وتحمل الأمتعة كلها من بابك إلى فندقك، وتتوقف حيث تختار ومنها الميقات.",
      },
    },
  },
  "makkah-to-riyadh": {
    from: C.mak, to: C.ruh, holy: true, longHaul: true,
    far: { en: "About 871 km on Route 40 from the Masjid al-Haram area to central Riyadh.", ar: "حوالي 871 كم عبر الطريق 40 من منطقة المسجد الحرام إلى وسط الرياض." },
    long: { en: "About 8 hours 59 minutes of driving, according to Google Maps, before stops.", ar: "نحو 8 ساعات و59 دقيقة قيادة بحسب خرائط Google، قبل التوقفات." },
    dur: { en: "about nine hours", ar: "نحو تسع ساعات" },
  },
  "riyadh-to-alula": {
    from: C.ruh, to: C.ula, longHaul: true,
    far: { en: "About 1,041 km via Route 65 and Route 70 (Google Maps, November 2026).", ar: "حوالي 1,041 كم عبر الطريقين 65 و70 (خرائط Google، نوفمبر 2026)." },
    long: { en: "About 11 hours 14 minutes of driving before stops, so many travellers break the journey in Hail.", ar: "نحو 11 ساعة و14 دقيقة قيادة قبل التوقفات، لذلك يقسم كثير من المسافرين الرحلة بمبيت في حائل." },
    dur: { en: "about eleven hours", ar: "نحو إحدى عشرة ساعة" },
  },
  "alula-to-riyadh": {
    from: C.ula, to: C.ruh, longHaul: true,
    far: { en: "About 1,040 km through Hail and Qassim, according to a Saudi news report.", ar: "حوالي 1,040 كم عبر حائل والقصيم بحسب تقرير إخباري سعودي." },
    long: { en: "Roughly 11 hours of driving before stops; many travellers split it with a night on the way.", ar: "نحو 11 ساعة قيادة قبل التوقفات، ويقسمها كثيرون بمبيت في الطريق." },
    dur: { en: "roughly eleven hours", ar: "نحو إحدى عشرة ساعة" },
    alt: fly(C.ula, C.ruh, "AlUla International Airport and King Khalid International Airport", "مطار العلا الدولي ومطار الملك خالد الدولي", "roughly eleven hours", "نحو إحدى عشرة ساعة"),
  },
  "madinah-to-alula": {
    from: C.med, to: C.ula, longHaul: true,
    far: { en: "About 338 km from the Prophet's Mosque area to AlUla town.", ar: "حوالي 338 كم من منطقة المسجد النبوي إلى بلدة العلا." },
    long: { en: "About 3 hours 40 minutes of driving before stops.", ar: "نحو 3 ساعات و40 دقيقة قيادة قبل التوقفات." },
    dur: { en: "about 3 hours 40 minutes", ar: "نحو 3 ساعات و40 دقيقة" },
  },
  "alula-to-madinah": {
    from: C.ula, to: C.med, longHaul: true,
    far: { en: "About 337 km via Route 328 from AlUla town to the Prophet's Mosque area.", ar: "حوالي 337 كم عبر الطريق 328 من بلدة العلا إلى منطقة المسجد النبوي." },
    long: { en: "About 3 hours 50 minutes of driving before stops (Google Maps, November 2026).", ar: "نحو 3 ساعات و50 دقيقة قيادة قبل التوقفات (خرائط Google، نوفمبر 2026)." },
    dur: { en: "about 3 hours 50 minutes", ar: "نحو 3 ساعات و50 دقيقة" },
  },
  "jeddah-to-taif": {
    from: C.jed, to: C.tif,
    far: { en: "About 171 km from central Jeddah to central Taif.", ar: "حوالي 171 كم من وسط جدة إلى وسط الطائف." },
    long: { en: "About 1 hour 55 minutes in normal traffic, according to Google Maps.", ar: "نحو ساعة و55 دقيقة بحسب خرائط Google." },
    dur: { en: "about two hours", ar: "نحو ساعتين" },
  },
  "taif-to-jeddah": {
    from: C.tif, to: C.jed,
    far: { en: "About 171 km from central Taif to central Jeddah.", ar: "حوالي 171 كم من وسط الطائف إلى وسط جدة." },
    long: { en: "About 2 hours in normal traffic, according to Google Maps.", ar: "نحو ساعتين بحسب خرائط Google." },
    dur: { en: "about two hours", ar: "نحو ساعتين" },
  },
  "makkah-to-taif": {
    from: C.mak, to: C.tif, holy: true,
    far: { en: "About 89 km by the mountain road.", ar: "حوالي 89 كم عبر الطريق الجبلي." },
    long: { en: "Around 1 hour 20 minutes of driving, according to Google Maps.", ar: "نحو ساعة و20 دقيقة قيادة بحسب خرائط Google." },
    dur: { en: "around 1 hour 20 minutes", ar: "نحو ساعة و20 دقيقة" },
  },
  "taif-to-makkah": {
    from: C.tif, to: C.mak, holy: true,
    far: { en: "About 89 km by the Al Hada road; the Sayl road is longer.", ar: "حوالي 89 كم عبر طريق الهدا، وطريق السيل أطول." },
    long: { en: "Around 1 hour 20 minutes by the Al Hada road, according to Google Maps, plus any Miqat stop.", ar: "نحو ساعة و20 دقيقة عبر طريق الهدا بحسب خرائط Google، يضاف إليها التوقف عند الميقات." },
    dur: { en: "around 1 hour 20 minutes", ar: "نحو ساعة و20 دقيقة" },
  },
  "jeddah-to-yanbu": {
    from: C.jed, to: C.ynb, longHaul: true,
    far: { en: "About 324 km from Jeddah airport on the coastal highway.", ar: "حوالي 324 كم من مطار جدة عبر الطريق الساحلي." },
    long: { en: "Just over three hours of driving before stops, on Google Maps.", ar: "ما يزيد قليلًا على ثلاث ساعات قيادة قبل التوقفات بحسب خرائط Google." },
    dur: { en: "just over three hours", ar: "ما يزيد قليلًا على ثلاث ساعات" },
  },
  "yanbu-to-jeddah": {
    from: C.ynb, to: C.jed, longHaul: true,
    far: { en: "About 324 km to Jeddah airport and 343 km to Historic Jeddah.", ar: "حوالي 324 كم إلى مطار جدة و343 كم إلى جدة التاريخية." },
    long: { en: "About 3 hours 6 minutes to the airport without stops (Google Maps, November 2026).", ar: "نحو 3 ساعات و6 دقائق إلى المطار دون توقف (خرائط Google، نوفمبر 2026)." },
    dur: { en: "about three hours", ar: "نحو ثلاث ساعات" },
  },
  "jeddah-to-dammam": {
    from: C.jed, to: C.dmm, longHaul: true,
    far: { en: "Public mapping sources give roughly 1,350 to 1,365 km.", ar: "تذكر مصادر الخرائط العامة نحو 1,350 إلى 1,365 كم." },
    long: { en: "Roughly 13 hours of driving before stops; most travellers plan a full day or a night in Riyadh.", ar: "نحو 13 ساعة قيادة قبل التوقفات، ويخطط أغلب المسافرين ليوم كامل أو مبيت في الرياض." },
    dur: { en: "roughly 13 hours", ar: "نحو 13 ساعة" },
    alt: fly(C.jed, C.dmm, "King Abdulaziz International Airport and King Fahd International Airport", "مطار الملك عبدالعزيز الدولي ومطار الملك فهد الدولي", "roughly 13 hours", "نحو 13 ساعة"),
  },
  "dammam-to-jeddah": {
    from: C.dmm, to: C.jed, longHaul: true,
    far: { en: "Public mapping sources give roughly 1,350 to 1,365 km.", ar: "تذكر مصادر الخرائط العامة نحو 1,350 إلى 1,365 كم." },
    long: { en: "About 13 hours of driving before stops, by public mapping sources.", ar: "نحو 13 ساعة قيادة قبل التوقفات بحسب مصادر الخرائط العامة." },
    dur: { en: "about 13 hours", ar: "نحو 13 ساعة" },
    alt: fly(C.dmm, C.jed, "King Fahd International Airport and King Abdulaziz International Airport", "مطار الملك فهد الدولي ومطار الملك عبدالعزيز الدولي", "about 13 hours", "نحو 13 ساعة"),
  },
  "jeddah-to-abha": {
    from: C.jed, to: C.ahb, longHaul: true,
    far: { en: "Public sources vary; expect roughly 620 to 700 km and check a live map for your route.", ar: "تختلف المصادر العامة، فتوقع نحو 620 إلى 700 كم وراجع خريطة مباشرة لطريقك." },
    long: { en: "Roughly eight to nine hours before stops, ending with a mountain climb.", ar: "نحو ثماني إلى تسع ساعات قبل التوقفات، تنتهي بصعود جبلي." },
    dur: { en: "eight to nine hours", ar: "ثماني إلى تسع ساعات" },
    alt: fly(C.jed, C.ahb, "King Abdulaziz International Airport and Abha International Airport", "مطار الملك عبدالعزيز الدولي ومطار أبها الدولي", "eight to nine hours", "ثماني إلى تسع ساعات"),
  },
  "abha-to-jeddah": {
    from: C.ahb, to: C.jed, longHaul: true,
    far: { en: "Public sources vary; treat roughly 620 to 700 km as a guide.", ar: "تختلف المصادر العامة، فاعتبر نحو 620 إلى 700 كم تقديرًا تقريبيًا." },
    long: { en: "Roughly eight to nine hours before stops, starting with a mountain descent.", ar: "نحو ثماني إلى تسع ساعات قبل التوقفات، تبدأ بنزول جبلي." },
    dur: { en: "eight to nine hours", ar: "ثماني إلى تسع ساعات" },
  },
  "jeddah-to-jazan": {
    from: C.jed, to: C.giz, longHaul: true,
    far: { en: "Public mapping sources give about 710 to 725 km along the Red Sea coast.", ar: "تذكر مصادر الخرائط العامة نحو 710 إلى 725 كم على امتداد ساحل البحر الأحمر." },
    long: { en: "Roughly seven to eight hours of driving before stops.", ar: "نحو سبع إلى ثماني ساعات قيادة قبل التوقفات." },
    dur: { en: "seven to eight hours", ar: "سبع إلى ثماني ساعات" },
    alt: fly(C.jed, C.giz, "King Abdulaziz International Airport and Jazan's King Abdullah bin Abdulaziz Airport", "مطار الملك عبدالعزيز الدولي ومطار الملك عبدالله بن عبدالعزيز في جازان", "seven to eight hours", "سبع إلى ثماني ساعات"),
  },
  "jazan-to-jeddah": {
    from: C.giz, to: C.jed, longHaul: true,
    far: { en: "Public mapping sources give about 710 to 725 km.", ar: "تذكر مصادر الخرائط العامة نحو 710 إلى 725 كم." },
    long: { en: "Roughly seven to eight hours before stops.", ar: "نحو سبع إلى ثماني ساعات قبل التوقفات." },
    dur: { en: "seven to eight hours", ar: "سبع إلى ثماني ساعات" },
  },
  "abha-to-riyadh": {
    from: C.ahb, to: C.ruh, longHaul: true,
    far: { en: "Public sources give roughly 880 to 950 km on the main roads.", ar: "تذكر المصادر العامة نحو 880 إلى 950 كم على الطرق الرئيسية." },
    long: { en: "About nine to ten hours before stops; the road chosen changes the figure.", ar: "نحو تسع إلى عشر ساعات قبل التوقفات، ويتغير ذلك بحسب الطريق المختار." },
    dur: { en: "nine to ten hours", ar: "تسع إلى عشر ساعات" },
    alt: fly(C.ahb, C.ruh, "Abha International Airport and King Khalid International Airport", "مطار أبها الدولي ومطار الملك خالد الدولي", "nine to ten hours", "تسع إلى عشر ساعات"),
  },
  "riyadh-to-abha": {
    from: C.ruh, to: C.ahb, longHaul: true,
    far: { en: "Public sources give roughly 880 to 950 km on the main roads; check a live map for your route.", ar: "تذكر المصادر العامة نحو 880 إلى 950 كم على الطرق الرئيسية، فراجع خريطة مباشرة لطريقك." },
    long: { en: "About nine to ten hours before stops, by public sources, with the last part climbing into the Asir highlands.", ar: "نحو تسع إلى عشر ساعات قبل التوقفات بحسب المصادر العامة، وآخرها صعود إلى مرتفعات عسير." },
    dur: { en: "nine to ten hours", ar: "تسع إلى عشر ساعات" },
    alt: fly(C.ruh, C.ahb, "King Khalid International Airport and Abha International Airport", "مطار الملك خالد الدولي ومطار أبها الدولي", "nine to ten hours", "تسع إلى عشر ساعات"),
  },
};

/** Page-level FAQ cap: competitor pages carry 9 to 16 questions; more stops being readable. */
const MAX_FAQS = 16;

const has = (qs: string[], re: RegExp) => qs.some((q) => re.test(q));

export function applyCompetitorGapFaqs(pages: ServicePage[]) {
  for (const [slug, f] of Object.entries(F)) {
    const page = pages.find((p) => p.path === `services/intercity-transfers/${slug}`);
    if (!page) throw new Error(`competitor-gap: unknown route ${slug}`);
    const { from: X, to: Y } = f;
    const en = page.copy.en;
    const ar = page.copy.ar;
    const qs = en.faqs.map((q) => q.q);

    // Riyadh to Abha said "we do not publish an estimate" while Abha to Riyadh cites public sources: align them.
    if (slug === "riyadh-to-abha") {
      const i = en.faqs.findIndex((q) => /how long/i.test(q.q) && /do not publish/i.test(q.a));
      if (i >= 0) {
        en.faqs[i] = { ...en.faqs[i], a: f.long.en };
        const j = ar.faqs.findIndex((q) => /لا ننشر/.test(q.a));
        if (j >= 0) ar.faqs[j] = { ...ar.faqs[j], a: f.long.ar };
      }
    }

    const extraEn = f.holy ? ", and any Miqat or Ziyarat stop" : f.longHaul ? ", and any overnight stop or waiting" : "";
    const extraAr = f.holy ? "، وأي توقف عند الميقات أو للزيارة" : f.longHaul ? "، وأي مبيت أو انتظار في الطريق" : "";
    const bagsEn = f.holy ? ", Zamzam carton, wheelchair or stroller" : ", golf bag, wheelchair or stroller";
    const bagsAr = f.holy ? "، وكرتون ماء زمزم والكرسي المتحرك أو عربة الأطفال" : "، وحقيبة الغولف والكرسي المتحرك أو عربة الأطفال";

    const add: { en: { q: string; a: string }; ar: { q: string; a: string } }[] = [];
    if (!has(qs, /how much|price|cost|fare/i))
      add.push({
        en: { q: `How much is a private car from ${X.en} to ${Y.en}?`, a: `No fixed fare is published for ${X.en} to ${Y.en}. The quotation is for the whole vehicle and depends on the date, the vehicle (sedan, GMC Yukon or Hyundai Staria), your exact pickup and drop-off${extraEn}. Send the details and you see the price before you confirm.` },
        ar: { q: `كم سعر السيارة الخاصة من ${X.ar} إلى ${Y.ar}؟`, a: `لا ننشر سعرًا ثابتًا لرحلة ${X.ar} إلى ${Y.ar}. عرض السعر للسيارة كاملة، ويتحدد بحسب التاريخ ونوع السيارة (سيدان أو جمس يوكن أو هيونداي ستاريا) وعنوان الاستلام والتوصيل${extraAr}. أرسل التفاصيل وسترى السعر قبل أن تؤكد.` },
      });
    if (!has(qs, /per (person|seat|passenger)|per (vehicle|car)/i))
      add.push({
        en: { q: `Is the ${X.en} to ${Y.en} price per person or per vehicle?`, a: `Per vehicle. The ${X.en} to ${Y.en} quotation is for the whole car reserved for your party, not a price per seat. The number of passengers and bags still matters, because it decides which vehicle you need.` },
        ar: { q: `هل سعر التوصيل من ${X.ar} إلى ${Y.ar} للشخص أم للسيارة؟`, a: `للسيارة. عرض السعر من ${X.ar} إلى ${Y.ar} يشمل السيارة كاملة المخصصة لمجموعتك، وليس سعرًا لكل مقعد. ويبقى عدد الركاب والحقائب مهمًا لأنه يحدد السيارة المناسبة.` },
      });
    if (!has(qs, /how far|distance|\bkm\b/i))
      add.push({ en: { q: `What is the road distance from ${X.en} to ${Y.en}?`, a: f.far.en }, ar: { q: `كم المسافة من ${X.ar} إلى ${Y.ar} بالسيارة؟`, a: f.far.ar } });
    if (!has(qs, /how long|how many hours|take by road/i))
      add.push({ en: { q: `How long is the drive from ${X.en} to ${Y.en}?`, a: f.long.en }, ar: { q: `كم ساعة من ${X.ar} إلى ${Y.ar} بالسيارة؟`, a: f.long.ar } });
    if (f.alt && !has(qs, /train|\bfly\b|flight|\bbus\b/i)) add.push({ en: { q: f.alt.q.en, a: f.alt.a.en }, ar: { q: f.alt.q.ar, a: f.alt.a.ar } });
    if (!has(qs, /family|families|which (car|vehicle)|vehicle (should|to)|sedan|gmc|staria|suburban/i))
      add.push({
        en: { q: `Which vehicle suits a family travelling from ${X.en} to ${Y.en}?`, a: `A sedan suits one or two travellers with ordinary luggage. Families usually ask for a GMC Yukon for the extra room${f.longHaul ? `, which matters on a drive of ${f.dur.en}` : ""}, and a Hyundai Staria seats up to seven passengers, so a larger family or small group travels in one vehicle. Give the number of adults, children and large bags, and the vehicle is confirmed in the quotation.` },
        ar: { q: `ما السيارة المناسبة لعائلة مسافرة من ${X.ar} إلى ${Y.ar}؟`, a: `تناسب السيدان راكبًا أو اثنين مع أمتعة عادية، وتطلب العائلات عادةً جمس يوكن لمساحة أكبر${f.longHaul ? `، وهذا مهم في رحلة تستغرق ${f.dur.ar}` : ""}، أما هيونداي ستاريا فتتسع لسبعة ركاب لتسافر العائلة الكبيرة أو المجموعة الصغيرة في سيارة واحدة. اذكر عدد البالغين والأطفال والحقائب الكبيرة، وتُحدد السيارة في عرض السعر.` },
      });
    if (!has(qs, new RegExp(`return|back to|${Y.en} (back )?to ${X.en}|from ${Y.en}`, "i")))
      add.push({
        en: { q: `Can I book the return from ${Y.en} to ${X.en} at the same time?`, a: `Yes. Put both dates in one enquiry and the ${Y.en} to ${X.en} leg is quoted together with the outward journey${f.longHaul ? `, whatever the number of days you spend in ${Y.en}` : ""}. Both legs appear in the quotation before you confirm.` },
        ar: { q: `هل أحجز العودة من ${Y.ar} إلى ${X.ar} مع رحلة الذهاب؟`, a: `نعم. اكتب التاريخين في طلب واحد، فتُسعَّر رحلة العودة من ${Y.ar} إلى ${X.ar} مع رحلة الذهاب${f.longHaul ? ` أيًا كان عدد الأيام التي تقضيها في ${Y.ar}` : ""}، وتظهر الرحلتان في عرض السعر قبل أن تؤكد.` },
      });
    if (!has(qs, /luggage|bags|suitcase/i))
      add.push({
        en: { q: `How much luggage can we take from ${X.en} to ${Y.en}?`, a: `It depends on the vehicle. List every large suitcase and cabin bag${bagsEn} in the enquiry: a sedan takes ordinary luggage for one or two travellers, and larger loads need a GMC Yukon or a Hyundai Staria. The quotation confirms a vehicle that fits all of it.` },
        ar: { q: `كم حقيبة يمكننا أخذها من ${X.ar} إلى ${Y.ar}؟`, a: `يعتمد ذلك على السيارة. اذكر في الطلب كل حقيبة كبيرة وحقيبة يد${bagsAr}: السيدان تكفي الأمتعة العادية لراكب أو اثنين، والحمولة الأكبر تحتاج جمس يوكن أو هيونداي ستاريا. ويؤكد عرض السعر سيارة تتسع لكل ذلك.` },
      });
    if (f.longHaul && !has(qs, /night|evening|overnight|early|late/i))
      add.push({
        en: { q: `Can I leave ${X.en} for ${Y.en} at night?`, a: `You can ask for any departure time, including late evening or before dawn, and the time is confirmed with availability in the quotation. The drive takes ${f.dur.en}, so a night departure means an early arrival in ${Y.en}: check your hotel's check-in time first.` },
        ar: { q: `هل يمكنني السفر من ${X.ar} إلى ${Y.ar} ليلًا؟`, a: `يمكنك طلب أي وقت انطلاق، بما في ذلك آخر المساء أو قبل الفجر، ويُؤكد الوقت مع التوفر في عرض السعر. تستغرق الرحلة ${f.dur.ar}، فالانطلاق ليلًا يعني الوصول مبكرًا إلى ${Y.ar}، لذا تأكد أولًا من وقت تسجيل الدخول في فندقك.` },
      });

    const room = Math.max(0, MAX_FAQS - en.faqs.length);
    for (const item of add.slice(0, room)) {
      en.faqs.push(item.en);
      ar.faqs.push(item.ar);
    }
  }
}

