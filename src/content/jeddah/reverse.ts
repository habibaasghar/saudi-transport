import type { ServicePage } from "../types";

const U = "2026-11-15";
const I = "services/intercity-transfers";
const C = "services/city-transport";

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
    path: `${I}/abha-to-riyadh`,
    parent: I,
    variant: "default",
    service: "intercity",
    related: [`${I}/riyadh-to-abha`, `${I}/abha-to-jeddah`, `${I}/jeddah-to-abha`, `${C}/abha`, `${C}/riyadh`, `${I}/private-intercity-chauffeur`],
    updated: U,
    copy: {
      en: {
        nav: "Abha to Riyadh",
        title: "Abha to Riyadh Private Car: Suburban or Yukon",
        description: "Request a private car with a driver from Abha or Khamis Mushait to Riyadh, King Khalid Airport or a business address. Executive SUV, VIP or family vehicle, quoted per trip.",
        h1: "Abha to Riyadh by private car, from the Asir highlands to the capital",
        eyebrow: "Intercity · Abha to Riyadh",
        answer: "A private Abha to Riyadh transfer is a pre-booked car with a driver from Abha or the Khamis Mushait area to Riyadh, a Riyadh hotel, office or King Khalid International Airport. Public sources put the main road at roughly 880 to 950 km and about nine to ten hours before stops, and the route chosen changes the figure. RideSaudi quotes each journey individually.",
        summary: "A long private road journey from Abha to Riyadh, planned around a night stop or an early start.",
        sections: [
          { h: "Why the route and the direction both matter", p: ["Abha to Riyadh is the journey of families going home to the capital after a highland stay, of business travellers and of people relocating. Public sources give different figures because there is more than one road: a Saudi Roads Authority figure reported in the press is about 882 km via Al-Rayn and Bisha (around nine hours), another main route via Wadi Al-Dawasir and Tathlith is reported at about 927 km, and a longer alternative via Taif and Al-Baha is much longer. We confirm the route in the quotation rather than promising one time. The outbound page, Riyadh to Abha, is written for the traveller going up into the mountains."] },
          { h: "One long day or a night on the way", p: ["Nine to ten hours of driving is too much for some passengers in one stretch, especially with children or elderly parents. Ask for a split journey with an overnight stop, or an early morning start to reach Riyadh before dark. The plan and the cost of any overnight are written into the quotation, and we do not promise a driver swap or a fixed arrival time we have not confirmed."] },
          { h: "Pickups in Abha and Khamis Mushait, and the Riyadh end", p: ["Give the exact hotel, resort or villa, since many stays are outside the city, and tell us whether you are coming from Abha or Khamis Mushait. At the Riyadh end, send a hotel, office or home address, or the terminal at King Khalid Airport if you are connecting to a flight; see Riyadh city transport for what the Riyadh end can include."] },
          { h: "Executive, VIP or family vehicle", p: ["A sedan such as a Toyota Camry, Hyundai Sonata or Ford Taurus suits one or two travellers. Families and colleagues usually request a GMC Yukon, Chevrolet Suburban, Chevrolet Tahoe or Toyota Prado for the room over nine hours, and a Hyundai Staria suits larger groups with many bags. Senior guests can request a luxury SUV or VIP chauffeur vehicle. The vehicle is confirmed in the quotation, subject to partner availability."] },
        ],
        checklist: { h: "Include this in your Abha to Riyadh enquiry", items: ["Date, departure time and one way or return", "Abha or Khamis Mushait pickup and a contact number", "Riyadh hotel, office, home or airport terminal", "One day or a split journey with a night stop", "Passengers, children, elderly travellers and large bags", "Vehicle: sedan, GMC Yukon or Suburban, Tahoe, Prado, Staria or luxury SUV"] },
        faqs: [
          { q: "Can I book a private car from Abha to Riyadh?", a: "Yes, you can request one. Send your date, pickup point and Riyadh destination, and we confirm availability and send a quotation before anything is arranged." },
          { q: "How far is Abha from Riyadh by road?", a: "Public sources vary by route: roughly 880 to 950 km on the main roads and about nine to ten hours before stops, and more on longer alternatives." },
          { q: "Can the journey be split with a night on the way?", a: "Yes. You can ask for it, and the overnight plan is written into the quotation." },
          { q: "Can I request a Chevrolet Suburban or Chevrolet Tahoe for the family?", a: "You can request a Chevrolet Suburban, Chevrolet Tahoe, GMC Yukon or Toyota Prado. The vehicle available for your date is confirmed in the quotation." },
          { q: "Can you take me from Abha to King Khalid Airport in Riyadh?", a: "You can request it. Send your flight time so we plan the departure with a safe margin." },
        ],
      },
      ar: {
        nav: "أبها إلى الرياض",
        title: "توصيل من أبها إلى الرياض: سوبربان أو يوكن",
        description: "اطلب سيارة بسائق من أبها أو خميس مشيط إلى الرياض أو مطار الملك خالد أو عنوان عمل. دفع رباعي تنفيذي أو مركبة كبار الشخصيات أو عائلية بسعر لكل رحلة.",
        h1: "من أبها إلى الرياض بسيارة خاصة، من مرتفعات عسير إلى العاصمة",
        eyebrow: "بين المدن · أبها إلى الرياض",
        answer: "التوصيل الخاص من أبها إلى الرياض هو سيارة بسائق وبحجز مسبق من أبها أو منطقة خميس مشيط إلى الرياض أو فندق أو مكتب فيها أو مطار الملك خالد الدولي. وتقدّر مصادر عامة الطريق الرئيسي بنحو 880 إلى 950 كم وقرابة تسع إلى عشر ساعات قبل التوقفات، ويتغير الرقم بحسب المسار المختار. تُسعِّر RideSaudi كل رحلة على حدة.",
        summary: "رحلة برية خاصة طويلة من أبها إلى الرياض، تُخطَّط حول مبيت أو انطلاق مبكر.",
        sections: [
          { h: "لماذا يهم المسار والاتجاه معًا", p: ["أبها إلى الرياض هي رحلة العائلات العائدة إلى العاصمة بعد إقامة في المرتفعات، ورجال الأعمال، ومن ينتقلون للسكن. وتختلف الأرقام في المصادر العامة لأن للطريق أكثر من مسار: فهناك رقم نُقل في الصحافة عن الهيئة العامة للطرق يبلغ نحو 882 كم عبر الريان وبيشة (قرابة تسع ساعات)، ومسار رئيسي آخر عبر وادي الدواسر وثلوث يُذكر بنحو 927 كم، وبديل أطول عبر الطائف والباحة. ونؤكد المسار في عرض السعر بدل الوعد بوقت واحد. وصفحة الرياض إلى أبها مكتوبة للمسافر الصاعد إلى الجبال."] },
          { h: "يوم واحد طويل أم مبيت في الطريق", p: ["تسع إلى عشر ساعات قيادة كثيرة على بعض الركاب في مرة واحدة، خصوصًا مع الأطفال أو الوالدين المسنين. اطلب رحلة مقسمة بمبيت، أو انطلاقًا صباحيًا مبكرًا للوصول إلى الرياض قبل الظلام. وتُكتب الخطة وتكلفة أي مبيت في عرض السعر، ولا نَعِد بتبديل سائق أو بوقت وصول ثابت لم نؤكده."] },
          { h: "الاستلام من أبها وخميس مشيط ونهاية الرحلة في الرياض", p: ["أرسل اسم الفندق أو المنتجع أو الفيلا بدقة، فكثير من الإقامات خارج المدينة، وأخبرنا إن كنت قادمًا من أبها أم من خميس مشيط. وفي الرياض أرسل عنوان فندق أو مكتب أو منزل، أو صالة مطار الملك خالد إن كنت ستلحق برحلة؛ وراجع صفحة النقل داخل الرياض لما يمكن أن تتضمنه نهاية الرحلة في العاصمة."] },
          { h: "مركبة تنفيذية أو لكبار الشخصيات أو عائلية", p: ["تناسب السيدان مثل تويوتا كامري أو هيونداي سوناتا أو فورد توروس مسافرًا أو اثنين. وتطلب العائلات والزملاء غالبًا جمس يوكن أو شيفروليه سوبربان أو شيفروليه تاهو أو تويوتا برادو لمساحتها على تسع ساعات، وتناسب هيونداي ستاريا المجموعات الأكبر ذات الحقائب الكثيرة. ويمكن لضيف رفيع طلب سيارة دفع رباعي فاخرة أو مركبة كبار الشخصيات بسائق. وتُؤكَّد المركبة في عرض السعر بحسب توفر الشركاء."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب أبها إلى الرياض", items: ["التاريخ ووقت الانطلاق وهل الرحلة ذهاب فقط أم ذهاب وعودة", "الاستلام من أبها أو خميس مشيط ورقم للتواصل", "فندق أو مكتب أو منزل في الرياض أو صالة المطار", "يوم واحد أم رحلة مقسمة بمبيت", "الركاب والأطفال وكبار السن والحقائب الكبيرة", "المركبة: سيدان أو جمس يوكن أو سوبربان أو تاهو أو برادو أو ستاريا أو دفع رباعي فاخر"] },
        faqs: [
          { q: "هل يمكن حجز سيارة خاصة من أبها إلى الرياض؟", a: "نعم، يمكنك إرسال طلب. أرسل التاريخ ونقطة الاستلام ووجهتك في الرياض ونؤكد الإتاحة ونرسل عرض السعر قبل ترتيب أي شيء." },
          { q: "كم تبعد أبها عن الرياض بالسيارة؟", a: "تختلف المصادر العامة بحسب المسار: نحو 880 إلى 950 كم على الطرق الرئيسية وقرابة تسع إلى عشر ساعات قبل التوقفات، وأكثر على البدائل الأطول." },
          { q: "هل يمكن تقسيم الرحلة بمبيت في الطريق؟", a: "نعم. يمكنك طلب ذلك، وتُكتب خطة المبيت في عرض السعر." },
          { q: "هل يمكن طلب شيفروليه سوبربان أو شيفروليه تاهو للعائلة؟", a: "يمكنك طلب شيفروليه سوبربان أو شيفروليه تاهو أو جمس يوكن أو تويوتا برادو. وتُؤكَّد المركبة المتاحة لتاريخك في عرض السعر." },
          { q: "هل يمكن التوصيل من أبها إلى مطار الملك خالد في الرياض؟", a: "يمكنك طلب ذلك. أرسل موعد رحلتك لنخطط الانطلاق بهامش أمان." },
        ],
      },
    },
  },
];
