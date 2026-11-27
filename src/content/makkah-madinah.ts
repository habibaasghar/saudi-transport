import type { Locale } from "@/i18n/routing";
import type { Copy, ServicePage } from "./types";

/**
 * Makkah & Madinah growth pass (2026-11-23). Brief: docs/seo/makkah-madinah-*.md.
 *
 * 1. The Makkah and Madinah city hubs become the primary pages for "Makkah private transfer" and
 *    "Madinah private transfer" (and the Arabic "سيارة خاصة مع سائق في مكة / المدينة"), with vehicle,
 *    arrival, route and quotation sections and inline links to every route page that starts or ends there.
 * 2. New reverse route: Madinah to Riyadh (both competitors have it; the forward page only said "either direction").
 * 3. Patches: Madinah Airport and Jeddah Airport to Makkah gain planning sections with inline links; city hubs are
 *    linked from the route and airport pages that lacked them; Arabic "نقل خاص" removed from Umrah titles/H1s
 *    (Phase 1 research: it reads as a licence-plate term; Saudi searchers use "توصيل" and "سيارة خاصة").
 *
 * Fact sources (no new claims beyond these):
 *  - Google Maps, checked 2026-11-23 (night, usual traffic, no stops):
 *    Prince Mohammad bin Abdulaziz International Airport (MED) to the Prophet's Mosque: 20.7 km, about 25 to 26 min.
 *    Prophet's Mosque to King Abdullah Financial District, Riyadh: 823 km, 7 h 50 min via Route 60 and Route 65
 *    (alternative 865 km via Route 60). Prophet's Mosque to King Khalid International Airport (RUH): about 7 h 45 min.
 *  - Already published and sourced elsewhere in src/content (enrich-routes, priority-routes*, enrich-batch5):
 *    JED to the Haram area 98 km / about 1 h 05 min; central Jeddah to the Haram 88 km; Makkah Haramain station in
 *    al-Rusaifa about 7 km by road from the Masjid al-Haram; Madinah station in Knowledge Economic City about 12 km by
 *    road from the Prophet's Mosque (Google Maps road distances, 2026-11-27); Makkah to Madinah 436 km / about 4 h 20 min; Haram to Taif 89 km / 1 h 19 min;
 *    Haram to KAFD 871 km / about 9 h; Prophet's Mosque to JED 399 km / 3 h 56 min; Jeddah to the Prophet's Mosque
 *    404 km; AlUla to the Prophet's Mosque 337 km; Riyadh to Buraydah 350 km.
 *  - Vehicles (src/content/fleet.ts, owner-confirmed 2026-11-21): sedans (Toyota Camry, Hyundai Sonata, Ford Taurus),
 *    GMC Yukon, Chevrolet Tahoe and Suburban, Toyota Prado, Hyundai Staria (7 passengers, 10+ bags), all through
 *    transport partners and subject to availability. No other capacity figures. No vans other than the Staria.
 *  - Policies (owner-confirmed): cancellation at least 24 hours before pickup; payment link, STC Pay or cash.
 */
const U = "2026-11-23";
const S = "services";
const C = `${S}/city-transport`;
const I = `${S}/intercity-transfers`;
const A = `${S}/airport-transfers`;
const UM = `${S}/umrah-transport`;

/* ─────────────────────────── Makkah hub ─────────────────────────── */

