import type { Locale } from "@/i18n/routing";
import type { Section, ServicePage } from "./types";
import type { BlogPost } from "./blog/types";

/**
 * Content enrichment, batch 4 (2026-11-21): the last thin pages: three section hubs, five borderline pages and two guides.
 * Same rules as batches 1-3: general public knowledge only, no prices, distances, fleet or availability claims.
 */
const U = "2026-11-21";
const L = "luxury-transportation";
const E = "services/event-transportation";
const S = "services/special-transportation";
const G = "services/group-transportation";
type Add = { sections: Section[]; faqs: { q: string; a: string }[] };

export const batch4Enrichments: Record<string, Record<Locale, Add>> = {
  [G]: {
    en: {
      sections: [
        { h: "Which page fits your group", p: ["A family going to the airport, a company team arriving on one flight and a group of cousins needing a van are three different requests. Start with family transportation if you are one household, group airport transfers if people arrive together by air, and van and minibus transportation if the number outgrows a car. If you are unsure, send the numbers and we point you to the right plan."] },
        { h: "When one vehicle becomes two", p: ["As the number of people and bags grows, the question changes from which vehicle to how many. Two vehicles that travel together can be easier than one crowded one, and they let people split sensibly by household. We say what is realistic once we know the passengers and every bag."] },
        { h: "Give the group one voice", p: ["Large parties produce many messages. Name a single organiser with a phone number for the booking, and pass every change through that person, so the driver is never given two versions of the plan."] },
      ],
      faqs: [
        { q: "How far ahead should a group book?", a: "As early as you can. Larger groups depend on more vehicles being available together, and availability for your date is confirmed in the quotation." },
        { q: "Can a group be picked up from two addresses?", a: "Yes. List each address with the number of people at it; the plan is quoted as one journey." },
      ],
    },
    ar: {
      sections: [
        { h: "أي صفحة تناسب مجموعتك", p: ["عائلة ذاهبة إلى المطار، وفريق شركة يصل على رحلة واحدة، ومجموعة أقارب تحتاج حافلة، هي ثلاثة طلبات مختلفة. ابدأ بنقل العائلات إن كنتم أسرة واحدة، وبتوصيل المجموعات من المطار إن وصل الأشخاص معًا جوًا، وبالحافلات والميني باص إن تجاوز العدد سيارة. وإن لم تكن متأكدًا فأرسل الأعداد ونوجّهك إلى الخطة المناسبة."] },
        { h: "حين تصبح المركبة الواحدة اثنتين", p: ["كلما زاد عدد الأشخاص والحقائب يتحول السؤال من أي مركبة إلى كم مركبة. وقد تكون مركبتان تسافران معًا أيسر من واحدة مزدحمة، وتتيحان توزيع الأشخاص بحسب الأسر. ونقول لك ما هو واقعي متى عرفنا الركاب وكل حقيبة."] },
        { h: "امنح المجموعة صوتًا واحدًا", p: ["تنتج الجماعات الكبيرة رسائل كثيرة. سمِّ منظّمًا واحدًا برقم هاتف للحجز، ومرّر كل تغيير عبره، كي لا يتلقى السائق نسختين من الخطة."] },
      ],
      faqs: [
        { q: "قبل كم من الوقت تحجز المجموعة؟", a: "في أقرب وقت ممكن. فالمجموعات الكبيرة تعتمد على توفر عدة مركبات معًا، وتُؤكَّد الإتاحة لتاريخك في عرض السعر." },
        { q: "هل تُستلم المجموعة من عنوانين؟", a: "نعم. اذكر كل عنوان وعدد الأشخاص عنده وتُسعَّر الخطة رحلةً واحدة." },
      ],
    },
  },
  [S]: {
    en: {
      sections: [
        { h: "Examples of how to describe a need", p: ["Useful descriptions are specific: an elderly passenger who can walk short distances but needs a high step avoided; a guest who prefers English; a hotel booking several pickups a week; an agency sending a group each month. A sentence like this tells us far more than a general request for special service."] },
        { h: "Planning ahead for special requirements", p: ["Requirements are easier to meet when we know early. A request made a day or more before the journey leaves time to confirm what can be arranged, while a request on the morning of travel may not. Say how firm each need is, so we can tell you which parts are certain."] },
        { h: "Who usually contacts us", p: ["Requests come from hotel concierges, travel agencies, companies, adult children booking for parents and individual travellers. State who you are and who the passenger is in the same enquiry, and name the person to call on the day."] },
      ],
      faqs: [
        { q: "Can I arrange transport for a parent who cannot travel alone?", a: "Yes, as a booking made on their behalf. Describe their needs and the person who will meet them, and we confirm what can be arranged." },
        { q: "Do you keep a standing arrangement for repeat customers?", a: "Describe the pattern and the arrangement is quoted individually, such as a weekly route or a monthly group." },
      ],
    },
    ar: {
      sections: [
        { h: "أمثلة على وصف الاحتياج", p: ["الأوصاف المفيدة محددة: راكب مسن يستطيع المشي مسافات قصيرة لكن يجب تجنب الدرجة العالية، وضيف يفضل الإنجليزية، وفندق يحجز عدة استلامات في الأسبوع، ووكالة ترسل مجموعة كل شهر. وجملة كهذه تخبرنا أكثر بكثير من طلب عام لخدمة خاصة."] },
        { h: "التخطيط المسبق للمتطلبات الخاصة", p: ["تسهل تلبية المتطلبات حين نعرفها مبكرًا. فالطلب قبل الرحلة بيوم أو أكثر يترك وقتًا لتأكيد ما يمكن ترتيبه، أما الطلب صباح السفر فقد لا يسمح بذلك. اذكر مدى ثبات كل احتياج لنخبرك بما هو مؤكد منها."] },
        { h: "من يتواصل معنا عادةً", p: ["تأتي الطلبات من استقبال الفنادق ووكالات السفر والشركات وأبناء يحجزون لوالديهم ومسافرين أفراد. اذكر من أنت ومن الراكب في الطلب نفسه، وسمِّ الشخص الذي يُتصل به يوم الرحلة."] },
      ],
      faqs: [
        { q: "هل أرتب نقلًا لوالد لا يستطيع السفر وحده؟", a: "نعم، كحجز باسمه. صف احتياجاته ومن سيستقبله ونؤكد ما يمكن ترتيبه." },
        { q: "هل تحتفظون بترتيب ثابت للعملاء المتكررين؟", a: "صف النمط ويُسعَّر الترتيب على حدة، مثل مسار أسبوعي أو مجموعة شهرية." },
      ],
    },
  },
  "services/tourism-transport": {
    en: {
      sections: [
        { h: "Sightseeing driver, day trip or multi-stop", p: ["A sightseeing driver suits a day inside one city. A day trip suits an excursion out and back, for example from a base city to a site. A multi-stop booking suits a route with several set stops, such as errands or a short circuit. Pick the one closest to your plan and we adjust it with you."] },
        { h: "Choosing the season", p: ["Winter and early spring are comfortable for most of the Kingdom, including the north-west and AlUla, while summer sends many visitors to the cooler highlands around Abha and Taif. Ramadan and the Hajj season change how busy Makkah and Madinah are. Tell us your dates and we plan around them."] },
        { h: "What the driver can and cannot do", p: ["The driver knows the roads and keeps to the plan you set. He is not a guide, does not buy tickets and cannot gain entry to controlled sites. Plan tickets and permits with the official operators, and use us for getting between places."] },
      ],
      faqs: [
        { q: "Can I add a guide to a sightseeing booking?", a: "RideSaudi does not provide guides. You can arrange a guide separately and we coordinate pickups around the tour." },
        { q: "Which Saudi destination is best in summer?", a: "Many visitors choose the highlands around Abha and Taif for cooler weather. Tell us your dates and what you want to see." },
      ],
    },
    ar: {
      sections: [
        { h: "سائق جولات أم رحلة يوم أم متعددة المحطات", p: ["يناسب سائق الجولات يومًا داخل مدينة واحدة. وتناسب رحلة اليوم نزهة ذهابًا وإيابًا، كمن ينطلق من مدينة إقامة إلى موقع. ويناسب الحجز متعدد المحطات مسارًا بمحطات محددة، مثل المشاوير أو دورة قصيرة. اختر الأقرب إلى خطتك ونعدّله معك."] },
        { h: "اختيار الموسم", p: ["الشتاء وأوائل الربيع مريحان في أغلب أنحاء المملكة، ومنها الشمال الغربي والعلا، أما الصيف فيدفع كثيرًا من الزوار إلى المرتفعات الأبرد حول أبها والطائف. ويغيّر رمضان وموسم الحج مدى ازدحام مكة المكرمة والمدينة المنورة. أخبرنا بتواريخك ونخطط على أساسها."] },
        { h: "ما يستطيعه السائق وما لا يستطيعه", p: ["يعرف السائق الطرق ويلتزم بالخطة التي تضعها. وهو ليس مرشدًا، ولا يشتري التذاكر، ولا يستطيع الدخول إلى المواقع الخاضعة للرقابة. رتّب التذاكر والتصاريح مع الجهات المشغّلة الرسمية، واستعن بنا للتنقل بين الأماكن."] },
      ],
      faqs: [
        { q: "هل أضيف مرشدًا إلى حجز الجولة؟", a: "لا توفر RideSaudi مرشدين. ويمكنك ترتيب مرشد منفصل وننسق الاستلام حول الجولة." },
        { q: "أي وجهة سعودية أفضل في الصيف؟", a: "يختار كثير من الزوار المرتفعات حول أبها والطائف لطقسها الأبرد. أخبرنا بتواريخك وما تريد رؤيته." },
      ],
    },
  },
  [`${L}/luxury-intercity-transfers`]: {
    en: {
      sections: [
        { h: "Setting up the cabin", p: ["On a long road, small comforts matter: temperature, a quiet cabin, space for a laptop and phone charging. Tell us what you want, and whether you plan to work or rest, and we confirm what the vehicle category can offer for your date rather than promise features."] },
      ],
      faqs: [
        { q: "Can I ask for a quiet journey with no conversation?", a: "Yes. Mention it in the enquiry and the driver is briefed." },
        { q: "Can I request a particular luxury model?", a: "You can state a preference. Availability for your date is confirmed in the quotation." },
      ],
    },
    ar: {
      sections: [
        { h: "تهيئة المقصورة", p: ["في الطريق الطويل تهم الراحات الصغيرة: درجة الحرارة وهدوء المقصورة ومساحة للحاسوب وشحن الهاتف. أخبرنا بما تريد وهل ستعمل أم تستريح، ونؤكد ما تقدمه فئة المركبة لتاريخك بدل أن نعد بمزايا."] },
      ],
      faqs: [
        { q: "هل أطلب رحلة هادئة دون حديث؟", a: "نعم. اذكر ذلك في الطلب ويُبلَّغ السائق." },
        { q: "هل أطلب طرازًا فاخرًا بعينه؟", a: "يمكنك ذكر تفضيل. وتُؤكَّد الإتاحة لتاريخك في عرض السعر." },
      ],
    },
  },
  [`${S}/business-travel`]: {
    en: {
      sections: [
        { h: "Repeat visits and standing arrangements", p: ["Companies that bring visitors every month can describe the pattern once: the usual airports, hotels and offices, the typical group size and who approves the booking. We quote the arrangement individually and confirm availability for each visit, so the next booking starts from a known plan."] },
      ],
      faqs: [
        { q: "Can a company name several authorised bookers?", a: "Yes. List the people who may request or change bookings and we direct confirmations to them." },
        { q: "Can a visitor's host receive the pickup details?", a: "Yes. Name the host as a second contact and we share the pickup details with them." },
      ],
    },
    ar: {
      sections: [
        { h: "الزيارات المتكررة والترتيبات الثابتة", p: ["تستطيع الشركات التي تستقدم زوارًا كل شهر وصف النمط مرة واحدة: المطارات والفنادق والمكاتب المعتادة، وحجم المجموعة المعتاد، ومن يعتمد الحجز. فنسعّر الترتيب على حدة ونؤكد الإتاحة لكل زيارة، فيبدأ الحجز التالي من خطة معروفة."] },
      ],
      faqs: [
        { q: "هل تسمّي الشركة عدة أشخاص مخوّلين بالحجز؟", a: "نعم. اذكر من يحق لهم طلب الحجوزات أو تغييرها ونوجّه التأكيدات إليهم." },
        { q: "هل يتلقى مضيف الزائر تفاصيل الاستلام؟", a: "نعم. سمِّ المضيف جهة اتصال ثانية ونشاركه تفاصيل الاستلام." },
      ],
    },
  },
  [`${E}/group-event-transport`]: {
    en: {
      sections: [
        { h: "Late finishes and the ride back to the hotel", p: ["Events often run later than the programme says. Agree a window for the return, tell us who decides when to call the cars, and say what happens if the event runs over. Everyone benefits from knowing the answer before the evening, not at the kerb."] },
      ],
      faqs: [
        { q: "Can the same vehicles take the group back to different hotels?", a: "Yes. List each hotel and the number of people going to it, and the return is planned as one run." },
        { q: "What if only half the group wants to leave early?", a: "Tell us in advance, and a second pickup time can be arranged and quoted." },
      ],
    },
    ar: {
      sections: [
        { h: "الانتهاء المتأخر والعودة إلى الفندق", p: ["كثيرًا ما تمتد الفعاليات بعد ما يقوله البرنامج. اتفق على نافذة للعودة، وأخبرنا من يقرر متى تُستدعى السيارات، وماذا يحدث إن تجاوزت الفعالية وقتها. وتعم الفائدة حين يُعرف الجواب قبل المساء لا على الرصيف."] },
      ],
      faqs: [
        { q: "هل تعيد المركبات نفسها المجموعة إلى فنادق مختلفة؟", a: "نعم. اذكر كل فندق وعدد من يذهب إليه وتُخطَّط العودة جولةً واحدة." },
        { q: "ماذا لو أراد نصف المجموعة المغادرة مبكرًا؟", a: "أخبرنا مسبقًا ويمكن ترتيب موعد استلام ثانٍ وتسعيره." },
      ],
    },
  },
  [`${G}/group-airport-transfers`]: {
    en: {
      sections: [
        { h: "Departures: collecting a group from the hotel", p: ["Going home is a different plan. Agree one lobby time for everyone, a bag count per room and the order in which vehicles load. Allow extra time for airline check-in desks, which usually handle a group more slowly than a single traveller."] },
      ],
      faqs: [
        { q: "Can the vehicles collect the group from several hotels for the airport?", a: "Yes. List each hotel, the pickup time and the number of people, and the run is quoted together." },
        { q: "Should a group leave earlier than a single traveller?", a: "Usually yes. Group check-in and baggage take longer, so plan a larger margin before the flight." },
      ],
    },
    ar: {
      sections: [
        { h: "المغادرة: استلام المجموعة من الفندق", p: ["العودة إلى الديار خطة مختلفة. اتفقوا على وقت واحد للتجمع في الردهة وعدد حقائب لكل غرفة وترتيب تحميل المركبات. واترك وقتًا إضافيًا لمكاتب تسجيل شركات الطيران، فهي تتعامل مع المجموعة عادةً أبطأ من المسافر الفرد."] },
      ],
      faqs: [
        { q: "هل تستلم المركبات المجموعة من عدة فنادق إلى المطار؟", a: "نعم. اذكر كل فندق ووقت الاستلام وعدد الأشخاص وتُسعَّر الجولة معًا." },
        { q: "هل تغادر المجموعة أبكر من المسافر الفرد؟", a: "عادةً نعم. يستغرق تسجيل المجموعة والحقائب وقتًا أطول، فخطّط هامشًا أكبر قبل الرحلة." },
      ],
    },
  },
  [`${E}/vip-event-chauffeur`]: {
    en: {
      sections: [
        { h: "When the schedule runs over", p: ["Sessions overrun and speakers are held back. Agree in advance who may change the pickup time on the day, how the driver is told, and how much standby time is already planned. That keeps a late finish from turning into a conflict with the next commitment."] },
      ],
      faqs: [
        { q: "Can the guest's team change the pickup time directly with the driver?", a: "Name the person authorised to do so, and the driver is told to take instructions only from them." },
        { q: "Can the chauffeur wait through a full-day conference?", a: "Yes, by arrangement. Standby time and its terms are in your quotation." },
      ],
    },
    ar: {
      sections: [
        { h: "حين يتجاوز البرنامج وقته", p: ["تتجاوز الجلسات وقتها ويتأخر المتحدثون. اتفق مسبقًا من يحق له تغيير وقت الاستلام يوم الفعالية، وكيف يُبلَّغ السائق، وكم من وقت الانتظار مخطط له أصلًا. فلا يتحول الانتهاء المتأخر إلى تعارض مع الارتباط التالي."] },
      ],
      faqs: [
        { q: "هل يغيّر فريق الضيف وقت الاستلام مع السائق مباشرة؟", a: "سمِّ الشخص المخوّل بذلك ويُبلَّغ السائق بتلقي التعليمات منه وحده." },
        { q: "هل ينتظر السائق طوال مؤتمر يوم كامل؟", a: "نعم، بالترتيب المسبق. ووقت الانتظار وشروطه في عرض السعر." },
      ],
    },
  },
};

