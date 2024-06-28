import {
  Button,
  CallTo,
  IconsSlider,
  MotionContainer,
  MotionLayout,
  Statis,
} from "@/components";
import Team from "@/components/Team";
import Image from "next/image";
import React from "react";
import dataAr from "@/app/content-ar";
import { cairoClass } from "@/app/font";
import { contact, message, star, vision } from "../../../../public";

export const metadata = {
  title: "من نحن",
  description: "Generated by create next app",
};

function Page() {
  return (
    <main className={`${cairoClass} `}>
      <section className={`"flex  pb-[100px] py-[150px] md:pt-[200px] `}>
        <div className="container md:justify-center md:items-center  flex flex-col ">
          <div className=" textContent md:text-center flex flex-col md:items-center">
            <MotionContainer
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className=" text-[50px] max-w-[350px] md:text-[50px] md:max-w-[600px] font-black text-primaryDark leading-[65px] md:*:text-center md:leading-[60px]">
                {dataAr.heroAbout.title}
              </h1>
            </MotionContainer>
            <MotionContainer
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6 }}
            >
              <p className=" mt-[10px] max-w-[300px] md:max-w-[700px] text-[#686567] text-[16px] font-medium leading-[27px]">
                {dataAr.heroAbout.description}
              </p>
              <Button>{dataAr.heroAbout.cta}</Button>
            </MotionContainer>
          </div>
        </div>
      </section>
      <section>
        <div className="container about flex flex-col md:flex-row justify-center gap-3">
          <MotionContainer
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 1 }}
          >
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
                <h3 className="mt-2 ">
                  {dataAr.heroAbout.items.message.title}
                </h3>
                <p className="mt-3 ltr:">
                  {dataAr.heroAbout.items.message.description}
                </p>
              </div>
            </div>
          </MotionContainer>
          <MotionContainer
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 1.3 }}
          >
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
          </MotionContainer>
          <MotionContainer
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 1.6 }}
          >
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
                <h3 className="mt-2 ">
                  {dataAr.heroAbout.items.features.title}
                </h3>
                <p className="mt-3 ltr:">
                  {dataAr.heroAbout.items.features.description}
                </p>
              </div>
            </div>
          </MotionContainer>
        </div>
      </section>
      <section className="py-10 my-5">
        <div className="container flex flex-col items-center justify-center my-10">
          <div className=" flex flex-col items-center">
            <div className="flex items-center mb-[-5px]">
              <div className="w-[25px] h-[2px] bg-secondary mr-1"></div>
              <p className=" text-secondary">من نحن ؟</p>
            </div>
            <h2 className="text-[32px] font-bold">عملك ينمو معنا</h2>
          </div>
          <p className="text-center max-w-[550px]">
            تأسست شركتنا في عام 2013، وهي متخصصة في العلامات التجارية والتسويق
            الرقمي والبرمجة. توسعنا إلى تركيا في عام 2014، وأصبحنا كيانًا رسميًا
            بموجب قوانين التسويق التركية في عام 2020. بالإضافة إلى ذلك، لدينا
            فروع في دبي، الإمارات العربية المتحدة، والولايات المتحدة الأمريكية.
          </p>
        </div>
        <div className="container my-[100px] md:my-[100px]">
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {dataAr.timeline.map((item, i) => (
              <MotionLayout key={i}>
                <div
                  className={`relative timeline-item flex items-center justify-between md:justify-normal  ${
                    i % 2 == 0 ? " md:flex-row" : " md:flex-row-reverse"
                  } group `}
                  key={i}
                >
                  {/* <!-- Icon --> */}
                  <div
                    className={`"flex icon items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.]:bg-emerald-500 text-slate-500 group-[.]:text-emerald-50 shadow shrink-0 md:order-1   ${
                      i % 2 == 0
                        ? " md:-translate-x-1/2 "
                        : " md:translate-x-1/2 "
                    }`}
                  ></div>
                  {/* <!-- Card --> */}
                  <div className=" shadow-lg card w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-[10px] ">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-slate-900 text-[20px]">
                        {item.title}
                      </div>
                      <time className="text-[13px] text-secondary font-bold">
                        {item.date}
                      </time>
                    </div>
                    <div className="text-slate-500 mt-3">
                      {item.description}
                    </div>
                  </div>
                </div>
              </MotionLayout>
            ))}
          </div>
        </div>
      </section>
      <section className=" py-10">
        <MotionLayout delay={0.3}>
          <div className="container flex flex-col items-center justify-center ">
            <div className=" flex flex-col items-center">
              <div className="flex items-center mb-[-5px]">
                <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
                <p className=" text-secondary">{dataAr.stats.smallTitle}</p>
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
        </MotionLayout>
      </section>
      <section className=" bg-primaryDark py-2.5">
        <MotionLayout delay={0.3}>
          <div className="container flex flex-col md:flex-row md:justify-between md:items-center">
            <div className=" flex flex-col py-4 ">
              <div className=" flex flex-col items-start">
                {/* <div className="flex items-center mb-[-5px]">
              <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
              <p className=" text-white">Workflow</p>
            </div> */}
                <h2 className="text-[32px] font-bold w-[350px] md:w-auto  leading-9 mt-3 text-white">
                  {dataAr.grow.title}
                </h2>
              </div>
              <p className=" text-white  w-[270px] md:w-[385px]  text-[16px] mt-4">
                {dataAr.grow.description}
              </p>
              <Button>{dataAr.grow.btn}</Button>
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
        </MotionLayout>
      </section>
      <section className="py-5 pb-10 bg-primaryDark">
        <MotionLayout>
          <div className="container flex flex-col items-center justify-center my-10">
            <div className=" flex flex-col items-center">
              <div className="flex items-center mb-[-5px]">
                <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
                <p className=" text-secondary">{dataAr.members.smallTitle}</p>
              </div>
              <h2 className="text-[32px] font-bold text-white">
                {dataAr.members.title}
              </h2>
            </div>
            <p className="text-center max-w-[550px] font-normal text-white">
              {dataAr.members.description}
            </p>
            <Button>{dataAr.members.btn}</Button>
          </div>
          <Team members={dataAr.members.items} />
        </MotionLayout>
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
    </main>
  );
}

export default Page;