const makkahHub: Record<Locale, Copy> = {
  en: {
    nav: "Makkah Private Transfers",
    title: "Makkah Private Transfer: Sedan, GMC or Staria",
    description: "Private transfers in and from Makkah: Jeddah airport and Haramain station pickups, hotel moves, ziyarat and trips to Madinah, by sedan, GMC Yukon or Staria.",
    h1: "Makkah private transfers by sedan, GMC Yukon or Hyundai Staria",
    eyebrow: "City Transport · Makkah",
    answer:
      "RideSaudi arranges private transfers in and from Makkah on request: Jeddah airport and Haramain station pickups, hotel-to-hotel moves, ziyarat and onward journeys to Madinah, Jeddah, Taif or Riyadh. You ask for a sedan, a GMC Yukon or another full-size SUV, or a Hyundai Staria; the car carries your party only, and each journey is quoted individually before you commit.",
    summary: "Private sedan, SUV and Staria transfers in and from Makkah: airport, station, hotels and intercity.",
    sections: [
      {
        h: "What you can request in Makkah",
        p: ["Most Makkah enquiries are one of the journeys below. Each has its own page with the route detail, so this page helps you find the right one and explains what is common to all of them: the vehicle choice, the Haram-area pickup and how the quotation works."],
        list: [
          "Arriving by air: [Jeddah Airport to Makkah](services/umrah-transport/jeddah-airport-to-makkah), about 98 km on Route 40",
          "Coming from a Jeddah hotel or home: [a private car from Jeddah to Makkah](services/intercity-transfers/jeddah-to-makkah)",
          "Arriving by Haramain train at the Makkah station in al-Rusaifa, about 7 km by road from the Masjid al-Haram",
          "Moving between hotels inside Makkah, for example from Aziziyah to the Haram area",
          "Visiting historic sites such as Jabal al-Nour, Jabal Thawr and Arafat with [Makkah ziyarat transport](services/umrah-transport/makkah-ziyarat)",
          "Leaving for Madinah: [Makkah to Madinah by private car](services/intercity-transfers/makkah-to-madinah), about 436 km",
          "Flying home: [Makkah to Jeddah Airport](services/intercity-transfers/makkah-to-jeddah), planned back from your flight time",
          "Going up the mountain road: [Makkah to Taif](services/intercity-transfers/makkah-to-taif), about 89 km by the Al Hada road",
          "Driving home to the capital: [Makkah to Riyadh](services/intercity-transfers/makkah-to-riyadh), a full day of about 871 km",
        ],
      },
      {
        h: "Sedan, SUV or GMC: choosing the vehicle",
        p: [
          "Request a vehicle category, not a fixed car. Transport partners supply the vehicle with a driver, and the quotation names what is available for your date. Give the number of adults and children and count every suitcase and cabin bag, because luggage decides the vehicle on Umrah trips more often than seats do.",
          "Compare the classes on the [vehicle categories page](fleet) before you ask.",
        ],
        list: [
          "Sedan (Toyota Camry, Hyundai Sonata or Ford Taurus class): one or two travellers with light luggage, short hotel and station transfers",
          "Full-size SUV (GMC Yukon, Chevrolet Tahoe or Suburban): families who want space and comfort, and the long Makkah to Madinah road",
          "Hyundai Staria: up to 7 passengers with 10 or more bags, the usual choice for a family arriving from the airport",
          "More people than one vehicle holds: two vehicles travelling together, arranged in the same enquiry",
        ],
      },
      {
        h: "Arriving at Jeddah airport or the Haramain station",
        p: [
          "From King Abdulaziz International Airport (JED) it is about 98 km to the Haram area, roughly 1 hour 5 minutes without traffic. Send your flight number and terminal so the pickup follows the real landing time; the [Jeddah airport transfers page](services/airport-transfers/jeddah-airport) explains terminals and meeting points.",
          "The Haramain high-speed train stops at the Makkah station in al-Rusaifa, about 7 km by road from the Masjid al-Haram, so the last stretch to your hotel still needs a car. Send the train number and arrival time, and the number of bags you are carrying off the train.",
        ],
      },
      {
        h: "Getting to and from the Haram area",
        p: ["Hotels around Abraj Al Bait, Jabal Omar, Ajyad and Aziziyah sit close to the Masjid al-Haram, and vehicle access near the Haram is restricted at busy times. Pickups are therefore often arranged at a nearby point that is open to cars rather than at the hotel door; confirm the meeting point with us before you travel, and ask your hotel which entrance cars use."],
      },
      {
        h: "Hotel-to-hotel moves with luggage",
        p: ["Many pilgrims split a stay between a hotel near the Haram and a quieter one further out, or move hotels before leaving for Madinah. Give both hotel names, the check-out time and the luggage count, and say whether anyone needs help with bags. For tour groups and agencies moving guests between properties, see [hotel transportation](services/special-transportation/hotel-transportation)."],
      },
      {
        h: "Families, elderly pilgrims and groups",
        p: ["Tell us who is travelling: young children, an elderly parent, someone who uses a wheelchair or walks slowly. The plan then allows for slower boarding, closer drop-off points where access allows and more breaks on long roads. Families can read [family Umrah transport](services/umrah-transport/family-umrah-transport); larger parties and agencies can read [group Umrah transport](services/umrah-transport/group-umrah-transport)."],
      },
      {
        h: "Peak seasons",
        p: ["Ramadan, the last ten nights, the Hajj season and school holidays bring heavy traffic and tighter access. Book early, allow extra time between check-out and a flight or train, and tell us your dates so the quotation reflects the season."],
      },
      {
        h: "Who can enter",
        p: ["Only Muslims may enter Makkah's central area, and non-Muslim travellers are directed away from it by the road system. Hajj-period movement is also controlled by permits issued by the authorities, which RideSaudi does not issue; check the official guidance for your dates. RideSaudi provides transport only and is not affiliated with any religious or government authority."],
      },
      {
        h: "How the quotation works",
        p: ["Send the enquiry form or a WhatsApp message with the details listed below. You receive a quotation that names the vehicle category, the pickup point and the price for your journey. Nothing is booked until you confirm it. You can cancel at least 24 hours before pickup, and payment is by payment link, STC Pay or cash."],
      },
    ],
    table: {
      h: "Makkah journeys at a glance",
      head: ["Journey", "Approximate road distance", "Driving time before stops"],
      rows: [
        ["Jeddah airport (JED) to the Haram area", "About 98 km", "About 1 h 5 min"],
        ["Central Jeddah to the Haram area", "About 88 km", "About 1 h"],
        ["Makkah Haramain station to the Haram", "About 3 km", "A short transfer, longer at prayer times"],
        ["Makkah to Madinah", "About 436 km", "About 4 h 20 min"],
        ["Makkah to Taif (Al Hada road)", "About 89 km", "About 1 h 20 min"],
        ["Makkah to Riyadh", "About 871 km", "About 9 h"],
      ],
    },
    checklist: {
      h: "Include this in your Makkah enquiry",
      items: [
        "Pickup: flight number, train time or hotel name",
        "Destination: hotel name, or the city for an onward journey",
        "Date and pickup time, and whether you need a return",
        "Passengers, including children and elderly travellers",
        "Number of large suitcases and cabin bags",
        "Vehicle preference: sedan, GMC Yukon or other SUV, or Hyundai Staria",
      ],
    },
    faqs: [
      { q: "What private transfer options can I request in Makkah?", a: "Airport and Haramain station pickups, hotel-to-hotel moves, ziyarat, and journeys from Makkah to Madinah, Jeddah, Taif or Riyadh. Each is a private car for your party only, quoted before you confirm." },
      { q: "Can I request a GMC Yukon or another SUV in Makkah?", a: "Yes. Ask for a GMC Yukon or a full-size SUV such as a Chevrolet Tahoe or Suburban. The vehicle available for your date is named in the quotation." },
      { q: "Can I book a sedan for a private journey in Makkah?", a: "Yes. A sedan suits one or two travellers with light luggage, for example a station transfer or a short hotel move." },
      { q: "Which vehicle suits a family with a lot of luggage in Makkah?", a: "Usually the Hyundai Staria, which takes up to 7 passengers and 10 or more bags. For a bigger family, two vehicles can travel together." },
      { q: "Do you collect pilgrims from the Makkah Haramain train station?", a: "You can request it with your train number and arrival time. The station is in al-Rusaifa, about 7 km by road from the Masjid al-Haram." },
      { q: "What information is needed for a Makkah transfer quotation?", a: "Pickup and destination, date and time, passengers, luggage and your vehicle preference. Add the flight or train number for arrivals." },
      { q: "How do I confirm vehicle availability for Makkah?", a: "Send the enquiry; the quotation states the vehicle category available for your date. The booking is only made once you confirm that quotation." },
      { q: "Can the car wait at my hotel door near the Haram?", a: "Not always. Access near the Haram is controlled, so the pickup point is agreed in advance and confirmed in the quotation." },
      { q: "Can you help with Hajj permits?", a: "No. Permits and Hajj movement rules are set and issued by the authorities; we arrange transport only once you hold what your journey requires." },
    ],
  },
  ar: {
    nav: "التوصيل الخاص في مكة المكرمة",
    title: "سيارة خاصة مع سائق في مكة: سيدان وجمس وستاريا",
    description: "توصيل خاص في مكة المكرمة ومنها: استقبال من مطار جدة ومحطة قطار الحرمين، والتنقل بين الفنادق والزيارات والسفر إلى المدينة بسيارة سيدان أو جمس يوكن أو ستاريا.",
    h1: "توصيل خاص في مكة المكرمة بسيارة سيدان أو جمس يوكن أو ستاريا",
    eyebrow: "النقل داخل المدن · مكة المكرمة",
    answer:
      "ترتّب RideSaudi عند الطلب التوصيل الخاص داخل مكة المكرمة ومنها: الاستقبال من مطار جدة ومحطة قطار الحرمين، والانتقال بين الفنادق، والزيارات، والسفر إلى المدينة المنورة وجدة والطائف والرياض. تطلب سيارة سيدان أو جمس يوكن أو دفعًا رباعيًا كبيرة أو هيونداي ستاريا، والسيارة لعائلتك أو مجموعتك وحدها، وتُسعَّر كل رحلة قبل أن تلتزم.",
    summary: "توصيل خاص بسيارة سيدان أو دفع رباعي أو ستاريا داخل مكة ومنها: المطار والمحطة والفنادق والسفر بين المدن.",
    sections: [
      {
        h: "ماذا يمكنك أن تطلب في مكة المكرمة",
        p: ["أغلب طلبات مكة واحدة من الرحلات التالية، ولكل منها صفحتها بتفاصيل الطريق. هذه الصفحة تدلك على الصفحة المناسبة وتشرح ما يجمعها كلها: اختيار السيارة، ونقطة الاستلام قرب الحرم، وطريقة عرض السعر."],
        list: [
          "القادمون جوًا: [التوصيل من مطار جدة إلى مكة](services/umrah-transport/jeddah-airport-to-makkah)، نحو 98 كم على الطريق 40",
          "القادمون من فندق أو منزل في جدة: [سيارة خاصة من جدة إلى مكة](services/intercity-transfers/jeddah-to-makkah)",
          "القادمون بقطار الحرمين إلى محطة مكة في الرصيفة، على بُعد نحو 7 كم بالطريق من المسجد الحرام",
          "الانتقال بين الفنادق داخل مكة، مثل الانتقال من العزيزية إلى محيط الحرم",
          "زيارة المعالم مثل جبل النور وجبل ثور وعرفات عبر [نقل زيارات مكة](services/umrah-transport/makkah-ziyarat)",
          "السفر إلى المدينة: [من مكة إلى المدينة بسيارة خاصة](services/intercity-transfers/makkah-to-madinah)، نحو 436 كم",
          "العودة إلى بلدك: [من مكة إلى مطار جدة](services/intercity-transfers/makkah-to-jeddah)، بتوقيت يُحسب من موعد رحلتك",
          "الصعود إلى الطائف: [من مكة إلى الطائف](services/intercity-transfers/makkah-to-taif)، نحو 89 كم عبر طريق الهدا",
          "العودة إلى العاصمة: [من مكة إلى الرياض](services/intercity-transfers/makkah-to-riyadh)، يوم كامل لنحو 871 كم",
        ],
      },
      {
        h: "سيدان أم دفع رباعي أم جمس: اختيار السيارة",
        p: [
          "اطلب فئة السيارة لا سيارة بعينها. فشركاء النقل يوفّرون السيارة مع السائق، ويذكر عرض السعر المتاح لتاريخك. اذكر عدد الكبار والأطفال واحسب كل حقيبة كبيرة وصغيرة، لأن الحقائب في رحلات العمرة تحدد السيارة أكثر مما تحددها المقاعد.",
          "قارن الفئات في [صفحة فئات السيارات](fleet) قبل أن ترسل طلبك.",
        ],
        list: [
          "سيدان (من فئة تويوتا كامري أو هيونداي سوناتا أو فورد توروس): مسافر أو اثنان بحقائب خفيفة، وتنقلات قصيرة بين الفندق والمحطة",
          "دفع رباعي كبيرة (جمس يوكن أو شفروليه تاهو أو سوبربان): للعائلات التي تريد مساحة وراحة، ولطريق مكة إلى المدينة الطويل",
          "هيونداي ستاريا: حتى 7 ركاب و10 حقائب أو أكثر، وهي الخيار المعتاد لعائلة قادمة من المطار",
          "عدد أكبر مما تتسع له سيارة واحدة: سيارتان تسيران معًا، تُرتَّبان في الطلب نفسه",
        ],
      },
      {
        h: "الوصول إلى مطار جدة أو محطة قطار الحرمين",
        p: [
          "من مطار الملك عبدالعزيز الدولي (JED) إلى محيط الحرم نحو 98 كم، أي ساعة وخمس دقائق تقريبًا دون زحام. أرسل رقم الرحلة والصالة ليتبع الاستقبال موعد الهبوط الفعلي؛ وتشرح [صفحة التوصيل من مطار جدة](services/airport-transfers/jeddah-airport) الصالات ونقاط اللقاء.",
          "يتوقف قطار الحرمين السريع في محطة مكة بحي الرصيفة، على بُعد نحو 7 كم بالطريق من المسجد الحرام، لذا تحتاج المسافة الأخيرة إلى فندقك سيارة. أرسل رقم القطار وموعد وصوله وعدد الحقائب التي تنزل بها.",
        ],
      },
      {
        h: "الوصول من منطقة الحرم وإليها",
        p: ["تقع الفنادق حول أبراج البيت وجبل عمر وأجياد والعزيزية قرب المسجد الحرام، ويُقيَّد وصول المركبات قرب الحرم في أوقات الزحام. لذلك يُرتَّب الاستلام غالبًا عند نقطة قريبة مفتوحة للسيارات لا عند باب الفندق؛ فأكّد معنا نقطة اللقاء قبل سفرك، واسأل فندقك عن المدخل الذي تستخدمه السيارات."],
      },
      {
        h: "الانتقال بين الفنادق مع الحقائب",
        p: ["يقسم كثير من المعتمرين إقامتهم بين فندق قرب الحرم وآخر أهدأ أبعد منه، أو يغيّرون الفندق قبل السفر إلى المدينة. اذكر اسمي الفندقين وموعد الخروج وعدد الحقائب، وهل يحتاج أحد إلى مساعدة في حملها. ولمجموعات الرحلات والوكالات التي تنقل نزلاءها بين الفنادق راجع [نقل نزلاء الفنادق](services/special-transportation/hotel-transportation)."],
      },
      {
        h: "العائلات وكبار السن والمجموعات",
        p: ["أخبرنا بمن يسافر: أطفال صغار، أو والد كبير في السن، أو من يستخدم كرسيًا متحركًا أو يمشي ببطء. فتراعي الخطة صعودًا أبطأ، ونقاط نزول أقرب حيث يسمح الوصول، واستراحات أكثر في الطرق الطويلة. تجد العائلات التفاصيل في [نقل العائلات المعتمرة](services/umrah-transport/family-umrah-transport)، والمجموعات والوكالات في [نقل مجموعات المعتمرين](services/umrah-transport/group-umrah-transport)."],
      },
      {
        h: "مواسم الذروة",
        p: ["يشهد رمضان والعشر الأواخر وموسم الحج والإجازات المدرسية زحامًا شديدًا وتقييدًا أكبر للوصول. احجز مبكرًا واترك وقتًا إضافيًا بين الخروج من الفندق والرحلة الجوية أو القطار، وأخبرنا بتواريخك ليراعي عرض السعر الموسم."],
      },
      {
        h: "من يمكنه الدخول",
        p: ["لا يدخل المنطقة المركزية في مكة المكرمة إلا المسلمون، وتوجّه شبكة الطرق غير المسلمين بعيدًا عنها. كما تُنظَّم الحركة في موسم الحج بتصاريح تصدرها الجهات المختصة ولا تصدرها RideSaudi؛ فراجع الإرشادات الرسمية لتواريخك. وتقدم RideSaudi النقل فقط، وهي غير تابعة لأي جهة دينية أو حكومية."],
      },
      {
        h: "كيف يصلك عرض السعر",
        p: ["أرسل نموذج الطلب أو رسالة واتساب بالتفاصيل المذكورة أدناه، فيصلك عرض سعر يذكر فئة السيارة ونقطة الاستلام وسعر رحلتك. لا يُحجز شيء قبل أن تؤكد. ويمكنك الإلغاء قبل موعد الاستلام بـ24 ساعة على الأقل، والدفع برابط دفع أو STC Pay أو نقدًا."],
      },
    ],
    table: {
      h: "رحلات مكة المكرمة في لمحة",
      head: ["الرحلة", "المسافة البرية التقريبية", "مدة القيادة دون توقف"],
      rows: [
        ["مطار جدة (JED) إلى محيط الحرم", "نحو 98 كم", "نحو ساعة و5 دقائق"],
        ["وسط جدة إلى محيط الحرم", "نحو 88 كم", "نحو ساعة"],
        ["محطة قطار الحرمين في مكة إلى الحرم", "نحو 7 كم بالطريق", "مسافة قصيرة تطول في أوقات الصلاة"],
        ["مكة إلى المدينة المنورة", "نحو 436 كم", "نحو 4 ساعات و20 دقيقة"],
        ["مكة إلى الطائف (طريق الهدا)", "نحو 89 كم", "نحو ساعة و20 دقيقة"],
        ["مكة إلى الرياض", "نحو 871 كم", "نحو 9 ساعات"],
      ],
    },
    checklist: {
      h: "ما الذي تضيفه إلى طلب مكة",
      items: [
        "الاستلام: رقم الرحلة الجوية أو موعد القطار أو اسم الفندق",
        "الوجهة: اسم الفندق أو المدينة إن كانت رحلة لاحقة",
        "التاريخ ووقت الاستلام، وهل تحتاج رحلة عودة",
        "عدد الركاب ومنهم الأطفال وكبار السن",
        "عدد الحقائب الكبيرة والصغيرة",
        "السيارة المفضلة: سيدان أو جمس يوكن أو دفع رباعي أخرى أو هيونداي ستاريا",
      ],
    },
    faqs: [
      { q: "ما خيارات التوصيل الخاص التي يمكنني طلبها في مكة المكرمة؟", a: "الاستقبال من المطار ومحطة قطار الحرمين، والانتقال بين الفنادق، والزيارات، والسفر من مكة إلى المدينة وجدة والطائف والرياض. وكلها سيارة خاصة لمجموعتك وحدها، تُسعَّر قبل أن تؤكد." },
      { q: "هل يمكنني طلب جمس يوكن أو سيارة دفع رباعي في مكة؟", a: "نعم. اطلب جمس يوكن أو دفعًا رباعيًا كبيرة مثل شفروليه تاهو أو سوبربان، ويذكر عرض السعر السيارة المتاحة لتاريخك." },
      { q: "هل يمكنني حجز سيارة سيدان لمشوار خاص في مكة؟", a: "نعم. تناسب السيدان مسافرًا أو اثنين بحقائب خفيفة، مثل التوصيل من المحطة أو الانتقال القصير بين الفنادق." },
      { q: "أي سيارة تناسب عائلة معها حقائب كثيرة في مكة؟", a: "غالبًا هيونداي ستاريا، وتتسع حتى 7 ركاب و10 حقائب أو أكثر. وللعائلة الأكبر يمكن أن تسير سيارتان معًا." },
      { q: "هل تستقبلون المعتمرين من محطة قطار الحرمين في مكة؟", a: "يمكنك طلب ذلك مع رقم القطار وموعد وصوله. وتقع المحطة في الرصيفة على بُعد نحو 7 كم بالطريق من المسجد الحرام." },
      { q: "ما المعلومات المطلوبة لعرض سعر توصيل في مكة؟", a: "نقطة الاستلام والوجهة، والتاريخ والوقت، وعدد الركاب والحقائب، والسيارة المفضلة. وأضف رقم الرحلة أو القطار للقادمين." },
      { q: "كيف أتأكد من توفر السيارة في مكة؟", a: "أرسل طلبك، فيذكر عرض السعر فئة السيارة المتاحة لتاريخك. ولا يتم الحجز إلا بعد أن تؤكد ذلك العرض." },
      { q: "هل يمكن للسيارة الانتظار عند باب فندقي قرب الحرم؟", a: "ليس دائمًا. فالوصول قرب الحرم منظّم، لذا يُتفق على نقطة الاستلام مسبقًا وتُؤكَّد في عرض السعر." },
      { q: "هل تساعدون في تصاريح الحج؟", a: "لا. التصاريح وقواعد الحركة في الحج تضعها الجهات المختصة وتصدرها؛ ونحن نرتب النقل بعد أن تحصل على ما تتطلبه رحلتك." },
    ],
  },
};

