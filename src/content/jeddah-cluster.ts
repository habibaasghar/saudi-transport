import type { Locale } from "@/i18n/routing";
import type { Copy, ServicePage } from "./types";

/**
 * Jeddah cluster pass (2026-11-23). Report: docs/seo/jeddah-cluster-report.md.
 *
 * 1. Jeddah city hub becomes the primary page for "car service jeddah / private transfer jeddah / car with driver
 *    jeddah" and the Arabic "سيارة مع سائق في جدة / تأجير سيارة مع سائق جدة / ليموزين جدة".
 * 2. Jeddah Airport page rebuilt as the JED hub ("jeddah airport transfer", "car service jeddah airport",
 *    "توصيل مطار جدة", "ليموزين مطار جدة"), with every onward and return journey linked in the text.
 * 3. New routes Jeddah to Al Baha and Al Baha to Jeddah (the Al Baha city page already answered
 *    "Can I book a private car from Jeddah to Al Baha?" without a route page; competitors have none).
 * 4. Jeddah to Yanbu, Jeddah to AlUla and Jeddah to Riyadh gain verified route-fact tables; the two
 *    "we do not publish a distance" paragraphs are replaced with checked figures.
 *
 * "ليموزين" (limousine) is the everyday Saudi word for a pre-booked car with a driver and is the most common
 * Jeddah phrasing in Arabic autocomplete (docs/phase1/KEYWORD_MASTER.csv). It is used in Arabic body copy and
 * the airport title as a description of the service, never as a brand or a vehicle class claim.
 *
 * Fact sources:
 *  - Google Maps, checked 2026-11-23 (usual traffic, no stops):
 *    JED to Historic Jeddah (Al Balad) 25.6 to 27.8 km, about 30 min; JED to Jeddah Waterfront 22.9 km, about 24 min;
 *    JED to Obhur Al Shamaliyah 28.8 km, about 25 min; JED to Jeddah Islamic Port about 30 km, about 30 min;
 *    Historic Jeddah to Al Baha 394 km / 4 h 42 min via Route 5 (coast) or 387 km / 4 h 49 min via Route 15 (Taif);
 *    Al Baha to JED 396 km / 4 h 37 min via Route 15;
 *    JED to AlUla 665 km / 7 h 31 min via Route 5 and Route 328, or 724 km / 7 h 26 min via Route 15 (Madinah).
 *  - Already published and sourced in src/content: JED to the Haram area 98 km; Jeddah to Taif 171 km; Jeddah to the
 *    Prophet's Mosque 404 km; Yanbu Al Bahr to Al Balad 343 km / 3 h 36 min and to JED 324 km / 3 h 06 min (coastal
 *    highway); Riyadh (KAFD) to Al Balad 955 km / 9 h 48 min on Route 40; JED terminals: Terminal 1 and the North
 *    Terminal; Haramain stations in Sulaymaniyah and at King Abdulaziz airport; KAEC about 100 km north (public
 *    sources); Raghadan Forest Park 4 to 5 km and Dhee Ain about 24 km from Al Baha.
 *  - Vehicles and policies: same owner-confirmed list as makkah-madinah.ts. No prices, no flight tracking, no waiting
 *    time, no 24/7 claim.
 */
const U = "2026-11-23";
const S = "services";
const C = `${S}/city-transport`;
const I = `${S}/intercity-transfers`;
const A = `${S}/airport-transfers`;
const UM = `${S}/umrah-transport`;

/* ─────────────────────────── Jeddah city hub ─────────────────────────── */

