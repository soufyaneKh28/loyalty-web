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
const page = () => {
  return (
    <main className={`${poppinsClass}`}>
      <section className={`"flex  pb-5 py-[150px] `}>
        <div className="container md:justify-center md:items-center  flex flex-col ">
          <div className=" textContent md:text-center flex flex-col md:items-center">
            <h1 className=" text-[50px] max-w-[350px] md:text-[50px] md:max-w-[600px] font-bold text-primaryDark leading-[48px] md:*:text-center md:leading-[60px]">
              We Give You <span className=" text-secondary"> The Best </span>
              Results
            </h1>
            <p className=" mt-[10px] max-w-[300px] md:max-w-[700px] text-[#686567] text-[16px] font-Roboto font-medium leading-[27px]">
              A commercial company founded in 2013, specializing in brand
              development, digital marketing, and programming. We established a
              branch in Turkey in 2014 and became an official company under
              Turkish law for marketing companies in 2020. Additionally, we have
              branches in Dubai, UAE, and the USA.
            </p>
            <button className="w-fit text-primary text-[14px] font-medium mt-4  bg-secondary rounded-full px-9 py-3">
              Contact Us
            </button>
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
        <Services object={data.sliderImageUrl} />
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
    </main>
  );
};

export default page;