/* ─────────────────────────── Madinah hub ─────────────────────────── */

const madinahHub: Record<Locale, Copy> = {
  en: {
    nav: "Madinah Private Transfers",
    title: "Madinah Private Transfer: Airport & Ziyarat",
    description: "Private transfers in and from Madinah: MED airport and Haramain station pickups, hotels near the Prophet's Mosque, ziyarat, and trips to Makkah, Jeddah or Riyadh.",
    h1: "Madinah private transfers from the airport, the station and your hotel",
    eyebrow: "City Transport · Madinah",
    answer:
      "RideSaudi arranges private transfers in and from Madinah on request: pickups at Prince Mohammad bin Abdulaziz Airport (MED) and the Haramain station, hotel transfers around the Prophet's Mosque, ziyarat to Quba, Qiblatain and Uhud, and onward journeys to Makkah, Jeddah, AlUla or Riyadh. You ask for a sedan, a GMC Yukon or another SUV, or a Hyundai Staria; each journey is quoted before you commit.",
    summary: "Private sedan, SUV and Staria transfers in and from Madinah: airport, station, hotels, ziyarat and intercity.",
    sections: [
      {
        h: "Where Madinah journeys start and end",
        p: ["Almost every visitor's plan in Madinah uses the same few points: the airport or the station on arrival, a hotel in the Markaziyah around the Prophet's Mosque, a morning of ziyarat, and a long road out when the visit ends. The pages below cover each journey in detail."],
        list: [
          "Arriving by air: [Madinah airport transfers](services/airport-transfers/madinah-airport), about 21 km from MED to the Prophet's Mosque area",
          "Arriving by Haramain train at the Madinah station in Knowledge Economic City, about 12 km by road from the Prophet's Mosque",
          "Visiting Quba Mosque, Masjid al-Qiblatain and Uhud with [Madinah ziyarat transport](services/umrah-transport/madinah-ziyarat)",
          "Leaving for Umrah, with the Miqat stop at Dhul Hulaifah: [Madinah to Makkah by private car](services/intercity-transfers/madinah-to-makkah)",
          "Flying home from Jeddah: [Madinah to Jeddah Airport](services/intercity-transfers/madinah-to-jeddah), about 399 km",
          "Coming from Jeddah instead: [Jeddah to Madinah](services/intercity-transfers/jeddah-to-madinah), from a hotel or the airport",
          "Heading to the heritage sites: [Madinah to AlUla](services/intercity-transfers/madinah-to-alula), about 337 km",
          "Driving home to the capital: [Madinah to Riyadh](services/intercity-transfers/madinah-to-riyadh), about 823 km",
        ],
      },
      {
        h: "Which vehicle to ask for in Madinah",
        p: [
          "Transport partners supply the vehicle with a driver, so you request a category and the quotation names what is free for your date. Short airport and ziyarat runs work in any class; the long roads to Makkah, Jeddah or Riyadh are where space and luggage room matter most. Compare classes on the [vehicle categories page](fleet).",
        ],
        list: [
          "Sedan (Toyota Camry, Hyundai Sonata or Ford Taurus class): a couple or a small party with light bags",
          "Full-size SUV (GMC Yukon, Chevrolet Tahoe or Suburban): families who want comfort on a four-hour road",
          "Hyundai Staria: up to 7 passengers with 10 or more bags",
          "A larger party: two vehicles that travel together, in one enquiry",
        ],
      },
      {
        h: "Airport and station arrivals",
        p: [
          "Google Maps measures about 20.7 km from MED to the Prophet's Mosque area, around 25 minutes in light traffic; daytime and prayer-time traffic near the centre makes it longer. Send the flight number so the pickup follows the actual landing.",
          "The Haramain station is in Knowledge Economic City, about 12 km by road from the Prophet's Mosque. Trains from Makkah and Jeddah arrive with many passengers at once, so give the train number and say how many bags you are carrying.",
        ],
      },
      {
        h: "Staying near the Prophet's Mosque",
        p: ["Most visitors stay in the Markaziyah area around the Prophet's Mosque, where vehicle access is limited around prayer times and busy periods. Pickups are usually agreed at an accessible nearby point; tell us your hotel name and we will confirm the practical meeting place. Plan departures around prayer times and say when you must be back."],
      },
      {
        h: "Ziyarat in one booking",
        p: ["Common visits include Quba Mosque, Masjid al-Qiblatain, the Uhud area and the date markets. A short circuit is easy to combine in one booking if you list the stops in order and how long you want at each. Some visitors also add ziyarat on the morning they leave for Makkah or Jeddah; say so and the departure is planned after it."],
      },
      {
        h: "Families, elders and groups",
        p: ["A visit to Madinah often includes grandparents and young children. Tell us who needs extra time getting in and out, whether you need child seats, and how many bags travel with you. For families on a two-city trip see [family Umrah transport](services/umrah-transport/family-umrah-transport); for agencies and larger parties see [group Umrah transport](services/umrah-transport/group-umrah-transport)."],
      },
      {
        h: "How the quotation works",
        p: ["Send the form or a WhatsApp message with the details below. The quotation names the vehicle category, the pickup point and the price, and nothing is booked until you confirm. You can cancel at least 24 hours before pickup; payment is by payment link, STC Pay or cash."],
      },
    ],
    table: {
      h: "Madinah journeys at a glance",
      head: ["Journey", "Approximate road distance", "Driving time before stops"],
      rows: [
        ["Madinah airport (MED) to the Prophet's Mosque area", "About 21 km", "About 25 min in light traffic"],
        ["Madinah Haramain station to the Prophet's Mosque", "About 7 km", "A short transfer, longer at prayer times"],
        ["Madinah to Makkah", "About 436 km", "About 4 h 20 min"],
        ["Madinah to Jeddah airport (JED)", "About 399 km", "About 4 h"],
        ["Madinah to AlUla", "About 337 km", "About 3 h 50 min"],
        ["Madinah to Riyadh", "About 823 km", "About 7 h 50 min"],
      ],
    },
    checklist: {
      h: "Include this in your Madinah enquiry",
      items: [
        "Pickup: flight number, train time or hotel name",
        "Destination: hotel name, ziyarat stops, or the city for an onward journey",
        "Date and pickup time, and any prayer you want to arrive before",
        "Passengers, including children and elderly travellers",
        "Number of large suitcases and cabin bags",
        "Vehicle preference: sedan, GMC Yukon or other SUV, or Hyundai Staria",
      ],
    },
    faqs: [
      { q: "What private transfer options can I request in Madinah?", a: "Airport and Haramain station pickups, hotel transfers around the Prophet's Mosque, ziyarat, and journeys to Makkah, Jeddah, AlUla or Riyadh, each in a private car for your party only." },
      { q: "Can I request a GMC Yukon or an SUV in Madinah?", a: "Yes. Ask for a GMC Yukon or another full-size SUV; the vehicle available for your date is named in the quotation." },
      { q: "Can I request a sedan for a private journey in Madinah?", a: "Yes. A sedan suits a couple or a small party with light luggage, such as an airport run or a ziyarat morning." },
      { q: "How far is Madinah airport from the Prophet's Mosque?", a: "About 20.7 km by road, around 25 minutes in light traffic on Google Maps. Daytime traffic near the centre makes it longer." },
      { q: "Can I arrange a private transfer from Madinah to Makkah with the Miqat stop?", a: "Yes. The road passes the Miqat at Dhul Hulaifah (Abyar Ali), and the stop is planned into the Madinah to Makkah journey." },
      { q: "What information is needed for a Madinah transfer quotation?", a: "Pickup and destination, date and time, passengers, luggage and vehicle preference, plus the flight or train number for arrivals." },
      { q: "How do I confirm vehicle availability in Madinah?", a: "Send the enquiry and the quotation states the vehicle category free for your date. It is only booked once you confirm." },
      { q: "Can I plan a ziyarat tour in Madinah in one booking?", a: "Yes. List the places in the order you want and the time at each. The quotation covers the whole circuit." },
      { q: "Do you meet arrivals at the Madinah train station?", a: "You can request it with your train time. The station is about 12 km by road from the Prophet's Mosque, and availability is confirmed in the quotation." },
    ],
  },
  ar: {
    nav: "التوصيل الخاص في المدينة المنورة",
    title: "سيارة خاصة مع سائق في المدينة المنورة والمطار",
    description: "توصيل خاص في المدينة المنورة ومنها: الاستقبال من المطار ومحطة قطار الحرمين، وفنادق المسجد النبوي، والزيارات، والسفر إلى مكة وجدة والرياض. اطلب عرض سعر.",
    h1: "توصيل خاص في المدينة المنورة من المطار والمحطة والفندق",
    eyebrow: "النقل داخل المدن · المدينة المنورة",
    answer:
      "ترتّب RideSaudi عند الطلب التوصيل الخاص في المدينة المنورة ومنها: الاستقبال من مطار الأمير محمد بن عبدالعزيز (MED) ومحطة قطار الحرمين، والتنقل بين الفنادق حول المسجد النبوي، وزيارة قباء والقبلتين وأحد، والسفر إلى مكة وجدة والعلا والرياض. تطلب سيدان أو جمس يوكن أو دفعًا رباعيًا أخرى أو هيونداي ستاريا، وتُسعَّر كل رحلة قبل أن تلتزم.",
    summary: "توصيل خاص بسيارة سيدان أو دفع رباعي أو ستاريا في المدينة ومنها: المطار والمحطة والفنادق والزيارات والسفر بين المدن.",
    sections: [
      {
        h: "من أين تبدأ رحلات المدينة وإلى أين تنتهي",
        p: ["تدور خطة أغلب الزوار في المدينة المنورة حول نقاط قليلة: المطار أو المحطة عند الوصول، وفندق في المركزية حول المسجد النبوي، وصباح للزيارات، وطريق طويل حين تنتهي الزيارة. وتشرح الصفحات التالية كل رحلة بالتفصيل."],
        list: [
          "القادمون جوًا: [التوصيل من مطار المدينة المنورة](services/airport-transfers/madinah-airport)، نحو 21 كم من المطار إلى محيط المسجد النبوي",
          "القادمون بقطار الحرمين إلى محطة المدينة في مدينة المعرفة الاقتصادية، على بُعد نحو 12 كم بالطريق من المسجد النبوي",
          "زيارة مسجد قباء ومسجد القبلتين وأحد عبر [نقل زيارات المدينة المنورة](services/umrah-transport/madinah-ziyarat)",
          "السفر للعمرة مع الوقوف بميقات ذي الحليفة: [من المدينة إلى مكة بسيارة خاصة](services/intercity-transfers/madinah-to-makkah)",
          "العودة جوًا من جدة: [من المدينة إلى مطار جدة](services/intercity-transfers/madinah-to-jeddah)، نحو 399 كم",
          "القادمون من جدة: [من جدة إلى المدينة](services/intercity-transfers/jeddah-to-madinah)، من فندق أو من المطار",
          "زيارة المواقع التراثية: [من المدينة إلى العلا](services/intercity-transfers/madinah-to-alula)، نحو 337 كم",
          "العودة إلى العاصمة: [من المدينة إلى الرياض](services/intercity-transfers/madinah-to-riyadh)، نحو 823 كم",
        ],
      },
      {
        h: "أي سيارة تطلب في المدينة المنورة",
        p: ["يوفر شركاء النقل السيارة مع السائق، فتطلب الفئة ويذكر عرض السعر المتاح لتاريخك. المشاوير القصيرة إلى المطار والزيارات تناسبها أي فئة، أما الطرق الطويلة إلى مكة وجدة والرياض فهي التي تهم فيها المساحة ومكان الحقائب. قارن الفئات في [صفحة فئات السيارات](fleet)."],
        list: [
          "سيدان (من فئة تويوتا كامري أو هيونداي سوناتا أو فورد توروس): لزوجين أو مجموعة صغيرة بحقائب خفيفة",
          "دفع رباعي كبيرة (جمس يوكن أو شفروليه تاهو أو سوبربان): للعائلات التي تريد الراحة في طريق يستغرق أربع ساعات",
          "هيونداي ستاريا: حتى 7 ركاب و10 حقائب أو أكثر",
          "مجموعة أكبر: سيارتان تسيران معًا في طلب واحد",
        ],
      },
      {
        h: "الوصول إلى المطار والمحطة",
        p: [
          "تقيس خرائط Google نحو 20.7 كم من مطار المدينة المنورة إلى محيط المسجد النبوي، أي نحو 25 دقيقة في الحركة الخفيفة؛ ويطول الوقت نهارًا وقرب أوقات الصلاة. أرسل رقم الرحلة ليتبع الاستقبال موعد الهبوط الفعلي.",
          "تقع محطة قطار الحرمين في مدينة المعرفة الاقتصادية على بُعد نحو 12 كم بالطريق من المسجد النبوي. ويصل قطار مكة وجدة بركاب كثيرين في وقت واحد، فاذكر رقم القطار وعدد حقائبك.",
        ],
      },
      {
        h: "الإقامة قرب المسجد النبوي",
        p: ["يقيم أغلب الزوار في منطقة المركزية حول المسجد النبوي، حيث يتقيّد وصول المركبات عند أوقات الصلاة والزحام. ويُتفق عادةً على الاستلام من نقطة قريبة يسهل الوصول إليها؛ فأخبرنا باسم فندقك لنؤكد نقطة اللقاء العملية. وخطط لمواعيد الانطلاق حول أوقات الصلاة وأخبرنا متى يجب أن تعود."],
      },
      {
        h: "الزيارات في حجز واحد",
        p: ["من الزيارات الشائعة مسجد قباء ومسجد القبلتين ومنطقة أحد وأسواق التمور. ويسهل جمع جولة قصيرة في حجز واحد إذا ذكرت المحطات بالترتيب والمدة عند كل منها. ويضيف بعض الزوار الزيارات صباح سفرهم إلى مكة أو جدة؛ فأخبرنا ليُخطَّط الانطلاق بعدها."],
      },
      {
        h: "العائلات وكبار السن والمجموعات",
        p: ["كثيرًا ما تضم زيارة المدينة أجدادًا وأطفالًا صغارًا. أخبرنا بمن يحتاج وقتًا أطول للصعود والنزول، وهل تحتاج مقاعد أطفال، وكم حقيبة معكم. وللعائلات في رحلة المدينتين راجع [نقل العائلات المعتمرة](services/umrah-transport/family-umrah-transport)، وللوكالات والمجموعات الكبيرة راجع [نقل مجموعات المعتمرين](services/umrah-transport/group-umrah-transport)."],
      },
      {
        h: "كيف يصلك عرض السعر",
        p: ["أرسل النموذج أو رسالة واتساب بالتفاصيل أدناه. ويذكر عرض السعر فئة السيارة ونقطة الاستلام والسعر، ولا يُحجز شيء قبل أن تؤكد. ويمكنك الإلغاء قبل موعد الاستلام بـ24 ساعة على الأقل، والدفع برابط دفع أو STC Pay أو نقدًا."],
      },
    ],
    table: {
      h: "رحلات المدينة المنورة في لمحة",
      head: ["الرحلة", "المسافة البرية التقريبية", "مدة القيادة دون توقف"],
      rows: [
        ["مطار المدينة (MED) إلى محيط المسجد النبوي", "نحو 21 كم", "نحو 25 دقيقة في الحركة الخفيفة"],
        ["محطة قطار الحرمين في المدينة إلى المسجد النبوي", "نحو 12 كم بالطريق", "مسافة قصيرة تطول في أوقات الصلاة"],
        ["المدينة إلى مكة المكرمة", "نحو 436 كم", "نحو 4 ساعات و20 دقيقة"],
        ["المدينة إلى مطار جدة (JED)", "نحو 399 كم", "نحو 4 ساعات"],
        ["المدينة إلى العلا", "نحو 337 كم", "نحو 3 ساعات و50 دقيقة"],
        ["المدينة إلى الرياض", "نحو 823 كم", "نحو 7 ساعات و50 دقيقة"],
      ],
    },
    checklist: {
      h: "ما الذي تضيفه إلى طلب المدينة",
      items: [
        "الاستلام: رقم الرحلة الجوية أو موعد القطار أو اسم الفندق",
        "الوجهة: اسم الفندق أو محطات الزيارة أو المدينة إن كانت رحلة لاحقة",
        "التاريخ ووقت الاستلام، وأي صلاة تريد الوصول قبلها",
        "عدد الركاب ومنهم الأطفال وكبار السن",
        "عدد الحقائب الكبيرة والصغيرة",
        "السيارة المفضلة: سيدان أو جمس يوكن أو دفع رباعي أخرى أو هيونداي ستاريا",
      ],
    },
    faqs: [
      { q: "ما خيارات التوصيل الخاص التي يمكنني طلبها في المدينة المنورة؟", a: "الاستقبال من المطار ومحطة قطار الحرمين، والتنقل بين الفنادق حول المسجد النبوي، والزيارات، والسفر إلى مكة وجدة والعلا والرياض، وكلها بسيارة خاصة لمجموعتك وحدها." },
      { q: "هل يمكنني طلب جمس يوكن أو سيارة دفع رباعي في المدينة المنورة؟", a: "نعم. اطلب جمس يوكن أو دفعًا رباعيًا كبيرة أخرى، ويذكر عرض السعر السيارة المتاحة لتاريخك." },
      { q: "هل يمكنني طلب سيارة سيدان لمشوار خاص في المدينة المنورة؟", a: "نعم. تناسب السيدان زوجين أو مجموعة صغيرة بحقائب خفيفة، مثل مشوار المطار أو صباح الزيارات." },
      { q: "كم يبعد مطار المدينة المنورة عن المسجد النبوي؟", a: "نحو 20.7 كم بالطريق، أي نحو 25 دقيقة في الحركة الخفيفة بحسب خرائط Google، ويطول الوقت مع زحام النهار قرب المركز." },
      { q: "هل يمكنني ترتيب توصيل خاص من المدينة إلى مكة مع الوقوف بالميقات؟", a: "نعم. يمر الطريق بميقات ذي الحليفة (أبيار علي)، ويُخطَّط الوقوف ضمن رحلة المدينة إلى مكة." },
      { q: "ما المعلومات المطلوبة لعرض سعر توصيل في المدينة المنورة؟", a: "نقطة الاستلام والوجهة، والتاريخ والوقت، وعدد الركاب والحقائب، والسيارة المفضلة، مع رقم الرحلة أو القطار للقادمين." },
      { q: "كيف أتأكد من توفر السيارة في المدينة المنورة؟", a: "أرسل طلبك فيذكر عرض السعر فئة السيارة المتاحة لتاريخك، ولا يتم الحجز إلا بعد أن تؤكد." },
      { q: "هل أخطط جولة زيارات في المدينة المنورة بحجز واحد؟", a: "نعم. اذكر الأماكن بالترتيب الذي تريد والوقت عند كل منها، ويشمل عرض السعر الجولة كاملة." },
      { q: "هل تستقبلون القادمين في محطة قطار المدينة المنورة؟", a: "يمكنك طلب ذلك مع ذكر موعد قطارك. وتبعد المحطة نحو 12 كم بالطريق عن المسجد النبوي، وتُؤكَّد الإتاحة في عرض السعر." },
    ],
  },
};