const jeddahHub: Record<Locale, Copy> = {
  en: {
    nav: "Jeddah Private Car Service",
    title: "Jeddah Private Car Service with Driver",
    description: "Private car with a driver in Jeddah: airport pickups, Al Balad, the Corniche, Obhur, the port and the Haramain station, plus trips to Makkah, Madinah and Taif.",
    h1: "Jeddah private car service with a driver, from the airport to Al Balad",
    eyebrow: "City Transport · Jeddah",
    answer:
      "RideSaudi arranges private cars with a driver in Jeddah on request: King Abdulaziz Airport pickups, hotel and business transfers across the city, Al Balad and Corniche outings, the Islamic Port and the Haramain station, and onward journeys to Makkah, Madinah, Taif and beyond. You ask for a sedan, a GMC Yukon or another SUV, or a Hyundai Staria; each journey is quoted before you commit.",
    summary: "Private car with a driver across Jeddah: airport, districts, port, station and onward cities.",
    sections: [
      {
        h: "What you can request in Jeddah",
        p: ["Jeddah enquiries usually fall into one of the journeys below. The city journeys are planned on this page; each longer journey has its own page with the road, the timing and the vehicle advice."],
        list: [
          "Landing at King Abdulaziz International Airport: [Jeddah airport transfers](services/airport-transfers/jeddah-airport) to any hotel or address",
          "Hotel, home and office transfers across Jeddah, from Obhur in the north to Al Balad in the south",
          "A day with a driver for Al Balad, the Corniche, malls and meetings, quoted for the hours you need",
          "The Haramain train: to or from the Jeddah station in Sulaymaniyah or the station at the airport",
          "Cruise and ferry passengers at the Jeddah Islamic Port: [cruise port transfers](services/special-transportation/cruise-port-transfers)",
          "Umrah from a Jeddah hotel: [Jeddah to Makkah by private car](services/intercity-transfers/jeddah-to-makkah), about an hour away",
          "Straight from your flight to the Haram: [Jeddah Airport to Makkah](services/umrah-transport/jeddah-airport-to-makkah)",
          "North to the Prophet's Mosque: [Jeddah to Madinah](services/intercity-transfers/jeddah-to-madinah), about 404 km",
          "Up the mountains: [Jeddah to Taif](services/intercity-transfers/jeddah-to-taif), about 171 km, or on to [Al Baha](services/intercity-transfers/jeddah-to-al-baha)",
          "Along the coast: [King Abdullah Economic City](services/city-transport/king-abdullah-economic-city) and [Yanbu](services/intercity-transfers/jeddah-to-yanbu)",
          "The long roads: [Jeddah to Riyadh](services/intercity-transfers/jeddah-to-riyadh) and [Jeddah to AlUla](services/intercity-transfers/jeddah-to-alula)",
        ],
      },
      {
        h: "Jeddah by district: why the address matters",
        p: [
          "Jeddah runs for tens of kilometres along the Red Sea, so the district decides the timing more than the city name does. Google Maps puts the airport about 23 km from the Jeddah Waterfront, about 27 km from historic Al Balad and about 29 km from Obhur Al Shamaliyah, each roughly 25 to 30 minutes in usual traffic.",
          "Hotels cluster along the Corniche and Al Hamra, on Tahlia Street and around the business districts, while Obhur's resorts and chalets sit at the northern end. Give the exact hotel, building or map pin, and group several stops by area so the driver is not crossing the city twice.",
        ],
      },
      {
        h: "Sedan, SUV or GMC in Jeddah",
        p: [
          "Request a vehicle category; transport partners supply the car with a driver and the quotation names what is available for your date. For a business day, a sedan or an executive SUV is usual; for a family landing with luggage, a Staria or a full-size SUV. Compare the classes on the [vehicle categories page](fleet), or see [luxury SUV with driver](luxury-transportation/luxury-suv) for senior guests.",
        ],
        list: [
          "Sedan (Toyota Camry, Hyundai Sonata or Ford Taurus class): one or two travellers, meetings and short city transfers",
          "Full-size SUV (GMC Yukon, Chevrolet Tahoe or Suburban): families, executives and longer roads",
          "Hyundai Staria: up to 7 passengers with 10 or more bags",
          "Larger parties: two vehicles travelling together, in one enquiry",
        ],
      },
      {
        h: "Business travel and meetings",
        p: ["Visiting teams often need a car between the airport, a hotel and several offices on the same day. List the addresses in order with meeting times, and say whether the driver should wait between stops. For regular corporate travel and executive guests, see [business chauffeur services](services/chauffeur-services/business-chauffeur)."],
      },
      {
        h: "The Haramain train and the port",
        p: [
          "The Haramain high-speed railway has two Jeddah stations: one in the Sulaymaniyah district of the city and one at King Abdulaziz International Airport. If you take the train to Makkah or Madinah from the city, the trip starts with a drive across Jeddah to Sulaymaniyah; send the train time and we plan the pickup back from it.",
          "The Jeddah Islamic Port is about 30 km from the airport by road. Cruise lines set check-in and disembarkation windows, so give the operator's times and your flight, and the transfer is built around both.",
        ],
      },
      {
        h: "Weddings, events and evenings out",
        p: ["Jeddah's wedding halls, concerts and seasonal festivals bring heavy evening traffic and guests who all leave at once. For several cars, timed arrivals or a late return, see [Jeddah event transport](services/event-transportation/jeddah)."],
      },
      {
        h: "Evening traffic and humidity",
        p: ["Jeddah is humid for much of the year and busy in the evening, especially around the Corniche and on shopping nights. Give us your appointment time and we plan the pickup earlier than a quiet-road estimate would suggest."],
      },
      {
        h: "How the quotation works",
        p: ["Send the form or a WhatsApp message with the details below. The quotation names the vehicle category, the pickup point and the price; nothing is booked until you confirm. You can cancel at least 24 hours before pickup, and payment is by payment link, STC Pay or cash."],
      },
    ],
    table: {
      h: "Jeddah journeys at a glance",
      head: ["Journey", "Approximate road distance", "Driving time before stops"],
      rows: [
        ["Airport (JED) to Jeddah Waterfront", "About 23 km", "About 25 min"],
        ["Airport (JED) to Al Balad", "About 26 to 28 km", "About 30 min"],
        ["Airport (JED) to Obhur Al Shamaliyah", "About 29 km", "About 25 min"],
        ["Airport (JED) to Jeddah Islamic Port", "About 30 km", "About 30 min"],
        ["Airport (JED) to the Haram, Makkah", "About 98 km", "About 1 h 5 min"],
        ["Jeddah to Taif", "About 171 km", "About 2 h"],
        ["Jeddah to Al Baha", "About 387 to 394 km", "About 4 h 45 min"],
        ["Jeddah to Madinah", "About 404 km", "About 4 h"],
        ["Jeddah to Riyadh", "About 955 km", "About 9 h 50 min"],
      ],
    },
    checklist: {
      h: "Include this in your Jeddah enquiry",
      items: [
        "Pickup: flight number, hotel, address or map pin",
        "Destination, or the list of stops in order with times",
        "Date and pickup time, and whether the driver should wait",
        "Passengers, including children and elderly travellers",
        "Number of large suitcases and cabin bags",
        "Vehicle preference: sedan, GMC Yukon or other SUV, or Hyundai Staria",
      ],
    },
    faqs: [
      { q: "Can I book a private car with a driver in Jeddah?", a: "Yes. Send the pickup, destination, date, passengers and bags; the quotation names the vehicle and price, and the booking is made when you confirm." },
      { q: "Can I hire a car with a driver in Jeddah for a few hours?", a: "Yes. List your stops and how long you need the car, and the quotation covers the driver waiting between them." },
      { q: "How far is Jeddah airport from Al Balad and the Corniche?", a: "About 26 to 28 km to Al Balad and about 23 km to the Jeddah Waterfront, each roughly 25 to 30 minutes in usual traffic on Google Maps." },
      { q: "Can I book a GMC Yukon or a Staria in Jeddah?", a: "Yes. Ask for a GMC Yukon or another full-size SUV, or a Hyundai Staria for up to 7 passengers with 10 or more bags. Availability is confirmed in the quotation." },
      { q: "Do you collect from the Jeddah Haramain station in Sulaymaniyah?", a: "You can request it with your train number and time. The city station is in Sulaymaniyah; the airport has its own station." },
      { q: "Can I use one booking for a day in Jeddah and then a transfer to Makkah?", a: "Yes. Describe both parts in one enquiry and they are quoted together or separately, as you prefer." },
      { q: "Can you take cruise passengers from the Jeddah Islamic Port to the airport?", a: "You can request it. Give the ship's disembarkation time and your flight, and the plan includes a margin for the port and the 30 km drive." },
      { q: "Which Jeddah areas can you pick up from?", a: "Name the hotel, district or map pin, from Obhur to Al Balad. Availability for that location and date is confirmed in the quotation." },
      { q: "Is the car shared with other passengers in Jeddah?", a: "No. The vehicle and driver are for your party only for the whole booking." },
    ],
  },
  ar: {
    nav: "سيارة مع سائق في جدة",
    title: "سيارة مع سائق في جدة: المطار والمدينة",
    description: "سيارة خاصة مع سائق في جدة: الاستقبال من المطار، والبلد والكورنيش وأبحر والميناء ومحطة قطار الحرمين، والتوصيل إلى مكة والمدينة والطائف. اطلب عرض سعر.",
    h1: "سيارة خاصة مع سائق في جدة، من المطار إلى البلد والكورنيش",
    eyebrow: "النقل داخل المدن · جدة",
    answer:
      "ترتّب RideSaudi عند الطلب سيارة خاصة مع سائق في جدة: الاستقبال من مطار الملك عبدالعزيز، والتنقل بين الفنادق والمكاتب في أنحاء المدينة، ومشاوير البلد والكورنيش، والميناء الإسلامي ومحطة قطار الحرمين، والتوصيل إلى مكة والمدينة والطائف وغيرها. تطلب سيدان أو جمس يوكن أو دفعًا رباعيًا أخرى أو هيونداي ستاريا، وتُسعَّر كل رحلة قبل أن تلتزم.",
    summary: "سيارة خاصة مع سائق في أنحاء جدة: المطار والأحياء والميناء والمحطة والمدن المجاورة.",
    sections: [
      {
        h: "ماذا يمكنك أن تطلب في جدة",
        p: ["تقع طلبات جدة غالبًا ضمن الرحلات التالية. مشاوير المدينة تُخطَّط في هذه الصفحة، ولكل رحلة أطول صفحتها بتفاصيل الطريق والتوقيت واختيار السيارة. ويسمّي كثيرون هذه الخدمة «ليموزين جدة»، وهي هنا سيارة خاصة بحجز مسبق لمجموعتك وحدها."],
        list: [
          "الهبوط في مطار الملك عبدالعزيز الدولي: [التوصيل من مطار جدة](services/airport-transfers/jeddah-airport) إلى أي فندق أو عنوان",
          "التنقل بين الفنادق والمنازل والمكاتب في جدة، من أبحر شمالًا إلى البلد جنوبًا",
          "يوم مع سائق للبلد والكورنيش والمراكز التجارية والاجتماعات، يُسعَّر بعدد الساعات",
          "قطار الحرمين: من محطة جدة في السليمانية أو محطة المطار وإليهما",
          "ركاب الرحلات البحرية في ميناء جدة الإسلامي: [التوصيل من موانئ الرحلات البحرية](services/special-transportation/cruise-port-transfers)",
          "العمرة من فندق في جدة: [من جدة إلى مكة بسيارة خاصة](services/intercity-transfers/jeddah-to-makkah)، على بُعد ساعة تقريبًا",
          "من الطائرة إلى الحرم مباشرة: [من مطار جدة إلى مكة](services/umrah-transport/jeddah-airport-to-makkah)",
          "شمالًا إلى المسجد النبوي: [من جدة إلى المدينة](services/intercity-transfers/jeddah-to-madinah)، نحو 404 كم",
          "إلى الجبال: [من جدة إلى الطائف](services/intercity-transfers/jeddah-to-taif)، نحو 171 كم، أو أبعد إلى [الباحة](services/intercity-transfers/jeddah-to-al-baha)",
          "على الساحل: [مدينة الملك عبدالله الاقتصادية](services/city-transport/king-abdullah-economic-city) و[ينبع](services/intercity-transfers/jeddah-to-yanbu)",
          "الطرق الطويلة: [من جدة إلى الرياض](services/intercity-transfers/jeddah-to-riyadh) و[من جدة إلى العلا](services/intercity-transfers/jeddah-to-alula)",
        ],
      },
      {
        h: "جدة بحسب الأحياء: لماذا يهم العنوان",
        p: [
          "تمتد جدة عشرات الكيلومترات على البحر الأحمر، فالحي يحدد التوقيت أكثر من اسم المدينة. وتضع خرائط جوجل المطار على بُعد نحو 23 كم من واجهة جدة البحرية، ونحو 27 كم من البلد التاريخية، ونحو 29 كم من أبحر الشمالية، أي ما بين 25 و30 دقيقة تقريبًا في الحركة المعتادة.",
          "تتجمع الفنادق على الكورنيش وفي الحمراء وشارع التحلية وحول أحياء الأعمال، بينما تقع منتجعات أبحر وشاليهاتها في الطرف الشمالي. اذكر الفندق أو المبنى بدقة أو أرسل موقعًا على الخريطة، ورتّب المحطات المتعددة بحسب المنطقة حتى لا يعبر السائق المدينة مرتين.",
        ],
      },
      {
        h: "سيدان أم دفع رباعي أم جمس في جدة",
        p: ["اطلب فئة السيارة، فشركاء النقل يوفرون السيارة مع السائق ويذكر عرض السعر المتاح لتاريخك. في يوم العمل تكون السيدان أو الدفع الرباعي التنفيذية هي المعتادة، وللعائلة القادمة بحقائب ستاريا أو دفع رباعي كبيرة. قارن الفئات في [صفحة فئات السيارات](fleet)، أو راجع [سيارات الدفع الرباعي الفاخرة مع سائق](luxury-transportation/luxury-suv) لكبار الضيوف."],
        list: [
          "سيدان (من فئة تويوتا كامري أو هيونداي سوناتا أو فورد توروس): لمسافر أو اثنين والاجتماعات والمشاوير القصيرة",
          "دفع رباعي كبيرة (جمس يوكن أو شفروليه تاهو أو سوبربان): للعائلات والتنفيذيين والطرق الأطول",
          "هيونداي ستاريا: حتى 7 ركاب و10 حقائب أو أكثر",
          "المجموعات الأكبر: سيارتان تسيران معًا في طلب واحد",
        ],
      },
      {
        h: "رحلات العمل والاجتماعات",
        p: ["تحتاج فرق العمل الزائرة كثيرًا إلى سيارة بين المطار والفندق وعدة مكاتب في اليوم نفسه. اذكر العناوين بالترتيب مع مواعيد الاجتماعات، وهل ينتظر السائق بين المحطات. وللسفر المؤسسي المنتظم وكبار الضيوف راجع [سائق خاص لرجال الأعمال](services/chauffeur-services/business-chauffeur)."],
      },
      {
        h: "قطار الحرمين والميناء",
        p: [
          "لقطار الحرمين السريع محطتان في جدة: واحدة في حي السليمانية داخل المدينة، وأخرى في مطار الملك عبدالعزيز الدولي. فإن ركبت القطار إلى مكة أو المدينة من داخل المدينة فالرحلة تبدأ بمشوار عبر جدة إلى السليمانية؛ أرسل موعد القطار ونخطط الاستلام بالرجوع منه.",
          "يبعد ميناء جدة الإسلامي نحو 30 كم عن المطار بالطريق. وتحدد شركات الرحلات البحرية مواعيد الصعود والنزول، فأرسل مواعيد الشركة ورحلتك الجوية ليُبنى التوصيل حولهما.",
        ],
      },
      {
        h: "الأعراس والفعاليات والسهرات",
        p: ["تجلب قاعات الأفراح والحفلات والمهرجانات الموسمية في جدة زحامًا مسائيًا شديدًا وضيوفًا يغادرون معًا. ولعدة سيارات أو مواعيد وصول منسقة أو عودة متأخرة راجع [نقل الفعاليات في جدة](services/event-transportation/jeddah)."],
      },
      {
        h: "زحام المساء والرطوبة",
        p: ["جدة رطبة معظم العام وتزدحم مساءً خاصةً حول الكورنيش وفي ليالي التسوق. أعطنا موعدك لنخطط للانطلاق أبكر مما يوحي به تقدير الطريق الخالي."],
      },
      {
        h: "كيف يصلك عرض السعر",
        p: ["أرسل النموذج أو رسالة واتساب بالتفاصيل أدناه. ويذكر عرض السعر فئة السيارة ونقطة الاستلام والسعر، ولا يُحجز شيء قبل أن تؤكد. ويمكنك الإلغاء قبل موعد الاستلام بـ24 ساعة على الأقل، والدفع برابط دفع أو STC Pay أو نقدًا."],
      },
    ],
    table: {
      h: "رحلات جدة في لمحة",
      head: ["الرحلة", "المسافة البرية التقريبية", "مدة القيادة دون توقف"],
      rows: [
        ["مطار جدة (JED) إلى واجهة جدة البحرية", "نحو 23 كم", "نحو 25 دقيقة"],
        ["مطار جدة إلى البلد", "نحو 26 إلى 28 كم", "نحو 30 دقيقة"],
        ["مطار جدة إلى أبحر الشمالية", "نحو 29 كم", "نحو 25 دقيقة"],
        ["مطار جدة إلى ميناء جدة الإسلامي", "نحو 30 كم", "نحو 30 دقيقة"],
        ["مطار جدة إلى الحرم في مكة", "نحو 98 كم", "نحو ساعة و5 دقائق"],
        ["جدة إلى الطائف", "نحو 171 كم", "نحو ساعتين"],
        ["جدة إلى الباحة", "نحو 387 إلى 394 كم", "نحو 4 ساعات و45 دقيقة"],
        ["جدة إلى المدينة المنورة", "نحو 404 كم", "نحو 4 ساعات"],
        ["جدة إلى الرياض", "نحو 955 كم", "نحو 9 ساعات و50 دقيقة"],
      ],
    },
    checklist: {
      h: "ما الذي تضيفه إلى طلب جدة",
      items: [
        "الاستلام: رقم الرحلة الجوية أو الفندق أو العنوان أو الموقع على الخريطة",
        "الوجهة، أو قائمة المحطات بالترتيب مع أوقاتها",
        "التاريخ ووقت الاستلام، وهل ينتظر السائق",
        "عدد الركاب ومنهم الأطفال وكبار السن",
        "عدد الحقائب الكبيرة والصغيرة",
        "السيارة المفضلة: سيدان أو جمس يوكن أو دفع رباعي أخرى أو هيونداي ستاريا",
      ],
    },
    faqs: [
      { q: "هل يمكنني حجز سيارة خاصة مع سائق في جدة؟", a: "نعم. أرسل نقطة الاستلام والوجهة والتاريخ وعدد الركاب والحقائب، فيذكر عرض السعر السيارة والسعر، ويتم الحجز حين تؤكد." },
      { q: "هل يمكنني استئجار سيارة مع سائق في جدة لعدة ساعات؟", a: "نعم. اذكر محطاتك والمدة التي تحتاج فيها السيارة، ويشمل عرض السعر انتظار السائق بينها." },
      { q: "كم يبعد مطار جدة عن البلد والكورنيش؟", a: "نحو 26 إلى 28 كم إلى البلد ونحو 23 كم إلى واجهة جدة البحرية، أي ما بين 25 و30 دقيقة تقريبًا في الحركة المعتادة بحسب خرائط جوجل." },
      { q: "هل يمكنني طلب جمس يوكن أو ستاريا في جدة؟", a: "نعم. اطلب جمس يوكن أو دفعًا رباعيًا كبيرة أخرى، أو هيونداي ستاريا لما يصل إلى 7 ركاب و10 حقائب أو أكثر. ويُؤكَّد التوفر في عرض السعر." },
      { q: "هل تستقبلون من محطة قطار الحرمين في السليمانية بجدة؟", a: "يمكنك طلب ذلك مع رقم القطار وموعده. محطة المدينة في السليمانية، وللمطار محطته الخاصة." },
      { q: "هل أستخدم حجزًا واحدًا لجولة في جدة ثم توصيل إلى مكة المكرمة؟", a: "نعم. صف الجزأين في طلب واحد ويُسعَّران معًا أو منفصلين بحسب رغبتك." },
      { q: "هل توصلون ركاب الرحلات البحرية من ميناء جدة الإسلامي إلى المطار؟", a: "يمكنك طلب ذلك. أرسل موعد النزول من السفينة وموعد رحلتك، وتشمل الخطة هامشًا للميناء ولمسافة 30 كم تقريبًا." },
      { q: "من أي أحياء جدة يمكنكم الاستلام؟", a: "اذكر الفندق أو الحي أو أرسل موقعًا على الخريطة، من أبحر إلى البلد. وتُؤكَّد الإتاحة لذلك الموقع والتاريخ في عرض السعر." },
      { q: "هل السيارة في جدة مشتركة مع ركاب آخرين؟", a: "لا. السيارة والسائق لمجموعتك وحدها طوال الحجز." },
    ],
  },
};

