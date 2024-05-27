"use client";

import Image from "next/image";
import React from "react";
import { circles, prize } from "../../public";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
const Statis = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Trigger when 10% of the component is in view
  });
  return (
    <div className="container my-8">
      <div className=" py-[50px] md:py-0 bg-primaryDark relative w-full  overflow-hidden rounded-[10px] flex flex-col">
        <div className="circle">
          <Image
            src={circles}
            alt="circles"
            width={350}
            className=" absolute top-[-170px] md:top-0  right-[50%] md:rotate-90 md:right-0 translate-x-[50%] md:translate-x-[50%]"
          />
        </div>
        <div className="stats my-10 md:flex justify-center md:gap-20">
          <div className="flex my-5  items-start justify-center">
            <div className="stats-icon ">
              <Image src={prize} alt="prize" className="mt-2" />
            </div>
            <div className=" text-white">
              <h3 className="text-[28px] font-bold" ref={ref}>
                {inView && <CountUp duration={3} start={0} end={120} />}+
              </h3>
              <p className=" font-normal">
                Successful <br /> Project
              </p>
            </div>
          </div>
          <div className="flex my-5 items-start justify-center">
            <div className="stats-icon ">
              <Image src={prize} alt="prize" className="mt-2" />
            </div>
            <div className=" text-white">
              <h3 className="text-[28px] font-bold" ref={ref}>
                {inView && <CountUp duration={3.5} start={0} end={180} />}+
              </h3>
              <p className=" font-normal">
                Happy
                <br />
                Client
              </p>
            </div>
          </div>
          <div className="flex my-5  items-start justify-center">
            <div className="stats-icon ">
              <Image src={prize} alt="prize" className="mt-2" />
            </div>
            <div className=" text-white">
              <h3 className="text-[28px] font-bold" ref={ref}>
                {inView && <CountUp duration={4} start={0} end={60} />}+
              </h3>
              <p className=" font-normal">
                Team
                <br />
                Member
              </p>
            </div>
          </div>
        </div>
        <div className="circle">
          <Image
            src={circles}
            alt="circles"
            width={350}
            className=" absolute rotate-[160deg] bottom-[-170px] md:top-0  right-[50%] md:rotate-[280deg] md:left-0 translate-x-[50%] md:translate-x-[-100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Statis;