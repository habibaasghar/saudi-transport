import type { Locale } from "@/i18n/routing";
import type { Copy, Section, ServicePage } from "../types";
import { HEAVY, SATHA } from "./shared";

/**
 * City-specific road distances and planning notes for the six heavy-transport city pages (2026-11-23).
 * Reason: rendered pages in the same city pair shared 0.33–0.36 of their 5-word shingles, mostly the common
 * process block and quotation form. These additions are unique per page.
 * Distances are road distances for cars already verified on this site's route pages (Google Maps / OSRM, checked
 * 2026-11-15 to 2026-11-23): Riyadh–Dammam ~410 km, Riyadh–Buraydah ~350, Riyadh–Jubail ~469, Riyadh–Makkah ~871,
 * Riyadh–Jeddah ~955, Jeddah–Makkah ~88, Jeddah–Taif ~171, Jeddah–Yanbu ~343, Jeddah–Madinah ~404,
 * Dammam–Jubail ~99, Dammam–Hofuf ~150–155, Dammam–King Fahd Causeway ~25.
 * They are car distances; a truck's route and time can differ (weight limits, permits, escort), so no truck
 * durations are stated.
 */
type Add = { section: Section; faq: { q: string; a: string }; table: NonNullable<Copy["table"]> };

const note = { en: "Road distance by car, approximate", ar: "المسافة بالسيارة على الطريق، تقريبية" };