/* ─────────────────────────── Jeddah airport (JED) ─────────────────────────── */

const jeddahAirport: Record<Locale, Copy> = {
  en: {
    nav: "Jeddah Airport Transfer",
    title: "Jeddah Airport Transfer: Private Car with Driver",
    description: "Pre-book a private car from King Abdulaziz Airport (JED) to a Jeddah hotel, Makkah, Madinah, Taif or further: Terminal 1 or North Terminal, sedan, GMC or Staria.",
    h1: "Jeddah airport transfer by private car, from Terminal 1 or the North Terminal",
    eyebrow: "Airport Transfers · Jeddah (JED)",
    answer:
      "A Jeddah airport transfer is a pre-booked private car with a driver from King Abdulaziz International Airport (JED) to your hotel or address in Jeddah, or straight on to Makkah, Madinah, Taif or another city, and back for your flight home. RideSaudi arranges it on request with a sedan, a GMC Yukon or another SUV, or a Hyundai Staria; the car is for your party only and is quoted before you commit.",
    summary: "Private car from Jeddah airport (JED) to the city, Makkah, Madinah, Taif and beyond, and back.",
    sections: [
      {
        h: "Where people go from Jeddah airport",
        p: ["Many people landing at JED are not staying in Jeddah. Tell us the final destination, because it decides the vehicle, the timing and whether the journey has its own page."],
        list: [
          "A Jeddah hotel or home: about 23 km to the Waterfront, 27 km to Al Balad or 29 km to Obhur; see [Jeddah private car service](services/city-transport/jeddah) for the city",
          "Makkah for Umrah: [Jeddah Airport to Makkah](services/umrah-transport/jeddah-airport-to-makkah), about 98 km",
          "Madinah: [Jeddah to Madinah by private car](services/intercity-transfers/jeddah-to-madinah), about 400 km from the airport",
          "Taif and the mountains: [Jeddah to Taif](services/intercity-transfers/jeddah-to-taif) or further to [Al Baha](services/intercity-transfers/jeddah-to-al-baha)",
          "The north coast: [King Abdullah Economic City](services/city-transport/king-abdullah-economic-city) or [Yanbu](services/intercity-transfers/jeddah-to-yanbu)",
          "The long roads: [AlUla](services/intercity-transfers/jeddah-to-alula), about 665 km, or [Riyadh](services/intercity-transfers/jeddah-to-riyadh)",
          "A ship at the Jeddah Islamic Port, about 30 km away: [cruise port transfers](services/special-transportation/cruise-port-transfers)",
        ],
      },
      {
        h: "Terminal 1, the North Terminal and the Hajj terminal",
        p: ["King Abdulaziz International Airport handles flights through Terminal 1 and the North Terminal, and a separate Hajj terminal is used for pilgrimage flights in season. Which one you land at depends on the airline and the time of year, so send the airline and flight number rather than a terminal guess; the pickup point is confirmed in the quotation."],
      },
      {
        h: "Meeting your driver after landing",
        p: ["Immigration and baggage at JED can take a long time on busy evenings and in the Umrah season. The pickup is planned from your scheduled landing time and the meeting point is agreed in advance. If the flight changes, message us on WhatsApp with the new time. Families arriving with several suitcases should say so, so the vehicle and the meeting point suit the luggage."],
      },
      {
        h: "Which vehicle to request at JED",
        p: ["Arrival day is when luggage peaks. Count every suitcase and cabin bag, and compare the classes on the [vehicle categories page](fleet). Senior guests can ask for a [luxury SUV with driver](luxury-transportation/luxury-suv), and arrivals with a protocol requirement can read [VIP airport transfer](services/airport-transfers/vip-airport-transfer)."],
        list: [
          "Sedan: one or two travellers with light luggage, the usual choice for a city hotel",
          "GMC Yukon or another full-size SUV: families and executives, and longer roads such as Madinah",
          "Hyundai Staria: up to 7 passengers with 10 or more bags",
        ],
      },
      {
        h: "Car or the Haramain train from the airport",
        p: ["The airport has its own Haramain station, so a light traveller heading to Makkah or Madinah can take the train. A private car makes more sense for a family with heavy bags, for elderly travellers, for a hotel that is far from the destination station, or when the train times do not fit your landing. The car goes from the terminal to your hotel without a change."],
      },
      {
        h: "Flying out of Jeddah",
        p: ["For departures, the pickup is planned back from your flight time with a margin for traffic and check-in. Each return journey has its own page: [Makkah to Jeddah Airport](services/intercity-transfers/makkah-to-jeddah), [Madinah to Jeddah Airport](services/intercity-transfers/madinah-to-jeddah), [Taif to Jeddah](services/intercity-transfers/taif-to-jeddah), [Yanbu to Jeddah](services/intercity-transfers/yanbu-to-jeddah) and [Al Baha to Jeddah](services/intercity-transfers/al-baha-to-jeddah)."],
      },
      {
        h: "Families, luggage and late arrivals",
        p: ["Long-haul flights often land with several suitcases and tired children. State the number of passengers and bags so the vehicle can be matched, and mention any child seat you need so availability can be confirmed. For late-night arrivals, include the scheduled time and say whether you would rather rest in Jeddah and continue in the morning."],
      },
      {
        h: "How the quotation works",
        p: ["Send the form or a WhatsApp message with your flight, destination, passengers and bags. The quotation names the vehicle category, the meeting point and the price, and nothing is booked until you confirm. You can cancel at least 24 hours before pickup; payment is by payment link, STC Pay or cash."],
      },
    ],
    table: {
      h: "From Jeddah airport (JED): distances and times",
      head: ["Destination", "Approximate road distance", "Driving time before stops"],
      rows: [
        ["Jeddah Waterfront (Corniche)", "About 23 km", "About 25 min"],
        ["Historic Jeddah (Al Balad)", "About 26 to 28 km", "About 30 min"],
        ["Obhur Al Shamaliyah", "About 29 km", "About 25 min"],
        ["Jeddah Islamic Port", "About 30 km", "About 30 min"],
        ["The Haram area, Makkah", "About 98 km", "About 1 h 5 min"],
        ["Prophet's Mosque area, Madinah", "About 400 km", "About 4 h"],
        ["Al Baha", "About 396 km", "About 4 h 40 min"],
        ["AlUla", "About 665 km", "About 7 h 30 min"],
      ],
    },
    checklist: {
      h: "Include this in your Jeddah airport enquiry",
      items: [
        "Airline, flight number and scheduled landing time",
        "Destination: hotel name, address, or the city for an onward journey",
        "Passengers, including children and elderly travellers",
        "Number of large suitcases and cabin bags, and any child seat",
        "Vehicle preference: sedan, GMC Yukon or other SUV, or Hyundai Staria",
        "Your return flight, if you want the departure arranged too",
      ],
    },
    faqs: [
      { q: "How do I book a private transfer from Jeddah airport?", a: "Send an enquiry with your flight number, arrival time, destination, passengers and bags. RideSaudi replies with a quotation, and the transfer is arranged once you confirm it." },
      { q: "Which terminal should I tell you about?", a: "Give your airline and flight number. JED uses Terminal 1 and the North Terminal, plus a Hajj terminal in season, and the terminal depends on the airline and the date." },
      { q: "How far is Jeddah airport from the city hotels?", a: "About 23 km to the Waterfront, 26 to 28 km to Al Balad and 29 km to Obhur, roughly 25 to 30 minutes in usual traffic on Google Maps." },
      { q: "Can the same driver take me from Jeddah airport to Makkah?", a: "Yes, a direct transfer to Makkah can be requested: about 98 km to the Haram area. Choose Makkah as the destination and the quotation covers the full journey." },
      { q: "Is there a car service from Jeddah airport to Madinah?", a: "Yes. A private car covers about 400 km from the airport to the Prophet's Mosque area, around four hours before stops." },
      { q: "Can I request a GMC Yukon or a Staria at Jeddah airport?", a: "Yes. Ask for a GMC Yukon or another full-size SUV, or a Hyundai Staria for up to 7 passengers with 10 or more bags. Availability is confirmed in the quotation." },
      { q: "What happens if my flight into Jeddah is late?", a: "The pickup is planned from your scheduled landing. Message us on WhatsApp with any change; how a significant delay is handled is set out in your quotation." },
      { q: "Can I arrange both my arrival and departure at Jeddah airport?", a: "Yes. Include both flights in one enquiry, and both journeys are quoted together." },
      { q: "Is the Jeddah airport car private or shared?", a: "Private. The vehicle and driver are for your party only, from the terminal to your destination." },
    ],
  },
  ar: {
    nav: "التوصيل من مطار جدة",
    title: "توصيل وليموزين مطار جدة بسيارة خاصة مع سائق",
    description: "احجز مسبقًا سيارة خاصة من مطار الملك عبدالعزيز (JED) إلى فندقك في جدة أو مكة أو المدينة أو الطائف: الصالة 1 أو الصالة الشمالية، سيدان أو جمس أو ستاريا.",
    h1: "التوصيل من مطار جدة بسيارة خاصة، من الصالة 1 أو الصالة الشمالية",
    eyebrow: "التوصيل من المطارات · جدة (JED)",
    answer:
      "التوصيل من مطار جدة سيارة خاصة مع سائق وبحجز مسبق من مطار الملك عبدالعزيز الدولي (JED) إلى فندقك أو عنوانك في جدة، أو مباشرة إلى مكة أو المدينة أو الطائف أو مدينة أخرى، والعودة للحاق برحلتك. ويسميها كثيرون «ليموزين المطار». ترتّبها RideSaudi عند الطلب بسيارة سيدان أو جمس يوكن أو دفع رباعي أخرى أو هيونداي ستاريا، لمجموعتك وحدها، وتُسعَّر قبل أن تلتزم.",
    summary: "سيارة خاصة من مطار جدة (JED) إلى المدينة ومكة والمدينة المنورة والطائف وما بعدها، والعودة.",
    sections: [
      {
        h: "إلى أين يتجه القادمون من مطار جدة",
        p: ["كثير من الهابطين في مطار جدة لا يقيمون في جدة. أخبرنا بوجهتك النهائية، فهي تحدد السيارة والتوقيت، ولكثير من الرحلات صفحتها الخاصة."],
        list: [
          "فندق أو منزل في جدة: نحو 23 كم إلى الواجهة البحرية و27 كم إلى البلد و29 كم إلى أبحر؛ وراجع [سيارة مع سائق في جدة](services/city-transport/jeddah) لمشاوير المدينة",
          "مكة للعمرة: [من مطار جدة إلى مكة](services/umrah-transport/jeddah-airport-to-makkah)، نحو 98 كم",
          "المدينة المنورة: [من جدة إلى المدينة بسيارة خاصة](services/intercity-transfers/jeddah-to-madinah)، نحو 400 كم من المطار",
          "الطائف والجبال: [من جدة إلى الطائف](services/intercity-transfers/jeddah-to-taif) أو أبعد إلى [الباحة](services/intercity-transfers/jeddah-to-al-baha)",
          "الساحل الشمالي: [مدينة الملك عبدالله الاقتصادية](services/city-transport/king-abdullah-economic-city) أو [ينبع](services/intercity-transfers/jeddah-to-yanbu)",
          "الطرق الطويلة: [العلا](services/intercity-transfers/jeddah-to-alula)، نحو 665 كم، أو [الرياض](services/intercity-transfers/jeddah-to-riyadh)",
          "سفينة في ميناء جدة الإسلامي على بُعد نحو 30 كم: [التوصيل من موانئ الرحلات البحرية](services/special-transportation/cruise-port-transfers)",
        ],
      },
      {
        h: "الصالة 1 والصالة الشمالية وصالة الحج",
        p: ["يخدم مطار الملك عبدالعزيز الدولي الرحلات عبر الصالة 1 والصالة الشمالية، وتُستخدم صالة الحج لرحلات الحجاج في الموسم. وتتوقف صالة وصولك على شركة الطيران ووقت السنة، فأرسل اسم الشركة ورقم الرحلة بدل تخمين الصالة، وتُؤكَّد نقطة الاستلام في عرض السعر."],
      },
      {
        h: "لقاء السائق بعد الهبوط",
        p: ["قد تطول إجراءات الجوازات والحقائب في مطار جدة في الأمسيات المزدحمة وموسم العمرة. يُخطَّط الاستلام من موعد الهبوط المجدول، ويُتفق على نقطة اللقاء مسبقًا. وإن تغيرت الرحلة فراسلنا عبر واتساب بالموعد الجديد. وعلى العائلات القادمة بحقائب كثيرة أن تذكر ذلك لتناسب السيارة ونقطة اللقاء الأمتعة."],
      },
      {
        h: "أي سيارة تطلب من مطار جدة",
        p: ["يوم الوصول هو يوم الحقائب الأكثر. احسب كل حقيبة كبيرة وصغيرة، وقارن الفئات في [صفحة فئات السيارات](fleet). ويمكن لكبار الضيوف طلب [سيارة دفع رباعي فاخرة مع سائق](luxury-transportation/luxury-suv)، ولمن لديه متطلبات بروتوكول راجع [التوصيل الفاخر من المطار](services/airport-transfers/vip-airport-transfer)."],
        list: [
          "سيدان: لمسافر أو اثنين بحقائب خفيفة، وهي المعتادة لفندق داخل المدينة",
          "جمس يوكن أو دفع رباعي كبيرة أخرى: للعائلات والتنفيذيين وللطرق الأطول مثل المدينة",
          "هيونداي ستاريا: حتى 7 ركاب و10 حقائب أو أكثر",
        ],
      },
      {
        h: "السيارة أم قطار الحرمين من المطار",
        p: ["للمطار محطة قطار الحرمين الخاصة به، فيمكن للمسافر الخفيف المتجه إلى مكة أو المدينة أن يركب القطار. وتكون السيارة الخاصة أنسب للعائلة ذات الحقائب الثقيلة، ولكبار السن، وحين يبعد الفندق عن محطة الوصول، أو حين لا تناسب مواعيد القطار موعد هبوطك. فالسيارة تنقلك من الصالة إلى الفندق دون تبديل."],
      },
      {
        h: "المغادرة من مطار جدة",
        p: ["للمغادرة يُخطَّط الاستلام بالرجوع من موعد رحلتك مع هامش للزحام وإجراءات السفر. ولكل رحلة عودة صفحتها: [من مكة إلى مطار جدة](services/intercity-transfers/makkah-to-jeddah)، و[من المدينة إلى مطار جدة](services/intercity-transfers/madinah-to-jeddah)، و[من الطائف إلى جدة](services/intercity-transfers/taif-to-jeddah)، و[من ينبع إلى جدة](services/intercity-transfers/yanbu-to-jeddah)، و[من الباحة إلى جدة](services/intercity-transfers/al-baha-to-jeddah)."],
      },
      {
        h: "العائلات والحقائب والوصول المتأخر",
        p: ["كثيرًا ما تهبط الرحلات الطويلة بحقائب عديدة وأطفال متعبين. اذكر عدد الركاب والحقائب لتُطابَق السيارة، واذكر حاجتك إلى مقعد أطفال ليُؤكَّد توفره. وللوصول في آخر الليل أرسل الموعد المجدول وأخبرنا إن كنت تفضل الراحة في جدة ومواصلة الطريق صباحًا."],
      },
      {
        h: "كيف يصلك عرض السعر",
        p: ["أرسل النموذج أو رسالة واتساب برحلتك ووجهتك وعدد الركاب والحقائب. ويذكر عرض السعر فئة السيارة ونقطة اللقاء والسعر، ولا يُحجز شيء قبل أن تؤكد. ويمكنك الإلغاء قبل موعد الاستلام بـ24 ساعة على الأقل، والدفع برابط دفع أو STC Pay أو نقدًا."],
      },
    ],
    table: {
      h: "من مطار جدة (JED): المسافات والأوقات",
      head: ["الوجهة", "المسافة البرية التقريبية", "مدة القيادة دون توقف"],
      rows: [
        ["واجهة جدة البحرية (الكورنيش)", "نحو 23 كم", "نحو 25 دقيقة"],
        ["جدة التاريخية (البلد)", "نحو 26 إلى 28 كم", "نحو 30 دقيقة"],
        ["أبحر الشمالية", "نحو 29 كم", "نحو 25 دقيقة"],
        ["ميناء جدة الإسلامي", "نحو 30 كم", "نحو 30 دقيقة"],
        ["محيط الحرم في مكة", "نحو 98 كم", "نحو ساعة و5 دقائق"],
        ["محيط المسجد النبوي في المدينة", "نحو 400 كم", "نحو 4 ساعات"],
        ["الباحة", "نحو 396 كم", "نحو 4 ساعات و40 دقيقة"],
        ["العلا", "نحو 665 كم", "نحو 7 ساعات و30 دقيقة"],
      ],
    },
    checklist: {
      h: "ما الذي تضيفه إلى طلب مطار جدة",
      items: [
        "شركة الطيران ورقم الرحلة وموعد الهبوط المجدول",
        "الوجهة: اسم الفندق أو العنوان أو المدينة إن كانت رحلة لاحقة",
        "عدد الركاب ومنهم الأطفال وكبار السن",
        "عدد الحقائب الكبيرة والصغيرة وأي مقعد أطفال",
        "السيارة المفضلة: سيدان أو جمس يوكن أو دفع رباعي أخرى أو هيونداي ستاريا",
        "رحلة العودة إن أردت ترتيب المغادرة أيضًا",
      ],
    },
    faqs: [
      { q: "كيف أحجز توصيلًا خاصًا من مطار جدة؟", a: "أرسل طلبًا برقم الرحلة وموعد الوصول والوجهة وعدد الركاب والحقائب. فيصلك عرض سعر من RideSaudi، ويُرتَّب التوصيل بعد أن تؤكده." },
      { q: "عن أي صالة يجب أن أخبركم؟", a: "أرسل اسم شركة الطيران ورقم الرحلة. يستخدم مطار جدة الصالة 1 والصالة الشمالية، وصالة الحج في الموسم، وتتوقف الصالة على الشركة والتاريخ." },
      { q: "كم يبعد مطار جدة عن فنادق المدينة؟", a: "نحو 23 كم إلى الواجهة البحرية، و26 إلى 28 كم إلى البلد، و29 كم إلى أبحر، أي ما بين 25 و30 دقيقة تقريبًا في الحركة المعتادة بحسب خرائط جوجل." },
      { q: "هل يمكن للسائق نفسه أن يوصلني من مطار جدة إلى مكة؟", a: "نعم، يمكن طلب توصيل مباشر إلى مكة: نحو 98 كم إلى محيط الحرم. اختر مكة وجهةً ويشمل عرض السعر الرحلة كاملة." },
      { q: "هل يوجد ليموزين من مطار جدة إلى المدينة المنورة؟", a: "نعم، سيارة خاصة مع سائق تقطع نحو 400 كم من المطار إلى محيط المسجد النبوي، أي نحو أربع ساعات دون توقف." },
      { q: "هل يمكنني طلب جمس يوكن أو ستاريا من مطار جدة؟", a: "نعم. اطلب جمس يوكن أو دفعًا رباعيًا كبيرة أخرى، أو هيونداي ستاريا لما يصل إلى 7 ركاب و10 حقائب أو أكثر. ويُؤكَّد التوفر في عرض السعر." },
      { q: "ماذا يحدث إن تأخرت رحلتي إلى جدة؟", a: "يُخطَّط الاستلام من موعد الهبوط المجدول. راسلنا عبر واتساب بأي تغيير، وتُذكر طريقة التعامل مع التأخير الكبير في عرض السعر." },
      { q: "هل يمكنني ترتيب الوصول والمغادرة معًا في مطار جدة؟", a: "نعم. اذكر الرحلتين في طلب واحد، وتُسعَّر الرحلتان معًا." },
      { q: "هل سيارة مطار جدة خاصة أم مشتركة؟", a: "خاصة. السيارة والسائق لمجموعتك وحدها من الصالة إلى وجهتك." },
    ],
  },
};

