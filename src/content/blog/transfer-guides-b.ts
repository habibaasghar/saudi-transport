import type { BlogPost } from "./types";
import { images } from "../images";
import { A, D, I, S } from "./transfer-guides-a";

/**
 * Private transfer guides, part B (2026-11-23). Same rules as part A.
 * Cross-border guides never promise border times, visas or that a given vehicle or driver can cross: those are
 * confirmed per journey, and entry rules are for the traveller to check with the official authorities.
 */
const X = `${S}/cross-border-transfers`;
const photo = (file: string, width: number, height: number, en: string, ar: string, focus?: string) => ({ src: `/images/fleet/${file}.webp`, width, height, alt: { en, ar }, focus });

export const businessChauffeurPost: BlogPost = {
  slug: "private-chauffeur-service-saudi-arabia",
  published: D,
  updated: D,
  cluster: "private-transfers",
  hero: photo("toyota-camry-black-exterior", 1100, 825, "Black Toyota Camry sedan in a three-quarter front view", "سيدان تويوتا كامري سوداء من زاوية أمامية جانبية", "50% 55%"),
  related: ["riyadh-to-dammam-private-transfer", "private-car-with-driver-vs-taxi-saudi-arabia"],
  links: [`${S}/chauffeur-services`, `${S}/chauffeur-services/business-chauffeur`, `${S}/chauffeur-services/multi-day-chauffeur`, `${A}/riyadh-airport`, `${S}/city-transport/riyadh`],
  copy: {
    en: {
      nav: "Chauffeur service for business trips in Riyadh",
      title: "Chauffeur Service for Business Trips in Riyadh",
      description: "Booking a chauffeur-driven car for business in Riyadh: airport arrival, meetings across the city, multi-day visits, vehicle choice and what companies should send.",
      h1: "Chauffeur service for business trips in Riyadh: how to plan it",
      answer: "A chauffeur service for a business trip in Riyadh means one car with a professional driver booked for your schedule: the airport pickup, meetings across the city such as KAFD, the Diplomatic Quarter and King Fahd Road, and the return to the airport. It can be booked for a single transfer, a full working day or several days. RideSaudi arranges the car and chauffeur through partners and confirms the plan in the quotation.",
      summary: "How companies and visiting executives use a chauffeur-driven car in Riyadh, and what to send.",
      table: {
        h: "Common business bookings",
        head: ["Booking", "Typical use"],
        rows: [
          ["Airport transfer", "Arrival at King Khalid International to a hotel or office"],
          ["Meeting day", "Several meetings across Riyadh with the car waiting between them"],
          ["Multi-day programme", "A visitor's whole stay: arrival, meetings, dinners, departure"],
          ["Intercity day", "Riyadh to Dammam or Al Khobar and back for a meeting"],
          ["Guests and delegations", "Several vehicles for a visiting team"],
        ],
      },
      sections: [
        { h: "Why companies book a chauffeur in Riyadh", p: ["Riyadh is a large city where meetings can be far apart and parking at towers and government buildings takes time. A chauffeur-driven car removes driving, parking and finding entrances from a visitor's day, and the car is ready when the meeting ends. It also gives the host company one point of contact for the guest's movements."] },
        { h: "Planning a meeting day", p: ["Send the list of addresses and times in order, with the expected length of each meeting. The driver waits between meetings, and the plan allows for traffic at peak hours. If the order may change, name one person who can update the driver on the day."] },
        { h: "Multi-day visits", p: ["For a visitor staying several days, the whole programme can be planned at once: the airport pickup, daily movements, evening events and the departure. This is quoted as one booking rather than a series of separate rides, and changes are handled through the organiser."] },
        { h: "Choosing the vehicle", p: ["A sedan such as a Toyota Camry, Hyundai Sonata or Ford Taurus suits one executive. A GMC Yukon or Chevrolet Suburban gives more space for two or three people or a senior guest. For VIP guests, luxury SUVs can be requested. The vehicle for your dates is confirmed in the quotation."] },
        { h: "Information companies should send", p: ["Passenger name and phone number, the booker's name and contact, flight details, hotel, the daily programme, preferred language if any, and whether a company invoice is needed. Tell us at the start if the booking will repeat regularly."] },
        { h: "What a chauffeur booking is not", p: ["This is a car with a driver for your trips, not a driver for hire on his own and not a job placement. RideSaudi arranges the vehicle with its driver through transport partners; it does not supply drivers for your own car."] },
      ],
      faqs: [
        { q: "Can I book a chauffeur for a full working day in Riyadh?", a: "Yes. Send the day's meetings and times and the car is planned for the whole day." },
        { q: "Will the chauffeur wait between meetings?", a: "Yes, waiting between planned stops is part of the day's plan and quotation." },
        { q: "Can I book for a visiting executive who arrives tonight?", a: "Send the flight and programme as early as possible; availability for short notice is confirmed per enquiry." },
        { q: "Can you provide a driver for my own car?", a: "No. RideSaudi arranges vehicles with their drivers, not drivers for private cars." },
        { q: "Can a chauffeur take me from Riyadh to Dammam for a meeting?", a: "Yes, as an intercity day with the return the same evening or another day." },
      ],
    },
    ar: {
      nav: "سيارة مع سائق لرحلات العمل في الرياض",
      title: "ليموزين وسيارة مع سائق لرحلات العمل في الرياض",
      description: "حجز سيارة مع سائق لرحلات العمل في الرياض: الاستقبال من المطار، والاجتماعات في أنحاء المدينة، والزيارات لعدة أيام، واختيار المركبة، وما ترسله الشركات.",
      h1: "سيارة مع سائق لرحلات العمل في الرياض: كيف تخطط لها",
      answer: "خدمة السيارة مع سائق لرحلة عمل في الرياض تعني سيارة واحدة مع سائق محترف تُحجز حسب جدولك: الاستقبال من المطار، والاجتماعات في أنحاء المدينة مثل المركز المالي والحي الدبلوماسي وطريق الملك فهد، والعودة إلى المطار. ويمكن حجزها لتوصيلة واحدة أو يوم عمل كامل أو عدة أيام. وترتب RideSaudi السيارة والسائق عبر الشركاء وتؤكد الخطة في عرض السعر.",
      summary: "كيف تستخدم الشركات وكبار الزوار سيارة مع سائق في الرياض، وماذا ترسل.",
      table: {
        h: "حجوزات العمل الشائعة",
        head: ["الحجز", "الاستخدام المعتاد"],
        rows: [
          ["توصيل المطار", "الوصول إلى مطار الملك خالد ثم إلى الفندق أو المكتب"],
          ["يوم اجتماعات", "عدة اجتماعات في الرياض والسيارة تنتظر بينها"],
          ["برنامج لعدة أيام", "إقامة الزائر كاملة: الوصول والاجتماعات والعشاء والمغادرة"],
          ["يوم بين المدن", "من الرياض إلى الدمام أو الخبر والعودة لاجتماع"],
          ["الضيوف والوفود", "عدة مركبات لفريق زائر"],
        ],
      },
      sections: [
        { h: "لماذا تحجز الشركات سيارة مع سائق في الرياض", p: ["الرياض مدينة كبيرة قد تتباعد فيها الاجتماعات، والوقوف عند الأبراج والمباني الحكومية يأخذ وقتًا. والسيارة مع سائق تزيل القيادة والوقوف والبحث عن المداخل من يوم الزائر، وتكون السيارة جاهزة حين ينتهي الاجتماع. كما تمنح الشركة المضيفة جهة تواصل واحدة لتنقلات الضيف."] },
        { h: "التخطيط ليوم الاجتماعات", p: ["أرسل قائمة العناوين والأوقات بالترتيب مع المدة المتوقعة لكل اجتماع. وينتظر السائق بين الاجتماعات، وتراعي الخطة الزحام في أوقات الذروة. وإن احتمل أن يتغير الترتيب فسمِّ شخصًا واحدًا يحدّث السائق خلال اليوم."] },
        { h: "الزيارات لعدة أيام", p: ["للزائر الذي يقيم عدة أيام يمكن التخطيط للبرنامج كاملًا مرة واحدة: الاستقبال من المطار والتنقلات اليومية والمناسبات المسائية والمغادرة. ويُسعَّر كحجز واحد لا كسلسلة رحلات منفصلة، وتمر التغييرات عبر المنظّم."] },
        { h: "اختيار المركبة", p: ["تناسب السيدان مثل تويوتا كامري أو هيونداي سوناتا أو فورد توروس مسؤولًا واحدًا. ويعطي جمس يوكن أو شيفروليه سوبربان مساحة أكبر لشخصين أو ثلاثة أو لضيف رفيع. ولكبار الشخصيات يمكن طلب سيارات دفع رباعي فاخرة. وتُؤكَّد المركبة لتواريخك في عرض السعر."] },
        { h: "ما يجب أن ترسله الشركات", p: ["اسم الراكب ورقمه، واسم من يحجز وطريقة التواصل معه، وتفاصيل الرحلة الجوية، والفندق، والبرنامج اليومي، واللغة المفضلة إن وجدت، وهل تحتاج فاتورة باسم الشركة. وأخبرنا من البداية إن كان الحجز سيتكرر بانتظام."] },
        { h: "ما ليس من هذه الخدمة", p: ["هذه سيارة مع سائق لتنقلاتك، لا سائق للإيجار وحده ولا توظيف. وترتب RideSaudi المركبة مع سائقها عبر شركاء النقل، ولا توفر سائقين لسيارتك الخاصة."] },
      ],
      faqs: [
        { q: "هل يمكن حجز سيارة مع سائق ليوم عمل كامل في الرياض؟", a: "نعم. أرسل اجتماعات اليوم وأوقاتها وتُخطط السيارة لليوم كله." },
        { q: "هل ينتظر السائق بين الاجتماعات؟", a: "نعم، فالانتظار بين المحطات المخططة جزء من خطة اليوم وعرض السعر." },
        { q: "هل يمكن الحجز لمسؤول زائر يصل الليلة؟", a: "أرسل الرحلة والبرنامج في أقرب وقت، وتُؤكَّد الإتاحة للطلبات العاجلة في كل طلب." },
        { q: "هل توفرون سائقًا لسيارتي الخاصة؟", a: "لا. ترتب RideSaudi مركبات مع سائقيها، لا سائقين للسيارات الخاصة." },
        { q: "هل توصلني السيارة من الرياض إلى الدمام لاجتماع؟", a: "نعم، كيوم بين المدن مع العودة في المساء نفسه أو في يوم آخر." },
      ],
    },
  },
};

