"use client";

import React from "react";
import EmblaCarouselClients from "./ui/EmblaCarouselClients";
import Image from "next/image";
import { sou } from "../../public";

// const OPTIONS = { loop: true };
// const SLIDE_COUNT = 5;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

 function Clients({ object }){
  // console.log(clients, "this the object");
  return (
    <div>
      {/* <EmblaCarouselClients slides={SLIDES} options={OPTIONS} /> */}

      <EmblaCarouselClients object={object}>
        {object.map((client, i) => (
          <div className="emblaClient__slide" key={i}>
            <div className="emblaClient__slide__number p-4">
              <div className="client flex flex-col md:flex-row items-center">
                <div className=" w-[100px] h-[100px] ">
                  <Image src={client.img} alt="user" />
                </div>
                <div className=" mt-3 flex-1 md:ms-5">
                  <p className=" text-[14px] md:text-[19px] text-center text-white max-w-[500px] md:text-start font-light">
                    {client.message}
                  </p>
                  <div className="text-white mt-4 text-center md:text-start">
                    <h5 className=" font-bold">{client.name}</h5>
                    <p className=" font-light">{client.role}</p>
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
