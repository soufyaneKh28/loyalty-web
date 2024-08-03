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
import { PhoneInputT } from "./ui/PhoneInputT";
import data from "@/app/content-en";
import Email from "./ui/Email";

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

const Footer = () => {
  return (
    <footer className=" bg-primaryDark py-10">
      <div className="container flex flex-col md:flex-row  ">
        <div className="col ">
          <div className="  ">
            <Image src={logo2} alt="logo2" />
          </div>
          <p className=" text-white w-[350px] md:w-[220px]  mt-5 font-normal text-[15px]">
            Founded in 2013, our company specializes in brand development,
            digital marketing, and programming. We expanded to Turkey in 2014,
            became official under Turkish marketing laws in 2020, and have
            branches in Dubai and the U.S.
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
                {data.contactPreference.address}
              </Link>
            </div>
            <div className=" py-3  flex items-center">
              <Image
                src={phone}
                className="h-[30px]"
                alt="phone"
                width={30}
                height={30}
              />
              <Link href={""} className="mx-2 text-white">
                {data.contactPreference.phone}
              </Link>
            </div>
            <div className=" py-3  flex items-center">
              <Image
                src={email}
                className="h-[30px]"
                alt="email"
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
            Company Information
          </h3>
          <div className="mt-5 flex flex-col text-white">
            <Link
              href={"/en/home"}
              className=" hover:text-secondary transition-colors"
            >
              Home
            </Link>
            <Link
              href={"/en/about"}
              className=" hover:text-secondary transition-colors"
            >
              About Us
            </Link>
            <Link
              href={"/en/services"}
              className=" hover:text-secondary transition-colors"
            >
              Services
            </Link>
            <Link
              href={"/en/projects"}
              className=" hover:text-secondary transition-colors"
            >
              Projects
            </Link>
            <Link
              href={"/en/contactUs"}
              className=" hover:text-secondary transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className=" col my-5">
          <Email>Subscribe Now</Email>
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
                <div className=" icon w-[39px] h-[39px] hover:bg-white transition-colors bg-secondary rounded-full flex justify-center items-center">
                  <Image src={icon.icon} alt="facebook" width={28} />
                </div>
              </Link>
            ))}
          </div>
          <div className=" text-white w-[100px] md:w-[200px]">
            Copyright © 2024. <span className=" text-secondary">LOYALTY.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
