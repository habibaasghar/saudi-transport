import type { Locale } from "@/i18n/routing";
import type { ServicePage } from "./types";

/**
 * Airport pages from master brief Phase 3B (2026-11-27): Tabuk (TUU) and Yanbu (YNB).
 *
 * Every distance and time below was read from Google Maps on 27 Nov 2026 (driving, usual traffic, no stops), starting
 * at the airport. Airline names and schedules are deliberately not published: they change often.
 *
 * NEOM Bay Airport (NUM) has no page of its own. Only three local facts could be verified (Sharma, Duba and Tabuk
 * distances), its commercial schedule is small and changing, and the area around it is a restricted project zone.
 * Under the brief's own quality gate (fewer than 5 local facts: add a section to an existing page), NUM is covered
 * by a section and table rows on the Tabuk airport page.
 */
const U = "2026-11-27";
const S = "services";
const A = `${S}/airport-transfers`;
const I = `${S}/intercity-transfers`;
const C = `${S}/city-transport`;

export const TABUK_AIRPORT = `${A}/tabuk-airport`;
export const YANBU_AIRPORT = `${A}/yanbu-airport`;

const checked = { en: "Google Maps, usual traffic, no stops, checked 27 Nov 2026", ar: "خرائط جوجل، حركة سير معتادة، دون توقف، تحقق في 27 نوفمبر 2026" };

