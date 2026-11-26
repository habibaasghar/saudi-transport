import { linkSections } from "../auto-links";
import { applyGuideGrowth } from "./gsc-growth";
import type { BlogPost } from "./types";
import { pillarPost } from "./pillar";
import { jeddahAirportMakkahPost } from "./jeddah-airport-makkah-options";
import { makkahMadinahPost } from "./makkah-madinah-options";
import { howToBookPost } from "./how-to-book";
import { jeddahMadinahPost } from "./jeddah-madinah-options";
import { madinahAlulaPost } from "./madinah-alula-road";
import { chauffeurVsTaxiPost } from "./chauffeur-vs-taxi";
import { applyGuideEnrichments } from "../enrich-batch4";
import { heavyGuides } from "./heavy-guides";
import { transferGuides } from "./transfer-guides";
import { images, inbox, vehicles, type PageImage } from "../images";

const I = "services/intercity-transfers";
const X = "services/cross-border-transfers";
const D = "2026-11-10";

/**
 * Guides are informational and deliberately avoid facts RideSaudi cannot verify: no prices, no fleet models,
 * no border times, no entry rules (readers are sent to official authorities). Each guide answers one real
 * question and links to the commercial page that serves it.
 */
export const blogPosts: BlogPost[] = [
  pillarPost,
  jeddahAirportMakkahPost,
  makkahMadinahPost,
  howToBookPost,
  jeddahMadinahPost,
  madinahAlulaPost,
  chauffeurVsTaxiPost,
  {
    slug: "cross-border-private-transfer-checklist",
    published: D,
    updated: D,
    links: [X, `${I}/riyadh-to-doha`, `${I}/riyadh-to-manama`, `${I}/dammam-to-bahrain`, `${I}/riyadh-to-dubai`, `${I}/riyadh-to-kuwait-city`],
    copy: {
      en: {
        nav: "Cross-border transfer checklist",
        title: "Saudi Cross-Border Private Transfer Checklist",
        description: "A practical checklist for private road transfers from Saudi Arabia to Bahrain, Qatar, the UAE or Kuwait: documents, vehicle, timing and what to tell your provider.",
        h1: "What to check before booking a cross-border private transfer from Saudi Arabia",
        answer: "Before you book a private road transfer from Saudi Arabia to Bahrain, Qatar, the UAE or Kuwait, confirm each passenger's entry requirements with the official authorities, ask whether the specific vehicle and driver can cross, leave flexible time for the border, and give your provider exact addresses and passenger details. A transport provider cannot grant you permission to enter a country.",
        summary: "Five checks that prevent most problems on a GCC road journey.",
        sections: [
          { h: "1. Entry requirements are yours to verify", p: ["Rules depend on nationality, residency status, purpose of travel and the date, and they change. Check them for every passenger, including children, on the official Saudi government and destination-country portals before you pay or travel. Residency permits, passports and any visas need to be valid for the whole trip, including the way back."] },
          { h: "2. Ask whether the vehicle and driver can cross", p: ["Not every vehicle or driver can be used on both sides of a border. Ask this before you accept a quotation and get the answer in writing. RideSaudi confirms it per journey in the quotation instead of assuming it."] },
          { h: "3. Plan for variable border time", p: ["Queues and processing change by day, hour and season, and crossings can be restricted at short notice. Do not schedule a tight flight or meeting straight after a crossing; leave generous margin. Reputable providers will not promise a fixed crossing time."] },
          { h: "4. Give exact details", p: ["Send the pickup address, destination, date and time, number of passengers, luggage, and the nationalities of travellers. For airport journeys add the flight number. The more exact the enquiry, the more reliable the quotation."] },
          { h: "5. Decide one way or return early", p: ["A return journey changes the plan: the same border must be crossed again and passenger requirements apply on the way back. Mention it in the first enquiry if you can."] },
        ],
        faqs: [
          { q: "Does a private transfer include my visa or border permission?", a: "No. Visas and entry permissions come from the authorities. A transfer only moves you by road." },
          { q: "What documents should I check before a Saudi to Bahrain road trip?", a: "Passport or ID validity, any required visa or permit, residency status and any rules for children, checked on the official portals for the date you travel." },
          { q: "How long will the border take?", a: "It varies, and nobody can promise a fixed time. Allow generous margin, especially before flights." },
          { q: "Can I ask for a quotation before I decide?", a: "Yes. Send your route and dates and the quotation will state what is and is not included." },
        ],
      },
      ar: {
        nav: "قائمة فحص التوصيل عبر الحدود",
        title: "ماذا تتحقق منه قبل حجز توصيل خاص عبر الحدود",
        description: "قائمة عملية للتوصيل البري الخاص من السعودية إلى البحرين أو قطر أو الإمارات أو الكويت: الوثائق والمركبة والتوقيت وما تخبر به مزوّد الخدمة.",
        h1: "ماذا تتحقق منه قبل حجز توصيل خاص عبر الحدود من السعودية",
        answer: "قبل حجز توصيل بري خاص من السعودية إلى البحرين أو قطر أو الإمارات أو الكويت، تحقق من شروط دخول كل راكب لدى الجهات الرسمية، واسأل هل تستطيع المركبة والسائق المحددان عبور الحدود، واترك وقتًا مرنًا للمنفذ، وأعطِ مزوّد الخدمة العناوين وبيانات الركاب بدقة. ولا يستطيع مزوّد النقل أن يمنحك إذن دخول بلد.",
        summary: "خمسة فحوصات تمنع معظم المشكلات في الرحلة البرية الخليجية.",
        sections: [
          { h: "1. شروط الدخول مسؤوليتك", p: ["تعتمد القواعد على الجنسية وحالة الإقامة وغرض السفر والتاريخ، وهي تتغير. تحقق منها لكل راكب ومنهم الأطفال عبر المنصات الرسمية للحكومة السعودية والدولة المقصودة قبل الدفع أو السفر. وينبغي أن تكون الإقامة والجواز وأي تأشيرة سارية طوال الرحلة، ومنها العودة."] },
          { h: "2. اسأل هل تستطيع المركبة والسائق العبور", p: ["ليست كل مركبة أو سائق مؤهلين للعمل على جانبي الحدود. اسأل ذلك قبل قبول عرض السعر واطلب الإجابة كتابةً. وتؤكد RideSaudi ذلك لكل رحلة في عرض السعر بدل افتراضه."] },
          { h: "3. خطط لزمن منفذ متغير", p: ["تتغير الطوابير وزمن الإجراءات باليوم والساعة والموسم، وقد تُقيَّد المنافذ بإشعار قصير. لا تضع رحلة طيران أو اجتماعًا ضيق الوقت بعد العبور مباشرة، واترك هامشًا واسعًا. والمزوّد الجاد لا يعد بزمن عبور ثابت."] },
          { h: "4. أعطِ تفاصيل دقيقة", p: ["أرسل عنوان الاستلام والوجهة والتاريخ والوقت وعدد الركاب والحقائب وجنسيات المسافرين. وللرحلات المتصلة بالمطار أضف رقم الرحلة. وكلما كان الطلب أدق كان عرض السعر أوثق."] },
          { h: "5. قرر مبكرًا: اتجاه واحد أم عودة", p: ["تغيّر العودة الخطة: فسيُعبر المنفذ نفسه مرة أخرى وتنطبق شروط الركاب في طريق العودة. اذكرها في الطلب الأول إن أمكن."] },
        ],
        faqs: [
          { q: "هل يشمل التوصيل الخاص تأشيرتي أو إذن العبور؟", a: "لا. التأشيرات وأذونات الدخول تصدر من الجهات الرسمية. والتوصيل ينقلك برًّا فقط." },
          { q: "ما الوثائق التي أتحقق منها قبل رحلة برية من السعودية إلى البحرين؟", a: "سريان الجواز أو الهوية وأي تأشيرة أو تصريح مطلوب وحالة الإقامة وأي قواعد تخص الأطفال، عبر المنصات الرسمية للتاريخ الذي ستسافر فيه." },
          { q: "كم سيستغرق المنفذ؟", a: "يتفاوت ولا يستطيع أحد أن يعد بزمن ثابت. اترك هامشًا واسعًا خصوصًا قبل رحلات الطيران." },
          { q: "هل يمكنني طلب عرض سعر قبل أن أقرر؟", a: "نعم. أرسل مسارك وتواريخك وسيذكر عرض السعر ما يشمله وما لا يشمله." },
        ],
      },
    },
  },
  {
    slug: "private-car-vs-flight-vs-rental-saudi-intercity",
    published: D,
    updated: "2026-11-18",
    links: [`${I}/riyadh-to-jeddah`, `${I}/riyadh-to-dammam`, "services/intercity-transfers", "services/chauffeur-services", `${I}/jeddah-to-madinah`],
    copy: {
      en: {
        nav: "Private car vs flight vs rental",
        title: "Private Car vs Flight vs Rental: Saudi Intercity",
        description: "Compare a private car with a driver, a domestic flight and a self-drive rental for trips between Saudi cities: who each suits, and what to weigh.",
        h1: "Private car with a driver, flight or rental car: which suits your Saudi intercity trip?",
        answer: "A private car with a driver suits groups, families, travellers with luggage and trips with several stops, because it goes door to door and you do not drive. A domestic flight suits a solo traveller on a long route with little luggage. A self-drive rental suits confident drivers who want full control. Compare total door-to-door time and the number of people.",
        summary: "How to choose between three common ways to travel between Saudi cities.",
        sections: [
          { h: "Door to door, not airport to airport", p: ["Compare the whole journey, not just time in the air. A flight adds travel to the airport, check-in, security, and onward travel from the destination airport. A car leaves from your address and arrives at your destination, which can narrow the gap on mid-length routes such as Riyadh to Dammam."] },
          { h: "When a private car with a driver makes sense", p: ["Groups and families share one vehicle, luggage is not restricted by airline rules, you can stop on the way, and you can work or rest instead of driving. It is also practical when the destination is not near an airport, or when you want one driver for several stops in a day; see hourly driver."] },
          { h: "When a flight or a rental may be better", p: ["A flight is faster on the longest routes for one traveller. A rental gives independence if you are comfortable with long highway driving and want to set your own route and schedule. Be honest about fatigue on long distances."] },
          { h: "Two routes compared: Riyadh to Jeddah and Riyadh to Dammam", p: ["Riyadh to Jeddah is the clearest case for flying. The road is about 955 km on Route 40, close to 9 hours 48 minutes of driving before stops (Google Maps, November 2026), while Google Maps lists the flight at about two hours, before airport time at each end. For one or two people with ordinary luggage, fly. The car makes sense for a family moving with many bags, a group that wants to stay together, or anyone who would rather not fly, and it is a full day on the road.", "Riyadh to Dammam is much closer: about 410 km on Route 40, close to 3 hours 55 minutes of driving before stops. A passenger train also links the two cities. Here the door-to-door gap between car, train and flight is small, so the choice comes down to group size, luggage and where exactly you start and finish."] },
          { h: "What to ask for in a private car quotation", p: ["Ask about vehicle category and seats, luggage space, waiting time, return trips and what happens if your plans change. Prices are not published here because they depend on route, date and vehicle; request a quotation."] },
        ],
        faqs: [
          { q: "Is a private car cheaper than flying between Saudi cities?", a: "It depends on the route, date and group size. Compare a quotation against all flight costs for every traveller, including airport transfers." },
          { q: "Can I stop on the way during a private intercity transfer?", a: "You can request stops in your enquiry; they are confirmed in the quotation." },
          { q: "Should I drive or fly from Riyadh to Jeddah?", a: "For one or two travellers, flying is usually better: the road is about 955 km, close to ten hours of driving. A car suits families with a lot of luggage or groups who want to travel together." },
          { q: "Is a private car suitable for a family with luggage?", a: "Usually it is a good fit because the vehicle is chosen for the group; confirm passenger and luggage numbers when you enquire." },
        ],
      },
      ar: {
        nav: "سيارة خاصة أم طيران أم تأجير",
        title: "سيارة مع سائق أم طيران أم استئجار بين المدن؟",
        description: "قارن بين سيارة خاصة مع سائق ورحلة طيران داخلية وسيارة مستأجرة للتنقل بين المدن السعودية: لمن يناسب كل خيار وما الذي تزنه.",
        h1: "سيارة خاصة مع سائق أم طيران أم سيارة مستأجرة: أيها يناسب رحلتك بين المدن السعودية؟",
        answer: "تناسب السيارة الخاصة مع السائق المجموعات والعائلات والمسافرين بحقائب والرحلات متعددة التوقفات لأنها من الباب إلى الباب ولا تقود بنفسك. ويناسب الطيران الداخلي مسافرًا منفردًا على مسار طويل وحقائب قليلة. وتناسب السيارة المستأجرة سائقًا واثقًا يريد التحكم الكامل. قارن الزمن الكلي من الباب إلى الباب وعدد الأشخاص.",
        summary: "كيف تختار بين ثلاث وسائل شائعة للتنقل بين المدن السعودية.",
        sections: [
          { h: "من الباب إلى الباب لا من مطار إلى مطار", p: ["قارن الرحلة كلها لا زمن الطيران وحده. فالطيران يضيف الذهاب إلى المطار والتسجيل والتفتيش ثم التنقل من مطار الوصول. أما السيارة فتنطلق من عنوانك وتصل إلى وجهتك، وقد يضيّق ذلك الفارق على المسارات المتوسطة مثل الرياض إلى الدمام."] },
          { h: "متى تكون السيارة الخاصة مع سائق خيارًا جيدًا", p: ["تتشارك المجموعات والعائلات مركبة واحدة، ولا تقيّدك قواعد الحقائب لدى شركات الطيران، ويمكنك التوقف في الطريق، وتعمل أو ترتاح بدل القيادة. وهي عملية أيضًا حين لا تكون الوجهة قرب مطار أو حين تريد سائقًا واحدًا لعدة محطات في يوم؛ راجع صفحة السائق بالساعة."] },
          { h: "متى يكون الطيران أو التأجير أفضل", p: ["الطيران أسرع على أطول المسارات لمسافر واحد. ويمنحك التأجير استقلالية إن كنت مرتاحًا للقيادة الطويلة على الطرق السريعة وتريد تحديد مسارك وجدولك. وكن صادقًا مع نفسك بشأن الإرهاق في المسافات الطويلة."] },
          { h: "مقارنة مسارين: الرياض إلى جدة والرياض إلى الدمام", p: ["الرياض إلى جدة أوضح مثال يكون فيه الطيران الخيار الأنسب. فالطريق نحو 955 كم عبر طريق 40، أي قرابة 9 ساعات و48 دقيقة قيادة قبل التوقفات (خرائط Google، نوفمبر 2026)، بينما تذكر خرائط Google أن الرحلة الجوية نحو ساعتين قبل وقت المطار في الطرفين. فلشخص أو شخصين بحقائب عادية، سافر بالطائرة. أما السيارة فتناسب عائلة تنتقل بحقائب كثيرة، أو مجموعة تريد البقاء معًا، أو من يفضّل عدم الطيران، وهي يوم كامل على الطريق.", "أما الرياض إلى الدمام فأقرب بكثير: نحو 410 كم عبر طريق 40، قرابة 3 ساعات و55 دقيقة قيادة قبل التوقفات، ويربط بين المدينتين أيضًا قطار ركاب. وهنا يكون الفارق من الباب إلى الباب بين السيارة والقطار والطيران صغيرًا، فيعتمد الاختيار على حجم المجموعة والحقائب ونقطتي الانطلاق والوصول بدقة."] },
          { h: "ماذا تسأل عنه في عرض سعر السيارة الخاصة", p: ["اسأل عن فئة المركبة والمقاعد ومساحة الحقائب والانتظار والرحلات ذات العودة وما يحدث إذا تغيرت خطتك. ولا ننشر الأسعار هنا لأنها تعتمد على المسار والتاريخ والمركبة؛ اطلب عرض سعر."] },
        ],
        faqs: [
          { q: "هل السيارة الخاصة أرخص من الطيران بين المدن السعودية؟", a: "يعتمد ذلك على المسار والتاريخ وحجم المجموعة. قارن عرض السعر بتكاليف الطيران لكل مسافر بما فيها التنقل من وإلى المطارات." },
          { q: "هل يمكنني التوقف في الطريق خلال توصيل خاص بين المدن؟", a: "يمكنك طلب التوقفات في الطلب؛ وتُؤكَّد في عرض السعر." },
          { q: "هل أسافر من الرياض إلى جدة بالسيارة أم بالطائرة؟", a: "لمسافر أو اثنين يكون الطيران غالبًا أفضل، فالطريق نحو 955 كم أي قرابة عشر ساعات قيادة. وتناسب السيارة العائلات ذات الحقائب الكثيرة أو المجموعات التي تريد السفر معًا." },
          { q: "هل السيارة الخاصة مناسبة لعائلة معها حقائب؟", a: "غالبًا هي مناسبة لأن المركبة تُختار للمجموعة؛ أكّد عدد الركاب والحقائب عند الطلب." },
        ],
      },
    },
  },
  {
    slug: "choosing-vehicle-size-family-group-travel-saudi",
    published: D,
    updated: "2026-11-18",
    links: ["fleet/gmc-yukon-with-driver", "fleet/hyundai-staria-with-driver", 
      "fleet",
      "services/group-transportation/family-transport",
      "services/umrah-transport/family-umrah-transport",
      "services/group-transportation/van-and-minibus",
      "services/group-transportation",
      "services/airport-transfers/family-airport-transfer",
      "luxury-transportation/luxury-suv",
    ],
    copy: {
      en: {
        nav: "Choosing a vehicle by passengers and luggage",
        title: "Sedan, GMC Yukon or Staria? Pick by Group Size",
        description: "How to choose between a sedan, a GMC Yukon and a Hyundai Staria for family, group or Umrah travel in Saudi Arabia, by passengers, luggage and route.",
        h1: "Sedan, GMC Yukon or Hyundai Staria: which vehicle suits your group?",
        answer:
          "Choose by people and bags, then by route. A sedan suits one to a few travellers with light luggage. A GMC Yukon suits families who want space on long intercity roads. A Hyundai Staria suits larger families and groups with a lot of luggage. For five passengers with suitcases a sedan is usually too tight. The usable capacity is confirmed for the actual vehicle in your quotation.",
        summary: "Match the vehicle to your passengers, your luggage and your route, including Umrah groups carrying Zamzam water.",
        sections: [
          {
            h: "Start with an honest count",
            p: [
              "Count adults, children and infants, then count every bag: large suitcases, cabin bags, pushchairs, wheelchairs and anything bulky. Travellers almost always underestimate the bags, and a vehicle that is full at the airport is uncomfortable on a four-hour drive.",
              "A Hyundai Staria takes up to 7 passengers with 10 or more bags, depending on bag size. For sedans and GMC Yukons, seat counts and luggage space vary with the model year and seat layout, so send your counts and the capacity of the actual vehicle is confirmed in the quotation.",
            ],
          },
          {
            h: "The three vehicle types, and who usually asks for each",
            p: ["RideSaudi quotes journeys in three main vehicle types, each with a driver:"],
            list: [
              "Sedan: one to a few travellers with light luggage, such as business travellers, couples and airport runs with cabin bags",
              "GMC Yukon: families and small groups who want more room and comfort on long routes such as Makkah to Madinah or Riyadh to Dammam",
              "Hyundai Staria: up to 7 passengers with 10 or more bags, for larger families and small groups who want to travel in one vehicle",
            ],
          },
          {
            h: "Umrah groups: plan for the bags on the way home",
            p: [
              "Umrah families often travel with more luggage on the return than on arrival: shopping from Makkah and Madinah, and Zamzam water. When you book the full sequence, from Jeddah airport to Makkah, Makkah to Madinah and back to the airport, size the vehicle for the heaviest leg, which is usually the last one.",
              "Mention elderly relatives and anyone using a wheelchair. Near the Haram and the Prophet's Mosque the car may stop a short walk from the hotel, so a vehicle that is easy to get in and out of, and room for a folded wheelchair, matter more than extra seats.",
            ],
          },
          {
            h: "Long routes need more margin than city trips",
            p: [
              "A tight fit is tolerable for a 30-minute city trip and tiring on a long one. Makkah to Madinah is about 436 km and Riyadh to Jeddah about 955 km by road. On journeys like these, choose the vehicle with spare room rather than the one that only just fits, especially with children or older passengers.",
            ],
          },
          {
            h: "When one vehicle is not enough",
            p: [
              "If your group is larger than one van can carry comfortably, choose 'Other or larger group' in the form and give the full numbers. A larger group may be quoted in more than one vehicle, so you can decide whether that works for you.",
            ],
          },
          {
            h: "Children and special needs",
            p: [
              "Child seats and mobility support are not assumed. Ask for them in the enquiry, say how many and for what ages, and check that the quotation states what can be provided.",
            ],
          },
        ],
        table: {
          h: "A quick starting point",
          head: ["Your party", "Usually ask for"],
          rows: [
            ["One or two travellers, light luggage", "Sedan"],
            ["Business traveller or couple with suitcases", "Sedan, or a GMC Yukon for more room on a long route"],
            ["Family of five with suitcases", "GMC Yukon or Hyundai Staria; a sedan is usually too tight"],
            ["Umrah family with elderly relatives and Zamzam water", "GMC Yukon or Hyundai Staria, sized for the return leg"],
            ["Up to 7 passengers with 10 or more bags", "Hyundai Staria"],
            ["More than 7 passengers", "More than one vehicle; choose 'Other or larger group'"],
          ],
        },
        faqs: [
          { q: "Can five adults with luggage fit in a standard sedan?", a: "It is usually tight. A GMC Yukon or a Hyundai Staria is the safer choice; the capacity is confirmed in your quotation." },
          { q: "Which vehicle is best for an Umrah family?", a: "Usually a GMC Yukon or a Hyundai Staria, chosen for the leg with the most luggage, which is often the return to the airport." },
          { q: "Can I request a specific model?", a: "You can state a preference. The vehicle category and availability for your date are confirmed in the quotation." },
          { q: "Can I request a child seat or room for a wheelchair?", a: "Yes, ask in the enquiry. Whether it can be provided is confirmed in the quotation." },
          { q: "What if our group does not fit in one vehicle?", a: "Choose 'Other or larger group' and give the numbers. The quotation may offer more than one vehicle." },
        ],
      },
      ar: {
        nav: "اختيار السيارة حسب الركاب والحقائب",
        title: "سيدان أم جمس أم ستاريا؟ اختر حسب الركاب والحقائب",
        description: "كيف تختار بين سيدان وجمس يوكن وهيونداي ستاريا لسفر العائلات والمجموعات والعمرة في السعودية، بحسب عدد الركاب والحقائب والمسار.",
        h1: "سيدان أم جمس يوكن أم هيونداي ستاريا: أي سيارة تناسب مجموعتك؟",
        answer:
          "اختر بحسب عدد الأشخاص والحقائب ثم بحسب المسار. السيدان لمسافر أو بضعة مسافرين بحقائب خفيفة، والجمس يوكن للعائلات التي تريد مساحة على الطرق الطويلة بين المدن، والهيونداي ستاريا للعائلات الكبيرة والمجموعات ذات الحقائب الكثيرة. ولخمسة ركاب مع حقائب تكون السيدان عادةً ضيقة. وتُؤكَّد السعة الفعلية للسيارة المخصصة لك في عرض السعر.",
        summary: "طابق السيارة مع عدد الركاب والحقائب والمسار، ومنها مجموعات العمرة التي تحمل ماء زمزم.",
        sections: [
          {
            h: "ابدأ بعدّ دقيق",
            p: [
              "احسب البالغين والأطفال والرضّع، ثم احسب كل الحقائب: الكبيرة وحقائب اليد وعربات الأطفال والكراسي المتحركة وأي شيء كبير الحجم. فالمسافرون يقللون غالبًا من عدد الحقائب، والسيارة الممتلئة عند المطار تصبح مرهقة في رحلة من أربع ساعات.",
              "تتسع هيونداي ستاريا لما يصل إلى 7 ركاب مع 10 حقائب أو أكثر بحسب حجمها. أما في السيدان والجمس يوكن فيختلف عدد المقاعد ومساحة الحقائب بحسب سنة الصنع وتوزيع المقاعد، فأرسل أعدادك وتُؤكَّد سعة السيارة الفعلية في عرض السعر.",
            ],
          },
          {
            h: "أنواع السيارات الثلاثة، ومن يطلب كلًّا منها عادةً",
            p: ["تُسعِّر RideSaudi الرحلات بثلاثة أنواع رئيسية من السيارات، وكلها مع سائق:"],
            list: [
              "سيدان: لمسافر أو بضعة مسافرين بحقائب خفيفة، مثل رجال الأعمال والأزواج ومشاوير المطار بحقائب اليد",
              "جمس يوكن: للعائلات والمجموعات الصغيرة التي تريد مساحة وراحة أكبر على المسارات الطويلة مثل مكة إلى المدينة أو الرياض إلى الدمام",
              "هيونداي ستاريا: حتى 7 ركاب مع 10 حقائب أو أكثر، للعائلات الكبيرة والمجموعات الصغيرة التي تريد السفر في سيارة واحدة",
            ],
          },
          {
            h: "مجموعات العمرة: خطط لحقائب طريق العودة",
            p: [
              "كثيرًا ما تعود عائلات العمرة بحقائب أكثر مما وصلت به: مشتريات من مكة والمدينة وماء زمزم. فإذا حجزت الرحلة كاملة، من مطار جدة إلى مكة ثم من مكة إلى المدينة ثم العودة إلى المطار، فاختر السيارة على أثقل مرحلة، وهي غالبًا الأخيرة.",
              "واذكر كبار السن ومن يستخدم كرسيًا متحركًا. فقرب الحرم والمسجد النبوي قد تتوقف السيارة على بعد مشي قصير من الفندق، لذلك تكون سهولة الصعود والنزول ومكان الكرسي المطوي أهم من المقاعد الإضافية.",
            ],
          },
          {
            h: "المسارات الطويلة تحتاج هامشًا أكبر من مشاوير المدينة",
            p: [
              "الضيق محتمل في مشوار داخل المدينة مدته نصف ساعة، ومتعب في رحلة طويلة. فمكة إلى المدينة نحو 436 كم والرياض إلى جدة نحو 955 كم بالطريق. وفي رحلات كهذه اختر السيارة التي فيها مساحة زائدة لا التي تكفي بالكاد، خصوصًا مع الأطفال أو كبار السن.",
            ],
          },
          {
            h: "حين لا تكفي سيارة واحدة",
            p: [
              "إن كانت مجموعتك أكبر مما تتسع له سيارة فان واحدة براحة، فاختر «أخرى أو مجموعة أكبر» في النموذج واذكر الأعداد كاملة. فقد تُسعَّر المجموعة الكبيرة بأكثر من سيارة، فتقرر إن كان ذلك يناسبك.",
            ],
          },
          {
            h: "الأطفال والاحتياجات الخاصة",
            p: [
              "لا تُفترض مقاعد الأطفال ودعم الحركة. اطلبها في الطلب، واذكر عددها وأعمار الأطفال، وتأكد أن عرض السعر يذكر ما يمكن توفيره.",
            ],
          },
        ],
        table: {
          h: "نقطة بداية سريعة",
          head: ["مجموعتك", "ما تطلبه عادةً"],
          rows: [
            ["مسافر أو اثنان بحقائب خفيفة", "سيدان"],
            ["رجل أعمال أو زوجان مع حقائب", "سيدان، أو جمس يوكن لمساحة أكبر في مسار طويل"],
            ["عائلة من خمسة أفراد مع حقائب", "جمس يوكن أو هيونداي ستاريا؛ السيدان ضيقة عادةً"],
            ["عائلة معتمرة مع كبار سن وماء زمزم", "جمس يوكن أو هيونداي ستاريا، بحسب حقائب طريق العودة"],
            ["حتى 7 ركاب مع 10 حقائب أو أكثر", "هيونداي ستاريا"],
            ["أكثر من 7 ركاب", "أكثر من سيارة؛ اختر «أخرى أو مجموعة أكبر»"],
          ],
        },
        faqs: [
          { q: "هل يتسع خمسة بالغين مع حقائب لسيارة سيدان عادية؟", a: "غالبًا تكون ضيقة. والأسلم جمس يوكن أو هيونداي ستاريا، وتُؤكَّد السعة في عرض السعر." },
          { q: "ما أنسب سيارة لعائلة معتمرة؟", a: "غالبًا جمس يوكن أو هيونداي ستاريا، تُختار على المرحلة التي فيها أكثر الحقائب، وهي غالبًا العودة إلى المطار." },
          { q: "هل يمكنني طلب طراز محدد؟", a: "يمكنك ذكر تفضيلك، وتُؤكَّد فئة السيارة وإتاحتها لتاريخك في عرض السعر." },
          { q: "هل يمكنني طلب مقعد أطفال أو مكان لكرسي متحرك؟", a: "نعم، اطلب ذلك في الطلب، ويُؤكَّد ما يمكن توفيره في عرض السعر." },
          { q: "ماذا لو لم تتسع مجموعتنا لسيارة واحدة؟", a: "اختر «أخرى أو مجموعة أكبر» واذكر الأعداد، وقد يقترح عرض السعر أكثر من سيارة." },
        ],
      },
    },
  },
  {
    slug: "airport-pickup-tips-saudi-arrivals",
    published: D,
    updated: D,
    links: ["services/airport-transfers", "services/airport-transfers/riyadh-airport", "services/airport-transfers/jeddah-airport", "services/airport-transfers/dammam-airport", "services/airport-transfers/private-airport-pickup"],
    copy: {
      en: {
        nav: "Airport pickup tips",
        title: "Saudi Airport Pickup Tips: What to Arrange",
        description: "A short checklist for travellers arriving at Riyadh, Jeddah or Dammam airports who want a pre-booked private car: what to send, what to confirm and what not to assume.",
        h1: "Arranging an airport pickup in Saudi Arabia: what to sort out before you land",
        answer: "To arrange a smooth private airport pickup in Saudi Arabia, send your flight number, arrival date, passenger and luggage numbers and exact destination in advance, and ask the provider to confirm vehicle, meeting point and how a delayed flight is handled. Do not assume meet-and-greet or flight tracking unless they are confirmed in writing.",
        summary: "What to send and what to confirm before a private airport pickup.",
        sections: [
          { h: "Send the flight, not just the date", p: ["The flight number and scheduled arrival time let a provider plan the pickup around your actual landing. Mention the terminal if you know it, and tell your provider if you are connecting from another flight."] },
          { h: "Confirm the meeting point", p: ["Ask where the driver will wait and how you will find them: arrivals hall, with a name sign, or by phone. Meeting arrangements differ by airport and are confirmed per booking, so check the airport page for the arrival you are using, such as Riyadh, Jeddah or Dammam."] },
          { h: "Ask what happens if you are delayed", p: ["Flights can be late, and baggage and immigration queues vary. Ask how waiting time is handled and whether it is included. Do not assume flight monitoring or free waiting; get the answer in the quotation."] },
          { h: "Tell them the full journey", p: ["Give the destination address, the number of passengers and every bag. If you are continuing to another city, mention it, since airport-to-hotel and airport-to-city journeys are planned differently."] },
        ],
        faqs: [
          { q: "What should I send for a private airport pickup?", a: "Flight number, arrival date and time, passengers, luggage and the exact destination." },
          { q: "Does the driver track my flight?", a: "Do not assume it. Flight monitoring is confirmed in the quotation if it is offered." },
          { q: "What if my flight is delayed?", a: "Ask how waiting time is handled before you confirm, and tell your provider as soon as you know of a delay." },
        ],
      },
      ar: {
        nav: "نصائح الاستقبال من المطار",
        title: "الاستقبال من المطار بالسعودية: نصائح قبل الوصول",
        description: "قائمة قصيرة للقادمين إلى مطارات الرياض أو جدة أو الدمام ويريدون سيارة خاصة بحجز مسبق: ما تُرسله وما تؤكده وما لا تفترضه.",
        h1: "ترتيب الاستقبال من المطار في السعودية: ما الذي تنجزه قبل الهبوط",
        answer: "لاستقبال خاص سلس من المطار في السعودية، أرسل مسبقًا رقم رحلتك وتاريخ الوصول وعدد الركاب والحقائب ووجهتك بدقة، واطلب من المزوّد تأكيد المركبة ونقطة اللقاء وكيفية التعامل مع تأخر الرحلة. ولا تفترض الاستقبال بالاسم أو تتبع الرحلة ما لم يؤكد ذلك كتابةً.",
        summary: "ما تُرسله وما تؤكده قبل الاستقبال الخاص من المطار.",
        sections: [
          { h: "أرسل الرحلة لا التاريخ فقط", p: ["يتيح رقم الرحلة وموعد الوصول المجدول للمزوّد أن يخطط الاستقبال بحسب هبوطك الفعلي. اذكر الصالة إن عرفتها، وأخبر المزوّد إن كنت قادمًا على رحلة ربط."] },
          { h: "أكّد نقطة اللقاء", p: ["اسأل أين سينتظر السائق وكيف ستجده: في صالة الوصول أو بلوحة اسم أو بالاتصال. وتختلف ترتيبات اللقاء بين المطارات وتُؤكَّد لكل حجز، فراجع صفحة المطار الذي ستصل إليه مثل الرياض أو جدة أو الدمام."] },
          { h: "اسأل ماذا يحدث إذا تأخرت", p: ["قد تتأخر الرحلات وتختلف طوابير الحقائب والجوازات. اسأل كيف يُحتسب وقت الانتظار وهل هو مشمول. ولا تفترض متابعة الرحلة أو الانتظار المجاني؛ احصل على الإجابة في عرض السعر."] },
          { h: "أخبرهم بالرحلة كاملة", p: ["أعطِ عنوان الوجهة وعدد الركاب وكل الحقائب. وإن كنت ستتابع إلى مدينة أخرى فاذكر ذلك، لأن التوصيل من المطار إلى فندق يُخطَّط بخلاف التوصيل من المطار إلى مدينة أخرى."] },
        ],
        faqs: [
          { q: "ماذا أرسل لاستقبال خاص من المطار؟", a: "رقم الرحلة وتاريخ ووقت الوصول والركاب والحقائب والوجهة بدقة." },
          { q: "هل يتتبع السائق رحلتي؟", a: "لا تفترض ذلك. تُؤكَّد متابعة الرحلة في عرض السعر إن كانت متاحة." },
          { q: "ماذا لو تأخرت رحلتي؟", a: "اسأل كيف يُحتسب وقت الانتظار قبل التأكيد، وأخبر المزوّد فور علمك بالتأخير." },
        ],
      },
    },
  },
];

