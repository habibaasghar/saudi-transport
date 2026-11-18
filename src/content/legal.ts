import type { Locale } from "@/i18n/routing";

/**
 * Privacy Policy, Terms and Conditions and Contact page (EN + AR).
 *
 * OWNER / LEGAL REVIEW REQUIRED BEFORE DEPLOY: see docs/phase2/LEGAL_REVIEW_FLAGS.md.
 * Nothing here names a registered company, licence, address, jurisdiction or refund percentage, because none has
 * been supplied. Confirmed facts only: 24-hour cancellation window, payment by payment link / STC Pay / cash,
 * phone, WhatsApp and email in src/config/contact.ts.
 */
export type LegalSection = { h: string; p?: string[]; list?: string[] };
export type LegalCopy = { nav: string; title: string; description: string; h1: string; intro: string; sections: LegalSection[] };
export type LegalPage = { slug: "privacy-policy" | "terms-and-conditions" | "contact"; updated: string; copy: Record<Locale, LegalCopy> };

const U = "2026-11-19";

export const privacyPolicy: LegalPage = {
  slug: "privacy-policy",
  updated: U,
  copy: {
    en: {
      nav: "Privacy Policy",
      title: "Privacy Policy",
      description: "How RideSaudi collects, uses, shares and keeps the details you send in a quote request, and how you can ask to see, correct or delete them.",
      h1: "Privacy Policy",
      intro: "This policy explains what personal information RideSaudi collects when you ask for a private transfer quotation, how we use it, who it is shared with and the choices you have. We collect only what we need to answer your enquiry and arrange your journey.",
      sections: [
        {
          h: "Who we are",
          p: ["RideSaudi arranges pre-booked private transport in Saudi Arabia, in partnership with transport companies that provide the vehicles and drivers. In this policy, \"RideSaudi\", \"we\" and \"us\" mean the team that operates ridesaudi.com and answers your enquiries. You can reach us at any time using the contact details at the end of this page."],
        },
        {
          h: "Information we collect",
          p: ["We collect the information you give us when you send a quote request or contact us:"],
          list: [
            "Contact details: your name, WhatsApp or phone number and, if you give it, your email address.",
            "Journey details: service type, pickup and drop-off locations, travel date and time, one-way or return, number of passengers, luggage, child seats, vehicle preference and flight number for airport journeys.",
            "Anything you add in the special requirements box, so please do not include payment card details, passport numbers or other sensitive data there.",
            "Messages you send us by WhatsApp, email or phone, and our replies.",
            "Technical information needed to keep the form secure, such as the page the enquiry was sent from, the language you used and a scrambled (hashed) form of your IP address to detect abuse and duplicate submissions. We do not store your plain IP address with your enquiry.",
          ],
        },
        {
          h: "How we use your information",
          list: [
            "To read your enquiry, check availability and prepare a quotation.",
            "To contact you, by WhatsApp, phone or email, about your enquiry, quotation, confirmation and journey.",
            "To arrange your confirmed journey with a transport partner.",
            "To keep records of enquiries and bookings, handle complaints and support requests, and meet legal or accounting obligations.",
            "To protect the website against spam and misuse.",
            "To understand, in aggregate, which pages and buttons are used, so we can improve the website. We do not send your name, phone number, email or journey details to analytics tools.",
          ],
        },
        {
          h: "How inquiries are processed",
          p: ["When you submit the quote request, your details are saved securely and an alert is sent to the RideSaudi team. A team member reviews the enquiry and replies to you with a quotation, or asks for missing details. An enquiry is not a confirmed reservation: nothing is arranged for you until you have received our quotation and our written confirmation. See our Terms and Conditions for the full booking process."],
        },
        {
          h: "Sharing information with transport partners and service providers",
          p: ["We do not sell your personal information. We share it only where needed:"],
          list: [
            "Transport partners: once you accept a quotation, we pass the details a partner needs to carry out your journey, such as your name, a contact number, the pickup and drop-off points, date and time, number of passengers and luggage, flight number and any special requirements. We do not share more than the partner needs.",
            "Technology providers: companies that host the website, store enquiries and send our notification emails act on our behalf and may process data on servers outside Saudi Arabia.",
            "Authorities: where the law requires us to disclose information, or to protect the rights and safety of customers, drivers and others.",
          ],
        },
        {
          h: "Analytics and cookies",
          p: ["If website analytics is switched on, it counts page visits and clicks on the WhatsApp, phone, email and quote form buttons. It does not receive your name, phone number, email address, journey details or anything you type into the form. You can block analytics cookies in your browser settings without affecting your ability to request a quote."],
        },
        {
          h: "How long we keep your information",
          p: ["We keep enquiry and booking records only for as long as they are needed to answer you, deliver the journey, handle any question or complaint afterwards and meet legal or accounting requirements. When they are no longer needed we delete or anonymise them. If you want to know how long a specific record will be kept, ask us."],
        },
        {
          h: "Your privacy rights",
          p: ["Subject to applicable law, you can ask us to:"],
          list: [
            "tell you what personal information we hold about you and give you a copy;",
            "correct information that is wrong or incomplete;",
            "delete your information where we no longer need it;",
            "stop contacting you, or withdraw your consent to us using your details;",
            "raise a concern about how your information is handled.",
          ],
        },
        {
          h: "Security",
          p: ["The website is served over HTTPS, enquiries are stored in access-controlled systems, and only the RideSaudi team and the partners who need the details for your journey can see them. No online system is completely secure, so please send only the information we ask for."],
        },
        {
          h: "Children",
          p: ["The website is for adults who book transport. If a journey includes children, give us the number of passengers and any child seats you need, but do not enter children's personal data."],
        },
        {
          h: "Changes to this policy",
          p: ["We may update this policy when our services or the law change. The date at the top of the page shows when it was last reviewed."],
        },
        {
          h: "Contact us about privacy",
          p: ["To use any of your rights or ask a privacy question, contact RideSaudi by email or WhatsApp using the details below and tell us the name and phone number you used in your enquiry."],
        },
      ],
    },
    ar: {
      nav: "سياسة الخصوصية",
      title: "سياسة الخصوصية",
      description: "كيف تجمع RideSaudi البيانات التي ترسلها في طلب عرض السعر وتستخدمها وتشاركها وتحتفظ بها، وكيف يمكنك طلب الاطلاع عليها أو تصحيحها أو حذفها.",
      h1: "سياسة الخصوصية",
      intro: "توضح هذه السياسة ما المعلومات الشخصية التي تجمعها RideSaudi عند طلبك عرض سعر لتوصيل خاص، وكيف نستخدمها ومع من نشاركها وما الخيارات المتاحة لك. نجمع فقط ما نحتاج إليه للرد على طلبك وترتيب رحلتك.",
      sections: [
        {
          h: "من نحن",
          p: ["تُرتِّب RideSaudi نقلًا خاصًا بحجز مسبق في المملكة العربية السعودية، بالتعاون مع شركات نقل توفّر المركبات والسائقين. والمقصود بـ«RideSaudi» و«نحن» في هذه السياسة الفريق الذي يدير موقع ridesaudi.com ويرد على استفساراتك. ويمكنك التواصل معنا في أي وقت عبر بيانات التواصل في آخر الصفحة."],
        },
        {
          h: "المعلومات التي نجمعها",
          p: ["نجمع المعلومات التي تقدمها لنا عند إرسال طلب عرض السعر أو التواصل معنا:"],
          list: [
            "بيانات التواصل: اسمك ورقم واتساب أو الهاتف، وبريدك الإلكتروني إن ذكرته.",
            "تفاصيل الرحلة: نوع الخدمة، وموقعا الانطلاق والوصول، وتاريخ السفر ووقته، وذهاب فقط أو ذهاب وعودة، وعدد الركاب والحقائب ومقاعد الأطفال، والمركبة المفضلة، ورقم الرحلة الجوية في رحلات المطار.",
            "أي شيء تضيفه في خانة المتطلبات الخاصة، لذا نرجو ألا تكتب فيها بيانات بطاقات الدفع أو أرقام الجوازات أو أي بيانات حساسة أخرى.",
            "الرسائل التي ترسلها إلينا عبر واتساب أو البريد الإلكتروني أو الهاتف، وردودنا عليها.",
            "معلومات تقنية لازمة لحماية النموذج، مثل الصفحة التي أُرسل منها الطلب واللغة المستخدمة وصيغة مشفّرة (مُجزَّأة) من عنوان IP لرصد إساءة الاستخدام والإرسال المكرر. ولا نحتفظ بعنوان IP الصريح مع طلبك.",
          ],
        },
        {
          h: "كيف نستخدم معلوماتك",
          list: [
            "لقراءة طلبك والتحقق من الإتاحة وإعداد عرض السعر.",
            "للتواصل معك عبر واتساب أو الهاتف أو البريد الإلكتروني بشأن طلبك وعرض السعر والتأكيد والرحلة.",
            "لترتيب رحلتك المؤكدة مع أحد شركاء النقل.",
            "للاحتفاظ بسجلات الطلبات والحجوزات ومعالجة الشكاوى وطلبات الدعم والوفاء بالالتزامات النظامية والمحاسبية.",
            "لحماية الموقع من الرسائل المزعجة وإساءة الاستخدام.",
            "لفهم الصفحات والأزرار الأكثر استخدامًا بصورة إجمالية بهدف تحسين الموقع. ولا نرسل اسمك أو رقم هاتفك أو بريدك أو تفاصيل رحلتك إلى أدوات التحليلات.",
          ],
        },
        {
          h: "كيف تُعالَج الطلبات",
          p: ["عند إرسال طلب عرض السعر تُحفظ بياناتك بصورة آمنة ويصل تنبيه إلى فريق RideSaudi. يراجع أحد أفراد الفريق الطلب ويردّ عليك بعرض سعر أو يطلب منك ما ينقص من تفاصيل. إرسال الطلب لا يعني تأكيد الحجز: لا يُرتَّب لك شيء إلا بعد أن يصلك عرض السعر والتأكيد الكتابي منا. وتجد خطوات الحجز كاملة في الشروط والأحكام."],
        },
        {
          h: "مشاركة المعلومات مع شركاء النقل ومزوّدي الخدمات",
          p: ["لا نبيع معلوماتك الشخصية. ونشاركها فقط عند الحاجة:"],
          list: [
            "شركاء النقل: بعد قبولك عرض السعر نمرّر إلى الشريك البيانات التي يحتاج إليها لتنفيذ رحلتك، مثل اسمك ورقم للتواصل ونقطتي الانطلاق والوصول والتاريخ والوقت وعدد الركاب والحقائب ورقم الرحلة الجوية وأي متطلبات خاصة. ولا نشارك أكثر مما يحتاج إليه الشريك.",
            "مزوّدو التقنية: شركات تستضيف الموقع وتحفظ الطلبات وترسل رسائل التنبيه البريدية نيابة عنا، وقد تعالج البيانات على خوادم خارج المملكة.",
            "الجهات المختصة: عندما يوجب النظام علينا الإفصاح عن معلومات، أو لحماية حقوق العملاء والسائقين وغيرهم وسلامتهم.",
          ],
        },
        {
          h: "التحليلات وملفات الارتباط",
          p: ["إذا كانت تحليلات الموقع مفعّلة فإنها تحصي زيارات الصفحات والنقرات على أزرار واتساب والهاتف والبريد ونموذج طلب السعر. ولا تصلها اسمك أو رقم هاتفك أو بريدك أو تفاصيل رحلتك أو أي شيء تكتبه في النموذج. ويمكنك حظر ملفات ارتباط التحليلات من إعدادات متصفحك دون أن يؤثر ذلك على طلب عرض السعر."],
        },
        {
          h: "مدة الاحتفاظ بمعلوماتك",
          p: ["نحتفظ بسجلات الطلبات والحجوزات بالمدة اللازمة فقط للرد عليك وتنفيذ الرحلة ومعالجة أي استفسار أو شكوى لاحقة والوفاء بالمتطلبات النظامية والمحاسبية. وعندما لا نعود بحاجة إليها نحذفها أو نجعلها مجهولة الهوية. وإن أردت معرفة مدة الاحتفاظ بسجل بعينه فاسألنا."],
        },
        {
          h: "حقوقك في الخصوصية",
          p: ["وفق ما يسمح به النظام المعمول به، يمكنك أن تطلب منا:"],
          list: [
            "إخبارك بالمعلومات الشخصية التي نحتفظ بها عنك وتزويدك بنسخة منها؛",
            "تصحيح المعلومات الخاطئة أو الناقصة؛",
            "حذف معلوماتك متى لم نعد بحاجة إليها؛",
            "التوقف عن التواصل معك أو سحب موافقتك على استخدام بياناتك؛",
            "رفع ملاحظة أو شكوى بشأن طريقة التعامل مع معلوماتك.",
          ],
        },
        {
          h: "الأمان",
          p: ["يُقدَّم الموقع عبر اتصال HTTPS، وتُحفظ الطلبات في أنظمة محدودة الصلاحيات، ولا يطّلع عليها إلا فريق RideSaudi والشركاء الذين يحتاجون إلى البيانات لتنفيذ رحلتك. ولا يوجد نظام إلكتروني آمن بالكامل، لذا نرجو ألا ترسل إلا ما نطلبه منك."],
        },
        {
          h: "الأطفال",
          p: ["الموقع موجّه إلى البالغين الذين يحجزون النقل. وإذا كانت رحلتك تضم أطفالًا فاذكر عدد الركاب ومقاعد الأطفال المطلوبة، ولا تُدخل بيانات شخصية للأطفال."],
        },
        {
          h: "تعديل هذه السياسة",
          p: ["قد نحدّث هذه السياسة عند تغيّر خدماتنا أو الأنظمة. ويبيّن التاريخ في أعلى الصفحة آخر مراجعة لها."],
        },
        {
          h: "تواصل معنا بشأن الخصوصية",
          p: ["لممارسة أي من حقوقك أو طرح سؤال عن الخصوصية، تواصل مع RideSaudi عبر البريد الإلكتروني أو واتساب باستخدام البيانات أدناه، واذكر الاسم ورقم الهاتف اللذين استخدمتهما في طلبك."],
        },
      ],
    },
  },
};

