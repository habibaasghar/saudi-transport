import type { Locale } from "@/i18n/routing";
import type { ServicePage } from "./types";

/**
 * Haramain train station transfers (2026-11-27): Makkah and Madinah stations.
 *
 * Why: competitor sites (taxiserviceksa "Jeddah Train Station", taxisaudiarabia, umrahtransit) cover the station to
 * hotel leg, and the site's own guides tell train travellers they "still need a car from the station", with no page
 * to book it. Search intent: arriving by Haramain train with luggage, or leaving a hotel to catch a train.
 *
 * Facts:
 *  - Google Maps, 27 Nov 2026, driving, usual traffic: Makkah station (al-Rusaifa) to the Masjid al-Haram about
 *    7.4 km / 17 min; Madinah station (Knowledge Economic City) to the Prophet's Mosque about 12.3 km / 20 min;
 *    Madinah station to Prince Mohammad bin Abdulaziz International Airport (MED) about 10.8 km / 11 min.
 *  - Saudipedia, "Haramain High Speed Railway": stations in Makkah, Jeddah (Sulaymaniyah and King Abdulaziz
 *    International Airport), King Abdullah Economic City and Madinah; Makkah to Madinah about 2 h 45 min.
 *  - Owner-confirmed: vehicles are sedan, GMC Yukon and Hyundai Staria (Staria 7 passengers, 10+ bags); WhatsApp
 *    replies within 15 minutes, 8am to 12am KSA.
 * Not claimed: free waiting time, train tracking, 24/7 service, prices, ticket sales.
 */
const U = "2026-11-27";
const S = "services";
const UM = `${S}/umrah-transport`;
const I = `${S}/intercity-transfers`;
const C = `${S}/city-transport`;

export const MAKKAH_STATION = `${UM}/makkah-train-station-transfer`;
export const MADINAH_STATION = `${UM}/madinah-train-station-transfer`;