/* ─────────────────────────── New routes: Jeddah ⇄ Al Baha ─────────────────────────── */

const routeFaqsCancel = {
  en: (r: string) => ({ q: `Can I cancel a ${r} booking, and how do I pay?`, a: "You can cancel at least 24 hours before pickup. Payment is by payment link, STC Pay or cash; other terms are stated in the quotation." }),
  ar: (r: string) => ({ q: `هل يمكنني إلغاء حجز ${r}، وكيف أدفع؟`, a: "يمكنك الإلغاء قبل موعد الاستلام بـ24 ساعة على الأقل. والدفع برابط دفع أو STC Pay أو نقدًا، وتُذكر الشروط الأخرى في عرض السعر." }),
};

export const jeddahToAlBaha: ServicePage = {
  path: `${I}/jeddah-to-al-baha`,
  parent: I,
  variant: "default",
  service: "intercity",
  related: [`${I}/al-baha-to-jeddah`, `${C}/al-baha`, `${I}/jeddah-to-taif`, `${S}/tourism-transport/taif`, `${A}/jeddah-airport`, `${C}/jeddah`, `${I}/jeddah-to-abha`, "fleet"],
  updated: U,
  copy: {
    en: {
      nav: "Jeddah to Al Baha",
      title: "Jeddah to Al Baha Private Car with Driver",
      description: "Private car with a driver from Jeddah or its airport up to Al Baha: about 390 km, under five hours, by the coast road or the highland road through Taif.",
      h1: "Jeddah to Al Baha by private car, up to the Sarawat mountains",
      eyebrow: "Intercity · Jeddah → Al Baha",
      answer:
        "A private Jeddah to Al Baha transfer is a pre-booked car with a driver from a Jeddah address or King Abdulaziz Airport up to Al Baha in the Sarawat mountains. Google Maps measures about 387 to 394 km and roughly 4 hours 45 minutes before stops, by the coast road or the highland road through Taif. The car is for your party only, and RideSaudi quotes it before you commit.",
      summary: "Private car from Jeddah up to Al Baha, about 390 km and under five hours, by coast or via Taif.",
      sections: [
        {
          h: "Why people drive up from Jeddah",
          p: ["Al Baha draws families from Jeddah for its cooler air, forests and old stone villages, especially in the summer holidays and at Eid. Most visitors without their own car come through Jeddah, because Al Baha's own airport has few flights. A private car takes the family, the bags and the picnic gear from the door in Jeddah to the hotel or chalet in Al Baha."],
        },
        {
          h: "Two roads up the escarpment",
          p: [
            "Google Maps offers two routes from historic Jeddah. The coast road (Route 5) runs south along the Red Sea for about 394 km, around 4 hours 42 minutes, before climbing the escarpment to Al Baha. The highland road (Route 15) goes inland through Taif and along the mountain ridge for about 387 km, around 4 hours 49 minutes.",
            "The highland road makes a natural break in Taif: lunch, prayer, or a night before continuing. If you want to see Taif properly on the way, read [Jeddah to Taif](services/intercity-transfers/jeddah-to-taif) and [Taif sightseeing transport](services/tourism-transport/taif), and tell us which road you prefer; otherwise the driver takes the better one on the day.",
          ],
        },
        {
          h: "Starting at Jeddah airport",
          p: ["Many visitors land at JED and drive straight up. The road from the airport is close to 400 km, so a late-evening landing is often better followed by a night in Jeddah and a morning start. Send the flight number; the pickup at the terminal is planned from the landing time. Our [Jeddah airport transfers page](services/airport-transfers/jeddah-airport) covers terminals and meeting points."],
        },
        {
          h: "Mountain roads, mist and rain",
          p: ["The last part of either road climbs steeply, and the highlands around Al Baha are known for mist and rain in the wetter months. Drivers slow down in poor visibility, so allow extra time rather than holding a tight arrival, and tell us if anyone in the party gets car sick on winding roads so breaks can be planned."],
        },
        {
          h: "Arriving in Al Baha",
          p: ["Give the hotel, chalet or village name, because the region spreads across valleys and ridges. Once you are there, Raghadan Forest Park is about 4 to 5 km from the centre and the old village of Dhee Ain about 24 km away; [Al Baha city transport](services/city-transport/al-baha) covers getting around and day visits."],
        },
        {
          h: "Which vehicle for a mountain trip",
          p: ["For a family on hill roads, room and comfort matter as much as seats. State every passenger and bag; the quotation confirms the vehicle."],
          list: [
            "Sedan: a couple or two to three adults with light luggage",
            "Toyota Prado, GMC Yukon or Chevrolet Tahoe: a family who wants space on the climb",
            "Hyundai Staria: up to 7 passengers with 10 or more bags",
          ],
        },
        {
          h: "Going further south",
          p: ["Al Baha sits on the highland road towards Asir, so some travellers continue to Abha. Ask for the whole itinerary in one enquiry, or see [Jeddah to Abha](services/intercity-transfers/jeddah-to-abha) if Abha is the main destination."],
        },
      ],
      table: {
        h: "Jeddah to Al Baha route facts",
        head: ["Detail", "Jeddah to Al Baha"],
        rows: [
          ["Coast road (Route 5)", "About 394 km, about 4 h 42 min from historic Jeddah"],
          ["Highland road via Taif (Route 15)", "About 387 km, about 4 h 49 min"],
          ["From Jeddah airport (JED)", "About 396 km, about 4 h 40 min"],
          ["Natural break", "Taif, on the highland road"],
          ["Pickup", "Your Jeddah hotel, home or the airport"],
          ["Drop-off", "Your hotel or chalet in Al Baha"],
          ["Shared seats", "None. One vehicle for your party only"],
        ],
      },
      checklist: {
        h: "Include this in your Jeddah to Al Baha enquiry",
        items: [
          "Pickup address in Jeddah, or your flight into JED",
          "Hotel, chalet or village in Al Baha",
          "Date, departure time and preferred road (coast or via Taif)",
          "Passengers, including children and elderly travellers",
          "Number of suitcases and any bulky items",
          "Whether you want the return to Jeddah quoted too",
        ],
      },
      faqs: [
        { q: "How far is Al Baha from Jeddah by road?", a: "About 387 km via Taif (Route 15) or about 394 km by the coast road (Route 5) from historic Jeddah, on Google Maps." },
        { q: "How long does a private car take from Jeddah to Al Baha?", a: "Around 4 hours 45 minutes of driving before stops, longer with a break in Taif or in mist on the mountain sections." },
        { q: "Which is better from Jeddah to Al Baha, the coast road or via Taif?", a: "They take about the same time. The Taif road gives a natural stop halfway; the coast road avoids the mountain ridge until the final climb. Tell us your preference." },
        { q: "Can you pick us up at Jeddah airport and drive to Al Baha?", a: "Yes. Send the flight number; the drive from the airport is about 396 km. For a late landing, a night in Jeddah first is often easier." },
        { q: "Can we stop in Taif on the way to Al Baha?", a: "Yes. Ask for the stop and how long you want there, and it is built into the quotation." },
        { q: "Is the car from Jeddah to Al Baha shared?", a: "No. The vehicle and driver are for your party only." },
        routeFaqsCancel.en("Jeddah to Al Baha"),
      ],
    },
    ar: {
      nav: "جدة إلى الباحة",
      title: "توصيل من جدة إلى الباحة بسيارة خاصة",
      description: "سيارة خاصة مع سائق من جدة أو مطارها صعودًا إلى الباحة: نحو 390 كم وأقل من خمس ساعات، عبر الطريق الساحلي أو طريق الجبال مرورًا بالطائف.",
      h1: "من جدة إلى الباحة بسيارة خاصة، صعودًا إلى جبال السروات",
      eyebrow: "بين المدن · جدة ← الباحة",
      answer:
        "التوصيل الخاص من جدة إلى الباحة سيارة مع سائق وبحجز مسبق من عنوانك في جدة أو مطار الملك عبدالعزيز صعودًا إلى الباحة في جبال السروات. تقيس خرائط جوجل نحو 387 إلى 394 كم، أي قرابة 4 ساعات و45 دقيقة دون توقف، عبر الطريق الساحلي أو طريق الجبال مرورًا بالطائف. والسيارة لمجموعتك وحدها، وتُسعِّرها RideSaudi قبل أن تلتزم.",
      summary: "سيارة خاصة من جدة صعودًا إلى الباحة، نحو 390 كم وأقل من خمس ساعات، عبر الساحل أو الطائف.",
      sections: [
        {
          h: "لماذا يصعد الناس من جدة إلى الباحة",
          p: ["تجذب الباحة العائلات من جدة بأجوائها الباردة وغاباتها وقراها الحجرية القديمة، خاصة في الإجازة الصيفية والأعياد. وأغلب الزوار الذين لا يملكون سيارة يمرون بجدة، لأن رحلات مطار الباحة قليلة. فتنقل السيارة الخاصة العائلة وحقائبها وأغراض الرحلة من الباب في جدة إلى الفندق أو الشاليه في الباحة."],
        },
        {
          h: "طريقان لصعود الجبل",
          p: [
            "تعرض خرائط جوجل طريقين من جدة التاريخية. الطريق الساحلي (الطريق 5) يتجه جنوبًا بمحاذاة البحر الأحمر نحو 394 كم، أي قرابة 4 ساعات و42 دقيقة، ثم يصعد العقبة إلى الباحة. أما طريق الجبال (الطريق 15) فيتجه شرقًا عبر الطائف ثم على امتداد السروات نحو 387 كم، أي قرابة 4 ساعات و49 دقيقة.",
            "يجعل طريق الجبال من الطائف محطة طبيعية: غداء أو صلاة أو مبيت قبل المواصلة. وإن أردت أن ترى الطائف في طريقك فراجع [من جدة إلى الطائف](services/intercity-transfers/jeddah-to-taif) و[النقل السياحي في الطائف](services/tourism-transport/taif)، وأخبرنا بالطريق الذي تفضله، وإلا اختار السائق الأنسب في يومها.",
          ],
        },
        {
          h: "الانطلاق من مطار جدة",
          p: ["يهبط كثير من الزوار في مطار جدة ويصعدون مباشرة. والطريق من المطار قرابة 400 كم، فالهبوط في آخر المساء يحسن أن يتبعه مبيت في جدة وانطلاق صباحي. أرسل رقم الرحلة ويُخطَّط الاستلام من الصالة وفق موعد الهبوط. وتشرح [صفحة التوصيل من مطار جدة](services/airport-transfers/jeddah-airport) الصالات ونقاط اللقاء."],
        },
        {
          h: "طرق الجبال والضباب والمطر",
          p: ["يصعد الجزء الأخير من كلا الطريقين بانحدار حاد، وتُعرف مرتفعات الباحة بالضباب والأمطار في الأشهر الماطرة. ويخفف السائقون السرعة عند ضعف الرؤية، فاترك وقتًا إضافيًا بدل التمسك بموعد وصول ضيق، وأخبرنا إن كان أحد المسافرين يتعب من الطرق المتعرجة لنخطط الاستراحات."],
        },
        {
          h: "الوصول إلى الباحة",
          p: ["اذكر اسم الفندق أو الشاليه أو القرية، فالمنطقة تمتد عبر أودية وقمم. وبعد وصولك تبعد غابة رغدان نحو 4 إلى 5 كم عن المركز، وقرية ذي عين الأثرية نحو 24 كم؛ وتغطي صفحة [النقل في الباحة](services/city-transport/al-baha) التنقل والزيارات اليومية."],
        },
        {
          h: "أي سيارة لرحلة جبلية",
          p: ["في طرق الجبال تهم المساحة والراحة بقدر المقاعد. اذكر كل راكب وكل حقيبة، ويؤكد عرض السعر السيارة."],
          list: [
            "سيدان: لزوجين أو لاثنين إلى ثلاثة بالغين بحقائب خفيفة",
            "تويوتا برادو أو جمس يوكن أو شفروليه تاهو: لعائلة تريد مساحة في الصعود",
            "هيونداي ستاريا: حتى 7 ركاب و10 حقائب أو أكثر",
          ],
        },
        {
          h: "المواصلة جنوبًا",
          p: ["تقع الباحة على طريق المرتفعات المتجه إلى عسير، فيواصل بعض المسافرين إلى أبها. اطلب البرنامج كاملًا في طلب واحد، أو راجع [من جدة إلى أبها](services/intercity-transfers/jeddah-to-abha) إن كانت أبها وجهتك الرئيسة."],
        },
      ],
      table: {
        h: "حقائق طريق جدة إلى الباحة",
        head: ["التفصيل", "جدة إلى الباحة"],
        rows: [
          ["الطريق الساحلي (الطريق 5)", "نحو 394 كم، نحو 4 ساعات و42 دقيقة من جدة التاريخية"],
          ["طريق الجبال عبر الطائف (الطريق 15)", "نحو 387 كم، نحو 4 ساعات و49 دقيقة"],
          ["من مطار جدة (JED)", "نحو 396 كم، نحو 4 ساعات و40 دقيقة"],
          ["الاستراحة الطبيعية", "الطائف، على طريق الجبال"],
          ["الاستلام", "فندقك أو منزلك في جدة أو المطار"],
          ["النزول", "فندقك أو الشاليه في الباحة"],
          ["مقاعد مشتركة", "لا. سيارة واحدة لمجموعتك وحدها"],
        ],
      },
      checklist: {
        h: "ما الذي تضيفه إلى طلب جدة إلى الباحة",
        items: [
          "عنوان الاستلام في جدة أو رحلتك إلى مطار جدة",
          "الفندق أو الشاليه أو القرية في الباحة",
          "التاريخ ووقت الانطلاق والطريق المفضل (الساحل أو الطائف)",
          "عدد الركاب ومنهم الأطفال وكبار السن",
          "عدد الحقائب وأي أغراض كبيرة",
          "هل تريد تسعير العودة إلى جدة أيضًا",
        ],
      },
      faqs: [
        { q: "كم المسافة بين جدة والباحة بالسيارة؟", a: "نحو 387 كم عبر الطائف (الطريق 15) أو نحو 394 كم بالطريق الساحلي (الطريق 5) من جدة التاريخية، بحسب خرائط جوجل." },
        { q: "كم تستغرق السيارة الخاصة من جدة إلى الباحة؟", a: "قرابة 4 ساعات و45 دقيقة من القيادة دون توقف، وأطول مع استراحة في الطائف أو مع الضباب في المقاطع الجبلية." },
        { q: "أيهما أفضل من جدة إلى الباحة: طريق الساحل أم طريق الطائف؟", a: "مدتهما متقاربة. طريق الطائف يمنحك محطة في منتصف الطريق، والطريق الساحلي يتجنب الجبال حتى الصعود الأخير. أخبرنا بما تفضله." },
        { q: "هل تستقبلوننا من مطار جدة وتوصلوننا إلى الباحة؟", a: "نعم. أرسل رقم الرحلة؛ فالمسافة من المطار نحو 396 كم. وللهبوط المتأخر يكون المبيت في جدة أولًا أسهل غالبًا." },
        { q: "هل يمكننا التوقف في الطائف في الطريق إلى الباحة؟", a: "نعم. اطلب الوقفة والمدة التي تريدها، وتُضمَّن في عرض السعر." },
        { q: "هل السيارة من جدة إلى الباحة مشتركة؟", a: "لا. السيارة والسائق لمجموعتك وحدها." },
        routeFaqsCancel.ar("جدة إلى الباحة"),
      ],
    },
  },
};

