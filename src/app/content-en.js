import { Span } from "next/dist/trace";

const {
  Marketing,
  strategy,
  support,
  memberTeam,
  sou,
  innov1,
  project,
  projectDe,
  soufyane,
  soufyane1,
  soufyane2,
  soufyane3,
} = require("../../public");

const data = {
  heroServices: {
    title: "We Give You The Best Results",
    description:
      "A commercial company founded in 2013, specializing in brand development, digital marketing, and programming. We established a branch in Turkey in 2014 and became an official company under Turkish law for marketing companies in 2020. Additionally, we have branches in Dubai, UAE, and the USA.      ",
    cta: "Contact Us",
  },
  heroAbout: {
    title: "Full-Service Digital Experience",
    description:
      "A commercial company founded in 2013, specializing in brand development, digital marketing, and programming. We established a branch in Turkey in 2014 and became an official company under Turkish law for marketing companies in 2020. Additionally, we have branches in Dubai, UAE, and the USA.",
    cta: "Get Started",
    items: {
      message: {
        title: "Our Message ",
        description:
          "Helping our clients to achieve the best growth towards stability through smart and creative marketing mixed with a clear strategy.",
      },
      vision: {
        title: "Our Vision",
        description:
          "Helping our clients to achieve the best growth towards stability through smart and creative marketing mixed with a clear strategy.",
      },
      features: {
        title: "Our Features",
        description:
          "Academic experience - professionalism - team work - Prevalence",
      },
    },
  },

  services: {
    smallTitle: "What we do ?",
    title: "Our Services",
    description: ` Lorem ipsum dolor sit amet consectetur. Sed egestas adipiscing sed
    ac sed. Aenean donec nulla sollicitudin`,
    servicesItems: [
      {
        title: "Digital marketing",
        imgDark: Marketing,
        description:
          "Lorem ipsum dolor sit amet consectetur. Sed egestas adipiscing sed ac sed. Aenean donec nulla sollicitudin ",
      },
      {
        title: "Digital marketing",
        imgDark: Marketing,
        description:
          "Lorem ipsum dolor sit amet consectetur. Sed egestas adipiscing sed ac sed. Aenean donec nulla sollicitudin ",
      },
      {
        title: "Digital marketing",
        imgDark: Marketing,
        description:
          "Lorem ipsum dolor sit amet consectetur. Sed egestas adipiscing sed ac sed. Aenean donec nulla sollicitudin ",
      },
      {
        title: "Programmation Solution",
        imgDark: Marketing,
        description:
          "Lorem ipsum dolor sit amet consectetur. Sed egestas adipiscing sed ac sed. Aenean donec nulla sollicitudin ",
      },
      //Second image url
      {
        title: "Design",
        imgDark: Marketing,
        description:
          "Lorem ipsum dolor sit amet consectetur. Sed egestas adipiscing sed ac sed. Aenean donec nulla sollicitudin ",
      },

      //Third image url
      {
        title: "Mobile Application",
        imgDark: Marketing,
        description:
          "Lorem ipsum dolor sit amet consectetur. Sed egestas adipiscing sed ac sed. Aenean donec nulla sollicitudin ",
      },
    ],
  },
  strategy: {
    smallTitle: "Workflow",
    title: "Our Business Strategy",
    description: ` From refining your brand identify and running campaigns to powering
    your digital presence, we do it all `,
    items: {
      item1: {
        title: "Search and Analysis",
        description:
          "Lorem ipsum dolor sit amet consectetur. Cursus eu nunc ultricies sapien.",
        num: "01",
      },
      item2: {
        title: "Planning",
        description:
          "Lorem ipsum dolor sit amet consectetur. Cursus eu nunc ultricies sapien.",
        num: "02",
      },
      item3: {
        title: "Implementation",
        description:
          "Lorem ipsum dolor sit amet consectetur. Cursus eu nunc ultricies sapien.",
        num: "03",
      },
    },
  },
  features: {
    smallTitle: "Our Features",
    title: "The Best Company in Istanbul",
    description: `We are the best because we mix marketing, programming, and intricate design together to get the best results. After we develop your own brand identity, 
    we help you grow your brand by preparing marketing campaigns through social media and search engines.
    
    In parallel we develop your website in addition to applications and programs for customer's relations, sales, and accounting.`,
    items: [
      {
        icon: strategy,
        title: "Plans and Advice",
      },
      {
        icon: support,
        title: "24/7 Support",
      },
      {
        icon: strategy,
        title: "New Ideas",
      },
    ],
  },
  callto: {
    title: `Grow your Business today`,
    subTitle: `Let Our Team Help Your Business`,
    btn: "Submit",
  },
  stats: {
    smallTitle: "Who Are We ?",
    title: "Your Work Grows With Us",
    description: `Lorem ipsum dolor sit amet consectetur. 
    Sed egestas adipiscing sed ac sed. Aenean donec nulla sollicitudin`,
    numbers: {
      project: `Successful Project`,
      client: `Happy Client`,
      team: `Team Member`,
    },
  },
  members: {
    smallTitle: "Our Team",
    title: "Get To Know Our Team",
    description: ` Lorem ipsum dolor sit amet consectetur. 
    Sed egestas adipiscing sed ac sed. Aenean donec nulla sollicitudi `,
    btn: "Join Our Team",

    items: [
      {
        name: "Junaid AL-Omar",
        role: "CEO - Founder",
        img: memberTeam,
        color: "#F0A400",
      },
      {
        name: "Hisham Hijazi",
        role: "Web Developer",
        img: memberTeam,
        color: "#30C4E5",
      },
      {
        name: "Soufyane Khalfallah",
        role: "Web Developer",
        img: memberTeam,
        color: "#F0A400",
      },
      {
        name: "Soufyane Khalfallah",
        role: "Web Developer",
        img: memberTeam,
        color: "#30C4E5",
      },
      {
        name: "Soufyane Khalfallah",
        role: "Web Developer",
        img: memberTeam,
        color: "#F0A400",
      },
      {
        name: "Junaid AL-Omar",
        role: "CEO - Founder",
        img: memberTeam,
        color: "#F0A400",
      },
      {
        name: "Hisham Hijazi",
        role: "Web Developer",
        img: memberTeam,
        color: "#30C4E5",
      },
      {
        name: "Soufyane Khalfallah",
        role: "Web Developer",
        img: memberTeam,
        color: "#F0A400",
      },
      {
        name: "Soufyane Khalfallah",
        role: "Web Developer",
        img: memberTeam,
        color: "#30C4E5",
      },
      {
        name: "Soufyane Khalfallah",
        role: "Web Developer",
        img: memberTeam,
        color: "#F0A400",
      },
    ],
  },
  partners: {
    smallTitle: "Our Partners",
    title: "Our Partners in The Journey To Succeed",
    description: `Since the beginning of our journey these companies have helped us pave the way of success.
     Working side by side for enough time we have become partners and the go to source for their services.
    `,
  },
  grow: {
    title: "Grow your Business today",
    description: `From refining your brand identify and running campaigns to powering your digital presence, we do it all
    `,
    btn: "Get Started",
  },
  clients: {
    smallTitle: "Our Clients",
    title: "What Our Clients Say ?",
    description: `As we said before we encourage you to dive in before certainty! We are
     sure that we will give you the best service, as we have given lots of our clients the best results. 
    It's impossible for you to be disappointed if you are working with us.
    `,
    items: [
      {
        name: "Soufyane Khalfallah",
        img: sou,
        message: `As we said before we encourage you to dive in before certainty! We are sure that we will 
        give you the best service, as we have given lots of our clients the best results. It's impossible for you to be disappointed 
        if you are working with us.`,
        role: "Web Developer",
      },
      {
        name: "Soufyane Khalfallah",
        img: sou,
        message: `As we said before we encourage you to dive in before certainty! We are sure that we will 
        give you the best service, as we have given lots of our clients the best results. It's impossible for you to be disappointed 
        if you are working with us.`,
        role: "Web Developer",
      },
      {
        name: "Soufyane Khalfallah",
        img: sou,
        message: `As we said before we encourage you to dive in before certainty! We are sure that we will 
        give you the best service, as we have given lots of our clients the best results. It's impossible for you to be disappointed 
        if you are working with us.`,
        role: "Web Developer",
      },
    ],
  },
  innovations: [
    {
      url: "the-story-of-moarize",
      title: "The Story Of Monarize",
      description: `Monarisa! Or Mona Lisa?MonaRize A commercial
       company working in the field of real estate and tourism, 
       specifically located in Rize, Risa is the attractive city
        and unique painting in the Turkish north, its mountains, plateaus, sea and sky, 
        as well as the case in its weather and people. Actually, this city is a unique painting,
         one of a kind in the natural creativity that it is in.
  
  `,
      img: soufyane1,
      images: [{ img: soufyane1 }, { img: soufyane2 }, { img: soufyane3 }],
    },
    {
      url: "the-story-of-moarize",
      title: "The Story Of Monarize",
      description: `Monarisa! Or Mona Lisa?MonaRize A commercial
       company working in the field of real estate and tourism, 
       specifically located in Rize, Risa is the attractive city
        and unique painting in the Turkish north, its mountains, plateaus, sea and sky, 
        as well as the case in its weather and people. Actually, this city is a unique painting,
         one of a kind in the natural creativity that it is in.
  
  `,
      img: innov1,

      images: [{ img: innov1 }, { img: innov1 }, { img: innov1 }],
    },
  ],

  projects: [
    {
      url: "Visual-Identity-Souq-alfurat",
      id: "1",
      title: "Visual Identity Souq alfurat",
      tags: [
        {
          title: "Branding",
        },
        {
          title: "Design",
        },
      ],
      img: project,
      details: {
        client: "Souq alfurat",
        services: "Branding Design",
        duration: "03 Months",
        images: [{ img: projectDe }, { img: projectDe }, { img: projectDe }],
      },
    },
    {
      url: "Visual-Identity-soufyane",
      id: "2",
      title: "Visual Identity soufyane",
      tags: [
        {
          title: "UI UX",
        },
        {
          title: "Design",
        },
      ],
      img: soufyane,
      details: {
        client: "Souq alfurat",
        services: "Branding Design",
        duration: "03 Months",
        images: [{ img: soufyane1 }, { img: soufyane2 }, { img: soufyane3 }],
      },
    },
    {
      url: "Visual-Identity-Souq-alfurat",
      id: "3",
      title: "Visual Identity Souq alfurat",
      tags: [
        {
          title: "Branding",
        },
        {
          title: "Design",
        },
      ],
      img: project,
      details: {
        client: "Souq alfurat",
        services: "Branding Design",
        duration: "03 Months",
        images: [{ img: projectDe }, { img: projectDe }, { img: projectDe }],
      },
    },
    {
      url: "Visual-Identity-soufyane",
      id: "4",
      title: "Visual Identity soufyane",
      tags: [
        {
          title: "UI UX",
        },
        {
          title: "Design",
        },
      ],
      img: soufyane,
      details: {
        client: "Souq alfurat",
        services: "Branding Design",
        duration: "03 Months",
        images: [{ img: soufyane1 }, { img: soufyane2 }, { img: soufyane3 }],
      },
    },
    {
      url: "Visual-Identity-Souq-alfurat",
      id: "5",
      title: "Visual Identity Souq alfurat",
      tags: [
        {
          title: "Branding",
        },
        {
          title: "Design",
        },
      ],
      img: project,
      details: {
        client: "Souq alfurat",
        services: "Branding Design",
        duration: "03 Months",
        images: [{ img: projectDe }, { img: projectDe }, { img: projectDe }],
      },
    },
    {
      url: "Visual-Identity-soufyane",
      id: "6",
      title: "Visual Identity soufyane",
      tags: [
        {
          title: "UI UX",
        },
        {
          title: "Design",
        },
      ],
      img: soufyane,
      details: {
        client: "Souq alfurat",
        services: "Branding Design",
        duration: "03 Months",
        images: [{ img: soufyane1 }, { img: soufyane2 }, { img: soufyane3 }],
      },
    },
    {
      url: "Visual-Identity-Souq-alfurat",
      id: "7",
      title: "Visual Identity Souq alfurat",
      tags: [
        {
          title: "Branding",
        },
        {
          title: "Design",
        },
      ],
      img: project,
      details: {
        client: "Souq alfurat",
        services: "Branding Design",
        duration: "03 Months",
        images: [{ img: projectDe }, { img: projectDe }, { img: projectDe }],
      },
    },
    {
      url: "Visual-Identity-soufyane",
      id: "8",
      title: "Visual Identity soufyane",
      tags: [
        {
          title: "UI UX",
        },
        {
          title: "Design",
        },
      ],
      img: soufyane,
      details: {
        client: "Souq alfurat",
        services: "Branding Design",
        duration: "03 Months",
        images: [{ img: soufyane1 }, { img: soufyane2 }, { img: soufyane3 }],
      },
    },
    {
      url: "Visual-Identity-Souq-alfurat",
      id: "9",
      title: "Visual Identity Souq alfurat",
      tags: [
        {
          title: "Branding",
        },
        {
          title: "Design",
        },
      ],
      img: project,
      details: {
        client: "Souq alfurat",
        services: "Branding Design",
        duration: "03 Months",
        images: [{ img: projectDe }, { img: projectDe }, { img: projectDe }],
      },
    },
    {
      url: "Visual-Identity-soufyane",
      id: "10",
      title: "Visual Identity soufyane",
      tags: [
        {
          title: "UI UX",
        },
        {
          title: "Design",
        },
      ],
      img: soufyane,
      details: {
        client: "Souq alfurat",
        services: "Branding Design",
        duration: "03 Months",
        images: [{ img: soufyane1 }, { img: soufyane2 }, { img: soufyane3 }],
      },
    },
    {
      url: "Visual-Identity-Souq-alfurat",
      id: "11",
      title: "Visual Identity Souq alfurat",
      tags: [
        {
          title: "Branding",
        },
        {
          title: "Design",
        },
      ],
      img: project,
      details: {
        client: "Souq alfurat",
        services: "Branding Design",
        duration: "03 Months",
        images: [{ img: projectDe }, { img: projectDe }, { img: projectDe }],
      },
    },
    {
      url: "Visual-Identity-soufyane",
      id: "12",
      title: "Visual Identity soufyane",
      tags: [
        {
          title: "UI UX",
        },
        {
          title: "Design",
        },
      ],
      img: soufyane,
      details: {
        client: "Souq alfurat",
        services: "Branding Design",
        duration: "03 Months",
        images: [{ img: soufyane1 }, { img: soufyane2 }, { img: soufyane3 }],
      },
    },
  ],
  blogs: [
    {
      id: 1,
      url: "diffrence-between-marketing-and-digital-marketing",
      img: soufyane1,
      title: " Difference Between Marketing and Digital Marketing",
      date: "Sunday, 12.08.2023",
      tag: "Design",
      description: `In the old days,companies used to create a name for their company with prestige, power, and influence associated with government projects or they would try to control competitors by blackmailing them or buying their projects with huge amounts of money. After the humanitarian and intellectual development of the owners of large companies and pioneering projects, the appearance and the squeaky-clean image became all that the company had in order to have a good reputation in the market in order for its prestige or image at its best. “Image wise”, the place (location and aesthetic/decor) makes up half of the picture and the other half is the employees and their way of serving and dealing with customers, and this is the point of this article.
Marketing definition


Marketing is creating value for products or services and transforming it into a need or desire of customers. Marketing methods or channels for reaching customers may differ, but the goal remains the same, which is to create value and reach potential customers to turn them into serious customers.
What is the so important to know the difference between marketing and digital marketing?

The importance lies in knowing the fixed asset, so that you can work on the unstable dependents professionally, and when we talk about the origin, we mention marketing as a science and profession. When we talk about the unstable dependents, we mention digital and electronic marketing. Marketing cannot change, as it is a science that you can apply regardless of the different tools, while digital marketing may change in the event of a new electronic situation or an alternative to the Internet.`,
    },
    {
      id: 2,
      url: "diffrence-between-marketing-and-digital-marketing",
      img: soufyane1,
      title: " Difference Between Marketing and Digital Marketing",
      date: "Sunday, 12.08.2023",
      tag: "Design",
      description: `In the old days, companies used to create a name for their company with prestige, power, and influence associated with government projects or they would try to control competitors by blackmailing them or buying their projects with huge amounts of money. After the humanitarian and intellectual development of the owners of large companies and pioneering projects, the appearance and the squeaky-clean image became all that the company had in order to have a good reputation in the market in order for its prestige or image at its best. “Image wise”, the place (location and aesthetic/decor) makes up half of the picture and the other half is the employees and their way of serving and dealing with customers, and this is the point of this article.
Marketing definition
Marketing is creating value for products or services and transforming it into a need or desire of customers. Marketing methods or channels for reaching customers may differ, but the goal remains the same, which is to create value and reach potential customers to turn them into serious customers.
What is the so important to know the difference between marketing and digital marketing?

The importance lies in knowing the fixed asset, so that you can work on the unstable dependents professionally, and when we talk about the origin, we mention marketing as a science and profession. When we talk about the unstable dependents, we mention digital and electronic marketing. Marketing cannot change, as it is a science that you can apply regardless of the different tools, while digital marketing may change in the event of a new electronic situation or an alternative to the Internet.`,
    },
    {
      id: 3,
      url: "diffrence-between-marketing-and-digital-marketing",
      img: soufyane1,
      title: " Difference Between Marketing and Digital Marketing",
      date: "Sunday, 12.08.2023",
      tag: "Design",
      description: `In the old days, companies used to create a name for their company with prestige, power, and influence associated with government projects or they would try to control competitors by blackmailing them or buying their projects with huge amounts of money. After the humanitarian and intellectual development of the owners of large companies and pioneering projects, the appearance and the squeaky-clean image became all that the company had in order to have a good reputation in the market in order for its prestige or image at its best. “Image wise”, the place (location and aesthetic/decor) makes up half of the picture and the other half is the employees and their way of serving and dealing with customers, and this is the point of this article.
Marketing definition
Marketing is creating value for products or services and transforming it into a need or desire of customers. Marketing methods or channels for reaching customers may differ, but the goal remains the same, which is to create value and reach potential customers to turn them into serious customers.
What is the so important to know the difference between marketing and digital marketing?

The importance lies in knowing the fixed asset, so that you can work on the unstable dependents professionally, and when we talk about the origin, we mention marketing as a science and profession. When we talk about the unstable dependents, we mention digital and electronic marketing. Marketing cannot change, as it is a science that you can apply regardless of the different tools, while digital marketing may change in the event of a new electronic situation or an alternative to the Internet.`,
    },
    {
      id: 4,
      url: "diffrence-between-marketing-and-digital-marketing",
      img: soufyane1,
      title: " Difference Between Marketing and Digital Marketing",
      date: "Sunday, 12.08.2023",
      tag: "Design",
      description: `In the old days, companies used to create a name for their company with prestige, power, and influence associated with government projects or they would try to control competitors by blackmailing them or buying their projects with huge amounts of money. After the humanitarian and intellectual development of the owners of large companies and pioneering projects, the appearance and the squeaky-clean image became all that the company had in order to have a good reputation in the market in order for its prestige or image at its best. “Image wise”, the place (location and aesthetic/decor) makes up half of the picture and the other half is the employees and their way of serving and dealing with customers, and this is the point of this article.
Marketing definition
Marketing is creating value for products or services and transforming it into a need or desire of customers. Marketing methods or channels for reaching customers may differ, but the goal remains the same, which is to create value and reach potential customers to turn them into serious customers.
What is the so important to know the difference between marketing and digital marketing?

The importance lies in knowing the fixed asset, so that you can work on the unstable dependents professionally, and when we talk about the origin, we mention marketing as a science and profession. When we talk about the unstable dependents, we mention digital and electronic marketing. Marketing cannot change, as it is a science that you can apply regardless of the different tools, while digital marketing may change in the event of a new electronic situation or an alternative to the Internet.`,
    },
    {
      id: 5,
      url: "diffrence-between-marketing-and-digital-marketing",
      img: soufyane1,
      title: " Difference Between Marketing and Digital Marketing",
      date: "Sunday, 12.08.2023",
      tag: "Design",
      description: `In the old days, companies used to create a name for their company with prestige, power, and influence associated with government projects or they would try to control competitors by blackmailing them or buying their projects with huge amounts of money. After the humanitarian and intellectual development of the owners of large companies and pioneering projects, the appearance and the squeaky-clean image became all that the company had in order to have a good reputation in the market in order for its prestige or image at its best. “Image wise”, the place (location and aesthetic/decor) makes up half of the picture and the other half is the employees and their way of serving and dealing with customers, and this is the point of this article.
Marketing definition
Marketing is creating value for products or services and transforming it into a need or desire of customers. Marketing methods or channels for reaching customers may differ, but the goal remains the same, which is to create value and reach potential customers to turn them into serious customers.
What is the so important to know the difference between marketing and digital marketing?

The importance lies in knowing the fixed asset, so that you can work on the unstable dependents professionally, and when we talk about the origin, we mention marketing as a science and profession. When we talk about the unstable dependents, we mention digital and electronic marketing. Marketing cannot change, as it is a science that you can apply regardless of the different tools, while digital marketing may change in the event of a new electronic situation or an alternative to the Internet.`,
    },
    {
      id: 6,
      url: "diffrence-between-marketing-and-digital-marketing",
      img: soufyane1,
      title: " Difference Between Marketing and Digital Marketing",
      date: "Sunday, 12.08.2023",
      tag: "Design",
      description: `In the old days, companies used to create a name for their company with prestige, power, and influence associated with government projects or they would try to control competitors by blackmailing them or buying their projects with huge amounts of money. After the humanitarian and intellectual development of the owners of large companies and pioneering projects, the appearance and the squeaky-clean image became all that the company had in order to have a good reputation in the market in order for its prestige or image at its best. “Image wise”, the place (location and aesthetic/decor) makes up half of the picture and the other half is the employees and their way of serving and dealing with customers, and this is the point of this article.
Marketing definition
Marketing is creating value for products or services and transforming it into a need or desire of customers. Marketing methods or channels for reaching customers may differ, but the goal remains the same, which is to create value and reach potential customers to turn them into serious customers.
What is the so important to know the difference between marketing and digital marketing?

The importance lies in knowing the fixed asset, so that you can work on the unstable dependents professionally, and when we talk about the origin, we mention marketing as a science and profession. When we talk about the unstable dependents, we mention digital and electronic marketing. Marketing cannot change, as it is a science that you can apply regardless of the different tools, while digital marketing may change in the event of a new electronic situation or an alternative to the Internet.`,
    },
    {
      id: 7,
      url: "soufyane-khalfallah",
      img: projectDe,
      title: "soufyane khalfallah",
      date: "Sunday, 12.08.2023",
      tag: "Design",
      description: `In the old days, companies used to create a name for their company with prestige, power, and influence associated with government projects or they would try to control competitors by blackmailing them or buying their projects with huge amounts of money. After the humanitarian and intellectual development of the owners of large companies and pioneering projects, the appearance and the squeaky-clean image became all that the company had in order to have a good reputation in the market in order for its prestige or image at its best. “Image wise”, the place (location and aesthetic/decor) makes up half of the picture and the other half is the employees and their way of serving and dealing with customers, and this is the point of this article.
Marketing definition
Marketing is creating value for products or services and transforming it into a need or desire of customers. Marketing methods or channels for reaching customers may differ, but the goal remains the same, which is to create value and reach potential customers to turn them into serious customers.
What is the so important to know the difference between marketing and digital marketing?

The importance lies in knowing the fixed asset, so that you can work on the unstable dependents professionally, and when we talk about the origin, we mention marketing as a science and profession. When we talk about the unstable dependents, we mention digital and electronic marketing. Marketing cannot change, as it is a science that you can apply regardless of the different tools, while digital marketing may change in the event of a new electronic situation or an alternative to the Internet.`,
    },
  ],
};

export default data;
