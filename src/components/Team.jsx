"use client";

import Image from "next/image";
import React from "react";
import { MotionLayout } from ".";

const Team = ({ members }) => {
  return (
    <div className="container flex justify-center  ">
      <div className=" flex justify-between pb-10 flex-wrap max-w-[785px] ">
        {members.map((member, i) => (
          <MotionLayout delay={0.2 * i} key={i}>
            <div className="member max-w-[165px] p-1 my-4  flex flex-col items-center ">
              <div
                className={` overflow-hidden member-img ${
                  i % 2 === 0 ? " bg-[#F0A400]" : "bg-[#30C4E5]"
                } w-[155px] h-[190px] relative `}
              >
                <Image
                  className=" absolute bottom-0"
                  src={member.img}
                  alt="member"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <div className=" flex flex-col items-center mt-3">
                <h3 className=" text-white font-semibold rtl:font-bold text-center">
                  {member.name}
                </h3>
                <p className=" text-white font-light rtl:font-medium mt-1 text-center">
                  {member.role}
                </p>
              </div>
            </div>
          </MotionLayout>
        ))}
      </div>
    </div>
  );
};

export default Team;