export const qatarRoadPost: BlogPost = {
  slug: "saudi-arabia-to-qatar-private-transfer",
  published: D,
  updated: D,
  cluster: "private-transfers",
  hero: images.doha,
  related: ["cross-border-private-transfer-checklist", "saudi-arabia-to-bahrain-private-transfer", "saudi-arabia-to-uae-private-transfer"],
  links: [`${X}/qatar`, `${I}/riyadh-to-doha`, `${I}/dammam-to-doha`, X, `${S}/city-transport/al-ahsa`],
  copy: {
    en: {
      nav: "Saudi Arabia to Qatar by road",
      title: "Saudi Arabia to Qatar by Road: Salwa Crossing",
      description: "Riyadh or Dammam to Doha by private car through the Salwa crossing: the route, what each passenger must check, vehicle permission, timing and booking tips.",
      h1: "Saudi Arabia to Qatar by road: Riyadh or Dammam to Doha through Salwa",
      answer: "The road from Saudi Arabia to Qatar uses one land crossing: Salwa on the Saudi side and Abu Samra on the Qatari side. From Riyadh, public travel sources give roughly 570 to 580 km to Doha; from the Eastern Province the road runs south through the Al Ahsa area to Salwa. Before booking a private car, every passenger must check entry requirements, and the provider must confirm the vehicle and driver can cross.",
      summary: "The route to Doha, the one land border, and the checks to make before a private road transfer to Qatar.",
      table: {
        h: "Saudi Arabia to Qatar: what to check",
        head: ["Check", "Who confirms it"],
        rows: [
          ["Each passenger's entry eligibility for Qatar and re-entry to Saudi Arabia", "You, on the official government portals"],
          ["Passports, residency permits and any visas valid for the whole trip", "You"],
          ["Whether the vehicle and driver may cross into Qatar", "The provider, in writing, before you pay"],
          ["Drop-off address in Doha and any return date", "You, in the enquiry"],
          ["Border waiting time", "Nobody can guarantee it; allow margin"],
        ],
      },
      sections: [
        { h: "The route to Doha", p: ["From Riyadh the road heads east toward the Al Ahsa area and then south-east to the Salwa crossing, Qatar's only land border. After the border at Abu Samra, the road continues to Doha; a public logistics source places the Abu Samra post about 90 km from Doha. From Dammam, Al Khobar or Al Ahsa, the drive to Salwa is shorter."] },
        { h: "Entry requirements are your responsibility", p: ["Rules depend on nationality, residency, purpose of travel and the date, and they change. Check them for every passenger, including children, on the official Saudi and Qatari portals before you book or pay. A transport provider cannot grant entry to Qatar or guarantee it."] },
        { h: "Vehicle and driver permission", p: ["Not every Saudi vehicle and driver can be used in Qatar. Ask whether the specific vehicle and driver for your journey can cross, and get the answer in writing. RideSaudi confirms this for each journey in the quotation rather than assuming it."] },
        { h: "Timing and the border", p: ["Border processing changes by day, hour and season, so no fixed crossing time can be promised. Do not plan a flight from Doha or an important meeting straight after arrival. Early departures help avoid the heat of the day."] },
        { h: "One way or return", p: ["A return journey crosses the same border again, and passenger requirements apply on the way back as well. If you need a return, say so in the first enquiry with both dates."] },
        { h: "What to send", p: ["Pickup address, Doha destination, date and time, number of passengers, nationalities, luggage, and whether it is one way or return. With these, the provider can confirm the vehicle, the crossing arrangement and the quotation."] },
      ],
      faqs: [
        { q: "What is the land border between Saudi Arabia and Qatar?", a: "Salwa on the Saudi side and Abu Samra on the Qatari side. It is Qatar's only land border." },
        { q: "How far is Riyadh from Doha by road?", a: "Public travel sources give roughly 570 to 580 km. Driving time varies, and border time comes on top." },
        { q: "Can a Saudi private car take me into Qatar?", a: "Only if the specific vehicle and driver are allowed to cross. This is confirmed per journey in writing." },
        { q: "Do I need a visa to travel from Saudi Arabia to Qatar by road?", a: "It depends on your nationality and status. Check the official Qatari and Saudi portals before booking." },
        { q: "How long does the Salwa border take?", a: "It varies and cannot be guaranteed. Allow generous margin." },
      ],
    },
    ar: {
      nav: "من السعودية إلى قطر برًا",
      title: "من السعودية إلى قطر برًا عبر منفذ سلوى",
      description: "من الرياض أو الدمام إلى الدوحة بسيارة خاصة عبر منفذ سلوى: الطريق، وما يجب أن يتحقق منه كل راكب، وتصريح المركبة، والتوقيت، ونصائح الحجز.",
      h1: "من السعودية إلى قطر برًا: من الرياض أو الدمام إلى الدوحة عبر سلوى",
      answer: "يمر الطريق البري من السعودية إلى قطر بمنفذ واحد: سلوى في الجانب السعودي وأبو سمرة في الجانب القطري. ومن الرياض تذكر مصادر السفر العامة نحو 570 إلى 580 كم إلى الدوحة، ومن المنطقة الشرقية يتجه الطريق جنوبًا عبر منطقة الأحساء إلى سلوى. وقبل حجز سيارة خاصة يجب أن يتحقق كل راكب من متطلبات الدخول، وأن يؤكد المزوّد أن المركبة والسائق يمكنهما العبور.",
      summary: "الطريق إلى الدوحة، والمنفذ البري الوحيد، وما تتحقق منه قبل التوصيل البري الخاص إلى قطر.",
      table: {
        h: "من السعودية إلى قطر: ما يجب التحقق منه",
        head: ["البند", "من يؤكده"],
        rows: [
          ["أهلية كل راكب لدخول قطر والعودة إلى السعودية", "أنت، عبر البوابات الحكومية الرسمية"],
          ["صلاحية الجوازات والإقامات وأي تأشيرات طوال الرحلة", "أنت"],
          ["هل يُسمح للمركبة والسائق بالعبور إلى قطر", "المزوّد، كتابيًا قبل الدفع"],
          ["عنوان النزول في الدوحة وموعد العودة إن وجد", "أنت، في الطلب"],
          ["وقت الانتظار في المنفذ", "لا يمكن لأحد ضمانه، فاترك هامشًا"],
        ],
      },
      sections: [
        { h: "الطريق إلى الدوحة", p: ["من الرياض يتجه الطريق شرقًا نحو منطقة الأحساء ثم جنوبًا شرقيًا إلى منفذ سلوى، وهو المنفذ البري الوحيد لقطر. وبعد منفذ أبو سمرة يكمل الطريق إلى الدوحة، ويضع مصدر لوجستي عام منفذ أبو سمرة على بعد نحو 90 كم من الدوحة. ومن الدمام أو الخبر أو الأحساء تكون الطريق إلى سلوى أقصر."] },
        { h: "متطلبات الدخول مسؤوليتك", p: ["تعتمد الأنظمة على الجنسية والإقامة وغرض السفر والتاريخ، وهي تتغير. تحقق منها لكل راكب ومنهم الأطفال عبر البوابات الرسمية السعودية والقطرية قبل الحجز أو الدفع. ولا يستطيع مزوّد النقل منح الدخول إلى قطر أو ضمانه."] },
        { h: "تصريح المركبة والسائق", p: ["ليست كل مركبة وسائق في السعودية يمكن استخدامهما في قطر. اسأل هل يمكن للمركبة والسائق المحددين لرحلتك العبور، واحصل على الإجابة كتابيًا. وتؤكد RideSaudi ذلك لكل رحلة في عرض السعر بدل افتراضه."] },
        { h: "التوقيت والمنفذ", p: ["تتغير إجراءات المنفذ حسب اليوم والساعة والموسم، فلا يمكن الوعد بوقت عبور ثابت. ولا تخطط لرحلة طيران من الدوحة أو اجتماع مهم بعد الوصول مباشرة. والانطلاق المبكر يساعد على تجنب حر النهار."] },
        { h: "ذهاب فقط أو ذهاب وعودة", p: ["رحلة العودة تعبر المنفذ نفسه مرة أخرى، وتنطبق متطلبات الركاب في طريق العودة أيضًا. وإن احتجت العودة فاذكر ذلك في الطلب الأول مع التاريخين."] },
        { h: "ماذا ترسل", p: ["عنوان الاستلام، والوجهة في الدوحة، والتاريخ والوقت، وعدد الركاب، والجنسيات، والحقائب، وهل الرحلة ذهاب فقط أو ذهاب وعودة. وبها يستطيع المزوّد تأكيد المركبة وترتيب العبور وعرض السعر."] },
      ],
      faqs: [
        { q: "ما المنفذ البري بين السعودية وقطر؟", a: "سلوى في الجانب السعودي وأبو سمرة في الجانب القطري، وهو المنفذ البري الوحيد لقطر." },
        { q: "كم المسافة من الرياض إلى الدوحة بالسيارة؟", a: "تذكر مصادر السفر العامة نحو 570 إلى 580 كم، ويختلف وقت القيادة ويُضاف إليه وقت المنفذ." },
        { q: "هل توصلني سيارة خاصة سعودية إلى داخل قطر؟", a: "فقط إذا سُمح للمركبة والسائق المحددين بالعبور، ويُؤكَّد ذلك كتابيًا لكل رحلة." },
        { q: "هل أحتاج تأشيرة للسفر برًا من السعودية إلى قطر؟", a: "يعتمد على جنسيتك ووضعك. تحقق من البوابات الرسمية القطرية والسعودية قبل الحجز." },
        { q: "كم يستغرق منفذ سلوى؟", a: "يختلف ولا يمكن ضمانه، فاترك هامشًا كافيًا." },
      ],
    },
  },
};