export function applyBatch4Enrichments(pages: ServicePage[]) {
  for (const [path, byLocale] of Object.entries(batch4Enrichments)) {
    const page = pages.find((p) => p.path === path);
    if (!page) throw new Error(`batch4Enrichments: unknown page ${path}`);
    page.updated = U;
    for (const locale of Object.keys(byLocale) as Locale[]) {
      const c = page.copy[locale];
      c.sections = [...c.sections, ...byLocale[locale].sections];
      c.faqs = [...c.faqs, ...byLocale[locale].faqs];
    }
  }
}

/** Guides: informational, so no commercial claims; same additive approach. */
export const guideEnrichments: Record<string, Record<Locale, Add>> = {
  "airport-pickup-tips-saudi-arrivals": {
    en: {
      sections: [
        { h: "Before you fly: a short message to send your provider", p: ["Send one message with your name, flight number, arrival date, number of passengers, bags by size and the destination address. Keep a screenshot of the reply. If anything changes before you fly, reply to the same thread so the latest plan is always in one place."] },
        { h: "On arrival: finding your driver", p: ["After immigration and baggage, look for the arrangement you agreed: a name sign in the arrivals hall or a message with the driver's location. If you cannot find the driver, message first and then call, and stay near the arrivals exit rather than walking to the car park with your bags."] },
        { h: "Connecting flights and late nights", p: ["If you connect through Riyadh or Jeddah, say so, because the arrival that matters is your final flight, not the first. For arrivals after midnight, also tell your hotel so reception is staffed when you reach it."] },
      ],
      faqs: [
        { q: "What should I do if my phone has no signal at the airport?", a: "Agree the meeting point in writing before you fly, and connect to the airport Wi-Fi if available. The driver will wait near the agreed point." },
        { q: "Should I pay before or after the pickup?", a: "Follow what your confirmation says. Only pay using details sent from the provider's official channels." },
      ],
    },
    ar: {
      sections: [
        { h: "قبل السفر: رسالة موجزة ترسلها للمزوّد", p: ["أرسل رسالة واحدة فيها اسمك ورقم رحلتك وتاريخ الوصول وعدد الركاب والحقائب بأحجامها وعنوان الوجهة. واحتفظ بلقطة شاشة للرد. وإن تغيّر شيء قبل السفر فرُدّ في المحادثة نفسها لتبقى آخر خطة في مكان واحد."] },
        { h: "عند الوصول: إيجاد السائق", p: ["بعد الجوازات والحقائب ابحث عن الترتيب المتفق عليه: لوحة باسمك في صالة الوصول أو رسالة بموقع السائق. وإن لم تجده فراسله أولًا ثم اتصل، وابقَ قرب مخرج الوصول بدل المشي بحقائبك نحو المواقف."] },
        { h: "الرحلات المتصلة والليالي المتأخرة", p: ["إن كنت ستتصل عبر الرياض أو جدة فاذكر ذلك، لأن الوصول المهم هو رحلتك الأخيرة لا الأولى. وللوصول بعد منتصف الليل أخبر فندقك أيضًا ليكون الاستقبال مفتوحًا عند وصولك."] },
      ],
      faqs: [
        { q: "ماذا أفعل إن لم تكن لهاتفي شبكة في المطار؟", a: "اتفق على نقطة اللقاء كتابةً قبل السفر، واتصل بشبكة الواي فاي في المطار إن وُجدت. وسينتظر السائق قرب النقطة المتفق عليها." },
        { q: "هل أدفع قبل الاستلام أم بعده؟", a: "اتبع ما يقوله تأكيدك. ولا تدفع إلا وفق بيانات تصلك من القنوات الرسمية للمزوّد." },
      ],
    },
  },
  "cross-border-private-transfer-checklist": {
    en: {
      sections: [
        { h: "The day before you travel", p: ["Re-check passports and visas are valid for the dates, charge phones, and keep the booking confirmation and the driver's contact where you can open it offline. Confirm the pickup time and place in writing, and make sure every passenger on the booking is physically coming."] },
      ],
      faqs: [
        { q: "What if one passenger is refused entry at the border?", a: "Entry decisions belong to the authorities. Tell your provider immediately so the rest of the arrangement can be handled, as set out in your confirmation." },
        { q: "Should I carry printed documents?", a: "It is sensible to carry the documents the authorities require, in the form they require. Check each authority's current guidance before you travel." },
      ],
    },
    ar: {
      sections: [
        { h: "اليوم السابق للسفر", p: ["أعد التحقق من أن الجوازات والتأشيرات سارية في التواريخ، واشحن الهواتف، واحتفظ بتأكيد الحجز وتواصل السائق في مكان تفتحه دون إنترنت. وأكّد وقت الاستلام ومكانه كتابةً، وتأكد أن كل راكب في الحجز قادم فعلًا."] },
      ],
      faqs: [
        { q: "ماذا لو رُفض دخول أحد الركاب عند المنفذ؟", a: "قرارات الدخول من شأن الجهات المختصة. أبلغ مزوّدك فورًا ليُتعامل مع بقية الترتيب بحسب ما ورد في تأكيدك." },
        { q: "هل أحمل وثائق مطبوعة؟", a: "من المعقول حمل الوثائق التي تشترطها الجهات بالصيغة التي تشترطها. راجع إرشادات كل جهة الحالية قبل السفر." },
      ],
    },
  },
};

export function applyGuideEnrichments(posts: BlogPost[]) {
  for (const [slug, byLocale] of Object.entries(guideEnrichments)) {
    const post = posts.find((p) => p.slug === slug);
    if (!post) throw new Error(`guideEnrichments: unknown guide ${slug}`);
    post.updated = U;
    for (const locale of Object.keys(byLocale) as Locale[]) {
      const c = post.copy[locale];
      c.sections = [...c.sections, ...byLocale[locale].sections];
      c.faqs = [...c.faqs, ...byLocale[locale].faqs];
    }
  }
}