/* ─────────────────────────── New route: Madinah to Riyadh ─────────────────────────── */

export const madinahToRiyadh: ServicePage = {
  path: `${I}/madinah-to-riyadh`,
  parent: I,
  variant: "default",
  service: "intercity",
  related: [
    `${I}/riyadh-to-madinah`,
    `${C}/madinah`,
    `${UM}/madinah-ziyarat`,
    `${I}/madinah-to-makkah`,
    `${I}/makkah-to-riyadh`,
    `${A}/madinah-airport`,
    `${C}/riyadh`,
    "fleet",
  ],
  updated: U,
  copy: {
    en: {
      nav: "Madinah to Riyadh",
      title: "Madinah to Riyadh Private Car with Driver",
      description: "Private car with a driver from your Madinah hotel to a Riyadh home, hotel or the airport: about 823 km, close to eight hours before stops. For your party only.",
      h1: "Madinah to Riyadh by private car, from the Prophet's Mosque to your door",
      eyebrow: "Intercity · Madinah → Riyadh",
      answer:
        "A private Madinah to Riyadh transfer is a pre-booked car with a driver from your hotel in Madinah to your home, hotel or King Khalid International Airport in Riyadh. Google Maps measures about 823 km via Route 60 and Route 65, around 7 hours 50 minutes before stops. The vehicle carries your party only, and RideSaudi quotes the journey before you commit.",
      summary: "Private car from a Madinah hotel to Riyadh, about 823 km and close to eight hours, door to door.",
      sections: [
        {
          h: "The drive home after a visit to Madinah",
          p: ["This road is usually the end of a trip: a family from Riyadh going home after ziyarah, relatives returning after a visit, or pilgrims who finished Umrah in Makkah and spent their last days in Madinah. The journey starts at your hotel near the Prophet's Mosque and ends at your own front door, with every bag in the car and nobody else on board."],
        },
        {
          h: "The road and the time it takes",
          p: [
            "Google Maps measures about 823 km from the Prophet's Mosque area to King Abdullah Financial District via Route 60 and Route 65, around 7 hours 50 minutes in usual traffic, and close to 7 hours 45 minutes to King Khalid International Airport. A longer road stays on Route 60 for about 865 km.",
            "The usual route crosses the Qassim region, and Buraydah lies about 350 km before Riyadh, which makes the area a natural place for a long break with fuel, a meal and prayer.",
          ],
        },
        {
          h: "Leaving your Madinah hotel",
          p: ["Hotels around the Prophet's Mosque are hard for cars to reach at prayer times, so the pickup is agreed at an accessible point near your hotel, timed after the prayer you want to pray in the mosque. Give the hotel name, the check-out time and the number of bags. If you want a last visit to Quba or Uhud on the way out, say so and the departure is planned after it; see [Madinah ziyarat transport](services/umrah-transport/madinah-ziyarat) for the usual stops."],
        },
        {
          h: "Arriving in Riyadh",
          p: ["Riyadh is wide, and the north, the centre and the south are far apart at evening rush hour, so give a district or a map pin, not just the city name. For a flight from King Khalid International Airport (RUH), tell us the departure time: an eight-hour road leaves little room, and an early start or a night in Riyadh before the flight is usually safer. Moving around the city afterwards is covered on [Riyadh city transport](services/city-transport/riyadh)."],
        },
        {
          h: "Road or a domestic flight",
          p: ["Flights between Madinah and Riyadh are shorter in the air, but airport check-in, security and the drive at each end add hours, and a family's Umrah luggage costs more on a plane. The road suits families and groups who want to stay together, travel with a lot of bags, or stop when they want. If you are coming the other way, see [Riyadh to Madinah](services/intercity-transfers/riyadh-to-madinah)."],
        },
        {
          h: "Which vehicle to request",
          p: ["On a road this long, choose for comfort as well as seats. State every passenger and bag; the quotation confirms the vehicle and its availability."],
          list: [
            "Sedan: a couple or two to three adults with light luggage",
            "GMC Yukon or another full-size SUV: a family that wants space for eight hours",
            "Hyundai Staria: up to 7 passengers with 10 or more bags",
          ],
        },
        {
          h: "Ending a two-city trip in Riyadh",
          p: ["If Madinah was the second city of your trip, you may already have travelled [Makkah to Madinah by private car](services/intercity-transfers/makkah-to-madinah). If instead you are heading back to Makkah first, the [Madinah to Makkah transfer](services/intercity-transfers/madinah-to-makkah) includes the Miqat stop, and [Makkah to Riyadh](services/intercity-transfers/makkah-to-riyadh) covers the long drive home from there."],
        },
      ],
      table: {
        h: "Madinah to Riyadh route facts",
        head: ["Detail", "Madinah to Riyadh"],
        rows: [
          ["Road distance", "About 823 km, Prophet's Mosque area to King Abdullah Financial District"],
          ["Driving time", "About 7 h 50 min without stops via Route 60 and Route 65 (Google Maps, checked November 2026)"],
          ["To Riyadh airport (RUH)", "About 7 h 45 min without stops"],
          ["Longer alternative", "About 865 km staying on Route 60"],
          ["Natural break", "The Qassim region, with Buraydah about 350 km before Riyadh"],
          ["Pickup", "Your hotel in Madinah, at the nearest point vehicle access allows"],
          ["Drop-off", "Your home, hotel or the airport in Riyadh"],
          ["Shared seats", "None. One vehicle for your party only"],
        ],
      },
      checklist: {
        h: "Include this in your Madinah to Riyadh enquiry",
        items: [
          "Hotel name in Madinah and your check-out time",
          "Riyadh district or address, or your flight time from RUH",
          "Date and the prayer you want to pray in Madinah before leaving",
          "Passengers, including children and elderly travellers",
          "Number of large suitcases and cabin bags",
          "Any ziyarat stop on the way out of Madinah",
        ],
      },
      faqs: [
        { q: "How far is Madinah from Riyadh by road?", a: "About 823 km from the Prophet's Mosque area to King Abdullah Financial District via Route 60 and Route 65, by Google Maps. Your exact pickup and drop-off change it slightly." },
        { q: "How long does a private car take from Madinah to Riyadh?", a: "Around 7 hours 50 minutes of driving before stops. With a long break in Qassim and prayer stops, plan for most of a day." },
        { q: "Is the car from Madinah to Riyadh shared with other passengers?", a: "No. The vehicle and driver are for your party only, from your Madinah hotel to your Riyadh address." },
        { q: "Can I go from Madinah straight to Riyadh airport for a flight?", a: "Yes, but the road takes close to 7 hours 45 minutes. Leave a wide margin, or arrive the evening before an early flight." },
        { q: "Can we visit Quba Mosque before leaving Madinah for Riyadh?", a: "Yes. Ask for the stop in the enquiry and the departure is planned after it." },
        { q: "Where do people usually stop between Madinah and Riyadh?", a: "Most take a long break in the Qassim region, around Buraydah, plus shorter stops for prayer. Tell us what breaks matter to you." },
        { q: "Can I cancel a Madinah to Riyadh booking, and how do I pay?", a: "You can cancel at least 24 hours before pickup. Payment is by payment link, STC Pay or cash; other terms are stated in the quotation." },
      ],
    },
    ar: {
      nav: "المدينة المنورة إلى الرياض",
      title: "توصيل من المدينة إلى الرياض بسيارة خاصة",
      description: "سيارة خاصة مع سائق من فندقك في المدينة المنورة إلى منزلك أو فندقك أو المطار في الرياض: نحو 823 كم وقرابة ثماني ساعات دون توقف، لمجموعتك وحدها.",
      h1: "من المدينة المنورة إلى الرياض بسيارة خاصة، من المسجد النبوي إلى باب بيتك",
      eyebrow: "بين المدن · المدينة المنورة ← الرياض",
      answer:
        "التوصيل الخاص من المدينة المنورة إلى الرياض سيارة بسائق وبحجز مسبق من فندقك في المدينة إلى منزلك أو فندقك أو مطار الملك خالد الدولي في الرياض. تقيس خرائط جوجل نحو 823 كم عبر الطريق 60 والطريق 65، أي نحو 7 ساعات و50 دقيقة دون توقف. والسيارة لمجموعتك وحدها، وتُسعِّر RideSaudi الرحلة قبل أن تلتزم.",
      summary: "سيارة خاصة من فندق في المدينة المنورة إلى الرياض، نحو 823 كم وقرابة ثماني ساعات، من الباب إلى الباب.",
      sections: [
        {
          h: "طريق العودة بعد زيارة المدينة",
          p: ["هذا الطريق في الغالب نهاية الرحلة: عائلة من الرياض عائدة بعد الزيارة، أو أقارب يعودون بعد زيارة الأهل، أو معتمرون أتموا العمرة في مكة وقضوا أيامهم الأخيرة في المدينة. تبدأ الرحلة من فندقك قرب المسجد النبوي وتنتهي عند باب بيتك، وكل الحقائب معك ولا أحد غيركم في السيارة."],
        },
        {
          h: "الطريق والمدة",
          p: [
            "تقيس خرائط Google نحو 823 كم من محيط المسجد النبوي إلى مركز الملك عبدالله المالي عبر الطريق 60 والطريق 65، أي نحو 7 ساعات و50 دقيقة في الحركة المعتادة، وقرابة 7 ساعات و45 دقيقة إلى مطار الملك خالد الدولي. وهناك طريق أطول يبقى على الطريق 60 بنحو 865 كم.",
            "يعبر الطريق المعتاد منطقة القصيم، وتقع بريدة قبل الرياض بنحو 350 كم، فتكون المنطقة مكانًا مناسبًا لاستراحة طويلة للوقود والطعام والصلاة.",
          ],
        },
        {
          h: "الخروج من فندقك في المدينة",
          p: ["يصعب وصول السيارات إلى الفنادق حول المسجد النبوي في أوقات الصلاة، لذا يُتفق على الاستلام من نقطة قريبة يسهل الوصول إليها، بعد الصلاة التي تريد أداءها في المسجد. اذكر اسم الفندق وموعد الخروج وعدد الحقائب. وإن أردت زيارة أخيرة لقباء أو أحد في طريق الخروج فأخبرنا ليُخطَّط الانطلاق بعدها؛ وتجد المحطات المعتادة في [نقل زيارات المدينة المنورة](services/umrah-transport/madinah-ziyarat)."],
        },
        {
          h: "الوصول إلى الرياض",
          p: ["الرياض واسعة، والمسافة بين شمالها ووسطها وجنوبها كبيرة في زحام المساء، فاذكر الحي أو أرسل موقعًا على الخريطة لا اسم المدينة فقط. وإن كانت لديك رحلة من مطار الملك خالد الدولي فأخبرنا بموعدها: فالطريق ثماني ساعات ولا يترك هامشًا كبيرًا، والأسلم غالبًا الانطلاق مبكرًا أو المبيت في الرياض قبل الرحلة. وللتنقل داخل المدينة بعد ذلك راجع [النقل داخل الرياض](services/city-transport/riyadh)."],
        },
        {
          h: "الطريق البري أم الطيران الداخلي",
          p: ["الرحلة الجوية بين المدينة والرياض أقصر في الجو، لكن إجراءات المطار والتفتيش والطريق في الطرفين تضيف ساعات، وحقائب العائلة بعد العمرة تكلف أكثر في الطائرة. ويناسب الطريق البري العائلات والمجموعات التي تريد البقاء معًا أو تحمل حقائب كثيرة أو تريد التوقف متى شاءت. وإن كنت مسافرًا في الاتجاه المعاكس فراجع [من الرياض إلى المدينة المنورة](services/intercity-transfers/riyadh-to-madinah)."],
        },
        {
          h: "أي سيارة تطلب",
          p: ["في طريق بهذا الطول اختر للراحة لا للمقاعد فقط. اذكر كل راكب وكل حقيبة، ويؤكد عرض السعر السيارة وتوفرها."],
          list: [
            "سيدان: لزوجين أو لاثنين إلى ثلاثة بالغين بحقائب خفيفة",
            "جمس يوكن أو دفع رباعي كبيرة أخرى: لعائلة تريد مساحة طوال ثماني ساعات",
            "هيونداي ستاريا: حتى 7 ركاب و10 حقائب أو أكثر",
          ],
        },
        {
          h: "إنهاء رحلة المدينتين في الرياض",
          p: ["إن كانت المدينة المحطة الثانية في رحلتك فربما سافرت قبلها [من مكة إلى المدينة بسيارة خاصة](services/intercity-transfers/makkah-to-madinah). وإن كنت ستعود إلى مكة أولًا فإن [التوصيل من المدينة إلى مكة](services/intercity-transfers/madinah-to-makkah) يشمل الوقوف بالميقات، وتغطي صفحة [من مكة إلى الرياض](services/intercity-transfers/makkah-to-riyadh) طريق العودة الطويل من هناك."],
        },
      ],
      table: {
        h: "حقائق طريق المدينة المنورة إلى الرياض",
        head: ["التفصيل", "المدينة المنورة إلى الرياض"],
        rows: [
          ["المسافة البرية", "نحو 823 كم، من محيط المسجد النبوي إلى مركز الملك عبدالله المالي"],
          ["مدة القيادة", "نحو 7 ساعات و50 دقيقة دون توقف عبر الطريق 60 والطريق 65 (خرائط Google، نوفمبر 2026)"],
          ["إلى مطار الرياض (RUH)", "نحو 7 ساعات و45 دقيقة دون توقف"],
          ["الطريق الأطول", "نحو 865 كم بالبقاء على الطريق 60"],
          ["الاستراحة المعتادة", "منطقة القصيم، وبريدة قبل الرياض بنحو 350 كم"],
          ["الاستلام", "فندقك في المدينة المنورة، من أقرب نقطة يسمح بها وصول السيارات"],
          ["النزول", "منزلك أو فندقك أو المطار في الرياض"],
          ["مقاعد مشتركة", "لا. سيارة واحدة لمجموعتك وحدها"],
        ],
      },
      checklist: {
        h: "ما الذي تضيفه إلى طلب المدينة المنورة إلى الرياض",
        items: [
          "اسم الفندق في المدينة وموعد الخروج",
          "الحي أو العنوان في الرياض، أو موعد رحلتك من مطار الملك خالد",
          "التاريخ والصلاة التي تريد أداءها في المدينة قبل الانطلاق",
          "عدد الركاب ومنهم الأطفال وكبار السن",
          "عدد الحقائب الكبيرة والصغيرة",
          "أي زيارة تريدها في طريق الخروج من المدينة",
        ],
      },
      faqs: [
        { q: "كم المسافة بين المدينة المنورة والرياض بالسيارة؟", a: "نحو 823 كم من محيط المسجد النبوي إلى مركز الملك عبدالله المالي عبر الطريق 60 والطريق 65 بحسب خرائط Google، وتتغير قليلًا بحسب نقطتي الاستلام والنزول." },
        { q: "كم تستغرق السيارة الخاصة من المدينة المنورة إلى الرياض؟", a: "نحو 7 ساعات و50 دقيقة من القيادة دون توقف. ومع استراحة طويلة في القصيم ووقفات للصلاة خطط لمعظم اليوم." },
        { q: "هل السيارة من المدينة إلى الرياض مشتركة مع ركاب آخرين؟", a: "لا. السيارة والسائق لمجموعتك وحدها، من فندقك في المدينة إلى عنوانك في الرياض." },
        { q: "هل يمكنني الذهاب من المدينة مباشرة إلى مطار الرياض للحاق برحلة؟", a: "نعم، لكن الطريق يستغرق قرابة 7 ساعات و45 دقيقة. اترك هامشًا واسعًا، أو اصل في المساء السابق لرحلة الصباح الباكر." },
        { q: "هل يمكننا زيارة مسجد قباء قبل مغادرة المدينة إلى الرياض؟", a: "نعم. اطلب الوقفة في طلبك ليُخطَّط الانطلاق بعدها." },
        { q: "أين يتوقف المسافرون عادة بين المدينة المنورة والرياض؟", a: "يأخذ أكثرهم استراحة طويلة في منطقة القصيم قرب بريدة، مع وقفات أقصر للصلاة. أخبرنا بالاستراحات التي تهمك." },
        { q: "هل يمكنني إلغاء حجز المدينة إلى الرياض، وكيف أدفع؟", a: "يمكنك الإلغاء قبل موعد الاستلام بـ24 ساعة على الأقل. والدفع برابط دفع أو STC Pay أو نقدًا، وتُذكر الشروط الأخرى في عرض السعر." },
      ],
    },
  },
};

