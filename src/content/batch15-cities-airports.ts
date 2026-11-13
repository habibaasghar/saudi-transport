import type { ServicePage } from "./types";

const U = "2026-11-13";
const I = "services/intercity-transfers";
const X = "services/cross-border-transfers";
const C = "services/city-transport";
const A = "services/airport-transfers";
const H = "services/chauffeur-services/hourly-driver";

/**
 * City pages for Dhahran, Al Ahsa and Hafar Al Batin, and airport pages for Qassim (ELQ) and Al Ahsa (HOF).
 *
 * Local facts are limited to widely documented ones (Saudi Aramco headquarters and KFUPM in Dhahran;
 * Al-Ahsa Oasis on the UNESCO World Heritage list; Hofuf station on the Riyadh to Dammam passenger line).
 * Airport distances are approximate figures from public travel sources checked on 2026-11-13, which
 * disagree with one another: ELQ roughly 20 to 35 km from Buraydah, HOF about 17 to 20 km from central
 * Hofuf, AQI about 20 km from Hafar Al Batin. No flight schedules, terminal rules, meet-and-greet,
 * waiting policies, vehicles or prices are stated. Partner coverage of these three cities is an owner
 * fact that is still unverified, so every page says coverage is confirmed in the quotation.
 */
export const batch15CitiesAirports: ServicePage[] = [
  {
    path: `${C}/dhahran`,
    parent: C,
    variant: "default",
    service: "chauffeur",
    related: [`${C}/al-khobar`, `${C}/dammam`, `${A}/dammam-airport`, `${I}/riyadh-to-al-khobar`, `${I}/dammam-to-bahrain`, H],
    updated: U,
    copy: {
      en: {
        nav: "Dhahran City Transport",
        title: "Private Car with Driver in Dhahran",
        description: "Pre-book a private car with a driver in Dhahran for company visits, the university, Ithra and transfers to Dammam airport or Bahrain. Get a quotation.",
        h1: "A private car with a driver in Dhahran",
        eyebrow: "City Transport · Dhahran",
        answer: "A private car with a driver in Dhahran is a pre-booked vehicle for journeys in the city that sits between Dammam and Al Khobar and is home to Saudi Aramco's headquarters and King Fahd University of Petroleum and Minerals. Typical requests are business visits, airport transfers and trips to Bahrain. RideSaudi arranges it on request; availability is confirmed in the quotation.",
        summary: "Private journeys in Dhahran for business visits, the university and airport transfers.",
        sections: [
          { h: "Who asks for a car in Dhahran", p: ["Most requests come from people visiting for work: engineers, consultants and suppliers with meetings at energy-sector offices, and delegates attending an exhibition at Dhahran Expo. Others are academics and families visiting King Fahd University of Petroleum and Minerals, or visitors going to the King Abdulaziz Center for World Culture, known as Ithra. Dhahran is less a hotel district than its neighbours, so many of these journeys start from a hotel in Al Khobar."] },
          { h: "Gates, passes and controlled sites", p: ["Company sites and residential compounds in Dhahran decide who may enter and through which gate. Those rules belong to the site, not to RideSaudi, and a driver cannot enter without whatever the site requires. Arrange your visitor pass with your host, ask whether an outside vehicle may drive in or must stop at the gate, and tell us the gate name or number."] },
          { h: "The airport for Dhahran", p: ["Commercial flights for Dhahran use King Fahd International Airport, which lies north-west of Dammam. Send your flight number, the number of passengers and bags, and the Dhahran address. See Dammam airport transfers for how arrivals and departures are arranged."] },
          { h: "A day of meetings across three cities", p: ["Dhahran, Al Khobar and Dammam are close enough that one working day often takes in all three. If you have several stops, booking the car by the hour or for the day is usually simpler than a string of single journeys; list the stops in order so the time can be estimated."] },
          { h: "Beyond Dhahran", p: ["The King Fahd Causeway to Bahrain starts on the Al Khobar side, a short drive from Dhahran. Longer journeys to Riyadh, Jubail or Al Ahsa can be requested from a Dhahran address as well."] },
        ],
        checklist: { h: "Include this in your Dhahran enquiry", items: ["Pickup and drop-off addresses, with gate name or number for company sites", "Date, time and how long you need the car", "Number of passengers and bags", "Flight details for airport journeys", "Whether your host has arranged vehicle access"] },
        faqs: [
          { q: "Is Dhahran covered separately from Dammam and Al Khobar?", a: "It is the same area for booking purposes: the three cities adjoin. Name the Dhahran address so the journey is quoted from the right point." },
          { q: "Which airport do I use for Dhahran?", a: "King Fahd International Airport (DMM), north-west of Dammam, is the commercial airport for Dhahran, Dammam and Al Khobar." },
          { q: "Can the driver enter a company compound in Dhahran?", a: "Only if the site allows it. Entry rules are set by the site, so arrange access with your host; otherwise the meeting point is the gate." },
          { q: "Can I book a car to Ithra and back?", a: "You can request a return journey with waiting time. Check opening hours and tickets with the venue itself." },
          { q: "Can I keep a driver for a day of meetings in Dhahran?", a: "You can request hourly or full-day booking. List your stops so the time needed is quoted accurately." },
        ],
      },
      ar: {
        nav: "التنقل في الظهران",
        title: "سيارة خاصة مع سائق في الظهران",
        description: "احجز مسبقًا سيارة خاصة بسائق في الظهران لزيارات الشركات والجامعة ومركز إثراء والتوصيل إلى مطار الدمام أو البحرين. استلم عرض سعر.",
        h1: "سيارة خاصة مع سائق في الظهران",
        eyebrow: "التنقل داخل المدن · الظهران",
        answer: "السيارة الخاصة مع سائق في الظهران مركبة بحجز مسبق للتنقل في المدينة الواقعة بين الدمام والخبر، وفيها المقر الرئيسي لأرامكو السعودية وجامعة الملك فهد للبترول والمعادن. وأكثر الطلبات لزيارات العمل والتوصيل من المطار وإليه والرحلات إلى البحرين. ترتّب RideSaudi ذلك عند الطلب؛ وتُؤكَّد الإتاحة في عرض السعر.",
        summary: "تنقلات خاصة في الظهران لزيارات العمل والجامعة والتوصيل من المطار.",
        sections: [
          { h: "من يطلب سيارة في الظهران", p: ["تأتي أغلب الطلبات من زوار العمل: مهندسون ومستشارون وموردون لديهم اجتماعات في مكاتب قطاع الطاقة، ومشاركون في معرض يقام في معارض الظهران. ومنهم أكاديميون وعائلات يزورون جامعة الملك فهد للبترول والمعادن، وزوار مركز الملك عبدالعزيز الثقافي العالمي المعروف بإثراء. والظهران أقل فنادق من جارتيها، فيبدأ كثير من هذه المشاوير من فندق في الخبر."] },
          { h: "البوابات والتصاريح والمواقع المقيَّدة", p: ["تحدد مواقع الشركات والمجمعات السكنية في الظهران من يدخل ومن أي بوابة. وهذه القواعد للموقع لا لـRideSaudi، ولا يدخل السائق دون ما يشترطه الموقع. فرتّب تصريح الزيارة مع مضيفك، واسأل هل يُسمح لمركبة خارجية بالدخول أم تقف عند البوابة، وأخبرنا باسم البوابة أو رقمها."] },
          { h: "مطار الظهران", p: ["تستخدم الرحلات التجارية إلى الظهران مطار الملك فهد الدولي الواقع شمال غرب الدمام. أرسل رقم رحلتك وعدد الركاب والحقائب والعنوان في الظهران. وراجع صفحة التوصيل من مطار الدمام لمعرفة ترتيب الوصول والمغادرة."] },
          { h: "يوم اجتماعات بين ثلاث مدن", p: ["الظهران والخبر والدمام متقاربة حتى إن يوم العمل الواحد يشملها كلها أحيانًا. وإن تعددت محطاتك فحجز السيارة بالساعة أو لليوم أيسر غالبًا من عدة مشاوير منفردة؛ فاذكر المحطات بالترتيب ليُقدَّر الوقت."] },
          { h: "خارج الظهران", p: ["يبدأ جسر الملك فهد إلى البحرين من جهة الخبر، على مسافة قصيرة بالسيارة من الظهران. ويمكن كذلك طلب رحلات أطول إلى الرياض أو الجبيل أو الأحساء من عنوان في الظهران."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب الظهران", items: ["عنوانا الاستلام والوصول مع اسم البوابة أو رقمها لمواقع الشركات", "التاريخ والوقت ومدة حاجتك للسيارة", "عدد الركاب والحقائب", "تفاصيل الرحلة لمشاوير المطار", "هل رتّب مضيفك دخول المركبة"] },
        faqs: [
          { q: "هل الظهران مشمولة بمعزل عن الدمام والخبر؟", a: "هي منطقة واحدة من ناحية الحجز لتلاصق المدن الثلاث. اذكر العنوان في الظهران لتُسعَّر الرحلة من النقطة الصحيحة." },
          { q: "أي مطار أستخدم للوصول إلى الظهران؟", a: "مطار الملك فهد الدولي شمال غرب الدمام هو المطار التجاري للظهران والدمام والخبر." },
          { q: "هل يدخل السائق مجمع شركة في الظهران؟", a: "فقط إن سمح الموقع بذلك. قواعد الدخول يحددها الموقع، فرتّب الدخول مع مضيفك؛ وإلا فنقطة اللقاء هي البوابة." },
          { q: "هل يمكن حجز سيارة إلى مركز إثراء والعودة؟", a: "يمكنك طلب ذهاب وعودة مع وقت انتظار. وتحقق من أوقات العمل والتذاكر لدى المركز نفسه." },
          { q: "هل يبقى السائق معي يوم اجتماعات في الظهران؟", a: "يمكنك طلب الحجز بالساعة أو ليوم كامل. اذكر محطاتك ليُسعَّر الوقت المطلوب بدقة." },
        ],
      },
    },
  },
  {
    path: `${C}/al-ahsa`,
    parent: C,
    variant: "default",
    service: "chauffeur",
    related: [`${A}/al-ahsa-airport`, `${I}/dammam-to-al-ahsa`, `${I}/riyadh-to-al-ahsa`, `${I}/dammam-to-doha`, `${C}/dammam`, H],
    updated: U,
    copy: {
      en: {
        nav: "Al Ahsa City Transport",
        title: "Private Car with Driver in Al Ahsa (Hofuf)",
        description: "Pre-book a private car with a driver in Al Ahsa for Hofuf, Mubarraz, the oasis heritage sites, the airport and the railway station. Get a quotation.",
        h1: "A private car with a driver in Al Ahsa: Hofuf, Mubarraz and the oasis",
        eyebrow: "City Transport · Al Ahsa",
        answer: "A private car with a driver in Al Ahsa is a pre-booked vehicle for journeys in Hofuf, Mubarraz and the surrounding oasis in the Eastern Province. Al-Ahsa Oasis is on the UNESCO World Heritage list, and visitors come for its heritage sites, family visits and business. RideSaudi arranges the car on request; coverage and availability are confirmed in the quotation.",
        summary: "Private journeys around Hofuf, Mubarraz and the Al Ahsa oasis.",
        sections: [
          { h: "Getting around a spread-out oasis", p: ["Hofuf and neighbouring Mubarraz are the urban centre; around them lie villages, palm groves and the places visitors come to see. Al Qarah Mountain, Qaisariah Souq, Ibrahim Palace and Jawatha Mosque are in different directions, so seeing several in a day means a car kept for the day rather than separate rides. Opening times and tickets are set by each site, and a driver is not a licensed tour guide."] },
          { h: "Arriving by air or by train", p: ["Al-Ahsa International Airport is the local airport; see Al Ahsa airport transfers. Hofuf also has a station on the passenger railway between Riyadh and Dammam, and a pickup there can be requested with your train's arrival time. Travellers who land at Dammam's airport instead can continue by road; the Dammam to Al Ahsa page covers that journey."] },
          { h: "Business, university and family visits", p: ["Not every journey is sightseeing. People come to Al Ahsa for King Faisal University, for business in Hofuf and Mubarraz, and to visit relatives in the oasis villages. For a village or farm address, share a map pin, because street addresses are not always enough for a driver to find the place."] },
          { h: "Leaving Al Ahsa", p: ["Riyadh, Dammam and Al Khobar are the usual onward journeys. The road to Qatar's border at Salwa also runs through this area, so Al Ahsa is a practical starting point for Doha; documents for that crossing are each passenger's responsibility."] },
        ],
        checklist: { h: "Include this in your Al Ahsa enquiry", items: ["Pickup and destination, with a map pin for villages and farms", "Date, time and whether you need the car by the trip, hour or day", "Sites you want to visit, in order", "Number of passengers and bags", "Flight or train arrival details, if any"] },
        faqs: [
          { q: "Is Al Ahsa the same place as Hofuf?", a: "Al Ahsa is the governorate and oasis. Hofuf is its main city, and Mubarraz adjoins it. Give the exact town or village in your enquiry." },
          { q: "Can a driver take me around the Al Ahsa heritage sites in one day?", a: "You can request a day booking and list the sites. Opening hours and tickets are set by the sites, and the driver is not a tour guide." },
          { q: "Can you meet me at Hofuf railway station?", a: "You can request a station pickup. Send the train's arrival time; the meeting point is confirmed in the quotation." },
          { q: "Can I book a car from Al Ahsa to Doha?", a: "You can request it. The route crosses at Salwa; check entry requirements with the official authorities, and cross-border availability is confirmed first." },
        ],
      },
      ar: {
        nav: "التنقل في الأحساء",
        title: "سيارة خاصة مع سائق في الأحساء (الهفوف)",
        description: "احجز مسبقًا سيارة خاصة بسائق في الأحساء للتنقل في الهفوف والمبرز والمواقع التراثية في الواحة والمطار ومحطة القطار. استلم عرض سعر.",
        h1: "سيارة خاصة مع سائق في الأحساء: الهفوف والمبرز والواحة",
        eyebrow: "التنقل داخل المدن · الأحساء",
        answer: "السيارة الخاصة مع سائق في الأحساء مركبة بحجز مسبق للتنقل في الهفوف والمبرز والواحة المحيطة بهما في المنطقة الشرقية. وواحة الأحساء مسجلة في قائمة التراث العالمي لدى اليونسكو، ويقصدها الزوار لمواقعها التراثية ولزيارة الأهل وللأعمال. ترتّب RideSaudi السيارة عند الطلب؛ وتُؤكَّد التغطية والإتاحة في عرض السعر.",
        summary: "تنقلات خاصة في الهفوف والمبرز وواحة الأحساء.",
        sections: [
          { h: "التنقل في واحة متباعدة الأطراف", p: ["الهفوف والمبرز المجاورة لها هما المركز العمراني، وحولهما قرى وبساتين نخيل والمواقع التي يقصدها الزوار. وجبل القارة وسوق القيصرية وقصر إبراهيم ومسجد جواثا في اتجاهات مختلفة، فزيارة عدد منها في يوم واحد تحتاج سيارة تبقى معك طوال اليوم لا مشاوير منفصلة. وأوقات الزيارة والتذاكر يحددها كل موقع، والسائق ليس مرشدًا سياحيًا مرخصًا."] },
          { h: "الوصول جوًّا أو بالقطار", p: ["مطار الأحساء الدولي هو المطار المحلي؛ راجع صفحة التوصيل من مطار الأحساء. وفي الهفوف محطة على خط قطار الركاب بين الرياض والدمام، ويمكن طلب الاستلام منها مع موعد وصول قطارك. ومن يصل إلى مطار الدمام يمكنه متابعة الطريق برًّا، وتغطي صفحة الدمام إلى الأحساء تلك الرحلة."] },
          { h: "الأعمال والجامعة وزيارة الأهل", p: ["ليست كل المشاوير سياحية. فالناس يقصدون الأحساء لجامعة الملك فيصل، ولأعمال في الهفوف والمبرز، ولزيارة الأقارب في قرى الواحة. وإن كان العنوان قرية أو مزرعة فأرسل موقعه على الخريطة، لأن العنوان المكتوب لا يكفي دائمًا ليصل السائق."] },
          { h: "مغادرة الأحساء", p: ["الرياض والدمام والخبر هي الوجهات المعتادة بعد الأحساء. ويمر الطريق إلى منفذ سلوى على حدود قطر بهذه المنطقة أيضًا، فالأحساء نقطة انطلاق عملية إلى الدوحة؛ ووثائق العبور مسؤولية كل راكب."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب الأحساء", items: ["نقطة الاستلام والوجهة مع الموقع على الخريطة للقرى والمزارع", "التاريخ والوقت وهل تحتاج السيارة للمشوار أم بالساعة أم لليوم", "المواقع التي تريد زيارتها بالترتيب", "عدد الركاب والحقائب", "تفاصيل وصول الطائرة أو القطار إن وجدت"] },
        faqs: [
          { q: "هل الأحساء هي الهفوف نفسها؟", a: "الأحساء هي المحافظة والواحة، والهفوف مدينتها الرئيسية وتجاورها المبرز. اذكر المدينة أو القرية بدقة في طلبك." },
          { q: "هل يأخذني السائق إلى المواقع التراثية في الأحساء في يوم واحد؟", a: "يمكنك طلب حجز ليوم كامل مع ذكر المواقع. أوقات الزيارة والتذاكر يحددها كل موقع، والسائق ليس مرشدًا سياحيًا." },
          { q: "هل تستقبلونني في محطة قطار الهفوف؟", a: "يمكنك طلب الاستلام من المحطة. أرسل موعد وصول القطار؛ وتُؤكَّد نقطة اللقاء في عرض السعر." },
          { q: "هل يمكن حجز سيارة من الأحساء إلى الدوحة؟", a: "يمكنك طلب ذلك. يمر الطريق بمنفذ سلوى؛ فتحقق من شروط الدخول لدى الجهات الرسمية، وتُؤكَّد إتاحة العبور أولًا." },
        ],
      },
    },
  },
  {
    path: `${C}/hafar-al-batin`,
    parent: C,
    variant: "default",
    service: "chauffeur",
    related: [`${I}/riyadh-to-hafar-al-batin`, `${X}/kuwait`, `${I}/riyadh-to-kuwait-city`, `${C}/dammam`, C],
    updated: U,
    copy: {
      en: {
        nav: "Hafar Al Batin City Transport",
        title: "Private Car with Driver in Hafar Al Batin",
        description: "Request a private car with a driver in Hafar Al Batin for local journeys, Al Qaisumah airport and long onward trips to Riyadh, Dammam or Kuwait.",
        h1: "A private car with a driver in Hafar Al Batin",
        eyebrow: "City Transport · Hafar Al Batin",
        answer: "A private car with a driver in Hafar Al Batin is a pre-booked vehicle for journeys in this north-eastern Saudi city near the Kuwait border, and to Al Qaisumah/Hafar Al Batin Airport about 20 km away. Most requests are for business, family visits and long onward journeys. RideSaudi arranges it on request; coverage and availability are confirmed in the quotation, not assumed.",
        summary: "Private journeys in Hafar Al Batin and long onward trips from the city.",
        sections: [
          { h: "A regional centre a long way from other cities", p: ["Hafar Al Batin serves a wide area of the north-east, and the nearest large cities are several hours away by road. That shapes how people travel here: journeys are planned in advance rather than arranged on the day, and a single trip often combines a local pickup with a long drive. Send your request early so that availability in the city can be checked properly."] },
          { h: "The local airport and the alternatives", p: ["Al Qaisumah/Hafar Al Batin Airport lies about 20 km south-east of the city according to public sources. Its schedule is limited, so check with your airline which days it operates. Many travellers fly to Riyadh or Dammam instead and continue by road; if that is your plan, give the arrival airport and flight details in the enquiry."] },
          { h: "Journeys people ask about", p: ["Requests include the University of Hafr Al Batin, hospitals, company and contractor sites, and family addresses in the city and nearby towns. Travel towards King Khalid Military City can be requested too, but entry there is controlled and must be arranged through your host; a driver can take you only as far as you are authorised to go."] },
          { h: "Onward to Riyadh and Kuwait", p: ["The long road south to the capital is covered on the Riyadh to Hafar Al Batin page, which applies in both directions. The city is also near the border with Kuwait; for that journey read the Kuwait cross-border page and check each passenger's entry requirements with the official authorities."] },
        ],
        checklist: { h: "Include this in your Hafar Al Batin enquiry", items: ["Pickup and destination, with a map pin where possible", "Date and time, sent as early as you can", "Passengers and luggage", "Flight details if you are using Al Qaisumah, Riyadh or Dammam airport", "Any onward or cross-border leg"] },
        faqs: [
          { q: "Is there an airport at Hafar Al Batin?", a: "Yes. Al Qaisumah/Hafar Al Batin Airport (AQI) is about 20 km south-east of the city by public sources. Its schedule is limited, so check with your airline." },
          { q: "Can I book a car from Hafar Al Batin to Riyadh?", a: "You can request it. It is a long inland journey; availability is confirmed in the quotation." },
          { q: "Can you drive me from Hafar Al Batin to Kuwait?", a: "You can request it. Entry documents are your responsibility, and whether a vehicle and driver can cross is confirmed before you commit." },
          { q: "Do you take passengers to King Khalid Military City?", a: "You can request a journey to the area. Entry is controlled by the site and must be arranged with your host in advance." },
        ],
      },
      ar: {
        nav: "التنقل في حفر الباطن",
        title: "سيارة خاصة مع سائق في حفر الباطن",
        description: "اطلب سيارة خاصة بسائق في حفر الباطن للمشاوير المحلية ومطار القيصومة والرحلات الطويلة إلى الرياض أو الدمام أو الكويت.",
        h1: "سيارة خاصة مع سائق في حفر الباطن",
        eyebrow: "التنقل داخل المدن · حفر الباطن",
        answer: "السيارة الخاصة مع سائق في حفر الباطن مركبة بحجز مسبق للتنقل في هذه المدينة الواقعة شمال شرق السعودية قرب حدود الكويت، وإلى مطار القيصومة الذي يبعد نحو 20 كم. وأكثر الطلبات للأعمال وزيارة الأهل والرحلات الطويلة. ترتّب RideSaudi ذلك عند الطلب؛ وتُؤكَّد التغطية والإتاحة في عرض السعر ولا تُفترض.",
        summary: "تنقلات خاصة في حفر الباطن ورحلات طويلة انطلاقًا منها.",
        sections: [
          { h: "مركز إقليمي بعيد عن المدن الأخرى", p: ["تخدم حفر الباطن منطقة واسعة من الشمال الشرقي، وأقرب المدن الكبيرة تبعد عنها ساعات بالسيارة. وهذا يحدد طريقة السفر هنا: تُخطَّط الرحلات مسبقًا ولا تُرتَّب في اليوم نفسه، وكثيرًا ما يجمع المشوار الواحد بين استلام محلي وطريق طويل. فأرسل طلبك مبكرًا ليُتحقق من الإتاحة في المدينة كما ينبغي."] },
          { h: "المطار المحلي والبدائل", p: ["يقع مطار القيصومة على نحو 20 كم جنوب شرق المدينة بحسب مصادر عامة. وجدول رحلاته محدود، فتأكد من شركة الطيران عن أيام التشغيل. ويسافر كثيرون جوًّا إلى الرياض أو الدمام ثم يكملون برًّا؛ فإن كانت هذه خطتك فاذكر مطار الوصول وتفاصيل الرحلة في الطلب."] },
          { h: "مشاوير يُسأل عنها", p: ["تشمل الطلبات جامعة حفر الباطن والمستشفيات ومواقع الشركات والمقاولين وعناوين الأهل في المدينة والبلدات القريبة. ويمكن طلب التوجه نحو مدينة الملك خالد العسكرية أيضًا، لكن الدخول إليها مقيَّد ويُرتَّب عبر مضيفك؛ ولا يوصلك السائق إلا إلى الحد المصرح لك به."] },
          { h: "إلى الرياض والكويت", p: ["تغطي صفحة الرياض إلى حفر الباطن الطريق الطويل جنوبًا إلى العاصمة، وهي تنطبق على الاتجاهين. والمدينة قريبة كذلك من حدود الكويت؛ ولتلك الرحلة اقرأ صفحة التوصيل إلى الكويت وتحقق من شروط دخول كل راكب لدى الجهات الرسمية."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب حفر الباطن", items: ["نقطة الاستلام والوجهة مع الموقع على الخريطة إن أمكن", "التاريخ والوقت، وأرسلهما في أبكر وقت ممكن", "الركاب والحقائب", "تفاصيل الرحلة إن كنت تستخدم مطار القيصومة أو الرياض أو الدمام", "أي مرحلة تالية أو عبور للحدود"] },
        faqs: [
          { q: "هل يوجد مطار في حفر الباطن؟", a: "نعم. مطار القيصومة يبعد نحو 20 كم جنوب شرق المدينة بحسب مصادر عامة. وجدوله محدود، فتأكد من شركة الطيران." },
          { q: "هل يمكن حجز سيارة من حفر الباطن إلى الرياض؟", a: "يمكنك طلب ذلك. وهي رحلة برية طويلة؛ وتُؤكَّد الإتاحة في عرض السعر." },
          { q: "هل توصلونني من حفر الباطن إلى الكويت؟", a: "يمكنك طلب ذلك. وثائق الدخول مسؤوليتك، وإمكانية عبور المركبة والسائق تُؤكَّد قبل أن تلتزم." },
          { q: "هل توصلون الركاب إلى مدينة الملك خالد العسكرية؟", a: "يمكنك طلب رحلة إلى المنطقة. والدخول يحدده الموقع ويجب ترتيبه مع مضيفك مسبقًا." },
        ],
      },
    },
  },
  {
    path: `${A}/qassim-airport`,
    parent: A,
    variant: "default",
    service: "airport",
    related: [`${C}/buraidah`, `${I}/riyadh-to-buraydah`, `${C}/hail`, `${A}/riyadh-airport`],
    updated: U,
    copy: {
      en: {
        nav: "Qassim Airport Transfers",
        title: "Qassim Airport (ELQ) Transfers: Buraydah & Unaizah",
        description: "Request a private transfer between Qassim's Prince Naif bin Abdulaziz International Airport (ELQ) and Buraydah, Unaizah or Ar Rass. Share your flight details.",
        h1: "Qassim Airport (ELQ) private transfers to Buraydah, Unaizah and the region",
        eyebrow: "Airport Transfers · Qassim",
        answer: "A private Qassim Airport transfer is a pre-booked car with a driver between Prince Naif bin Abdulaziz International Airport (ELQ) and Buraydah, Unaizah or another town in the Qassim region. The airport is in the Mulayda area outside Buraydah; public sources put it roughly 20 to 35 km from the city centre. Send your flight number and destination and RideSaudi confirms availability and a quotation.",
        summary: "Pre-booked pickups and drop-offs at Qassim's Prince Naif bin Abdulaziz International Airport (ELQ).",
        sections: [
          { h: "One airport for a whole region", p: ["Qassim has several towns rather than one city, and they share this airport: Buraydah, the regional capital, as well as Unaizah, Ar Rass, Al Bukayriyah and Al Mithnab. The same airport appears on tickets as Qassim, Gassim or Buraydah. The drive is short to Buraydah and longer to the other towns, so the first thing we need is the town and the address."] },
          { h: "Arriving at ELQ", p: ["Send the flight number, scheduled arrival time, number of passengers and number of bags. Where the driver meets you, and how a delayed flight is handled, are set out in the quotation; a name-board welcome inside the terminal and flight monitoring are not assumed. If you are travelling with elderly relatives or a lot of luggage, say so."] },
          { h: "Departures from Qassim", p: ["For a departure, tell us the flight time and the pickup address, and the collection time is planned back from there with margin. From Ar Rass or the western towns the drive is noticeably longer than from Buraydah, so do not base your timing on the Buraydah distance."] },
          { h: "When the road is the better option", p: ["Qassim is close enough to Riyadh that some travellers skip the flight and go by road; the Riyadh to Buraydah page covers that journey. Onward travel north to Hail can be requested from the airport or from town as well."] },
        ],
        checklist: { h: "Include this in your Qassim Airport enquiry", items: ["Arrival or departure, with flight number and time", "Town and exact address: Buraydah, Unaizah, Ar Rass or elsewhere", "Passengers and bags", "Any special needs, such as elderly passengers or child seats to request", "Return transfer date, if known"] },
        faqs: [
          { q: "What is the airport code for Qassim?", a: "ELQ. The official name is Prince Naif bin Abdulaziz International Airport; it is also listed as Qassim, Gassim or Buraydah." },
          { q: "How far is Qassim Airport from Buraydah?", a: "Public sources disagree, giving roughly 20 to 35 km from the city centre. Treat it as approximate." },
          { q: "Can you take me from Qassim Airport to Unaizah?", a: "You can request it. Give the Unaizah address and flight details; availability is confirmed in the quotation." },
          { q: "Can I book a car from Qassim Airport to Hail or Riyadh?", a: "You can request either as an intercity journey starting at the airport. It is quoted individually." },
        ],
      },
      ar: {
        nav: "التوصيل من مطار القصيم",
        title: "التوصيل من مطار القصيم (ELQ): بريدة وعنيزة",
        description: "اطلب توصيلًا خاصًا بين مطار الأمير نايف بن عبدالعزيز الدولي في القصيم (ELQ) وبريدة أو عنيزة أو الرس. أرسل تفاصيل رحلتك.",
        h1: "توصيل خاص من مطار القصيم (ELQ) إلى بريدة وعنيزة والمنطقة",
        eyebrow: "التوصيل من المطار · القصيم",
        answer: "التوصيل الخاص من مطار القصيم هو سيارة بسائق وبحجز مسبق بين مطار الأمير نايف بن عبدالعزيز الدولي (ELQ) وبريدة أو عنيزة أو بلدة أخرى في منطقة القصيم. ويقع المطار في المليداء خارج بريدة، وتقدّر مصادر عامة بُعده عن وسط المدينة بنحو 20 إلى 35 كم. أرسل رقم رحلتك ووجهتك وتؤكد RideSaudi الإتاحة وعرض السعر.",
        summary: "استقبال وتوصيل بحجز مسبق في مطار الأمير نايف بن عبدالعزيز الدولي بالقصيم (ELQ).",
        sections: [
          { h: "مطار واحد لمنطقة كاملة", p: ["القصيم عدة مدن لا مدينة واحدة، وكلها تشترك في هذا المطار: بريدة عاصمة المنطقة، وعنيزة والرس والبكيرية والمذنب. ويظهر المطار نفسه في التذاكر باسم القصيم أو بريدة. والطريق قصير إلى بريدة وأطول إلى بقية المدن، فأول ما نحتاجه هو المدينة والعنوان."] },
          { h: "الوصول إلى مطار القصيم", p: ["أرسل رقم الرحلة وموعد الوصول المجدول وعدد الركاب وعدد الحقائب. ومكان لقاء السائق وطريقة التعامل مع تأخر الرحلة يُوضَّحان في عرض السعر؛ ولا يُفترض الاستقبال بلوحة الاسم داخل الصالة ولا متابعة الرحلة. وإن كان معك كبار سن أو حقائب كثيرة فاذكر ذلك."] },
          { h: "المغادرة من القصيم", p: ["عند المغادرة أخبرنا بموعد الرحلة وعنوان الاستلام، فيُحسب وقت الاستلام رجوعًا من ذلك مع هامش. والطريق من الرس أو المدن الغربية أطول بوضوح منه من بريدة، فلا تبنِ توقيتك على مسافة بريدة."] },
          { h: "حين يكون الطريق البري أنسب", p: ["القصيم قريبة من الرياض بما يجعل بعض المسافرين يتركون الطيران ويسافرون برًّا؛ وتغطي صفحة الرياض إلى بريدة تلك الرحلة. ويمكن كذلك طلب المتابعة شمالًا إلى حائل من المطار أو من المدينة."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب مطار القصيم", items: ["وصول أم مغادرة، مع رقم الرحلة وموعدها", "المدينة والعنوان بدقة: بريدة أو عنيزة أو الرس أو غيرها", "الركاب والحقائب", "أي احتياجات خاصة مثل كبار السن أو طلب مقاعد أطفال", "تاريخ توصيلة العودة إن عُرف"] },
        faqs: [
          { q: "ما رمز مطار القصيم؟", a: "رمزه ELQ. واسمه الرسمي مطار الأمير نايف بن عبدالعزيز الدولي، ويُكتب أيضًا مطار القصيم أو بريدة." },
          { q: "كم يبعد مطار القصيم عن بريدة؟", a: "تختلف المصادر العامة وتذكر نحو 20 إلى 35 كم عن وسط المدينة. اعتبر الرقم تقريبيًا." },
          { q: "هل توصلونني من مطار القصيم إلى عنيزة؟", a: "يمكنك طلب ذلك. أرسل العنوان في عنيزة وتفاصيل الرحلة؛ وتُؤكَّد الإتاحة في عرض السعر." },
          { q: "هل يمكن حجز سيارة من مطار القصيم إلى حائل أو الرياض؟", a: "يمكنك طلب أي منهما رحلةً بين المدن تبدأ من المطار، وتُسعَّر على حدة." },
        ],
      },
    },
  },
  {
    path: `${A}/al-ahsa-airport`,
    parent: A,
    variant: "default",
    service: "airport",
    related: [`${C}/al-ahsa`, `${I}/dammam-to-al-ahsa`, `${I}/riyadh-to-al-ahsa`, `${A}/dammam-airport`],
    updated: U,
    copy: {
      en: {
        nav: "Al Ahsa Airport Transfers",
        title: "Al Ahsa Airport (HOF) Private Transfers",
        description: "Request a private transfer between Al-Ahsa International Airport (HOF) and Hofuf, Mubarraz or the oasis villages. Share your flight and get a quotation.",
        h1: "Al-Ahsa International Airport (HOF) private transfers to Hofuf and Mubarraz",
        eyebrow: "Airport Transfers · Al Ahsa",
        answer: "A private Al Ahsa airport transfer is a pre-booked car with a driver between Al-Ahsa International Airport (HOF) and Hofuf, Mubarraz or elsewhere in the oasis. Public sources place the airport about 17 to 20 km south-west of central Hofuf, around 20 to 25 minutes by car. Send your flight number and destination and RideSaudi confirms availability and a quotation.",
        summary: "Pre-booked pickups and drop-offs at Al-Ahsa International Airport (HOF).",
        sections: [
          { h: "A small airport and a short drive", p: ["HOF is a small airport with a limited schedule, so flights do not run at every hour of every day; confirm yours with the airline. The drive into Hofuf is short, and the figures above are approximate because public sources differ and the oasis towns are spread out."] },
          { h: "Where people go from the airport", p: ["Most arrivals head for a hotel or home in Hofuf or Mubarraz, King Faisal University, or a family address in one of the oasis villages. For a village or farm, send a map pin. If you want to go straight from the airport to a heritage site before checking in, say so and mention your luggage."] },
          { h: "HOF or Dammam's airport?", p: ["King Fahd International Airport near Dammam has far more flights, and some visitors to Al Ahsa land there and continue by road, a journey of about 150 to 155 km by public figures. Compare the flight you can get with the drive it saves; the Dammam to Al Ahsa page covers the road option."] },
          { h: "Departures", p: ["Give the flight time and pickup address and the collection time is planned with margin. From outlying villages the drive is longer than from Hofuf, so mention exactly where you are staying."] },
        ],
        checklist: { h: "Include this in your Al Ahsa airport enquiry", items: ["Arrival or departure, with flight number and time", "Exact destination or pickup: Hofuf, Mubarraz or a village with a map pin", "Passengers and bags", "Any stop you want on the way", "Return transfer date, if known"] },
        faqs: [
          { q: "What is the code for Al Ahsa airport?", a: "HOF. The airport is Al-Ahsa International Airport and is sometimes listed as Hofuf." },
          { q: "How far is Al Ahsa airport from Hofuf?", a: "Public sources give about 17 to 20 km to central Hofuf, around 20 to 25 minutes by car. Treat it as approximate." },
          { q: "Should I fly to Al Ahsa or to Dammam?", a: "It depends on the flights available. HOF is much closer; Dammam's airport has more routes but is about 150 to 155 km away by road." },
          { q: "Can you take me from Al Ahsa airport to Mubarraz?", a: "You can request it. Give the address and flight details; availability is confirmed in the quotation." },
        ],
      },
      ar: {
        nav: "التوصيل من مطار الأحساء",
        title: "التوصيل الخاص من مطار الأحساء (HOF)",
        description: "اطلب توصيلًا خاصًا بين مطار الأحساء الدولي (HOF) والهفوف أو المبرز أو قرى الواحة. أرسل تفاصيل رحلتك واستلم عرض سعر.",
        h1: "توصيل خاص من مطار الأحساء الدولي (HOF) إلى الهفوف والمبرز",
        eyebrow: "التوصيل من المطار · الأحساء",
        answer: "التوصيل الخاص من مطار الأحساء هو سيارة بسائق وبحجز مسبق بين مطار الأحساء الدولي (HOF) والهفوف أو المبرز أو أي مكان آخر في الواحة. وتذكر مصادر عامة أن المطار يبعد نحو 17 إلى 20 كم جنوب غرب وسط الهفوف، أي 20 إلى 25 دقيقة بالسيارة. أرسل رقم رحلتك ووجهتك وتؤكد RideSaudi الإتاحة وعرض السعر.",
        summary: "استقبال وتوصيل بحجز مسبق في مطار الأحساء الدولي (HOF).",
        sections: [
          { h: "مطار صغير وطريق قصير", p: ["مطار الأحساء صغير وجدول رحلاته محدود، فالرحلات لا تتوفر في كل ساعة وكل يوم؛ فأكّد رحلتك مع شركة الطيران. والطريق إلى الهفوف قصير، والأرقام أعلاه تقريبية لاختلاف المصادر العامة وتباعد مدن الواحة."] },
          { h: "إلى أين يتجه القادمون من المطار", p: ["يتجه أغلب القادمين إلى فندق أو منزل في الهفوف أو المبرز، أو إلى جامعة الملك فيصل، أو إلى عنوان الأهل في إحدى قرى الواحة. وللقرية أو المزرعة أرسل الموقع على الخريطة. وإن أردت التوجه من المطار مباشرة إلى موقع تراثي قبل دخول الفندق فاذكر ذلك وأشر إلى حقائبك."] },
          { h: "مطار الأحساء أم مطار الدمام؟", p: ["في مطار الملك فهد الدولي قرب الدمام رحلات أكثر بكثير، ويصل إليه بعض زوار الأحساء ثم يكملون برًّا، في رحلة نحو 150 إلى 155 كم بحسب أرقام عامة. فقارن الرحلة المتاحة لك بالطريق الذي توفره؛ وتغطي صفحة الدمام إلى الأحساء خيار الطريق البري."] },
          { h: "المغادرة", p: ["أرسل موعد الرحلة وعنوان الاستلام ويُخطَّط وقت الاستلام بهامش كافٍ. والطريق من القرى البعيدة أطول منه من الهفوف، فاذكر مكان إقامتك بدقة."] },
        ],
        checklist: { h: "ما الذي تضيفه إلى طلب مطار الأحساء", items: ["وصول أم مغادرة، مع رقم الرحلة وموعدها", "الوجهة أو نقطة الاستلام بدقة: الهفوف أو المبرز أو قرية مع موقعها على الخريطة", "الركاب والحقائب", "أي توقف تريده في الطريق", "تاريخ توصيلة العودة إن عُرف"] },
        faqs: [
          { q: "ما رمز مطار الأحساء؟", a: "رمزه HOF. واسمه مطار الأحساء الدولي، ويُذكر أحيانًا باسم الهفوف." },
          { q: "كم يبعد مطار الأحساء عن الهفوف؟", a: "تذكر مصادر عامة نحو 17 إلى 20 كم عن وسط الهفوف، أي 20 إلى 25 دقيقة بالسيارة. اعتبر الرقم تقريبيًا." },
          { q: "هل أسافر جوًّا إلى الأحساء أم إلى الدمام؟", a: "يتوقف ذلك على الرحلات المتاحة. مطار الأحساء أقرب بكثير؛ ومطار الدمام فيه وجهات أكثر لكنه يبعد نحو 150 إلى 155 كم بالطريق." },
          { q: "هل توصلونني من مطار الأحساء إلى المبرز؟", a: "يمكنك طلب ذلك. أرسل العنوان وتفاصيل الرحلة؛ وتُؤكَّد الإتاحة في عرض السعر." },
        ],
      },
    },
  },
];
