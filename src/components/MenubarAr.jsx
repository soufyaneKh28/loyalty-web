"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { cairoClass } from "@/app/font";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { logo, menu, close } from "../../public";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
import { Router } from "next/router";

const links = [
  {
    link: "الرئيسية",
    href: "/ar/home",
  },
  {
    link: "من نحن",
    href: "/ar/about",
  },
  {
    link: "خدماتنا",
    href: "/ar/services",
  },
  {
    link: "المشاريع",
    href: "/ar/projects",
  },
  {
    link: "المدونة",
    href: "/ar/blogs",
  },
  {
    link: "تواصل معنا",
    href: "/ar/contactUs",
  },
];

// export async function getServerSideProps(context) {
//   const { params } = context;
//   const currentPath = `/${params.path.join("/")}`;
//   // Use currentPath for data fetching or other server-side logic

//   return {
//     props: {
//       currentPath,
//     },
//   };
// }

export default function MenubarAr() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("ar");
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // console.log(pathname);

  function onChange(e) {
    setSelectedLanguage(e.target.value);
  }

  useEffect(
    function () {
      if (pathname.includes("ar")) {
        const newPath = pathname.replace("ar", selectedLanguage);
        console.log(newPath);
        router.push(newPath);
      }
      if (pathname.includes("en")) {
        const newPath = pathname.replace("en", selectedLanguage);
        console.log(newPath);
      }
    },
    [selectedLanguage, pathname, router]
  );

  // console.log(pathname);
  return (
    <>
      <header
        className={` ${
          isScrolled || isOpen ? "scrolled" : ""
        }  ${cairoClass} header py-4  flex flex-col  items-center font-Ibm fixed w-full bg-white z-[50] transition-all`}
      >
        <div className="container flex items-center justify-between ">
          <Link href="/ar/home">
            <Image src={logo} alt="logo" width={80} />
          </Link>

          <nav className="  hidden md:block">
            <ul className="flex gap-9">
              {/* {links.map((link) => {
                return (
                  <Link
                    href={link.href}
                    key={link.link}
                    className=" font-semibold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
                  >
                    {link.link}
                  </Link>
                );
              })} */}
              <Link
                href={`/ar/home`}
                className=" font-bold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
              >
                الرئيسية
              </Link>
              <Link
                href={`/ar/about`}
                className=" font-bold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
              >
                من نحن
              </Link>

              <Link
                href={`/ar/services`}
                className=" font-bold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
              >
                خدماتنا
              </Link>
              <div className=" dropdown">
                <Link
                  href={`/ar/projects`}
                  className=" flex items-center dropdown font-bold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
                >
                  المشاريع
                  <svg
                    className=" svg fill-current ms-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </Link>
                <ul class="dropdown-menu absolute hidden px-3  py-3 rounded-[10px] bg-white  pt-3">
                  <li class="">
                    <Link
                      className="font-bold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
                      href="/ar/innovations"
                    >
                      الابتكارات
                    </Link>
                  </li>
                </ul>
              </div>
              <Link
                href={`/ar/blogs`}
                className=" font-bold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
              >
                المدونة
              </Link>
              <Link
                href={`/ar/contactUs`}
                className=" font-bold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
              >
                تواصل معنا
              </Link>
            </ul>
          </nav>
          <div className="language relative hidden md:block">
            <div className=" w-[70px] p-2 font-bold    ">
              <div className=" items-center gap-1 flex hover:text-secondary transition-colors cursor-pointer">
                <p className=" font-bold">ar</p>
                <svg
                  className=" svg fill-current ms-2 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                </svg>
              </div>
            </div>
            <ul
              className="  shadow-lg absolute bg-white hidden   flex-col px-1 rounded-[5px] border-1 border-solid border-black"
              value={selectedLanguage}
              onChange={(e) => onChange(e)}
            >
              <li
                className=" hover:text-secondary transition-colors cursor-pointer"
                onClick={() => setSelectedLanguage("en")}
              >
                English
              </li>

              <li
                className=" hover:text-secondary transition-colors cursor-pointer"
                onClick={() => setSelectedLanguage("ar")}
              >
                Arabic
              </li>
            </ul>
          </div>

          <motion.button
            className="md:hidden"
            // animate={{ scale: 0.97 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.7 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Image
              src={isOpen ? close : menu}
              alt="logo"
              width={30}
              height={30}
            />
          </motion.button>
        </div>
        {isOpen && (
          <motion.div
            initial={{ x: -250, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            // transition={{ duration: 0.3, type: "spring" }}
            className={` w-[100%]  mobileNav md:hidden`}
          >
            <motion.ul
              className="flex flex-col gap-4 py-5 px-5"
              style={{ pointerEvents: isOpen ? "auto" : "none" }}
            >
              {links.map((link, i) => (
                <motion.li
                  initial={{ x: "100vh", opacity: 0 }}
                  transition={{
                    delay: i * 0.2,
                  }}
                  animate={{ x: 0, opacity: 1 }}
                  key={link.link}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="  text-[17px] text-[#27272F] hover:text-[#F8360A] font-bold transition-colors"
                  >
                    {link.link}
                  </Link>
                </motion.li>
              ))}

              <div className="language relative">
                <div className=" w-full  font-bold">
                  <div className=" items-center justify-between gap-1 flex hover:text-secondary transition-colors cursor-pointer">
                    <p>ar</p>
                    <svg
                      className=" svg fill-current ms-2 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                    </svg>
                  </div>
                </div>
                <ul
                  className="  shadow-lg  bg-white hidden   flex-col px-1 rounded-[5px] border-1 border-solid border-black"
                  value={selectedLanguage}
                  onChange={(e) => onChange(e)}
                >
                  <li
                    className=" hover:text-secondary transition-colors cursor-pointer"
                    onClick={() => setSelectedLanguage("en")}
                  >
                    English
                  </li>

                  <li
                    className=" hover:text-secondary transition-colors cursor-pointer"
                    onClick={() => setSelectedLanguage("ar")}
                  >
                    Arabic
                  </li>
                </ul>
              </div>
            </motion.ul>
          </motion.div>
        )}
      </header>
    </>
  );
}
