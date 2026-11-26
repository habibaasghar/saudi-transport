import type { BlogPost } from "./types";

const S = "services";
const D = "2026-11-18";

/**
 * Guide C1: Jeddah airport to Makkah options (informational; the booking intent stays on
 * services/umrah-transport/jeddah-airport-to-makkah).
 * Sources checked 2026-11-18:
 * - Saudipedia, "Haramain High Speed Railway": five stations; KAIA is a terminal station; the Makkah station is
 *   in al-Rusaifa, about 3 km from the Grand Mosque.
 * - Asharq Al-Awsat, 2 June 2025: hourly Haramain trips from King Abdulaziz International Airport to Makkah
 *   (Hajj season).
 * - Road: about 98 km between JED and the Masjid al-Haram area, about 1 h 05 min without stops
 *   (Google Maps, measured Makkah to the airport, November 2026; see makkah-to-jeddah page).
 * Not stated (could not be verified from official sources): train journey time, timetables, fares,
 * bus operators, bus fares, taxi fares, shuttle schedules.
 */
export const jeddahAirportMakkahPost: BlogPost = {
  slug: "jeddah-airport-to-makkah-train-bus-taxi-private-car",
  published: D,
  updated: D,
  links: [
    `${S}/umrah-transport/jeddah-airport-to-makkah`,
    `${S}/airport-transfers/jeddah-airport`,
    `${S}/umrah-transport/family-umrah-transport`,
    `${S}/city-transport/makkah`,
    `${S}/intercity-transfers/makkah-to-jeddah`,
    `${S}/intercity-transfers/makkah-to-madinah`,
    `${S}/umrah-transport`,
  ],
  copy: {
    en: {
      nav: "Jeddah airport to Makkah: your options",
      title: "Jeddah Airport to Makkah: Train, Bus or Car?",
      description: "Compare the Haramain train, intercity bus, app cars and a pre-booked private car from Jeddah airport to Makkah: who each suits and what to check first.",
      h1: "Jeddah airport to Makkah: train, bus or private car?",
      answer:
        "From King Abdulaziz International Airport in Jeddah you can reach Makkah by the Haramain train, an intercity bus, a taxi or ride-hailing car, or a pre-booked private car. The train is quick but stops about 3 km from the Haram, so you need onward transport. A private car goes about 98 km door to door, around an hour without traffic, and suits families with luggage.",
      summary: "Four ways from Jeddah airport to Makkah, compared honestly, with what to check before you land.",
      sections: [
        {
          h: "Why this leg needs a plan",
          p: [
            "Makkah has no commercial airport, so most international Umrah travellers land at King Abdulaziz International Airport in Jeddah and continue by land. The leg is short, but it comes straight after a long flight, often at night, with luggage, family members and sometimes elderly relatives. The best option depends less on speed than on how many changes of vehicle your group can manage once you are tired.",
          ],
        },
        {
          h: "Option 1: the Haramain train",
          p: [
            "The Haramain High Speed Railway has a station at King Abdulaziz International Airport, one of its three terminal stations, and runs to Makkah, Jeddah city, King Abdullah Economic City and Madinah. During Hajj season Saudi Arabian Railways has run hourly trips from the airport to Makkah.",
            "The point people miss is the last stretch. The Makkah station is in the al-Rusaifa district, about 3 km from the Masjid al-Haram, so you still need a taxi, a shuttle or a pickup to reach your hotel. Check the current timetable, fares and luggage allowance on the official Saudi Arabian Railways channels before you travel, because they change by season.",
          ],
          list: [
            "Suits: solo travellers and couples with light luggage who are comfortable changing vehicle once more in Makkah",
            "Check: the timetable for your arrival time, the luggage allowance, and how you will get from the Makkah station to your hotel",
          ],
        },
        {
          h: "Option 2: intercity bus",
          p: [
            "Coach services run between Jeddah and Makkah, and pilgrim shuttle programmes have operated from the airport in some seasons. Operators, departure points, schedules and eligibility change, so confirm the current service with the operator before you rely on it, and find out where in Makkah the bus stops.",
          ],
          list: [
            "Suits: budget-minded travellers with time to spare and manageable luggage",
            "Check: who operates the service now, where it leaves from at the airport, and where it drops you in Makkah",
          ],
        },
        {
          h: "Option 3: taxi or ride-hailing",
          p: [
            "Taxis wait at the airport and ride-hailing apps operate in Jeddah, so you can take a car on arrival without booking ahead. That is flexible, but the vehicle is whatever arrives: you may not get the space you need for a family and several large suitcases, and at peak arrival times you may wait. Agree the destination clearly, and use only licensed airport taxis or a recognised app.",
          ],
          list: [
            "Suits: small groups who arrive at a quiet time and do not mind the vehicle being decided on the spot",
            "Check: that the car can fit everyone and every bag before you set off",
          ],
        },
        {
          h: "Option 4: a pre-booked private car",
          p: [
            "A private car is booked before you fly, with the vehicle chosen for your group: a sedan, a GMC Yukon or a Hyundai Staria. The driver meets you at the airport and drives about 98 km on Route 40, roughly an hour without traffic, to the nearest point to your hotel that vehicle access allows. There is no change of vehicle on the way and no waiting for others.",
            "It is not the cheapest option for one person, and the train can be quicker on board. It earns its place for families, elderly travellers, groups with a lot of luggage, late-night arrivals and anyone who wants one journey from the terminal to the hotel. Prices are quoted per journey, so ask for a quotation and compare it with the total cost of the other options for everyone in your group.",
          ],
        },
        {
          h: "Arriving in Makkah: the drop-off near the Haram",
          p: [
            "Whichever option you choose, vehicle access close to the Masjid al-Haram is restricted at busy times. Cars and buses may not be able to stop at your hotel door, and a short walk with luggage may be needed. Ask your hotel for its recommended drop-off point before you travel; it is the most useful single detail for this journey. Entry to Makkah is for Muslims only.",
          ],
        },
        {
          h: "How to choose in one minute",
          p: ["Ask yourself three questions, in this order:"],
          list: [
            "How many changes of vehicle can your group manage after the flight? If the answer is none, book a door-to-door car",
            "How much luggage do you have? Large suitcases for several people favour a car chosen in advance",
            "What time do you land? Check that the train or bus runs at that hour before planning around it",
          ],
        },
      ],
      table: {
        h: "The four options side by side",
        head: ["Option", "Door to door?", "Best for", "Check before you travel"],
        rows: [
          ["Haramain train", "No: Makkah station is about 3 km from the Haram", "Light luggage, comfortable with one more change", "Timetable, luggage allowance, onward transfer"],
          ["Intercity bus", "No: depends on the stop", "Budget, flexible timing", "Current operator, departure point, Makkah stop"],
          ["Taxi or ride-hailing", "Yes", "Small groups at quiet times", "Vehicle size for your bags, licensed taxi or app"],
          ["Pre-booked private car", "Yes, to the nearest point access allows", "Families, elderly travellers, lots of luggage, late arrivals", "Flight number, hotel drop-off point, quotation"],
        ],
      },
      faqs: [
        { q: "How far is Makkah from Jeddah airport?", a: "About 98 km by road between King Abdulaziz International Airport and the Masjid al-Haram area, around 1 hour 5 minutes without stops (Google Maps, November 2026)." },
        { q: "Does the Haramain train stop at Jeddah airport?", a: "Yes. King Abdulaziz International Airport is one of the railway's terminal stations. Check the timetable for your arrival time on the official Saudi Arabian Railways channels." },
        { q: "Does the train take me to the Haram?", a: "No. The Makkah station is in al-Rusaifa, about 3 km from the Masjid al-Haram, so you need onward transport to your hotel." },
        { q: "Is a private car faster than the train?", a: "Not usually on board. The car avoids the change at the Makkah station and the transfer to your hotel, which matters most for families with luggage." },
        { q: "Can I book a private car before I land?", a: "Yes. Send your flight number, passengers, bags and Makkah hotel for a quotation on the Jeddah airport to Makkah page." },
      ],
    },
    ar: {
      nav: "من مطار جدة إلى مكة: الخيارات",
      title: "مطار جدة إلى مكة: القطار أم الحافلة أم السيارة؟",
      description: "قارن بين قطار الحرمين والحافلة وسيارات التطبيقات والسيارة الخاصة المحجوزة مسبقًا من مطار جدة إلى مكة: لمن يناسب كل خيار وما الذي تتحقق منه أولًا.",
      h1: "من مطار جدة إلى مكة: القطار أم الحافلة أم سيارة خاصة؟",
      answer:
        "من مطار الملك عبدالعزيز الدولي في جدة تصل إلى مكة بقطار الحرمين أو بالحافلة أو بالتاكسي وتطبيقات التوصيل أو بسيارة خاصة تحجزها مسبقًا. القطار سريع لكنه يتوقف على بعد نحو 3 كم من الحرم فتحتاج إلى وسيلة أخرى بعده. أما السيارة الخاصة فتقطع نحو 98 كم من الباب إلى الباب في قرابة ساعة دون زحام، وتناسب العائلات مع الحقائب.",
      summary: "أربع طرق من مطار جدة إلى مكة، بمقارنة صادقة، مع ما تتحقق منه قبل أن تهبط.",
      sections: [
        {
          h: "لماذا تحتاج هذه المرحلة إلى تخطيط",
          p: [
            "لا يوجد في مكة مطار تجاري، لذلك يهبط معظم المعتمرين القادمين من الخارج في مطار الملك عبدالعزيز الدولي بجدة ثم يكملون برًّا. المسافة قصيرة، لكنها تأتي مباشرة بعد رحلة طيران طويلة، وغالبًا ليلًا، ومعك حقائب وأفراد العائلة وربما كبار السن. والخيار الأنسب لا يتحدد بالسرعة بقدر ما يتحدد بعدد المرات التي تستطيع فيها مجموعتك تبديل الوسيلة وهي متعبة.",
          ],
        },
        {
          h: "الخيار الأول: قطار الحرمين",
          p: [
            "لقطار الحرمين السريع محطة في مطار الملك عبدالعزيز الدولي، وهي إحدى محطاته الطرفية الثلاث، ويصل إلى مكة ومحطة جدة والمدينة الاقتصادية والمدينة المنورة. وفي موسم الحج سيّرت الخطوط الحديدية السعودية رحلات كل ساعة من المطار إلى مكة.",
            "والنقطة التي يغفل عنها كثيرون هي الجزء الأخير: فمحطة مكة في حي الرصيفة على بعد نحو 3 كم من المسجد الحرام، فتحتاج بعدها إلى تاكسي أو حافلة ترددية أو من يستقبلك حتى الفندق. وتحقق من مواعيد القطار وأسعاره وحد الأمتعة عبر القنوات الرسمية للخطوط الحديدية السعودية قبل السفر، لأنها تتغير بحسب الموسم.",
          ],
          list: [
            "يناسب: المسافر المنفرد والزوجين بحقائب خفيفة ممن لا يمانعون تبديل الوسيلة مرة أخرى في مكة",
            "تحقق من: موعد قطار يناسب وقت وصولك، وحد الأمتعة، وكيف ستصل من محطة مكة إلى فندقك",
          ],
        },
        {
          h: "الخيار الثاني: الحافلات بين المدن",
          p: [
            "تعمل خدمات حافلات بين جدة ومكة، كما شُغّلت في بعض المواسم حافلات ترددية للمعتمرين من المطار. وتتغير الجهات المشغّلة ونقاط الانطلاق والمواعيد وشروط الاستفادة، فتأكد من الخدمة الحالية لدى المشغّل قبل الاعتماد عليها، واعرف أين تتوقف الحافلة في مكة.",
          ],
          list: [
            "يناسب: من يريد التوفير ولديه وقت كافٍ وحقائب معقولة",
            "تحقق من: الجهة المشغّلة حاليًا، ونقطة الانطلاق في المطار، ومكان النزول في مكة",
          ],
        },
        {
          h: "الخيار الثالث: التاكسي أو تطبيقات التوصيل",
          p: [
            "تنتظر سيارات الأجرة في المطار، وتعمل تطبيقات التوصيل في جدة، فيمكنك أخذ سيارة عند الوصول دون حجز مسبق. وهذا مرن، لكن السيارة هي ما يصلك: فقد لا تتسع لعائلة وعدة حقائب كبيرة، وقد تنتظر في أوقات ذروة الوصول. اتفق على الوجهة بوضوح، واستخدم سيارات الأجرة المرخصة في المطار أو تطبيقًا معروفًا فقط.",
          ],
          list: [
            "يناسب: المجموعات الصغيرة التي تصل في وقت هادئ ولا تمانع أن تُحدَّد السيارة في حينه",
            "تحقق من: أن السيارة تتسع للجميع ولكل الحقائب قبل الانطلاق",
          ],
        },
        {
          h: "الخيار الرابع: سيارة خاصة محجوزة مسبقًا",
          p: [
            "تُحجز السيارة الخاصة قبل سفرك، وتُختار لمجموعتك: سيدان أو جمس يوكن أو هيونداي ستاريا. يستقبلك السائق في المطار ويقطع نحو 98 كم عبر طريق 40، أي قرابة ساعة دون زحام، حتى أقرب نقطة لفندقك يسمح بها دخول السيارات. لا تبديل للوسيلة في الطريق ولا انتظار لركاب آخرين.",
            "وليست الخيار الأرخص لشخص واحد، وقد يكون القطار أسرع في زمن الرحلة نفسها. لكنها تثبت جدواها للعائلات وكبار السن والمجموعات ذات الحقائب الكثيرة والقادمين في وقت متأخر ليلًا، ولكل من يريد رحلة واحدة من الصالة إلى الفندق. وتُسعَّر كل رحلة على حدة، فاطلب عرض سعر وقارنه بالتكلفة الكاملة للخيارات الأخرى لكل أفراد مجموعتك.",
          ],
        },
        {
          h: "عند الوصول إلى مكة: النزول قرب الحرم",
          p: [
            "أيًّا كان خيارك، يُقيَّد دخول السيارات قرب المسجد الحرام في أوقات الذروة، فقد لا تستطيع السيارة أو الحافلة التوقف عند باب الفندق وقد تحتاج إلى مشي قصير مع حقائبك. اسأل فندقك قبل السفر عن نقطة النزول التي يوصي بها، فهي أهم معلومة في هذه الرحلة. ودخول مكة مقصور على المسلمين.",
          ],
        },
        {
          h: "كيف تختار في دقيقة",
          p: ["اسأل نفسك ثلاثة أسئلة بهذا الترتيب:"],
          list: [
            "كم مرة تستطيع مجموعتك تبديل الوسيلة بعد الرحلة؟ إن كان الجواب ولا مرة، فاحجز سيارة من الباب إلى الباب",
            "كم حقيبة معك؟ الحقائب الكبيرة لعدة أشخاص ترجّح سيارة تُختار مسبقًا",
            "متى تهبط؟ تأكد أن القطار أو الحافلة يعمل في تلك الساعة قبل أن تبني خطتك عليه",
          ],
        },
      ],
      table: {
        h: "الخيارات الأربعة جنبًا إلى جنب",
        head: ["الخيار", "من الباب إلى الباب؟", "الأنسب لـ", "تحقق قبل السفر من"],
        rows: [
          ["قطار الحرمين", "لا: محطة مكة على بعد نحو 3 كم من الحرم", "حقائب خفيفة وقبول تبديل الوسيلة مرة أخرى", "المواعيد وحد الأمتعة والتنقل بعد المحطة"],
          ["الحافلة بين المدن", "لا: بحسب مكان التوقف", "التوفير والمرونة في الوقت", "المشغّل الحالي ونقطة الانطلاق ومكان النزول في مكة"],
          ["التاكسي أو التطبيقات", "نعم", "المجموعات الصغيرة في الأوقات الهادئة", "اتساع السيارة لحقائبك، وتاكسي مرخص أو تطبيق معروف"],
          ["سيارة خاصة محجوزة مسبقًا", "نعم، حتى أقرب نقطة يسمح بها الدخول", "العائلات وكبار السن والحقائب الكثيرة والوصول المتأخر", "رقم الرحلة ونقطة النزول عند الفندق وعرض السعر"],
        ],
      },
      faqs: [
        { q: "كم المسافة من مطار جدة إلى مكة؟", a: "نحو 98 كم بالطريق بين مطار الملك عبدالعزيز الدولي ومنطقة المسجد الحرام، أي قرابة ساعة و5 دقائق بلا توقف (خرائط Google، نوفمبر 2026)." },
        { q: "هل يتوقف قطار الحرمين في مطار جدة؟", a: "نعم. مطار الملك عبدالعزيز الدولي إحدى المحطات الطرفية للقطار. تحقق من موعد يناسب وقت وصولك عبر القنوات الرسمية للخطوط الحديدية السعودية." },
        { q: "هل يوصلني القطار إلى الحرم؟", a: "لا. محطة مكة في حي الرصيفة على بعد نحو 3 كم من المسجد الحرام، فتحتاج إلى وسيلة أخرى حتى فندقك." },
        { q: "هل السيارة الخاصة أسرع من القطار؟", a: "ليست أسرع عادةً في زمن الرحلة نفسها، لكنها تغنيك عن التبديل في محطة مكة والتنقل منها إلى الفندق، وهذا أهم ما يكون للعائلات مع الحقائب." },
        { q: "هل يمكنني حجز سيارة خاصة قبل أن أهبط؟", a: "نعم. أرسل رقم رحلتك وعدد الركاب والحقائب واسم فندقك في مكة لتحصل على عرض سعر من صفحة التوصيل من مطار جدة إلى مكة." },
      ],
    },
  },
};
