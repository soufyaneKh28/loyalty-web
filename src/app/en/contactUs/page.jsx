import { poppinsClass } from "@/app/font";
import Image from "next/image";
import React from "react";
import {
  email,
  facebook,
  instagram,
  linkedin,
  location,
  phone,
  x,
} from "../../../../public";
import Link from "next/link";

import { ContactMap } from "@/components";
import dynamic from "next/dynamic";

const socialMedia = [
  {
    icon: facebook,
    link: "",
  },
  {
    icon: instagram,
    link: "",
  },
  {
    icon: linkedin,
    link: "",
  },
  {
    icon: x,
    link: "",
  },
];

import Map from "@/components/Map";
import Form from "@/components/Form";
import data from "@/app/content-en";

export const metadata = {
  title: "Contact-Us",
  description: "Generated by create next app",
};

const page = () => {
  return (
    <main className={`mt-[60px] ${poppinsClass}`}>
      <section className=" py-10  md:py-20">
        <div className="container  flex flex-col md:flex-row md:items-start md:justify-between ">
          <div className="text">
            <h1 className=" font-bold text-[40px] md:text-[50px]">
              Get in Touch
            </h1>
            <p className=" max-w-[500px]">
              Reach out to Loyalty Company for top-notch marketing, software,
              and design solutions. Based in Istanbul with branches worldwide,
              including the UAE and USA, we pride ourselves on being your ideal
              partner. Let us help you achieve your goals with smart marketing
              and software development to international standards.
            </p>
            <div className="contact my-6">
              <div className="phone my-2 flex items-center gap-2">
                <div className=" bg-primaryDark w-[40px] h-[40px] rounded-full flex justify-center items-center p-2">
                  <Image src={phone} alt="phone" width={30} />
                </div>
                <p>+90 546 544 41 96</p>
              </div>
              <div className="phone  my-2 flex items-center gap-2">
                <div className=" bg-primaryDark w-[40px] h-[40px] rounded-full flex justify-center items-center p-2">
                  <Image src={email} alt="phone" width={30} />
                </div>
                <p>info@loyalty.com.tr</p>
              </div>
            </div>
            <div className="social flex gap-2 mt-4">
              {socialMedia.map((icon, i) => (
                <Link href={icon.link} key={i}>
                  <div className=" icon w-[40px] h-[40px] hover:bg-white transition-colors bg-secondary rounded-full flex justify-center items-center">
                    <Image src={icon.icon} alt="facebook" width={23} priority />
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className=" mt-20 md:mt-0  max-w-[450px] flex-1">
            <Form object={data.form} />
          </div>
        </div>
      </section>
      <section>
        <div className=" bg-secondary flex flex-col md:flex-row  ">
          <div className="container flex flex-col md:flex-row">
            <div className=" flex flex-col items-start justify-center my-10">
              <div className=" flex flex-col items-start">
                <div className="flex items-center mb-[-5px]">
                  <div className="w-[25px] h-[2px] bg-white mr-1"></div>
                  <h5 className=" text-white">Our office</h5>
                </div>
                <h2 className="text-[32px] font-bold text-white">
                  See Our Location on The Map
                </h2>
              </div>
              <div className=" flex gap-4 my-4">
                <div className=" bg-primaryDark w-[40px] h-[40px] rounded-full p-2">
                  <Image src={location} alt="location" />
                </div>
                <p className=" max-w-[270px] md:max-w-[350px]">
                  Maltepe, Cevizlibağ Köprüsü No:8 Kat:11 No:137 , 34010
                  Zeytinburnu, 34010 Maltepe/İstanbuls
                </p>
              </div>
            </div>
          </div>
          <Map />
        </div>
      </section>
    </main>
  );
};

export default page;