export const alBahaToJeddah: ServicePage = {
  path: `${I}/al-baha-to-jeddah`,
  parent: I,
  variant: "default",
  service: "intercity",
  related: [`${I}/jeddah-to-al-baha`, `${C}/al-baha`, `${A}/jeddah-airport`, `${C}/jeddah`, `${I}/taif-to-jeddah`, `${I}/abha-to-jeddah`, "fleet"],
  updated: U,
  copy: {
    en: {
      nav: "Al Baha to Jeddah",
      title: "Al Baha to Jeddah Airport Private Car",
      description: "Private car with a driver from your Al Baha hotel down to Jeddah airport or any Jeddah address: about 396 km and 4 h 40 min via Route 15, planned from your flight.",
      h1: "Al Baha to Jeddah by private car, down the mountains to your flight",
      eyebrow: "Intercity · Al Baha → Jeddah",
      answer:
        "A private Al Baha to Jeddah transfer is a pre-booked car with a driver from your hotel or chalet in Al Baha down to King Abdulaziz International Airport or a Jeddah address. Google Maps measures about 396 km and 4 hours 37 minutes to the airport via Route 15, before stops. The car is for your party only, and the departure is planned back from your flight time.",
      summary: "Private car from Al Baha down to Jeddah airport or the city, about 396 km, timed to your flight.",
      sections: [
        {
          h: "The end of a mountain holiday",
          p: ["Most people on this road are going home: a Jeddah family returning after a summer week in the cool air, or visitors from abroad heading for a flight at JED. The car collects you at the hotel or chalet with the whole party and every bag, and nobody else on board."],
        },
        {
          h: "Working back from your flight",
          p: ["With close to five hours on the road and a mountain descent at the start, the flight time decides everything. Give the flight number and departure time; the pickup is proposed with the drive, a prayer and meal stop, and a margin for check-in at JED. For an early-morning flight, many families come down the evening before and spend the night in Jeddah."],
        },
        {
          h: "The road down to the coast",
          p: ["Google Maps measures about 396 km from Al Baha to the airport via Route 15, around 4 hours 37 minutes, passing Taif on the way down; another variant via the 4th Ring Road is about 411 km. The first section winds off the escarpment, and morning mist in the wetter months can slow it, which is one more reason to keep a margin."],
        },
        {
          h: "Into Jeddah rather than the airport",
          p: ["If you are going home or to a hotel, give the district or a map pin: Jeddah stretches a long way along the coast, from Al Balad in the south to Obhur in the north. Moving around the city afterwards is covered on [Jeddah private car service](services/city-transport/jeddah)."],
        },
        {
          h: "A last morning in Al Baha, or a stop in Taif",
          p: ["Some families want one more visit before leaving, such as Raghadan Forest Park near the centre; others want lunch in Taif on the way down. Say so in the enquiry and the departure is planned around it. If Taif is where you are starting from instead, see [Taif to Jeddah](services/intercity-transfers/taif-to-jeddah)."],
        },
        {
          h: "Choosing the vehicle",
          p: ["Holiday luggage often grows on the way home. State every passenger and bag; the quotation confirms the vehicle. A sedan suits two or three adults with light bags, a Toyota Prado, GMC Yukon or Chevrolet Tahoe suits a family, and a Hyundai Staria takes up to 7 passengers with 10 or more bags. Classes are compared on the [vehicle categories page](fleet)."],
        },
      ],
      table: {
        h: "Al Baha to Jeddah route facts",
        head: ["Detail", "Al Baha to Jeddah"],
        rows: [
          ["To Jeddah airport (JED)", "About 396 km, about 4 h 37 min via Route 15 (Google Maps, November 2026)"],
          ["Alternative variant", "About 411 km via the 4th Ring Road"],
          ["To historic Jeddah", "About 387 to 394 km depending on the road"],
          ["On the way", "Taif, a natural place for lunch or prayer"],
          ["Pickup", "Your hotel or chalet in Al Baha"],
          ["Drop-off", "Your JED terminal, or a Jeddah address"],
          ["Shared seats", "None. One vehicle for your party only"],
        ],
      },
      checklist: {
        h: "Include this in your Al Baha to Jeddah enquiry",
        items: [
          "Hotel, chalet or village in Al Baha and your check-out time",
          "Flight number and departure time, or the Jeddah address",
          "Date, and any visit or stop you want before or on the way",
          "Passengers, including children and elderly travellers",
          "Number of suitcases and bulky items",
        ],
      },
      faqs: [
        { q: "How far is Jeddah airport from Al Baha?", a: "About 396 km via Route 15 on Google Maps, around 4 hours 37 minutes of driving before stops." },
        { q: "What time should I leave Al Baha for a flight from Jeddah?", a: "Allow the drive of about 4 h 40 min, a meal and prayer stop, the mountain descent and check-in time. Send the flight time and we propose the pickup." },
        { q: "Can we stay in Jeddah the night before an early flight?", a: "Yes. Ask for a drop-off at a Jeddah hotel the evening before, and a separate airport transfer in the morning if you need one." },
        { q: "Can we stop for lunch in Taif on the way down to Jeddah?", a: "Yes. The usual road passes Taif; ask for the stop and it is built into the timing." },
        { q: "Is the car from Al Baha to Jeddah private?", a: "Yes. The vehicle and driver are for your party only, from your Al Baha hotel to the airport or your Jeddah address." },
        routeFaqsCancel.en("Al Baha to Jeddah"),
      ],
    },
    ar: {
      nav: "الباحة إلى جدة",
      title: "توصيل من الباحة إلى مطار جدة بسيارة خاصة",
      description: "سيارة خاصة مع سائق من فندقك في الباحة نزولًا إلى مطار جدة أو أي عنوان في جدة: نحو 396 كم و4 ساعات و40 دقيقة عبر الطريق 15، بتوقيت يُحسب من رحلتك.",
      h1: "من الباحة إلى جدة بسيارة خاصة، نزولًا من الجبال إلى رحلتك",
      eyebrow: "بين المدن · الباحة ← جدة",
      answer:
        "التوصيل الخاص من الباحة إلى جدة سيارة مع سائق وبحجز مسبق من فندقك أو الشاليه في الباحة نزولًا إلى مطار الملك عبدالعزيز الدولي أو عنوان في جدة. تقيس خرائط جوجل نحو 396 كم و4 ساعات و37 دقيقة إلى المطار عبر الطريق 15 دون توقف. والسيارة لمجموعتك وحدها، ويُخطَّط الانطلاق بالرجوع من موعد رحلتك.",
      summary: "سيارة خاصة من الباحة نزولًا إلى مطار جدة أو المدينة، نحو 396 كم، بتوقيت يناسب رحلتك.",
      sections: [
        {
          h: "نهاية إجازة في الجبال",
          p: ["أغلب من يسلك هذا الطريق عائد إلى بيته: عائلة من جدة تعود بعد أسبوع صيفي في الأجواء الباردة، أو زوار من الخارج متجهون إلى رحلة من مطار جدة. تستلمكم السيارة من الفندق أو الشاليه مع الجميع وكل الحقائب، ولا أحد غيركم فيها."],
        },
        {
          h: "الحساب بالرجوع من موعد رحلتك",
          p: ["مع قرابة خمس ساعات على الطريق ونزول جبلي في البداية، يحدد موعد الرحلة كل شيء. أرسل رقم الرحلة وموعد إقلاعها، فيُقترح وقت الاستلام مع احتساب الطريق ووقفة للصلاة والطعام وهامش لإجراءات السفر في مطار جدة. ولرحلة الصباح الباكر تنزل عائلات كثيرة في المساء السابق وتبيت في جدة."],
        },
        {
          h: "الطريق نزولًا إلى الساحل",
          p: ["تقيس خرائط جوجل نحو 396 كم من الباحة إلى المطار عبر الطريق 15، أي قرابة 4 ساعات و37 دقيقة، مرورًا بالطائف في الطريق؛ وهناك مسار آخر عبر الطريق الدائري الرابع بنحو 411 كم. ويلتف الجزء الأول نزولًا من العقبة، وقد يبطئه ضباب الصباح في الأشهر الماطرة، وهذا سبب آخر لترك هامش."],
        },
        {
          h: "إلى داخل جدة لا إلى المطار",
          p: ["إن كنت عائدًا إلى بيتك أو إلى فندق فاذكر الحي أو أرسل موقعًا على الخريطة، فجدة ممتدة على الساحل من البلد جنوبًا إلى أبحر شمالًا. وللتنقل داخل المدينة بعد ذلك راجع [سيارة مع سائق في جدة](services/city-transport/jeddah)."],
        },
        {
          h: "صباح أخير في الباحة أو وقفة في الطائف",
          p: ["تريد بعض العائلات زيارة أخيرة قبل المغادرة، مثل غابة رغدان قرب المركز، ويريد آخرون الغداء في الطائف أثناء النزول. اذكر ذلك في الطلب ليُخطَّط الانطلاق حوله. وإن كانت الطائف نقطة انطلاقك فراجع [من الطائف إلى جدة](services/intercity-transfers/taif-to-jeddah)."],
        },
        {
          h: "اختيار السيارة",
          p: ["كثيرًا ما تكبر أمتعة الإجازة في طريق العودة. اذكر كل راكب وكل حقيبة، ويؤكد عرض السعر السيارة. تناسب السيدان اثنين أو ثلاثة بالغين بحقائب خفيفة، وتناسب تويوتا برادو أو جمس يوكن أو شفروليه تاهو العائلة، وتتسع هيونداي ستاريا حتى 7 ركاب و10 حقائب أو أكثر. وتجد المقارنة في [صفحة فئات السيارات](fleet)."],
        },
      ],
      table: {
        h: "حقائق طريق الباحة إلى جدة",
        head: ["التفصيل", "الباحة إلى جدة"],
        rows: [
          ["إلى مطار جدة (JED)", "نحو 396 كم، نحو 4 ساعات و37 دقيقة عبر الطريق 15 (خرائط جوجل، نوفمبر 2026)"],
          ["مسار بديل", "نحو 411 كم عبر الطريق الدائري الرابع"],
          ["إلى جدة التاريخية", "نحو 387 إلى 394 كم بحسب الطريق"],
          ["في الطريق", "الطائف، مكان مناسب للغداء أو الصلاة"],
          ["الاستلام", "فندقك أو الشاليه في الباحة"],
          ["النزول", "صالتك في مطار جدة، أو عنوان في جدة"],
          ["مقاعد مشتركة", "لا. سيارة واحدة لمجموعتك وحدها"],
        ],
      },
      checklist: {
        h: "ما الذي تضيفه إلى طلب الباحة إلى جدة",
        items: [
          "الفندق أو الشاليه أو القرية في الباحة وموعد الخروج",
          "رقم الرحلة وموعد الإقلاع، أو العنوان في جدة",
          "التاريخ، وأي زيارة أو وقفة تريدها قبل الانطلاق أو في الطريق",
          "عدد الركاب ومنهم الأطفال وكبار السن",
          "عدد الحقائب والأغراض الكبيرة",
        ],
      },
      faqs: [
        { q: "كم يبعد مطار جدة عن الباحة؟", a: "نحو 396 كم عبر الطريق 15 بحسب خرائط جوجل، أي قرابة 4 ساعات و37 دقيقة من القيادة دون توقف." },
        { q: "متى أغادر الباحة للحاق برحلة من جدة؟", a: "احسب الطريق نحو 4 ساعات و40 دقيقة، ووقفة للطعام والصلاة، والنزول الجبلي، ووقت إجراءات السفر. أرسل موعد الرحلة ونقترح وقت الاستلام." },
        { q: "هل يمكننا المبيت في جدة قبل رحلة الصباح الباكر؟", a: "نعم. اطلب النزول في فندق بجدة في المساء السابق، وتوصيلًا منفصلًا إلى المطار صباحًا إن احتجت." },
        { q: "هل يمكننا التوقف للغداء في الطائف أثناء النزول إلى جدة؟", a: "نعم. يمر الطريق المعتاد بالطائف؛ اطلب الوقفة وتُضمَّن في التوقيت." },
        { q: "هل السيارة من الباحة إلى جدة خاصة؟", a: "نعم. السيارة والسائق لمجموعتك وحدها من فندقك في الباحة إلى المطار أو عنوانك في جدة." },
        routeFaqsCancel.ar("الباحة إلى جدة"),
      ],
    },
  },
};

