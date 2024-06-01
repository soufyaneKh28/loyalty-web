import "../../globals.css";
import Image from "next/image";

import data from "@/app/content-en";
import BounceBall from "@/components/BounceBall";
import { contact, homeHero } from "../../../../public";

import {
  Services,
  Strategy,
  Features,
  Clients,
  Statis,
  CallTo,
  IconsSlider,
} from "@/components";
import Team from "@/components/Team";

import { poppinsClass } from "@/app/font";

export const metadata = {
  title: "Page in english",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <main className={`${poppinsClass}`}>
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
              <h5 className=" text-secondary">{data.services.smallTitle}</h5>
            </div>
            <h2 className="text-[32px] font-bold">{data.services.title}</h2>
          </div>
          <p className="text-center max-w-[550px]">
            {data.services.description}
          </p>
        </div>
        <Services object={data.services.servicesItems} />
      </section>
      <section className="py-5 bg-primaryDark">
        <Strategy object={data.strategy} />
        <div className="container flex flex-col md:flex-row md:justify-between md:items-center">
          <div className=" flex flex-col py-4 ">
            <div className=" flex flex-col items-start">
              <h2 className="text-[32px] font-bold w-[350px] md:w-auto  leading-9 mt-3 text-white">
                {data.grow.title}
              </h2>
            </div>
            <p className=" text-white font-Roboto w-[270px] md:w-[385px]  text-[16px] mt-4">
              {data.grow.description}
            </p>
            <button className="w-fit text-primary text-[14px] font-medium mt-4  bg-secondary rounded-full px-9 py-3">
              {data.grow.btn}
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
        <Features object={data.features} />
      </section>
      <section className=" py-10">
        <div className="container flex flex-col items-center justify-center ">
          <div className=" flex flex-col items-center">
            <div className="flex items-center mb-[-5px]">
              <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
              <h5 className=" text-secondary">{data.stats.smallTitle}</h5>
            </div>
            <h2 className="text-[32px] w-[354px] font-bold text-center">
              {data.stats.title}
            </h2>
          </div>
          <p className="text-center max-w-[550px]">{data.stats.description}</p>
        </div>
        <Statis object={data.stats} />
      </section>
      <section className="py-10">
        <div className="container flex flex-col items-center justify-center my-10">
          <div className=" flex flex-col items-center">
            <div className="flex items-center mb-[-5px]">
              <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
              <h5 className=" text-secondary ">{data.clients.smallTitle}</h5>
            </div>
            <h2 className="text-[32px] max-w-[300px] text-center font-bold">
              {data.clients.title}
            </h2>
          </div>
          <p className="text-center max-w-[550px]">
            {data.clients.description}
          </p>
        </div>
        <Clients object={data.clients.items} />
      </section>
      <section className="py-5 pb-10 bg-primaryDark">
        <div className="container flex flex-col items-center justify-center my-10">
          <div className=" flex flex-col items-center">
            <div className="flex items-center mb-[-5px]">
              <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
              <h5 className=" text-secondary">{data.members.smallTitle}</h5>
            </div>
            <h2 className="text-[32px] font-bold text-white">
              {data.members.title}
            </h2>
          </div>
          <p className="text-center max-w-[550px] font-normal text-white">
            {data.members.description}
          </p>
          <button className="w-fit text-primary text-[14px] font-medium mt-4  bg-secondary rounded-full px-9 py-3">
            {data.members.btn}
          </button>
        </div>
        <Team members={data.members.items} />
      </section>
      <CallTo object={data} />
      <section className="py-10">
        <div className="container flex flex-col items-center justify-center my-10">
          <div className=" flex flex-col items-center">
            <div className="flex items-center mb-[-5px]">
              <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
              <h5 className=" text-secondary ">{data.partners.smallTitle}</h5>
            </div>
            <h2 className="text-[27px] max-w-[550px] text-center font-bold">
              {data.partners.title}
            </h2>
          </div>
          <p className="text-center max-w-[550px] mt-3">
            {data.partners.description}
          </p>
        </div>
        <IconsSlider />
      </section>
    </main>
  );
}