/* ─────────────────────────── Patches to existing pages ─────────────────────────── */

type Sec = { h: string; p: string[]; list?: string[] };
type Patch = { en?: { sections?: Sec[]; faqs?: { q: string; a: string }[] }; ar?: { sections?: Sec[]; faqs?: { q: string; a: string }[] } };

const patches: Record<string, Patch> = {
  [`${A}/madinah-airport`]: {
    en: {
      sections: [
        {
          h: "From MED to the Prophet's Mosque area",
          p: ["Google Maps measures about 20.7 km from Prince Mohammad bin Abdulaziz International Airport to the Prophet's Mosque area, around 25 minutes in light traffic. Daytime traffic and prayer-time closures near the Markaziyah make it longer, which is why the drop-off is agreed at an accessible point near your hotel. The [Madinah private transfers page](services/city-transport/madinah) explains hotel pickups and vehicle choices across the city."],
        },
        {
          h: "Hotel to Madinah airport for your flight out",
          p: ["The same journey in reverse needs more care than the arrival, because the pickup must fit around prayer times and the hotel's car access. Give the flight time, the hotel name and the luggage count, and the pickup is proposed with time to spare. If you are flying home from Jeddah rather than Madinah, the [Madinah to Jeddah airport transfer](services/intercity-transfers/madinah-to-jeddah) is planned back from that flight."],
        },
        {
          h: "Straight from the airport to ziyarat or another city",
          p: ["Some arrivals want to visit Quba on the way in, or never stay in Madinah at all. Ask for [ziyarat stops in the same booking](services/umrah-transport/madinah-ziyarat), or travel on directly: [Madinah to Makkah](services/intercity-transfers/madinah-to-makkah) includes the Miqat stop for pilgrims starting Umrah, and [Madinah to Riyadh](services/intercity-transfers/madinah-to-riyadh) suits families driving home after the visit."],
        },
      ],
      faqs: [
        { q: "How long is the drive from Madinah airport to the Prophet's Mosque?", a: "About 20.7 km, around 25 minutes in light traffic on Google Maps. Allow more in daytime and near prayer times." },
        { q: "Can you take me from my Madinah hotel to the airport for my flight?", a: "Yes. Give the flight time and hotel name and the pickup is proposed with a margin, around prayer times and car access." },
      ],
    },
    ar: {
      sections: [
        {
          h: "من مطار المدينة إلى محيط المسجد النبوي",
          p: ["تقيس خرائط Google نحو 20.7 كم من مطار الأمير محمد بن عبدالعزيز الدولي إلى محيط المسجد النبوي، أي نحو 25 دقيقة في الحركة الخفيفة. ويطول الوقت مع زحام النهار وإغلاقات أوقات الصلاة قرب المركزية، ولهذا يُتفق على النزول عند نقطة قريبة من فندقك يسهل الوصول إليها. وتشرح [صفحة التوصيل الخاص في المدينة المنورة](services/city-transport/madinah) الاستلام من الفنادق واختيار السيارة في أنحاء المدينة."],
        },
        {
          h: "من الفندق إلى مطار المدينة للحاق برحلتك",
          p: ["الرحلة نفسها بالعكس تحتاج عناية أكبر من الوصول، لأن الاستلام يجب أن يراعي أوقات الصلاة ومدخل السيارات في الفندق. اذكر موعد الرحلة واسم الفندق وعدد الحقائب، فيُقترح وقت الاستلام مع هامش كافٍ. وإن كانت عودتك من جدة لا من المدينة فإن [التوصيل من المدينة إلى مطار جدة](services/intercity-transfers/madinah-to-jeddah) يُخطَّط بالرجوع من موعد تلك الرحلة."],
        },
        {
          h: "من المطار مباشرة إلى الزيارات أو مدينة أخرى",
          p: ["يريد بعض القادمين زيارة قباء في طريقهم، أو لا يقيمون في المدينة أصلًا. اطلب [محطات الزيارة في الحجز نفسه](services/umrah-transport/madinah-ziyarat)، أو تابع مباشرة: فرحلة [المدينة إلى مكة](services/intercity-transfers/madinah-to-makkah) تشمل الوقوف بالميقات لمن يبدأ العمرة، ورحلة [المدينة إلى الرياض](services/intercity-transfers/madinah-to-riyadh) تناسب العائلات العائدة بالسيارة بعد الزيارة."],
        },
      ],
      faqs: [
        { q: "كم تستغرق الطريق من مطار المدينة المنورة إلى المسجد النبوي؟", a: "نحو 20.7 كم، أي قرابة 25 دقيقة في الحركة الخفيفة بحسب خرائط Google. اترك وقتًا أطول نهارًا وقرب أوقات الصلاة." },
        { q: "هل توصلونني من فندقي في المدينة إلى المطار للحاق برحلتي؟", a: "نعم. اذكر موعد الرحلة واسم الفندق فيُقترح وقت الاستلام مع هامش يراعي أوقات الصلاة ووصول السيارات." },
      ],
    },
  },
  [`${UM}/jeddah-airport-to-makkah`]: {
    en: {
      sections: [
        {
          h: "Which vehicle to request from the airport",
          p: ["Arrival day is when luggage peaks, so count every suitcase and cabin bag. A sedan suits one or two travellers with light bags; a GMC Yukon or another full-size SUV gives a family more room; a Hyundai Staria takes up to 7 passengers with 10 or more bags. The [vehicle categories page](fleet) compares them, and the quotation confirms what is available for your landing time."],
        },
        {
          h: "Staying in Jeddah first, or returning to the airport",
          p: ["If you spend a night in Jeddah before Makkah, the journey starts from a hotel rather than the arrivals hall; that is [Jeddah to Makkah by private car](services/intercity-transfers/jeddah-to-makkah). For the way home, [Makkah to Jeddah Airport](services/intercity-transfers/makkah-to-jeddah) plans the pickup back from your flight, and the [Makkah private transfers page](services/city-transport/makkah) covers hotel moves, ziyarat and the onward road to Madinah."],
        },
      ],
      faqs: [
        { q: "Which vehicle should a family request from Jeddah airport to Makkah?", a: "Usually a Hyundai Staria, which takes up to 7 passengers and 10 or more bags, or a GMC Yukon when the family wants more comfort. The quotation confirms availability." },
      ],
    },
    ar: {
      sections: [
        {
          h: "أي سيارة تطلب من المطار",
          p: ["يوم الوصول هو اليوم الذي تكثر فيه الحقائب، فاحسب كل حقيبة كبيرة وصغيرة. تناسب السيدان مسافرًا أو اثنين بحقائب خفيفة، وتمنح جمس يوكن أو دفع رباعي كبيرة أخرى العائلة مساحة أوسع، وتتسع هيونداي ستاريا حتى 7 ركاب و10 حقائب أو أكثر. تقارن [صفحة فئات السيارات](fleet) بينها، ويؤكد عرض السعر المتاح لموعد هبوطك."],
        },
        {
          h: "الإقامة في جدة أولًا أو العودة إلى المطار",
          p: ["إن قضيت ليلة في جدة قبل مكة فالرحلة تبدأ من فندق لا من صالة الوصول، وهي [من جدة إلى مكة بسيارة خاصة](services/intercity-transfers/jeddah-to-makkah). وللعودة تخطط صفحة [من مكة إلى مطار جدة](services/intercity-transfers/makkah-to-jeddah) للاستلام بالرجوع من موعد رحلتك، وتغطي [صفحة التوصيل الخاص في مكة المكرمة](services/city-transport/makkah) التنقل بين الفنادق والزيارات والطريق إلى المدينة."],
        },
      ],
      faqs: [
        { q: "أي سيارة تطلبها العائلة من مطار جدة إلى مكة؟", a: "غالبًا هيونداي ستاريا وتتسع حتى 7 ركاب و10 حقائب أو أكثر، أو جمس يوكن حين تريد العائلة راحة أكبر. ويؤكد عرض السعر التوفر." },
      ],
    },
  },
};

