import type { Locale } from "@/i18n/routing";
import type { PriceVehicle } from "./prices";
import type { ServicePage } from "./types";

/**
 * Vehicle pages under /fleet/ (master brief Phase 3A, 2026-11-27).
 *
 * Only vehicles the owner has confirmed are built (SEO-RULES.md §5 "vehicle pages only for verified vehicles"):
 *  - GMC Yukon, with the Chevrolet Suburban and Tahoe as the same class (owner, 2026-11-21). No seat or luggage number
 *    is published for this class: the owner has not confirmed one, and the layout differs by vehicle.
 *  - Hyundai Staria: up to 7 passengers and 10 or more bags (owner, 2026-11-18). No 9-seat version is claimed.
 * Hiace and Coaster pages wait for owner confirmation that partners supply them; a sedan page is a later step.
 *
 * Two guides targeted the same queries ("GMC Yukon with driver", "Hyundai Staria with driver"). Their content now lives
 * here and their URLs 308-redirect to these pages (src/content/consolidated.ts), so no page competes with another.
 *
 * Route rows reuse the figures already published on each route page (Google Maps / routing data, checked November
 * 2026), so the same trip never shows two different distances. Prices appear only when src/content/prices.ts has them.
 */
const U = "2026-11-27";
const F = "fleet";
const S = "services";
const I = `${S}/intercity-transfers`;

type L = Record<Locale, string>;
export type VehicleRoute = { path: string; km: L; time: L };
export type VehicleRoutes = {
  /** Key in src/content/prices.ts: the "from" price of this vehicle on each route. */
  vehicle: PriceVehicle;
  /** Pre-selected vehicle in the enquiry form (value from src/content/fleet.ts). */
  formValue: string;
  routes: VehicleRoute[];
};

const r = (path: string, kmEn: string, kmAr: string, timeEn: string, timeAr: string): VehicleRoute => ({
  path, km: { en: kmEn, ar: kmAr }, time: { en: timeEn, ar: timeAr },
});

export const GMC = `${F}/gmc-yukon-with-driver`;
export const STARIA = `${F}/hyundai-staria-with-driver`;

export const vehicleRoutes: Record<string, VehicleRoutes> = {
  [GMC]: {
    vehicle: "gmc",
    formValue: "GMC Yukon",
    routes: [
      r(`${I}/makkah-to-madinah`, "about 436 km", "نحو 436 كم", "about 4 h 20 min", "نحو 4 س 20 د"),
      r(`${I}/riyadh-to-dammam`, "about 410 km", "نحو 410 كم", "about 3 h 55 min", "نحو 3 س 55 د"),
      r(`${I}/jeddah-to-madinah`, "about 404 km", "نحو 404 كم", "about 4 h 07 min", "نحو 4 س 07 د"),
      r(`${I}/riyadh-to-jeddah`, "about 955 km", "نحو 955 كم", "about 9 h 48 min", "نحو 9 س 48 د"),
      r(`${I}/riyadh-to-makkah`, "about 871 km", "نحو 871 كم", "about 9 h 03 min", "نحو 9 س 03 د"),
      r(`${I}/riyadh-to-madinah`, "about 826 km", "نحو 826 كم", "about 7 h 40 min", "نحو 7 س 40 د"),
      r(`${I}/madinah-to-alula`, "about 338 km", "نحو 338 كم", "about 3 h 42 min", "نحو 3 س 42 د"),
      r(`${I}/riyadh-to-alula`, "about 1,041 km", "نحو 1,041 كم", "about 11 h 14 min", "نحو 11 س 14 د"),
    ],
  },
  [STARIA]: {
    vehicle: "staria",
    formValue: "Hyundai Staria",
    routes: [
      r(`${S}/umrah-transport/jeddah-airport-to-makkah`, "about 98 km", "نحو 98 كم", "about 1 h 05 min", "نحو 1 س 05 د"),
      r(`${I}/makkah-to-madinah`, "about 436 km", "نحو 436 كم", "about 4 h 20 min", "نحو 4 س 20 د"),
      r(`${I}/madinah-to-makkah`, "about 420 to 450 km", "نحو 420 إلى 450 كم", "4 to 5 h", "4 إلى 5 س"),
      r(`${I}/jeddah-to-madinah`, "about 404 km", "نحو 404 كم", "about 4 h 07 min", "نحو 4 س 07 د"),
      r(`${I}/madinah-to-jeddah`, "about 400 km", "نحو 400 كم", "about 3 h 56 min", "نحو 3 س 56 د"),
      r(`${I}/makkah-to-taif`, "about 89 km", "نحو 89 كم", "about 1 h 19 min", "نحو 1 س 19 د"),
      r(`${I}/jeddah-to-taif`, "about 171 km", "نحو 171 كم", "about 1 h 55 min", "نحو 1 س 55 د"),
      r(`${I}/madinah-to-alula`, "about 338 km", "نحو 338 كم", "about 3 h 42 min", "نحو 3 س 42 د"),
    ],
  },
};