/* ─────────────────────────── Patches to thin Jeddah routes ─────────────────────────── */

type Table = { h: string; head: string[]; rows: string[][] };
type Sec = { h: string; p: string[]; list?: string[] };
type RoutePatch = Record<Locale, { replace?: Record<number, string[]>; table: Table; sections?: Sec[]; faqs: { q: string; a: string }[] }>;

const routePatches: Record<string, RoutePatch> = {
  [`${I}/jeddah-to-yanbu`]: {
    en: {
      replace: { 1: ["Most people start either at King Abdulaziz International Airport or at a hotel or home in Jeddah. The road runs north along the Red Sea coast past Rabigh and the turn for King Abdullah Economic City. By Google Maps it is about 324 km and just over three hours between Yanbu Al Bahr and JED, and about 343 km to historic Al Balad in the south of the city. If you land late in the evening, tell us your flight number so the pickup can be planned around the arrival time."] },
      table: {
        h: "Jeddah to Yanbu route facts",
        head: ["Detail", "Jeddah to Yanbu"],
        rows: [
          ["From Jeddah airport (JED)", "About 324 km, about 3 h 5 min (Google Maps)"],
          ["From historic Jeddah (Al Balad)", "About 343 km, about 3 h 35 min"],
          ["Road", "The coastal highway north, past Rabigh and the KAEC turn"],
          ["Two destinations", "Yanbu Al Bahr town, or the industrial city and port"],
          ["Shared seats", "None. One vehicle for your party only"],
        ],
      },
      sections: [{ h: "Stopping at KAEC on the way", p: ["King Abdullah Economic City lies on the same coastal road, so a meeting or a site visit there can be added as a stop. See [King Abdullah Economic City transport](services/city-transport/king-abdullah-economic-city) for what to send for a KAEC pickup or drop-off."] }],
      faqs: [
        { q: "How far is Yanbu from Jeddah airport?", a: "About 324 km on the coastal highway, just over three hours of driving before stops, on Google Maps." },
        { q: "Can I stop at KAEC between Jeddah and Yanbu?", a: "Yes. KAEC is on the same coastal road; ask for the stop and how long you need there." },
      ],
    },
    ar: {
      replace: { 1: ["ينطلق أغلب المسافرين من مطار الملك عبدالعزيز الدولي أو من فندق أو منزل في جدة. ويسير الطريق شمالًا على ساحل البحر الأحمر مرورًا برابغ ومخرج مدينة الملك عبدالله الاقتصادية. وبحسب خرائط جوجل تبلغ المسافة نحو 324 كم وما يزيد قليلًا على ثلاث ساعات بين ينبع البحر ومطار جدة، ونحو 343 كم إلى البلد التاريخية جنوب المدينة. وإن وصلت متأخرًا مساءً فأخبرنا برقم رحلتك ليُرتَّب الاستلام وفق موعد وصولك."] },
      table: {
        h: "حقائق طريق جدة إلى ينبع",
        head: ["التفصيل", "جدة إلى ينبع"],
        rows: [
          ["من مطار جدة (JED)", "نحو 324 كم، نحو 3 ساعات و5 دقائق (خرائط جوجل)"],
          ["من جدة التاريخية (البلد)", "نحو 343 كم، نحو 3 ساعات و35 دقيقة"],
          ["الطريق", "الطريق الساحلي شمالًا مرورًا برابغ ومخرج المدينة الاقتصادية"],
          ["وجهتان", "بلدة ينبع البحر، أو المدينة الصناعية والميناء"],
          ["مقاعد مشتركة", "لا. سيارة واحدة لمجموعتك وحدها"],
        ],
      },
      sections: [{ h: "التوقف في المدينة الاقتصادية في الطريق", p: ["تقع مدينة الملك عبدالله الاقتصادية على الطريق الساحلي نفسه، فيمكن إضافة اجتماع أو زيارة موقع فيها كوقفة. وراجع [النقل إلى مدينة الملك عبدالله الاقتصادية](services/city-transport/king-abdullah-economic-city) لما ترسله للاستلام أو النزول هناك."] }],
      faqs: [
        { q: "كم تبعد ينبع عن مطار جدة؟", a: "نحو 324 كم على الطريق الساحلي، أي ما يزيد قليلًا على ثلاث ساعات من القيادة دون توقف بحسب خرائط جوجل." },
        { q: "هل يمكنني التوقف في المدينة الاقتصادية بين جدة وينبع؟", a: "نعم. تقع المدينة الاقتصادية على الطريق الساحلي نفسه؛ اطلب الوقفة والمدة التي تحتاجها." },
      ],
    },
  },
  [`${I}/jeddah-to-alula`]: {
    en: {
      replace: { 0: ["Jeddah to AlUla is a full day of travel by road, not an afternoon drive. Google Maps gives two routes from King Abdulaziz Airport: about 665 km and 7 hours 31 minutes up the coast through Yanbu and then inland on Route 328, or about 724 km and 7 hours 26 minutes inland on Route 15 through Madinah. Many travellers weigh the drive against a domestic flight to AlUla. If you choose the road, plan the day around it and avoid fixed same-day commitments at the other end."] },
      table: {
        h: "Jeddah to AlUla route facts",
        head: ["Detail", "Jeddah to AlUla"],
        rows: [
          ["Coast and Route 328 (via Yanbu)", "About 665 km from JED, about 7 h 30 min (Google Maps)"],
          ["Inland on Route 15 (via Madinah)", "About 724 km, about 7 h 25 min"],
          ["Natural breaks", "Yanbu on the coast road; Madinah on the inland road"],
          ["Split option", "A night in Madinah, then about 338 km on to AlUla"],
          ["Shared seats", "None. One vehicle for your party only"],
        ],
      },
      sections: [{ h: "Coast road or via Madinah", p: ["The inland road passes Madinah, so some travellers pray at the Prophet's Mosque and stay a night before the last leg; that second day is the same road as [Madinah to AlUla](services/intercity-transfers/madinah-to-alula). The coast road suits travellers who want to stop in [Yanbu](services/intercity-transfers/jeddah-to-yanbu) instead. Say which you prefer and the quotation follows it."] }],
      faqs: [
        { q: "How far is AlUla from Jeddah airport by road?", a: "About 665 km via the coast and Route 328, or about 724 km inland via Madinah, each around seven and a half hours before stops on Google Maps." },
        { q: "Can we break the Jeddah to AlUla drive with a night in Madinah?", a: "Yes. Ask for the overnight stop and the two days are quoted together; the second leg from Madinah is about 338 km." },
      ],
    },
    ar: {
      replace: { 0: ["جدة إلى العلا يوم سفر كامل بالسيارة لا قيادة عصر. وتعرض خرائط جوجل طريقين من مطار الملك عبدالعزيز: نحو 665 كم و7 ساعات و31 دقيقة شمالًا على الساحل عبر ينبع ثم داخلًا على الطريق 328، أو نحو 724 كم و7 ساعات و26 دقيقة داخلًا على الطريق 15 عبر المدينة المنورة. ويوازن كثيرون بين القيادة والطيران الداخلي إلى العلا. وإن اخترت الطريق البري فخطط يومك حوله وتجنب التزامات ثابتة في اليوم نفسه عند الوصول."] },
      table: {
        h: "حقائق طريق جدة إلى العلا",
        head: ["التفصيل", "جدة إلى العلا"],
        rows: [
          ["الساحل ثم الطريق 328 (عبر ينبع)", "نحو 665 كم من مطار جدة، نحو 7 ساعات و30 دقيقة (خرائط جوجل)"],
          ["داخلًا على الطريق 15 (عبر المدينة)", "نحو 724 كم، نحو 7 ساعات و25 دقيقة"],
          ["الاستراحات الطبيعية", "ينبع على الطريق الساحلي، والمدينة على الطريق الداخلي"],
          ["خيار التقسيم", "مبيت في المدينة ثم نحو 338 كم إلى العلا"],
          ["مقاعد مشتركة", "لا. سيارة واحدة لمجموعتك وحدها"],
        ],
      },
      sections: [{ h: "طريق الساحل أم عبر المدينة", p: ["يمر الطريق الداخلي بالمدينة المنورة، فيصلي بعض المسافرين في المسجد النبوي ويبيتون ليلة قبل المرحلة الأخيرة؛ وهذا اليوم الثاني هو طريق [المدينة إلى العلا](services/intercity-transfers/madinah-to-alula) نفسه. ويناسب الطريق الساحلي من يريد التوقف في [ينبع](services/intercity-transfers/jeddah-to-yanbu). أخبرنا بما تفضله ويتبعه عرض السعر."] }],
      faqs: [
        { q: "كم تبعد العلا عن مطار جدة بالسيارة؟", a: "نحو 665 كم عبر الساحل والطريق 328، أو نحو 724 كم داخلًا عبر المدينة، وكلاهما قرابة سبع ساعات ونصف دون توقف بحسب خرائط جوجل." },
        { q: "هل يمكن تقسيم طريق جدة إلى العلا بمبيت في المدينة المنورة؟", a: "نعم. اطلب المبيت ويُسعَّر اليومان معًا، والمرحلة الثانية من المدينة نحو 338 كم." },
      ],
    },
  },
  [`${I}/jeddah-to-riyadh`]: {
    en: {
      table: {
        h: "Jeddah to Riyadh route facts",
        head: ["Detail", "Jeddah to Riyadh"],
        rows: [
          ["Road distance", "About 955 km, historic Jeddah to King Abdullah Financial District (Google Maps)"],
          ["Driving time", "About 9 h 50 min before stops, mostly on Route 40"],
          ["Natural break", "Taif, early in the journey, or a night on the way"],
          ["Starting points", "Your Jeddah address or King Abdulaziz Airport (JED)"],
          ["Shared seats", "None. One vehicle for your party only"],
        ],
      },
      sections: [{ h: "Families moving between the two cities", p: ["A common reason for this road is a family moving house or returning after a long stay, with more luggage than an airline allows. Count every suitcase and box, and ask for a Hyundai Staria (up to 7 passengers with 10 or more bags) or a full-size SUV such as a GMC Yukon; compare them on the [vehicle categories page](fleet). For the opposite direction, see [Riyadh to Jeddah](services/intercity-transfers/riyadh-to-jeddah)."] }],
      faqs: [
        { q: "Which vehicle suits a family driving from Jeddah to Riyadh with a lot of luggage?", a: "Usually a Hyundai Staria, which takes up to 7 passengers with 10 or more bags, or a GMC Yukon for more comfort. Availability is confirmed in the quotation." },
      ],
    },
    ar: {
      table: {
        h: "حقائق طريق جدة إلى الرياض",
        head: ["التفصيل", "جدة إلى الرياض"],
        rows: [
          ["المسافة البرية", "نحو 955 كم من جدة التاريخية إلى مركز الملك عبدالله المالي (خرائط جوجل)"],
          ["مدة القيادة", "نحو 9 ساعات و50 دقيقة دون توقف، معظمها على الطريق 40"],
          ["الاستراحة الطبيعية", "الطائف في بداية الرحلة، أو مبيت في الطريق"],
          ["نقاط الانطلاق", "عنوانك في جدة أو مطار الملك عبدالعزيز (JED)"],
          ["مقاعد مشتركة", "لا. سيارة واحدة لمجموعتك وحدها"],
        ],
      },
      sections: [{ h: "عائلات تنتقل بين المدينتين", p: ["من الأسباب الشائعة لهذا الطريق عائلة تنقل سكنها أو تعود بعد إقامة طويلة بأمتعة تفوق ما تسمح به شركات الطيران. احسب كل حقيبة وصندوق، واطلب هيونداي ستاريا (حتى 7 ركاب و10 حقائب أو أكثر) أو دفعًا رباعيًا كبيرة مثل جمس يوكن؛ وقارن بينها في [صفحة فئات السيارات](fleet). وللاتجاه المعاكس راجع [من الرياض إلى جدة](services/intercity-transfers/riyadh-to-jeddah)."] }],
      faqs: [
        { q: "أي سيارة تناسب عائلة مسافرة من جدة إلى الرياض بحقائب كثيرة؟", a: "غالبًا هيونداي ستاريا وتتسع حتى 7 ركاب و10 حقائب أو أكثر، أو جمس يوكن لراحة أكبر. ويُؤكَّد التوفر في عرض السعر." },
      ],
    },
  },
};

