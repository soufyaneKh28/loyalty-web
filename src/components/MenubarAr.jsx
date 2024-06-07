"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { Cairo } from "next/font/google";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { logo, menu, close } from "../../public";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
import { Router } from "next/router";
const cairo = Cairo({
  subsets: ["arabic"],

  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

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
        className={` ${isScrolled || isOpen ? "scrolled" : ""}  ${
          cairo.className
        } header py-4  flex flex-col  items-center font-Ibm fixed w-full bg-white z-[50] transition-all`}
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
                  className=" font-bold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
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