export const stationPages: ServicePage[] = [
  {
    path: MAKKAH_STATION,
    parent: UM,
    variant: "umrah",
    service: "umrah",
    related: [`${C}/makkah`, `${I}/madinah-to-makkah`, `${UM}/jeddah-airport-to-makkah`, `${UM}/makkah-ziyarat`, `${I}/makkah-to-taif`, "fleet/hyundai-staria-with-driver"],
    updated: U,
    copy: {
      en: {
        nav: "Makkah Train Station Transfer",
        title: "Makkah Haramain Station to Hotel: Private Car",
        description: "Private car from the Haramain train station in Makkah to your hotel near the Haram, about 7.4 km and 17 minutes, or from your hotel to the station. Request a quote.",
        h1: "Makkah Haramain train station to your hotel by private car",
        eyebrow: "Makkah · Haramain High Speed Railway station, al-Rusaifa",
        answer: "The Haramain train stops at Makkah station in al-Rusaifa, not at the Haram. By road the Masjid al-Haram is about 7.4 km away, around 17 minutes in usual traffic (Google Maps, November 2026). RideSaudi arranges a pre-booked private car with a driver from the station to your hotel, or from your hotel to the station, with room for your luggage.",
        summary: "Private car between Makkah's Haramain station and your hotel near the Haram, in either direction.",
        table: {
          h: "Makkah station at a glance",
          head: ["Item", "Detail", "Source"],
          rows: [
            ["Station location", "Al-Rusaifa district, west of the central area", "Saudipedia"],
            ["Station to the Masjid al-Haram by road", "About 7.4 km, around 17 minutes in usual traffic", "Google Maps, 27 Nov 2026"],
            ["Station to the Clock Tower (Abraj Al Bait) hotels by road", "About 11.3 km, around 20 minutes in usual traffic", "Google Maps, 28 Nov 2026"],
            ["Train from Madinah", "About 2 hours 45 minutes", "Saudipedia"],
            ["Other stations on the line", "Jeddah (Sulaymaniyah and the airport), King Abdullah Economic City, Madinah", "Saudipedia"],
            ["Vehicles you can request", "Sedan, GMC Yukon, Hyundai Staria (7 passengers)", "RideSaudi"],
          ],
        },
        sections: [
          {
            h: "Why you need a car at Makkah station",
            p: [
              "The train is quick, but the Makkah station is in al-Rusaifa, outside the central area, and Google Maps puts the Masjid al-Haram about 7.4 km away by road. With a cabin bag that is a short taxi ride. With suitcases, Zamzam cartons, children or older parents, the last few kilometres are the hardest part of the trip, and a car that is already booked takes the uncertainty out of it.",
            ],
          },
          {
            h: "From the station to your hotel",
            p: [
              "Send us your train's scheduled arrival time, the number of passengers, the number of large bags and the name of your hotel. The driver meets you at the point agreed in the quotation and drives you to the hotel. Vehicle access close to the Haram is controlled and changes with the season and the time of day, so the drop-off is made at the nearest point the traffic arrangements allow on the day. Hotels around the Clock Tower (Abraj Al Bait) are further by road than the Haram's nearest edge: about 11.3 km and 20 minutes from the station, so allow for that when you plan the evening.",
              "If your train is running late, message us on WhatsApp with the new time. We reply within 15 minutes between 8am and midnight, Saudi time.",
            ],
          },
          {
            h: "From your hotel to the station",
            p: [
              "Leaving Makkah by train, for Madinah, Jeddah or the airport station, works the other way round. Give us the departure time on your ticket and your hotel, and the pickup is planned with a margin for check-out, prayer-time traffic around the Haram and loading the bags. Around Friday prayer, in Ramadan and in the Hajj season, leave more time than you think you need.",
            ],
          },
          {
            h: "Which vehicle to request",
            p: [
              "A sedan suits one or two travellers with ordinary luggage. Families usually ask for a GMC Yukon for the extra space, and the Hyundai Staria takes up to seven passengers with ten or more bags, so a larger family or small group arrives in one vehicle. Give the number of large bags as well as people; it decides the vehicle more often than the head count does.",
            ],
          },
          {
            h: "Arriving from Madinah by train",
            p: [
              "Most passengers at Makkah station come from Madinah, often at the start of Umrah. Matters of Ihram and the Miqat are for you and your scholar or group leader; RideSaudi gives no religious rulings. What we can plan is the arrival: if you want to go from the station to the hotel and on to the Haram the same day, tell us so the timing fits. If you prefer to make the whole Madinah to Makkah journey by road, door to door, see the Madinah to Makkah private car page.",
            ],
          },
        ],
        checklist: {
          h: "What to include in your enquiry",
          items: [
            "Train date and scheduled arrival or departure time",
            "Direction: station to hotel, or hotel to station",
            "Hotel name and district in Makkah",
            "Number of adults and children",
            "Number of large suitcases, Zamzam cartons, wheelchair or stroller",
            "Vehicle preference: sedan, GMC Yukon or Hyundai Staria",
          ],
        },
        faqs: [
          { q: "How far is the Makkah Haramain station from the Masjid al-Haram?", a: "About 7.4 km by road, around 17 minutes in usual traffic, according to Google Maps (November 2026). The station is in al-Rusaifa, so you need transport from the station to a hotel near the Haram." },
          { q: "How far is Makkah station from the Clock Tower hotels?", a: "About 11.3 km by road, around 20 minutes in usual traffic (Google Maps, November 2026), because the route to Abraj Al Bait goes round by the First Ring Road. Give your hotel name and the drive is planned to its entrance or the nearest point a car may reach." },
          { q: "Can I book a private car from Makkah train station to my hotel?", a: "Yes. Send the train arrival time, your hotel, the number of passengers and bags, and RideSaudi quotes a private car with a driver for your party only." },
          { q: "Can the car take me from my Makkah hotel to the train station?", a: "Yes. Give us the departure time on your ticket and your hotel, and the pickup is planned with a margin for check-out and traffic around the Haram." },
          { q: "What happens if my train arrives late in Makkah?", a: "Message us on WhatsApp with the new arrival time. We reply within 15 minutes between 8am and midnight, Saudi time, and adjust the pickup where availability allows." },
          { q: "Can the driver drop us right at the hotel entrance near the Haram?", a: "Vehicle access near the Haram is controlled and changes with the time of day and the season, so the drop-off is made at the nearest point allowed on the day. Give the hotel name and district so the driver plans the approach." },
          { q: "Is the Makkah station transfer price per person or per vehicle?", a: "Per vehicle. The quotation covers the whole car reserved for your party. The number of passengers and bags decides whether you need a sedan, a GMC Yukon or a Hyundai Staria." },
          { q: "Do you sell Haramain train tickets?", a: "No. Book train tickets through the official Haramain High Speed Railway channels. RideSaudi arranges only the car between the station and your hotel." },
        ],
      },
      ar: {
        nav: "توصيل محطة قطار مكة",
        title: "من محطة قطار مكة إلى الفندق بسيارة خاصة",
        description: "سيارة خاصة مع سائق من محطة قطار الحرمين في مكة إلى فندقك قرب الحرم، نحو 7.4 كم و17 دقيقة، أو من فندقك إلى المحطة. اطلب عرض سعر.",
        h1: "من محطة قطار الحرمين في مكة المكرمة إلى فندقك بسيارة خاصة",
        eyebrow: "مكة المكرمة · محطة قطار الحرمين السريع، حي الرصيفة",
        answer: "يتوقف قطار الحرمين في محطة مكة بحي الرصيفة لا عند الحرم، ويبعد المسجد الحرام عنها نحو 7.4 كم بالطريق، أي قرابة 17 دقيقة في حركة السير المعتادة (خرائط جوجل، نوفمبر 2026). ترتب RideSaudi سيارة خاصة مع سائق محجوزة مسبقًا من المحطة إلى فندقك أو من فندقك إلى المحطة، مع مساحة لأمتعتك.",
        summary: "سيارة خاصة بين محطة قطار الحرمين في مكة وفندقك قرب الحرم، في الاتجاهين.",
        table: {
          h: "محطة مكة باختصار",
          head: ["البند", "التفاصيل", "المصدر"],
          rows: [
            ["موقع المحطة", "حي الرصيفة، غرب المنطقة المركزية", "سعوديبيديا"],
            ["من المحطة إلى المسجد الحرام بالطريق", "نحو 7.4 كم، قرابة 17 دقيقة في حركة السير المعتادة", "خرائط جوجل، 27 نوفمبر 2026"],
            ["من المحطة إلى فنادق أبراج البيت (برج الساعة) بالطريق", "نحو 11.3 كم، قرابة 20 دقيقة في حركة السير المعتادة", "خرائط جوجل، 28 نوفمبر 2026"],
            ["القطار من المدينة المنورة", "نحو ساعتين و45 دقيقة", "سعوديبيديا"],
            ["محطات الخط الأخرى", "جدة (السليمانية والمطار)، مدينة الملك عبدالله الاقتصادية، المدينة المنورة", "سعوديبيديا"],
            ["السيارات المتاحة للطلب", "سيدان، جمس يوكن، هيونداي ستاريا (7 ركاب)", "RideSaudi"],
          ],
        },
        sections: [
          {
            h: "لماذا تحتاج سيارة عند محطة مكة؟",
            p: [
              "القطار سريع، لكن محطة مكة في حي الرصيفة خارج المنطقة المركزية، وتقدّر خرائط جوجل المسافة منها إلى المسجد الحرام بنحو 7.4 كم بالطريق. مع حقيبة يد يكفي مشوار قصير، أما مع الحقائب الكبيرة وكراتين ماء زمزم والأطفال أو الوالدين الكبار فتصبح الكيلومترات الأخيرة أصعب جزء في الرحلة، والسيارة المحجوزة مسبقًا تريحك من هذا القلق.",
            ],
          },
          {
            h: "من المحطة إلى فندقك",
            p: [
              "أرسل لنا موعد وصول قطارك المجدول وعدد الركاب وعدد الحقائب الكبيرة واسم فندقك. يلتقيك السائق في النقطة المتفق عليها في عرض السعر ويوصلك إلى الفندق. الدخول بالسيارات قرب الحرم منظم ويتغير بحسب الموسم والوقت، لذلك يكون النزول في أقرب نقطة تسمح بها ترتيبات المرور في ذلك اليوم. وفنادق أبراج البيت (برج الساعة) أبعد بالطريق من أقرب طرف للحرم: نحو 11.3 كم و20 دقيقة من المحطة، فاحسب ذلك عند تخطيط المساء.",
              "إذا تأخر قطارك فأرسل لنا الموعد الجديد على واتساب، ونرد خلال 15 دقيقة من الثامنة صباحًا حتى منتصف الليل بتوقيت السعودية.",
            ],
          },
          {
            h: "من فندقك إلى المحطة",
            p: [
              "المغادرة من مكة بالقطار، إلى المدينة أو جدة أو محطة المطار، تسير بالعكس: أعطنا موعد المغادرة المدون على تذكرتك واسم فندقك، ونحدد وقت الاستلام بهامش يكفي لتسجيل الخروج وزحام أوقات الصلاة حول الحرم وتحميل الحقائب. وفي يوم الجمعة وفي رمضان وموسم الحج اترك وقتًا أطول مما تظن.",
            ],
          },
          {
            h: "أي سيارة تطلب؟",
            p: [
              "تناسب السيدان راكبًا أو اثنين مع أمتعة عادية، وتطلب العائلات عادةً جمس يوكن لمساحتها الأكبر، أما هيونداي ستاريا فتتسع لسبعة ركاب مع عشر حقائب أو أكثر، فتصل العائلة الكبيرة أو المجموعة الصغيرة في سيارة واحدة. اذكر عدد الحقائب الكبيرة إلى جانب عدد الأشخاص، فهو الذي يحدد السيارة في أغلب الأحيان.",
            ],
          },
          {
            h: "القادمون من المدينة المنورة بالقطار",
            p: [
              "أغلب ركاب محطة مكة قادمون من المدينة المنورة، وكثير منهم في بداية العمرة. أحكام الإحرام والميقات ترجع إليك وإلى من تستفتيه، ولا تقدم RideSaudi فتاوى. ما نخطط له هو الوصول: إن أردت الذهاب من المحطة إلى الفندق ثم إلى الحرم في اليوم نفسه فأخبرنا ليتناسب التوقيت. وإن فضّلت الرحلة كلها بالسيارة من الباب إلى الباب فراجع صفحة التوصيل من المدينة إلى مكة بسيارة خاصة.",
            ],
          },
        ],
        checklist: {
          h: "ماذا تذكر في طلبك",
          items: [
            "تاريخ القطار وموعد الوصول أو المغادرة المجدول",
            "الاتجاه: من المحطة إلى الفندق أو من الفندق إلى المحطة",
            "اسم الفندق والحي في مكة",
            "عدد البالغين والأطفال",
            "عدد الحقائب الكبيرة وكراتين زمزم والكرسي المتحرك أو عربة الأطفال",
            "السيارة المفضلة: سيدان أو جمس يوكن أو هيونداي ستاريا",
          ],
        },
        faqs: [
          { q: "كم تبعد محطة قطار الحرمين في مكة عن المسجد الحرام؟", a: "نحو 7.4 كم بالطريق، أي قرابة 17 دقيقة في حركة السير المعتادة بحسب خرائط جوجل (نوفمبر 2026). المحطة في حي الرصيفة، فتحتاج وسيلة نقل منها إلى فندقك قرب الحرم." },
          { q: "كم تبعد محطة مكة عن فنادق برج الساعة؟", a: "نحو 11.3 كم بالطريق، قرابة 20 دقيقة في حركة السير المعتادة (خرائط جوجل، نوفمبر 2026)، لأن الطريق إلى أبراج البيت يلتف عبر الطريق الدائري الأول. أرسل اسم فندقك ويُخطَّط المشوار إلى مدخله أو أقرب نقطة تصلها السيارة." },
          { q: "هل أحجز سيارة خاصة من محطة قطار مكة إلى فندقي؟", a: "نعم. أرسل موعد وصول القطار واسم فندقك وعدد الركاب والحقائب، وتقدم لك RideSaudi عرض سعر لسيارة خاصة مع سائق لمجموعتك وحدها." },
          { q: "هل توصلني السيارة من فندقي في مكة إلى محطة القطار؟", a: "نعم. أعطنا موعد المغادرة على تذكرتك واسم فندقك، ونحدد وقت الاستلام بهامش يكفي لتسجيل الخروج وزحام محيط الحرم." },
          { q: "ماذا لو تأخر وصول قطاري إلى مكة؟", a: "أرسل لنا موعد الوصول الجديد على واتساب، ونرد خلال 15 دقيقة من الثامنة صباحًا حتى منتصف الليل بتوقيت السعودية، ونعدل وقت الاستلام بحسب التوفر." },
          { q: "هل يوصلنا السائق إلى باب الفندق القريب من الحرم؟", a: "الدخول بالسيارات قرب الحرم منظم ويتغير بحسب الوقت والموسم، فيكون النزول في أقرب نقطة مسموحة في ذلك اليوم. اذكر اسم الفندق والحي ليخطط السائق طريقه." },
          { q: "هل سعر التوصيل من محطة مكة للشخص أم للسيارة؟", a: "للسيارة. عرض السعر يشمل السيارة كاملة المخصصة لمجموعتك، وعدد الركاب والحقائب يحدد هل تحتاج سيدان أم جمس يوكن أم هيونداي ستاريا." },
          { q: "هل تبيعون تذاكر قطار الحرمين؟", a: "لا. احجز تذاكر القطار عبر القنوات الرسمية لقطار الحرمين السريع، وترتب RideSaudi السيارة فقط بين المحطة وفندقك." },
        ],
      },
    },
  },
  {
    path: MADINAH_STATION,
    parent: UM,
    variant: "umrah",
    service: "umrah",
    related: [`${C}/madinah`, `${I}/makkah-to-madinah`, `${S}/airport-transfers/madinah-airport`, `${UM}/madinah-ziyarat`, `${I}/madinah-to-alula`, "fleet/gmc-yukon-with-driver"],
    updated: U,
    copy: {
      en: {
        nav: "Madinah Train Station Transfer",
        title: "Madinah Haramain Station to Hotel: Private Car",
        description: "Private car from the Haramain train station in Madinah to your hotel near the Prophet's Mosque, about 12 km and 20 minutes, or to the airport. Request a quote.",
        h1: "Madinah Haramain train station to your hotel by private car",
        eyebrow: "Madinah · Haramain High Speed Railway station, Knowledge Economic City",
        answer: "Madinah's Haramain station is in Knowledge Economic City, about 12.3 km by road from the Prophet's Mosque, around 20 minutes in usual traffic (Google Maps, November 2026). RideSaudi arranges a pre-booked private car with a driver from the station to your hotel, from your hotel to the station, or between the station and Madinah airport, about 11 minutes away.",
        summary: "Private car between Madinah's Haramain station, your hotel near the Prophet's Mosque and Madinah airport.",
        table: {
          h: "Madinah station at a glance",
          head: ["Item", "Detail", "Source"],
          rows: [
            ["Station location", "Knowledge Economic City, east of the central area", "Saudipedia"],
            ["Station to the Prophet's Mosque by road", "About 12.3 km, around 20 minutes in usual traffic", "Google Maps, 27 Nov 2026"],
            ["Station to Madinah airport (MED)", "About 10.8 km, around 11 minutes", "Google Maps, 27 Nov 2026"],
            ["Train from Makkah", "About 2 hours 45 minutes", "Saudipedia"],
            ["Vehicles you can request", "Sedan, GMC Yukon, Hyundai Staria (7 passengers)", "RideSaudi"],
          ],
        },
        sections: [
          {
            h: "The station is not in the central area",
            p: [
              "Trains from Makkah, Jeddah and King Abdullah Economic City arrive at Madinah station in Knowledge Economic City. Google Maps puts the Prophet's Mosque about 12.3 km away by road, around 20 minutes in usual traffic, and the hotels of the central area are around it. After a train journey with family and luggage, a car that is already booked means no queue and no bargaining at the kerb.",
            ],
          },
          {
            h: "From the station to your hotel near the Prophet's Mosque",
            p: [
              "Send the train's scheduled arrival time, your hotel, the number of passengers and the number of large bags. The driver meets you at the point agreed in the quotation. Streets around the Prophet's Mosque can be restricted around prayer times, so give the hotel name and the gate or entrance you use, and the drop-off is made as close as the traffic arrangements allow.",
              "If the train is late, send the new time on WhatsApp. We reply within 15 minutes between 8am and midnight, Saudi time.",
            ],
          },
          {
            h: "Station and Madinah airport",
            p: [
              "The station and Prince Mohammad bin Abdulaziz International Airport are close: about 10.8 km, around 11 minutes by road. Travellers who arrive by train and fly out of Madinah, or land at MED and continue by train, can book that short connection with a fixed pickup time. For flights, see also Madinah airport transfers.",
            ],
          },
          {
            h: "Which vehicle to request",
            p: [
              "A sedan suits one or two people with ordinary luggage. A GMC Yukon gives a family more room, and the Hyundai Staria takes up to seven passengers with ten or more bags, so a larger family or small group stays together. Count the suitcases as carefully as the people: after Umrah many travellers carry more than they arrived with.",
            ],
          },
          {
            h: "Ziyarat and onward journeys",
            p: [
              "Some travellers use the car for more than the station run: a stop at Quba Mosque on the way to the hotel, a Ziyarat morning before the departure train, or a road journey north to AlUla after the visit. Ask for it in the same enquiry and it is quoted together with the transfer.",
            ],
          },
        ],
        checklist: {
          h: "What to include in your enquiry",
          items: [
            "Train date and scheduled arrival or departure time",
            "Direction: station to hotel, hotel to station, or station and airport",
            "Hotel name and the gate or entrance you use",
            "Number of adults and children",
            "Number of large suitcases, Zamzam cartons, wheelchair or stroller",
            "Any stop on the way, such as Quba Mosque",
          ],
        },
        faqs: [
          { q: "How far is Madinah train station from the Prophet's Mosque?", a: "About 12.3 km by road, around 20 minutes in usual traffic, according to Google Maps (November 2026). The station is in Knowledge Economic City, outside the central area." },
          { q: "Can I book a private car from Madinah station to my hotel?", a: "Yes. Send your train's arrival time, your hotel, and the number of passengers and bags, and RideSaudi quotes a private car with a driver for your party only." },
          { q: "How far is Madinah train station from Madinah airport?", a: "About 10.8 km, around 11 minutes by road on Google Maps (November 2026), so a station to airport connection is short." },
          { q: "Can we stop at Quba Mosque between the station and the hotel?", a: "Yes, ask for it in the enquiry. The stop is added to the plan and the quotation, and the timing is agreed before you confirm." },
          { q: "When should I leave my Madinah hotel for the train?", a: "Work back from the departure time on your ticket: about 20 minutes of driving, plus check-out, prayer-time traffic near the Prophet's Mosque and loading the bags. We plan the pickup with you." },
          { q: "Is the Madinah station transfer priced per person or per car?", a: "Per car. The quotation covers the whole vehicle reserved for your party, and the number of people and bags decides which vehicle fits." },
          { q: "Can I go from Madinah station straight to AlUla?", a: "Yes. The road from Madinah to AlUla is about 338 km, around 3 hours 40 minutes before stops. Ask for it in the enquiry and it is quoted as one journey." },
        ],
      },
      ar: {
        nav: "توصيل محطة قطار المدينة",
        title: "من محطة قطار المدينة إلى الفندق بسيارة خاصة",
        description: "سيارة خاصة مع سائق من محطة قطار الحرمين في المدينة المنورة إلى فندقك قرب المسجد النبوي، نحو 12 كم و20 دقيقة، أو إلى المطار. اطلب عرض سعر.",
        h1: "من محطة قطار الحرمين في المدينة المنورة إلى فندقك بسيارة خاصة",
        eyebrow: "المدينة المنورة · محطة قطار الحرمين السريع، مدينة المعرفة الاقتصادية",
        answer: "تقع محطة قطار الحرمين في المدينة المنورة بمدينة المعرفة الاقتصادية، على بعد نحو 12.3 كم بالطريق من المسجد النبوي، أي قرابة 20 دقيقة في حركة السير المعتادة (خرائط جوجل، نوفمبر 2026). ترتب RideSaudi سيارة خاصة مع سائق محجوزة مسبقًا من المحطة إلى فندقك أو من فندقك إلى المحطة أو بين المحطة ومطار المدينة الذي يبعد نحو 11 دقيقة.",
        summary: "سيارة خاصة بين محطة قطار الحرمين في المدينة وفندقك قرب المسجد النبوي ومطار المدينة.",
        table: {
          h: "محطة المدينة باختصار",
          head: ["البند", "التفاصيل", "المصدر"],
          rows: [
            ["موقع المحطة", "مدينة المعرفة الاقتصادية، شرق المنطقة المركزية", "سعوديبيديا"],
            ["من المحطة إلى المسجد النبوي بالطريق", "نحو 12.3 كم، قرابة 20 دقيقة في حركة السير المعتادة", "خرائط جوجل، 27 نوفمبر 2026"],
            ["من المحطة إلى مطار المدينة", "نحو 10.8 كم، قرابة 11 دقيقة", "خرائط جوجل، 27 نوفمبر 2026"],
            ["القطار من مكة المكرمة", "نحو ساعتين و45 دقيقة", "سعوديبيديا"],
            ["السيارات المتاحة للطلب", "سيدان، جمس يوكن، هيونداي ستاريا (7 ركاب)", "RideSaudi"],
          ],
        },
        sections: [
          {
            h: "المحطة ليست في المنطقة المركزية",
            p: [
              "تصل القطارات القادمة من مكة وجدة ومدينة الملك عبدالله الاقتصادية إلى محطة المدينة في مدينة المعرفة الاقتصادية. وتقدّر خرائط جوجل المسافة منها إلى المسجد النبوي بنحو 12.3 كم بالطريق، أي قرابة 20 دقيقة في حركة السير المعتادة، وفنادق المنطقة المركزية حوله. وبعد رحلة القطار مع العائلة والحقائب، تعني السيارة المحجوزة مسبقًا أنه لا انتظار ولا مساومة عند الرصيف.",
            ],
          },
          {
            h: "من المحطة إلى فندقك قرب المسجد النبوي",
            p: [
              "أرسل موعد وصول القطار المجدول واسم فندقك وعدد الركاب وعدد الحقائب الكبيرة. يلتقيك السائق في النقطة المتفق عليها في عرض السعر. وقد تُقيَّد الشوارع حول المسجد النبوي في أوقات الصلاة، فاذكر اسم الفندق والباب أو المدخل الذي تستخدمه، ويكون النزول في أقرب نقطة تسمح بها ترتيبات المرور.",
              "إذا تأخر القطار فأرسل الموعد الجديد على واتساب، ونرد خلال 15 دقيقة من الثامنة صباحًا حتى منتصف الليل بتوقيت السعودية.",
            ],
          },
          {
            h: "المحطة ومطار المدينة",
            p: [
              "المحطة ومطار الأمير محمد بن عبدالعزيز الدولي متقاربان: نحو 10.8 كم، قرابة 11 دقيقة بالطريق. فمن يصل بالقطار ويغادر جوًا من المدينة، أو يهبط في المطار ويكمل بالقطار، يستطيع حجز هذا المشوار القصير بوقت استلام محدد. وللرحلات الجوية راجع أيضًا التوصيل من مطار المدينة.",
            ],
          },
          {
            h: "أي سيارة تطلب؟",
            p: [
              "تناسب السيدان شخصًا أو اثنين مع أمتعة عادية، وتمنح جمس يوكن العائلة مساحة أكبر، أما هيونداي ستاريا فتتسع لسبعة ركاب مع عشر حقائب أو أكثر، فتبقى العائلة الكبيرة أو المجموعة الصغيرة معًا. احسب الحقائب بدقة كما تحسب الأشخاص، فكثير من المعتمرين يعودون بأمتعة أكثر مما جاؤوا بها.",
            ],
          },
          {
            h: "الزيارات والرحلات التالية",
            p: [
              "يستخدم بعض المسافرين السيارة لأكثر من مشوار المحطة: التوقف عند مسجد قباء في الطريق إلى الفندق، أو جولة زيارات صباحية قبل قطار المغادرة، أو رحلة برية شمالًا إلى العلا بعد الزيارة. اطلب ذلك في الطلب نفسه فيُسعَّر مع التوصيل.",
            ],
          },
        ],
        checklist: {
          h: "ماذا تذكر في طلبك",
          items: [
            "تاريخ القطار وموعد الوصول أو المغادرة المجدول",
            "الاتجاه: من المحطة إلى الفندق أو من الفندق إلى المحطة أو بين المحطة والمطار",
            "اسم الفندق والباب أو المدخل الذي تستخدمه",
            "عدد البالغين والأطفال",
            "عدد الحقائب الكبيرة وكراتين زمزم والكرسي المتحرك أو عربة الأطفال",
            "أي توقف في الطريق مثل مسجد قباء",
          ],
        },
        faqs: [
          { q: "كم تبعد محطة قطار المدينة عن المسجد النبوي؟", a: "نحو 12.3 كم بالطريق، أي قرابة 20 دقيقة في حركة السير المعتادة بحسب خرائط جوجل (نوفمبر 2026). المحطة في مدينة المعرفة الاقتصادية خارج المنطقة المركزية." },
          { q: "هل أحجز سيارة خاصة من محطة المدينة إلى فندقي؟", a: "نعم. أرسل موعد وصول قطارك واسم فندقك وعدد الركاب والحقائب، وتقدم لك RideSaudi عرض سعر لسيارة خاصة مع سائق لمجموعتك وحدها." },
          { q: "كم تبعد محطة قطار المدينة عن مطار المدينة؟", a: "نحو 10.8 كم، قرابة 11 دقيقة بالطريق على خرائط جوجل (نوفمبر 2026)، فالمشوار بين المحطة والمطار قصير." },
          { q: "هل نتوقف عند مسجد قباء بين المحطة والفندق؟", a: "نعم، اطلب ذلك في الطلب، فيُضاف التوقف إلى الخطة وعرض السعر ويُتفق على التوقيت قبل أن تؤكد." },
          { q: "متى أغادر فندقي في المدينة لألحق بالقطار؟", a: "احسب رجوعًا من موعد المغادرة على تذكرتك: نحو 20 دقيقة قيادة، يضاف إليها تسجيل الخروج وزحام أوقات الصلاة قرب المسجد النبوي وتحميل الحقائب. ونخطط وقت الاستلام معك." },
          { q: "هل سعر التوصيل من محطة المدينة للشخص أم للسيارة؟", a: "للسيارة. يشمل عرض السعر السيارة كاملة المخصصة لمجموعتك، وعدد الأشخاص والحقائب يحدد السيارة المناسبة." },
          { q: "هل أذهب من محطة المدينة مباشرة إلى العلا؟", a: "نعم. الطريق من المدينة إلى العلا نحو 338 كم، قرابة 3 ساعات و40 دقيقة قبل التوقفات. اطلب ذلك في الطلب فيُسعَّر رحلة واحدة." },
        ],
      },
    },
  },
];

