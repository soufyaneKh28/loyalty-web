import data from "@/app/content-en";
import { poppinsClass } from "@/app/font";
import { CallTo } from "@/components";
import { poppins } from "@/components/Menubar";
import React from "react";

export const metadata = {
  title: "Page in english",
  description: "Generated by create next app",
};

const page = () => {
  return (
    <main className={`${poppinsClass}`}>
      <section className={`"flex  pb-5 py-[150px] `}>
        <div className="container md:justify-center md:items-center  flex flex-col ">
          <div className=" textContent md:text-center flex flex-col md:items-center">
            <h1 className=" text-[50px] max-w-[550px] md:text-[50px] md:max-w-[800px] font-bold text-primaryDark leading-[48px] md:*:text-center md:leading-[60px]">
              We Combine Marketing With Programming{" "}
              <span className=" text-secondary">To Give You </span>The Best
              Results
            </h1>
            <p className=" mt-[10px] max-w-[300px] md:max-w-[700px] text-[#686567] text-[16px] font-Roboto font-medium leading-[27px]">
              {data.heroAbout.description}
            </p>
            <button className="w-fit text-primary text-[14px] font-medium mt-4  bg-secondary rounded-full px-9 py-3">
              {data.heroAbout.cta}
            </button>
          </div>
        </div>
      </section>
      <section className="py-10 bg-primaryDark">
        <CallTo object={data} />
      </section>
    </main>
  );
};

export default page;
