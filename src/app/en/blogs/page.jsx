import data from "@/app/content-en";
import { poppinsClass } from "@/app/font";
import React from "react";

function Blogs() {
  return (
    <main className={`${poppinsClass}`}>
      <section className={`"flex  pb-5 py-[150px] `}>
        <div className="container md:justify-center md:items-center  flex flex-col ">
          <div className=" textContent md:text-center flex flex-col md:items-center">
            <h1 className=" text-[50px] max-w-[350px] md:text-[50px] md:max-w-[600px] font-bold text-primaryDark leading-[48px] md:*:text-center md:leading-[60px]">
              Our <span className=" text-secondary">Latest</span> Posts
            </h1>
            <p className=" mt-[10px] max-w-[300px] md:max-w-[800px] text-[#686567] text-[16px] font-Roboto font-medium leading-[27px]">
              Check out our specialized articles on marketing and business,
              valuable articles on the importance of marketing, programming, and
              design in different fields. Digitization is a vast and innovative
              world, but it is actually a science that is developing very
              quickly and at a very impressive rate. Read some articles
              regarding digital marketing, programming, design, and how to apply
              them scientifically and practically on the ground.
            </p>
          </div>
        </div>
      </section>
      <section></section>
    </main>
  );
}

export default Blogs;
