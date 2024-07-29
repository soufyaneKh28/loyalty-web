import "../../globals.css";
import Image from "next/image";

import data from "@/app/content-en";
import BounceBall from "@/components/BounceBall";
import { contact, homeHero } from "../../../../public";
import { delay, motion } from "framer-motion";
import {
  Services,
  Strategy,
  Features,
  Clients,
  Statis,
  CallTo,
  IconsSlider,
  MotionContainer,
  Button,
  MotionLayout,
} from "@/components";
import Team from "@/components/Team";
import { motionContainer } from "@/components/ui/motionContainer";
import { poppinsClass } from "@/app/font";
// import data from "@/app/content-en";
export const metadata = {
  title:
    " Loyalty Agency | Brand Development, Digital Marketing, and Programming",
  description:
    " Welcome to Loyalty Agency, your partner in brand development, digital marketing, and programming. Founded in 2013, we have branches in Turkey, Dubai, and the USA. Discover how we can help your business succeed.",
  keywords:
    "Loyalty Agency, brand development, digital marketing, programming, Turkey, Dubai, USA, business success",
};






export default async function Home() {

  return (
    <main className={`${poppinsClass}`}>
      <section className={`"flex  pb-5 pt-[100px] `}>
        <div className="container md:justify-between md:items-center  flex flex-col md:flex-row">
          <MotionContainer
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className=" textContent">
              <MotionContainer
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 className=" text-[40px] max-w-[350px] md:text-[50px] md:max-w-[500px] font-bold text-primaryDark leading-[48px] md:leading-[60px]">
                  Empowering{" "}
                  <span className="text-secondary">Your Digital</span> Success
                </h1>
              </MotionContainer>
              <p className=" mt-[10px] max-w-[300px] md:max-w-[400px] text-[#686567] text-[16px]  font-medium">
                Loyalty is your partner in brand development, digital marketing,
                and programming. Discover how we can elevate your business to
                new heights
              </p>
              <Button>Get Started</Button>
            </div>
          </MotionContainer>
          <div className=" flex justify-end relative">
            <BounceBall />

            <Image
              src={homeHero}
              alt="homeHero"
              className=" md:w-[420px] "
              width={350}
              priority
            />
          </div>
        </div>
      </section>
      <section className="py-5">
        <MotionLayout>
          <div className="container flex flex-col items-center justify-center my-10">
            <div className=" flex flex-col items-start">
              <div className="flex items-center mb-[-5px]">
                <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
                <p className=" text-secondary">{data.services.smallTitle}</p>
              </div>
              <h2 className=" text-[26px] md:text-[32px] font-bold">
                {data.services.title}
              </h2>
            </div>
            <p className="text-center max-w-[550px] mt-3">
              {data.services.description}
            </p>
          </div>
          <Services object={data.services.servicesItems} />
        </MotionLayout>
      </section>
      <section className="py-5 bg-primaryDark">
        <MotionLayout>
          <Strategy object={data.strategy} />
          <div className="container flex flex-col md:flex-row md:justify-between md:items-center">
            <div className=" flex flex-col py-4 ">
              <div className=" flex flex-col items-start">
                <h2 className=" text-[26px] md:text-[32px] font-bold w-[350px] md:w-auto  leading-9 mt-3 text-white">
                  {data.grow.title}
                </h2>
              </div>
              <p className=" text-white  w-[270px] md:w-[385px]  text-[16px] mt-4">
                {data.grow.description}
              </p>
              <Button>{data.grow.btn}</Button>
            </div>
            <div className=" flex justify-end relative mt-4 md:mt-0 ">
              <Image
                src={contact}
                alt="homeHero"
                className=" md:w-[420px] mr-[-40px] "
                width={350}
              />
            </div>
          </div>
        </MotionLayout>
      </section>
      <section className="py-10">
        <Features object={data.features} />
      </section>
      <section className=" py-10">
        <MotionLayout>
          <div className="container flex flex-col items-center justify-center ">
            <div className=" flex flex-col items-center">
              <div className="flex items-center mb-[-5px]">
                <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
                <p className=" text-secondary">{data.stats.smallTitle}</p>
              </div>
              <h2 className=" text-[26px] md:text-[32px] w-[354px] font-bold text-center">
                {data.stats.title}
              </h2>
            </div>
            <p className="text-center max-w-[550px] mt-3">
              {data.stats.description}
            </p>
          </div>
          <Statis object={data.stats} stats={data.counter} />
        </MotionLayout>
      </section>
      <section className="py-10">
        <MotionLayout>
          <div className="container flex flex-col items-center justify-center my-10">
            <div className=" flex flex-col items-center">
              <div className="flex items-center mb-[-5px]">
                <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
                <p className=" text-secondary ">{data.clients.smallTitle}</p>
              </div>
              <h2 className=" text-[26px] md:text-[32px]   md:max-w-[300px] text-center font-bold">
                {data.clients.title}
              </h2>
            </div>
            <p className="text-center max-w-[550px] mt-3">
              {data.clients.description}
            </p>
          </div>
          <Clients clients={data.clients.items}/>
        </MotionLayout>
      </section>
      <section className="py-5 pb-10 bg-primaryDark">
        <MotionLayout>
          <div className="container flex flex-col items-center justify-center my-10">
            <div className=" flex flex-col items-center">
              <div className="flex items-center mb-[-5px]">
                <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
                <p className=" text-secondary">{data.members.smallTitle}</p>
              </div>
              <h2 className=" text-[26px] md:text-[32px] font-bold text-white">
                {data.members.title}
              </h2>
            </div>
            <p className="text-center max-w-[550px] font-normal text-white mt-3">
              {data.members.description}
            </p>
            <Button>{data.members.btn}</Button>
          </div>
          <Team members={data.members.items} />
        </MotionLayout>
      </section>
      <CallTo object={data} />
      <section className="py-10">
        <div className="container flex flex-col items-center justify-center my-10">
          <div className=" flex flex-col items-center">
            <div className="flex items-center mb-[-5px]">
              <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
              <p className=" text-secondary font-bold">
                {data.partners.smallTitle}
              </p>
            </div>
            <h2 className="text-[26px] md:text-[32px] max-w-[550px] text-center font-bold">
              {data.partners.title}
            </h2>
          </div>
          <p className="text-center max-w-[550px] mt-3">
            {data.partners.description}
          </p>
        </div>
        <IconsSlider logos={data.logos} />
      </section>
    </main>
  );
}