export const bahrainCausewayPost: BlogPost = {
  slug: "saudi-arabia-to-bahrain-private-transfer",
  published: D,
  updated: D,
  cluster: "private-transfers",
  hero: images.causeway,
  related: ["cross-border-private-transfer-checklist", "riyadh-to-dammam-private-transfer", "saudi-arabia-to-qatar-private-transfer"],
  links: [`${X}/bahrain`, `${I}/riyadh-to-manama`, `${I}/dammam-to-bahrain`, X, `${A}/dammam-airport`],
  copy: {
    en: {
      nav: "Saudi Arabia to Bahrain via the causeway",
      title: "Saudi to Bahrain by Car via King Fahd Causeway",
      description: "Dammam, Al Khobar or Riyadh to Bahrain by private car over the King Fahd Causeway: distances, what passengers must check, vehicle permission and booking tips.",
      h1: "Saudi Arabia to Bahrain by private car over the King Fahd Causeway",
      answer: "Road travel from Saudi Arabia to Bahrain uses the King Fahd Causeway, about 25 km long, which starts near Al Khobar. From Riyadh to Manama is about 469 km over the causeway; from Dammam or Al Khobar it is a short trip to the causeway. Before booking a private car, each passenger must check entry requirements, and the provider must confirm the vehicle and driver can cross.",
      summary: "The causeway route from Riyadh and the Eastern Province, the checks to make, and how to plan the timing.",
      table: {
        h: "Routes to Bahrain",
        head: ["From", "Distance", "Note"],
        rows: [
          ["Riyadh", "About 469 km to Manama", "Riyadh to the Eastern Province, then the causeway"],
          ["Dammam or Al Khobar", "Short drive to the causeway, about 25 km across", "Popular for day trips and airport connections"],
          ["King Fahd International Airport (DMM)", "Through the Eastern Province to the causeway", "Plan around your flight with margin"],
        ],
      },
      sections: [
        { h: "The King Fahd Causeway", p: ["The causeway links the Al Khobar area with Bahrain across the sea, with border formalities for both countries along the way. It is busy at weekends and holidays, when many people travel between the two countries, and quieter at other times. No fixed crossing time can be promised."] },
        { h: "From Riyadh", p: ["From Riyadh the journey is about 469 km: first the road east to the Eastern Province, then the causeway to Manama. With the border on top of the drive, it is a long day. Many travellers combine it with a stop in Dammam or Al Khobar."] },
        { h: "From Dammam, Al Khobar and Dhahran", p: ["From the Eastern Province, Bahrain is a short trip, which makes day visits, family visits and airport connections common. Business travellers sometimes combine meetings in Al Khobar and Manama on one day."] },
        { h: "What passengers must check", p: ["Entry rules depend on nationality, residency and purpose of travel, and change from time to time. Check them for every passenger, including children, on the official Saudi and Bahraini portals before you pay, and make sure documents are valid for the return journey too. A provider cannot grant entry."] },
        { h: "Vehicle and driver permission", p: ["Ask whether the specific vehicle and driver can cross into Bahrain, and get the answer in writing. RideSaudi confirms this for each journey in the quotation instead of assuming it."] },
        { h: "Timing tips", p: ["Avoid planning a tight flight or meeting straight after the crossing. Weekend and holiday evenings are typically the busiest. If you need a return the same day, include both times in your first enquiry."] },
      ],
      faqs: [
        { q: "How long is the King Fahd Causeway?", a: "About 25 km, from near Al Khobar to Bahrain." },
        { q: "How far is Riyadh from Manama by road?", a: "About 469 km over the King Fahd Causeway, plus border time." },
        { q: "Can a private car from Dammam take me to Bahrain?", a: "Yes, if the specific vehicle and driver are allowed to cross. This is confirmed per journey in writing." },
        { q: "Is the causeway busy at weekends?", a: "Weekends and holidays are usually the busiest times. Allow extra margin." },
        { q: "Can I do a day trip from Al Khobar to Bahrain and back?", a: "Yes, as a return journey with both times in the enquiry, provided every passenger can enter and return." },
      ],
    },
    ar: {
      nav: "من السعودية إلى البحرين عبر الجسر",
      title: "من السعودية إلى البحرين برًا عبر جسر الملك فهد",
      description: "من الدمام أو الخبر أو الرياض إلى البحرين بسيارة خاصة عبر جسر الملك فهد: المسافات، وما يتحقق منه الركاب، وتصريح المركبة، ونصائح الحجز.",
      h1: "الطريق البري من السعودية إلى البحرين: دليل العبور بسيارة خاصة عبر جسر الملك فهد",
      answer: "السفر البري من السعودية إلى البحرين يمر بجسر الملك فهد، وطوله نحو 25 كم ويبدأ قرب الخبر. ومن الرياض إلى المنامة نحو 469 كم عبر الجسر، ومن الدمام أو الخبر تكون الطريق إلى الجسر قصيرة. وقبل حجز سيارة خاصة يجب أن يتحقق كل راكب من متطلبات الدخول، وأن يؤكد المزوّد أن المركبة والسائق يمكنهما العبور.",
      summary: "طريق الجسر من الرياض والمنطقة الشرقية، وما تتحقق منه، وكيف تخطط للتوقيت.",
      table: {
        h: "الطرق إلى البحرين",
        head: ["من", "المسافة", "ملاحظة"],
        rows: [
          ["الرياض", "نحو 469 كم إلى المنامة", "من الرياض إلى الشرقية ثم الجسر"],
          ["الدمام أو الخبر", "طريق قصير إلى الجسر الذي يمتد نحو 25 كم", "شائع لرحلات اليوم والربط بالمطار"],
          ["مطار الملك فهد الدولي", "عبر المنطقة الشرقية إلى الجسر", "خطط حسب رحلتك مع هامش كافٍ"],
        ],
      },
      sections: [
        { h: "جسر الملك فهد", p: ["يربط الجسر منطقة الخبر بالبحرين عبر البحر، مع إجراءات الحدود للبلدين في الطريق. ويزدحم في عطلات نهاية الأسبوع والإجازات حين يسافر كثيرون بين البلدين، ويكون أهدأ في الأوقات الأخرى. ولا يمكن الوعد بوقت عبور ثابت."] },
        { h: "من الرياض", p: ["من الرياض تبلغ الرحلة نحو 469 كم: أولًا الطريق شرقًا إلى المنطقة الشرقية ثم الجسر إلى المنامة. ومع وقت المنفذ تصبح يومًا طويلًا، ويجمعها كثير من المسافرين مع توقف في الدمام أو الخبر."] },
        { h: "من الدمام والخبر والظهران", p: ["من المنطقة الشرقية تكون البحرين رحلة قصيرة، ولذلك تكثر زيارات اليوم الواحد وزيارات العائلات والربط بالمطارات. ويجمع رجال الأعمال أحيانًا اجتماعات في الخبر والمنامة في يوم واحد."] },
        { h: "ما يجب أن يتحقق منه الركاب", p: ["تعتمد أنظمة الدخول على الجنسية والإقامة وغرض السفر وتتغير من وقت لآخر. تحقق منها لكل راكب ومنهم الأطفال عبر البوابات الرسمية السعودية والبحرينية قبل الدفع، وتأكد من صلاحية الوثائق لرحلة العودة أيضًا. ولا يستطيع المزوّد منح الدخول."] },
        { h: "تصريح المركبة والسائق", p: ["اسأل هل يمكن للمركبة والسائق المحددين العبور إلى البحرين، واحصل على الإجابة كتابيًا. وتؤكد RideSaudi ذلك لكل رحلة في عرض السعر بدل افتراضه."] },
        { h: "نصائح التوقيت", p: ["تجنب التخطيط لرحلة طيران أو اجتماع ضيق بعد العبور مباشرة. وأمسيات عطلة نهاية الأسبوع والإجازات عادةً الأكثر ازدحامًا. وإن احتجت العودة في اليوم نفسه فاذكر الوقتين في طلبك الأول."] },
      ],
      faqs: [
        { q: "كم طول جسر الملك فهد؟", a: "نحو 25 كم، من قرب الخبر إلى البحرين." },
        { q: "كم المسافة من الرياض إلى المنامة بالسيارة؟", a: "نحو 469 كم عبر جسر الملك فهد، يُضاف إليها وقت المنفذ." },
        { q: "هل توصلني سيارة خاصة من الدمام إلى البحرين؟", a: "نعم، إذا سُمح للمركبة والسائق المحددين بالعبور، ويُؤكَّد ذلك كتابيًا لكل رحلة." },
        { q: "هل يزدحم الجسر في عطلة نهاية الأسبوع؟", a: "عطلات نهاية الأسبوع والإجازات عادةً الأكثر ازدحامًا، فاترك هامشًا إضافيًا." },
        { q: "هل يمكن الذهاب من الخبر إلى البحرين والعودة في يوم؟", a: "نعم كرحلة ذهاب وعودة بالوقتين في الطلب، بشرط أن يستطيع كل راكب الدخول والعودة." },
      ],
    },
  },
};

