import type { BlogPost } from "./types";

const I = "services/intercity-transfers";
const X = "services/cross-border-transfers";
const D = "2026-11-10";

/**
 * Guides are informational and deliberately avoid facts RideSaudi cannot verify: no prices, no fleet models,
 * no border times, no entry rules (readers are sent to official authorities). Each guide answers one real
 * question and links to the commercial page that serves it.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "cross-border-private-transfer-checklist",
    published: D,
    updated: D,
    links: [X, `${I}/riyadh-to-doha`, `${I}/riyadh-to-manama`, `${I}/dammam-to-bahrain`, `${I}/riyadh-to-dubai`, `${I}/riyadh-to-kuwait-city`],
    copy: {
      en: {
        nav: "Cross-border transfer checklist",
        title: "What to Check Before Booking a Cross-Border Private Transfer",
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
    updated: D,
    links: [`${I}/riyadh-to-jeddah`, `${I}/riyadh-to-dammam`, "services/intercity-transfers", "services/chauffeur-services", `${I}/jeddah-to-madinah`],
    copy: {
      en: {
        nav: "Private car vs flight vs rental",
        title: "Private Car with Driver vs Flight vs Rental Car for Saudi Intercity Trips",
        description: "Compare a private car with a driver, a domestic flight and a self-drive rental for trips between Saudi cities: who each suits, and what to weigh.",
        h1: "Private car with a driver, flight or rental car: which suits your Saudi intercity trip?",
        answer: "A private car with a driver suits groups, families, travellers with luggage and trips with several stops, because it goes door to door and you do not drive. A domestic flight suits a solo traveller on a long route with little luggage. A self-drive rental suits confident drivers who want full control. Compare total door-to-door time and the number of people.",
        summary: "How to choose between three common ways to travel between Saudi cities.",
        sections: [
          { h: "Door to door, not airport to airport", p: ["Compare the whole journey, not just time in the air. A flight adds travel to the airport, check-in, security, and onward travel from the destination airport. A car leaves from your address and arrives at your destination, which can narrow the gap on mid-length routes such as Riyadh to Dammam."] },
          { h: "When a private car with a driver makes sense", p: ["Groups and families share one vehicle, luggage is not restricted by airline rules, you can stop on the way, and you can work or rest instead of driving. It is also practical when the destination is not near an airport, or when you want one driver for several stops in a day; see hourly driver."] },
          { h: "When a flight or a rental may be better", p: ["A flight is faster on the longest routes for one traveller. A rental gives independence if you are comfortable with long highway driving and want to set your own route and schedule. Be honest about fatigue on long distances."] },
          { h: "What to ask for in a private car quotation", p: ["Ask about vehicle category and seats, luggage space, waiting time, return trips and what happens if your plans change. Prices are not published here because they depend on route, date and vehicle; request a quotation."] },
        ],
        faqs: [
          { q: "Is a private car cheaper than flying between Saudi cities?", a: "It depends on the route, date and group size. Compare a quotation against all flight costs for every traveller, including airport transfers." },
          { q: "Can I stop on the way during a private intercity transfer?", a: "You can request stops in your enquiry; they are confirmed in the quotation." },
          { q: "Is a private car suitable for a family with luggage?", a: "Usually it is a good fit because the vehicle is chosen for the group; confirm passenger and luggage numbers when you enquire." },
        ],
      },
      ar: {
        nav: "سيارة خاصة أم طيران أم تأجير",
        title: "سيارة خاصة مع سائق أم طيران أم سيارة مستأجرة للتنقل بين المدن السعودية",
        description: "قارن بين سيارة خاصة مع سائق ورحلة طيران داخلية وسيارة مستأجرة للتنقل بين المدن السعودية: لمن يناسب كل خيار وما الذي تزنه.",
        h1: "سيارة خاصة مع سائق أم طيران أم سيارة مستأجرة: أيها يناسب رحلتك بين المدن السعودية؟",
        answer: "تناسب السيارة الخاصة مع السائق المجموعات والعائلات والمسافرين بحقائب والرحلات متعددة التوقفات لأنها من الباب إلى الباب ولا تقود بنفسك. ويناسب الطيران الداخلي مسافرًا منفردًا على مسار طويل وحقائب قليلة. وتناسب السيارة المستأجرة سائقًا واثقًا يريد التحكم الكامل. قارن الزمن الكلي من الباب إلى الباب وعدد الأشخاص.",
        summary: "كيف تختار بين ثلاث وسائل شائعة للتنقل بين المدن السعودية.",
        sections: [
          { h: "من الباب إلى الباب لا من مطار إلى مطار", p: ["قارن الرحلة كلها لا زمن الطيران وحده. فالطيران يضيف الذهاب إلى المطار والتسجيل والتفتيش ثم التنقل من مطار الوصول. أما السيارة فتنطلق من عنوانك وتصل إلى وجهتك، وقد يضيّق ذلك الفارق على المسارات المتوسطة مثل الرياض إلى الدمام."] },
          { h: "متى تكون السيارة الخاصة مع سائق خيارًا جيدًا", p: ["تتشارك المجموعات والعائلات مركبة واحدة، ولا تقيّدك قواعد الحقائب لدى شركات الطيران، ويمكنك التوقف في الطريق، وتعمل أو ترتاح بدل القيادة. وهي عملية أيضًا حين لا تكون الوجهة قرب مطار أو حين تريد سائقًا واحدًا لعدة محطات في يوم؛ راجع صفحة السائق بالساعة."] },
          { h: "متى يكون الطيران أو التأجير أفضل", p: ["الطيران أسرع على أطول المسارات لمسافر واحد. ويمنحك التأجير استقلالية إن كنت مرتاحًا للقيادة الطويلة على الطرق السريعة وتريد تحديد مسارك وجدولك. وكن صادقًا مع نفسك بشأن الإرهاق في المسافات الطويلة."] },
          { h: "ماذا تسأل عنه في عرض سعر السيارة الخاصة", p: ["اسأل عن فئة المركبة والمقاعد ومساحة الحقائب والانتظار والرحلات ذات العودة وما يحدث إذا تغيرت خطتك. ولا ننشر الأسعار هنا لأنها تعتمد على المسار والتاريخ والمركبة؛ اطلب عرض سعر."] },
        ],
        faqs: [
          { q: "هل السيارة الخاصة أرخص من الطيران بين المدن السعودية؟", a: "يعتمد ذلك على المسار والتاريخ وحجم المجموعة. قارن عرض السعر بتكاليف الطيران لكل مسافر بما فيها التنقل من وإلى المطارات." },
          { q: "هل يمكنني التوقف في الطريق خلال توصيل خاص بين المدن؟", a: "يمكنك طلب التوقفات في الطلب؛ وتُؤكَّد في عرض السعر." },
          { q: "هل السيارة الخاصة مناسبة لعائلة معها حقائب؟", a: "غالبًا هي مناسبة لأن المركبة تُختار للمجموعة؛ أكّد عدد الركاب والحقائب عند الطلب." },
        ],
      },
    },
  },
  {
    slug: "choosing-vehicle-size-family-group-travel-saudi",
    published: D,
    updated: D,
    links: ["fleet", "services/group-transportation/family-transport", "services/group-transportation/van-and-minibus", "luxury-transportation/luxury-suv", "services/airport-transfers/family-airport-transfer"],
    copy: {
      en: {
        nav: "Choosing a vehicle for family or group travel",
        title: "Which Vehicle for Five Passengers with Luggage? A Practical Guide",
        description: "How to choose between a sedan, an SUV and a van for family or group travel in Saudi Arabia: seats, luggage, comfort and what to confirm with your provider.",
        h1: "Which vehicle suits five passengers with luggage?",
        answer: "For five passengers with luggage, a standard sedan is usually too tight; a full-size SUV or a people carrier is the safer starting point, and a van suits larger groups or heavy luggage. Seat counts and luggage space vary by model, so tell your provider the number of people and bags and ask them to confirm the exact vehicle.",
        summary: "A simple way to match vehicle type to passengers and luggage.",
        sections: [
          { h: "Count people and bags, then add margin", p: ["Start with the number of adults, children and bags, including large suitcases, strollers and golf or sports gear. Then add margin: long drives are far more comfortable with spare space, and airport arrivals often involve more luggage than travellers expect."] },
          { h: "Sedan, SUV or van: the general picture", p: ["A sedan suits one to three travellers with modest luggage. A full-size SUV suits families and small groups who want comfort on long roads. A van or people carrier suits larger groups and heavy luggage. These are general categories, not promises about any specific vehicle."] },
          { h: "Children and special needs", p: ["Tell the provider if you travel with infants, children or someone who needs extra help getting in and out. Child seats and accessible vehicles are not assumed; ask for them explicitly and get them confirmed."] },
          { h: "Confirm the vehicle before you commit", p: ["Availability depends on date and partner confirmation. A quotation should name the vehicle category, the seats and the luggage allowance. See the fleet page for how we handle vehicle requests."] },
        ],
        faqs: [
          { q: "Can five adults with luggage fit in a standard sedan?", a: "It is usually tight. A larger vehicle is the safer choice; confirm with your provider." },
          { q: "Do you guarantee a specific model?", a: "Not by default. Vehicle category and availability are confirmed in the quotation." },
          { q: "Can I request a child seat?", a: "You can ask; whether it is available is confirmed in the quotation." },
        ],
      },
      ar: {
        nav: "اختيار مركبة للعائلة أو المجموعة",
        title: "أي مركبة تناسب خمسة ركاب مع حقائب؟ دليل عملي",
        description: "كيف تختار بين سيارة سيدان وسيارة دفع رباعي وفان لسفر العائلات والمجموعات في السعودية: المقاعد والحقائب والراحة وما تؤكده مع مزوّد الخدمة.",
        h1: "أي مركبة تناسب خمسة ركاب مع حقائب؟",
        answer: "لخمسة ركاب مع حقائب تكون سيارة السيدان العادية عادةً ضيقة؛ والأسلم البدء بسيارة دفع رباعي كبيرة أو مركبة عائلية، وتناسب الحافلة الصغيرة المجموعات الأكبر أو الحقائب الثقيلة. تختلف المقاعد ومساحة الحقائب بحسب الطراز، فأخبر مزوّد الخدمة بعدد الأشخاص والحقائب واطلب منه تأكيد المركبة بدقة.",
        summary: "طريقة بسيطة لمطابقة نوع المركبة مع الركاب والحقائب.",
        sections: [
          { h: "احسب الأشخاص والحقائب ثم أضف هامشًا", p: ["ابدأ بعدد البالغين والأطفال والحقائب، بما فيها الحقائب الكبيرة وعربات الأطفال والمعدات الرياضية. ثم أضف هامشًا: فالرحلات الطويلة أريح كثيرًا مع مساحة إضافية، وغالبًا يصل القادمون إلى المطار بحقائب أكثر مما يتوقعون."] },
          { h: "سيدان أم دفع رباعي أم فان: الصورة العامة", p: ["تناسب السيدان من مسافر إلى ثلاثة مع حقائب معتدلة. وتناسب سيارة الدفع الرباعي الكبيرة العائلات والمجموعات الصغيرة التي تريد الراحة على الطرق الطويلة. ويناسب الفان أو المركبة العائلية مجموعات أكبر وحقائب ثقيلة. وهذه فئات عامة لا وعود بشأن مركبة محددة."] },
          { h: "الأطفال والاحتياجات الخاصة", p: ["أخبر المزوّد إن كنت تسافر برضّع أو أطفال أو بمن يحتاج مساعدة إضافية في الصعود والنزول. ولا تُفترض مقاعد الأطفال والمركبات الميسّرة؛ اطلبها صراحةً وتأكد منها."] },
          { h: "أكّد المركبة قبل أن تلتزم", p: ["تعتمد الإتاحة على التاريخ وتأكيد الشريك. وينبغي أن يذكر عرض السعر فئة المركبة والمقاعد وسعة الحقائب. راجع صفحة الأسطول لمعرفة كيف نتعامل مع طلبات المركبات."] },
        ],
        faqs: [
          { q: "هل يتسع خمسة بالغين مع حقائب لسيارة سيدان عادية؟", a: "غالبًا تكون ضيقة. والأسلم مركبة أكبر؛ أكّد ذلك مع مزوّد الخدمة." },
          { q: "هل تضمنون طرازًا محددًا؟", a: "ليس افتراضيًا. تُؤكَّد فئة المركبة والإتاحة في عرض السعر." },
          { q: "هل يمكنني طلب مقعد أطفال؟", a: "يمكنك السؤال؛ وتُؤكَّد إتاحته في عرض السعر." },
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
        title: "Airport Pickup in Saudi Arabia: What to Arrange Before You Land",
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
        title: "الاستقبال من المطار في السعودية: ما الذي ترتبه قبل أن تهبط",
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

export const getPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
