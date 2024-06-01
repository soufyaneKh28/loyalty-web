import { CallTo, IconsSlider, Statis } from "@/components";
import Team from "@/components/Team";
import Image from "next/image";
import React from "react";
import dataAr from "@/app/content-ar";
import { cairoClass } from "@/app/font";
import { contact, message, star, vision } from "../../../../public";
function Page() {
  return (
    <main className={`${cairoClass}`}>
      <section className={`"flex  pb-5 py-[150px] `}>
        <div className="container md:justify-center md:items-center  flex flex-col ">
          <div className=" textContent md:text-center flex flex-col md:items-center">
            <h1 className=" text-[50px] max-w-[350px] md:text-[50px] md:max-w-[600px] font-bold text-primaryDark leading-[48px] md:*:text-center md:leading-[60px]">
              {dataAr.heroAbout.title}
            </h1>
            <p className=" mt-[10px] max-w-[300px] md:max-w-[700px] text-[#686567] text-[16px] font-medium leading-[27px]">
              {dataAr.heroAbout.description}
            </p>
            <button className="w-fit text-primary text-[14px] font-medium mt-4  bg-secondary rounded-full px-9 py-3">
              {dataAr.heroAbout.cta}
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="container about flex flex-col md:flex-row justify-center gap-3">
          <div className="embla__slide">
            <div className="embla__slide__number transition-colors">
              <div className=" img-container h-[60px] w-[60px] p-3 rounded-full bg-[#98E4E8]">
                <Image
                  src={message}
                  alt="img"
                  className="w-[100%] h-[100%] object-cover"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <h3 className="mt-2 ">{dataAr.heroAbout.items.message.title}</h3>
              <p className="mt-3 ltr:">
                {dataAr.heroAbout.items.message.description}
              </p>
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__slide__number transition-colors">
              <div className=" img-container h-[60px] w-[60px] p-3 rounded-full bg-[#98E4E8]">
                <Image
                  src={vision}
                  alt="img"
                  className="w-[100%] h-[100%] object-cover"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <h3 className="mt-2 ">{dataAr.heroAbout.items.vision.title}</h3>
              <p className="mt-3 ltr:">
                {dataAr.heroAbout.items.vision.description}
              </p>
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__slide__number transition-colors">
              <div className=" img-container h-[60px] w-[60px] p-3 rounded-full bg-[#98E4E8]">
                <Image
                  src={star}
                  alt="img"
                  className="w-[100%] h-[100%] object-cover"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <h3 className="mt-2 ">{dataAr.heroAbout.items.features.title}</h3>
              <p className="mt-3 ltr:">
                {dataAr.heroAbout.items.features.description}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" py-10">
        <div className="container flex flex-col items-center justify-center ">
          <div className=" flex flex-col items-center">
            <div className="flex items-center mb-[-5px]">
              <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
              <h5 className=" text-secondary">{dataAr.stats.smallTitle}</h5>
            </div>
            <h2 className="text-[32px] w-[354px] font-bold text-center">
              {dataAr.stats.title}
            </h2>
          </div>
          <p className="text-center max-w-[550px]">
            {dataAr.stats.description}
          </p>
        </div>
        <Statis object={dataAr.stats} />
      </section>
      <section className=" bg-primaryDark py-2.5">
        <div className="container flex flex-col md:flex-row md:justify-between md:items-center">
          <div className=" flex flex-col py-4 ">
            <div className=" flex flex-col items-start">
              {/* <div className="flex items-center mb-[-5px]">
              <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
              <h5 className=" text-white">Workflow</h5>
            </div> */}
              <h2 className="text-[32px] font-bold w-[350px] md:w-auto  leading-9 mt-3 text-white">
                {dataAr.grow.title}
              </h2>
            </div>
            <p className=" text-white  w-[270px] md:w-[385px]  text-[16px] mt-4">
              {dataAr.grow.description}
            </p>
            <button className="w-fit text-primary text-[14px] font-medium mt-4  bg-secondary rounded-full px-9 py-3">
              {dataAr.grow.btn}
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
      <section className="py-5 pb-10 bg-primaryDark">
        <div className="container flex flex-col items-center justify-center my-10">
          <div className=" flex flex-col items-center">
            <div className="flex items-center mb-[-5px]">
              <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
              <h5 className=" text-secondary">{dataAr.members.smallTitle}</h5>
            </div>
            <h2 className="text-[32px] font-bold text-white">
              {dataAr.members.title}
            </h2>
          </div>
          <p className="text-center max-w-[550px] font-normal text-white">
            {dataAr.members.description}
          </p>
          <button className="w-fit text-primary text-[14px] font-medium mt-4  bg-secondary rounded-full px-9 py-3">
            {dataAr.members.btn}
          </button>
        </div>
        <Team members={dataAr.members.items} />
      </section>
      <CallTo object={dataAr} />
      <section className="py-10">
        <div className="container flex flex-col items-center justify-center my-10">
          <div className=" flex flex-col items-center">
            <div className="flex items-center mb-[-5px]">
              <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
              <h5 className=" text-secondary ">{dataAr.partners.smallTitle}</h5>
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
    </main>
  );
}

export default Page;
