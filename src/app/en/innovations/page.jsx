import { poppinsClass } from "@/app/font";
import { BounceBall } from "@/components";
import Image from "next/image";
import React from "react";
import { homeHero, innov1, innovaition } from "../../../../public";
import data from "@/app/content-en";
import Link from "next/link";

const innovations = [
  {
    url: "the-story-of-moarize",
    title: "The Story Of Monarize",
    description: `Monarisa! Or Mona Lisa?MonaRize A commercial
     company working in the field of real estate and tourism, 
     specifically located in Rize, Risa is the attractive city
      and unique painting in the Turkish north, its mountains, plateaus, sea and sky, 
      as well as the case in its weather and people. Actually, this city is a unique painting,
       one of a kind in the natural creativity that it is in.

`,
    img: innov1,
    images: [{ img: innov1 }, { img: innov1 }, { img: innov1 }],
  },
  {
    url: "the-story-of-moarize",
    title: "The Story Of Monarize",
    description: `Monarisa! Or Mona Lisa?MonaRize A commercial
     company working in the field of real estate and tourism, 
     specifically located in Rize, Risa is the attractive city
      and unique painting in the Turkish north, its mountains, plateaus, sea and sky, 
      as well as the case in its weather and people. Actually, this city is a unique painting,
       one of a kind in the natural creativity that it is in.

`,
    img: innov1,

    images: [{ img: innov1 }, { img: innov1 }, { img: innov1 }],
  },
];

const page = () => {
  return (
    <main className={`${poppinsClass}`}>
      <section className={`"flex  py-[100px] md:my-10 `}>
        <div className="container md:justify-between md:items-center  flex flex-col md:flex-row">
          <div className=" textContent">
            <h1 className=" text-[40px] max-w-[350px] md:text-[50px] md:max-w-[500px] font-bold text-primaryDark leading-[48px] md:leading-[60px]">
              Our <span className=" text-secondary">Innovations</span>
            </h1>
            <p className=" mt-[10px] max-w-[300px] md:max-w-[400px] text-[#686567] text-[16px] font-Roboto font-medium">
              Our innovations department showcases the stories behind the brands
              we&apos;ve crafted, along with our name and logo. Here,
              you&apos;ll discover what sets us apart and gain insights into
              creating unique brands
              <br />
              <br />
              in the market. Crafting a brand requires talent and business
              acumen, with inspiration and proficiency culminating in
              outstanding work.
            </p>
            <button className="w-fit text-primary text-[14px] font-medium mt-4  bg-secondary rounded-full px-9 py-3">
              Get Started
            </button>
          </div>
          <div className=" flex justify-end relative">
            <BounceBall />
            <Image
              src={innovaition}
              alt="homeHero"
              className=" md:w-[420px] "
              width={350}
              priority={true}
            />
          </div>
        </div>
      </section>
      <section className=" bg-primaryDark py-10 md:mt-[100px]">
        <div className="container">
          {/* <div className="innov-container flex flex-col md:flex-row items-center justify-between">
            <div className="innov-text flex-1">
              <h2 className="text-[36px] text-white font-bold">
                The Story Of Monarize
              </h2>
              <p className=" text-white max-w-[370px] font-normal mt-4">
                Monarisa! Or Mona Lisa?MonaRize A commercial company working in
                the field of real estate and tourism, specifically located in
                Rize, Risa is the attractive city and unique painting in the
                Turkish north, its mountains, plateaus, sea and sky, as well as
                the case in its weather and people. Actually, this city is a
                unique painting, one of a kind in the natural creativity that it
                is in.
              </p>
              <button className="w-fit text-primary text-[14px] font-medium mt-6  bg-secondary rounded-full px-9  py-3">
                Continue Story
              </button>
            </div>
            <div className="innov-img overflow-hidden rounded-[10px]">
              <Image
                src={innov1}
                alt="innov1"
                className=" hover:scale-110 transition-all"
              />
            </div>
          </div> */}
          {data.innovations.map((innov, i) => (
            <div
              className={`innov-container flex flex-col my-10  ${
                (i + 1) % 2 === 0 ? " md:flex-row-reverse" : "md:flex-row"
              } items-center justify-between `}
              key={i}
            >
              <div className="innov-text my-5 flex flex-col items-start justify-center ">
                <h2 className="text-[36px] text-white font-bold">
                  {innov.title}
                </h2>
                <p className=" text-white max-w-[370px] font-normal mt-4">
                  {innov.description}
                </p>
                <Link
                  href={`/en/innovations/${i + 1}/${innov.url}`}
                  className="w-fit text-primary text-[14px] font-medium my-4  bg-secondary rounded-full px-9  py-3"
                >
                  Continue Story
                </Link>
              </div>
              <div className="innov-img overflow-hidden max-w-[422px] h-[438px] rounded-[10px]">
                <Image
                  src={innov.img}
                  alt="innov1"
                  className=" hover:scale-110  w-full h-[100%] object-cover transition-all"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default page;
