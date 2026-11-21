import type { BlogPost } from "./types";

const S = "services";
const D = "2026-11-18";

/**
 * Guide A2: how to book a private car with driver (process intent; the service intent stays on
 * services/chauffeur-services and the transfer hubs).
 * Facts used: the enquiry form's real fields and messages (messages/*.json "form"), the enquiry-quotation-
 * confirmation model, and the owner-confirmed policies (cancellation at least 24 hours before pickup;
 * payment link, STC Pay or cash). Nothing is promised about reply times, lead times, waiting time,
 * tolls, flight tracking or availability; those appear only as questions to ask.
 */
export const howToBookPost: BlogPost = {
  slug: "how-to-book-private-car-with-driver-saudi-arabia",
  published: D,
  updated: D,
  links: [
    `${S}/chauffeur-services`,
    `${S}/airport-transfers`,
    `${S}/intercity-transfers`,
    `${S}/umrah-transport`,
    "fleet",
    `${S}/airport-transfers/private-airport-pickup`,
    `${S}/special-transportation/bilingual-chauffeur`,
    `${S}/special-transportation/senior-friendly-transportation`,
  ],
  copy: {
    en: {
      nav: "How to book a private car with driver",
      title: "How to Book a Private Car with Driver in KSA",
      description: "A step-by-step guide to booking a private car with a driver in Saudi Arabia: what to send, how to read the quotation, questions to ask, paying and changes.",
      h1: "How to book a private car with a driver in Saudi Arabia, step by step",
      answer:
        "To book a private car with a driver in Saudi Arabia, send the pickup and drop-off, date and time, number of passengers and bags, and your vehicle preference. You then receive a quotation naming the vehicle category and the price. The booking is confirmed only when you accept it. Pay by payment link, STC Pay or cash; you can cancel at least 24 hours before pickup.",
      summary: "What to send, what the quotation should tell you, the questions worth asking, and what happens after you confirm.",
      sections: [
        {
          h: "Before you enquire: decide the shape of the journey",
          p: [
            "Most delays in booking come from an enquiry that leaves the important details open. Decide three things first. Is it one transfer from A to B, a car and driver for a number of hours, or several legs over a few days? Do you know the exact pickup and drop-off addresses, including hotel names? And how many people and bags are really travelling?",
            "If the trip has several legs, such as Jeddah airport to Makkah, then Makkah to Madinah, then Madinah to the airport, send them together. They are quoted as one plan, which keeps the timings between legs realistic.",
          ],
        },
        {
          h: "Step 1: send the enquiry",
          p: [
            "You can enquire through the form on any page or by WhatsApp. The form asks for the details below, and each one changes the quotation, so fill in what you know and use the notes box for the rest. When you send it you see a reference number. An enquiry is not a reservation: nothing is booked at this stage.",
          ],
          list: [
            "Service: airport transfer, intercity transfer, Umrah transport, hourly chauffeur or another option",
            "Pickup and drop-off locations",
            "Date and time, and whether it is one way or a return, with the return date and time",
            "Passengers and pieces of luggage",
            "Vehicle preference: sedan, GMC Yukon, Hyundai Staria, or ask for a recommendation",
            "Flight number for airport journeys",
            "Anything else in the notes: child seats, mobility needs, a language preference, a stop on the way",
          ],
        },
        {
          h: "Step 2: read the quotation carefully",
          p: [
            "The quotation should tell you what you are agreeing to before you commit. Check that it names the vehicle category, the pickup point and time, the destination, the price and what that price includes. If you asked for a return leg or a stop on the way, check that it is listed.",
            "If anything you need is not written down, ask before you accept. A detail agreed in writing is far easier to rely on than one mentioned in passing.",
          ],
        },
        {
          h: "Questions worth asking before you accept",
          p: ["These are the questions travellers most often wish they had asked. The answers should be part of your quotation:"],
          list: [
            "Is the vehicle reserved for our party only? (At RideSaudi it always is; elsewhere, check.)",
            "What happens if my flight is delayed, and how is waiting time handled?",
            "Will the car fit everyone and every bag, including pushchairs and Zamzam water?",
            "Where exactly will the driver meet us, and how do we contact the driver on the day?",
            "Can the driver stop on the way, for example at a miqat or for prayer?",
            "What happens if we need to change the time or date?",
          ],
        },
        {
          h: "Step 3: confirm and pay",
          p: [
            "Accept the quotation to confirm the booking. Payment is by payment link, STC Pay or cash. If your plans change, you can cancel at least 24 hours before pickup. Keep your reference number and the quotation together, because they are the record of what was agreed.",
          ],
        },
        {
          h: "Changing a confirmed booking",
          p: [
            "Tell us as early as you can if a time, address or passenger number changes. A change can affect the vehicle and the driver's schedule, so it is reconfirmed rather than assumed. For airport journeys, a new flight number matters more than anything else.",
          ],
        },
        {
          h: "On the day of travel",
          p: [
            "Keep the phone number you gave switched on and reachable on WhatsApp, because that is how the driver and the booking team contact you. Near the Haram in Makkah and the Prophet's Mosque in Madinah, vehicle access can be restricted, so be ready to walk a short distance to the agreed pickup point. Have your bags packed and your group together a few minutes before the pickup time.",
          ],
        },
        {
          h: "Warning signs, wherever you book",
          p: ["Whoever you book with, be cautious if you see any of these:"],
          list: [
            "No written quotation, or a price with nothing said about what it includes",
            "A 'private' car that turns out to be a shared seat or a car collecting other passengers",
            "A vehicle that is never named, even as a category",
            "Pressure to pay before the pickup point, time and vehicle are agreed",
          ],
        },
      ],
      table: {
        h: "What to send, and why it matters",
        head: ["Detail", "Why it matters"],
        rows: [
          ["Exact pickup and drop-off", "Sets the route and distance; hotel names help near the Haram where access is restricted"],
          ["Date and time", "Availability is confirmed for a specific date and time"],
          ["Passengers and bags", "Decides the vehicle: a sedan, a GMC Yukon or a Hyundai Staria"],
          ["One way or return", "A return leg is quoted with the outbound journey"],
          ["Flight number", "Lets the airport pickup be planned around your actual arrival"],
          ["Special needs", "Child seats, mobility support or a language preference are confirmed per booking"],
        ],
      },
      faqs: [
        { q: "Is my enquiry a confirmed booking?", a: "No. An enquiry asks for a quotation. The booking is confirmed only when you accept the quotation." },
        { q: "Can I book by WhatsApp?", a: "Yes. You can send the same details by WhatsApp instead of the form." },
        { q: "How early should I book?", a: "As early as you can, and earlier still for busy periods such as Ramadan and the Hajj season. Availability for your date is confirmed in the quotation." },
        { q: "Are prices published?", a: "No. Each journey is quoted individually, because the price depends on the route, date, time and vehicle." },
        { q: "How do I pay, and can I cancel?", a: "Payment is by payment link, STC Pay or cash. You can cancel at least 24 hours before pickup." },
        { q: "Can I book a return journey at the same time?", a: "Yes. Choose a return trip in the form and add the return date and pickup time." },
      ],
    },
    ar: {
      nav: "كيف تحجز سيارة مع سائق",
      title: "كيف تحجز سيارة مع سائق في السعودية: خطوة بخطوة",
      description: "دليل خطوة بخطوة لحجز سيارة خاصة مع سائق في السعودية: ما الذي ترسله، وكيف تقرأ عرض السعر، والأسئلة التي تطرحها، والدفع والتعديل.",
      h1: "كيف تحجز سيارة خاصة مع سائق في السعودية، خطوة بخطوة",
      answer:
        "لحجز سيارة خاصة مع سائق في السعودية، أرسل نقطة الاستلام والوجهة والتاريخ والوقت وعدد الركاب والحقائب والسيارة التي تفضلها. فيصلك عرض سعر يذكر فئة السيارة والسعر، ولا يُؤكَّد الحجز إلا عند قبولك له. والدفع عبر رابط الدفع أو STC Pay أو نقدًا، ويمكنك الإلغاء قبل موعد الاستلام بـ24 ساعة على الأقل.",
      summary: "ما الذي ترسله، وما الذي ينبغي أن يوضحه عرض السعر، والأسئلة المهمة، وما يحدث بعد التأكيد.",
      sections: [
        {
          h: "قبل الطلب: حدّد شكل رحلتك",
          p: [
            "معظم التأخير في الحجز سببه طلب يترك التفاصيل المهمة مفتوحة. فحدّد ثلاثة أمور أولًا: هل هي توصيلة واحدة من نقطة إلى أخرى، أم سيارة وسائق لعدد من الساعات، أم عدة مراحل على مدى أيام؟ وهل تعرف عنوان الاستلام والوجهة بدقة، ومنها أسماء الفنادق؟ وكم عدد المسافرين والحقائب فعلًا؟",
            "وإن كانت الرحلة عدة مراحل، مثل مطار جدة إلى مكة ثم مكة إلى المدينة ثم المدينة إلى المطار، فأرسلها معًا. فهي تُسعَّر خطةً واحدة، وهذا يجعل المواعيد بين المراحل واقعية.",
          ],
        },
        {
          h: "الخطوة الأولى: أرسل الطلب",
          p: [
            "يمكنك الطلب عبر النموذج في أي صفحة أو عبر واتساب. ويطلب النموذج التفاصيل التالية، وكل واحدة منها تغيّر عرض السعر، فاملأ ما تعرفه واكتب الباقي في خانة الملاحظات. وعند الإرسال يظهر لك رقم مرجعي. والطلب ليس حجزًا، فلا يُحجز شيء في هذه المرحلة.",
          ],
          list: [
            "نوع الخدمة: توصيل من المطار أو بين المدن أو للعمرة أو سائق بالساعة أو غير ذلك",
            "موقع الاستلام وموقع الوصول",
            "التاريخ والوقت، وهل الرحلة ذهاب فقط أم ذهاب وعودة مع تاريخ العودة ووقتها",
            "عدد الركاب وعدد الحقائب",
            "السيارة المفضلة: سيدان أو جمس يوكن أو هيونداي ستاريا، أو اطلب أن نقترح لك",
            "رقم الرحلة الجوية في مشاوير المطار",
            "أي شيء آخر في الملاحظات: مقاعد أطفال، أو احتياجات حركة، أو لغة السائق، أو توقف في الطريق",
          ],
        },
        {
          h: "الخطوة الثانية: اقرأ عرض السعر بعناية",
          p: [
            "ينبغي أن يوضح عرض السعر ما الذي توافق عليه قبل أن تلتزم. تأكد أنه يذكر فئة السيارة ونقطة الاستلام وموعده والوجهة والسعر وما يشمله. وإن طلبت رحلة عودة أو توقفًا في الطريق فتأكد أنه مذكور.",
            "وإن لم يُكتب شيء تحتاجه فاسأل قبل القبول، فالتفصيل المتفق عليه كتابةً أوثق بكثير مما يُذكر عابرًا.",
          ],
        },
        {
          h: "أسئلة تستحق أن تطرحها قبل القبول",
          p: ["هذه الأسئلة التي يتمنى المسافرون غالبًا لو طرحوها، وينبغي أن تكون إجاباتها في عرض السعر:"],
          list: [
            "هل السيارة محجوزة لنا وحدنا؟ (في RideSaudi هي كذلك دائمًا، وفي غيرها تأكد)",
            "ماذا يحدث إذا تأخرت رحلتي الجوية، وكيف يُحتسب الانتظار؟",
            "هل تتسع السيارة للجميع ولكل الحقائب، ومنها عربات الأطفال وماء زمزم؟",
            "أين سيستقبلنا السائق تحديدًا، وكيف نتواصل معه يوم الرحلة؟",
            "هل يمكن التوقف في الطريق، عند الميقات مثلًا أو للصلاة؟",
            "ماذا يحدث إذا احتجنا إلى تغيير الوقت أو التاريخ؟",
          ],
        },
        {
          h: "الخطوة الثالثة: أكّد وادفع",
          p: [
            "اقبل عرض السعر لتأكيد الحجز. والدفع عبر رابط الدفع أو STC Pay أو نقدًا. وإن تغيرت خطتك فيمكنك الإلغاء قبل موعد الاستلام بـ24 ساعة على الأقل. واحتفظ بالرقم المرجعي وعرض السعر معًا، فهما سجل ما اتُّفق عليه.",
          ],
        },
        {
          h: "تعديل حجز مؤكَّد",
          p: [
            "أخبرنا في أقرب وقت إن تغيّر موعد أو عنوان أو عدد الركاب. فالتعديل قد يؤثر في السيارة وجدول السائق، لذلك يُعاد تأكيده ولا يُفترض. وفي مشاوير المطار يكون رقم الرحلة الجديد أهم من أي شيء آخر.",
          ],
        },
        {
          h: "يوم الرحلة",
          p: [
            "أبقِ رقم الهاتف الذي أعطيته متاحًا وعلى واتساب، فهو وسيلة تواصل السائق وفريق الحجز معك. وقرب الحرم في مكة والمسجد النبوي في المدينة قد يُقيَّد دخول السيارات، فكن مستعدًا لمشي قصير إلى نقطة الاستلام المتفق عليها. وجهّز حقائبك واجمع مجموعتك قبل موعد الاستلام ببضع دقائق.",
          ],
        },
        {
          h: "علامات تحذير، أينما حجزت",
          p: ["أيًّا كانت الجهة التي تحجز معها، كن حذرًا إذا رأيت شيئًا من هذا:"],
          list: [
            "لا عرض سعر مكتوب، أو سعر دون ذكر ما يشمله",
            "سيارة توصف بأنها خاصة ثم يتبيّن أنها مقعد مشترك أو سيارة تجمع ركابًا آخرين",
            "سيارة لا يُذكر نوعها ولو بالفئة",
            "ضغط عليك للدفع قبل الاتفاق على نقطة الاستلام والموعد والسيارة",
          ],
        },
      ],
      table: {
        h: "ما الذي ترسله، ولماذا يهم",
        head: ["التفصيل", "لماذا يهم"],
        rows: [
          ["الاستلام والوجهة بدقة", "يحدد المسار والمسافة، وأسماء الفنادق تساعد قرب الحرم حيث يُقيَّد الدخول"],
          ["التاريخ والوقت", "تُؤكَّد الإتاحة لتاريخ ووقت محددين"],
          ["الركاب والحقائب", "يحدد السيارة: سيدان أو جمس يوكن أو هيونداي ستاريا"],
          ["ذهاب فقط أم ذهاب وعودة", "تُسعَّر رحلة العودة مع رحلة الذهاب"],
          ["رقم الرحلة الجوية", "يتيح تخطيط الاستقبال من المطار على وقت وصولك الفعلي"],
          ["الاحتياجات الخاصة", "تُؤكَّد مقاعد الأطفال ودعم الحركة ولغة السائق لكل حجز"],
        ],
      },
      faqs: [
        { q: "هل طلبي حجز مؤكَّد؟", a: "لا. الطلب يعني أنك تطلب عرض سعر، ولا يُؤكَّد الحجز إلا عند قبولك للعرض." },
        { q: "هل يمكنني الحجز عبر واتساب؟", a: "نعم. يمكنك إرسال التفاصيل نفسها عبر واتساب بدل النموذج." },
        { q: "متى ينبغي أن أحجز؟", a: "في أبكر وقت ممكن، وأبكر من ذلك في المواسم المزدحمة مثل رمضان وموسم الحج. وتُؤكَّد الإتاحة لتاريخك في عرض السعر." },
        { q: "هل الأسعار منشورة؟", a: "لا. تُسعَّر كل رحلة على حدة لأن السعر يعتمد على المسار والتاريخ والوقت والسيارة." },
        { q: "كيف أدفع، وهل يمكنني الإلغاء؟", a: "الدفع عبر رابط الدفع أو STC Pay أو نقدًا، ويمكنك الإلغاء قبل موعد الاستلام بـ24 ساعة على الأقل." },
        { q: "هل يمكنني حجز رحلة العودة في الوقت نفسه؟", a: "نعم. اختر رحلة ذهاب وعودة في النموذج وأضف تاريخ العودة ووقت الاستلام." },
      ],
    },
  },
};
