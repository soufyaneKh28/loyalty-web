import Image from "next/image";
import React from "react";
import {
  email,
  facebook,
  instagram,
  linkedin,
  location,
  logo2,
  phone,
  x,
} from "../../public";
import Link from "next/link";
import { PhoneInput } from "react-international-phone";
import PhoneInputT from "./ui/PhoneInputT";
import { cairoClass } from "@/app/font";
import data from "@/app/content-ar";
import Email from "./ui/Email";

const socialMedia = [
  {
    icon: facebook,
    link: "https://www.facebook.com/loyaltysocial",
  },
  {
    icon: instagram,
    link: "https://www.instagram.com/LOYALTYSOCIAL/",
  },
  {
    icon: linkedin,
    link: "https://www.linkedin.com/company/loyaltysocial",
  },
  {
    icon: x,
    link: "https://x.com/loyaltysocial",
  },
];

const FooterAr = () => {
  return (
    <footer className={` bg-primaryDark py-10 ${cairoClass}`}>
      <div className="container flex flex-col md:flex-row  ">
        <div className="col ">
          <div className="  ">
            <Image src={logo2} alt="logo2" />
          </div>
          <p className=" text-white w-[280px] md:w-[220px]  mt-5 font-normal text-[15px]">
            تأسست شركتنا في عام 2013، ونتخصص في العلامات التجارية والتسويق
            الرقمي والبرمجة. توسعنا إلى تركيا في 2014، وأصبحنا رسميين بموجب
            قوانين التسويق التركية في 2020، ولنا أيضًا فروع في دبي والولايات
            المتحدة.
          </p>
        </div>
        <div className="col my-5 ">
          <h3 className=" font-semibold text-white text-[20px]">الشركة</h3>
          <div className="mt-2">
            <div className=" py-3  flex">
              <Image
                src={location}
                className="h-[30px]"
                alt="location"
                width={30}
                height={30}
              />
              <Link href={""} className="mx-2 text-white">
                {data.contactPreference.address}
              </Link>
            </div>
            <div className=" py-3  flex items-center">
              <Image
                src={phone}
                className="h-[30px]"
                alt="location"
                width={30}
                height={30}
              />
              <Link href={""} dir="ltr" className="mx-2  text-white">
                {data.contactPreference.phone}
              </Link>
            </div>
            <div className=" py-3  flex items-center">
              <Image
                src={email}
                className="h-[30px]"
                alt="location"
                width={30}
                height={30}
              />
              <Link href={""} className=" mx-2 text-white">
                {data.contactPreference.email}
              </Link>
            </div>
          </div>
        </div>
        <div className="col my-5 footer-links ">
          <h3 className=" font-semibold text-white text-[20px]">
            معلومات الشركة
          </h3>
          <div className="mt-5 flex flex-col text-white">
            <Link href={"/ar/home"}>الرئيسية</Link>
            <Link href={"/ar/about"}>من نحن</Link>
            <Link href={"/"}>خدماتنا</Link>
            <Link href={"/"}>المشاريع</Link>
            <Link href={"/"}>المدونة</Link>
            <Link href={"/"}>تواصل معنا</Link>
          </div>
        </div>
        <div className=" col my-5">
          <Email>تواصل معنا</Email>
          {/* <PhoneInputT /> */}
        </div>
      </div>
      <div className="container">
        <div className=" h-[1px] w-full bg-[#3D3D44]" />
        <div className="my-2 py-3 flex items-center justify-between">
          <div className="icons-container flex gap-2 ">
            {/* <Link href={""}>
              <div className=" icon w-[50px] h-[50px] hover:bg-white transition-colors bg-secondary rounded-full flex justify-center items-center">
                <Image src={facebook} alt="facebook" width={24} />
              </div>
            </Link> */}
            {socialMedia.map((icon, i) => (
              <Link href={icon.link} key={i}>
                <div className=" icon w-[50px] h-[50px] hover:bg-white transition-colors bg-secondary rounded-full flex justify-center items-center">
                  <Image src={icon.icon} alt="facebook" width={28} />
                </div>
              </Link>
            ))}
          </div>
          <div className=" text-white w-[100px] md:w-[200px]">
            حقوق النشر© 2024. <span className=" text-secondary">لويالتي.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAr;
