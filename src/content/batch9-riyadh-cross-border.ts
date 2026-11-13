import type { ServicePage } from "./types";

const U = "2026-11-08";
const I = "services/intercity-transfers";
const X = "services/cross-border-transfers";
const C = "services/city-transport/riyadh";

/**
 * Riyadh-origin cross-border deep dives. The country pages (cross-border-transfers/qatar, /uae) keep
 * the Eastern-Province-origin and general guidance; these pages cover Riyadh pickups and the return to
 * Riyadh. Distances and times are approximate and come from public travel sources, never from RideSaudi
 * operations. Entry rules are NOT stated: travellers are sent to the official authorities (SEO-RULES.md
 * section 3). Vehicle and driver cross-border permission is an owner fact that is still unverified.
 */
export const batch9RiyadhCrossBorder: ServicePage[] = [
  {
    path: `${I}/riyadh-to-doha`,
    parent: `${X}/qatar`,
    variant: "default",
    service: "intercity",
    related: [`${X}/qatar`, X, "services/airport-transfers/riyadh-airport", `${I}/riyadh-to-dammam`, C, "services/intercity-transfers/dammam-to-doha"],
    updated: U,
    copy: {
      en: {
        nav: "Riyadh to Doha",
        title: "Riyadh to Doha Private Transfer by Road",
        description: "Request a private car with a driver between Riyadh and Doha via the Salwa border, in either direction. Plan the journey and get a RideSaudi quotation.",
        h1: "Riyadh to Doha by private car, across the Salwa border",
        eyebrow: "Cross-border · Riyadh ⇄ Doha",
        answer: "A private Riyadh to Doha transfer is a pre-booked car with a driver from Riyadh to Doha, Qatar, by road via the Salwa border, and the same in reverse. Public travel sources put the drive at roughly 570 to 580 km and 6 to 7 hours plus border time. RideSaudi quotes each journey individually; documents are yours to confirm and availability is confirmed before you commit.",
        summary: "A planned private road journey between Riyadh and Doha via the Salwa border.",
        sections: [
          { h: "The route in outline", p: ["The journey leaves Riyadh, crosses the Eastern Province and reaches Qatar at Salwa, which is Qatar's only land border. From the border the road continues to Doha. Distance and time are approximate: public travel sources give about 570 to 580 km and 6 to 7 hours of driving, before border processing, which some travellers report can take up to around two hours. Traffic, weather, stops and queues change the real figure, so we do not promise an arrival time."] },
          { h: "Riyadh to Doha: starting in Riyadh", p: ["Most outbound travellers start from an address in the northern districts, a hotel in Olaya or a business address in KAFD, or arrive at King Khalid International Airport and continue by road rather than flying on. Tell us where in Riyadh you start, because the first part of the day depends on crossing the city; see Riyadh airport transfer and the Riyadh city page. Give your Doha destination as an area or address, for example West Bay, Lusail, The Pearl or a hotel, and say if you need to reach a meeting or flight at a fixed time."] },
          { h: "Doha to Riyadh: the return journey", p: ["Returning travellers usually start at a Doha hotel, residence or Hamad International Airport and end at a Riyadh home, hotel or office. The return has its own planning: you leave Qatar by the same Salwa crossing, so check exit and Saudi entry requirements for every passenger, including residency and visa status, before you set off. Add the return to the same enquiry when you know the date, or request it separately if your plans are open."] },
          { h: "Documents and permissions stay with you", p: ["Entry rules depend on nationality, residency and purpose of travel and change over time. RideSaudi does not issue visas or permits. Check current requirements for each passenger with the Saudi Ministry of Interior and the Saudi visa portal, and with Qatar's Ministry of Interior, before booking. Whether a particular vehicle and driver can cross the border, and how a crossing is handled, is confirmed in your quotation; do not assume it."] },
          { h: "Why choose the road", p: ["A private car suits groups and families with luggage, door-to-door travel on both ends, and trips where the schedule at either end is flexible. Flights are quicker for a single traveller with no luggage. Compare against your plans; the Saudi to Qatar page covers the route from the Eastern Province."] },
        ],
        checklist: { h: "Include this in your Riyadh to Doha enquiry", items: ["Direction, date and preferred departure time", "Exact Riyadh pickup and Doha destination, with area", "Passengers' nationalities and residency status", "Luggage and any special items", "Return journey, if known, and any fixed flight or meeting", "Vehicle preference"] },
        faqs: [
          { q: "Can I book a private car from Riyadh to Doha?", a: "You can request it. The journey is quoted individually and confirmed only after you accept the quotation." },
          { q: "How long does Riyadh to Doha take by road?", a: "Public travel sources give roughly 570 to 580 km and 6 to 7 hours of driving before border processing. Treat that as approximate; the quotation covers planned timing." },
          { q: "Which border does the Riyadh to Doha route use?", a: "The Salwa crossing, Qatar's only land border." },
          { q: "Do you arrange my visa or entry permit?", a: "No. Check requirements for every passenger with the official Saudi and Qatari authorities before you travel." },
          { q: "Can you collect me from Doha and bring me to Riyadh?", a: "You can request the reverse journey from a Doha hotel, residence or Hamad International Airport. Availability is confirmed in the quotation." },
          { q: "Can the same car take me across the border?", a: "Whether a vehicle and driver can cross is confirmed in your quotation, not assumed." },
        ],
      },
      ar: {
        nav: "الرياض إلى الدوحة",
        title: "الرياض إلى الدوحة: توصيل خاص بالسيارة",
        description: "اطلب سيارة خاصة بسائق بين الرياض والدوحة عبر منفذ سلوى بالاتجاهين. خطط لرحلتك واستلم عرض سعر من RideSaudi.",
        h1: "من الرياض إلى الدوحة بسيارة خاصة عبر منفذ سلوى",
        eyebrow: "عبر الحدود · الرياض ⇄ الدوحة",
        answer: "التوصيل الخاص من الرياض إلى الدوحة هو سيارة بسائق وبحجز مسبق من الرياض إلى الدوحة في قطر برًّا عبر منفذ سلوى، والعكس. وتقدّر مصادر السفر العامة الطريق بنحو 570 إلى 580 كم وساعات قيادة بين 6 و7 إضافة إلى وقت المنفذ. تُسعِّر RideSaudi كل رحلة على حدة؛ والوثائق عليك التحقق منها وتتأكد الإتاحة قبل أن تلتزم.",
        summary: "رحلة برية خاصة مخطط لها بين الرياض والدوحة عبر منفذ سلوى.",
        sections: [
          { h: "المسار باختصار", p: ["تنطلق الرحلة من الرياض وتعبر المنطقة الشرقية وتصل إلى قطر عند سلوى، وهو المنفذ البري الوحيد لقطر. ومن المنفذ يتابع الطريق إلى الدوحة. والمسافة والزمن تقريبيان: فمصادر السفر العامة تذكر نحو 570 إلى 580 كم وما بين 6 و7 ساعات قيادة قبل إجراءات المنفذ، وقد يستغرق بعضها بحسب ما يذكره مسافرون نحو ساعتين. ويغيّر الازدحام والطقس والتوقفات والطوابير الزمن الفعلي، ولذلك لا نَعِد بوقت وصول."] },
          { h: "من الرياض إلى الدوحة: الانطلاق من الرياض", p: ["ينطلق معظم المسافرين ذهابًا من عنوان في الأحياء الشمالية أو فندق في العليا أو مقر أعمال في مركز الملك عبدالله المالي، أو يصلون إلى مطار الملك خالد الدولي ويتابعون برًّا بدل الطيران. أخبرنا من أين تبدأ في الرياض لأن الجزء الأول من اليوم يتوقف على عبور المدينة؛ راجع صفحتي التوصيل من مطار الرياض والنقل داخل الرياض. وحدد وجهتك في الدوحة بالمنطقة أو العنوان، مثل الخليج الغربي أو لوسيل أو اللؤلؤة أو فندق، واذكر إن كان عليك الوصول إلى اجتماع أو رحلة في وقت ثابت."] },
          { h: "من الدوحة إلى الرياض: رحلة العودة", p: ["يبدأ العائدون عادةً من فندق أو سكن في الدوحة أو من مطار حمد الدولي وينتهون في منزل أو فندق أو مكتب في الرياض. وللعودة تخطيطها الخاص: فأنت تغادر قطر عبر منفذ سلوى نفسه، فتحقق من متطلبات الخروج والدخول إلى السعودية لكل راكب، ومنها الإقامة والتأشيرة، قبل الانطلاق. وأضف العودة إلى الطلب نفسه إن عرفت تاريخها، أو اطلبها لاحقًا إن كانت خططك مفتوحة."] },
          { h: "الوثائق والتصاريح عليك", p: ["تعتمد شروط الدخول على الجنسية والإقامة والغرض من السفر وتتغير مع الوقت. ولا تصدر RideSaudi تأشيرات ولا تصاريح. تحقق من المتطلبات الحالية لكل راكب لدى وزارة الداخلية السعودية ومنصة التأشيرة السعودية ولدى وزارة الداخلية في قطر قبل الحجز. وأما إمكانية عبور مركبة وسائق محددين الحدود وكيفية معالجة العبور فتُؤكَّد في عرض السعر؛ فلا تفترضها."] },
          { h: "لماذا الطريق البري", p: ["تناسب السيارة الخاصة المجموعات والعائلات ذات الحقائب والتنقل من الباب إلى الباب في الطرفين والرحلات التي يمكن أن يتغير جدولها في أحد الطرفين. أما الطيران فأسرع لمسافر وحده بلا حقائب. قارن بحسب خطتك؛ وتغطي صفحة السعودية إلى قطر المسار من المنطقة الشرقية."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب الرياض إلى الدوحة", items: ["الاتجاه والتاريخ ووقت الانطلاق المفضل", "عنوان الاستلام في الرياض والوجهة في الدوحة مع المنطقة", "جنسيات الركاب وحالة إقامتهم", "الحقائب وأي أغراض خاصة", "رحلة العودة إن عُرفت وأي رحلة طيران أو اجتماع بموعد ثابت", "تفضيل السيارة"] },
        faqs: [
          { q: "هل يمكنني حجز سيارة خاصة من الرياض إلى الدوحة؟", a: "يمكنك طلب ذلك. تُسعَّر الرحلة على حدة ولا تتأكد إلا بعد موافقتك على عرض السعر." },
          { q: "كم تستغرق الرحلة من الرياض إلى الدوحة بالسيارة؟", a: "تذكر مصادر السفر العامة نحو 570 إلى 580 كم وما بين 6 و7 ساعات قيادة قبل إجراءات المنفذ. اعتبر ذلك تقريبيًا؛ ويغطي عرض السعر التوقيت المخطط." },
          { q: "أي منفذ يستخدمه مسار الرياض إلى الدوحة؟", a: "منفذ سلوى، وهو المنفذ البري الوحيد لقطر." },
          { q: "هل ترتبون تأشيرتي أو تصريح دخولي؟", a: "لا. تحقق من المتطلبات لكل راكب لدى الجهات الرسمية السعودية والقطرية قبل السفر." },
          { q: "هل يمكنكم استلامي من الدوحة وإيصالي إلى الرياض؟", a: "يمكنك طلب الرحلة العكسية من فندق أو سكن في الدوحة أو من مطار حمد الدولي. وتُؤكَّد الإتاحة في عرض السعر." },
          { q: "هل تعبر السيارة نفسها الحدود بي؟", a: "تُؤكَّد إمكانية عبور مركبة وسائق في عرض السعر ولا تُفترض." },
        ],
      },
    },
  },

  {
    path: `${I}/riyadh-to-dubai`,
    parent: `${X}/uae`,
    variant: "default",
    service: "intercity",
    related: [`${X}/uae`, X, "services/airport-transfers/riyadh-airport", `${I}/riyadh-to-dammam`, C, "services/intercity-transfers/riyadh-to-abu-dhabi"],
    updated: U,
    copy: {
      en: {
        nav: "Riyadh to Dubai",
        title: "Riyadh to Dubai Private Transfer by Road",
        description: "Request a private car with a driver between Riyadh and Dubai via the Batha and Ghuwaifat crossing, in either direction. Get a RideSaudi quotation.",
        h1: "Riyadh to Dubai by private car, a long journey across the Batha crossing",
        eyebrow: "Cross-border · Riyadh ⇄ Dubai",
        answer: "A private Riyadh to Dubai transfer is a pre-booked car with a driver from Riyadh to Dubai by road, crossing from Saudi Arabia at Batha into the UAE at Ghuwaifat, and the same in reverse. Public sources give widely differing figures, roughly 980 to 1,200 km and 9 to 12 hours. RideSaudi quotes each journey individually; documents are yours to confirm and availability is confirmed first.",
        summary: "A planned private road journey between Riyadh and Dubai, a very long cross-border trip.",
        sections: [
          { h: "A route that needs planning, not improvising", p: ["This is one of the longest road journeys RideSaudi can be asked about. The usual crossing is Batha on the Saudi side and Ghuwaifat on the UAE side, then the road passes through the Abu Dhabi emirate before Dubai. Published distances and times vary from roughly 980 to 1,200 km and 9 to 12 hours of driving, and border processing can add up to around two hours on busy days. Treat all figures as approximate; the quotation covers the planned timing and any rest arrangements."] },
          { h: "Riyadh to Dubai: starting in Riyadh", p: ["Outbound travellers start from a home or hotel in Riyadh, a business address, or King Khalid International Airport. Because the day is long, tell us the earliest and latest departure that suits you and whether you need to arrive at a fixed time. State the Dubai destination as an area, such as Downtown, DIFC, Dubai Marina or an airport, so the final leg is planned; see Riyadh airport transfer for the Riyadh side."] },
          { h: "Dubai to Riyadh: the return journey", p: ["Return travellers start at a Dubai hotel, residence or airport and head back through Abu Dhabi emirate to Ghuwaifat and into Saudi Arabia at Batha. Check exit and Saudi entry requirements for every passenger, including residency and visa status, before you leave. If you plan to stop in Abu Dhabi, Al Ain or Sharjah on the way, mention it in your enquiry; those stops are part of planning this route rather than separate pages."] },
          { h: "Documents and permissions stay with you", p: ["Entry rules depend on nationality, residency and purpose of travel and change over time. RideSaudi does not issue visas or permits. Check current requirements for each passenger with the Saudi Ministry of Interior and the Saudi visa portal, and with the UAE Federal Authority for Identity, Citizenship, Customs and Port Security. Whether a particular vehicle and driver can cross is confirmed in your quotation; do not assume it."] },
          { h: "Road or air for Riyadh to Dubai", p: ["Flights are much faster for one traveller with little luggage. A private car suits families, groups, relocations and travellers who want a door-to-door journey and the freedom to stop. Because of the length, plan for breaks and consider whether a single day suits everyone. The Saudi Arabia to UAE page covers the route from the Eastern Province."] },
        ],
        checklist: { h: "Include this in your Riyadh to Dubai enquiry", items: ["Direction, date and the earliest and latest departure time", "Exact Riyadh pickup and Dubai destination, with area", "Passengers' nationalities and residency status", "Luggage and any special items", "Planned stops, such as Abu Dhabi or Al Ain", "Return journey, if known"] },
        faqs: [
          { q: "Can I book a private car from Riyadh to Dubai?", a: "You can request it. The journey is quoted individually and confirmed only after you accept the quotation." },
          { q: "How far is Riyadh to Dubai by road?", a: "Public sources vary, from roughly 980 to 1,200 km and 9 to 12 hours of driving, before border processing. Treat this as approximate." },
          { q: "Which crossing does the Riyadh to Dubai route use?", a: "The usual crossing is Batha on the Saudi side and Ghuwaifat on the UAE side." },
          { q: "Can we stop in Abu Dhabi on the way?", a: "Mention it in your enquiry. Planned stops are confirmed in the quotation." },
          { q: "Do you arrange visas?", a: "No. Check requirements for every passenger with the official Saudi and UAE authorities before you travel." },
          { q: "Can you bring me from Dubai back to Riyadh?", a: "You can request the reverse journey from a Dubai hotel, residence or airport. Availability is confirmed in the quotation." },
          { q: "Is the drive suitable in one day?", a: "It is very long. Say what suits your group so rest arrangements can be agreed in the quotation." },
        ],
      },
      ar: {
        nav: "الرياض إلى دبي",
        title: "الرياض إلى دبي: توصيل خاص بالسيارة",
        description: "اطلب سيارة خاصة بسائق بين الرياض ودبي عبر منفذ البطحاء وغويفات بالاتجاهين. خطط لرحلتك واستلم عرض سعر من RideSaudi.",
        h1: "من الرياض إلى دبي بسيارة خاصة، رحلة طويلة عبر منفذ البطحاء",
        eyebrow: "عبر الحدود · الرياض ⇄ دبي",
        answer: "التوصيل الخاص من الرياض إلى دبي هو سيارة بسائق وبحجز مسبق من الرياض إلى دبي برًّا، تعبر فيه من السعودية عند البطحاء إلى الإمارات عند غويفات، والعكس. وتتباين الأرقام في المصادر العامة تباينًا واسعًا، من نحو 980 إلى 1200 كم وما بين 9 و12 ساعة. تُسعِّر RideSaudi كل رحلة على حدة؛ والوثائق عليك التحقق منها وتتأكد الإتاحة أولًا.",
        summary: "رحلة برية خاصة مخطط لها بين الرياض ودبي، رحلة طويلة جدًا عبر الحدود.",
        sections: [
          { h: "مسار يحتاج إلى تخطيط لا ارتجال", p: ["هذه من أطول الرحلات البرية التي يمكن السؤال عنها لدى RideSaudi. والمنفذ المعتاد هو البطحاء من الجانب السعودي وغويفات من الجانب الإماراتي، ثم يمر الطريق بإمارة أبوظبي قبل دبي. وتتفاوت المسافات والأزمنة المنشورة من نحو 980 إلى 1200 كم وما بين 9 و12 ساعة قيادة، وقد تضيف إجراءات المنفذ حتى نحو ساعتين في الأيام المزدحمة. اعتبر كل الأرقام تقريبية؛ ويغطي عرض السعر التوقيت المخطط وأي ترتيبات للراحة."] },
          { h: "من الرياض إلى دبي: الانطلاق من الرياض", p: ["ينطلق المسافرون ذهابًا من منزل أو فندق في الرياض أو عنوان عمل أو من مطار الملك خالد الدولي. ولأن اليوم طويل، أخبرنا بأبكر وأحدث وقت انطلاق يناسبك وهل عليك الوصول في وقت ثابت. وحدد وجهتك في دبي بالمنطقة، مثل وسط المدينة أو مركز دبي المالي العالمي أو مرسى دبي أو مطار، ليُخطَّط المقطع الأخير؛ وراجع صفحة التوصيل من مطار الرياض لجانب الرياض."] },
          { h: "من دبي إلى الرياض: رحلة العودة", p: ["يبدأ العائدون من فندق أو سكن أو مطار في دبي ويتجهون عبر إمارة أبوظبي إلى غويفات ثم يدخلون السعودية عند البطحاء. تحقق من متطلبات الخروج والدخول إلى السعودية لكل راكب، ومنها الإقامة والتأشيرة، قبل المغادرة. وإن كنت تنوي التوقف في أبوظبي أو العين أو الشارقة في الطريق فاذكر ذلك في استفسارك؛ فتلك التوقفات جزء من تخطيط هذا المسار لا صفحات منفصلة."] },
          { h: "الوثائق والتصاريح عليك", p: ["تعتمد شروط الدخول على الجنسية والإقامة والغرض من السفر وتتغير مع الوقت. ولا تصدر RideSaudi تأشيرات ولا تصاريح. تحقق من المتطلبات الحالية لكل راكب لدى وزارة الداخلية السعودية ومنصة التأشيرة السعودية ولدى الهيئة الاتحادية للهوية والجنسية والجمارك وأمن المنافذ في الإمارات. وأما إمكانية عبور مركبة وسائق محددين فتُؤكَّد في عرض السعر؛ فلا تفترضها."] },
          { h: "الطريق أم الطيران بين الرياض ودبي", p: ["الطيران أسرع بكثير لمسافر وحده بحقائب قليلة. وتناسب السيارة الخاصة العائلات والمجموعات والانتقال الكامل للإقامة ومن يريد رحلة من الباب إلى الباب وحرية التوقف. ولطول الرحلة خطط للاستراحات واسأل نفسك هل يناسب يوم واحد الجميع. وتغطي صفحة السعودية إلى الإمارات المسار من المنطقة الشرقية."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب الرياض إلى دبي", items: ["الاتجاه والتاريخ وأبكر وأحدث وقت انطلاق", "عنوان الاستلام في الرياض والوجهة في دبي مع المنطقة", "جنسيات الركاب وحالة إقامتهم", "الحقائب وأي أغراض خاصة", "التوقفات المخططة مثل أبوظبي أو العين", "رحلة العودة إن عُرفت"] },
        faqs: [
          { q: "هل يمكنني حجز سيارة خاصة من الرياض إلى دبي؟", a: "يمكنك طلب ذلك. تُسعَّر الرحلة على حدة ولا تتأكد إلا بعد موافقتك على عرض السعر." },
          { q: "ما المسافة من الرياض إلى دبي برًّا؟", a: "تتباين المصادر العامة من نحو 980 إلى 1200 كم وما بين 9 و12 ساعة قيادة قبل إجراءات المنفذ. اعتبر ذلك تقريبيًا." },
          { q: "أي منفذ يستخدمه مسار الرياض إلى دبي؟", a: "المنفذ المعتاد هو البطحاء من الجانب السعودي وغويفات من الجانب الإماراتي." },
          { q: "هل يمكننا التوقف في أبوظبي في الطريق؟", a: "اذكر ذلك في استفسارك. وتُؤكَّد التوقفات المخططة في عرض السعر." },
          { q: "هل ترتبون التأشيرات؟", a: "لا. تحقق من المتطلبات لكل راكب لدى الجهات الرسمية السعودية والإماراتية قبل السفر." },
          { q: "هل يمكنكم إعادتي من دبي إلى الرياض؟", a: "يمكنك طلب الرحلة العكسية من فندق أو سكن أو مطار في دبي. وتُؤكَّد الإتاحة في عرض السعر." },
          { q: "هل تناسب الرحلة يومًا واحدًا؟", a: "هي رحلة طويلة جدًا. اذكر ما يناسب مجموعتك ليُتَّفق على ترتيبات الراحة في عرض السعر." },
        ],
      },
    },
  },
];
