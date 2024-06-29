import { cairoClass } from "@/app/font";
import dataAr from "@/app/content-ar";
import {
  Button,
  CallTo,
  Features,
  IconsSlider,
  MotionContainer,
  MotionLayout,
  Services,
  Strategy,
} from "@/components";
import React from "react";

export const metadata = {
  title: "خدماتنا",
  description: "Generated by create next app",
};

const page = () => {
  return (
    <main className={`${cairoClass}`}>
      <MotionLayout>
        <section className={`"flex  pb-[100px] py-[150px] md:pt-[200px] `}>
          <div className="container md:justify-center md:items-center  flex flex-col ">
            <div className=" textContent md:text-center flex flex-col md:items-center">
              <MotionContainer
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 className=" text-[50px] max-w-[350px] md:text-[50px] md:max-w-[600px] font-black text-primaryDark leading-[65px] md:*:text-center md:leading-[60px]">
                  {dataAr.heroServices.title}
                </h1>
              </MotionContainer>
              <MotionContainer
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6 }}
              >
                <p className=" mt-[10px] max-w-[300px] md:max-w-[700px] text-[#686567] text-[16px]  font-medium leading-[27px]">
                  {dataAr.heroServices.description}
                </p>
                <Button>{dataAr.heroServices.cta}</Button>
              </MotionContainer>
            </div>
          </div>
        </section>
        <section className="py-5 servicesAr">
          <div className="container flex flex-col items-center justify-center my-10">
            <div className=" flex flex-col items-start">
              <div className="flex items-center mb-[-5px]">
                <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
                <p className=" text-secondary">{dataAr.services.smallTitle}</p>
              </div>
              <h2 className="text-[32px] font-bold">{dataAr.services.title}</h2>
            </div>
            <p className="text-center max-w-[550px]">
              {dataAr.services.description}
            </p>
          </div>
          <Services object={dataAr.services.servicesItems} options={"rtl"} />
        </section>
        <section className="py-5 bg-primaryDark">
          <Strategy object={dataAr.strategy} />
        </section>
        <section className="py-10">
          <Features object={dataAr.features} />
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
        <CallTo object={dataAr} />
        <section className="py-10">
          <div className="container flex flex-col items-center justify-center my-10">
            <div className=" flex flex-col items-center">
              <div className="flex items-center mb-[-5px]">
                <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
                <p className=" text-secondary ">{dataAr.partners.smallTitle}</p>
              </div>
              <h2 className="text-[27px] max-w-[550px] text-center font-bold">
                {dataAr.partners.title}
              </h2>
            </div>
            <p className="text-center max-w-[550px] mt-3">
              {dataAr.partners.description}
            </p>
          </div>
          <IconsSlider />
        </section>
      </MotionLayout>
    </main>
  );
};

export default page;
