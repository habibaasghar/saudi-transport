import type { ServicePage } from "../types";

const U = "2026-11-15";
const I = "services/intercity-transfers";
const A = "services/airport-transfers";
const C = "services/city-transport";
const T = "services/tourism-transport";
const M = "services/umrah-transport";

/**
 * Reverse-direction pages for routes that previously had only one combined page: Madinah to Jeddah,
 * Yanbu to Jeddah, Taif to Jeddah and Abha to Riyadh. Distances are approximate public figures
 * checked 2026-11-15: Madinah to Jeddah about 405 to 425 km, about 4 h; Yanbu to Jeddah about
 * 337 km, about 3 h 20 min; Taif to Jeddah about 163 to 169 km, under 2 h; Abha to Riyadh about
 * 880 to 950 km, about 9 to 10 h on the main roads (a Saudi Roads Authority figure of 882 km via
 * Al-Rayn and Bisha was reported; third-party figures vary and longer alternatives exist).
 */
export const reversePages: ServicePage[] = [
  {
    path: `${I}/madinah-to-jeddah`,
    parent: I,
    variant: "umrah",
    service: "intercity",
    related: [`${I}/jeddah-to-madinah`, `${I}/madinah-to-makkah`, `${M}/madinah-ziyarat`, `${A}/madinah-airport`, `${A}/jeddah-airport`, `${C}/madinah`],
    updated: U,
    copy: {
      en: {
        nav: "Madinah to Jeddah",
        title: "Madinah to Jeddah Private Car: Camry, Yukon or Staria",
        description: "Request a private car with a driver from your Madinah hotel to Jeddah or King Abdulaziz Airport after Ziyarat. Sedan, GMC Yukon, Tahoe or Hyundai Staria, quoted per trip.",
        h1: "Madinah to Jeddah by private car, timed for your flight home",
        eyebrow: "Intercity · Madinah to Jeddah",
        answer: "A private Madinah to Jeddah transfer is a pre-booked car with a driver from your Madinah hotel to Jeddah or King Abdulaziz Airport, usually at the end of a Ziyarat stay. Public sources put the road at about 405 to 425 km, around four hours before stops. RideSaudi quotes each journey individually and plans the departure backwards from your flight.",
        summary: "A private car from Madinah to Jeddah, planned backwards from your departure flight.",
        sections: [
          { h: "The end of a Madinah stay, with a flight to catch", p: ["Most people leaving Madinah for Jeddah are on the way home or onward: a departure from King Abdulaziz Airport, a connection, or the second half of an Umrah itinerary. Give us your flight time and the check-in time you are aiming for, and we count back through the drive, a prayer or meal stop and the morning at the hotel. Allow a margin; a four-hour road should not be run close to a departure. Travelling the other way? See Jeddah to Madinah."] },
          { h: "Leaving hotels around the Prophet's Mosque", p: ["Streets near the mosque are restricted around prayer times and busy seasons, so the pickup is arranged for a quiet window and an agreed gate or entrance. Send the hotel name, your room count and how many large bags are coming down. If you want a last Ziyarat stop on the morning you leave, ask for it in the same enquiry; see Madinah Ziyarat."] },
          { h: "Road or high-speed train", p: ["The Haramain high-speed railway also links Madinah and the Jeddah area, so a train is a real alternative if you travel light and your hotel is near a station. A private car goes hotel to hotel or hotel to terminal with your luggage, lets you stop when an elderly parent or a child needs it, and does not tie you to a station timetable."] },
          { h: "Choosing the vehicle", p: ["A sedan such as a Toyota Camry, Hyundai Sonata or Ford Taurus suits one or two travellers with ordinary luggage. Families usually request a GMC Yukon or Chevrolet Tahoe for the extra room, and larger families or small groups with many bags request a Hyundai Staria. The model and its availability for your date are confirmed in the quotation, subject to partner availability."] },
        ],
        checklist: { h: "Include this in your Madinah to Jeddah enquiry", items: ["Flight time from Jeddah and the check-in time you want", "Madinah hotel, preferred gate and pickup time", "Whether you want a last Ziyarat stop", "Passengers, elderly travellers, wheelchair or stroller", "Number of large bags", "Vehicle: sedan, GMC Yukon, Chevrolet Tahoe or Hyundai Staria"] },
        faqs: [
          { q: "Can I book a private car from Madinah to Jeddah Airport?", a: "Yes, you can request one. Send your flight time and hotel; we plan the departure and confirm availability in the quotation before anything is arranged." },
          { q: "How far is Madinah from Jeddah by road?", a: "Public sources give about 405 to 425 km and around four hours of driving before stops." },
          { q: "How early should we leave Madinah for an international flight?", a: "Work back from check-in with a generous margin for the road, a stop and morning traffic. We agree the time with you in the quotation." },
          { q: "Can we visit Ziyarat sites before leaving Madinah?", a: "You can ask for Ziyarat stops before the journey, and they are quoted together with the transfer." },
          { q: "Is the train or a private car better from Madinah to Jeddah?", a: "The train is quick between stations. A private car is door to door, carries your bags with you and stops when your group needs it." },
        ],
      },
      ar: {
        nav: "المدينة إلى جدة",
        title: "من المدينة المنورة إلى جدة بسيارة خاصة: كامري أو يوكن أو ستاريا",
        description: "اطلب سيارة بسائق من فندقك في المدينة المنورة إلى جدة أو مطار الملك عبدالعزيز بعد الزيارة. سيدان أو جمس يوكن أو تاهو أو هيونداي ستاريا بسعر لكل رحلة.",
        h1: "من المدينة المنورة إلى جدة بسيارة خاصة، بوقت محسوب على رحلة عودتك",
        eyebrow: "بين المدن · المدينة إلى جدة",
        answer: "التوصيل الخاص من المدينة المنورة إلى جدة هو سيارة بسائق وبحجز مسبق من فندقك في المدينة إلى جدة أو مطار الملك عبدالعزيز، وغالبًا في ختام إقامة الزيارة. وتقدّر مصادر عامة الطريق بنحو 405 إلى 425 كم، أي قرابة أربع ساعات قبل التوقفات. تُسعِّر RideSaudi كل رحلة على حدة وتحسب الانطلاق عكسيًا من موعد رحلتك.",
        summary: "سيارة خاصة من المدينة المنورة إلى جدة، يُحسب انطلاقها عكسيًا من موعد رحلتك.",
        sections: [
          { h: "نهاية إقامة المدينة ومعها رحلة طيران", p: ["أغلب من يغادرون المدينة إلى جدة في طريق العودة أو المواصلة: إقلاع من مطار الملك عبدالعزيز أو ربط برحلة أخرى أو النصف الثاني من برنامج عمرة. أخبرنا بموعد رحلتك ووقت إنهاء الإجراءات الذي تريده، ونحسب عكسيًا عبر الطريق وتوقف الصلاة أو الوجبة وصباح الفندق. واترك هامشًا؛ فطريق من أربع ساعات لا يُترك لآخر لحظة. وللسفر بالاتجاه الآخر راجع صفحة جدة إلى المدينة."] },
          { h: "الانطلاق من فنادق محيط المسجد النبوي", p: ["تُقيَّد الشوارع القريبة من المسجد في أوقات الصلاة والمواسم المزدحمة، لذلك يُرتَّب الاستلام في وقت هادئ وعند بوابة أو مدخل متفق عليه. أرسل اسم الفندق وعدد الغرف وعدد الحقائب الكبيرة التي ستنزل. وإن أردت زيارة أخيرة صباح المغادرة فاطلبها في الطلب نفسه؛ راجع صفحة مزارات المدينة."] },
          { h: "الطريق أم قطار الحرمين", p: ["يربط قطار الحرمين السريع المدينة أيضًا بمنطقة جدة، فهو بديل حقيقي إن سافرت بأمتعة خفيفة وكان فندقك قريبًا من محطة. أما السيارة الخاصة فتنقلك من فندق إلى فندق أو إلى الصالة بحقائبك، وتتوقف حين يحتاج والد مسن أو طفل، ولا تربطك بجدول محطة."] },
          { h: "اختيار المركبة", p: ["تناسب السيدان مثل تويوتا كامري أو هيونداي سوناتا أو فورد توروس مسافرًا أو اثنين بحقائب عادية. وتطلب العائلات غالبًا جمس يوكن أو شيفروليه تاهو لمساحتهما، وتطلب العائلات الأكبر والمجموعات الصغيرة ذات الحقائب الكثيرة هيونداي ستاريا. وتُؤكَّد الفئة وإتاحتها لتاريخك في عرض السعر، بحسب توفر الشركاء."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب المدينة إلى جدة", items: ["موعد الرحلة من جدة ووقت إنهاء الإجراءات المطلوب", "فندق المدينة والبوابة المفضلة ووقت الاستلام", "هل تريد توقف زيارة أخيرة", "الركاب وكبار السن والكرسي المتحرك أو عربة الأطفال", "عدد الحقائب الكبيرة", "المركبة: سيدان أو جمس يوكن أو شيفروليه تاهو أو هيونداي ستاريا"] },
        faqs: [
          { q: "هل يمكن حجز سيارة خاصة من المدينة المنورة إلى مطار جدة؟", a: "نعم، يمكنك إرسال طلب. أرسل موعد رحلتك واسم الفندق ونخطط الانطلاق ونؤكد الإتاحة في عرض السعر قبل ترتيب أي شيء." },
          { q: "كم تبعد المدينة عن جدة بالسيارة؟", a: "تذكر مصادر عامة نحو 405 إلى 425 كم وقرابة أربع ساعات قيادة قبل التوقفات." },
          { q: "متى نغادر المدينة لرحلة دولية؟", a: "احسب عكسيًا من وقت إنهاء الإجراءات مع هامش واسع للطريق والتوقف وازدحام الصباح. ونتفق معك على الوقت في عرض السعر." },
          { q: "هل يمكن زيارة مزارات المدينة قبل المغادرة؟", a: "يمكنك طلب محطات الزيارة قبل الرحلة، وتُسعَّر مع التوصيلة." },
          { q: "أيهما أنسب من المدينة إلى جدة: القطار أم السيارة الخاصة؟", a: "القطار سريع بين المحطتين. والسيارة الخاصة من الباب إلى الباب، وحقائبك معك، وتتوقف عندما تحتاج مجموعتك." },
        ],
      },
    },
  },

  {
    path: `${I}/yanbu-to-jeddah`,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [`${I}/jeddah-to-yanbu`, `${I}/riyadh-to-yanbu`, `${A}/jeddah-airport`, `${C}/yanbu`, `${C}/jeddah`],
    updated: U,
    copy: {
      en: {
        nav: "Yanbu to Jeddah",
        title: "Yanbu to Jeddah Private Car with Driver, Coast Road South",
        description: "Request a private car with a driver from Yanbu, its hotels or industrial area to Jeddah or King Abdulaziz Airport. Executive sedan, GMC Yukon or Staria, quoted per trip.",
        h1: "Yanbu to Jeddah by private car, south down the Red Sea coast",
        eyebrow: "Intercity · Yanbu to Jeddah",
        answer: "A private Yanbu to Jeddah transfer is a pre-booked car with a driver from Yanbu, its hotels or industrial area to Jeddah or King Abdulaziz Airport. Public sources put the road at about 337 km, around three hours twenty minutes before stops. It is mostly a business and flight-connection journey, so RideSaudi quotes each trip individually and plans around your appointment or flight time.",
        summary: "A private car from Yanbu south to Jeddah, planned around a business appointment or flight.",
        sections: [
          { h: "Who takes this road, and why the direction matters", p: ["People travelling from Yanbu to Jeddah are mostly business travellers and site visitors heading for meetings, contractors and staff catching a flight from King Abdulaziz Airport, and families going to the larger city for shopping, hospitals or a connection. The outbound page, Jeddah to Yanbu, is written for the opposite traveller. Here the fixed point is usually a flight or an appointment in Jeddah, so we plan backwards from that time."] },
          { h: "Pickups in Yanbu", p: ["Yanbu has a town area, hotels and a large industrial area with its own entrances and security arrangements. Give the exact site, gate or hotel and a contact number, and tell us if a visitor pass or gate name is needed so the driver is not held at the entrance. An early morning departure is a normal request for a morning flight or a first meeting."] },
          { h: "Straight to the airport, or into Jeddah", p: ["If your journey ends at King Abdulaziz Airport, give the terminal and the check-in time you want; see Jeddah airport transfers for the terminal side. If you are going into the city, send the hotel or office address. Heading onward to Makkah? Ask for a through quotation and see Jeddah to Makkah."] },
          { h: "Executive travel and the vehicle", p: ["For a meeting day, a sedan such as a Toyota Camry, Hyundai Sonata or Ford Taurus is the usual request, and an executive or luxury SUV or VIP vehicle can be requested for senior guests. Families and colleagues travelling together usually ask for a GMC Yukon, GMC Suburban or Toyota Prado, and groups with equipment ask for a Hyundai Staria. The vehicle is confirmed in the quotation, subject to partner availability."] },
        ],
        checklist: { h: "Include this in your Yanbu to Jeddah enquiry", items: ["Appointment or flight time in Jeddah", "Yanbu pickup: hotel, site or gate, and a contact number", "Jeddah destination: terminal, hotel or office", "Passengers and large bags or equipment", "Whether an invoice or company details are needed", "Vehicle: sedan, executive SUV, GMC Yukon or Hyundai Staria"] },
        faqs: [
          { q: "Can I book a private car from Yanbu to Jeddah Airport?", a: "Yes, you can request one. Send your flight time and pickup point, and we plan the departure and confirm availability before arranging anything." },
          { q: "How far is Yanbu from Jeddah by road?", a: "Public route planners give about 337 km and roughly three hours twenty minutes of driving before stops." },
          { q: "Can you collect a visitor from an industrial site in Yanbu?", a: "You can request it. Send the exact gate, the contact number and any pass requirement so the pickup runs smoothly." },
          { q: "Can I request an executive vehicle for a business trip from Yanbu?", a: "You can request an executive or luxury SUV or a VIP vehicle, and availability for your date is confirmed in the quotation." },
          { q: "Can the same car go on to Makkah?", a: "You can ask for the journey to continue to Makkah, and it is quoted as one trip to the destination you give." },
        ],
      },
      ar: {
        nav: "ينبع إلى جدة",
        title: "من ينبع إلى جدة بسيارة خاصة بسائق، جنوبًا على طريق الساحل",
        description: "اطلب سيارة بسائق من ينبع أو فنادقها أو منطقتها الصناعية إلى جدة أو مطار الملك عبدالعزيز. سيدان تنفيذي أو جمس يوكن أو ستاريا بسعر لكل رحلة.",
        h1: "من ينبع إلى جدة بسيارة خاصة جنوبًا على امتداد ساحل البحر الأحمر",
        eyebrow: "بين المدن · ينبع إلى جدة",
        answer: "التوصيل الخاص من ينبع إلى جدة هو سيارة بسائق وبحجز مسبق من ينبع أو فنادقها أو منطقتها الصناعية إلى جدة أو مطار الملك عبدالعزيز. وتقدّر مصادر عامة الطريق بنحو 337 كم، أي قرابة ثلاث ساعات وعشرين دقيقة قبل التوقفات. وهي في الغالب رحلة عمل أو ربط برحلة طيران، لذلك تُسعِّر RideSaudi كل رحلة على حدة وتخطط حول موعدك أو وقت رحلتك.",
        summary: "سيارة خاصة من ينبع جنوبًا إلى جدة، تُخطَّط حول موعد عمل أو رحلة طيران.",
        sections: [
          { h: "من يسلك هذا الطريق ولماذا يختلف الاتجاه", p: ["أغلب المسافرين من ينبع إلى جدة رجال أعمال وزوار مواقع متجهون إلى اجتماعات، ومقاولون وموظفون يلحقون برحلة من مطار الملك عبدالعزيز، وعائلات تقصد المدينة الأكبر للتسوق أو المستشفيات أو الربط برحلة. وصفحة جدة إلى ينبع مكتوبة للمسافر في الاتجاه المعاكس. أما هنا فنقطة الارتكاز غالبًا رحلة طيران أو موعد في جدة، لذلك نخطط عكسيًا منها."] },
          { h: "الاستلام في ينبع", p: ["في ينبع منطقة المدينة والفنادق ومنطقة صناعية كبيرة لها مداخلها وترتيباتها الأمنية. أرسل الموقع أو البوابة أو الفندق بدقة ورقم تواصل، وأخبرنا إن لزم تصريح زائر أو اسم بوابة محدد كي لا يتأخر السائق عند المدخل. والانطلاق الصباحي المبكر طلب معتاد لرحلة صباحية أو أول اجتماع."] },
          { h: "إلى المطار مباشرة أو إلى داخل جدة", p: ["إن انتهت رحلتك في مطار الملك عبدالعزيز فأرسل رقم الصالة ووقت إنهاء الإجراءات المطلوب؛ وللجانب المتعلق بالمطار راجع صفحة التوصيل من مطار جدة. وإن كنت متجهًا إلى المدينة فأرسل عنوان الفندق أو المكتب. وإن كانت وجهتك مكة فاطلب عرضًا متصلًا وراجع صفحة جدة إلى مكة."] },
          { h: "السفر التنفيذي والمركبة", p: ["ليوم اجتماعات تكون السيدان مثل تويوتا كامري أو هيونداي سوناتا أو فورد توروس هي الطلب المعتاد، ويمكن طلب سيارة دفع رباعي تنفيذية أو فاخرة أو مركبة كبار الشخصيات لضيف رفيع. وتطلب العائلات والزملاء المسافرون معًا غالبًا جمس يوكن أو جمس سوبربان أو تويوتا برادو، وتطلب المجموعات ذات المعدات هيونداي ستاريا. وتُؤكَّد المركبة في عرض السعر بحسب توفر الشركاء."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب ينبع إلى جدة", items: ["موعد الاجتماع أو الرحلة في جدة", "الاستلام في ينبع: فندق أو موقع أو بوابة ورقم للتواصل", "الوجهة في جدة: الصالة أو الفندق أو المكتب", "الركاب والحقائب الكبيرة أو المعدات", "هل تحتاج فاتورة أو بيانات شركة", "المركبة: سيدان أو دفع رباعي تنفيذي أو جمس يوكن أو هيونداي ستاريا"] },
        faqs: [
          { q: "هل يمكن حجز سيارة خاصة من ينبع إلى مطار جدة؟", a: "نعم، يمكنك إرسال طلب. أرسل موعد رحلتك ونقطة الاستلام ونخطط الانطلاق ونؤكد الإتاحة قبل ترتيب أي شيء." },
          { q: "كم تبعد ينبع عن جدة بالسيارة؟", a: "تذكر مخططات الطرق العامة نحو 337 كم وقرابة ثلاث ساعات وعشرين دقيقة قيادة قبل التوقفات." },
          { q: "هل يمكن استلام زائر من موقع صناعي في ينبع؟", a: "يمكنك طلب ذلك. أرسل البوابة بدقة ورقم التواصل وأي تصريح مطلوب ليسير الاستلام بسلاسة." },
          { q: "هل يمكن طلب مركبة تنفيذية لرحلة عمل من ينبع؟", a: "يمكنك طلب سيارة دفع رباعي تنفيذية أو فاخرة أو مركبة كبار الشخصيات، وتُؤكَّد الإتاحة لتاريخك في عرض السعر." },
          { q: "هل تكمل السيارة نفسها إلى مكة؟", a: "يمكنك طلب مواصلة الرحلة إلى مكة، وتُسعَّر رحلة واحدة إلى الوجهة التي تحددها." },
        ],
      },
    },
  },

  {
    path: `${I}/taif-to-jeddah`,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [`${I}/jeddah-to-taif`, `${I}/taif-to-makkah`, `${T}/taif`, `${A}/taif-airport`, `${A}/jeddah-airport`, `${C}/jeddah`],
    updated: U,
    copy: {
      en: {
        nav: "Taif to Jeddah",
        title: "Taif to Jeddah Private Car with Driver, Down the Mountain",
        description: "Request a private car with a driver from your Taif hotel or villa down to Jeddah or King Abdulaziz Airport. Sedan, GMC Yukon, Tahoe or Staria, quoted per trip.",
        h1: "Taif to Jeddah by private car, down from the Sarawat mountains",
        eyebrow: "Intercity · Taif to Jeddah",
        answer: "A private Taif to Jeddah transfer is a pre-booked car with a driver from a Taif hotel, villa or the airport down the mountain road to Jeddah or King Abdulaziz Airport. Public sources put it at about 163 to 169 km, under two hours before stops. It is short enough to be a same-day trip, so the plan is built around your departure time. RideSaudi quotes each journey individually.",
        summary: "A short private road journey from Taif down to Jeddah, timed from your flight or plans.",
        sections: [
          { h: "A short drive with a steep descent", p: ["Leaving Taif means coming down from the Sarawat mountains to the coastal plain, so the first part of the road is a descent with bends. In busy summer and holiday periods many families make this trip at the end of a stay, and traffic on the descent can slow the day. Allow time on top of the figure of under two hours, and tell us if a passenger is prone to travel sickness. The opposite direction, up into the mountains, is on Jeddah to Taif."] },
          { h: "Pickups from hotels, villas and farms", p: ["Many Taif stays are in villas, chalets or farms outside the city on small roads. Send the exact address or a pin, the gate and a phone number the driver can reach. For a hotel in the city, the hotel name is enough. If you are collecting from Taif airport instead, send the flight; see Taif airport transfers."] },
          { h: "To Jeddah airport, or on to Makkah", p: ["If your flight leaves from King Abdulaziz Airport, work back from check-in with a safe margin for the descent and city traffic; see Jeddah airport transfers. Some travellers go straight on to Makkah for Umrah after leaving Taif, and that can be quoted as one trip; see Taif to Makkah and Jeddah to Makkah."] },
          { h: "Vehicle for family luggage", p: ["Families returning from a summer stay often carry a lot: ask for a GMC Yukon, Chevrolet Tahoe or Toyota Prado for room, or a Hyundai Staria for a larger family. A sedan such as a Toyota Camry or Hyundai Sonata suits one or two people with light bags. The vehicle is confirmed in the quotation, subject to partner availability."] },
        ],
        checklist: { h: "Include this in your Taif to Jeddah enquiry", items: ["Flight time from Jeddah, or the time you need to arrive", "Taif pickup address or pin, gate and contact number", "Jeddah destination: terminal, hotel or home", "Anyone prone to motion sickness; children or elderly passengers", "Number of large bags", "Vehicle: sedan, GMC Yukon, Tahoe, Prado or Hyundai Staria"] },
        faqs: [
          { q: "Can I book a private car from Taif to Jeddah Airport?", a: "Yes, you can request one. Send your flight time and the Taif pickup, and we plan the departure and confirm availability in the quotation." },
          { q: "How far is Taif from Jeddah by road?", a: "Public sources give about 163 to 169 km and under two hours of driving before stops." },
          { q: "Can you collect from a villa or farm outside Taif?", a: "You can request it. Send a pin or the exact address and a contact number so the driver can find the entrance." },
          { q: "Can the car go on to Makkah?", a: "You can ask for the journey to continue to Makkah, quoted as one trip." },
          { q: "Is a Toyota Prado available from Taif?", a: "You can request a Toyota Prado, GMC Yukon, Chevrolet Tahoe or Hyundai Staria. Availability for your date is confirmed in the quotation." },
        ],
      },
      ar: {
        nav: "الطائف إلى جدة",
        title: "من الطائف إلى جدة بسيارة خاصة بسائق، نزولًا من الجبال",
        description: "اطلب سيارة بسائق من فندقك أو فيلتك في الطائف نزولًا إلى جدة أو مطار الملك عبدالعزيز. سيدان أو جمس يوكن أو تاهو أو ستاريا بسعر لكل رحلة.",
        h1: "من الطائف إلى جدة بسيارة خاصة نزولًا من جبال السروات",
        eyebrow: "بين المدن · الطائف إلى جدة",
        answer: "التوصيل الخاص من الطائف إلى جدة هو سيارة بسائق وبحجز مسبق من فندق أو فيلا في الطائف أو من مطارها نزولًا عبر الطريق الجبلي إلى جدة أو مطار الملك عبدالعزيز. وتقدّر مصادر عامة المسافة بنحو 163 إلى 169 كم، أي أقل من ساعتين قبل التوقفات. وهي قصيرة بما يكفي لتكون رحلة في اليوم نفسه، فتُبنى الخطة على موعد انطلاقك. تُسعِّر RideSaudi كل رحلة على حدة.",
        summary: "رحلة برية خاصة قصيرة من الطائف نزولًا إلى جدة، يُحسب وقتها من رحلتك أو خططك.",
        sections: [
          { h: "مسافة قصيرة بنزول حاد", p: ["مغادرة الطائف تعني النزول من جبال السروات إلى السهل الساحلي، فالجزء الأول من الطريق نزول بمنعطفات. وفي مواسم الصيف والإجازات تقوم كثير من العائلات بهذه الرحلة في ختام الإقامة، وقد يبطئ الازدحام على النزول يومك. فاترك وقتًا فوق الرقم الذي هو أقل من ساعتين، وأخبرنا إن كان أحد الركاب يتأثر بدوار السفر. وتجد الاتجاه المعاكس صعودًا إلى الجبال في صفحة جدة إلى الطائف."] },
          { h: "الاستلام من الفنادق والفلل والمزارع", p: ["كثير من إقامات الطائف في فلل أو شاليهات أو مزارع خارج المدينة على طرق صغيرة. أرسل العنوان الدقيق أو الموقع على الخريطة والبوابة ورقمًا يصل إليك عليه السائق. وفي فنادق المدينة يكفي اسم الفندق. وإن كان الاستلام من مطار الطائف فأرسل رقم الرحلة؛ راجع صفحة التوصيل من مطار الطائف."] },
          { h: "إلى مطار جدة أو مواصلة إلى مكة", p: ["إن كانت رحلتك من مطار الملك عبدالعزيز فاحسب عكسيًا من وقت إنهاء الإجراءات مع هامش أمان للنزول وازدحام المدينة؛ وراجع صفحة التوصيل من مطار جدة. ويتجه بعض المسافرين مباشرة إلى مكة للعمرة بعد مغادرة الطائف، ويمكن تسعير ذلك رحلة واحدة؛ راجع صفحتي الطائف إلى مكة وجدة إلى مكة."] },
          { h: "المركبة لحقائب العائلة", p: ["كثيرًا ما تحمل العائلات العائدة من إقامة صيفية أمتعة كثيرة: اطلب جمس يوكن أو شيفروليه تاهو أو تويوتا برادو للمساحة، أو هيونداي ستاريا للعائلة الأكبر. وتناسب السيدان مثل تويوتا كامري أو هيونداي سوناتا شخصًا أو اثنين بحقائب خفيفة. وتُؤكَّد المركبة في عرض السعر بحسب توفر الشركاء."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب الطائف إلى جدة", items: ["موعد الرحلة من جدة أو الوقت الذي يلزم وصولك فيه", "عنوان الاستلام في الطائف أو الموقع والبوابة ورقم للتواصل", "الوجهة في جدة: الصالة أو الفندق أو المنزل", "من يتأثر بدوار السفر؛ الأطفال أو كبار السن", "عدد الحقائب الكبيرة", "المركبة: سيدان أو جمس يوكن أو تاهو أو برادو أو هيونداي ستاريا"] },
        faqs: [
          { q: "هل يمكن حجز سيارة خاصة من الطائف إلى مطار جدة؟", a: "نعم، يمكنك إرسال طلب. أرسل موعد رحلتك ونقطة الاستلام في الطائف ونخطط الانطلاق ونؤكد الإتاحة في عرض السعر." },
          { q: "كم تبعد الطائف عن جدة بالسيارة؟", a: "تذكر مصادر عامة نحو 163 إلى 169 كم وأقل من ساعتين قيادة قبل التوقفات." },
          { q: "هل يمكن الاستلام من فيلا أو مزرعة خارج الطائف؟", a: "يمكنك طلب ذلك. أرسل الموقع على الخريطة أو العنوان الدقيق ورقم التواصل ليصل السائق إلى المدخل." },
          { q: "هل تكمل السيارة إلى مكة؟", a: "يمكنك طلب مواصلة الرحلة إلى مكة، وتُسعَّر رحلة واحدة." },
          { q: "هل تتوفر تويوتا برادو من الطائف؟", a: "يمكنك طلب تويوتا برادو أو جمس يوكن أو شيفروليه تاهو أو هيونداي ستاريا. وتُؤكَّد الإتاحة لتاريخك في عرض السعر." },
        ],
      },
    },
  },

  {
    path: `${I}/abha-to-riyadh`,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [`${I}/riyadh-to-abha`, `${I}/abha-to-jeddah`, `${I}/jeddah-to-abha`, `${C}/abha`, `${C}/riyadh`, `${I}/private-intercity-chauffeur`],
    updated: U,
    copy: {
      en: {
        nav: "Abha to Riyadh",
        title: "Abha to Riyadh Private Car: Suburban, Yukon or Staria",
        description: "Request a private car with a driver from Abha or Khamis Mushait to Riyadh, King Khalid Airport or a business address. Executive SUV, VIP or family vehicle, quoted per trip.",
        h1: "Abha to Riyadh by private car, from the Asir highlands to the capital",
        eyebrow: "Intercity · Abha to Riyadh",
        answer: "A private Abha to Riyadh transfer is a pre-booked car with a driver from Abha or the Khamis Mushait area to Riyadh, a Riyadh hotel, office or King Khalid International Airport. Public sources put the main road at roughly 880 to 950 km and about nine to ten hours before stops, and the route chosen changes the figure. RideSaudi quotes each journey individually.",
        summary: "A long private road journey from Abha to Riyadh, planned around a night stop or an early start.",
        sections: [
          { h: "Why the route and the direction both matter", p: ["Abha to Riyadh is the journey of families going home to the capital after a highland stay, of business travellers and of people relocating. Public sources give different figures because there is more than one road: a Saudi Roads Authority figure reported in the press is about 882 km via Al-Rayn and Bisha (around nine hours), another main route via Wadi Al-Dawasir and Tathlith is reported at about 927 km, and a longer alternative via Taif and Al-Baha is much longer. We confirm the route in the quotation rather than promising one time. The outbound page, Riyadh to Abha, is written for the traveller going up into the mountains."] },
          { h: "One long day or a night on the way", p: ["Nine to ten hours of driving is too much for some passengers in one stretch, especially with children or elderly parents. Ask for a split journey with an overnight stop, or an early morning start to reach Riyadh before dark. The plan and the cost of any overnight are written into the quotation, and we do not promise a driver swap or a fixed arrival time we have not confirmed."] },
          { h: "Pickups in Abha and Khamis Mushait, and the Riyadh end", p: ["Give the exact hotel, resort or villa, since many stays are outside the city, and tell us whether you are coming from Abha or Khamis Mushait. At the Riyadh end, send a hotel, office or home address, or the terminal at King Khalid Airport if you are connecting to a flight; see Riyadh city transport for what the Riyadh end can include."] },
          { h: "Executive, VIP or family vehicle", p: ["A sedan such as a Toyota Camry, Hyundai Sonata or Ford Taurus suits one or two travellers. Families and colleagues usually request a GMC Yukon, GMC Suburban, Chevrolet Tahoe or Toyota Prado for the room over nine hours, and a Hyundai Staria suits larger groups with many bags. Senior guests can request a luxury SUV or VIP chauffeur vehicle. The vehicle is confirmed in the quotation, subject to partner availability."] },
        ],
        checklist: { h: "Include this in your Abha to Riyadh enquiry", items: ["Date, departure time and one way or return", "Abha or Khamis Mushait pickup and a contact number", "Riyadh hotel, office, home or airport terminal", "One day or a split journey with a night stop", "Passengers, children, elderly travellers and large bags", "Vehicle: sedan, GMC Yukon or Suburban, Tahoe, Prado, Staria or luxury SUV"] },
        faqs: [
          { q: "Can I book a private car from Abha to Riyadh?", a: "Yes, you can request one. Send your date, pickup point and Riyadh destination, and we confirm availability and send a quotation before anything is arranged." },
          { q: "How far is Abha from Riyadh by road?", a: "Public sources vary by route: roughly 880 to 950 km on the main roads and about nine to ten hours before stops, and more on longer alternatives." },
          { q: "Can the journey be split with a night on the way?", a: "Yes. You can ask for it, and the overnight plan is written into the quotation." },
          { q: "Can I request a GMC Suburban or Chevrolet Tahoe for the family?", a: "You can request a GMC Suburban, Chevrolet Tahoe, GMC Yukon or Toyota Prado. The vehicle available for your date is confirmed in the quotation." },
          { q: "Can you take me from Abha to King Khalid Airport in Riyadh?", a: "You can request it. Send your flight time so we plan the departure with a safe margin." },
        ],
      },
      ar: {
        nav: "أبها إلى الرياض",
        title: "من أبها إلى الرياض بسيارة خاصة: سوبربان أو يوكن أو ستاريا",
        description: "اطلب سيارة بسائق من أبها أو خميس مشيط إلى الرياض أو مطار الملك خالد أو عنوان عمل. دفع رباعي تنفيذي أو مركبة كبار الشخصيات أو عائلية بسعر لكل رحلة.",
        h1: "من أبها إلى الرياض بسيارة خاصة، من مرتفعات عسير إلى العاصمة",
        eyebrow: "بين المدن · أبها إلى الرياض",
        answer: "التوصيل الخاص من أبها إلى الرياض هو سيارة بسائق وبحجز مسبق من أبها أو منطقة خميس مشيط إلى الرياض أو فندق أو مكتب فيها أو مطار الملك خالد الدولي. وتقدّر مصادر عامة الطريق الرئيسي بنحو 880 إلى 950 كم وقرابة تسع إلى عشر ساعات قبل التوقفات، ويتغير الرقم بحسب المسار المختار. تُسعِّر RideSaudi كل رحلة على حدة.",
        summary: "رحلة برية خاصة طويلة من أبها إلى الرياض، تُخطَّط حول مبيت أو انطلاق مبكر.",
        sections: [
          { h: "لماذا يهم المسار والاتجاه معًا", p: ["أبها إلى الرياض هي رحلة العائلات العائدة إلى العاصمة بعد إقامة في المرتفعات، ورجال الأعمال، ومن ينتقلون للسكن. وتختلف الأرقام في المصادر العامة لأن للطريق أكثر من مسار: فهناك رقم نُقل في الصحافة عن الهيئة العامة للطرق يبلغ نحو 882 كم عبر الريان وبيشة (قرابة تسع ساعات)، ومسار رئيسي آخر عبر وادي الدواسر وثلوث يُذكر بنحو 927 كم، وبديل أطول عبر الطائف والباحة. ونؤكد المسار في عرض السعر بدل الوعد بوقت واحد. وصفحة الرياض إلى أبها مكتوبة للمسافر الصاعد إلى الجبال."] },
          { h: "يوم واحد طويل أم مبيت في الطريق", p: ["تسع إلى عشر ساعات قيادة كثيرة على بعض الركاب في مرة واحدة، خصوصًا مع الأطفال أو الوالدين المسنين. اطلب رحلة مقسمة بمبيت، أو انطلاقًا صباحيًا مبكرًا للوصول إلى الرياض قبل الظلام. وتُكتب الخطة وتكلفة أي مبيت في عرض السعر، ولا نَعِد بتبديل سائق أو بوقت وصول ثابت لم نؤكده."] },
          { h: "الاستلام من أبها وخميس مشيط ونهاية الرحلة في الرياض", p: ["أرسل اسم الفندق أو المنتجع أو الفيلا بدقة، فكثير من الإقامات خارج المدينة، وأخبرنا إن كنت قادمًا من أبها أم من خميس مشيط. وفي الرياض أرسل عنوان فندق أو مكتب أو منزل، أو صالة مطار الملك خالد إن كنت ستلحق برحلة؛ وراجع صفحة النقل داخل الرياض لما يمكن أن تتضمنه نهاية الرحلة في العاصمة."] },
          { h: "مركبة تنفيذية أو لكبار الشخصيات أو عائلية", p: ["تناسب السيدان مثل تويوتا كامري أو هيونداي سوناتا أو فورد توروس مسافرًا أو اثنين. وتطلب العائلات والزملاء غالبًا جمس يوكن أو جمس سوبربان أو شيفروليه تاهو أو تويوتا برادو لمساحتها على تسع ساعات، وتناسب هيونداي ستاريا المجموعات الأكبر ذات الحقائب الكثيرة. ويمكن لضيف رفيع طلب سيارة دفع رباعي فاخرة أو مركبة كبار الشخصيات بسائق. وتُؤكَّد المركبة في عرض السعر بحسب توفر الشركاء."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب أبها إلى الرياض", items: ["التاريخ ووقت الانطلاق وهل الرحلة ذهاب فقط أم ذهاب وعودة", "الاستلام من أبها أو خميس مشيط ورقم للتواصل", "فندق أو مكتب أو منزل في الرياض أو صالة المطار", "يوم واحد أم رحلة مقسمة بمبيت", "الركاب والأطفال وكبار السن والحقائب الكبيرة", "المركبة: سيدان أو جمس يوكن أو سوبربان أو تاهو أو برادو أو ستاريا أو دفع رباعي فاخر"] },
        faqs: [
          { q: "هل يمكن حجز سيارة خاصة من أبها إلى الرياض؟", a: "نعم، يمكنك إرسال طلب. أرسل التاريخ ونقطة الاستلام ووجهتك في الرياض ونؤكد الإتاحة ونرسل عرض السعر قبل ترتيب أي شيء." },
          { q: "كم تبعد أبها عن الرياض بالسيارة؟", a: "تختلف المصادر العامة بحسب المسار: نحو 880 إلى 950 كم على الطرق الرئيسية وقرابة تسع إلى عشر ساعات قبل التوقفات، وأكثر على البدائل الأطول." },
          { q: "هل يمكن تقسيم الرحلة بمبيت في الطريق؟", a: "نعم. يمكنك طلب ذلك، وتُكتب خطة المبيت في عرض السعر." },
          { q: "هل يمكن طلب جمس سوبربان أو شيفروليه تاهو للعائلة؟", a: "يمكنك طلب جمس سوبربان أو شيفروليه تاهو أو جمس يوكن أو تويوتا برادو. وتُؤكَّد المركبة المتاحة لتاريخك في عرض السعر." },
          { q: "هل يمكن التوصيل من أبها إلى مطار الملك خالد في الرياض؟", a: "يمكنك طلب ذلك. أرسل موعد رحلتك لنخطط الانطلاق بهامش أمان." },
        ],
      },
    },
  },
];