/** Pages that should link to these targets from their related list (contextual inlinks, SEO-RULES 7A). */
const relatedAdds: Record<string, string[]> = {
  [`${A}/madinah-airport`]: [`${C}/madinah`, `${I}/madinah-to-makkah`, `${UM}/madinah-ziyarat`, `${I}/madinah-to-riyadh`],
  [`${UM}/jeddah-airport-to-makkah`]: [`${C}/makkah`, `${I}/jeddah-to-makkah`, `${I}/makkah-to-jeddah`],
  [`${I}/makkah-to-madinah`]: [`${C}/makkah`, `${C}/madinah`],
  [`${I}/riyadh-to-madinah`]: [`${I}/madinah-to-riyadh`, `${C}/madinah`],
  [`${I}/makkah-to-riyadh`]: [`${I}/madinah-to-riyadh`],
  [`${I}/madinah-to-alula`]: [`${C}/madinah`],
  [UM]: [`${C}/makkah`, `${C}/madinah`],
  [`${UM}/makkah-ziyarat`]: [`${C}/makkah`],
  [`${UM}/madinah-ziyarat`]: [`${C}/madinah`],
  [`${C}/makkah`]: [
    `${UM}/jeddah-airport-to-makkah`,
    `${I}/makkah-to-madinah`,
    `${I}/makkah-to-jeddah`,
    `${A}/jeddah-airport`,
    `${UM}/family-umrah-transport`,
    "fleet",
  ],
  [`${C}/madinah`]: [
    `${I}/madinah-to-makkah`,
    `${I}/madinah-to-jeddah`,
    `${I}/madinah-to-riyadh`,
    `${UM}/family-umrah-transport`,
    "fleet",
  ],
};