export const vehiclePages: ServicePage[] = [
  {
    path: GMC,
    parent: F,
    variant: "luxury",
    service: "intercity",
    related: [STARIA, "luxury-transportation/luxury-suv", `${S}/airport-transfers/vip-airport-transfer`, `${S}/chauffeur-services/multi-day-chauffeur`, `${S}/umrah-transport/family-umrah-transport`],
    updated: U,
    copy: {
      en: {
        nav: "GMC Yukon with driver",
        title: "GMC Yukon with Driver in Saudi Arabia",
        description: "Book a GMC Yukon, Suburban or Tahoe with a driver for airport pickups, Makkah to Madinah, Riyadh to Dammam and other long roads. Quote on WhatsApp.",
        h1: "GMC Yukon with a driver: a full-size SUV for families, guests and long roads",
        eyebrow: "Fleet · Full-size SUV",
        answer: "You can book a GMC Yukon with a driver anywhere RideSaudi's transport partners operate in Saudi Arabia: airport pickups, city-to-city trips and full days. Families and senior guests choose it for space and comfort on long roads such as Makkah to Madinah (about 436 km) or Riyadh to Dammam (about 410 km). Seats and luggage are confirmed for the actual vehicle in your quotation.",
        summary: "A GMC Yukon, Suburban or Tahoe with a driver for families, guests and long intercity roads.",
        sections: [
          {
            h: "Who books a GMC Yukon with a driver?",
            p: ["Mostly families and hosts. In Saudi Arabia many people say \"GMC\" when they mean a full-size SUV with a driver, and the request usually comes from one of these:"],
            list: [
              "A family with suitcases that does not want to split into two cars",
              "Older parents who find it easier to sit higher and step in without bending low into a sedan",
              "A company meeting a senior guest at King Khalid, King Abdulaziz or King Fahd airport",
              "A long road such as Riyadh to Jeddah, where the extra room matters after the fourth hour",
              "A wedding or family occasion where the hosts want a premium vehicle for their guests",
            ],
          },
          {
            h: "Is a Chevrolet Suburban or Tahoe the same thing?",
            p: [
              "Yes, for booking purposes. The GMC Yukon, Chevrolet Suburban and Chevrolet Tahoe are the same class of full-size SUV, and all three can be requested through RideSaudi's partners. The Suburban and the long-wheelbase Yukon XL have a longer body with more room behind the last row, which helps when the luggage is the problem rather than the seats. Name your preferred model in the enquiry; if it is not available on your date, the quotation names the equivalent vehicle before you confirm anything.",
            ],
          },
          {
            h: "How many people and bags fit?",
            p: [
              "We do not print one number for this class, because it changes with the vehicle. A second row with two captain's chairs seats one person fewer than a bench, and a standard Tahoe has less space behind the third row than a Suburban. Tell us the number of adults and children and every bag by size, and the quotation confirms a vehicle that takes all of it. If your count is close to the limit, we will say so and suggest a Hyundai Staria instead.",
            ],
          },
          {
            h: "Which long roads is it booked for most?",
            p: [
              "The routes in the table above are where a full-size SUV is requested most, with the distances and driving times published on each route page. Riyadh to Jeddah is about 955 km, close to ten hours before stops, so most families plan one long break or start early. Riyadh to AlUla is about 1,041 km; many travellers split it with a night in Hail. On Makkah to Madinah the driver can stop for prayer and a meal on Route 15, and on the way back from Madinah to Makkah the car stops at the Miqat at Dhul Hulaifah for those entering ihram.",
            ],
          },
          {
            h: "Can the GMC drive right up to the Haram?",
            p: [
              "Not always. Close to Masjid al-Haram in Makkah and the Prophet's Mosque in Madinah, vehicle access is restricted at prayer times and in busy seasons such as Ramadan, so the pickup or drop-off is at the nearest point a car may reach at that hour, often a hotel entrance or an agreed gate. A full-size SUV is no exception. Give the hotel name and, if you know it, the entrance you use, and the driver plans the stop around it.",
            ],
          },
          {
            h: "When is another vehicle the better choice?",
            p: [
              "For one or two travellers with light bags, a sedan is usually enough. For a family of six or seven with a lot of luggage, the Hyundai Staria takes up to 7 passengers with 10 or more bags and keeps everyone in one vehicle. For senior delegations, a luxury SUV is requested through [VIP car service](luxury-transportation/vip-car-service). The [guide to choosing a sedan, GMC or Staria by group size](blog/choosing-vehicle-size-family-group-travel-saudi) compares all three.",
            ],
          },
          {
            h: "Can I keep the GMC for a whole day or several days?",
            p: [
              "Yes. For meetings across Riyadh or a day of ziyarat, the car and driver can be booked by the hour or day through [chauffeur services](services/chauffeur-services). For a trip through several cities with the same vehicle, ask for a multi-day chauffeur. Send the programme in order and the quotation covers it as one booking.",
            ],
          },
        ],
        checklist: { h: "What to send when you ask for a GMC Yukon", items: ["Route, date and pickup time", "Adults, children and infants", "Bags by size: large suitcases, cabin bags, pushchairs, Zamzam water", "Preferred model: Yukon, Suburban or Tahoe", "Hotel names and any Miqat or prayer stops", "One way, return or a full day"] },
        faqs: [
          { q: "Can I book a GMC Yukon with a driver in Saudi Arabia?", a: "Yes. Choose GMC Yukon as the vehicle in the enquiry form or say so on WhatsApp. It is supplied with a driver by RideSaudi's transport partners, subject to availability on your date." },
          { q: "How many passengers fit in a GMC Yukon with a driver?", a: "It depends on the seat layout of the vehicle on your date, so we confirm it in the quotation. Send the number of adults and children and every bag; if it is tight, we recommend a Hyundai Staria." },
          { q: "Will I get exactly a GMC, or a Suburban or Tahoe?", a: "Ask for the model you want. If it is not available, the quotation names an equivalent full-size SUV, and you see it before you confirm." },
          { q: "Is a GMC Yukon a good choice from Makkah to Madinah?", a: "Yes, for a smaller family with luggage that wants an SUV on a 436 km road. A family of six or seven with many bags usually fits better in a Staria." },
          { q: "Can the GMC meet us at the airport?", a: "Yes. Give the flight number and arrival time. The driver meets you at the arrivals area agreed in the quotation at King Khalid, King Abdulaziz, Prince Mohammad bin Abdulaziz or King Fahd airport." },
          { q: "How do I get a price for a GMC with a driver?", a: "Send the route, date, passengers and bags on WhatsApp or through the form. The price depends on the date, distance, waiting time and stops, and the final quote is confirmed on WhatsApp before you book." },
        ],
      },
      ar: {
        nav: "جمس يوكن مع سائق",
        title: "جمس مع سائق في السعودية: يوكن وسوبربان وتاهو",
        description: "احجز جمس يوكن أو سوبربان أو تاهو مع سائق للاستقبال من المطار ومن مكة إلى المدينة ومن الرياض إلى الدمام وغيرها من الطرق الطويلة. عرض السعر على واتساب.",
        h1: "جمس يوكن مع سائق: سيارة عائلية كبيرة للضيوف والطرق الطويلة",
        eyebrow: "المركبات · دفع رباعي كبيرة",
        answer: "يمكنك حجز جمس يوكن مع سائق حيث يعمل شركاء النقل لدى RideSaudi في السعودية: استقبال من المطار، ورحلات بين المدن، ويوم كامل. تختاره العائلات وكبار الضيوف لمساحته وراحته على الطرق الطويلة مثل مكة إلى المدينة (نحو 436 كم) أو الرياض إلى الدمام (نحو 410 كم). ويُؤكَّد عدد المقاعد والحقائب للسيارة الفعلية في عرض السعر.",
        summary: "جمس يوكن أو سوبربان أو تاهو مع سائق للعائلات والضيوف والطرق الطويلة بين المدن.",
        sections: [
          {
            h: "من يطلب جمس مع سائق؟",
            p: ["في الغالب العائلات ومن يستقبل ضيوفًا. وكثيرون في السعودية يقولون «جمس» ويقصدون سيارة دفع رباعي كبيرة مع سائق، والطلب يأتي عادةً من أحد هؤلاء:"],
            list: [
              "عائلة معها حقائب ولا تريد أن تتوزع على سيارتين",
              "والدان كبيران في السن يرتاحان في مقعد مرتفع بدل النزول إلى مقعد سيدان منخفض",
              "شركة تستقبل ضيفًا رفيعًا في مطار الملك خالد أو الملك عبدالعزيز أو الملك فهد",
              "طريق طويل مثل الرياض إلى جدة، حيث تفرق المساحة بعد الساعة الرابعة",
              "زواج أو مناسبة عائلية يريد أصحابها سيارة فخمة لضيوفهم",
            ],
          },
          {
            h: "هل سوبربان أو تاهو مثل الجمس؟",
            p: [
              "نعم من ناحية الحجز. فجمس يوكن وشيفروليه سوبربان وشيفروليه تاهو من الفئة نفسها، ويمكن طلب الثلاث عبر شركاء RideSaudi. والسوبربان واليوكن XL أطول جسمًا وفيهما مساحة أكبر خلف الصف الأخير، وهذا يفيد حين تكون المشكلة في الحقائب لا في المقاعد. اذكر الموديل الذي تفضله في الطلب، وإن لم يتوفر في تاريخك يسمي عرض السعر السيارة المماثلة قبل أن تؤكد أي شيء.",
            ],
          },
          {
            h: "كم شخصًا وكم حقيبة يتسع الجمس؟",
            p: [
              "لا ننشر رقمًا واحدًا لهذه الفئة لأنه يختلف من سيارة إلى أخرى؛ فالصف الثاني بكرسيين منفصلين يأخذ راكبًا أقل من المقعد الكامل، والتاهو العادي مساحته خلف الصف الثالث أقل من السوبربان. أرسل عدد الكبار والأطفال وكل حقيبة بحجمها، ويؤكد عرض السعر سيارة تتسع للجميع. وإن كان العدد قريبًا من الحد فسنخبرك ونقترح هيونداي ستاريا بدلًا منها.",
            ],
          },
          {
            h: "على أي طرق طويلة يُطلب أكثر؟",
            p: [
              "المسارات في الجدول أعلاه هي الأكثر طلبًا لسيارة الدفع الرباعي الكبيرة، والمسافات والأوقات منشورة في صفحة كل مسار. فالرياض إلى جدة نحو 955 كم، قرابة عشر ساعات قبل التوقفات، لذلك تخطط أغلب العائلات لاستراحة طويلة أو تنطلق مبكرًا. والرياض إلى العلا نحو 1,041 كم، ويقسمها كثيرون بليلة في حائل. وعلى طريق مكة إلى المدينة يتوقف السائق للصلاة والطعام على الطريق 15، وفي العودة من المدينة إلى مكة تتوقف السيارة عند ميقات ذي الحليفة لمن يريد الإحرام.",
            ],
          },
          {
            h: "هل يصل الجمس إلى باب الحرم؟",
            p: [
              "ليس دائمًا. فقرب المسجد الحرام في مكة والمسجد النبوي في المدينة يُقيَّد دخول السيارات وقت الصلوات وفي المواسم المزدحمة مثل رمضان، فيكون الاستلام أو النزول عند أقرب نقطة يُسمح للسيارة بالوصول إليها في تلك الساعة، وغالبًا مدخل الفندق أو بوابة متفق عليها. والسيارة الكبيرة لا تُستثنى من ذلك. اذكر اسم الفندق والمدخل الذي تستخدمه إن عرفته، ويخطط السائق للتوقف على أساسه.",
            ],
          },
          {
            h: "متى تكون سيارة أخرى أنسب؟",
            p: [
              "لمسافر أو اثنين بحقائب خفيفة تكفي السيدان عادةً. ولعائلة من ستة أو سبعة أفراد مع حقائب كثيرة تتسع هيونداي ستاريا لما يصل إلى 7 ركاب مع 10 حقائب أو أكثر وتبقيكم في سيارة واحدة. ولكبار الوفود تُطلب سيارة فاخرة عبر [خدمة سيارات VIP](luxury-transportation/vip-car-service). ويقارن [دليل اختيار السيدان أو الجمس أو ستاريا حسب عدد الركاب](blog/choosing-vehicle-size-family-group-travel-saudi) بين الثلاث.",
            ],
          },
          {
            h: "هل يمكن حجز الجمس ليوم كامل أو عدة أيام؟",
            p: [
              "نعم. لاجتماعات متفرقة في الرياض أو ليوم زيارات، تُحجز السيارة مع السائق بالساعة أو باليوم عبر [خدمات السائق الخاص](services/chauffeur-services). ولرحلة تمر بعدة مدن بالسيارة نفسها اطلب حجزًا لعدة أيام. أرسل البرنامج مرتبًا، ويغطيه عرض السعر كحجز واحد.",
            ],
          },
        ],
        checklist: { h: "ما الذي ترسله حين تطلب جمس يوكن", items: ["المسار والتاريخ ووقت الاستلام", "عدد الكبار والأطفال والرضّع", "الحقائب بأحجامها: كبيرة ويد وعربات أطفال وماء زمزم", "الموديل المفضل: يوكن أو سوبربان أو تاهو", "أسماء الفنادق وأي توقف للميقات أو الصلاة", "ذهاب فقط أم ذهاب وعودة أم يوم كامل"] },
        faqs: [
          { q: "هل يمكن حجز جمس يوكن مع سائق في السعودية؟", a: "نعم. اختر جمس يوكن في نموذج الطلب أو اذكره على واتساب، ويوفّره شركاء النقل لدى RideSaudi مع سائق حسب التوفر في تاريخك." },
          { q: "كم راكبًا يتسع جمس يوكن مع سائق؟", a: "يعتمد على توزيع المقاعد في السيارة المتاحة لتاريخك، لذلك نؤكده في عرض السعر. أرسل عدد الكبار والأطفال وكل الحقائب، وإن كانت المساحة ضيقة نقترح ستاريا." },
          { q: "هل أحصل على جمس بالضبط أم سوبربان أو تاهو؟", a: "اطلب الموديل الذي تريده، وإن لم يتوفر يسمي عرض السعر سيارة دفع رباعي كبيرة مماثلة، وتراها قبل أن تؤكد." },
          { q: "هل الجمس مناسب من مكة إلى المدينة؟", a: "نعم لعائلة أصغر معها حقائب وتريد سيارة دفع رباعي على طريق طوله 436 كم. أما عائلة من ستة أو سبعة أفراد مع حقائب كثيرة فالأنسب لها غالبًا ستاريا." },
          { q: "هل يستقبلنا الجمس في المطار؟", a: "نعم. أرسل رقم الرحلة ووقت الوصول، ويقابلك السائق في صالة الوصول المتفق عليها في عرض السعر في مطار الملك خالد أو الملك عبدالعزيز أو الأمير محمد بن عبدالعزيز أو الملك فهد." },
          { q: "كيف أعرف سعر جمس مع سائق؟", a: "أرسل المسار والتاريخ وعدد الركاب والحقائب على واتساب أو عبر النموذج. يعتمد السعر على التاريخ والمسافة ووقت الانتظار والتوقفات، ونؤكد السعر النهائي على واتساب قبل الحجز." },
        ],
      },
    },
  },
  {
    path: STARIA,
    parent: F,
    variant: "default",
    service: "intercity",
    related: [GMC, `${S}/umrah-transport/family-umrah-transport`, `${S}/airport-transfers/family-airport-transfer`, `${S}/group-transportation/family-transport`, `${S}/group-transportation/van-and-minibus`],
    updated: U,
    copy: {
      en: {
        nav: "Hyundai Staria with driver",
        title: "Hyundai Staria with Driver: 7 Seats, 10+ Bags",
        description: "Hyundai Staria with a driver for up to 7 passengers and 10 or more bags: Jeddah airport to Makkah, Makkah to Madinah and family trips. Quote on WhatsApp.",
        h1: "Hyundai Staria with a driver for families and small groups",
        eyebrow: "Fleet · Family van",
        answer: "A Hyundai Staria booked with a driver through RideSaudi takes up to 7 passengers with 10 or more pieces of luggage, depending on bag size. Umrah families, airport arrivals with suitcases and long roads such as Jeddah airport to Makkah (about 98 km) or Makkah to Madinah (about 436 km) are its main use. Groups larger than seven need a second vehicle.",
        summary: "Up to 7 passengers and 10 or more bags in one vehicle with a driver, for families and small groups.",
        sections: [
          {
            h: "How many people and bags fit in a Staria?",
            p: [
              "Up to 7 passengers with 10 or more pieces of luggage. The bag count depends on size: ten cabin bags take far less room than ten large suitcases, and a folded wheelchair or a pushchair counts as a bag. List every item by size when you enquire, and the quotation confirms that the vehicle for your date takes all of it. We publish the 7-passenger figure because it is the one confirmed for our bookings; if you need more seats, ask and we will say what is available.",
            ],
          },
          {
            h: "Why do Umrah families choose the Staria?",
            p: ["Because the luggage grows during the trip and nobody wants to split up. It is the usual request when:"],
            list: [
              "A family of five to seven lands at King Abdulaziz International Airport and goes straight to a hotel in Makkah",
              "Grandparents travel with the family and should stay with the people helping them",
              "The trip home carries Zamzam water and shopping that did not exist on arrival",
              "The plan covers every leg: Jeddah airport to Makkah, Makkah to Madinah, and Madinah back to an airport",
            ],
          },
          {
            h: "What about Zamzam water?",
            p: [
              "Count it as luggage. Zamzam containers are heavy and upright, so mention how many you are bringing when you send your bags, especially for the leg to the airport at the end of the trip. Airlines set their own rules for carrying Zamzam on the flight; check those with your airline, because the car only gets it to the terminal.",
            ],
          },
          {
            h: "Staria or the Haramain train?",
            p: [
              "The Haramain High Speed Railway is fast between Jeddah airport, Makkah and Madinah, and for a couple with cabin bags it is often the better choice. For a family it means lifting every bag on and off at two stations, and the Makkah and Madinah stations are outside the central areas, so you still need a car from the station to the hotel. The [Jeddah airport to Makkah options guide](blog/jeddah-airport-to-makkah-train-bus-taxi-private-car) compares train, bus and car in more detail. The Staria goes from the terminal to the hotel door, or to the nearest point cars may reach near the Haram at that hour, in one move.",
            ],
          },
          {
            h: "Staria or GMC Yukon?",
            p: [
              "Choose the Staria when the numbers decide: six or seven people, or a family with more bags than an SUV takes comfortably. Choose a GMC Yukon when the party is smaller and you want an SUV for a guest or a long road. If you are between the two, send passengers and bags and ask us to recommend; the [guide to choosing a vehicle by group size](blog/choosing-vehicle-size-family-group-travel-saudi) sets out the sedan, GMC and Staria side by side.",
            ],
          },
          {
            h: "What if we are more than seven?",
            p: [
              "Then you need two vehicles, or a larger van. Two Starias, or a Staria with a GMC, keep a big family on the same schedule with the same driver plan. For bigger groups, see van and minibus hire; the quotation lists every vehicle proposed and its availability for your date.",
            ],
          },
        ],
        checklist: { h: "What to send when you ask for a Staria", items: ["Route, date and pickup time", "Adults, children and infants", "Bags by size, including Zamzam water, pushchairs and wheelchairs", "Child seats or help for an older passenger", "Hotel names in Makkah and Madinah", "Every leg, if you want the whole Umrah trip quoted together"] },
        faqs: [
          { q: "How many passengers fit in a Hyundai Staria with a driver?", a: "Up to 7 passengers, with 10 or more pieces of luggage depending on bag size." },
          { q: "Can a Staria take my family from Jeddah airport to Makkah?", a: "Yes. It is the usual vehicle for families of five to seven arriving at King Abdulaziz International Airport with suitcases. Send the flight number and the hotel name." },
          { q: "Is the Staria better than a GMC Yukon for Makkah to Madinah?", a: "For six or seven people, or a family with many bags, usually yes. A smaller family that wants an SUV may prefer the GMC Yukon." },
          { q: "Do you have a 9- or 11-seat Staria?", a: "We only publish the 7-passenger figure confirmed for our bookings. If you need more seats, ask: the quotation proposes a second vehicle or a larger van." },
          { q: "Can we stop for prayer and a meal on the way to Madinah?", a: "Yes. Tell the driver when you want to stop. On the road from Madinah to Makkah, the car can also stop at the Miqat at Dhul Hulaifah." },
          { q: "Is the Staria shared with other passengers?", a: "No. The vehicle and driver are reserved for your party only." },
        ],
      },
      ar: {
        nav: "هيونداي ستاريا مع سائق",
        title: "ستاريا مع سائق: 7 ركاب و10 حقائب أو أكثر",
        description: "هيونداي ستاريا مع سائق لما يصل إلى 7 ركاب مع 10 حقائب أو أكثر: من مطار جدة إلى مكة، ومن مكة إلى المدينة، ورحلات العائلات. عرض السعر على واتساب.",
        h1: "هيونداي ستاريا مع سائق للعائلات والمجموعات الصغيرة",
        eyebrow: "المركبات · سيارة عائلية",
        answer: "تتسع هيونداي ستاريا التي تحجزها مع سائق عبر RideSaudi لما يصل إلى 7 ركاب مع 10 حقائب أو أكثر بحسب حجمها. وأكثر من يطلبها عائلات العمرة، والقادمون إلى المطار بحقائب كبيرة، والطرق الطويلة مثل مطار جدة إلى مكة (نحو 98 كم) أو مكة إلى المدينة (نحو 436 كم). والمجموعات الأكبر من سبعة تحتاج سيارة ثانية.",
        summary: "حتى 7 ركاب و10 حقائب أو أكثر في سيارة واحدة مع سائق، للعائلات والمجموعات الصغيرة.",
        sections: [
          {
            h: "كم شخصًا وكم حقيبة تتسع ستاريا؟",
            p: [
              "حتى 7 ركاب مع 10 حقائب أو أكثر. ويعتمد عدد الحقائب على حجمها؛ فعشر حقائب يد تأخذ مساحة أقل بكثير من عشر حقائب كبيرة، والكرسي المتحرك المطوي أو عربة الطفل تُحسب حقيبة. اذكر كل قطعة بحجمها عند الطلب، ويؤكد عرض السعر أن السيارة المتاحة لتاريخك تتسع لها كلها. وننشر رقم السبعة ركاب لأنه المؤكد في حجوزاتنا، وإن احتجت مقاعد أكثر فاسأل ونخبرك بالمتاح.",
            ],
          },
          {
            h: "لماذا تختار عائلات العمرة ستاريا؟",
            p: ["لأن الحقائب تزيد خلال الرحلة ولا أحد يريد أن تتفرق العائلة. وهي الطلب المعتاد حين:"],
            list: [
              "تصل عائلة من خمسة إلى سبعة أفراد إلى مطار الملك عبدالعزيز الدولي وتتجه مباشرة إلى فندق في مكة",
              "يسافر الجد والجدة مع العائلة ويجب أن يبقيا مع من يساعدهما",
              "تحمل رحلة العودة ماء زمزم ومشتريات لم تكن موجودة عند الوصول",
              "تشمل الخطة كل المراحل: من مطار جدة إلى مكة، ومن مكة إلى المدينة، ومن المدينة إلى المطار",
            ],
          },
          {
            h: "وماذا عن ماء زمزم؟",
            p: [
              "احسبه ضمن الحقائب. فعبوات زمزم ثقيلة وتُحمل واقفة، لذلك اذكر عددها حين ترسل حقائبك، خصوصًا لمرحلة المطار في آخر الرحلة. أما حمل زمزم على الطائرة فلكل شركة طيران قواعدها، فتحقق منها مع شركتك، لأن السيارة توصله إلى صالة المطار فقط.",
            ],
          },
          {
            h: "ستاريا أم قطار الحرمين؟",
            p: [
              "قطار الحرمين السريع سريع بين مطار جدة ومكة والمدينة، ولزوجين بحقائب يد يكون غالبًا الخيار الأفضل. أما للعائلة فيعني رفع كل الحقائب وإنزالها في محطتين، ومحطتا مكة والمدينة خارج المنطقة المركزية، فتحتاج سيارة من المحطة إلى الفندق على أي حال. ويقارن [دليل خيارات التنقل من مطار جدة إلى مكة](blog/jeddah-airport-to-makkah-train-bus-taxi-private-car) بين القطار والحافلة والسيارة بتفصيل أكثر. وستاريا تنقلكم من صالة المطار إلى باب الفندق، أو إلى أقرب نقطة يُسمح للسيارات بالوصول إليها قرب الحرم في تلك الساعة، دفعة واحدة.",
            ],
          },
          {
            h: "ستاريا أم جمس يوكن؟",
            p: [
              "اختر ستاريا حين يحسم العدد القرار: ستة أو سبعة أشخاص، أو عائلة معها حقائب أكثر مما تتسع له سيارة الدفع الرباعي براحة. واختر جمس يوكن حين يكون العدد أقل وتريد سيارة دفع رباعي لضيف أو لطريق طويل. وإن ترددت بينهما فأرسل عدد الركاب والحقائب واطلب أن نقترح لك، ويقارن [دليل اختيار السيارة حسب عدد الركاب](blog/choosing-vehicle-size-family-group-travel-saudi) بين السيدان والجمس وستاريا.",
            ],
          },
          {
            h: "ماذا لو كنا أكثر من سبعة؟",
            p: [
              "تحتاجون عندها إلى سيارتين أو إلى فان أكبر. فسيارتا ستاريا، أو ستاريا مع جمس، تُبقيان العائلة الكبيرة على الجدول نفسه وخطة السائق نفسها. وللمجموعات الأكبر راجع صفحة الفان والحافلة الصغيرة مع سائق، ويذكر عرض السعر كل سيارة مقترحة وتوفرها في تاريخك.",
            ],
          },
        ],
        checklist: { h: "ما الذي ترسله حين تطلب ستاريا", items: ["المسار والتاريخ ووقت الاستلام", "عدد الكبار والأطفال والرضّع", "الحقائب بأحجامها، ومنها ماء زمزم وعربات الأطفال والكراسي المتحركة", "مقاعد الأطفال أو مساعدة راكب كبير في السن", "أسماء الفنادق في مكة والمدينة", "كل المراحل إن أردت عرض سعر لرحلة العمرة كاملة"] },
        faqs: [
          { q: "كم راكبًا تتسع هيونداي ستاريا مع سائق؟", a: "حتى 7 ركاب، مع 10 حقائب أو أكثر بحسب حجمها." },
          { q: "هل تنقل ستاريا عائلتي من مطار جدة إلى مكة؟", a: "نعم، وهي السيارة المعتادة للعائلات من خمسة إلى سبعة أفراد القادمة إلى مطار الملك عبدالعزيز الدولي بحقائب. أرسل رقم الرحلة واسم الفندق." },
          { q: "هل ستاريا أفضل من جمس يوكن من مكة إلى المدينة؟", a: "لستة أو سبعة أشخاص، أو لعائلة معها حقائب كثيرة، غالبًا نعم. أما العائلة الأصغر التي تريد سيارة دفع رباعي فقد تفضّل جمس يوكن." },
          { q: "هل لديكم ستاريا 9 أو 11 راكبًا؟", a: "ننشر فقط رقم السبعة ركاب المؤكد في حجوزاتنا. وإن احتجت مقاعد أكثر فاسأل، ويقترح عرض السعر سيارة ثانية أو فانًا أكبر." },
          { q: "هل نتوقف للصلاة والطعام في الطريق إلى المدينة؟", a: "نعم، أخبر السائق متى تريدون التوقف. وفي الطريق من المدينة إلى مكة يمكن أن تتوقف السيارة أيضًا عند ميقات ذي الحليفة." },
          { q: "هل يشاركنا ركاب آخرون في ستاريا؟", a: "لا. السيارة والسائق محجوزان لمجموعتك فقط." },
        ],
      },
    },
  },
];