export const termsAndConditions: LegalPage = {
  slug: "terms-and-conditions",
  updated: U,
  copy: {
    en: {
      nav: "Terms and Conditions",
      title: "Terms and Conditions",
      description: "How RideSaudi bookings work: enquiry versus confirmed reservation, quotations, availability, changes and cancellations, payment, delays and cross-border travel.",
      h1: "Terms and Conditions",
      intro: "These terms explain how booking a private transfer through RideSaudi works, from your first enquiry to your journey. By sending a quote request or accepting a quotation you agree to them. If anything in your written quotation or confirmation differs from these terms, the quotation or confirmation for your journey applies.",
      sections: [
        {
          h: "What RideSaudi does",
          p: ["RideSaudi arranges pre-booked private transport in Saudi Arabia. Every vehicle comes with a driver and is supplied by the transport partners RideSaudi books with; RideSaudi does not claim to own the vehicles. Journeys are private: the vehicle is for you and your party only, and RideSaudi does not sell shared seats."],
        },
        {
          h: "Enquiry versus confirmed reservation",
          p: ["Sending the quote request form, a WhatsApp message, an email or a call is an enquiry. It is not a booking, it does not reserve a vehicle and it does not oblige either side. Your journey becomes a confirmed reservation only when you have received a quotation from RideSaudi, you have accepted it, and RideSaudi has sent you a written confirmation."],
        },
        {
          h: "Quotations and validity",
          p: ["Every journey is quoted individually, based on the details you gave: route, date, time, number of passengers and luggage, vehicle, waiting time and any extras. Prices are not published on the website. A quotation is valid for the period stated in it. If your details change, or you accept after that period, the price and availability may change and we will tell you before you confirm."],
        },
        {
          h: "Availability",
          p: ["Vehicle category, route and date are subject to availability through our transport partners at the time you confirm. Choosing a vehicle in the form is a preference, not a guarantee. If the vehicle you asked for is not available, we will offer the closest suitable alternative and you decide whether to accept it."],
        },
        {
          h: "How a booking is confirmed",
          list: [
            "You send your journey details.",
            "RideSaudi reviews them and replies with a quotation, or asks for missing details.",
            "You accept the quotation.",
            "RideSaudi sends a written confirmation (by WhatsApp or email) with the route, date, pickup time, vehicle category, price and payment arrangement. The journey is booked only at this point.",
          ],
        },
        {
          h: "Your responsibilities",
          list: [
            "Give accurate details: pickup and drop-off points, date and time, passenger numbers, luggage, child seats and flight number.",
            "Tell us about any change as early as you can, and keep your phone reachable on the day.",
            "Be ready at the confirmed pickup point and time.",
            "Carry the identification and travel documents your journey requires.",
            "Request child seats and any special requirements in advance. They are provided only where confirmed.",
            "Do not carry unlawful or dangerous items, and treat the driver and vehicle with respect.",
          ],
        },
        {
          h: "Pickup and drop-off",
          p: ["Your confirmation states the pickup and drop-off points. For airport pickups we use the flight number you provide, and the meeting arrangement and any waiting time are set out in your quotation or confirmation. If you need a different point or an extra stop, ask before the journey so it can be confirmed; it may change the price."],
        },
        {
          h: "Changes and cancellations",
          p: ["You can cancel a confirmed booking free of charge at least 24 hours before the pickup time. Please tell us by WhatsApp or email and quote your name and journey details. To change the date, time, route or vehicle, contact us as early as possible; changes depend on availability and can change the price. Any charge or refund for a cancellation or change made less than 24 hours before pickup, or for a no-show, is set out in your quotation or confirmation, and we will tell you before you confirm."],
        },
        {
          h: "Delays and unforeseen circumstances",
          p: ["Road conditions, weather, checkpoints, closures, crowding in the Makkah and Madinah seasons, vehicle breakdowns and flight changes can affect a journey. Please allow extra time for connections. If something affects your journey we will contact you promptly and work with the driver or partner to find the best alternative, and extra waiting time or extra stops may be charged as stated in your confirmation. RideSaudi is not responsible for delays outside its reasonable control, to the extent the law allows."],
        },
        {
          h: "Payment",
          p: ["The price and when payment is due are stated in your quotation and confirmation. You can pay by payment link, STC Pay or cash. Only pay using the details in a message that comes from RideSaudi's official WhatsApp number or email shown on this website, and ask us if you are unsure."],
        },
        {
          h: "Cross-border journeys",
          p: ["Journeys from Saudi Arabia to Qatar, the UAE, Bahrain, Kuwait or other countries are quoted individually, and each one must be confirmed as possible for the date and route. Passports, visas, entry permits, vehicle and driver permissions and border procedures must be checked by the traveller with the official authorities. Border waiting times are outside our control, and RideSaudi cannot make a journey possible where entry is refused."],
        },
        {
          h: "Complaints and support",
          p: ["If something went wrong, tell us as soon as you can, ideally the same day, by WhatsApp or email with your name, date of journey and what happened. We will look into it with the partner involved and reply to you."],
        },
        {
          h: "Changes to these terms",
          p: ["We may update these terms. The version that applies to a booking is the one published on the date you accepted the quotation. The date at the top of the page shows when it was last reviewed."],
        },
      ],
    },
    ar: {
      nav: "الشروط والأحكام",
      title: "الشروط والأحكام",
      description: "كيف تعمل الحجوزات في RideSaudi: الفرق بين الطلب والحجز المؤكد، وعروض الأسعار والإتاحة والتعديل والإلغاء والدفع والتأخير والسفر عبر الحدود.",
      h1: "الشروط والأحكام",
      intro: "توضح هذه الشروط كيف يتم حجز توصيل خاص عبر RideSaudi، من أول طلب إلى يوم الرحلة. وبإرسالك طلب عرض سعر أو قبولك عرضًا فإنك توافق عليها. وإذا اختلف شيء في عرض السعر أو التأكيد الكتابي الخاص برحلتك عن هذه الشروط، فالمعتمد هو عرض السعر أو التأكيد.",
      sections: [
        {
          h: "ما الذي تقدمه RideSaudi",
          p: ["تُرتِّب RideSaudi نقلًا خاصًا بحجز مسبق في المملكة العربية السعودية. وكل مركبة تأتي مع سائق، ويوفّرها شركاء النقل الذين تحجز معهم RideSaudi، ولا تدّعي RideSaudi أنها تملك المركبات. والرحلات خاصة: المركبة لك ولمرافقيك فقط، ولا تبيع RideSaudi مقاعد مشتركة."],
        },
        {
          h: "الطلب والحجز المؤكد",
          p: ["إرسال نموذج طلب السعر أو رسالة واتساب أو بريد إلكتروني أو الاتصال هاتفيًا يُعدّ طلبًا واستفسارًا فقط. فهو ليس حجزًا ولا يحجز مركبة ولا يُلزم أيًّا من الطرفين. ولا تصبح رحلتك حجزًا مؤكدًا إلا بعد أن يصلك عرض سعر من RideSaudi وتقبله وترسل لك RideSaudi تأكيدًا كتابيًا."],
        },
        {
          h: "عروض الأسعار ومدة سريانها",
          p: ["تُسعَّر كل رحلة على حدة بحسب ما ذكرته من تفاصيل: المسار والتاريخ والوقت وعدد الركاب والحقائب والمركبة ومدة الانتظار وأي إضافات. ولا تُنشر الأسعار على الموقع. ويسري عرض السعر للمدة المذكورة فيه. فإذا تغيّرت تفاصيلك أو قبلت العرض بعد انتهاء مدته فقد يتغير السعر والإتاحة، وسنخبرك قبل أن تؤكد."],
        },
        {
          h: "الإتاحة",
          p: ["فئة المركبة والمسار والتاريخ خاضعة للإتاحة لدى شركاء النقل وقت تأكيدك. واختيارك مركبة في النموذج تفضيل وليس ضمانًا. وإذا لم تتوفر المركبة المطلوبة فسنقترح أقرب بديل مناسب، ولك أن تقبله أو لا تقبله."],
        },
        {
          h: "كيف يتم تأكيد الحجز",
          list: [
            "ترسل تفاصيل رحلتك.",
            "تراجعها RideSaudi وتردّ عليك بعرض سعر، أو تطلب ما ينقص من تفاصيل.",
            "تقبل عرض السعر.",
            "ترسل لك RideSaudi تأكيدًا كتابيًا (عبر واتساب أو البريد الإلكتروني) يتضمن المسار والتاريخ ووقت الاستلام وفئة المركبة والسعر وترتيبات الدفع. ولا يُعدّ الحجز قائمًا إلا عند هذه الخطوة.",
          ],
        },
        {
          h: "مسؤولياتك",
          list: [
            "تقديم بيانات دقيقة: نقطتا الانطلاق والوصول، والتاريخ والوقت، وعدد الركاب والحقائب ومقاعد الأطفال، ورقم الرحلة الجوية.",
            "إبلاغنا بأي تغيير في أقرب وقت، وإبقاء هاتفك متاحًا يوم الرحلة.",
            "الجاهزية عند نقطة الاستلام ووقتها المؤكدين.",
            "حمل الهوية ووثائق السفر التي تتطلبها رحلتك.",
            "طلب مقاعد الأطفال وأي متطلبات خاصة مسبقًا، فلا تُوفَّر إلا إذا أُكِّدت.",
            "عدم حمل أي أغراض محظورة أو خطرة، واحترام السائق والمركبة.",
          ],
        },
        {
          h: "الاستلام والتوصيل",
          p: ["يوضح التأكيد نقطتي الاستلام والتوصيل. وفي الاستلام من المطار نعتمد على رقم الرحلة الذي تزودنا به، ويُبيَّن ترتيب اللقاء وأي مدة انتظار في عرض السعر أو التأكيد. وإذا احتجت نقطة مختلفة أو توقفًا إضافيًا فاطلبه قبل الرحلة ليُؤكَّد، وقد يؤثر ذلك في السعر."],
        },
        {
          h: "التعديل والإلغاء",
          p: ["يمكنك إلغاء الحجز المؤكد دون رسوم قبل موعد الاستلام بـ24 ساعة على الأقل. أبلغنا عبر واتساب أو البريد الإلكتروني مع ذكر اسمك وتفاصيل رحلتك. ولتعديل التاريخ أو الوقت أو المسار أو المركبة تواصل معنا في أقرب وقت؛ فالتعديل يخضع للإتاحة وقد يغيّر السعر. وأي رسوم أو استرداد عند الإلغاء أو التعديل قبل أقل من 24 ساعة من الاستلام، أو عند عدم الحضور، فيُبيَّن في عرض السعر أو التأكيد، وسنخبرك به قبل أن تؤكد."],
        },
        {
          h: "التأخير والظروف الطارئة",
          p: ["قد تؤثر حالة الطرق والطقس ونقاط التفتيش والإغلاقات والازدحام في مواسم مكة المكرمة والمدينة المنورة والأعطال وتغيّر مواعيد الطيران في الرحلة. نرجو أن تترك وقتًا إضافيًا للرحلات المتصلة. وإذا حدث ما يؤثر في رحلتك فسنتواصل معك سريعًا ونعمل مع السائق أو الشريك لإيجاد أفضل بديل، وقد يُحتسب وقت انتظار أو توقف إضافي بحسب ما ورد في التأكيد. ولا تتحمل RideSaudi مسؤولية التأخير الخارج عن سيطرتها المعقولة، وذلك بالقدر الذي يسمح به النظام."],
        },
        {
          h: "الدفع",
          p: ["يُبيَّن السعر وموعد استحقاق الدفع في عرض السعر والتأكيد. ويمكنك الدفع عبر رابط دفع أو STC Pay أو نقدًا. ولا تدفع إلا وفق بيانات واردة في رسالة من رقم واتساب أو بريد RideSaudi الرسميين المعروضين في هذا الموقع، واسألنا إن كنت غير متأكد."],
        },
        {
          h: "الرحلات عبر الحدود",
          p: ["تُسعَّر الرحلات من السعودية إلى قطر أو الإمارات أو البحرين أو الكويت أو غيرها كل واحدة على حدة، ويجب تأكيد إمكانية كل رحلة لتاريخها ومسارها. وعلى المسافر التحقق من الجوازات والتأشيرات وتصاريح الدخول وأذونات المركبة والسائق وإجراءات المنفذ لدى الجهات الرسمية. وأوقات الانتظار في المنافذ خارجة عن سيطرتنا، ولا تستطيع RideSaudi إتمام رحلة يُرفض فيها الدخول."],
        },
        {
          h: "الشكاوى والدعم",
          p: ["إذا حدث ما يستدعي الشكوى فأبلغنا في أقرب وقت، ويفضّل في اليوم نفسه، عبر واتساب أو البريد الإلكتروني مع ذكر اسمك وتاريخ الرحلة وما جرى. وسنراجع الأمر مع الشريك المعني ونرد عليك."],
        },
        {
          h: "تعديل هذه الشروط",
          p: ["قد نحدّث هذه الشروط. والنسخة السارية على الحجز هي المنشورة في تاريخ قبولك عرض السعر. ويبيّن التاريخ في أعلى الصفحة آخر مراجعة لها."],
        },
      ],
    },
  },
};

