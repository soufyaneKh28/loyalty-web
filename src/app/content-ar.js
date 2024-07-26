const {
  Marketing,
  strategy,
  support,
  memberTeam,
  message,
  sou,
  innov1,
  project,
  projectDe,
  soufyane1,
  soufyane,
  soufyane2,
  soufyane3,
} = require("../../public");





async function getData() {
  const res = await fetch(
    `https://seenfox.com/api/get_data.php?actions=client&lang_code=ar`,
    { cache: "no-store" }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getCounterData() {
  const res = await fetch(
    `https://seenfox.com/api/get_data.php?actions=counter&lang_code=en`
    // { cache: "no-store" }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getTeamData() {
  const res = await fetch(
    `https://seenfox.com/api/get_data.php?actions=team,logo&lang_code=ar`,
    { cache: "no-store" }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getPreferenceData() {
  const res = await fetch(
    `https://seenfox.com/api/get_data.php?actions=preference&lang_code=ar`,
    { cache: "no-store" }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function getServicesData() {
  const res = await fetch(
    `https://seenfox.com/api/get_data.php?actions=service&lang_code=ar`,
    { cache: "no-store" }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function getProjectsData() {
  const res = await fetch(
    `https://seenfox.com/api/get_data.php?actions=projects&lang_code=en`,
    { cache: "no-store" }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getInnovationData() {
  const res = await fetch(
    `https://seenfox.com/api/get_data.php?actions=innovations&lang_code=ar`,
    { cache: "no-store" }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getBlogsData() {
  const res = await fetch(
    `https://seenfox.com/api/get_data.php?actions=blogs&lang_code=ar`,
    { cache: "no-store" }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const datafetch = await getData();
const team = await getTeamData();
const counter = await getCounterData();
const preference = await getPreferenceData();
const services = await getServicesData();
const projects = await getProjectsData();
const innovations = await getInnovationData();
const blogs = await getBlogsData();
// console.log(services);

const data = {
  heroServices: {
    title: ` حلول رقمية شاملة`,
    description:
      "شركة تجارية تأسست في عام 2013، متخصصة في تطوير العلامات التجارية والتسويق الرقمي والبرمجة. أنشأنا فرعًا في تركيا في عام 2014 وأصبحنا شركة رسمية بموجب القانون التركي للشركات التسويقية في عام 2020. بالإضافة إلى ذلك، لدينا فروع في دبي، الإمارات العربية المتحدة، والولايات المتحدة الأمريكية.",
    cta: "اتصل بنا",
  },
  heroAbout: {
    title: `الكشف عن رحلة وكالتنا`,
    description:
      "تأسست لويلتي في عام 2013، وهي متخصصة في تطوير العلامات التجارية والتسويق الرقمي والبرمجة. مع فروع في تركيا ودبي والولايات المتحدة الأمريكية، نحن ملتزمون بنجاحك",
    cta: "ابدأ الآن",
    items: {
      message: {
        title: "رسالتنا",
        description:
          "مساعدة عملائنا على تحقيق أفضل نمو نحو الاستقرار من خلال التسويق الذكي والإبداعي المختلط باستراتيجية واضحة.",
      },
      vision: {
        title: "رؤيتنا",
        description:
          "مساعدة عملائنا على تحقيق أفضل نمو نحو الاستقرار من خلال التسويق الذكي والإبداعي المختلط باستراتيجية واضحة.",
      },
      features: {
        title: "ميزاتنا",
        description: "خبرة أكاديمية - احترافية - عمل جماعي - انتشار",
      },
    },
  },

  services: {
    smallTitle: "ماذا نفعل؟",
    title: "خدماتنا",
    description: `لوريم إيبسوم دولار سيت أميت كونسيكتيتور. سيد إجيستاس أديبسكينج سيد
    أك سيد. أنين دونك نولا سوليسيتودين`,
    servicesItems: services.service,
  },
  strategy: {
    smallTitle: "سير العمل",
    title: "استراتيجيتنا التجارية",
    description: `من تحسين هوية علامتك التجارية وتشغيل الحملات إلى تعزيز وجودك الرقمي، نقوم بكل ذلك`,
    items: {
      item1: {
        title: "البحث والتحليل",
        description:
          "لوريم إيبسوم دولار سيت أميت كونسيكتيتور. كورسوس يو ننك التريسيز سابين.",
        num: "01",
      },
      item2: {
        title: "التخطيط",
        description:
          "لوريم إيبسوم دولار سيت أميت كونسيكتيتور. كورسوس يو ننك التريسيز سابين.",
        num: "02",
      },
      item3: {
        title: "التنفيذ",
        description:
          "لوريم إيبسوم دولار سيت أميت كونسيكتيتور. كورسوس يو ننك التريسيز سابين.",
        num: "03",
      },
    },
  },
  features: {
    smallTitle: "مميزاتنا",
    title: "أفضل شركة في اسطنبول",
    description: `نحن الأفضل لأننا نمزج بين التسويق والبرمجة والتصميم المتقن للحصول على أفضل النتائج. بعد تطوير هوية علامتك التجارية الخاصة، 
    نساعدك على نمو علامتك التجارية من خلال إعداد حملات تسويقية عبر وسائل التواصل الاجتماعي ومحركات البحث.
    
    بالتوازي، نقوم بتطوير موقع الويب الخاص بك بالإضافة إلى التطبيقات والبرامج لعلاقات العملاء والمبيعات والمحاسبة.`,
    items: [
      {
        icon: strategy,
        title: "خطط ونصائح",
      },
      {
        icon: support,
        title: "دعم 24/7",
      },
      {
        icon: strategy,
        title: "أفكار جديدة",
      },
    ],
  },
  callto: {
    title: `نمو عملك اليوم`,
    subTitle: `دع فريقنا يساعد عملك`,
    btn: "إرسال",
  },
  stats: {
    smallTitle: "من نحن؟",
    title: "ينمو عملك معنا",
    description: `لوريم إيبسوم دولار سيت أميت كونسيكتيتور. 
    سيد إجيستاس أديبسكينج سيد أك سيد. أنين دونك نولا سوليسيتودين`,
    numbers: {
      project: `مشروع ناجح`,
      client: `عميل سعيد`,
      team: `عضو الفريق`,
    },
  },
  members: {
    smallTitle: "فريقنا",
    title: "تعرف على فريقنا",
    description: `لوريم إيبسوم دولار سيت أميت كونسيكتيتور. 
    سيد إجيستاس أديبسكينج سيد أك سيد. أنين دونك نولا سوليسيتودين `,
    btn: "انضم إلى فريقنا",

    items: team.team,
  },
  partners: {
    smallTitle: "شركاؤنا",
    title: "شركاؤنا في رحلة النجاح",
    description: `منذ بداية رحلتنا، ساعدتنا هذه الشركات في تمهيد طريق النجاح. 
     بالعمل جنبًا إلى جنب لفترة كافية، أصبحنا شركاء ومصدر الخدمات الموثوق لهم.
    `,
  },
  grow: {
    title: "نمِ عملك اليوم",
    description: `من تحسين هوية علامتك التجارية وتشغيل الحملات إلى تعزيز وجودك الرقمي، نقوم بكل ذلك
    `,
    btn: "ابدأ الآن",
  },
  clients: {
    smallTitle: "عملاؤنا",
    title: "ماذا يقول عملاؤنا؟",
    description: `كما قلنا من قبل، نشجعك على الغوص قبل التأكد! نحن متأكدون من أننا سنقدم لك أفضل خدمة، كما قدمنا للعديد من عملائنا أفضل النتائج. 
    من المستحيل أن تشعر بخيبة أمل إذا كنت تعمل معنا.`,
    items: datafetch.client,
  },
  innovations: innovations.innovations,
  projects: projects.projects,
  blogs: blogs.blogs,
  form: {
    title: "تواصل معنا",
    fullName: "الاسم الكامل",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
    btn: "send",
  },
  timeline: [
    {
      title: "الانتقال إلى تركيا",
      date: "14 يناير 2014",
      description:
        "إنشاء مقر (Loyalty) الرئيسي في تركيا في إسطنبول في عام 2014 في مركز التجارة العالمي بإسطنبول، مما جعل الشركة تبرز بموقعها الاستراتيجي. فريق Loyalty كان يتألف من 4 أشخاص كانوا مصممين على تنفيذ رؤية الشركة.",
    },
    {
      title: "المقر الرسمي",
      date: "28 مارس 2018",
      description:
        "تم افتتاح مقر جديد في مبنى 'Vision Park' في منطقة 'يني بوسنا' في إسطنبول. بمساحة مكتبية تبلغ 140 متر مربع، مما يجعله المقر الثاني للشركة. الآن يتألف الفريق من 8 أشخاص يشاركون خبراتهم في مجالاتهم مع التمسك برؤية وأهداف الشركة.",
    },
    {
      title: "الانتقال إلى وسط المدينة",
      date: "10 ديسمبر 2019",
      description:
        "انتقلت الشركة إلى وسط مدينة إسطنبول لتكون قريبة من جميع المطارات الرئيسية ووسائل النقل. منطقة 'Cevizlibağ' هي مكان تواجدنا. بعد نجاح كبير والعديد من العملاء الجدد، نما فريقنا إلى 15 شخصًا متخصصين في مجالاتهم ومخلصين لرؤية شركتنا.",
    },
    {
      title: "عالمية",
      date: "05 مايو 2021",
      description:
        "افتتاح فروع للشركة في الولايات المتحدة الأمريكية ودبي لتكون أقرب إلى جميع عملائنا حول العالم. فريق Loyalty الآن يتألف من حوالي 20 موظفًا متخصصين في التسويق والتصميم والبرمجة.",
    },
  ],
  logos: team.logo,
  counter: counter.counter,
  contactPreference: {
    phone: preference.preference[0].preference_phone,
    email: preference.preference[0].preference_email,
    whatsappPhone: preference.preference[0].preference_whatsapp_phone,
    locationLink: preference.preference[0].preference_location,
    address: preference.preference[0].preference_address,
    description: preference.preference[0].preference_desc,
  },
};

export default data;
