"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
import Lottie from "react-lottie";
import animationData from "../../public"; // Replace with your JSON path
import { motion, Variants } from "framer-motion";
import { logo, menu, close } from "../../public";
import Link from "next/link";

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
    link: "Home",
    href: "/",
  },
  {
    link: "About Us",
    href: "/About-Us",
  },
  {
    link: "Services",
    href: "/Services",
  },
  {
    link: "Projects",
    href: "/Projects",
  },
  {
    link: "Blog",
    href: "/Blog",
  },
  {
    link: "Contact Us",
    href: "/Contact-Us",
  },
];
export default function Menubar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
  const animationRef = useRef(null);

  return (
    <>
      <header className=" py-4 shadow flex flex-col  items-center ">
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
                  initial={{ y: "-100vh", opacity: 0 }}
                  transition={{ delay: i * 0.45 }}
                  animate={{ y: 0, opacity: 1 }}
                  key={link.link}
                >
                  <Link
                    href={link.href}
                    className=" font-semibold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
                  >
                    {link.link}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </header>
    </>
  );
}
