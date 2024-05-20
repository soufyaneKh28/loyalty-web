import { Poppins, Roboto } from "next/font/google";

import Image from "next/image";


import BounceBall from "@/components/BounceBall";
import { Marketing, homeHero } from "../../../../public";
import Services from "@/components/Services";

// const poppins = google({
//   family: "Rob",
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

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
    <main>
      <section className={`"flex  py-5 pt-[100px] ${poppins.className}`}>
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
              className=" w-[350px] md:w-[420px] "
            />
          </div>
        </div>
      </section>
      <section>
        <Services object={sliderImageUrl} />
      </section>
    </main>
  );
}