/** Arabic titles/H1s without "نقل خاص" on the Umrah pages. */
const arHeadings: Record<string, { title?: string; h1?: string }> = {
  [UM]: { title: "تاكسي وتوصيل خاص للمعتمرين في السعودية", h1: "تاكسي وتوصيل خاص للعمرة، مخطَّط له مسبقًا" },
  [`${UM}/makkah-ziyarat`]: { h1: "توصيل خاص لزيارات مكة المكرمة" },
  [`${UM}/madinah-ziyarat`]: { h1: "توصيل خاص لزيارات المدينة المنورة" },
};

export function applyMakkahMadinahGrowth(pages: ServicePage[]) {
  const byPath = new Map(pages.map((p) => [p.path, p]));
  const get = (path: string) => {
    const p = byPath.get(path);
    if (!p) throw new Error(`makkah-madinah: unknown page ${path}`);
    return p;
  };

  for (const [path, copy] of [[`${C}/makkah`, makkahHub], [`${C}/madinah`, madinahHub]] as const) {
    const p = get(path);
    p.copy = copy;
    p.variant = "umrah";
    p.service = "umrah";
    p.updated = U;
  }

  for (const [path, patch] of Object.entries(patches)) {
    const p = get(path);
    for (const l of ["en", "ar"] as Locale[]) {
      const x = patch[l];
      if (!x) continue;
      p.copy[l].sections.push(...(x.sections ?? []));
      p.copy[l].faqs.push(...(x.faqs ?? []));
    }
    p.updated = U;
  }

  const riyadhToMadinah = get(`${I}/riyadh-to-madinah`);
  for (const f of riyadhToMadinah.copy.en.faqs) if (f.q === "Is Madinah to Riyadh possible?") f.a = "Yes. The return journey has its own page, Madinah to Riyadh, planned from a Madinah hotel check-out.";
  for (const f of riyadhToMadinah.copy.ar.faqs) if (f.q === "هل المدينة المنورة إلى الرياض ممكنة؟") f.a = "نعم. لرحلة العودة صفحتها الخاصة، المدينة المنورة إلى الرياض، وتُخطَّط من موعد الخروج من فندقك في المدينة.";

  riyadhToMadinah.updated = U;

  for (const [path, targets] of Object.entries(relatedAdds)) {
    const p = get(path);
    for (const t of targets) {
      get(t);
      if (t !== path && !p.related.includes(t)) p.related.push(t);
    }
  }

  for (const [path, h] of Object.entries(arHeadings)) {
    const p = get(path);
    if (h.title) p.copy.ar.title = h.title;
    if (h.h1) p.copy.ar.h1 = h.h1;
    p.updated = U;
  }
}