applyGuideEnrichments(blogPosts);

// The original twelve guides are all private-transfer planning guides.
for (const p of blogPosts) p.cluster ??= "private-transfers";
blogPosts.push(...heavyGuides, ...transferGuides);

/**
 * Visual audit 2026-11-23: guides that had no hero get an existing photo of the exact place or vehicle class they discuss.
 * Guides with no matching photo (excavator, intercity car transport, flatbed vs hydraulic towing, roadside assistance)
 * stay text-only until a real photo exists; see docs/RIDESAUDI-NEW-IMAGE-REQUIREMENTS.md.
 */
const guideHeroes: Record<string, PageImage> = {
  "private-transport-saudi-arabia-guide": vehicles.suburban,
  "jeddah-airport-to-makkah-train-bus-taxi-private-car": images.makkah,
  "makkah-to-madinah-train-bus-or-private-car": images.madinah,
  "how-to-book-private-car-with-driver-saudi-arabia": vehicles.camry,
  "jeddah-to-madinah-train-flight-bus-or-car": images.jeddah,
  "madinah-to-alula-by-road-guide": images.alulaRock,
  "private-car-with-driver-vs-taxi-saudi-arabia": vehicles.sonata,
  "cross-border-private-transfer-checklist": images.causeway,
  "private-car-vs-flight-vs-rental-saudi-intercity": images.taif,
  "choosing-vehicle-size-family-group-travel-saudi": vehicles.yukon,
  "airport-pickup-tips-saudi-arrivals": inbox.arrivalsKerb,
  "flatbed-vs-hydraulic-towing-saudi-arabia": inbox.sathaSedan,
  "intercity-car-transport-saudi-arabia": inbox.sathaPickup,
  "choose-heavy-equipment-transport-company-saudi-arabia": images.heavyLowbed,
};
for (const p of blogPosts) if (!p.hero && guideHeroes[p.slug]) p.hero = guideHeroes[p.slug];

applyGuideGrowth(blogPosts);

/** Contextual links inside guide text, only to the pages the guide already cites (src/content/auto-links.ts). */
for (const p of blogPosts) {
  p.copy = {
    en: { ...p.copy.en, sections: linkSections(p.copy.en.sections, p.links, "", "en") },
    ar: { ...p.copy.ar, sections: linkSections(p.copy.ar.sections, p.links, "", "ar") },
  };
}

export const getPost = (slug: string) => blogPosts.find((p) => p.slug === slug);

/** Up to six related guides: hand-picked first, then newest guides in the same cluster. Never the whole list. */
export function relatedPosts(post: BlogPost, max = 6): BlogPost[] {
  const picked = (post.related ?? []).map(getPost).filter((p): p is BlogPost => Boolean(p));
  const same = blogPosts.filter((p) => p.cluster === post.cluster && p.slug !== post.slug && !picked.includes(p));
  same.sort((a, b) => (a.published < b.published ? 1 : -1));
  return [...picked, ...same].slice(0, max);
}
