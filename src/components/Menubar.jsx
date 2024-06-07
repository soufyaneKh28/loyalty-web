"use client";
import { Poppins, Roboto } from "next/font/google";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

import { motion } from "framer-motion";
import { logo, menu, close } from "../../public";
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
    href: "/en/projects",
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

export default function Menubar() {
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      <header
        className={`${poppins.className}   ${
          isScrolled || isOpen ? "scrolled" : ""
        } header py-4  flex flex-col  items-center fixed w-full bg-white z-[50] transition-all`}
      >
        <div className="container flex justify-between ">
          <Link href="/">
            <Image src={logo} alt="logo" width={80} />
          </Link>

          <nav className="  hidden md:block">
            <ul className="flex gap-9">
              {links.map((link) => (
                <Link
                  href={link.href}
                  key={link.link}
                  className=" font-semibold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
                >
                  {link.link}
                </Link>
              ))}
            </ul>
          </nav>
          <select
            className=" hidden md:flex"
            value={selectedLanguage}
            onChange={(e) => onChange(e)}
          >
            <option value="en">en</option>

            <option value="ar">العربية</option>
          </select>

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
              {links.map((link, i) => (
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
              ))}
              <select
                className=" bg-transparent py-1 px-5 border rounded focus:outline-none"
                value={selectedLanguage}
                onChange={(e) => onChange(e)}
              >
                <option value="en">en</option>

                <option value="ar" className="">
                  العربية
                </option>
              </select>
            </motion.ul>
          </motion.div>
        )}
      </header>
    </>
  );
}
