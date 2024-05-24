"use client";

import React from "react";
import EmblaCarouselClients from "./ui/EmblaCarouselClients";
import Image from "next/image";
import { sou } from "../../public";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Clients = () => {
  return (
    <div>
      {/* <EmblaCarouselClients slides={SLIDES} options={OPTIONS} /> */}

      <EmblaCarouselClients>
        {SLIDES.map((index) => (
          <div className="emblaClient__slide" key={index}>
            <div className="emblaClient__slide__number p-4">
              <div className="client flex flex-col md:flex-row items-center">
                <div className=" w-[100px] h-[100px] ">
                  <Image src={sou} alt="user" />
                </div>
                <div className=" mt-3 flex-1 md:ms-5">
                  <p className=" text-[14px] text-center text-white max-w-[500px] md:text-start font-light">
                    I have found many companies and many agencies, but when
                    dealing with you for the first time I felt that you were the
                    best! That is exactly what happened when I dealt with you.
                  </p>
                  <div className="text-white mt-4 text-center md:text-start">
                    <h5 className=" font-bold">Soufyane Khalfallah</h5>
                    <p className=" font-light">Front-end developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}{" "}
      </EmblaCarouselClients>
    </div>
  );
};

export default Clients;
