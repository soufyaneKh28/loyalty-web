const { Marketing, strategy, support } = require("../../public");

const data = {
  sliderImageUrl: [
    //First image url
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
    project: ` Successful Project`,
    client: `Happy Client`,
    team: `Team Member`,
  },
};

export default data;