type L = Record<Locale, string>;
/** One linking sentence appended to the last paragraph of a section on an existing page (EN and AR). */
const addLinks: { path: string; section: number; text: L; related: string }[] = [
  {
    path: `${C}/makkah`, section: 0, related: MAKKAH_STATION,
    text: { en: "Arriving by train? A [Makkah train station transfer](services/umrah-transport/makkah-train-station-transfer) covers the 7.4 km from the Haramain station in al-Rusaifa to your hotel.", ar: "قادم بالقطار؟ يغطي [التوصيل من محطة قطار مكة](services/umrah-transport/makkah-train-station-transfer) مسافة 7.4 كم من محطة الحرمين في الرصيفة إلى فندقك." },
  },
  {
    path: `${C}/madinah`, section: 0, related: MADINAH_STATION,
    text: { en: "Arriving by train? A [Madinah train station transfer](services/umrah-transport/madinah-train-station-transfer) covers the 12 km from Knowledge Economic City to your hotel near the Prophet's Mosque.", ar: "قادم بالقطار؟ يغطي [التوصيل من محطة قطار المدينة](services/umrah-transport/madinah-train-station-transfer) مسافة 12 كم من مدينة المعرفة الاقتصادية إلى فندقك قرب المسجد النبوي." },
  },
  {
    path: `${I}/makkah-to-madinah`, section: 0, related: MADINAH_STATION,
    text: { en: "Taking the train instead? Book the last leg with a [Madinah train station transfer](services/umrah-transport/madinah-train-station-transfer).", ar: "ستسافر بالقطار؟ احجز المشوار الأخير عبر [التوصيل من محطة قطار المدينة](services/umrah-transport/madinah-train-station-transfer)." },
  },
  {
    path: `${I}/madinah-to-makkah`, section: 0, related: MAKKAH_STATION,
    text: { en: "Taking the train instead? Book the last leg with a [Makkah train station transfer](services/umrah-transport/makkah-train-station-transfer).", ar: "ستسافر بالقطار؟ احجز المشوار الأخير عبر [التوصيل من محطة قطار مكة](services/umrah-transport/makkah-train-station-transfer)." },
  },
  {
    path: `${S}/airport-transfers/madinah-airport`, section: 0, related: MADINAH_STATION,
    text: { en: "Continuing by train? The Haramain station is about 11 minutes from the airport: see [Madinah train station transfers](services/umrah-transport/madinah-train-station-transfer).", ar: "ستكمل بالقطار؟ محطة الحرمين على بعد نحو 11 دقيقة من المطار: راجع [التوصيل من محطة قطار المدينة](services/umrah-transport/madinah-train-station-transfer)." },
  },
];

export function applyStationPages(pages: ServicePage[]) {
  for (const a of addLinks) {
    const p = pages.find((x) => x.path === a.path);
    if (!p) throw new Error(`station-pages: unknown page ${a.path}`);
    for (const l of ["en", "ar"] as Locale[]) {
      const s = p.copy[l].sections[a.section];
      if (!s) throw new Error(`station-pages: no section ${a.section} on ${a.path}/${l}`);
      s.p = [...s.p.slice(0, -1), `${s.p[s.p.length - 1]} ${a.text[l]}`];
    }
    if (!p.related.includes(a.related)) p.related.push(a.related);
  }
  // The Umrah hub lists its children automatically; the two station pages are its children via `parent`.
}