export const contactPage: LegalPage = {
  slug: "contact",
  updated: U,
  copy: {
    en: {
      nav: "Contact",
      title: "Contact RideSaudi: Quotes, Bookings and Support",
      description: "Contact RideSaudi on WhatsApp, phone or email to request a private transfer quotation or get help with an existing enquiry, in English or Arabic.",
      h1: "Contact RideSaudi",
      intro: "The fastest way to get a private transfer quotation is the quote request on our website. You can also write to us on WhatsApp, call, or email, in English or Arabic.",
      sections: [
        {
          h: "Ways to reach us",
          p: ["Use WhatsApp or the quote request for new journeys, because they let you send the route, date and passenger numbers in one message."],
        },
        {
          h: "What to send with a new enquiry",
          list: [
            "Service type, pickup and drop-off locations",
            "Travel date and pickup time, and return details if you need them",
            "Number of passengers and pieces of luggage, and any child seats",
            "Vehicle preference: sedan, GMC Yukon or Hyundai Staria, or ask us to recommend one",
            "Flight number for airport journeys",
            "Your name and WhatsApp number",
          ],
        },
        {
          h: "What happens next",
          p: ["The RideSaudi team reviews your enquiry and replies with a quotation or asks for missing details. Your journey is confirmed only after you accept the quotation and receive our written confirmation. Read the Terms and Conditions for the full process and the Privacy Policy for how your details are handled."],
        },
        {
          h: "Existing booking or complaint",
          p: ["Message us on WhatsApp or email with your name, journey date and route. For changes or cancellations, contact us at least 24 hours before pickup where possible."],
        },
      ],
    },
    ar: {
      nav: "اتصل بنا",
      title: "تواصل مع RideSaudi: عروض الأسعار والحجز والدعم",
      description: "تواصل مع RideSaudi عبر واتساب أو الهاتف أو البريد الإلكتروني لطلب عرض سعر لتوصيل خاص أو للمساعدة في طلب قائم، بالعربية أو الإنجليزية.",
      h1: "تواصل مع RideSaudi",
      intro: "أسرع طريقة للحصول على عرض سعر لتوصيل خاص هي نموذج طلب السعر في موقعنا. ويمكنك أيضًا مراسلتنا عبر واتساب أو الاتصال أو البريد الإلكتروني، بالعربية أو الإنجليزية.",
      sections: [
        {
          h: "طرق التواصل",
          p: ["استخدم واتساب أو نموذج طلب السعر للرحلات الجديدة، فهما يتيحان لك إرسال المسار والتاريخ وعدد الركاب في رسالة واحدة."],
        },
        {
          h: "ما الذي ترسله مع الطلب الجديد",
          list: [
            "نوع الخدمة وموقعا الانطلاق والوصول",
            "تاريخ السفر ووقت الاستلام، وتفاصيل العودة إن لزمت",
            "عدد الركاب والحقائب، وأي مقاعد أطفال",
            "المركبة المفضلة: سيدان أو جمس يوكن أو هيونداي ستاريا، أو اطلب منا أن نقترح لك",
            "رقم الرحلة الجوية في رحلات المطار",
            "اسمك ورقم واتساب الخاص بك",
          ],
        },
        {
          h: "ماذا يحدث بعد ذلك",
          p: ["يراجع فريق RideSaudi طلبك ويرد عليك بعرض سعر أو يطلب ما ينقص من تفاصيل. ولا تتأكد رحلتك إلا بعد قبولك عرض السعر ووصول التأكيد الكتابي منا. اطّلع على الشروط والأحكام لمعرفة الخطوات كاملة، وعلى سياسة الخصوصية لمعرفة كيفية التعامل مع بياناتك."],
        },
        {
          h: "حجز قائم أو شكوى",
          p: ["راسلنا عبر واتساب أو البريد الإلكتروني مع ذكر اسمك وتاريخ الرحلة والمسار. وللتعديل أو الإلغاء تواصل معنا قبل الاستلام بـ24 ساعة على الأقل متى أمكن."],
        },
      ],
    },
  },
};

export const legalPages: LegalPage[] = [privacyPolicy, termsAndConditions, contactPage];
export const getLegalPage = (slug: string) => legalPages.find((p) => p.slug === slug);