const relatedAdds: Record<string, string[]> = {
  [`${C}/jeddah`]: [`${A}/jeddah-airport`, `${I}/jeddah-to-madinah`, `${I}/jeddah-to-taif`, `${I}/jeddah-to-al-baha`, `${UM}/jeddah-airport-to-makkah`, "fleet"],
  [`${A}/jeddah-airport`]: [`${C}/jeddah`, `${I}/jeddah-to-makkah`, `${I}/jeddah-to-madinah`, `${I}/jeddah-to-taif`, `${I}/jeddah-to-al-baha`, `${I}/al-baha-to-jeddah`, `${S}/special-transportation/cruise-port-transfers`],
  [`${C}/al-baha`]: [`${I}/jeddah-to-al-baha`, `${I}/al-baha-to-jeddah`],
  [`${I}/jeddah-to-taif`]: [`${I}/jeddah-to-al-baha`],
  [`${I}/taif-to-jeddah`]: [`${I}/al-baha-to-jeddah`],
  [`${I}/jeddah-to-abha`]: [`${I}/jeddah-to-al-baha`],
  [`${I}/abha-to-jeddah`]: [`${I}/al-baha-to-jeddah`],
  [`${I}/jeddah-to-yanbu`]: [`${I}/jeddah-to-alula`],
  [`${I}/jeddah-to-alula`]: [`${I}/jeddah-to-yanbu`, `${C}/jeddah`],
  [`${I}/jeddah-to-riyadh`]: ["fleet"],
  [`${S}/special-transportation/cruise-port-transfers`]: [`${C}/jeddah`],
};

