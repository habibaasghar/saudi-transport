import type { Locale } from "@/i18n/routing";
import type { ServicePage } from "./types";

/**
 * Route pages from master brief Phase 3C, P1 (2026-11-27): Madinah ⇄ Yanbu, Madinah ⇄ Tabuk, Tabuk ⇄ AlUla.
 * No reverse page exists for any of them, so each page covers both directions (gsc-growth keeps "⇄" in that case).
 *
 * Every distance and time is from Google Maps, read on 27 Nov 2026 (driving, usual traffic, no stops), with the start
 * and end points named in each table. Not built: Tabuk to NEOM (restricted project area, too few verifiable facts;
 * the distance is on the Tabuk airport page). P2/P3 routes (Tabuk-Jeddah, Tabuk-Dammam, Yanbu-Umluj) come later.
 */
const U = "2026-11-27";
const S = "services";
const I = `${S}/intercity-transfers`;
const C = `${S}/city-transport`;
const A = `${S}/airport-transfers`;

export const MADINAH_YANBU = `${I}/madinah-to-yanbu`;
export const MADINAH_TABUK = `${I}/madinah-to-tabuk`;
export const TABUK_ALULA = `${I}/tabuk-to-alula`;

const src = { en: "Google Maps, usual traffic, no stops, checked 27 Nov 2026", ar: "خرائط جوجل، حركة سير معتادة، دون توقف، تحقق في 27 نوفمبر 2026" };

