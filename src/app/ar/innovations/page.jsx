import { cairoClass, poppinsClass } from "@/app/font";
import { BounceBall, Button } from "@/components";
import Image from "next/image";
import React from "react";
import { homeHero, innov1, innovaition } from "../../../../public";
import data from "@/app/content-ar";
import Link from "next/link";

const page = () => {
  return (
    <main className={`${cairoClass}`}>
      <section className={`"flex  py-[100px] md:my-10 `}>
        <div className="container md:justify-between md:items-center  flex flex-col md:flex-row">
          <div className=" textContent">
            <h1 className=" text-[40px] max-w-[350px] md:text-[50px] md:max-w-[500px] font-bold text-primaryDark leading-[48px] md:leading-[60px]">
              الابتكارات <span className=" text-secondary">لدينا </span>
            </h1>
            <p className="mt-[10px] max-w-[300px] md:max-w-[400px] text-[#686567] text-[16px] leading-7 my-3 font-medium">
              يعرض قسم الابتكارات لدينا القصص وراء العلامات التجارية التي
              أنشأناها، جنبًا إلى جنب مع اسمنا وشعارنا. هنا ستكتشف ما يميزنا
              وستحصل على رؤى حول إنشاء علامات تجارية فريدة في السوق.
              <br />
              <br />
              يتطلب إنشاء علامة تجارية موهبة وفطنة تجارية، حيث تتوج الإلهام
              والمهارة بعمل متميز.
            </p>
            <Button className="w-fit text-primary text-[14px] font-medium mt-4  bg-secondary rounded-full px-9 py-3">
              تواصل معنا{" "}
            </Button>
          </div>
          <div className=" flex justify-end relative">
            <BounceBall />
            <Image
              src={innovaition}
              alt="homeHero"
              className=" md:w-[420px] scale-x-[-1] "
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
              <div className="innov-text my-5 flex flex-col items-start ">
                <div>
                  <Link href={`/ar/innovations/${i + 1}/${innov.url}`}>
                    <h2 className="text-[36px] text-white font-bold hover:text-secondary transition-colors">
                      {innov.title}
                    </h2>
                  </Link>
                  <p className=" text-white max-w-[370px] leading-7 my-3 font-normal mt-4">
                    {innov.description}
                  </p>
                </div>
                <Button>
                  <Link href={`/ar/innovations/${i + 1}/${innov.url}`}>
                    أكمل القصة
                  </Link>
                </Button>
              </div>
              <div className="innov-img overflow-hidden max-w-[422px] h-[438px] rounded-[10px]">
                <Link href={`/ar/innovations/${i + 1}/${innov.url}`}>
                  <Image
                    src={innov.img}
                    alt="innov1"
                    className=" hover:scale-110 h-[100%] object-cover transition-all"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default page;
