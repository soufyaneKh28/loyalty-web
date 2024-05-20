import React from "react";
import Slider from "./ui/Slider";
import Image from "next/image";
import { Marketing } from "../../public";
import EmblaCarousel from "./ui/EmblaCarousel";
const sliderImageUrl = [
  //First image url
  {
    title: "Digital marketing",
    imgDark: Marketing,
  },
  {
    title: "Programmation Solution",
    imgDark: Marketing,
  },
  //Second image url
  {
    title: "Design",
    imgDark: Marketing,
  },
  //Third image url
  {
    title: "Mobile Application",
    imgDark: Marketing,
  },

  //Fourth image url

  {
    title: "Search Engine Optimization",
    imgDark: Marketing,
  },
];

const OPTIONS = { align: "start" };
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function Services({ object }) {
  return (
    <div className="container">
      {/* <Slider>
        {sliderImageUrl.map((service, index) => {
          return (
            <div className="slider w-[300pxh-[290px]" key={index}>
              <div className=" max-h-10">
                <Image
                  src={service.imgDark}
                  alt="img"
                  className="w-[100%] h-[100%] object-cover"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <h3 className="">{service.title}</h3>
            </div>
          );
        })}
      </Slider> */}
      <EmblaCarousel options={OPTIONS}>
        {object.map((service, index) => {
          return (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <div className=" img-container h-[60px] w-[60px] p-3 rounded-full bg-[#98E4E8]">
                  <Image
                    src={service.imgDark}
                    alt="img"
                    className="w-[100%] h-[100%] object-cover"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
                <h3 className="mt-2 ">{service.title}</h3>
                <p className="mt-3 ltr:font-Roboto">{service.description}</p>
              </div>
            </div>
          );
        })}
      </EmblaCarousel>
    </div>
  );
}
{
  /* {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">{index + 1}</div>
            </div>
          ))} */
}
export default Services;