export const northWestAirportPages: ServicePage[] = [
  {
    path: TABUK_AIRPORT,
    parent: A,
    variant: "default",
    service: "airport",
    related: [`${C}/tabuk`, `${A}/alula-airport`, `${I}/riyadh-to-tabuk`, "services/tourism-transport/alula", "fleet/gmc-yukon-with-driver"],
    updated: U,
    copy: {
      en: {
        nav: "Tabuk Airport Transfer",
        title: "Tabuk Airport (TUU) Transfer: Private Car",
        description: "Private car with a driver from Tabuk airport (TUU) to the city, Wadi Disah, AlUla, Duba or Haql, with NEOM Bay compared. Send your flight for a quote.",
        h1: "Tabuk airport transfer from Prince Sultan bin Abdulaziz International Airport",
        eyebrow: "Tabuk · Prince Sultan bin Abdulaziz International Airport (TUU)",
        answer: "Prince Sultan bin Abdulaziz International Airport (TUU) is about 7 km from Tabuk Fortress in the city centre, around 11 minutes by car. RideSaudi arranges a pre-booked private car with a driver from TUU to Tabuk hotels or further out: Wadi Disah (about 261 km), AlUla (about 297 km) or Duba on the Red Sea (about 199 km). Send your flight for a quote.",
        summary: "Private transfers from Tabuk's airport (TUU) to the city, Wadi Disah, AlUla, Duba and Haql.",
        table: {
          h: "Distances from Tabuk airport (TUU)",
          head: ["From TUU to", "Distance", "Driving time", "Note"],
          rows: [
            ["Tabuk Fortress, city centre", "About 6.8 km", "About 11 min", "Most city hotels are a short ride"],
            ["Wadi Disah", "About 261 km", "About 3 h 14 min", "A full day there and back"],
            ["AlUla", "About 297 km", "About 3 h 30 min", "When there is no suitable flight to AlUla (ULH)"],
            ["Duba, Red Sea coast", "About 199 km", "About 2 h 18 min", "Southern coast road"],
            ["Haql, Gulf of Aqaba", "About 233 km", "About 2 h 48 min", "North-west corner of the Kingdom"],
            ["NEOM Bay Airport (NUM)", "About 178 km", "About 1 h 57 min", "Near Sharma on the coast"],
            ["Source", checked.en, "", ""],
          ],
        },
        sections: [
          {
            h: "How far is Tabuk airport from the city?",
            p: [
              "Close. Google Maps puts Tabuk Fortress, in the old centre, about 6.8 km and 11 minutes from the terminal, so most hotel transfers inside the city take a quarter of an hour or less. The time that matters more is how long you spend between landing and reaching the kerb, so send the flight number rather than a fixed pickup time; the driver works to the actual landing time and meets you at the point agreed in the quotation.",
            ],
          },
          {
            h: "Where do travellers go from TUU?",
            p: ["The airport is a starting point for a large region, so say clearly whether you are staying in Tabuk or heading out:"],
            list: [
              "Tabuk city hotels and offices: a short ride from the terminal",
              "Wadi Disah, the red-rock canyon of the Tabuk region: about 261 km, a full day if you return the same evening",
              "AlUla: about 297 km, around 3 hours 30 minutes, for travellers who could not get a flight to AlUla International Airport",
              "Duba on the Red Sea: about 199 km by the shorter road",
              "Haql on the Gulf of Aqaba: about 233 km, in the far north-west",
            ],
          },
          {
            h: "Tabuk airport or NEOM Bay Airport (NUM)?",
            p: [
              "NEOM Bay Airport sits on the coast near Sharma, about 14 km from the town, about 86 km from Duba and about 173 km from Tabuk Fortress. Its commercial schedule is small and has changed several times, so check with your airline before you plan around it. TUU and NUM are about 178 km apart, just under two hours by road.",
              "If you are travelling for work on a project in the area, your host decides who may enter the site and arranges any permit. RideSaudi cannot obtain access; give us the host company, the gate or meeting point and your permit status, and the quotation confirms what can be arranged from either airport.",
            ],
          },
          {
            h: "Cold nights and long empty roads",
            p: [
              "Winter nights in the Tabuk region can be close to freezing, and the roads to Wadi Disah, Haql or AlUla cross long stretches with few services. For a late arrival heading out of the city, many travellers sleep in Tabuk and leave in daylight. Tell us the season, your luggage and any stops so the vehicle and the timing fit the trip.",
            ],
          },
          {
            h: "Flying out of Tabuk",
            p: [
              "For a departure, give the flight time and the pickup address. From a city hotel the drive is short; from Wadi Disah or AlUla it is more than three hours before any stop, so we plan the start time backwards from your check-in with a margin for the road. If you also need the arrival leg or a day with a driver in between, put everything in one enquiry and it is quoted together.",
            ],
          },
          {
            h: "Coming from Riyadh by road instead?",
            p: [
              "The road from Riyadh is about 1,273 km and usually planned over two days with a night in Hail, so most single travellers fly. For a team with equipment or a family relocating with a lot of luggage, the road can still make sense; see Riyadh to Tabuk for that plan.",
            ],
          },
        ],
        checklist: { h: "Send this with your Tabuk airport enquiry", items: ["Flight number, date and arrival or departure time", "Hotel, office or project gate, with a map pin if it is outside the city", "Adults, children and every bag by size", "Whether you are going on to Wadi Disah, AlUla, Duba or Haql", "For project sites: host company and permit status"] },
        faqs: [
          { q: "How far is Tabuk airport from the city centre?", a: "About 6.8 km from Tabuk Fortress, around 11 minutes by car in usual traffic (Google Maps, November 2026)." },
          { q: "Can I go straight from Tabuk airport to AlUla?", a: "You can request it. The road is about 297 km, around 3 hours 30 minutes before stops. Send your landing time and your AlUla hotel." },
          { q: "How far is Wadi Disah from Tabuk airport?", a: "About 261 km, roughly 3 hours 14 minutes of driving. A same-day return makes a long day, so many visitors leave early or stay a night nearby." },
          { q: "Should I fly to Tabuk or to NEOM Bay Airport?", a: "Compare the schedules for your dates. NEOM Bay Airport is close to Sharma and the coast, Tabuk has the larger airport, and the two are about 178 km apart by road." },
          { q: "Can you take me into a NEOM project site?", a: "Only if your host has arranged access for you. RideSaudi cannot grant entry; share the host, gate and permit details and we confirm what can be arranged." },
          { q: "What if my flight to Tabuk is delayed?", a: "Give the flight number when you book. The pickup is planned around the actual landing time, and any long wait or change of plan is agreed on WhatsApp." },
        ],
      },
      ar: {
        nav: "توصيل مطار تبوك",
        title: "توصيل مطار تبوك بسيارة خاصة مع سائق",
        description: "سيارة خاصة مع سائق من مطار تبوك إلى فنادق تبوك ووادي الديسة والعلا وضباء وحقل، مع مقارنة بمطار خليج نيوم. أرسل رقم رحلتك لعرض سعر.",
        h1: "توصيل مطار تبوك من مطار الأمير سلطان بن عبدالعزيز الدولي",
        eyebrow: "تبوك · مطار الأمير سلطان بن عبدالعزيز الدولي (TUU)",
        answer: "يبعد مطار الأمير سلطان بن عبدالعزيز الدولي في تبوك نحو 7 كم عن قلعة تبوك في وسط المدينة، أي قرابة 11 دقيقة بالسيارة. وترتب RideSaudi سيارة خاصة مع سائق بحجز مسبق من المطار إلى فنادق تبوك أو أبعد: وادي الديسة (نحو 261 كم)، والعلا (نحو 297 كم)، وضباء على البحر الأحمر (نحو 199 كم). أرسل رقم رحلتك لعرض سعر.",
        summary: "توصيل خاص من مطار تبوك إلى المدينة ووادي الديسة والعلا وضباء وحقل.",
        table: {
          h: "المسافات من مطار تبوك",
          head: ["من المطار إلى", "المسافة", "مدة القيادة", "ملاحظة"],
          rows: [
            ["قلعة تبوك، وسط المدينة", "نحو 6.8 كم", "نحو 11 دقيقة", "أغلب فنادق المدينة على مسافة قصيرة"],
            ["وادي الديسة", "نحو 261 كم", "نحو 3 س 14 د", "يوم كامل ذهابًا وعودة"],
            ["العلا", "نحو 297 كم", "نحو 3 س 30 د", "حين لا تتوفر رحلة مناسبة إلى مطار العلا"],
            ["ضباء، ساحل البحر الأحمر", "نحو 199 كم", "نحو 2 س 18 د", "عبر الطريق الأقصر"],
            ["حقل، خليج العقبة", "نحو 233 كم", "نحو 2 س 48 د", "أقصى شمال غرب المملكة"],
            ["مطار خليج نيوم", "نحو 178 كم", "نحو 1 س 57 د", "قرب شرما على الساحل"],
            ["المصدر", checked.ar, "", ""],
          ],
        },
        sections: [
          {
            h: "كم يبعد مطار تبوك عن المدينة؟",
            p: [
              "قريب. تقدّر خرائط جوجل المسافة إلى قلعة تبوك في وسط البلد بنحو 6.8 كم و11 دقيقة من مبنى المطار، فأغلب مشاوير الفنادق داخل المدينة ربع ساعة أو أقل. والأهم هو الوقت بين الهبوط والخروج من الصالة، لذلك أرسل رقم الرحلة بدل وقت استلام ثابت، فيعمل السائق على وقت الهبوط الفعلي ويقابلك في النقطة المتفق عليها في عرض السعر.",
            ],
          },
          {
            h: "إلى أين يتجه المسافرون من مطار تبوك؟",
            p: ["المطار بوابة لمنطقة واسعة، فاذكر بوضوح هل ستبقى في تبوك أم ستخرج منها:"],
            list: [
              "فنادق تبوك ومكاتبها: مشوار قصير من المطار",
              "وادي الديسة بصخوره الحمراء في منطقة تبوك: نحو 261 كم، ويوم كامل إن عدت في المساء نفسه",
              "العلا: نحو 297 كم وقرابة 3 ساعات و30 دقيقة، لمن لم يجد رحلة إلى مطار العلا الدولي",
              "ضباء على البحر الأحمر: نحو 199 كم عبر الطريق الأقصر",
              "حقل على خليج العقبة: نحو 233 كم في أقصى الشمال الغربي",
            ],
          },
          {
            h: "مطار تبوك أم مطار خليج نيوم؟",
            p: [
              "يقع مطار خليج نيوم على الساحل قرب شرما، على بعد نحو 14 كم من البلدة ونحو 86 كم من ضباء ونحو 173 كم من قلعة تبوك. وجدول رحلاته التجارية محدود وتغيّر أكثر من مرة، فتحقق من شركة الطيران قبل أن تبني خطتك عليه. والمسافة بين المطارين نحو 178 كم، أي أقل من ساعتين بالسيارة.",
              "وإن كانت رحلتك للعمل في مشروع بالمنطقة فالجهة المستضيفة هي من تحدد من يدخل الموقع وترتب أي تصريح. لا تستطيع RideSaudi استخراج تصريح دخول؛ أرسل اسم الجهة المستضيفة والبوابة أو نقطة اللقاء ووضع تصريحك، ويؤكد عرض السعر ما يمكن ترتيبه من أي المطارين.",
            ],
          },
          {
            h: "ليالٍ باردة وطرق طويلة خالية",
            p: [
              "قد تقترب ليالي الشتاء في منطقة تبوك من درجة التجمد، والطرق إلى وادي الديسة أو حقل أو العلا تقطع مسافات طويلة قليلة الخدمات. لذلك يبيت كثير ممن يصلون متأخرين في تبوك وينطلقون في النهار. أخبرنا بالموسم وحقائبك وأي توقفات لتناسب السيارة والتوقيت رحلتك.",
            ],
          },
          {
            h: "المغادرة من مطار تبوك",
            p: [
              "للمغادرة أرسل وقت الرحلة وعنوان الاستلام. من فندق في المدينة المشوار قصير، أما من وادي الديسة أو العلا فالطريق أكثر من ثلاث ساعات قبل أي توقف، فنحسب وقت الانطلاق عكسيًا من موعد إنهاء إجراءات السفر مع هامش للطريق. وإن احتجت أيضًا الاستقبال عند الوصول أو يومًا مع سائق بينهما فضع كل ذلك في طلب واحد ليُسعَّر معًا.",
            ],
          },
          {
            h: "قادم من الرياض بالسيارة؟",
            p: [
              "الطريق من الرياض نحو 1,273 كم ويُخطَّط عادةً على يومين مع مبيت في حائل، لذلك يفضّل أغلب المسافرين بمفردهم الطيران. أما فريق معه معدات أو عائلة تنتقل بحقائب كثيرة فقد يكون الطريق مناسبًا لهم؛ راجع صفحة من الرياض إلى تبوك لتلك الخطة.",
            ],
          },
        ],
        checklist: { h: "ما الذي ترسله مع طلب توصيل مطار تبوك", items: ["رقم الرحلة وتاريخها ووقت الوصول أو المغادرة", "الفندق أو المكتب أو بوابة المشروع، مع موقع على الخريطة إن كان خارج المدينة", "عدد الكبار والأطفال وكل حقيبة بحجمها", "هل ستواصل إلى وادي الديسة أو العلا أو ضباء أو حقل", "لمواقع المشاريع: الجهة المستضيفة ووضع التصريح"] },
        faqs: [
          { q: "كم يبعد مطار تبوك عن وسط المدينة؟", a: "نحو 6.8 كم عن قلعة تبوك، أي قرابة 11 دقيقة بالسيارة في حركة سير معتادة (خرائط جوجل، نوفمبر 2026)." },
          { q: "هل يمكن الذهاب من مطار تبوك إلى العلا مباشرة؟", a: "يمكنك طلب ذلك. الطريق نحو 297 كم وقرابة 3 ساعات و30 دقيقة قبل التوقفات. أرسل وقت هبوطك واسم فندقك في العلا." },
          { q: "كم يبعد وادي الديسة عن مطار تبوك؟", a: "نحو 261 كم وقرابة 3 ساعات و14 دقيقة قيادة. والعودة في اليوم نفسه تجعل اليوم طويلًا، فينطلق كثير من الزوار مبكرًا أو يبيتون ليلة قريبًا منه." },
          { q: "هل أسافر إلى مطار تبوك أم إلى مطار خليج نيوم؟", a: "قارن الجداول لتواريخك. مطار خليج نيوم قريب من شرما والساحل، ومطار تبوك هو الأكبر، والمسافة بينهما نحو 178 كم بالسيارة." },
          { q: "هل توصلونني إلى داخل موقع مشروع في نيوم؟", a: "فقط إن رتبت الجهة المستضيفة دخولك. لا تمنح RideSaudi تصاريح دخول؛ أرسل اسم الجهة والبوابة وتفاصيل التصريح ونؤكد ما يمكن ترتيبه." },
          { q: "ماذا لو تأخرت رحلتي إلى تبوك؟", a: "أرسل رقم الرحلة عند الحجز، فيُخطَّط الاستقبال على وقت الهبوط الفعلي، ويُتفق على أي انتظار طويل أو تغيير في الخطة عبر واتساب." },
        ],
      },
    },
  },
  {
    path: YANBU_AIRPORT,
    parent: A,
    variant: "default",
    service: "airport",
    related: [`${C}/yanbu`, `${I}/yanbu-to-jeddah`, `${I}/jeddah-to-yanbu`, `${A}/madinah-airport`, "services/chauffeur-services/business-chauffeur"],
    updated: U,
    copy: {
      en: {
        nav: "Yanbu Airport Transfer",
        title: "Yanbu Airport (YNB) Transfer: Private Car",
        description: "Private car with a driver from Yanbu airport (YNB) to the old town, Yanbu Industrial City, Madinah, Jeddah airport or Umluj. Send your flight for a quote.",
        h1: "Yanbu airport transfer to the old town, the industrial city or Madinah",
        eyebrow: "Yanbu · Prince Abdul Mohsin bin Abdulaziz International Airport (YNB)",
        answer: "Prince Abdul Mohsin bin Abdulaziz International Airport (YNB) is about 15 km from the historic area of Yanbu Al Bahr and about 31 km from the Royal Commission headquarters in Yanbu Industrial City, 20 to 30 minutes by car. RideSaudi arranges a pre-booked private car with a driver from YNB to either, or on to Madinah (about 253 km) or Jeddah airport (about 326 km).",
        summary: "Private transfers from Yanbu's airport (YNB) to the old town, the industrial city, Madinah, Jeddah and Umluj.",
        table: {
          h: "Distances from Yanbu airport (YNB)",
          head: ["From YNB to", "Distance", "Driving time", "Note"],
          rows: [
            ["Yanbu historic area (Yanbu Al Bahr)", "About 15.1 km", "About 20 min", "Old town and nearby hotels"],
            ["Yanbu Corniche", "About 20.1 km", "About 20 min", "Seafront hotels"],
            ["Royal Commission headquarters, Yanbu Industrial City", "About 31.3 km", "About 26 min", "Plants and company offices lie further on"],
            ["Prophet's Mosque, Madinah", "About 253 km", "About 2 h 35 min", "Hotel to hotel"],
            ["King Abdulaziz International Airport, Jeddah", "About 326 km", "About 3 h 01 min", "For flights from Jeddah"],
            ["Umluj", "About 145 km", "About 1 h 33 min", "North along the Red Sea coast"],
            ["Source", checked.en, "", ""],
          ],
        },
        sections: [
          {
            h: "Are you going to the town or the industrial city?",
            p: [
              "Say which, because they are different trips. The historic area of Yanbu Al Bahr is about 15 km from the terminal, and the Royal Commission headquarters in Yanbu Industrial City about 31 km, with many plants and company offices further on. For the industrial city, give the company name, the gate you use and any pass the driver must show; access rules are set by each site, and we confirm before you book that the pickup or drop-off point can be reached.",
            ],
          },
          {
            h: "Business arrivals and site teams",
            p: [
              "Many YNB passengers fly in for work at the plants and ports. A team landing together with tools or bags often fits one Hyundai Staria; a senior visitor may want a GMC Yukon. If the same people need a car every day of the visit, ask for a business chauffeur instead of separate transfers, and send the programme so the airport legs and the daily movements are quoted as one booking.",
            ],
          },
          {
            h: "Onward to Madinah or Jeddah",
            p: [
              "Yanbu has fewer flights than Jeddah or Madinah, so some travellers land at YNB and drive on, while others fly into Madinah or Jeddah and drive to Yanbu. From YNB, the Prophet's Mosque in Madinah is about 253 km and around 2 hours 35 minutes; Jeddah's King Abdulaziz International Airport is about 326 km and just over three hours. For the Jeddah road in either direction see Yanbu to Jeddah, and for Madinah arrivals see the Madinah airport page.",
            ],
          },
          {
            h: "North along the coast to Umluj",
            p: [
              "Leisure visitors head for the Red Sea beaches and islands north of Yanbu. Umluj is about 145 km from the airport, around an hour and a half. Give the exact resort or beach and whether you need the car to wait, because coastal resorts can be spread out and some are reached by side roads.",
            ],
          },
          {
            h: "Flying out of Yanbu",
            p: [
              "Send the flight time and pickup address. From the old town or the Corniche the drive is about 20 minutes; from a site in the industrial city allow for the gate exit as well as the road. If you are coming from Madinah for a YNB flight, the road alone is about two and a half hours, so the pickup is set with a margin before check-in.",
            ],
          },
        ],
        checklist: { h: "Send this with your Yanbu airport enquiry", items: ["Flight number, date and time", "Old town, Corniche hotel or industrial city: company and gate name", "Adults, children and bags by size, plus any tools or equipment", "Whether you go on to Madinah, Jeddah or Umluj", "Any site pass the driver needs to see"] },
        faqs: [
          { q: "How far is Yanbu airport from Yanbu town?", a: "About 15 km to the historic area of Yanbu Al Bahr and about 20 km to the Corniche, around 20 minutes by car (Google Maps, November 2026)." },
          { q: "How far is Yanbu airport from Yanbu Industrial City?", a: "About 31 km to the Royal Commission headquarters, around 26 minutes. Plants and offices further in the industrial city take longer; give the company and gate name." },
          { q: "Can I go from Yanbu airport straight to Madinah?", a: "You can request it. The Prophet's Mosque is about 253 km away, roughly 2 hours 35 minutes before stops." },
          { q: "Is it better to fly into Jeddah or Madinah and drive to Yanbu?", a: "It depends on the flights for your dates. Yanbu has fewer flights; if a Jeddah or Madinah flight suits you better, the drive to Yanbu can be booked from either airport." },
          { q: "Can the driver enter an industrial site in Yanbu?", a: "Only where the site allows it. Each facility sets its own gate rules, so send the company, gate and any pass details and we confirm the pickup point before you book." },
          { q: "Can you take us from Yanbu airport to Umluj?", a: "Yes, you can request it. Umluj is about 145 km north, around 1 hour 33 minutes. Give the resort name." },
        ],
      },
      ar: {
        nav: "توصيل مطار ينبع",
        title: "توصيل مطار ينبع بسيارة خاصة مع سائق",
        description: "سيارة خاصة مع سائق من مطار ينبع إلى البلد القديمة والمدينة الصناعية بينبع والمدينة المنورة ومطار جدة وأملج. أرسل رقم رحلتك لعرض سعر.",
        h1: "توصيل مطار ينبع إلى البلد أو المدينة الصناعية أو المدينة المنورة",
        eyebrow: "ينبع · مطار الأمير عبدالمحسن بن عبدالعزيز الدولي (YNB)",
        answer: "يبعد مطار الأمير عبدالمحسن بن عبدالعزيز الدولي في ينبع نحو 15 كم عن المنطقة التاريخية في ينبع البحر ونحو 31 كم عن مقر الهيئة الملكية في مدينة ينبع الصناعية، بين 20 و30 دقيقة بالسيارة. وترتب RideSaudi سيارة خاصة مع سائق بحجز مسبق من المطار إلى أي منهما، أو إلى المدينة المنورة (نحو 253 كم) أو مطار جدة (نحو 326 كم).",
        summary: "توصيل خاص من مطار ينبع إلى البلد القديمة والمدينة الصناعية والمدينة المنورة وجدة وأملج.",
        table: {
          h: "المسافات من مطار ينبع",
          head: ["من المطار إلى", "المسافة", "مدة القيادة", "ملاحظة"],
          rows: [
            ["المنطقة التاريخية في ينبع البحر", "نحو 15.1 كم", "نحو 20 دقيقة", "البلد القديمة والفنادق القريبة"],
            ["كورنيش ينبع", "نحو 20.1 كم", "نحو 20 دقيقة", "فنادق الواجهة البحرية"],
            ["مقر الهيئة الملكية، مدينة ينبع الصناعية", "نحو 31.3 كم", "نحو 26 دقيقة", "المصانع ومكاتب الشركات أبعد من ذلك"],
            ["المسجد النبوي، المدينة المنورة", "نحو 253 كم", "نحو 2 س 35 د", "من فندق إلى فندق"],
            ["مطار الملك عبدالعزيز الدولي، جدة", "نحو 326 كم", "نحو 3 س 01 د", "للرحلات من جدة"],
            ["أملج", "نحو 145 كم", "نحو 1 س 33 د", "شمالًا على ساحل البحر الأحمر"],
            ["المصدر", checked.ar, "", ""],
          ],
        },
        sections: [
          {
            h: "هل وجهتك البلد أم المدينة الصناعية؟",
            p: [
              "حدد أيهما، لأنهما مشواران مختلفان. فالمنطقة التاريخية في ينبع البحر على بعد نحو 15 كم من المطار، ومقر الهيئة الملكية في مدينة ينبع الصناعية نحو 31 كم، وكثير من المصانع ومكاتب الشركات أبعد من ذلك. وللمدينة الصناعية اذكر اسم الشركة والبوابة التي تستخدمها وأي تصريح يجب أن يُظهره السائق؛ فلكل موقع قواعد دخوله، ونؤكد قبل الحجز أن نقطة الاستلام أو النزول يمكن الوصول إليها.",
            ],
          },
          {
            h: "رجال الأعمال وفرق العمل",
            p: [
              "كثير من ركاب مطار ينبع قادمون للعمل في المصانع والموانئ. والفريق الذي يصل معًا بعدّة أو حقائب يتسع له غالبًا هيونداي ستاريا واحدة، وقد يفضّل الزائر الرفيع جمس يوكن. وإن احتاج الأشخاص أنفسهم سيارة كل يوم خلال الزيارة فاطلب سائق أعمال بدل مشاوير منفصلة، وأرسل البرنامج ليُسعَّر توصيل المطار والتنقل اليومي كحجز واحد.",
            ],
          },
          {
            h: "المواصلة إلى المدينة المنورة أو جدة",
            p: [
              "رحلات ينبع أقل من جدة والمدينة، فبعض المسافرين يهبط في ينبع ثم يواصل بالسيارة، وآخرون يطيرون إلى المدينة أو جدة ثم يتجهون إلى ينبع برًا. ومن مطار ينبع يبعد المسجد النبوي نحو 253 كم وقرابة ساعتين و35 دقيقة، ومطار الملك عبدالعزيز الدولي في جدة نحو 326 كم وما يزيد قليلًا على ثلاث ساعات. ولطريق جدة في الاتجاهين راجع صفحة من ينبع إلى جدة، وللقادمين إلى المدينة راجع صفحة مطار المدينة.",
            ],
          },
          {
            h: "شمالًا على الساحل إلى أملج",
            p: [
              "يقصد زوار الترفيه شواطئ البحر الأحمر وجزره شمال ينبع. وتبعد أملج نحو 145 كم عن المطار، قرابة ساعة ونصف. اذكر اسم المنتجع أو الشاطئ بالضبط وهل تحتاج أن تنتظرك السيارة، لأن المنتجعات الساحلية متباعدة وبعضها يُصل إليه عبر طرق فرعية.",
            ],
          },
          {
            h: "المغادرة من مطار ينبع",
            p: [
              "أرسل وقت الرحلة وعنوان الاستلام. من البلد القديمة أو الكورنيش المشوار نحو 20 دقيقة، أما من موقع في المدينة الصناعية فاحسب وقت الخروج من البوابة إضافة إلى الطريق. وإن كنت قادمًا من المدينة المنورة للحاق برحلة من ينبع فالطريق وحده نحو ساعتين ونصف، فيُحدَّد وقت الاستلام بهامش قبل إنهاء إجراءات السفر.",
            ],
          },
        ],
        checklist: { h: "ما الذي ترسله مع طلب توصيل مطار ينبع", items: ["رقم الرحلة وتاريخها ووقتها", "البلد القديمة أو فندق على الكورنيش أو المدينة الصناعية: اسم الشركة والبوابة", "عدد الكبار والأطفال والحقائب بأحجامها وأي عدّة أو معدات", "هل ستواصل إلى المدينة المنورة أو جدة أو أملج", "أي تصريح موقع يحتاج السائق أن يراه"] },
        faqs: [
          { q: "كم يبعد مطار ينبع عن البلد؟", a: "نحو 15 كم إلى المنطقة التاريخية في ينبع البحر ونحو 20 كم إلى الكورنيش، قرابة 20 دقيقة بالسيارة (خرائط جوجل، نوفمبر 2026)." },
          { q: "كم يبعد مطار ينبع عن المدينة الصناعية؟", a: "نحو 31 كم إلى مقر الهيئة الملكية، قرابة 26 دقيقة. والمصانع والمكاتب الأبعد داخل المدينة الصناعية تأخذ وقتًا أطول؛ اذكر اسم الشركة والبوابة." },
          { q: "هل يمكن الذهاب من مطار ينبع إلى المدينة المنورة مباشرة؟", a: "يمكنك طلب ذلك. يبعد المسجد النبوي نحو 253 كم، قرابة ساعتين و35 دقيقة قبل التوقفات." },
          { q: "هل الأفضل الطيران إلى جدة أو المدينة ثم السفر برًا إلى ينبع؟", a: "يعتمد على الرحلات المتاحة لتواريخك. رحلات ينبع أقل، وإن ناسبتك رحلة إلى جدة أو المدينة أكثر فيمكن حجز الطريق إلى ينبع من أي المطارين." },
          { q: "هل يدخل السائق موقعًا صناعيًا في ينبع؟", a: "فقط حيث يسمح الموقع بذلك. لكل منشأة قواعد بوابتها، فأرسل اسم الشركة والبوابة وتفاصيل أي تصريح، ونؤكد نقطة الاستلام قبل الحجز." },
          { q: "هل توصلوننا من مطار ينبع إلى أملج؟", a: "نعم، يمكنك طلب ذلك. تقع أملج على بعد نحو 145 كم شمالًا، قرابة ساعة و33 دقيقة. اذكر اسم المنتجع." },
        ],
      },
    },
  },
];

