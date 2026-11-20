import type { BlogPost } from "./types";

const S = "services";
const I = `${S}/intercity-transfers`;
const D = "2026-11-18";

/**
 * Guide E2: Hyundai Staria with driver for families and groups.
 * Capacity is owner-confirmed (2026-11-18): up to 7 passengers and 10 or more pieces of luggage.
 * Route figures are reused from the verified route pages (Google Maps, November 2026).
 * No other vehicle specifications (doors, seats layout, features, model year) are stated.
 */
export const stariaPost: BlogPost = {
  slug: "hyundai-staria-with-driver-family-group-travel",
  published: D,
  updated: D,
  links: [
    "fleet",
    `${S}/group-transportation/family-transport`,
    `${S}/umrah-transport/family-umrah-transport`,
    `${S}/group-transportation/van-and-minibus`,
    `${S}/airport-transfers/family-airport-transfer`,
    `${I}/makkah-to-madinah`,
    `${S}/umrah-transport/jeddah-airport-to-makkah`,
  ],
  copy: {
    en: {
      nav: "Hyundai Staria for families and groups",
      title: "Hyundai Staria with Driver for Families and Groups",
      description: "When to book a Hyundai Staria with a driver in Saudi Arabia: up to 7 passengers with 10 or more bags, for Umrah families, airport arrivals and long routes.",
      h1: "Hyundai Staria with a driver: when it is the right vehicle for your group",
      answer:
        "A Hyundai Staria with a driver takes up to 7 passengers with 10 or more pieces of luggage, depending on bag size. It is the vehicle to ask for when a family or small group wants to travel together in one car with all its bags: Umrah families, airport arrivals with suitcases, and long routes such as Makkah to Madinah. Larger groups need more than one vehicle.",
      summary: "Up to 7 passengers and 10 or more bags in one vehicle: who the Staria suits, and when to choose something else.",
      sections: [
        {
          h: "What the Staria carries",
          p: [
            "The Hyundai Staria in RideSaudi bookings takes up to 7 passengers with 10 or more pieces of luggage. The exact number of bags depends on their size: ten cabin-size bags take far less room than ten large suitcases, so list your bags by size when you enquire. The vehicle for your date is confirmed in the quotation.",
          ],
        },
        {
          h: "When the Staria is the right choice",
          p: ["Ask for a Staria when keeping everyone together matters as much as the space:"],
          list: [
            "Families of five to seven with suitcases, who would otherwise need two cars",
            "Umrah families travelling with Zamzam water and shopping on the way home",
            "Airport arrivals after a long flight, when every bag needs to fit at once",
            "Small groups of colleagues or friends on a long intercity road",
            "Families with older relatives who should not be split from the people helping them",
          ],
        },
        {
          h: "Staria, GMC Yukon or sedan",
          p: [
            "A sedan suits one to a few travellers with light luggage. A GMC Yukon suits families who want more room and comfort, especially on long roads. The Staria is the step up when the numbers grow: up to seven people, or a family with more bags than an SUV comfortably takes. If you are unsure between a Yukon and a Staria, send your passengers and bags and ask for a recommendation.",
          ],
        },
        {
          h: "Long routes and the Umrah sequence",
          p: [
            "On long roads, space matters more than on a city trip. Makkah to Madinah is about 436 km, around 4 hours 20 minutes before stops, and Jeddah airport to Makkah about 98 km. Families who book the full sequence, from Jeddah airport to Makkah, then to Madinah and back to the airport, often choose the Staria for every leg so that the luggage, which usually grows during the trip, always fits.",
          ],
        },
        {
          h: "More than seven passengers",
          p: [
            "If your group is larger than seven, or has more luggage than one Staria can take, it needs more than one vehicle, or a larger van or minibus. Choose 'Other or larger group' in the form and give the full numbers; the quotation sets out the vehicles proposed.",
          ],
        },
        {
          h: "What to send when you ask for a Staria",
          p: ["Include these and the quotation can confirm the vehicle at once:"],
          list: [
            "Number of adults, children and infants",
            "Bags by size: large suitcases, cabin bags, pushchairs, wheelchairs, Zamzam water",
            "Route, date and time, and whether it is one way or a return",
            "Any child seats or mobility needs",
          ],
        },
      ],
      table: {
        h: "Choosing between the three vehicle types",
        head: ["Vehicle", "Usually suits"],
        rows: [
          ["Sedan", "One to a few travellers with light luggage"],
          ["GMC Yukon", "Families who want more room, especially on long routes"],
          ["Hyundai Staria", "Up to 7 passengers with 10 or more bags, depending on size"],
          ["More than one vehicle", "Groups of more than 7, or more luggage than one Staria takes"],
        ],
      },
      faqs: [
        { q: "How many passengers fit in a Hyundai Staria?", a: "Up to 7 passengers, with 10 or more pieces of luggage depending on bag size." },
        { q: "Is a Staria better than a GMC Yukon for a family?", a: "For up to seven people, or a family with a lot of luggage, usually yes. For a smaller family who wants an SUV, a GMC Yukon may suit better. Ask for a recommendation." },
        { q: "Can a Staria take a family on Umrah from Jeddah airport to Makkah?", a: "Yes. It is a common choice for families of five to seven with suitcases and Zamzam water." },
        { q: "What if we are more than seven?", a: "Choose 'Other or larger group' in the form. The quotation proposes more than one vehicle or a larger van." },
        { q: "Is the Staria shared with other passengers?", a: "No. The vehicle is reserved for your party only." },
      ],
    },
    ar: {
      nav: "هيونداي ستاريا للعائلات والمجموعات",
      title: "هيونداي ستاريا مع سائق للعائلات والمجموعات",
      description: "متى تحجز هيونداي ستاريا مع سائق في السعودية: حتى 7 ركاب مع 10 حقائب أو أكثر، لعائلات العمرة والوصول إلى المطار والمسافات الطويلة.",
      h1: "هيونداي ستاريا مع سائق: متى تكون السيارة المناسبة لمجموعتك",
      answer:
        "تتسع هيونداي ستاريا مع سائق لما يصل إلى 7 ركاب مع 10 حقائب أو أكثر بحسب حجمها. وهي السيارة التي تطلبها حين تريد عائلة أو مجموعة صغيرة أن تسافر معًا في سيارة واحدة مع كل حقائبها: عائلات العمرة، والقادمون إلى المطار بحقائب كبيرة، والمسارات الطويلة مثل مكة إلى المدينة. أما المجموعات الأكبر فتحتاج أكثر من سيارة.",
      summary: "حتى 7 ركاب و10 حقائب أو أكثر في سيارة واحدة: لمن تناسب ستاريا، ومتى تختار غيرها.",
      sections: [
        {
          h: "ما الذي تتسع له ستاريا",
          p: [
            "تتسع هيونداي ستاريا في حجوزات RideSaudi لما يصل إلى 7 ركاب مع 10 حقائب أو أكثر. ويعتمد عدد الحقائب بدقة على أحجامها، فعشر حقائب يد تأخذ مساحة أقل بكثير من عشر حقائب كبيرة، لذلك اذكر حقائبك بأحجامها عند الطلب. وتُؤكَّد السيارة لتاريخك في عرض السعر.",
          ],
        },
        {
          h: "متى تكون ستاريا الخيار الصحيح",
          p: ["اطلب ستاريا حين يكون بقاء الجميع معًا مهمًا بقدر المساحة:"],
          list: [
            "عائلات من خمسة إلى سبعة أفراد مع حقائب كانت ستحتاج سيارتين",
            "عائلات العمرة العائدة بماء زمزم والمشتريات",
            "الوصول إلى المطار بعد رحلة طويلة حين يجب أن تتسع كل الحقائب دفعة واحدة",
            "مجموعات صغيرة من الزملاء أو الأصدقاء على طريق طويل بين المدن",
            "عائلات معها كبار سن لا ينبغي فصلهم عمن يساعدهم",
          ],
        },
        {
          h: "ستاريا أم جمس يوكن أم سيدان",
          p: [
            "السيدان لمسافر أو بضعة مسافرين بحقائب خفيفة، والجمس يوكن للعائلات التي تريد مساحة وراحة أكبر خصوصًا على الطرق الطويلة. وستاريا هي الخطوة التالية حين يكبر العدد: حتى سبعة أشخاص، أو عائلة معها حقائب أكثر مما تتسع له سيارة الدفع الرباعي براحة. وإن ترددت بين يوكن وستاريا فأرسل عدد الركاب والحقائب واطلب أن نقترح لك.",
          ],
        },
        {
          h: "المسارات الطويلة ورحلة العمرة كاملة",
          p: [
            "على الطرق الطويلة تهم المساحة أكثر من مشوار داخل المدينة. فمكة إلى المدينة نحو 436 كم، قرابة 4 ساعات و20 دقيقة قبل التوقفات، ومطار جدة إلى مكة نحو 98 كم. والعائلات التي تحجز الرحلة كاملة، من مطار جدة إلى مكة ثم إلى المدينة ثم العودة إلى المطار، كثيرًا ما تختار ستاريا لكل المراحل لتتسع الحقائب دائمًا، وهي تزيد عادةً خلال الرحلة.",
          ],
        },
        {
          h: "أكثر من سبعة ركاب",
          p: [
            "إن كانت مجموعتك أكبر من سبعة أشخاص، أو معها حقائب أكثر مما تتسع له ستاريا واحدة، فتحتاج إلى أكثر من سيارة أو إلى فان أو حافلة صغيرة أكبر. اختر «أخرى أو مجموعة أكبر» في النموذج واذكر الأعداد كاملة، ويوضح عرض السعر السيارات المقترحة.",
          ],
        },
        {
          h: "ما الذي ترسله حين تطلب ستاريا",
          p: ["أرسل ما يلي ليؤكد عرض السعر السيارة مباشرة:"],
          list: [
            "عدد البالغين والأطفال والرضّع",
            "الحقائب بأحجامها: حقائب كبيرة وحقائب يد وعربات أطفال وكراسي متحركة وماء زمزم",
            "المسار والتاريخ والوقت، وهل الرحلة ذهاب فقط أم ذهاب وعودة",
            "أي حاجة إلى مقاعد أطفال أو دعم للحركة",
          ],
        },
      ],
      table: {
        h: "الاختيار بين أنواع السيارات الثلاثة",
        head: ["السيارة", "تناسب عادةً"],
        rows: [
          ["سيدان", "مسافرًا أو بضعة مسافرين بحقائب خفيفة"],
          ["جمس يوكن", "العائلات التي تريد مساحة أكبر، خصوصًا على المسارات الطويلة"],
          ["هيونداي ستاريا", "حتى 7 ركاب مع 10 حقائب أو أكثر بحسب حجمها"],
          ["أكثر من سيارة", "المجموعات الأكبر من 7 أشخاص، أو الحقائب التي لا تتسع لها ستاريا واحدة"],
        ],
      },
      faqs: [
        { q: "كم راكبًا تتسع هيونداي ستاريا؟", a: "حتى 7 ركاب، مع 10 حقائب أو أكثر بحسب حجمها." },
        { q: "هل ستاريا أفضل من جمس يوكن للعائلة؟", a: "لعدد يصل إلى سبعة أشخاص أو لعائلة معها حقائب كثيرة غالبًا نعم. أما العائلة الأصغر التي تريد سيارة دفع رباعي فقد تناسبها يوكن أكثر، واطلب أن نقترح لك." },
        { q: "هل تناسب ستاريا عائلة معتمرة من مطار جدة إلى مكة؟", a: "نعم، وهي خيار شائع للعائلات من خمسة إلى سبعة أفراد مع حقائب وماء زمزم." },
        { q: "ماذا لو كنا أكثر من سبعة؟", a: "اختر «أخرى أو مجموعة أكبر» في النموذج، ويقترح عرض السعر أكثر من سيارة أو فانًا أكبر." },
        { q: "هل يشاركنا ركاب آخرون في ستاريا؟", a: "لا. السيارة محجوزة لمجموعتك فقط." },
      ],
    },
  },
};
