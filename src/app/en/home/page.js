import { Poppins, Roboto } from "next/font/google";
import "../../globals.css";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BounceBall from "@/components/BounceBall";
import {
  Marketing,
  contact,
  homeHero,
  memberTeam,
  sou,
  strategy,
  support,
} from "../../../../public";

import {
  Services,
  Strategy,
  Footer,
  Features,
  Clients,
  Statis,
  CallTo,
  IconsSlider,
} from "@/components";
import Team from "@/components/Team";
// import Clients from "@/components/Clients";

const features = {
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
};

const sliderImageUrl = [
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
];

const members = [
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
];

const clients = [
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
];

const data = {
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

const roboto = Roboto({
  family: "Roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const poppins = Poppins({
  family: "Poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Page in english",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <main className={`${poppins.className}`}>
      <section className={`"flex  pb-5 pt-[100px] `}>
        <div className="container md:justify-between md:items-center  flex flex-col md:flex-row">
          <div className=" textContent">
            <h1 className=" text-[40px] max-w-[350px] md:text-[50px] md:max-w-[500px] font-bold text-primaryDark leading-[48px] md:leading-[60px]">
              Building <span className=" text-secondary">Digital Product</span>,
              Brand and Experience
            </h1>
            <p className=" mt-[10px] max-w-[300px] md:max-w-[400px] text-[#686567] text-[16px] font-Roboto font-medium">
              we are Marketing and digital agency , we provide a lot of services
              we are Marketing and digital agency , we provide a lot of services
            </p>
            <button className="w-fit text-primary text-[14px] font-medium mt-4  bg-secondary rounded-full px-9 py-3">
              Get Started
            </button>
          </div>
          <div className=" flex justify-end relative">
            <BounceBall />
            <Image
              src={homeHero}
              alt="homeHero"
              className=" md:w-[420px] "
              width={350}
              priority={true}
            />
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container flex flex-col items-center justify-center my-10">
          <div className=" flex flex-col items-start">
            <div className="flex items-center mb-[-5px]">
              <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
              <h5 className=" text-secondary">What we do ?</h5>
            </div>
            <h2 className="text-[32px] font-bold">Our Services</h2>
          </div>
          <p className="text-center max-w-[550px]">
            Lorem ipsum dolor sit amet consectetur. Sed egestas adipiscing sed
            ac sed. Aenean donec nulla sollicitudin{" "}
          </p>
        </div>
        <Services object={sliderImageUrl} />
      </section>
      <section className="py-5 bg-primaryDark">
        <Strategy />
        <div className="container flex flex-col md:flex-row md:justify-between md:items-center">
          <div className=" flex flex-col py-4 ">
            <div className=" flex flex-col items-start">
              {/* <div className="flex items-center mb-[-5px]">
                <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
                <h5 className=" text-white">Workflow</h5>
              </div> */}
              <h2 className="text-[32px] font-bold w-[350px] md:w-auto  leading-9 mt-3 text-white">
                Grow your Business today{" "}
              </h2>
            </div>
            <p className=" text-white font-Roboto w-[270px] md:w-[385px]  text-[16px] mt-4">
              From refining your brand identify and running campaigns to
              powering your digital presence, we do it all
            </p>
            <button className="w-fit text-primary text-[14px] font-medium mt-4  bg-secondary rounded-full px-9 py-3">
              Get Started
            </button>
          </div>
          <div className=" flex justify-end relative mt-4 md:mt-0 ">
            <Image
              src={contact}
              alt="homeHero"
              className=" md:w-[420px] mr-[-40px] "
              width={350}
              priority={true}
            />
          </div>
        </div>
      </section>
      <section className="py-10">
        <Features object={features} />
      </section>
      <section className=" py-10">
        <div className="container flex flex-col items-center justify-center ">
          <div className=" flex flex-col items-center">
            <div className="flex items-center mb-[-5px]">
              <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
              <h5 className=" text-secondary">Who Are We ?</h5>
            </div>
            <h2 className="text-[32px] w-[354px] font-bold text-center">
              Your Work Grows With Us
            </h2>
          </div>
          <p className="text-center max-w-[550px]">
            Established in 2013, our company specializes in branding, digital
            marketing, and programming. We expanded to Turkey in 2014, becoming
            an official entity under Turkish marketing laws in 2020.
            Additionally, we have branches in Dubai, UAE, and the USA.
          </p>
        </div>
        <Statis object={data} />
      </section>
      <section className="py-10">
        <div className="container flex flex-col items-center justify-center my-10">
          <div className=" flex flex-col items-center">
            <div className="flex items-center mb-[-5px]">
              <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
              <h5 className=" text-secondary ">Our Clients</h5>
            </div>
            <h2 className="text-[32px] max-w-[300px] text-center font-bold">
              What Our Clients Say ?
            </h2>
          </div>
          <p className="text-center max-w-[550px]">
            As we said before we encourage you to dive in before certainty! We
            are sure that we will give you the best service, as we have given
            lots of our clients the best results. It`s impossible for you to be
            disappointed if you are working with us.
          </p>
        </div>
        <Clients object={clients} />
      </section>
      <section className="py-5 pb-10 bg-primaryDark">
        <div className="container flex flex-col items-center justify-center my-10">
          <div className=" flex flex-col items-center">
            <div className="flex items-center mb-[-5px]">
              <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
              <h5 className=" text-secondary">Our Team</h5>
            </div>
            <h2 className="text-[32px] font-bold text-white">
              Get To Know Our Team
            </h2>
          </div>
          <p className="text-center max-w-[550px] font-normal text-white">
            Lorem ipsum dolor sit amet consectetur. Sed egestas adipiscing sed
            ac sed. Aenean donec nulla sollicitudin{" "}
          </p>
          <button className="w-fit text-primary text-[14px] font-medium mt-4  bg-secondary rounded-full px-9 py-3">
            Join Our Team
          </button>
        </div>
        <Team members={members} />
      </section>
      <CallTo object={data} />
      <section className="py-10">
        <div className="container flex flex-col items-center justify-center my-10">
          <div className=" flex flex-col items-center">
            <div className="flex items-center mb-[-5px]">
              <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
              <h5 className=" text-secondary ">Our Partners</h5>
            </div>
            <h2 className="text-[27px] max-w-[550px] text-center font-bold">
              Our Partners in The Journey To Succeed
            </h2>
          </div>
          <p className="text-center max-w-[550px] mt-3">
            Since the beginning of our journey these companies have helped us
            pave the way of success. Working side by side for enough time we
            have become partners and the go to source for their services.
          </p>
        </div>
        <IconsSlider />
      </section>
      <Footer />
    </main>
  );
}