export const uaeRoadPost: BlogPost = {
  slug: "saudi-arabia-to-uae-private-transfer",
  published: D,
  updated: D,
  cluster: "private-transfers",
  hero: images.dubai,
  related: ["cross-border-private-transfer-checklist", "saudi-arabia-to-qatar-private-transfer"],
  links: [`${X}/uae`, `${I}/riyadh-to-dubai`, `${I}/riyadh-to-abu-dhabi`, `${I}/dammam-to-dubai`, X],
  copy: {
    en: {
      nav: "Saudi Arabia to the UAE by road",
      title: "Saudi Arabia to UAE by Road: Riyadh to Dubai",
      description: "Riyadh or Dammam to Dubai or Abu Dhabi by private car through the Batha and Ghuwaifat crossing: distances, passenger and vehicle checks, timing and stops.",
      h1: "Saudi Arabia to the UAE by road: Riyadh or Dammam to Dubai and Abu Dhabi",
      answer: "The usual road from Saudi Arabia to the UAE crosses at Batha on the Saudi side and Ghuwaifat on the UAE side, then runs through the emirate of Abu Dhabi toward Dubai. Public sources give roughly 980 to 1,200 km from Riyadh to Dubai and about 880 km from Dammam to Dubai, so it is a very long day. Every passenger must check entry requirements, and the vehicle and driver's permission to cross is confirmed before booking.",
      summary: "The long road to Dubai and Abu Dhabi, the Batha–Ghuwaifat crossing, and how to plan a full-day journey.",
      table: {
        h: "Saudi Arabia to the UAE at a glance",
        head: ["Route", "Distance (public sources)", "Note"],
        rows: [
          ["Riyadh to Dubai", "Roughly 980 to 1,200 km", "A very long day plus border time"],
          ["Riyadh to Abu Dhabi", "About 900 to 1,000 km", "Abu Dhabi emirate is reached first"],
          ["Dammam to Dubai", "About 880 km", "South through Al Ahsa to Batha"],
          ["Crossing", "Batha (Saudi) and Ghuwaifat (UAE)", "Times vary; allow generous margin"],
        ],
      },
      sections: [
        { h: "The route", p: ["From Riyadh or the Eastern Province the road runs south-east through the Al Ahsa area to the Batha crossing, enters the UAE at Ghuwaifat, and continues along the coast of the emirate of Abu Dhabi. Abu Dhabi city comes first; Dubai is further along the coast. Distances quoted by public sources differ, so the exact plan is confirmed for your addresses."] },
        { h: "A very long day on the road", p: ["With around ten or more hours of driving and a border crossing, this is one of the longest private road journeys from Saudi Arabia. Plan rest, prayer and meal stops, and consider an early start. Some travellers break the journey with a night on the way; mention it if you want that."] },
        { h: "Entry requirements", p: ["Entry rules for the UAE depend on nationality, residency and purpose of travel, and can change. Check them for every passenger, including children, on the official UAE and Saudi portals before you book, and check that documents are valid for re-entry to Saudi Arabia if you are coming back."] },
        { h: "Vehicle and driver permission", p: ["Not every vehicle and driver from Saudi Arabia can be used in the UAE. Ask whether the specific vehicle and driver can cross and get the answer in writing; RideSaudi confirms this for each journey in the quotation."] },
        { h: "Choosing the vehicle for a long trip", p: ["Over such a distance, comfort matters. Families often choose a GMC Yukon or Chevrolet Suburban; groups of up to seven with luggage a Hyundai Staria, which takes up to 7 passengers with 10 or more bags. The vehicle is confirmed in the quotation."] },
        { h: "What to send", p: ["Pickup address, destination in Dubai or Abu Dhabi, date, preferred departure time, passengers, nationalities, luggage, and whether it is one way or return. Do not book a flight from Dubai on the same evening as the journey."] },
      ],
      faqs: [
        { q: "Which border do you cross from Saudi Arabia to the UAE?", a: "Usually Batha on the Saudi side and Ghuwaifat on the UAE side." },
        { q: "How far is Riyadh from Dubai by road?", a: "Public sources vary, roughly 980 to 1,200 km, plus border time." },
        { q: "Can I travel from Dammam to Dubai by private car?", a: "Yes, about 880 km, if every passenger can enter the UAE and the vehicle and driver are allowed to cross." },
        { q: "Can we stop overnight on the way to Dubai?", a: "Yes, if you plan it. Mention it in the enquiry so the journey is planned over two days." },
        { q: "Is a private car from Riyadh to Abu Dhabi possible?", a: "Yes, about 900 to 1,000 km, subject to entry requirements and vehicle permission being confirmed." },
      ],
    },
    ar: {
      nav: "من السعودية إلى الإمارات برًا",
      title: "من السعودية إلى الإمارات برًا: الرياض إلى دبي",
      description: "من الرياض أو الدمام إلى دبي أو أبوظبي بسيارة خاصة عبر منفذ البطحاء والغويفات: المسافات، وما يتحقق منه الركاب والمركبة، والتوقيت، والتوقفات.",
      h1: "من السعودية إلى الإمارات برًا: من الرياض أو الدمام إلى دبي وأبوظبي",
      answer: "يعبر الطريق المعتاد من السعودية إلى الإمارات من منفذ البطحاء في الجانب السعودي والغويفات في الجانب الإماراتي، ثم يمر بإمارة أبوظبي نحو دبي. وتذكر المصادر العامة نحو 980 إلى 1,200 كم من الرياض إلى دبي، ونحو 880 كم من الدمام إلى دبي، فهي رحلة يوم طويل جدًا. ويجب أن يتحقق كل راكب من متطلبات الدخول، ويُؤكَّد تصريح عبور المركبة والسائق قبل الحجز.",
      summary: "الطريق الطويل إلى دبي وأبوظبي، ومنفذ البطحاء والغويفات، وكيف تخطط لرحلة يوم كامل.",
      table: {
        h: "من السعودية إلى الإمارات في لمحة",
        head: ["الطريق", "المسافة (مصادر عامة)", "ملاحظة"],
        rows: [
          ["الرياض إلى دبي", "نحو 980 إلى 1,200 كم", "يوم طويل جدًا مع وقت المنفذ"],
          ["الرياض إلى أبوظبي", "نحو 900 إلى 1,000 كم", "تصل إلى إمارة أبوظبي أولًا"],
          ["الدمام إلى دبي", "نحو 880 كم", "جنوبًا عبر الأحساء إلى البطحاء"],
          ["المنفذ", "البطحاء (السعودية) والغويفات (الإمارات)", "الأوقات تتغير، فاترك هامشًا كافيًا"],
        ],
      },
      sections: [
        { h: "الطريق", p: ["من الرياض أو المنطقة الشرقية يتجه الطريق جنوبًا شرقيًا عبر منطقة الأحساء إلى منفذ البطحاء، ويدخل الإمارات من الغويفات، ثم يكمل على ساحل إمارة أبوظبي. وتأتي مدينة أبوظبي أولًا ثم دبي أبعد على الساحل. وتختلف المسافات في المصادر العامة، فتُؤكَّد الخطة لعناوينك."] },
        { h: "يوم طويل جدًا على الطريق", p: ["مع عشر ساعات قيادة أو أكثر وعبور منفذ، هذه من أطول الرحلات البرية الخاصة من السعودية. خطط لتوقفات الراحة والصلاة والطعام، وفكر في الانطلاق مبكرًا. ويقسم بعض المسافرين الرحلة بمبيت في الطريق، فاذكر ذلك إن أردته."] },
        { h: "متطلبات الدخول", p: ["تعتمد أنظمة دخول الإمارات على الجنسية والإقامة وغرض السفر وقد تتغير. تحقق منها لكل راكب ومنهم الأطفال عبر البوابات الرسمية الإماراتية والسعودية قبل الحجز، وتأكد من صلاحية الوثائق للعودة إلى السعودية إن كنت ستعود."] },
        { h: "تصريح المركبة والسائق", p: ["ليست كل مركبة وسائق من السعودية يمكن استخدامهما في الإمارات. اسأل هل يمكن للمركبة والسائق المحددين العبور واحصل على الإجابة كتابيًا، وتؤكد RideSaudi ذلك لكل رحلة في عرض السعر."] },
        { h: "اختيار المركبة لرحلة طويلة", p: ["في مسافة كهذه تهم الراحة. تختار العائلات غالبًا جمس يوكن أو شيفروليه سوبربان، والمجموعات حتى سبعة أشخاص مع حقائب هيونداي ستاريا التي تتسع لسبعة ركاب مع 10 حقائب أو أكثر. وتُؤكَّد المركبة في عرض السعر."] },
        { h: "ماذا ترسل", p: ["عنوان الاستلام، والوجهة في دبي أو أبوظبي، والتاريخ، ووقت الانطلاق المفضل، والركاب، والجنسيات، والحقائب، وهل الرحلة ذهاب فقط أو ذهاب وعودة. ولا تحجز رحلة طيران من دبي في مساء يوم الرحلة نفسه."] },
      ],
      faqs: [
        { q: "من أي منفذ تعبر من السعودية إلى الإمارات؟", a: "عادةً منفذ البطحاء في الجانب السعودي والغويفات في الجانب الإماراتي." },
        { q: "كم المسافة من الرياض إلى دبي بالسيارة؟", a: "تختلف المصادر العامة، نحو 980 إلى 1,200 كم، يُضاف إليها وقت المنفذ." },
        { q: "هل يمكن السفر من الدمام إلى دبي بسيارة خاصة؟", a: "نعم، نحو 880 كم، إذا استطاع كل راكب دخول الإمارات وسُمح للمركبة والسائق بالعبور." },
        { q: "هل يمكن المبيت في الطريق إلى دبي؟", a: "نعم إذا خططت لذلك. اذكره في الطلب لتُخطط الرحلة على يومين." },
        { q: "هل يمكن التوصيل بسيارة خاصة من الرياض إلى أبوظبي؟", a: "نعم، نحو 900 إلى 1,000 كم، بشرط تأكيد متطلبات الدخول وتصريح المركبة." },
      ],
    },
  },
};
