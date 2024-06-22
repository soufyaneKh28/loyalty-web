import { poppinsClass } from "@/app/font";
import {
  CallTo,
  Features,
  IconsSlider,
  Services,
  Strategy,
} from "@/components";
import React from "react";
import data from "../../content-en";

export const metadata = {
  title: "Services",
  description: "Generated by create next app",
};


const page = () => {
  return (
    <main className={`${poppinsClass}`}>
      <section className={`"flex  pb-5 py-[150px] `}>
        <div className="container md:justify-center md:items-center  flex flex-col ">
          <div className=" textContent md:text-center flex flex-col md:items-center">
            <h1 className=" text-[50px] max-w-[350px] md:text-[50px] md:max-w-[600px] font-bold text-primaryDark leading-[48px] md:*:text-center md:leading-[60px]">
              {data.heroServices.title}
            </h1>
            <p className=" mt-[10px] max-w-[300px] md:max-w-[700px] text-[#686567] text-[16px]  font-medium leading-[27px]">
              {data.heroServices.description}
            </p>
            <button className="w-fit text-primary text-[14px] font-medium mt-4  bg-secondary rounded-full px-9 py-3">
              {data.heroServices.cta}
            </button>
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
      </section>
      <section className="py-10">
        <Features object={data.features} />
      </section>
      <section className=" bg-primaryDark py-20 flex justify-center">
        <div className=" rounded overflow-hidden">
          <iframe
            className=" w-[400px] h-[300px] md:w-[560px] md:h-[315px]"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/OgDwsp2Tl1o?si=cpX0DIb8ig9EUiM-"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
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
};

export default page;
