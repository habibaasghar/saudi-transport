import type { Locale } from "@/i18n/routing";
import type { Section } from "../types";
import type { PageImage } from "../images";
import type { BlogCluster } from "./types";

/**
 * Topic hubs for the guides: /blog/towing-heavy-transport/ and /blog/private-transfers/.
 * Each hub explains the category, lists every guide in it and links to the commercial pages that take bookings.
 * Same rules as the guides: no prices, fleet ownership, response times or coverage RideSaudi cannot verify.
 */
export type HubCopy = {
  nav: string;
  title: string;
  description: string;
  h1: string;
  answer: string;
  summary: string;
  sections: Section[];
  faqs: { q: string; a: string }[];
};

export type BlogHub = {
  slug: BlogCluster;
  updated: string;
  /** Commercial registry paths shown as "Book this service". */
  links: string[];
  hero: PageImage;
  heavy: boolean;
  copy: Record<Locale, HubCopy>;
};

const H = "services/recovery-heavy-transport";
const S = "services";
const I = `${S}/intercity-transfers`;
const U = "2026-11-23";

export const blogHubs: BlogHub[] = [
  {
    slug: "towing-heavy-transport",
    updated: U,
    heavy: true,
    links: [H, `${H}/satha-car-recovery`, `${H}/car-transport-between-cities`, `${H}/heavy-equipment-transport`, `${H}/lowbed-transport`, `${H}/excavator-transport`, `${H}/wheel-loader-transport`, `${H}/crane-transport`, `${H}/industrial-machinery-relocation`, `${H}/oversized-load-transport`],
    hero: { src: "/images/heavy-transport/lowbed-truck-hauling-mobile-crane.webp", width: 1419, height: 798, alt: { en: "Lowbed truck hauling a rough-terrain mobile crane on an open road", ar: "شاحنة لوبد تنقل رافعة متحركة على طريق مفتوح" }, focus: "50% 55%" },
    copy: {
      en: {
        nav: "Towing & heavy transport guides",
        title: "Towing & Heavy Transport Guides for Saudi Arabia",
        description: "Guides to car towing, satha recovery, lowbed trailers and machinery transport in Saudi Arabia: what to measure, what to send and how quotes work.",
        h1: "Towing, satha and heavy equipment transport guides",
        answer: "These guides explain how car towing, satha recovery, lowbed trailers and heavy machinery transport work in Saudi Arabia, and what to prepare before you ask for a quotation. RideSaudi takes the enquiry and arranges the job with transport partners; the truck, the price and the date are confirmed for each job before anything moves.",
        summary: "Plain-language planning guides for moving cars, machines and oversized loads by road in Saudi Arabia.",
        sections: [
          { h: "Who these guides are for", p: ["Drivers with a broken-down car, people moving a car to another city, contractors relocating an excavator or a loader, and plant or project managers planning a crane, generator or factory move. Each guide answers the questions that decide which truck is needed and what the quotation depends on."] },
          { h: "How RideSaudi handles towing and heavy transport", p: ["RideSaudi is an enquiry and arrangement service. You send the job details once; we check them with transport partners and come back with a quotation that names the type of truck or trailer, the date and what is included. Availability depends on the partner, the location and the date, so nothing is promised before it is confirmed for your job."] },
          { h: "Start with the right guide", p: ["Car jobs and machinery jobs need different details. For a car, the important facts are its condition, where it is and where it must go. For a machine, it is the weight, the transport dimensions and how it will be loaded and unloaded."], list: ["Broken-down or damaged car: start with the car towing and breakdown guides", "Moving a working car to another city: read the intercity car transport guide", "Excavators, dozers and loaders: read the machine preparation guides", "Cranes, generators and factory machines: read the crane and industrial guide", "Not sure which trailer: read lowbed vs flatbed vs extendable"] },
        ],
        faqs: [
          { q: "Does RideSaudi own the tow trucks and lowbeds?", a: "No. RideSaudi arranges the job with transport partners. The quotation names the type of truck or trailer that will be used." },
          { q: "Which cities are covered for heavy transport?", a: "The main focus is Riyadh, Jeddah and Dammam and nearby areas. Other locations depend on partner availability and are confirmed per enquiry." },
          { q: "How do I get a quotation for moving a machine?", a: "Use the heavy transport form with the machine type, weight, dimensions, both addresses and the date. Photos of the machine or its spec sheet help." },
          { q: "Do you publish prices for towing or lowbed transport?", a: "No. The price depends on the load, distance, equipment, permits and timing, so every job is quoted individually." },
        ],
      },
      ar: {
        nav: "أدلة السطحات والنقل الثقيل",
        title: "أدلة سطحات ونقل المعدات الثقيلة في السعودية",
        description: "أدلة عن سحب السيارات بالسطحة واللوبد ونقل المعدات والآليات في السعودية: ماذا تقيس، وماذا ترسل، وكيف يُحسب عرض السعر.",
        h1: "أدلة السطحات ونقل المعدات الثقيلة",
        answer: "تشرح هذه الأدلة كيف يتم سحب السيارات بالسطحة ونقل المعدات الثقيلة باللوبد في السعودية، وما الذي تجهزه قبل طلب عرض السعر. تستقبل RideSaudi طلبك وترتب المهمة مع شركاء النقل، ويُؤكَّد نوع الشاحنة والسعر والموعد لكل مهمة قبل التحرك.",
        summary: "أدلة تخطيط واضحة لنقل السيارات والمعدات والحمولات الكبيرة برًا داخل السعودية.",
        sections: [
          { h: "لمن هذه الأدلة", p: ["لصاحب سيارة تعطلت في الطريق، ولمن ينقل سيارته إلى مدينة أخرى، وللمقاول الذي ينقل حفارة أو شيول، ولمدير المشروع أو المصنع الذي يخطط لنقل كرين أو مولد أو ماكينة. كل دليل يجيب عن الأسئلة التي تحدد نوع الشاحنة المطلوبة وما يعتمد عليه عرض السعر."] },
          { h: "كيف تتعامل RideSaudi مع السطحات والنقل الثقيل", p: ["RideSaudi خدمة استقبال طلبات وترتيب. ترسل تفاصيل المهمة مرة واحدة، فنراجعها مع شركاء النقل ونعود إليك بعرض سعر يحدد نوع الشاحنة أو التريلا والموعد وما يشمله السعر. تعتمد الإتاحة على الشريك والموقع والتاريخ، فلا نعد بشيء قبل تأكيده لمهمتك."] },
          { h: "ابدأ بالدليل المناسب", p: ["مهام السيارات تختلف عن مهام المعدات. في السيارة يهمنا وضعها ومكانها ووجهتها. وفي المعدة يهمنا الوزن ومقاسات النقل وطريقة التحميل والتنزيل."], list: ["سيارة معطلة أو متضررة: ابدأ بدليل سحب السيارات ودليل التعطل على الطريق", "نقل سيارة سليمة إلى مدينة أخرى: اقرأ دليل نقل السيارات بين المدن", "الحفارات والبلدوزرات والشيولات: اقرأ أدلة تجهيز المعدة", "الكرينات والمولدات وماكينات المصانع: اقرأ دليل الكرينات والمعدات الصناعية", "لا تعرف أي تريلا تحتاج: اقرأ مقارنة اللوبد والسطحة والتريلا الممتدة"] },
        ],
        faqs: [
          { q: "هل تملك RideSaudi السطحات واللوبدات؟", a: "لا. ترتب RideSaudi المهمة مع شركاء النقل، ويذكر عرض السعر نوع الشاحنة أو التريلا التي ستُستخدم." },
          { q: "ما المدن المشمولة بالنقل الثقيل؟", a: "التركيز الأساسي على الرياض وجدة والدمام وما حولها. والمواقع الأخرى تعتمد على توفر الشركاء وتُؤكَّد لكل طلب." },
          { q: "كيف أحصل على عرض سعر لنقل معدة؟", a: "استخدم نموذج النقل الثقيل واذكر نوع المعدة ووزنها ومقاساتها والعنوانين والتاريخ. وتساعد صور المعدة أو ورقة مواصفاتها." },
          { q: "هل تنشرون أسعار السطحة أو اللوبد؟", a: "لا. يعتمد السعر على الحمولة والمسافة والمعدات والتصاريح والتوقيت، فتُسعَّر كل مهمة على حدة." },
        ],
      },
    },
  },
  {
    slug: "private-transfers",
    updated: U,
    heavy: false,
    links: [`${S}/airport-transfers`, `${S}/intercity-transfers`, `${S}/umrah-transport`, `${S}/cross-border-transfers`, `${S}/chauffeur-services`, "luxury-transportation/luxury-suv", "fleet", `${I}/riyadh-to-jeddah`, `${I}/riyadh-to-dammam`, `${I}/jeddah-to-makkah`],
    hero: { src: "/images/fleet/chevrolet-suburban-black-exterior.webp", width: 1200, height: 630, alt: { en: "Black Chevrolet Suburban full-size SUV under trees", ar: "شيفروليه سوبربان دفع رباعي كبيرة سوداء تحت الأشجار" }, focus: "50% 60%" },
    copy: {
      en: {
        nav: "Private transfer guides",
        title: "Private Transfer & Car With Driver Guides, KSA",
        description: "Guides to private airport transfers, intercity cars with a driver, Umrah transport and cross-border road trips from Saudi Arabia to Qatar, Bahrain and the UAE.",
        h1: "Private transfer guides for Saudi Arabia",
        answer: "These guides help you plan a private car with a driver in Saudi Arabia: airport pickups, intercity roads such as Riyadh to Jeddah or Dammam, the Umrah sequence between Jeddah, Makkah and Madinah, and road trips to Qatar, Bahrain and the UAE. RideSaudi arranges each journey with transport partners and confirms the vehicle and price in the quotation.",
        summary: "Route, airport and vehicle guides for booking a private car with a driver, not a shared ride.",
        sections: [
          { h: "What a private transfer means here", p: ["One vehicle with a driver for your party only, from your pickup address to your destination, at the time you choose. It is not a shared shuttle and not a seat on a bus. You choose the vehicle category, such as a sedan, a GMC Yukon or a Hyundai Staria, and the vehicle for your date is confirmed in the quotation."] },
          { h: "How to use these guides", p: ["The route and airport guides explain the road, the stops and what to plan around. The vehicle guides help you choose the right size of car for your passengers and luggage. The cross-border guides list what must be checked before a road trip out of Saudi Arabia. When you are ready, every guide links to the page where you can ask for a quotation."] },
          { h: "What we never publish", p: ["We do not publish prices, guaranteed journey times, guaranteed vehicle availability or border promises. Prices depend on the route, vehicle, date and extras; road and border times vary. These are confirmed for your journey in writing."] },
        ],
        faqs: [
          { q: "Is a private transfer the same as a taxi?", a: "No. It is a pre-booked car with a driver for your group only, quoted in advance for a specific route and time." },
          { q: "Which vehicles can I ask for?", a: "Sedans such as the Toyota Camry, SUVs such as the GMC Yukon and Chevrolet Suburban, and the Hyundai Staria for groups, through transport partners and subject to availability." },
          { q: "Can I book a return journey?", a: "Yes. Ask for one way or return in the same enquiry; a return is quoted with both dates." },
          { q: "How do I cancel?", a: "Cancellation is allowed at least 24 hours before pickup. The full terms are on the cancellation policy page." },
        ],
      },
      ar: {
        nav: "أدلة التوصيل الخاص",
        title: "أدلة التوصيل الخاص والسيارة مع سائق في السعودية",
        description: "أدلة التوصيل الخاص من المطار وبين المدن وتنقلات العمرة والرحلات البرية من السعودية إلى قطر والبحرين والإمارات بسيارة خاصة مع سائق.",
        h1: "أدلة التوصيل الخاص في السعودية",
        answer: "تساعدك هذه الأدلة على التخطيط لسيارة خاصة مع سائق في السعودية: الاستقبال من المطار، والطرق بين المدن مثل الرياض إلى جدة أو الدمام، وتنقلات العمرة بين جدة ومكة والمدينة، والرحلات البرية إلى قطر والبحرين والإمارات. ترتب RideSaudi كل رحلة مع شركاء النقل وتؤكد المركبة والسعر في عرض السعر.",
        summary: "أدلة الطرق والمطارات والمركبات لحجز سيارة خاصة مع سائق، لا رحلة مشتركة.",
        sections: [
          { h: "ماذا يعني التوصيل الخاص هنا", p: ["مركبة واحدة مع سائق لمجموعتك فقط، من عنوان الاستلام إلى وجهتك، في الوقت الذي تختاره. ليست حافلة مشتركة ولا مقعدًا في باص. تختار فئة المركبة، مثل سيدان أو جمس يوكن أو هيونداي ستاريا، وتُؤكَّد المركبة لتاريخك في عرض السعر."] },
          { h: "كيف تستفيد من هذه الأدلة", p: ["تشرح أدلة الطرق والمطارات الطريق والتوقفات وما يجب التخطيط له. وتساعدك أدلة المركبات على اختيار الحجم المناسب لعدد الركاب والحقائب. وتذكر أدلة السفر عبر الحدود ما يجب التحقق منه قبل الرحلة البرية خارج السعودية. وكل دليل يحيلك إلى الصفحة التي تطلب منها عرض السعر."] },
          { h: "ما لا ننشره أبدًا", p: ["لا ننشر أسعارًا ولا أوقات رحلات مضمونة ولا إتاحة مضمونة للمركبات ولا وعودًا تتعلق بالحدود. فالسعر يعتمد على الطريق والمركبة والتاريخ والإضافات، وأوقات الطريق والحدود تتغير، وتُؤكَّد هذه التفاصيل لرحلتك كتابيًا."] },
        ],
        faqs: [
          { q: "هل التوصيل الخاص مثل التاكسي؟", a: "لا. هو سيارة مع سائق تُحجز مسبقًا لمجموعتك فقط، ويُحدَّد سعرها مقدمًا لطريق ووقت محددين." },
          { q: "ما المركبات التي يمكنني طلبها؟", a: "سيدان مثل تويوتا كامري، ودفع رباعي مثل جمس يوكن وشيفروليه سوبربان، وهيونداي ستاريا للمجموعات، عبر شركاء النقل وحسب التوفر." },
          { q: "هل يمكن حجز رحلة ذهاب وعودة؟", a: "نعم. اطلب الذهاب فقط أو الذهاب والعودة في الطلب نفسه، ويُسعَّر الذهاب والعودة بالتاريخين." },
          { q: "كيف ألغي الحجز؟", a: "يُسمح بالإلغاء قبل 24 ساعة على الأقل من موعد الاستلام، والشروط الكاملة في صفحة سياسة الإلغاء." },
        ],
      },
    },
  },
];

export const getHub = (slug: string) => blogHubs.find((h) => h.slug === slug);