type L = Record<Locale, string>;
/** One useful sentence with a link, appended to a section of an existing page (same section index in EN and AR). */
const addLinks: { path: string; section: number; text: L; related: string }[] = [
  {
    path: `${C}/tabuk`, section: 3, related: TABUK_AIRPORT,
    text: { en: "Flying in? [Tabuk airport transfers](services/airport-transfers/tabuk-airport) start at Prince Sultan bin Abdulaziz International Airport, about 7 km from the fortress, and can go straight on to Wadi Disah or AlUla.", ar: "قادم بالطائرة؟ يبدأ [التوصيل من مطار تبوك](services/airport-transfers/tabuk-airport) من مطار الأمير سلطان بن عبدالعزيز الدولي على بعد نحو 7 كم من القلعة، ويمكن أن يواصل مباشرة إلى وادي الديسة أو العلا." },
  },
  {
    path: `${I}/riyadh-to-tabuk`, section: 3, related: TABUK_AIRPORT,
    text: { en: "If you fly instead, a [Tabuk airport transfer](services/airport-transfers/tabuk-airport) covers the short ride from the terminal to your hotel or the longer roads beyond.", ar: "وإن اخترت الطيران فإن [التوصيل من مطار تبوك](services/airport-transfers/tabuk-airport) يغطي المشوار القصير من المطار إلى فندقك أو الطرق الأطول بعده." },
  },
  {
    path: `${A}/alula-airport`, section: 3, related: TABUK_AIRPORT,
    text: { en: "When there is no suitable flight to AlUla, some travellers fly to Tabuk instead; the [Tabuk airport transfer](services/airport-transfers/tabuk-airport) to AlUla is about 297 km by road.", ar: "وحين لا تتوفر رحلة مناسبة إلى العلا يطير بعض المسافرين إلى تبوك بدلًا منها، و[التوصيل من مطار تبوك](services/airport-transfers/tabuk-airport) إلى العلا نحو 297 كم بالسيارة." },
  },
  {
    path: `${C}/yanbu`, section: 5, related: YANBU_AIRPORT,
    text: { en: "Arriving by air? [Yanbu airport transfers](services/airport-transfers/yanbu-airport) go from YNB to the old town, the industrial city or straight on to Madinah.", ar: "قادم بالطائرة؟ يغطي [التوصيل من مطار ينبع](services/airport-transfers/yanbu-airport) المشوار من المطار إلى البلد القديمة أو المدينة الصناعية أو مباشرة إلى المدينة المنورة." },
  },
  {
    path: `${I}/yanbu-to-jeddah`, section: 2, related: YANBU_AIRPORT,
    text: { en: "Flying out of Yanbu rather than Jeddah? See [Yanbu airport transfers](services/airport-transfers/yanbu-airport).", ar: "ستغادر من مطار ينبع بدل جدة؟ راجع [التوصيل من مطار ينبع](services/airport-transfers/yanbu-airport)." },
  },
  {
    path: `${I}/riyadh-to-yanbu`, section: 5, related: YANBU_AIRPORT,
    text: { en: "Or fly straight to Yanbu: a [Yanbu airport transfer](services/airport-transfers/yanbu-airport) takes you from YNB to the town or the industrial city in under half an hour.", ar: "أو سافر جوًا مباشرة إلى ينبع: فـ[التوصيل من مطار ينبع](services/airport-transfers/yanbu-airport) يوصلك من المطار إلى البلد أو المدينة الصناعية في أقل من نصف ساعة." },
  },
];