export const routes3c: ServicePage[] = [
  {
    path: MADINAH_YANBU,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [`${A}/yanbu-airport`, `${C}/yanbu`, `${A}/madinah-airport`, `${C}/madinah`, `${I}/yanbu-to-jeddah`, "fleet/hyundai-staria-with-driver"],
    updated: U,
    copy: {
      en: {
        nav: "Madinah to Yanbu",
        title: "Madinah to Yanbu Private Car with Driver",
        description: "Private car with a driver between Madinah and Yanbu: about 246 km on Route 60, around 2 h 36 min, with an optional stop at Badr. Quote on WhatsApp.",
        h1: "Madinah to Yanbu by private car, for the industrial city, the coast or the way back",
        eyebrow: "Intercity · Madinah ⇄ Yanbu",
        answer: "A private car from Madinah to Yanbu covers about 246 km on Route 60, around 2 hours 36 minutes from the Prophet's Mosque to the historic area of Yanbu Al Bahr, or about 228 km to the Royal Commission headquarters in Yanbu Industrial City (Google Maps, November 2026). The same car can bring you back from Yanbu to Madinah. The vehicle carries your party only.",
        summary: "Private car between Madinah and Yanbu: about 246 km on Route 60, roughly two and a half hours.",
        table: {
          h: "Madinah to Yanbu route facts",
          head: ["Detail", "Madinah ⇄ Yanbu"],
          rows: [
            ["Prophet's Mosque to Yanbu historic area", "About 246 km, about 2 h 36 min via Route 60"],
            ["Prophet's Mosque to Royal Commission HQ, Yanbu Industrial City", "About 228 km, about 2 h 19 min"],
            ["Madinah airport (MED) to Yanbu historic area", "About 266 km, about 2 h 42 min via Route 60"],
            ["Yanbu airport (YNB) to the Prophet's Mosque", "About 253 km, about 2 h 35 min"],
            ["Stop at Badr", "Madinah to Badr about 157 km, Badr to Yanbu about 106 km: about 17 km more than the direct road"],
            ["Train", "No Haramain station in Yanbu"],
            ["Source", src.en],
          ],
        },
        sections: [
          {
            h: "Who makes this journey?",
            p: [
              "Three kinds of traveller, mostly. Engineers and site teams land at Madinah's Prince Mohammad bin Abdulaziz Airport because it has more flights than Yanbu, then drive to the plants of Yanbu Industrial City. Families from Yanbu go up to the Prophet's Mosque for a day or a weekend. And visitors who finished their ziyarah in Madinah add a few days on the Red Sea coast before flying home from Jeddah.",
            ],
          },
          {
            h: "The road and the time it takes",
            p: [
              "The direct road is Route 60, about 246 km from the Prophet's Mosque area to the historic quarter of Yanbu Al Bahr and around 2 hours 36 minutes in usual traffic. The Royal Commission headquarters in the industrial city is a little closer, about 228 km. From Madinah airport, add roughly 20 km because the airport sits on the far side of the city. There is no train to Yanbu, so the alternatives are a flight to Yanbu's own airport or the road.",
            ],
          },
          {
            h: "Can we stop at Badr on the way?",
            p: [
              "Yes, if you ask for it. Badr, the site of the first great battle of Islam, lies about 157 km from the Prophet's Mosque, and from there Yanbu is about 106 km. The detour adds only about 17 km to the direct road, but plan time for the visit itself and for prayer. Say in your enquiry how long you want to stay so the timing is planned around it.",
            ],
          },
          {
            h: "Town, industrial city or a coastal resort?",
            p: [
              "Yanbu has two separate centres: the old town of Yanbu Al Bahr with the Corniche, and Yanbu Industrial City with its plants, port and company housing. For the industrial city, give the company, the gate and any pass the driver must show, because each site sets its own access rules. For a beach resort further north, give the exact name, as some are reached by side roads.",
            ],
          },
          {
            h: "Leaving from Madinah, coming back from Yanbu",
            p: [
              "In Madinah, streets around the Prophet's Mosque are restricted at prayer times, so the pickup is agreed at the nearest point a car may reach, often after the prayer you want to pray in the mosque. For the way back from Yanbu to Madinah, give the hotel name in Madinah; a same-day return is about five hours of driving in total, which some families choose for a Friday at the Prophet's Mosque.",
            ],
          },
          {
            h: "Which vehicle to request",
            p: ["For two and a half hours each way, choose for comfort and luggage:"],
            list: [
              "Sedan: one to three people with light bags, typical for a single engineer",
              "GMC Yukon: a family or a senior visitor who wants an SUV",
              "Hyundai Staria: up to 7 passengers with 10 or more bags, or a site team with tools",
            ],
          },
        ],
        checklist: { h: "Send this with your Madinah to Yanbu enquiry", items: ["Pickup: Madinah hotel or MED flight number", "Drop-off: Yanbu hotel, Corniche, or company and gate in the industrial city", "Date, time, and whether you want the Badr stop", "Passengers and bags, plus any tools or equipment", "Return date if you are coming back to Madinah"] },
        faqs: [
          { q: "How far is Yanbu from Madinah by car?", a: "About 246 km from the Prophet's Mosque to the historic area of Yanbu, around 2 hours 36 minutes on Route 60 without stops (Google Maps, November 2026)." },
          { q: "How long is the drive from Madinah airport to Yanbu Industrial City?", a: "Allow about two and a half hours. Madinah airport to Yanbu's old town is about 266 km; the industrial city's Royal Commission headquarters is a little closer to Madinah than the old town." },
          { q: "Is there a train from Madinah to Yanbu?", a: "No. The Haramain High Speed Railway does not stop in Yanbu, so the options are the road or a flight to Yanbu's airport." },
          { q: "Can we visit Badr on the way from Madinah to Yanbu?", a: "Yes, ask for it when you book. The detour through Badr adds about 17 km; the visit and prayer time are planned into the schedule." },
          { q: "Can I book Yanbu to Madinah and back on the same day?", a: "Yes. It is about five hours of driving in total, so the car waits in Madinah while you visit the Prophet's Mosque. Give the times you want to leave each city." },
          { q: "Can the driver go into a plant in Yanbu Industrial City?", a: "Only where the site allows it. Send the company, gate and pass details, and we confirm the drop-off point before you book." },
        ],
      },
      ar: {
        nav: "المدينة إلى ينبع",
        title: "توصيل من المدينة إلى ينبع بسيارة خاصة مع سائق",
        description: "سيارة خاصة مع سائق بين المدينة المنورة وينبع، البلد أو المدينة الصناعية: نحو 246 كم عبر طريق 60، قرابة ساعتين و36 دقيقة، مع توقف اختياري في بدر.",
        h1: "من المدينة المنورة إلى ينبع بسيارة خاصة، للمدينة الصناعية أو الساحل أو طريق العودة",
        eyebrow: "بين المدن · المدينة ⇄ ينبع",
        answer: "السيارة الخاصة من المدينة المنورة إلى ينبع تقطع نحو 246 كم عبر طريق 60، قرابة ساعتين و36 دقيقة من المسجد النبوي إلى المنطقة التاريخية في ينبع البحر، أو نحو 228 كم إلى مقر الهيئة الملكية في مدينة ينبع الصناعية (خرائط جوجل، نوفمبر 2026). ويمكن أن تعيدك السيارة نفسها من ينبع إلى المدينة. والسيارة لمجموعتك فقط.",
        summary: "سيارة خاصة بين المدينة المنورة وينبع: نحو 246 كم عبر طريق 60، قرابة ساعتين ونصف.",
        table: {
          h: "معلومات طريق المدينة إلى ينبع",
          head: ["البند", "المدينة ⇄ ينبع"],
          rows: [
            ["من المسجد النبوي إلى المنطقة التاريخية في ينبع", "نحو 246 كم، قرابة 2 س 36 د عبر طريق 60"],
            ["من المسجد النبوي إلى مقر الهيئة الملكية، مدينة ينبع الصناعية", "نحو 228 كم، قرابة 2 س 19 د"],
            ["من مطار المدينة إلى المنطقة التاريخية في ينبع", "نحو 266 كم، قرابة 2 س 42 د عبر طريق 60"],
            ["من مطار ينبع إلى المسجد النبوي", "نحو 253 كم، قرابة 2 س 35 د"],
            ["التوقف في بدر", "من المدينة إلى بدر نحو 157 كم، ومن بدر إلى ينبع نحو 106 كم: نحو 17 كم زيادة على الطريق المباشر"],
            ["القطار", "لا توجد محطة لقطار الحرمين في ينبع"],
            ["المصدر", src.ar],
          ],
        },
        sections: [
          {
            h: "من يسافر بين المدينة وينبع؟",
            p: [
              "ثلاثة أنواع من المسافرين في الغالب. المهندسون وفرق العمل يهبطون في مطار الأمير محمد بن عبدالعزيز بالمدينة لأن رحلاته أكثر من ينبع، ثم يتجهون برًا إلى مصانع مدينة ينبع الصناعية. وعائلات ينبع تصعد إلى المسجد النبوي ليوم أو لعطلة نهاية الأسبوع. والزوار الذين أنهوا زيارتهم في المدينة يضيفون أيامًا على ساحل البحر الأحمر قبل السفر من جدة.",
            ],
          },
          {
            h: "الطريق والوقت الذي يستغرقه",
            p: [
              "الطريق المباشر هو طريق 60، نحو 246 كم من محيط المسجد النبوي إلى الحي التاريخي في ينبع البحر، وقرابة ساعتين و36 دقيقة في حركة سير معتادة. ومقر الهيئة الملكية في المدينة الصناعية أقرب قليلًا، نحو 228 كم. ومن مطار المدينة أضف نحو 20 كم لأن المطار في الطرف الآخر من المدينة. ولا يوجد قطار إلى ينبع، فالبديل رحلة جوية إلى مطار ينبع أو الطريق.",
            ],
          },
          {
            h: "هل نتوقف في بدر في الطريق؟",
            p: [
              "نعم إن طلبت ذلك. تقع بدر، موقع أول معركة كبرى في الإسلام، على بعد نحو 157 كم من المسجد النبوي، ومنها إلى ينبع نحو 106 كم. والتحويلة تضيف نحو 17 كم فقط على الطريق المباشر، لكن خطط لوقت الزيارة نفسها وللصلاة. اذكر في طلبك المدة التي تريد البقاء فيها ليُخطَّط التوقيت على أساسها.",
            ],
          },
          {
            h: "البلد أم المدينة الصناعية أم منتجع على الساحل؟",
            p: [
              "لينبع مركزان منفصلان: البلد القديمة في ينبع البحر مع الكورنيش، ومدينة ينبع الصناعية بمصانعها وميناءها وسكن الشركات. وللمدينة الصناعية اذكر اسم الشركة والبوابة وأي تصريح يجب أن يُظهره السائق، لأن لكل موقع قواعد دخوله. ولمنتجع شاطئي أبعد شمالًا اذكر الاسم بالضبط، فبعضها يُصل إليه عبر طرق فرعية.",
            ],
          },
          {
            h: "الانطلاق من المدينة والعودة من ينبع",
            p: [
              "في المدينة تُقيَّد الشوارع حول المسجد النبوي وقت الصلوات، فيُتفق على الاستلام عند أقرب نقطة تصلها السيارة، وغالبًا بعد الصلاة التي تريد أداءها في المسجد. وللعودة من ينبع إلى المدينة اذكر اسم الفندق في المدينة؛ والذهاب والعودة في اليوم نفسه نحو خمس ساعات قيادة إجمالًا، وتختاره بعض العائلات لصلاة الجمعة في المسجد النبوي.",
            ],
          },
          {
            h: "أي سيارة تطلب",
            p: ["لساعتين ونصف في كل اتجاه اختر بحسب الراحة والحقائب:"],
            list: [
              "سيدان: من شخص إلى ثلاثة بحقائب خفيفة، وهي المعتادة لمهندس بمفرده",
              "جمس يوكن: عائلة أو زائر رفيع يريد سيارة دفع رباعي",
              "هيونداي ستاريا: حتى 7 ركاب مع 10 حقائب أو أكثر، أو فريق عمل معه عدّة",
            ],
          },
        ],
        checklist: { h: "ما الذي ترسله مع طلب المدينة إلى ينبع", items: ["الاستلام: فندق في المدينة أو رقم رحلتك إلى مطار المدينة", "النزول: فندق في ينبع أو الكورنيش أو الشركة والبوابة في المدينة الصناعية", "التاريخ والوقت، وهل تريد التوقف في بدر", "عدد الركاب والحقائب وأي عدّة أو معدات", "تاريخ العودة إن كنت ستعود إلى المدينة"] },
        faqs: [
          { q: "كم تبعد ينبع عن المدينة المنورة بالسيارة؟", a: "نحو 246 كم من المسجد النبوي إلى المنطقة التاريخية في ينبع، قرابة ساعتين و36 دقيقة عبر طريق 60 دون توقف (خرائط جوجل، نوفمبر 2026)." },
          { q: "كم تستغرق الرحلة من مطار المدينة إلى مدينة ينبع الصناعية؟", a: "احسب نحو ساعتين ونصف. فمطار المدينة إلى البلد القديمة في ينبع نحو 266 كم، ومقر الهيئة الملكية في المدينة الصناعية أقرب قليلًا إلى المدينة من البلد القديمة." },
          { q: "هل يوجد قطار من المدينة إلى ينبع؟", a: "لا. قطار الحرمين السريع لا يتوقف في ينبع، فالخيار هو الطريق أو رحلة جوية إلى مطار ينبع." },
          { q: "هل يمكن زيارة بدر في الطريق من المدينة إلى ينبع؟", a: "نعم، اطلب ذلك عند الحجز. التحويلة عبر بدر تضيف نحو 17 كم، ويُدرج وقت الزيارة والصلاة في الجدول." },
          { q: "هل يمكن حجز ينبع إلى المدينة والعودة في اليوم نفسه؟", a: "نعم. المجموع نحو خمس ساعات قيادة، وتنتظر السيارة في المدينة أثناء زيارتك للمسجد النبوي. اذكر وقت المغادرة من كل مدينة." },
          { q: "هل يدخل السائق مصنعًا في مدينة ينبع الصناعية؟", a: "فقط حيث يسمح الموقع بذلك. أرسل اسم الشركة والبوابة وتفاصيل التصريح، ونؤكد نقطة النزول قبل الحجز." },
        ],
      },
    },
  },
  {
    path: MADINAH_TABUK,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [`${I}/madinah-to-alula`, TABUK_ALULA, `${C}/tabuk`, `${A}/tabuk-airport`, `${C}/madinah`, "fleet/gmc-yukon-with-driver"],
    updated: U,
    copy: {
      en: {
        nav: "Madinah to Tabuk",
        title: "Madinah to Tabuk Private Car with Driver",
        description: "Private car with a driver between Madinah and Tabuk: about 633 km through AlUla or about 690 km via Khaybar and Tayma. Overnight in AlUla optional.",
        h1: "Madinah to Tabuk by private car, through AlUla or by Khaybar and Tayma",
        eyebrow: "Intercity · Madinah ⇄ Tabuk",
        answer: "Madinah to Tabuk by private car is about 633 km on the faster road through AlUla, around 6 hours 51 minutes before stops, or about 690 km on Route 15 through Khaybar and Tayma (Google Maps, November 2026). Many travellers break the trip with a night in AlUla. A pre-booked car with a driver carries your party only, in either direction.",
        summary: "Private car between Madinah and Tabuk: about 633 km through AlUla, or about 690 km via Khaybar and Tayma.",
        table: {
          h: "Madinah to Tabuk route facts",
          head: ["Detail", "Madinah ⇄ Tabuk"],
          rows: [
            ["Faster road", "About 633 km, about 6 h 51 min, Prophet's Mosque to Tabuk Fortress through the AlUla area (Route 375)"],
            ["Route 15 road", "Madinah to Khaybar about 175 km, Madinah to Tayma about 428 km, Tayma to Tabuk about 262 km: about 690 km in total"],
            ["Overnight option", "AlUla: about 338 km from Madinah, then about 298 km on to Tabuk"],
            ["Tabuk airport (TUU)", "About 7 km from Tabuk Fortress"],
            ["Train", "No passenger train between Madinah and Tabuk"],
            ["Source", src.en],
          ],
        },
        sections: [
          {
            h: "Which road does the car take?",
            p: [
              "There are two sensible roads, and the quotation names the one planned for you. The faster one runs north-west through the AlUla area on Route 375: about 633 km from the Prophet's Mosque to Tabuk Fortress, around 6 hours 51 minutes before stops. The older road is Route 15 straight north through the oasis towns of Khaybar, about 175 km from Madinah, and Tayma, about 428 km from Madinah, for about 690 km in total. Route 15 suits travellers who want to stop in those towns; otherwise the AlUla road is shorter.",
            ],
          },
          {
            h: "Should we stop a night in AlUla?",
            p: [
              "For a family, usually yes. Madinah to AlUla is about 338 km and AlUla to Tabuk about 298 km, so a night in AlUla splits seven hours of driving into two easy days and adds the Old Town or Hegra to the trip. Hegra and other controlled sites are booked separately through the official AlUla channels; the car takes you to the meeting point. If you only want AlUla, see the Madinah to AlUla transfer, and for the second half on its own see Tabuk to AlUla.",
            ],
          },
          {
            h: "Who drives between Madinah and Tabuk?",
            p: [
              "Families from Tabuk visiting the Prophet's Mosque, often with grandparents and a lot of luggage, choose the road because one car keeps everyone together door to door. Project staff moving between the north-west and Madinah use it when tools or samples will not fit a flight. And visitors on a north-west tour put Madinah, AlUla and Tabuk in one trip, ending at Tabuk's airport.",
            ],
          },
          {
            h: "Weather, light and services",
            p: [
              "North of AlUla the road crosses long stretches of desert with few services, and winter nights in the Tabuk region can be close to freezing. Most families leave Madinah in the morning so the last hours are in daylight. Tell us the season, any medical needs and where you want to pray and eat, and the stops are planned before the day.",
            ],
          },
          {
            h: "Starting and finishing",
            p: [
              "In Madinah the pickup is at the nearest point a car may reach near your hotel, timed around prayer. In Tabuk, give the district or a map pin; for a flight, Prince Sultan bin Abdulaziz International Airport is about 7 km from the fortress, and see Tabuk airport transfers if you need the car to meet a later flight. Coming the other way, from Tabuk to Madinah, the same roads and stops apply in reverse.",
            ],
          },
          {
            h: "Which vehicle to request",
            p: ["Seven hours in one day, or two days with a night in AlUla, call for space:"],
            list: [
              "GMC Yukon: a family that wants an SUV for a long desert road",
              "Hyundai Staria: up to 7 passengers with 10 or more bags",
              "Sedan: one or two people with light luggage",
            ],
          },
        ],
        checklist: { h: "Send this with your Madinah to Tabuk enquiry", items: ["Madinah hotel or Tabuk address, with a map pin", "Date and preferred start time", "Which road: through AlUla, or Route 15 via Khaybar and Tayma", "Overnight in AlUla: yes or no, and whether you have a hotel", "Passengers and every bag by size"] },
        faqs: [
          { q: "How far is Tabuk from Madinah by road?", a: "About 633 km through the AlUla area, around 6 hours 51 minutes before stops, or about 690 km on Route 15 via Khaybar and Tayma (Google Maps, November 2026)." },
          { q: "Can we stay a night in AlUla between Madinah and Tabuk?", a: "Yes, and many families do. It splits the trip into about 338 km and about 298 km. Tell us if you have a hotel or want to book one yourself." },
          { q: "Can the driver stop in Khaybar or Tayma?", a: "Yes, on the Route 15 road. Ask for that road and name the stops; the timing is planned into the quotation." },
          { q: "Is there a train or bus option from Madinah to Tabuk?", a: "There is no passenger train. Check airlines and intercity bus operators for current options. The car suits families and groups who want to travel together with all their bags." },
          { q: "Can you take us from Tabuk to Madinah instead?", a: "Yes. The same roads and the AlUla overnight option apply in the other direction. Give your Madinah hotel name." },
          { q: "Can the car drop us at Tabuk airport after arriving from Madinah?", a: "Yes. Give the flight time; with a seven-hour drive, we usually suggest arriving the evening before an early flight." },
        ],
      },
      ar: {
        nav: "المدينة إلى تبوك",
        title: "توصيل من المدينة إلى تبوك بسيارة خاصة مع سائق",
        description: "سيارة خاصة مع سائق بين المدينة المنورة وتبوك: نحو 633 كم عبر العلا (6 س 51 د) أو نحو 690 كم عبر خيبر وتيماء، مع مبيت اختياري في العلا.",
        h1: "من المدينة المنورة إلى تبوك بسيارة خاصة، عبر العلا أو عبر خيبر وتيماء",
        eyebrow: "بين المدن · المدينة ⇄ تبوك",
        answer: "الطريق من المدينة المنورة إلى تبوك بسيارة خاصة نحو 633 كم عبر العلا، قرابة 6 ساعات و51 دقيقة قبل التوقفات، أو نحو 690 كم عبر طريق 15 مرورًا بخيبر وتيماء (خرائط جوجل، نوفمبر 2026). ويقسم كثيرون الرحلة بليلة في العلا. والسيارة المحجوزة مسبقًا مع سائق لمجموعتك فقط، في الاتجاهين.",
        summary: "سيارة خاصة بين المدينة المنورة وتبوك: نحو 633 كم عبر العلا، أو نحو 690 كم عبر خيبر وتيماء.",
        table: {
          h: "معلومات طريق المدينة إلى تبوك",
          head: ["البند", "المدينة ⇄ تبوك"],
          rows: [
            ["الطريق الأسرع", "نحو 633 كم، قرابة 6 س 51 د، من المسجد النبوي إلى قلعة تبوك عبر منطقة العلا (طريق 375)"],
            ["طريق 15", "من المدينة إلى خيبر نحو 175 كم، وإلى تيماء نحو 428 كم، ومن تيماء إلى تبوك نحو 262 كم: نحو 690 كم إجمالًا"],
            ["خيار المبيت", "العلا: نحو 338 كم من المدينة، ثم نحو 298 كم إلى تبوك"],
            ["مطار تبوك", "نحو 7 كم من قلعة تبوك"],
            ["القطار", "لا يوجد قطار ركاب بين المدينة وتبوك"],
            ["المصدر", src.ar],
          ],
        },
        sections: [
          {
            h: "أي طريق تسلكه السيارة؟",
            p: [
              "هناك طريقان مناسبان، ويذكر عرض السعر الطريق المخطط لك. الأسرع يتجه شمال غرب عبر منطقة العلا على طريق 375: نحو 633 كم من المسجد النبوي إلى قلعة تبوك، قرابة 6 ساعات و51 دقيقة قبل التوقفات. والطريق الأقدم هو طريق 15 شمالًا مباشرة عبر واحتي خيبر، على بعد نحو 175 كم من المدينة، وتيماء، على بعد نحو 428 كم، بمجموع نحو 690 كم. يناسب طريق 15 من يريد التوقف في البلدتين، وإلا فطريق العلا أقصر.",
            ],
          },
          {
            h: "هل نبيت ليلة في العلا؟",
            p: [
              "للعائلة غالبًا نعم. فالمدينة إلى العلا نحو 338 كم والعلا إلى تبوك نحو 298 كم، فتقسم ليلة في العلا سبع ساعات قيادة إلى يومين مريحين وتضيف البلدة القديمة أو الحجر إلى الرحلة. ويُحجز الحجر والمواقع المنظمة الأخرى منفصلًا عبر قنوات العلا الرسمية، وتوصلك السيارة إلى نقطة اللقاء. وإن أردت العلا وحدها فراجع صفحة من المدينة إلى العلا، وللنصف الثاني وحده راجع صفحة من تبوك إلى العلا.",
            ],
          },
          {
            h: "من يسافر بين المدينة وتبوك؟",
            p: [
              "عائلات تبوك التي تزور المسجد النبوي، ومعها كبار السن وحقائب كثيرة غالبًا، تختار الطريق لأن سيارة واحدة تبقي الجميع معًا من الباب إلى الباب. وموظفو المشاريع المتنقلون بين الشمال الغربي والمدينة يستخدمونه حين لا تتسع عدّتهم أو عيناتهم لرحلة جوية. وزوار جولات الشمال الغربي يجمعون المدينة والعلا وتبوك في رحلة واحدة تنتهي بمطار تبوك.",
            ],
          },
          {
            h: "الطقس والضوء والخدمات",
            p: [
              "شمال العلا يقطع الطريق مسافات صحراوية طويلة قليلة الخدمات، وقد تقترب ليالي الشتاء في منطقة تبوك من التجمد. لذلك تنطلق أغلب العائلات من المدينة صباحًا لتكون الساعات الأخيرة في النهار. أخبرنا بالموسم وأي احتياجات صحية وأين تريد الصلاة والأكل، وتُخطَّط التوقفات قبل اليوم.",
            ],
          },
          {
            h: "الانطلاق والوصول",
            p: [
              "في المدينة يكون الاستلام عند أقرب نقطة تصلها السيارة من فندقك، بتوقيت يراعي الصلاة. وفي تبوك اذكر الحي أو موقعًا على الخريطة؛ وللطيران فمطار الأمير سلطان بن عبدالعزيز الدولي على بعد نحو 7 كم من القلعة، وراجع صفحة توصيل مطار تبوك إن احتجت السيارة لرحلة لاحقة. وفي الاتجاه المعاكس، من تبوك إلى المدينة، تنطبق الطرق والتوقفات نفسها.",
            ],
          },
          {
            h: "أي سيارة تطلب",
            p: ["سبع ساعات في يوم واحد، أو يومان مع ليلة في العلا، تحتاج إلى مساحة:"],
            list: [
              "جمس يوكن: عائلة تريد سيارة دفع رباعي لطريق صحراوي طويل",
              "هيونداي ستاريا: حتى 7 ركاب مع 10 حقائب أو أكثر",
              "سيدان: شخص أو اثنان بحقائب خفيفة",
            ],
          },
        ],
        checklist: { h: "ما الذي ترسله مع طلب المدينة إلى تبوك", items: ["فندقك في المدينة أو عنوانك في تبوك مع موقع على الخريطة", "التاريخ ووقت الانطلاق المفضل", "أي طريق: عبر العلا أو طريق 15 عبر خيبر وتيماء", "المبيت في العلا: نعم أو لا، وهل لديك فندق", "عدد الركاب وكل حقيبة بحجمها"] },
        faqs: [
          { q: "كم تبعد تبوك عن المدينة المنورة بالسيارة؟", a: "نحو 633 كم عبر منطقة العلا، قرابة 6 ساعات و51 دقيقة قبل التوقفات، أو نحو 690 كم عبر طريق 15 مرورًا بخيبر وتيماء (خرائط جوجل، نوفمبر 2026)." },
          { q: "هل نبيت ليلة في العلا بين المدينة وتبوك؟", a: "نعم، وتفعل ذلك عائلات كثيرة، فتنقسم الرحلة إلى نحو 338 كم ونحو 298 كم. أخبرنا هل لديك فندق أم ستحجزه بنفسك." },
          { q: "هل يتوقف السائق في خيبر أو تيماء؟", a: "نعم على طريق 15. اطلب ذلك الطريق وسمِّ التوقفات، ويُدرج توقيتها في عرض السعر." },
          { q: "هل يوجد قطار أو حافلة من المدينة إلى تبوك؟", a: "لا يوجد قطار ركاب. تحقق من شركات الطيران والحافلات بين المدن لمعرفة الخيارات الحالية. والسيارة تناسب العائلات والمجموعات التي تريد السفر معًا مع كل حقائبها." },
          { q: "هل توصلوننا من تبوك إلى المدينة بدلًا من ذلك؟", a: "نعم. تنطبق الطرق نفسها وخيار المبيت في العلا في الاتجاه الآخر. اذكر اسم فندقك في المدينة." },
          { q: "هل توصلنا السيارة إلى مطار تبوك بعد الوصول من المدينة؟", a: "نعم. أرسل وقت الرحلة؛ ومع سبع ساعات قيادة ننصح عادةً بالوصول في المساء السابق لرحلة مبكرة." },
        ],
      },
    },
  },
  {
    path: TABUK_ALULA,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [`${A}/tabuk-airport`, `${A}/alula-airport`, "services/tourism-transport/alula", `${C}/tabuk`, MADINAH_TABUK, `${I}/madinah-to-alula`],
    updated: U,
    copy: {
      en: {
        nav: "Tabuk to AlUla",
        title: "Tabuk to AlUla Private Car with Driver",
        description: "Private car with a driver between Tabuk and AlUla: about 298 km on Route 375, around 3 h 29 min, with Hegra and the Tayma road. Quote on WhatsApp.",
        h1: "Tabuk to AlUla by private car, for the north-west tourism loop",
        eyebrow: "Intercity · Tabuk ⇄ AlUla",
        answer: "Tabuk to AlUla by private car is about 298 km on Route 375, around 3 hours 29 minutes from Tabuk Fortress to AlUla town before stops (Google Maps, November 2026). AlUla International Airport is about 322 km from the fortress and Hegra about 309 km. A pre-booked car with a driver carries your party only, in either direction.",
        summary: "Private car between Tabuk and AlUla: about 298 km on Route 375, around three and a half hours.",
        table: {
          h: "Tabuk to AlUla route facts",
          head: ["Detail", "Tabuk ⇄ AlUla"],
          rows: [
            ["Tabuk Fortress to AlUla town", "About 298 km, about 3 h 29 min via Route 375"],
            ["Tabuk Fortress to AlUla International Airport (ULH)", "About 322 km, about 3 h 35 min"],
            ["Tabuk Fortress to Hegra", "About 309 km, about 3 h 57 min"],
            ["Tabuk airport (TUU) to AlUla", "About 297 km, about 3 h 30 min"],
            ["Road via Tayma", "About 325 km, about 3 h 40 min (Tayma is about 262 km from Tabuk)"],
            ["Train", "No passenger train between Tabuk and AlUla"],
            ["Source", src.en],
          ],
        },
        sections: [
          {
            h: "Who drives between Tabuk and AlUla?",
            p: [
              "Mostly visitors on a north-west loop. Some fly into Tabuk when the flights to AlUla's smaller airport do not suit their dates, spend a day or two around Tabuk, then drive south to AlUla. Others finish in AlUla and go north to Tabuk for its airport or for Wadi Disah. Families from Tabuk also make the trip for a weekend in AlUla, especially in winter, the busy season there.",
            ],
          },
          {
            h: "The road and the time it takes",
            p: [
              "The usual road is Route 375, about 298 km from Tabuk Fortress to AlUla town and around 3 hours 29 minutes in usual traffic. A second road goes through the oasis town of Tayma on Route 15 and Route 80, about 325 km and 3 hours 40 minutes; choose it if you want to see Tayma on the way. Either way, much of the drive crosses open desert, so plan fuel, prayer and a meal before you leave town.",
            ],
          },
          {
            h: "Where in AlUla are you staying?",
            p: [
              "AlUla is spread out: the town, the Old Town, the resorts in the valleys and Hegra are separated by desert roads, and the airport is about 24 km from the town. Give the exact hotel or resort, because the last part of the drive can add half an hour or more depending on where it is. If you have a booked Hegra visit, tell us its meeting time; tickets for Hegra and other controlled sites are booked through the official AlUla channels.",
            ],
          },
          {
            h: "Flying in or out",
            p: [
              "Tabuk's Prince Sultan bin Abdulaziz International Airport is about 297 km from AlUla, almost the same as from the fortress, so a car can meet your flight and drive straight on; see Tabuk airport transfers. Going the other way, AlUla International Airport is about 322 km from Tabuk Fortress. For a flight, give its time and we plan the start backwards from check-in with a margin for the road.",
            ],
          },
          {
            h: "Adding Madinah to the trip",
            p: [
              "Many visitors make one journey of it: Madinah, AlUla and Tabuk. Madinah to AlUla is about 338 km, so with this road the whole line from the Prophet's Mosque to Tabuk is about 633 km; see Madinah to Tabuk for that plan, with a night in AlUla in the middle.",
            ],
          },
          {
            h: "Which vehicle to request",
            p: ["Three and a half hours of desert road, plus moving between sites in AlUla:"],
            list: [
              "GMC Yukon: a family or couple who want an SUV and room for camera gear",
              "Hyundai Staria: up to 7 passengers with 10 or more bags",
              "Sedan: one or two people with light luggage",
            ],
          },
        ],
        checklist: { h: "Send this with your Tabuk to AlUla enquiry", items: ["Pickup: Tabuk hotel, address or TUU flight number", "AlUla hotel or resort name, or ULH flight time", "Date and preferred start time", "Route 375, or via Tayma", "Any Hegra or tour meeting time", "Passengers and bags by size"] },
        faqs: [
          { q: "How far is AlUla from Tabuk by car?", a: "About 298 km from Tabuk Fortress to AlUla town on Route 375, around 3 hours 29 minutes before stops (Google Maps, November 2026)." },
          { q: "Can I go from Tabuk airport straight to AlUla?", a: "Yes, you can request it. From the airport it is about 297 km, around three and a half hours. Send the flight number and your AlUla hotel." },
          { q: "How far is Hegra from Tabuk?", a: "About 309 km from Tabuk Fortress, around 3 hours 57 minutes. Hegra visits are booked separately through the official AlUla channels." },
          { q: "Can we stop in Tayma on the way?", a: "Yes. The road through Tayma is about 325 km instead of 298 km. Ask for it and say how long you want to stop." },
          { q: "Can you take us from AlUla to Tabuk?", a: "Yes, the same roads apply in the other direction. Give the pickup time at your AlUla hotel and your destination or flight in Tabuk." },
          { q: "Is there a bus or train between Tabuk and AlUla?", a: "There is no passenger train. Check intercity bus operators for current services; a private car goes hotel to hotel with all your bags." },
        ],
      },
      ar: {
        nav: "تبوك إلى العلا",
        title: "توصيل من تبوك إلى العلا بسيارة خاصة مع سائق",
        description: "سيارة خاصة مع سائق بين تبوك والعلا: نحو 298 كم عبر طريق 375، قرابة 3 ساعات و29 دقيقة، مع الحجر ومطار العلا وطريق تيماء. عرض السعر على واتساب.",
        h1: "من تبوك إلى العلا بسيارة خاصة، لجولة الشمال الغربي",
        eyebrow: "بين المدن · تبوك ⇄ العلا",
        answer: "الطريق من تبوك إلى العلا بسيارة خاصة نحو 298 كم عبر طريق 375، قرابة 3 ساعات و29 دقيقة من قلعة تبوك إلى بلدة العلا قبل التوقفات (خرائط جوجل، نوفمبر 2026). ويبعد مطار العلا الدولي نحو 322 كم عن القلعة، والحجر نحو 309 كم. والسيارة المحجوزة مسبقًا مع سائق لمجموعتك فقط، في الاتجاهين.",
        summary: "سيارة خاصة بين تبوك والعلا: نحو 298 كم عبر طريق 375، قرابة ثلاث ساعات ونصف.",
        table: {
          h: "معلومات طريق تبوك إلى العلا",
          head: ["البند", "تبوك ⇄ العلا"],
          rows: [
            ["من قلعة تبوك إلى بلدة العلا", "نحو 298 كم، قرابة 3 س 29 د عبر طريق 375"],
            ["من قلعة تبوك إلى مطار العلا الدولي", "نحو 322 كم، قرابة 3 س 35 د"],
            ["من قلعة تبوك إلى الحجر", "نحو 309 كم، قرابة 3 س 57 د"],
            ["من مطار تبوك إلى العلا", "نحو 297 كم، قرابة 3 س 30 د"],
            ["الطريق عبر تيماء", "نحو 325 كم، قرابة 3 س 40 د (تيماء على بعد نحو 262 كم من تبوك)"],
            ["القطار", "لا يوجد قطار ركاب بين تبوك والعلا"],
            ["المصدر", src.ar],
          ],
        },
        sections: [
          {
            h: "من يسافر بين تبوك والعلا؟",
            p: [
              "في الغالب زوار جولة الشمال الغربي. بعضهم يطير إلى تبوك حين لا تناسب رحلات مطار العلا الأصغر تواريخه، ويقضي يومًا أو يومين حول تبوك، ثم يتجه جنوبًا إلى العلا. وآخرون ينهون رحلتهم في العلا ويتجهون شمالًا إلى تبوك لمطارها أو لوادي الديسة. وعائلات تبوك أيضًا تقصد العلا لعطلة نهاية الأسبوع، خصوصًا في الشتاء، موسم الذروة هناك.",
            ],
          },
          {
            h: "الطريق والوقت الذي يستغرقه",
            p: [
              "الطريق المعتاد هو طريق 375، نحو 298 كم من قلعة تبوك إلى بلدة العلا وقرابة 3 ساعات و29 دقيقة في حركة سير معتادة. وهناك طريق ثانٍ يمر بواحة تيماء عبر طريق 15 وطريق 80، نحو 325 كم و3 ساعات و40 دقيقة، فاختره إن أردت رؤية تيماء في الطريق. وفي الحالتين يعبر جزء كبير من الرحلة صحراء مفتوحة، فخطط للوقود والصلاة والطعام قبل مغادرة المدينة.",
            ],
          },
          {
            h: "أين ستقيم في العلا؟",
            p: [
              "العلا متباعدة: البلدة والبلدة القديمة والمنتجعات في الأودية والحجر تفصلها طرق صحراوية، والمطار على بعد نحو 24 كم من البلدة. اذكر اسم الفندق أو المنتجع بالضبط، لأن الجزء الأخير من الطريق قد يضيف نصف ساعة أو أكثر بحسب موقعه. وإن كان لديك موعد محجوز في الحجر فأخبرنا بوقت اللقاء؛ وتُحجز تذاكر الحجر والمواقع المنظمة الأخرى عبر قنوات العلا الرسمية.",
            ],
          },
          {
            h: "الوصول أو المغادرة بالطائرة",
            p: [
              "يبعد مطار الأمير سلطان بن عبدالعزيز الدولي في تبوك نحو 297 كم عن العلا، أي تقريبًا مثل المسافة من القلعة، فيمكن أن تستقبلك السيارة عند رحلتك وتواصل مباشرة؛ راجع صفحة توصيل مطار تبوك. وفي الاتجاه الآخر يبعد مطار العلا الدولي نحو 322 كم عن قلعة تبوك. وللطيران أرسل وقت الرحلة ونحسب وقت الانطلاق عكسيًا من موعد إنهاء الإجراءات مع هامش للطريق.",
            ],
          },
          {
            h: "إضافة المدينة المنورة إلى الرحلة",
            p: [
              "يجعل كثير من الزوار الرحلة واحدة: المدينة ثم العلا ثم تبوك. فالمدينة إلى العلا نحو 338 كم، ومع هذا الطريق يكون الخط كله من المسجد النبوي إلى تبوك نحو 633 كم؛ راجع صفحة من المدينة إلى تبوك لتلك الخطة مع ليلة في العلا في المنتصف.",
            ],
          },
          {
            h: "أي سيارة تطلب",
            p: ["ثلاث ساعات ونصف من الطريق الصحراوي، إضافة إلى التنقل بين المواقع في العلا:"],
            list: [
              "جمس يوكن: عائلة أو زوجان يريدان سيارة دفع رباعي ومكانًا لمعدات التصوير",
              "هيونداي ستاريا: حتى 7 ركاب مع 10 حقائب أو أكثر",
              "سيدان: شخص أو اثنان بحقائب خفيفة",
            ],
          },
        ],
        checklist: { h: "ما الذي ترسله مع طلب تبوك إلى العلا", items: ["الاستلام: فندق أو عنوان في تبوك أو رقم رحلتك إلى مطار تبوك", "اسم فندقك أو منتجعك في العلا أو وقت رحلتك من مطار العلا", "التاريخ ووقت الانطلاق المفضل", "طريق 375 أم عبر تيماء", "أي موعد في الحجر أو جولة", "عدد الركاب والحقائب بأحجامها"] },
        faqs: [
          { q: "كم تبعد العلا عن تبوك بالسيارة؟", a: "نحو 298 كم من قلعة تبوك إلى بلدة العلا عبر طريق 375، قرابة 3 ساعات و29 دقيقة قبل التوقفات (خرائط جوجل، نوفمبر 2026)." },
          { q: "هل يمكن الذهاب من مطار تبوك إلى العلا مباشرة؟", a: "نعم، يمكنك طلب ذلك. من المطار نحو 297 كم وقرابة ثلاث ساعات ونصف. أرسل رقم الرحلة واسم فندقك في العلا." },
          { q: "كم يبعد الحجر عن تبوك؟", a: "نحو 309 كم من قلعة تبوك، قرابة 3 ساعات و57 دقيقة. وتُحجز زيارة الحجر منفصلة عبر قنوات العلا الرسمية." },
          { q: "هل نتوقف في تيماء في الطريق؟", a: "نعم. الطريق عبر تيماء نحو 325 كم بدل 298 كم. اطلبه واذكر المدة التي تريد التوقف فيها." },
          { q: "هل توصلوننا من العلا إلى تبوك؟", a: "نعم، تنطبق الطرق نفسها في الاتجاه الآخر. اذكر وقت الاستلام من فندقك في العلا ووجهتك أو رحلتك في تبوك." },
          { q: "هل توجد حافلة أو قطار بين تبوك والعلا؟", a: "لا يوجد قطار ركاب. تحقق من شركات الحافلات بين المدن لمعرفة الخدمات الحالية؛ والسيارة الخاصة تنقلك من فندق إلى فندق مع كل حقائبك." },
        ],
      },
    },
  },
];

