import type { BlogPost } from "./types";

const S = "services";
const D = "2026-11-18";

/**
 * Guide A3: pre-booked car with driver vs taxi / ride-hailing (comparison intent).
 * Arabic avoids "سائق خاص" (job and household-driver intent; see CLAUDE.md and Phase 1 research) and uses
 * "سيارة خاصة مع سائق", "تاكسي" and "ليموزين", which is how Saudi users describe taxis and limousine cars.
 * No taxi fares, app names or licensing rules are stated; only behaviour that follows from how each works.
 */
export const chauffeurVsTaxiPost: BlogPost = {
  slug: "private-car-with-driver-vs-taxi-saudi-arabia",
  published: D,
  updated: D,
  links: [
    `${S}/chauffeur-services`,
    `${S}/chauffeur-services/business-chauffeur`,
    `${S}/airport-transfers`,
    `${S}/intercity-transfers`,
    "luxury-transportation/luxury-chauffeur",
    `${S}/special-transportation/business-travel`,
  ],
  copy: {
    en: {
      nav: "Private car with driver vs taxi",
      title: "Private Car with Driver vs Taxi in Saudi Arabia",
      description: "When a taxi or ride-hailing app is the better choice in Saudi Arabia, and when a pre-booked car with a driver is worth it: an honest side-by-side comparison.",
      h1: "Private car with a driver or a taxi: which should you use in Saudi Arabia?",
      answer:
        "Use a taxi or ride-hailing app for short, spontaneous trips in a city when any car will do. Use a pre-booked car with a driver when the vehicle, the time or the plan matter: airport arrivals with luggage, families, long intercity drives, a day of meetings with several stops, or VIP guests. The pre-booked car is agreed in advance; a taxi is decided on the spot.",
      summary: "The real differences between the two, and the situations where each one is the right choice.",
      sections: [
        {
          h: "The one difference that explains the rest",
          p: [
            "A taxi or a ride-hailing car is decided at the moment you need it: you stand at the kerb or open an app, and whichever car is nearest comes. A pre-booked car with a driver is decided before the day: the vehicle category, the pickup point, the time and the price are agreed in a quotation. Almost every other difference follows from that.",
          ],
        },
        {
          h: "When a taxi or app is the better choice",
          p: [
            "For a short trip across a city, alone or as a couple, with little luggage and no fixed deadline, a taxi or an app is usually the simplest and cheapest option. There is nothing to arrange in advance, and if plans change you simply do not book. Booking a private car for a ten-minute hop is rarely worth it.",
            "Use licensed taxis and recognised apps, agree the destination clearly, and check that the car suits you before you get in.",
          ],
        },
        {
          h: "When a pre-booked car with a driver is worth it",
          p: ["The pre-booked car earns its place when something about the trip cannot be left to chance:"],
          list: [
            "Airport arrivals: the driver is planned around your flight, and the vehicle fits your bags",
            "Families and groups: one vehicle sized for everyone, instead of hoping the car that arrives is big enough",
            "Long intercity journeys, such as Makkah to Madinah or Riyadh to Dammam, where a vehicle chosen for comfort matters",
            "A day of meetings or visits with several stops: one car and driver by the hour, waiting between stops",
            "Guests you are responsible for: executives, delegations or VIP visitors who should not be left waiting",
            "Early-morning or late-night times when you do not want to depend on finding a car",
          ],
        },
        {
          h: "Price: agreed before, or set at the time",
          p: [
            "With a taxi or an app, the fare is set by the meter or the app at the time of the trip. With a pre-booked car, the price is in the quotation before you confirm. Neither is always cheaper. For one person going a short distance, the taxi usually wins. For a family going a long way, or a day with several stops, compare a quotation with the total of the separate rides you would otherwise take.",
          ],
        },
        {
          h: "Waiting, stops and changes",
          p: [
            "A taxi ride ends when you get out. If you need the car to wait outside a meeting, a shop or a hotel, or to take you on to three more places, you start again each time. A car booked by the hour or for the day stays with you. If your plans change, say so: a pre-booked journey is reconfirmed rather than cancelled and rebooked.",
          ],
        },
        {
          h: "Is a private car the same as a 'limousine'?",
          p: [
            "In Saudi Arabia, 'limousine' is often used for taxi-style cars as well as luxury vehicles, so the word alone does not tell you much. Ask what you are actually booking: a car decided on the spot, or a named vehicle category reserved for your party at an agreed time. RideSaudi arranges the second: one vehicle for your party only, never a shared seat.",
          ],
        },
      ],
      table: {
        h: "Taxi or app versus a pre-booked car with a driver",
        head: ["Aspect", "Taxi or ride-hailing app", "Pre-booked car with a driver"],
        rows: [
          ["When it is decided", "At the moment you need it", "In advance, in a quotation"],
          ["Vehicle", "Whatever arrives", "A category chosen for your group: sedan, GMC Yukon or Hyundai Staria"],
          ["Price", "Set by the meter or app at the time", "Agreed before you confirm"],
          ["Waiting and stops", "Each ride is separate", "By the hour or day, the car stays with you"],
          ["Best for", "Short, spontaneous city trips", "Airports, families, long drives, busy days, guests"],
        ],
      },
      faqs: [
        { q: "Is a private car with a driver more expensive than a taxi?", a: "For a short trip, usually yes. For a family, a long journey or a day with several stops, compare one quotation with the total of the separate rides." },
        { q: "Can a private car wait for me between stops?", a: "Yes, if you book it by the hour or for the day. A single transfer goes from one point to another." },
        { q: "Do I need to book a private car in advance?", a: "Yes. It is pre-booked: you enquire, receive a quotation and confirm it. For a car right now, a taxi or app is the better tool." },
        { q: "Is the car shared with other passengers?", a: "No. A RideSaudi booking is one vehicle for your party only." },
        { q: "Can I hire only a driver for my own car?", a: "No. RideSaudi arranges a vehicle and its driver together for passengers; it does not supply drivers for customers' own cars." },
      ],
    },
    ar: {
      nav: "سيارة مع سائق أم تاكسي",
      title: "سيارة خاصة مع سائق أم تاكسي في السعودية؟ الفرق ومتى تختار",
      description: "متى يكون التاكسي أو تطبيق التوصيل الخيار الأفضل في السعودية، ومتى تستحق السيارة الخاصة المحجوزة مسبقًا مع سائق: مقارنة صادقة جنبًا إلى جنب.",
      h1: "سيارة خاصة مع سائق أم تاكسي: أيهما تستخدم في السعودية؟",
      answer:
        "استخدم التاكسي أو تطبيق التوصيل للمشاوير القصيرة المفاجئة داخل المدينة حين تكفيك أي سيارة. واستخدم سيارة خاصة مع سائق محجوزة مسبقًا حين تهمك السيارة أو الموعد أو الخطة: الوصول إلى المطار مع الحقائب، والعائلات، والمسافات الطويلة بين المدن، ويوم اجتماعات فيه عدة محطات، والضيوف المهمين. فالسيارة المحجوزة يُتفق عليها مسبقًا، أما التاكسي فيُحدَّد في حينه.",
      summary: "الفروق الحقيقية بين الخيارين، والمواقف التي يكون فيها كل منهما الاختيار الصحيح.",
      sections: [
        {
          h: "الفرق الواحد الذي يفسّر كل ما عداه",
          p: [
            "التاكسي أو سيارة التطبيق يُحدَّد لحظة حاجتك إليه: تقف على الرصيف أو تفتح التطبيق فتأتيك أقرب سيارة. أما السيارة الخاصة المحجوزة مسبقًا مع سائق فيُتفق عليها قبل يوم الرحلة: فئة السيارة ونقطة الاستلام والموعد والسعر كلها في عرض السعر. وتقريبًا كل الفروق الأخرى تنتج عن ذلك.",
          ],
        },
        {
          h: "متى يكون التاكسي أو التطبيق الخيار الأفضل",
          p: [
            "لمشوار قصير داخل المدينة، وحدك أو مع شخص آخر، بحقائب قليلة ودون موعد ملزم، يكون التاكسي أو التطبيق غالبًا الأبسط والأرخص. فلا شيء ترتبه مسبقًا، وإن تغيرت خطتك فلا تطلب السيارة ببساطة. ونادرًا ما يستحق مشوار عشر دقائق حجز سيارة خاصة.",
            "استخدم سيارات الأجرة المرخصة والتطبيقات المعروفة، واتفق على الوجهة بوضوح، وتأكد أن السيارة تناسبك قبل أن تركب.",
          ],
        },
        {
          h: "متى تستحق السيارة الخاصة المحجوزة مسبقًا",
          p: ["تثبت السيارة المحجوزة جدواها حين يكون في الرحلة ما لا يُترك للصدفة:"],
          list: [
            "الوصول إلى المطار: يُخطَّط السائق على رحلتك الجوية، وتتسع السيارة لحقائبك",
            "العائلات والمجموعات: سيارة واحدة تتسع للجميع بدل أن تأمل أن تكون السيارة القادمة كبيرة بما يكفي",
            "الرحلات الطويلة بين المدن مثل مكة إلى المدينة أو الرياض إلى الدمام، حيث تهم سيارة مختارة للراحة",
            "يوم اجتماعات أو زيارات بعدة محطات: سيارة وسائق بالساعة ينتظرانك بين المحطات",
            "ضيوف أنت مسؤول عنهم: تنفيذيون أو وفود أو ضيوف كبار لا ينبغي أن يُتركوا ينتظرون",
            "المواعيد المبكرة جدًا أو المتأخرة ليلًا حين لا تريد أن تعتمد على إيجاد سيارة",
          ],
        },
        {
          h: "السعر: متفق عليه مسبقًا أم يُحدَّد وقت الرحلة",
          p: [
            "في التاكسي أو التطبيق يُحدَّد السعر بالعداد أو التطبيق وقت الرحلة. وفي السيارة المحجوزة مسبقًا يكون السعر في عرض السعر قبل أن تؤكد. وليس أحدهما أرخص دائمًا: فلشخص واحد ومسافة قصيرة يفوز التاكسي غالبًا، أما لعائلة في مسافة طويلة أو ليوم فيه عدة محطات فقارن عرض السعر بمجموع المشاوير المنفصلة التي كنت ستأخذها.",
          ],
        },
        {
          h: "الانتظار والمحطات والتعديلات",
          p: [
            "مشوار التاكسي ينتهي حين تنزل. فإن احتجت أن تنتظرك السيارة أمام اجتماع أو متجر أو فندق، أو أن تأخذك إلى ثلاثة أماكن أخرى، تبدأ من جديد في كل مرة. أما السيارة المحجوزة بالساعة أو لليوم فتبقى معك. وإن تغيرت خطتك فأخبرنا، فالرحلة المحجوزة يُعاد تأكيدها بدل إلغائها وحجزها من جديد.",
          ],
        },
        {
          h: "هل السيارة الخاصة هي نفسها «الليموزين»؟",
          p: [
            "في السعودية تُطلق كلمة «ليموزين» كثيرًا على سيارات الأجرة كما تُطلق على السيارات الفاخرة، فالكلمة وحدها لا تكفي. اسأل عما تحجزه فعلًا: سيارة تُحدَّد في حينه، أم فئة سيارة محددة محجوزة لمجموعتك في موعد متفق عليه. وRideSaudi ترتّب النوع الثاني: سيارة واحدة لمجموعتك فقط، ولا مقاعد مشتركة أبدًا.",
          ],
        },
      ],
      table: {
        h: "التاكسي أو التطبيق مقابل سيارة خاصة محجوزة مع سائق",
        head: ["الجانب", "تاكسي أو تطبيق توصيل", "سيارة خاصة محجوزة مع سائق"],
        rows: [
          ["متى تُحدَّد", "لحظة حاجتك إليها", "مسبقًا، في عرض السعر"],
          ["السيارة", "ما يصلك", "فئة تُختار لمجموعتك: سيدان أو جمس يوكن أو هيونداي ستاريا"],
          ["السعر", "بالعداد أو التطبيق وقت الرحلة", "متفق عليه قبل التأكيد"],
          ["الانتظار والمحطات", "كل مشوار منفصل", "بالساعة أو لليوم، تبقى السيارة معك"],
          ["الأنسب لـ", "المشاوير القصيرة المفاجئة داخل المدينة", "المطارات والعائلات والمسافات الطويلة والأيام المزدحمة والضيوف"],
        ],
      },
      faqs: [
        { q: "هل السيارة الخاصة مع سائق أغلى من التاكسي؟", a: "للمشوار القصير غالبًا نعم. أما للعائلة أو الرحلة الطويلة أو يوم فيه عدة محطات فقارن عرض سعر واحدًا بمجموع المشاوير المنفصلة." },
        { q: "هل يمكن أن تنتظرني السيارة الخاصة بين المحطات؟", a: "نعم، إن حجزتها بالساعة أو لليوم. أما التوصيلة الواحدة فتكون من نقطة إلى أخرى." },
        { q: "هل يلزم حجز السيارة الخاصة مسبقًا؟", a: "نعم، فهي تُحجز مسبقًا: ترسل طلبك ويصلك عرض سعر ثم تؤكده. وإن أردت سيارة الآن فالتاكسي أو التطبيق أنسب." },
        { q: "هل يركب معي ركاب آخرون؟", a: "لا. حجز RideSaudi سيارة واحدة لمجموعتك فقط." },
        { q: "هل يمكنني طلب سائق فقط لسيارتي الخاصة؟", a: "لا. ترتّب RideSaudi السيارة وسائقها معًا للركاب، ولا توفر سائقين لسيارات العملاء." },
      ],
    },
  },
};
