import Image from "next/image";
import React from "react";
import { email, location, logo2, phone } from "../../public";
import Link from "next/link";
import { PhoneInput } from "react-international-phone";
import PhoneInputT from "./ui/PhoneInputT";
const Footer = () => {
  return (
    <footer className=" bg-primaryDark py-10">
      <div className="container flex flex-col md:flex-row  ">
        <div className="col ">
          <div className="  ">
            <Image src={logo2} alt="logo2" />
          </div>
          <p className=" text-white w-[280px] md:w-[220px]  mt-5 font-normal text-[15px]">
            A trading company specializing in marketing and programming. The
            company was established in 2008 and a branch was opened in Turkey in
            2014 to officially become a limited liability trading company
            operating within the laws of the Republic of Turkey for commercial
            companies in 2020.
          </p>
        </div>
        <div className="col my-5 ">
          <h3 className=" font-semibold text-white text-[20px]">Company</h3>
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
                Maltepe, Cevizlibağ Köprüsü No:8 Kat:11 No:137 , 34010
                Zeytinburnu, 34010 Maltepe/İstanbuls
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
              <Link href={""} className="mx-2 text-white">
                +90 546 544 41 96
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
                info@loyalty.com.tr
              </Link>
            </div>
          </div>
        </div>
        <div className="col my-5 footer-links ">
          <h3 className=" font-semibold text-white text-[20px]">
            Company Information
          </h3>
          <div className="mt-5 flex flex-col text-white">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>About Us</Link>
            <Link href={"/"}>Services</Link>
            <Link href={"/"}>Projects</Link>
            <Link href={"/"}>Contact Us</Link>
          </div>
        </div>
        <div className=" col my-5">
          <form action="" className=" flex flex-col">
            <input
              type="phone"
              className=" py-3 px-3 border-none rounded-[10px]"
            />
            {/* <PhoneInputT /> */}
            <button
              type="submit"
              className=" bg-secondary py-3 rounded-full my-3 text-white font-semibold "
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