export const heavyCityDistances: Record<string, Record<Locale, Add>> = {
  [`${SATHA}/riyadh`]: {
    en: {
      table: { h: "Common satha destinations from Riyadh", head: ["From Riyadh to", note.en], rows: [["Buraydah (Qassim)", "about 350 km"], ["Dammam", "about 410 km"], ["Jubail", "about 469 km"], ["Makkah", "about 871 km"], ["Jeddah", "about 955 km"]] },
      section: { h: "Urgent recovery or a planned move out of Riyadh", p: ["A satha that collects a broken-down car and drives it 410 km to Dammam or 955 km to Jeddah is a long job for one truck. If the car is safe where it is and nobody needs it tomorrow, planned car transport between cities is often the better choice for these distances. If it must leave today, say so; the quote then reflects a dedicated satha for the whole trip."] },
      faq: { q: "Is it better to use a satha or car transport from Riyadh to Jeddah?", a: "For a car that can wait a few days, planned car transport usually suits a 955 km move. A dedicated satha is for cars that must leave at once. Both are quoted before anything is booked." },
    },
    ar: {
      table: { h: "وجهات السطحة الشائعة من الرياض", head: ["من الرياض إلى", note.ar], rows: [["بريدة (القصيم)", "نحو 350 كم"], ["الدمام", "نحو 410 كم"], ["الجبيل", "نحو 469 كم"], ["مكة المكرمة", "نحو 871 كم"], ["جدة", "نحو 955 كم"]] },
      section: { h: "سطحة عاجلة أم نقل مخطط من الرياض", p: ["السطحة التي تستلم سيارة معطلة وتقطع بها 410 كم إلى الدمام أو 955 كم إلى جدة تؤدي مهمة طويلة لشاحنة واحدة. فإن كانت السيارة في مكان آمن ولا يحتاجها أحد غدًا، فنقل السيارات المخطط بين المدن يكون غالبًا الخيار الأنسب لهذه المسافات. وإن كان لا بد من خروجها اليوم فاذكر ذلك، ويعكس عرض السعر حينها سطحة مخصصة للرحلة كاملة."] },
      faq: { q: "هل الأفضل سطحة أم نقل سيارات من الرياض إلى جدة؟", a: "للسيارة التي تحتمل الانتظار أيامًا قليلة يناسب النقل المخطط غالبًا مسافة 955 كم. أما السطحة المخصصة فللسيارات التي يجب أن تخرج فورًا. ويُسعَّر الخياران قبل أي حجز." },
    },
  },
  [`${SATHA}/jeddah`]: {
    en: {
      table: { h: "Common satha destinations from Jeddah", head: ["From Jeddah to", note.en], rows: [["Makkah", "about 88 km"], ["Taif", "about 171 km"], ["Yanbu", "about 343 km"], ["Madinah", "about 404 km"], ["Riyadh", "about 955 km"]] },
      section: { h: "Short hops and long hauls from Jeddah", p: ["Most Jeddah jobs stay within the Makkah region: Makkah is about 88 km away and Taif about 171 km, with the climb to Taif on mountain roads. Cars leaving the port for Madinah (about 404 km) or Riyadh (about 955 km) are long-distance moves, and a shared car carrier can be more practical than a single satha when the date is flexible."] },
      faq: { q: "How far is a satha from Jeddah to Taif?", a: "About 171 km by road, including the mountain section up to Taif. Tell us whether the car is going to the city or to Al Hada or Al Shafa." },
    },
    ar: {
      table: { h: "وجهات السطحة الشائعة من جدة", head: ["من جدة إلى", note.ar], rows: [["مكة المكرمة", "نحو 88 كم"], ["الطائف", "نحو 171 كم"], ["ينبع", "نحو 343 كم"], ["المدينة المنورة", "نحو 404 كم"], ["الرياض", "نحو 955 كم"]] },
      section: { h: "مشاوير قصيرة ونقل طويل من جدة", p: ["تبقى أغلب طلبات جدة داخل منطقة مكة المكرمة: فمكة على بعد نحو 88 كم والطائف نحو 171 كم، مع صعود إلى الطائف على طرق جبلية. أما السيارات الخارجة من الميناء إلى المدينة المنورة (نحو 404 كم) أو الرياض (نحو 955 كم) فهي نقل لمسافات طويلة، وقد تكون ناقلة السيارات المشتركة أنسب من سطحة منفردة حين يكون الموعد مرنًا."] },
      faq: { q: "كم مسافة السطحة من جدة إلى الطائف؟", a: "نحو 171 كم بالطريق، ومنها الجزء الجبلي الصاعد إلى الطائف. أخبرنا هل السيارة متجهة إلى المدينة أم إلى الهدا أو الشفا." },
    },
  },
  [`${SATHA}/dammam`]: {
    en: {
      table: { h: "Common satha destinations from Dammam", head: ["From Dammam to", note.en], rows: [["King Fahd Causeway (Saudi side)", "about 25 km"], ["Jubail", "about 99 km"], ["Hofuf (Al Ahsa)", "about 150–155 km"], ["Riyadh", "about 410 km"]] },
      section: { h: "Distances across the Eastern Province", p: ["The Eastern Province is spread out: Jubail is about 99 km north of Dammam and Hofuf in Al Ahsa about 150 km south, so a 'local' satha here can still be a long drive. A car that must cross the King Fahd Causeway to Bahrain needs its own customs and insurance arrangements; ask before booking, because a satha cannot simply drive a car across the border."] },
      faq: { q: "Can a satha take my car from Dammam to Bahrain?", a: "Cross-border vehicle moves need customs and insurance paperwork on both sides. Ask first; we tell you whether it can be arranged before any quote is confirmed." },
    },
    ar: {
      table: { h: "وجهات السطحة الشائعة من الدمام", head: ["من الدمام إلى", note.ar], rows: [["جسر الملك فهد (الجانب السعودي)", "نحو 25 كم"], ["الجبيل", "نحو 99 كم"], ["الهفوف (الأحساء)", "نحو 150 إلى 155 كم"], ["الرياض", "نحو 410 كم"]] },
      section: { h: "المسافات داخل المنطقة الشرقية", p: ["المنطقة الشرقية واسعة: فالجبيل على بعد نحو 99 كم شمال الدمام، والهفوف في الأحساء نحو 150 كم جنوبًا، فالسطحة \"المحلية\" هنا قد تكون مشوارًا طويلًا. والسيارة التي ستعبر جسر الملك فهد إلى البحرين تحتاج ترتيبات جمركية وتأمينًا خاصًا بها؛ اسأل قبل الحجز، لأن السطحة لا تعبر بالسيارة الحدود ببساطة."] },
      faq: { q: "هل تنقل السطحة سيارتي من الدمام إلى البحرين؟", a: "نقل المركبات عبر الحدود يحتاج أوراق جمارك وتأمين في الجانبين. اسأل أولًا، ونخبرك إن كان ممكنًا قبل تأكيد أي عرض سعر." },
    },
  },
  [`${HEAVY}/riyadh`]: {
    en: {
      table: { h: "Project destinations from Riyadh", head: ["From Riyadh to", note.en], rows: [["Qassim (Buraydah)", "about 350 km"], ["Dammam and the Eastern Province ports", "about 410 km"], ["Jubail Industrial City", "about 469 km"], ["Makkah region", "about 871 km"]] },
      section: { h: "Why distance alone does not set the plan", p: ["A car covers Riyadh to Jubail, about 469 km, in under five hours. A lowbed carrying an excavator may not take the same road or keep the same pace: weight limits, bridge heights, permits and any required escort decide the route and the timing. Give the machine's weight and dimensions with the two addresses, and the route is planned from those, not from the car distance."] },
      faq: { q: "How long does it take to move a machine from Riyadh to Jubail?", a: "The car distance is about 469 km, but the haul time depends on the load, the permitted route and any escort. It is set in the quotation once the weight and size are known." },
    },
    ar: {
      table: { h: "وجهات المشاريع من الرياض", head: ["من الرياض إلى", note.ar], rows: [["القصيم (بريدة)", "نحو 350 كم"], ["الدمام وموانئ المنطقة الشرقية", "نحو 410 كم"], ["الجبيل الصناعية", "نحو 469 كم"], ["منطقة مكة المكرمة", "نحو 871 كم"]] },
      section: { h: "لماذا لا تحدد المسافة وحدها الخطة", p: ["تقطع السيارة المسافة من الرياض إلى الجبيل، نحو 469 كم، في أقل من خمس ساعات. أما اللوبد الذي يحمل حفارًا فقد لا يسلك الطريق نفسه ولا بالسرعة نفسها: فحدود الأوزان وارتفاعات الجسور والتصاريح وأي مرافقة مطلوبة هي التي تحدد المسار والتوقيت. أرسل وزن المعدة وأبعادها مع العنوانين، فيُخطط المسار منها لا من مسافة السيارة."] },
      faq: { q: "كم يستغرق نقل معدة من الرياض إلى الجبيل؟", a: "مسافة السيارة نحو 469 كم، لكن زمن النقل يعتمد على الحمولة والمسار المسموح وأي مرافقة. ويُحدَّد في عرض السعر بعد معرفة الوزن والحجم." },
    },
  },
  [`${HEAVY}/jeddah`]: {
    en: {
      table: { h: "Project destinations from Jeddah", head: ["From Jeddah to", note.en], rows: [["Makkah", "about 88 km"], ["Taif (mountain road)", "about 171 km"], ["Yanbu and its industrial city", "about 343 km"], ["Madinah", "about 404 km"]] },
      section: { h: "Coast, mountains and the Haram area", p: ["Equipment leaving Jeddah faces three very different roads: the flat coastal highway north towards Yanbu (about 343 km), the climb to Taif (about 171 km), where gradients and bends matter for a heavy load, and Makkah (about 88 km), where access near the central area is controlled. Say which applies, because each changes the trailer choice and the permits needed.", "If the machine is arriving through Jeddah Islamic Port, send the bill of lading number and the expected release date; loading at the port cannot start before clearance is complete."] },
      faq: { q: "Can heavy equipment be delivered to a site in Makkah from Jeddah?", a: "Sites near Makkah's central area have controlled access. Give the exact site location; whether and when a heavy vehicle can enter is confirmed in the quotation." },
    },
    ar: {
      table: { h: "وجهات المشاريع من جدة", head: ["من جدة إلى", note.ar], rows: [["مكة المكرمة", "نحو 88 كم"], ["الطائف (طريق جبلي)", "نحو 171 كم"], ["ينبع ومدينتها الصناعية", "نحو 343 كم"], ["المدينة المنورة", "نحو 404 كم"]] },
      section: { h: "الساحل والجبال ومنطقة الحرم", p: ["المعدات الخارجة من جدة تواجه ثلاثة طرق مختلفة جدًا: الطريق الساحلي المستوي شمالًا نحو ينبع (نحو 343 كم)، والصعود إلى الطائف (نحو 171 كم) حيث تؤثر المنحدرات والمنعطفات في الحمولة الثقيلة، ومكة المكرمة (نحو 88 كم) حيث يخضع الدخول قرب المنطقة المركزية للتنظيم. اذكر أيها يخصك، لأن كل واحد يغير نوع المقطورة والتصاريح المطلوبة.", "وإن كانت المعدة قادمة عبر ميناء جدة الإسلامي فأرسل رقم البوليصة وموعد الإفراج المتوقع، فالتحميل من الميناء لا يبدأ قبل إنهاء التخليص."] },
      faq: { q: "هل تصل المعدات الثقيلة إلى موقع في مكة من جدة؟", a: "المواقع القريبة من المنطقة المركزية في مكة دخولها منظم. أرسل موقع المشروع بالضبط، وتتأكد إمكانية دخول المركبة الثقيلة وتوقيته في عرض السعر." },
    },
  },
  [`${HEAVY}/dammam`]: {
    en: {
      table: { h: "Project destinations from Dammam", head: ["From Dammam to", note.en], rows: [["Jubail Industrial City", "about 99 km"], ["Hofuf (Al Ahsa)", "about 150–155 km"], ["Riyadh", "about 410 km"]] },
      section: { h: "Short industrial runs, long site paperwork", p: ["Many Eastern Province moves are short: Dammam to Jubail is only about 99 km by road. On these jobs the paperwork at both gates often takes longer than the drive, so send the site names, the gate passes required and the contact at each end. For a move inland to Riyadh, about 410 km, the route and permits are planned like any long haul.", "Many sites in Jubail and Ras Tanura require drivers to hold safety certificates or attend an induction before entry; ask the site coordinator early and include the requirements with your request."] },
      faq: { q: "Is moving equipment from Dammam to Jubail a one-day job?", a: "The road distance is only about 99 km, so the drive itself is short. Whether it fits one day depends on loading, gate passes and permits at both sites." },
    },
    ar: {
      table: { h: "وجهات المشاريع من الدمام", head: ["من الدمام إلى", note.ar], rows: [["الجبيل الصناعية", "نحو 99 كم"], ["الهفوف (الأحساء)", "نحو 150 إلى 155 كم"], ["الرياض", "نحو 410 كم"]] },
      section: { h: "مسافات صناعية قصيرة وأوراق مواقع طويلة", p: ["كثير من عمليات النقل في المنطقة الشرقية قصيرة: فالدمام إلى الجبيل نحو 99 كم فقط بالطريق. وفي هذه المهام تستغرق إجراءات البوابتين غالبًا وقتًا أطول من القيادة، فأرسل أسماء المواقع والتصاريح المطلوبة عند البوابات وجهة الاتصال في كل طرف. أما النقل إلى الرياض في الداخل، نحو 410 كم، فيُخطط مساره وتصاريحه مثل أي نقل طويل.", "وكثير من مواقع الجبيل ورأس تنورة تشترط على السائقين شهادات سلامة أو تدريبًا تعريفيًا قبل الدخول؛ اسأل منسق الموقع عن ذلك مبكرًا وأرسل المتطلبات مع طلبك."] },
      faq: { q: "هل نقل المعدات من الدمام إلى الجبيل مهمة يوم واحد؟", a: "المسافة بالطريق نحو 99 كم فقط، فالقيادة نفسها قصيرة. أما إن كانت تكفي في يوم واحد فيعتمد على التحميل وتصاريح البوابات في الموقعين." },
    },
  },
};

export function applyHeavyCityDistances(pages: ServicePage[]) {
  for (const [path, byLocale] of Object.entries(heavyCityDistances)) {
    const page = pages.find((p) => p.path === path);
    if (!page) throw new Error(`heavyCityDistances: unknown page ${path}`);
    page.updated = "2026-11-23";
    for (const l of Object.keys(byLocale) as Locale[]) {
      const c = page.copy[l];
      const add = byLocale[l];
      if (c.table) throw new Error(`heavyCityDistances: ${path}/${l} already has a table`);
      c.table = add.table;
      c.sections.push(add.section);
      c.faqs.push(add.faq);
    }
  }
}