/** Hub list ("Which Saudi airport are you using?") gets the two new airports; existing pages get one linking sentence. */
export function applyNorthWestAirports(pages: ServicePage[]) {
  const get = (path: string) => {
    const p = pages.find((x) => x.path === path);
    if (!p) throw new Error(`airport-pages-nw: unknown page ${path}`);
    return p;
  };
  for (const a of addLinks) {
    const p = get(a.path);
    for (const l of ["en", "ar"] as Locale[]) {
      const s = p.copy[l].sections[a.section];
      if (!s) throw new Error(`airport-pages-nw: no section ${a.section} on ${a.path}/${l}`);
      s.p = [...s.p.slice(0, -1), `${s.p[s.p.length - 1]} ${a.text[l]}`];
    }
    if (!p.related.includes(a.related)) p.related.push(a.related);
  }
  const hub = get(A);
  const items: L[] = [
    { en: "Tabuk, Prince Sultan bin Abdulaziz International (TUU), also the alternative to NEOM Bay Airport: [Tabuk airport transfer](services/airport-transfers/tabuk-airport)", ar: "تبوك، مطار الأمير سلطان بن عبدالعزيز الدولي (TUU)، وهو أيضًا بديل مطار خليج نيوم: [توصيل مطار تبوك](services/airport-transfers/tabuk-airport)" },
    { en: "Yanbu, Prince Abdul Mohsin bin Abdulaziz International (YNB): [Yanbu airport transfer](services/airport-transfers/yanbu-airport)", ar: "ينبع، مطار الأمير عبدالمحسن بن عبدالعزيز الدولي (YNB): [توصيل مطار ينبع](services/airport-transfers/yanbu-airport)" },
  ];
  for (const l of ["en", "ar"] as Locale[]) {
    const s = hub.copy[l].sections.find((x) => x.list?.some((li) => li.includes("services/airport-transfers/al-ahsa-airport")));
    if (!s?.list) throw new Error(`airport-pages-nw: airport list not found on the hub (${l})`);
    s.list = [...s.list, ...items.map((i) => i[l])];
  }
}