export function applyJeddahCluster(pages: ServicePage[]) {
  const byPath = new Map(pages.map((p) => [p.path, p]));
  const get = (path: string) => {
    const p = byPath.get(path);
    if (!p) throw new Error(`jeddah-cluster: unknown page ${path}`);
    return p;
  };

  for (const [path, copy] of [[`${C}/jeddah`, jeddahHub], [`${A}/jeddah-airport`, jeddahAirport]] as const) {
    const p = get(path);
    p.copy = copy;
    p.updated = U;
  }

  for (const [path, patch] of Object.entries(routePatches)) {
    const p = get(path);
    for (const l of ["en", "ar"] as Locale[]) {
      const x = patch[l];
      const c = p.copy[l];
      for (const [i, paras] of Object.entries(x.replace ?? {})) {
        if (!c.sections[Number(i)]) throw new Error(`jeddah-cluster: ${path}/${l} has no section ${i}`);
        c.sections[Number(i)].p = paras;
      }
      c.table = x.table;
      c.sections.push(...(x.sections ?? []));
      c.faqs.push(...x.faqs);
    }
    p.updated = U;
  }

  for (const [path, targets] of Object.entries(relatedAdds)) {
    const p = get(path);
    for (const t of targets) {
      get(t);
      if (t !== path && !p.related.includes(t)) p.related.push(t);
    }
  }
}