type L = Record<Locale, string>;
/** One linking sentence appended to the last paragraph of a section (same index in EN and AR). */
const addLinks: { path: string; section: number; text: L; related: string }[] = [
  { path: `${A}/yanbu-airport`, section: 2, related: MADINAH_YANBU, text: { en: "For the road between the two cities in either direction, see [Madinah to Yanbu by private car](services/intercity-transfers/madinah-to-yanbu).", ar: "وللطريق بين المدينتين في الاتجاهين راجع [التوصيل من المدينة إلى ينبع بسيارة خاصة](services/intercity-transfers/madinah-to-yanbu)." } },
  { path: `${C}/yanbu`, section: 5, related: MADINAH_YANBU, text: { en: "The Madinah road has its own page: [Madinah to Yanbu with a driver](services/intercity-transfers/madinah-to-yanbu), about 246 km on Route 60.", ar: "ولطريق المدينة صفحة خاصة: [من المدينة إلى ينبع مع سائق](services/intercity-transfers/madinah-to-yanbu)، نحو 246 كم عبر طريق 60." } },
  { path: `${I}/riyadh-to-yanbu`, section: 4, related: MADINAH_YANBU, text: { en: "The second day on its own is the [Madinah to Yanbu transfer](services/intercity-transfers/madinah-to-yanbu), about 246 km.", ar: "واليوم الثاني وحده هو [التوصيل من المدينة إلى ينبع](services/intercity-transfers/madinah-to-yanbu)، نحو 246 كم." } },
  { path: `${C}/madinah`, section: 0, related: MADINAH_YANBU, text: { en: "Longer roads out of Madinah include [Madinah to Yanbu](services/intercity-transfers/madinah-to-yanbu) on the Red Sea and [Madinah to Tabuk](services/intercity-transfers/madinah-to-tabuk) in the north-west.", ar: "ومن الطرق الأطول من المدينة [المدينة إلى ينبع](services/intercity-transfers/madinah-to-yanbu) على البحر الأحمر و[المدينة إلى تبوك](services/intercity-transfers/madinah-to-tabuk) في الشمال الغربي." } },
  { path: `${A}/tabuk-airport`, section: 5, related: MADINAH_TABUK, text: { en: "From Madinah the road is shorter, about 633 km through AlUla: see [Madinah to Tabuk by private car](services/intercity-transfers/madinah-to-tabuk).", ar: "ومن المدينة الطريق أقصر، نحو 633 كم عبر العلا: راجع [التوصيل من المدينة إلى تبوك بسيارة خاصة](services/intercity-transfers/madinah-to-tabuk)." } },
  { path: `${C}/tabuk`, section: 0, related: MADINAH_TABUK, text: { en: "The two long roads most asked for are [Madinah to Tabuk](services/intercity-transfers/madinah-to-tabuk), about 633 km, and [Tabuk to AlUla](services/intercity-transfers/tabuk-to-alula), about 298 km.", ar: "وأكثر الطرق الطويلة طلبًا [المدينة إلى تبوك](services/intercity-transfers/madinah-to-tabuk)، نحو 633 كم، و[تبوك إلى العلا](services/intercity-transfers/tabuk-to-alula)، نحو 298 كم." } },
  { path: `${I}/madinah-to-alula`, section: 3, related: MADINAH_TABUK, text: { en: "If you are carrying on north after AlUla, the whole road is planned on the [Madinah to Tabuk page](services/intercity-transfers/madinah-to-tabuk).", ar: "وإن كنت ستواصل شمالًا بعد العلا فالطريق كله مخطط في [صفحة المدينة إلى تبوك](services/intercity-transfers/madinah-to-tabuk)." } },
  { path: `${A}/tabuk-airport`, section: 1, related: TABUK_ALULA, text: { en: "The AlUla road in either direction is set out on [Tabuk to AlUla by private car](services/intercity-transfers/tabuk-to-alula).", ar: "وطريق العلا في الاتجاهين مفصل في [التوصيل من تبوك إلى العلا بسيارة خاصة](services/intercity-transfers/tabuk-to-alula)." } },
  { path: "services/tourism-transport/alula", section: 3, related: TABUK_ALULA, text: { en: "From the north, [Tabuk to AlUla by car](services/intercity-transfers/tabuk-to-alula) is about 298 km, around three and a half hours.", ar: "ومن الشمال يبلغ [الطريق من تبوك إلى العلا بالسيارة](services/intercity-transfers/tabuk-to-alula) نحو 298 كم، قرابة ثلاث ساعات ونصف." } },
];

export function applyRoutes3c(pages: ServicePage[]) {
  for (const a of addLinks) {
    const p = pages.find((x) => x.path === a.path);
    if (!p) throw new Error(`routes-3c: unknown page ${a.path}`);
    for (const l of ["en", "ar"] as Locale[]) {
      const s = p.copy[l].sections[a.section];
      if (!s) throw new Error(`routes-3c: no section ${a.section} on ${a.path}/${l}`);
      s.p = [...s.p.slice(0, -1), `${s.p[s.p.length - 1]} ${a.text[l]}`];
    }
    if (!p.related.includes(a.related)) p.related.push(a.related);
  }
}
