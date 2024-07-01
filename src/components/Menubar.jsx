"use client";
import { Poppins, Roboto } from "next/font/google";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

import { motion } from "framer-motion";
import { logo, menu, close, downArrow, uk, ar } from "../../public";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const links = [
  {
    link: "Home",
    href: "/en/home",
  },
  {
    link: "About Us",
    href: "/en/about",
  },
  {
    link: "Services",
    href: "/en/services",
  },
  {
    link: "Projects",
    href: "/en/projects?page=1",
  },
  {
    link: "Blogs",
    href: "/en/blogs",
  },
  {
    link: "Contact Us",
    href: "/en/contactUs",
  },
];

export const poppins = Poppins({
  family: "Poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Menubar({ params }) {
  const [isOpen, setIsOpen] = useState(false);
  // console.log(params);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function onChange(e) {
    setSelectedLanguage(e.target.value);

    if (pathname === "/") {
      router.push(`/${selectedLanguage}/home`);
    }
  }

  useEffect(
    function () {
      if (selectedLanguage) {
        if (pathname.includes("ar")) {
          const newPath = pathname.replace("ar", selectedLanguage);

          router.push(newPath);
        }
        if (pathname.includes("en")) {
          const newPath = pathname.replace("en", selectedLanguage);

          router.push(newPath);
        }
        if (pathname === "/") {
          const newPath = pathname.replace("/", `${selectedLanguage}/home`);
          router.push(newPath);
        }
      }
    },
    [selectedLanguage, pathname, router]
  );

  return (
    <div className="container flex justify-center">
      <header
        className={`${poppins.className}   ${
          isScrolled || isOpen ? "scrolled" : ""
        } header py-4 rounded-[20px] md:rounded-full flex flex-col max-w-[95%] md:max-w-[1200px]  mt-3 items-center fixed w-full bg-white z-[50]  transition-all`}
      >
        <div className="container flex justify-between  items-center ">
          <Link href="/">
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
              <li>
                <Link
                  href={`/en/home`}
                  className=" font-semibold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
                >
                  {`Home`}
                </Link>
              </li>
              <li>
                <Link
                  href={`/en/about`}
                  className=" font-semibold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
                >
                  {`About`}
                </Link>
              </li>
              <li>
                <Link
                  href={`/en/services`}
                  className=" font-semibold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
                >
                  {`Sevices`}
                </Link>
              </li>
              <li>
                <div className=" dropdown">
                  <Link
                    href={`/en/projects?page=1`}
                    className=" flex projects items-center  font-semibold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
                  >
                    Projects{" "}
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
                        className="font-semibold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
                        href="/en/innovations"
                      >
                        Innovations
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  href={`/en/blogs?page=1`}
                  className=" font-semibold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
                >
                  Blogs
                </Link>
              </li>

              <li>
                <Link
                  href={`/en/contactUs`}
                  className=" font-semibold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          {/* <select
            className=" hidden md:flex px-1 rounded-[5px] border-1 border-solid border-black"
            value={selectedLanguage}
            onChange={(e) => onChange(e)}
          >
            <option value="en" className="">
              {selectedLanguage}
            </option>

            <option value="ar">ar</option>
          </select> */}
          <div className="language relative hidden md:block">
            <div className="  p-2 font-bold    ">
              <div className=" items-center justify-center gap-1 flex hover:text-secondary transition-colors cursor-pointer">
                <div className="flex">
                  <Image src={uk} alt="uk" width={25} />
                  <p className=" ms-1">En</p>
                </div>
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
                <div className="flex items-center">
                  <Image src={uk} alt="uk" width={25} />
                  <p className=" ms-1">English</p>
                </div>
              </li>

              <li
                className=" hover:text-secondary transition-colors cursor-pointer"
                onClick={() => setSelectedLanguage("ar")}
              >
                <div className="flex items-center">
                  <Image src={ar} alt="ar" width={25} />
                  <p className=" ms-1">Arabic</p>
                </div>
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
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            // transition={{ duration: 0.3, type: "spring" }}
            className={` w-[100%]  mobileNav md:hidden`}
          >
            <motion.ul
              className="flex flex-col gap-4 py-5 px-5"
              style={{ pointerEvents: isOpen ? "auto" : "none" }}
            >
              {/* {links.map((link, i) => (
                <motion.li
                  initial={{ x: "-100vh", opacity: 0 }}
                  transition={{
                    delay: i * 0.2,
                  }}
                  animate={{ x: 0, opacity: 1 }}
                  key={link.link}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className=" font-semibold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
                  >
                    {link.link}
                  </Link>
                </motion.li>
              ))} */}
              <motion.li
                initial={{ x: "-100vh", opacity: 0 }}
                transition={{
                  delay: 0 * 0.2,
                }}
                animate={{ x: 0, opacity: 1 }}
              >
                <Link
                  href={`/en/home`}
                  onClick={() => setIsOpen(false)}
                  className=" font-semibold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
                >
                  {`Home`}
                </Link>
              </motion.li>
              <motion.li
                initial={{ x: "-100vh", opacity: 0 }}
                transition={{
                  delay: 1 * 0.2,
                }}
                animate={{ x: 0, opacity: 1 }}
              >
                <Link
                  href={`/en/about`}
                  onClick={() => setIsOpen(false)}
                  className=" font-semibold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
                >
                  {`About`}
                </Link>
              </motion.li>
              <motion.li
                initial={{ x: "-100vh", opacity: 0 }}
                transition={{
                  delay: 2 * 0.2,
                }}
                animate={{ x: 0, opacity: 1 }}
              >
                <Link
                  href={`/en/services`}
                  onClick={() => setIsOpen(false)}
                  className=" font-semibold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
                >
                  {`Sevices`}
                </Link>
              </motion.li>
              <motion.li
                className=" dropdown"
                initial={{ x: "-100vh", opacity: 0 }}
                transition={{
                  delay: 3 * 0.2,
                }}
                animate={{ x: 0, opacity: 1 }}
              >
                {" "}
                <div className="flex w-full projects justify-between items-center dropdown">
                  <Link
                    href={`/en/projects?page=1`}
                    onClick={() => setIsOpen(false)}
                    className="   font-semibold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
                  >
                    Projects{" "}
                  </Link>
                  <svg
                    className=" svg fill-current ms-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </div>
                <ul class="dropdown-menu  hidden px-3  py-3 rounded-[10px] bg-white  pt-3">
                  <li class="">
                    <Link
                      className="font-semibold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
                      href="/en/innovations"
                      onClick={() => setIsOpen(false)}
                    >
                      Innovations
                    </Link>
                  </li>
                </ul>
              </motion.li>
              <motion.li
                initial={{ x: "-100vh", opacity: 0 }}
                transition={{
                  delay: 4 * 0.2,
                }}
                animate={{ x: 0, opacity: 1 }}
              >
                <Link
                  href={`/en/blogs?page=1`}
                  onClick={() => setIsOpen(false)}
                  className=" font-semibold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
                >
                  Blogs
                </Link>
              </motion.li>
              <motion.li
                initial={{ x: "-100vh", opacity: 0 }}
                transition={{
                  delay: 5 * 0.2,
                }}
                animate={{ x: 0, opacity: 1 }}
              >
                <Link
                  href={`/en/contactUs`}
                  className=" font-semibold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </motion.li>
              <motion.div
                className="language relative "
                initial={{ x: "-100vh", opacity: 0 }}
                transition={{
                  delay: 6 * 0.2,
                }}
                animate={{ x: 0, opacity: 1 }}
              >
                <div className="  p-2 font-bold    ">
                  <div className=" items-center justify-between gap-1 flex hover:text-secondary transition-colors cursor-pointer">
                    <div className="flex">
                      <Image src={uk} alt="uk" width={25} />
                      <p className=" ms-1">En</p>
                    </div>
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
                    <div className="flex items-center">
                      <Image src={uk} alt="uk" width={25} />
                      <p className=" ms-1">English</p>
                    </div>
                  </li>

                  <li
                    className=" hover:text-secondary transition-colors cursor-pointer"
                    onClick={() => setSelectedLanguage("ar")}
                  >
                    <div className="flex items-center">
                      <Image src={ar} alt="ar" width={25} />
                      <p className=" ms-1">Arabic</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </motion.ul>
          </motion.div>
        )}
      </header>
    </div>
  );
}
