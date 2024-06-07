import { cairoClass, poppinsClass } from "@/app/font";

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

const page = () => {
  return (
    <main className={`mt-[60px] ${cairoClass}`}>
      <section className=" py-10  md:py-20">
        <div className="container  flex flex-col md:flex-row md:items-start md:justify-between ">
          <div className="text">
            <h1 className=" font-black text-[40px] md:text-[50px]">
              تواصل معنا
            </h1>
            <p className=" max-w-[500px] leading-7 font-semibold">
              تواصل مع شركة Loyalty للحصول على أفضل الحلول التسويقية والبرمجيات
              والتصميمية. يقع مقرنا الرئيسي في إسطنبول ولدينا فروع في جميع أنحاء
              العالم، بما في ذلك الإمارات العربية المتحدة والولايات المتحدة
              الأمريكية، ونفخر بأن نكون شريكك المثالي. دعنا نساعدك في تحقيق
              أهدافك من خلال التسويق الذكي وتطوير البرمجيات وفقًا للمعايير
              الدولية.
            </p>
            <div className="contact my-6">
              <div className="phone my-2 flex items-center gap-2">
                <div className=" bg-primaryDark w-[40px] h-[40px] rounded-full flex justify-center items-center p-2">
                  <Image src={phone} alt="phone" width={30} />
                </div>
                <p className=" ">+90 546 544 41 96</p>
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
            <form
              action=""
              className=" bg-primaryDark text-white p-5 flex flex-col py-12  rounded-[20px]"
            >
              <h3 className=" text-[28px] text-center font-semibold">
                اتصل بنا{" "}
              </h3>
              <div className=" flex flex-col my-2">
                <label htmlFor="name">الاسم الكامل</label>
                <input
                  type="text"
                  name="name"
                  placeholder="full name"
                  id="name"
                  className=" p-3 mt-1 rounded-[10px] outline-none border-none text-primaryDark"
                />
              </div>
              <div className=" flex flex-col my-2">
                <label htmlFor="email">البريد الإلكتروني</label>
                <input
                  type="email"
                  name="name"
                  placeholder="email"
                  id="email"
                  className=" p-3 mt-1 rounded-[10px] outline-none border-none text-primaryDark"
                />
              </div>
              <div className=" flex flex-col my-2">
                <label htmlFor="phone">الهاتف</label>
                <input
                  type="phone"
                  name="name"
                  placeholder="phone"
                  id="phone"
                  className=" p-3 mt-1 rounded-[10px] outline-none border-none text-primaryDark"
                />
              </div>
              <div className=" flex flex-col my-2">
                <label htmlFor="phone">الهاتف</label>
                <input
                  type="phone"
                  name="name"
                  placeholder="phone"
                  id="phone"
                  className=" p-3 mt-1 rounded-[10px] outline-none border-none text-primaryDark"
                />
              </div>
              <div className=" flex flex-col my-2">
                <label htmlFor="phone">الهاتف</label>
                <input
                  type="phone"
                  name="name"
                  placeholder="phone"
                  id="phone"
                  className=" p-3 mt-1 rounded-[10px] outline-none border-none text-primaryDark"
                />
              </div>
              <button className=" bg-secondary py-3 px-10 mt-5 rounded-full ">
                إرسال
              </button>
            </form>
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
                  <h5 className=" text-white">مكتبنا</h5>
                </div>
                <h2 className="text-[32px] font-bold text-white">
                  اطلع على موقعنا على الخريطة
                </h2>
              </div>
              <div className=" flex gap-4 my-4">
                <div className=" bg-primaryDark w-[40px] h-[40px] rounded-full p-2">
                  <Image src={location} alt="location" />
                </div>
                <p className=" max-w-[350px]">
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
