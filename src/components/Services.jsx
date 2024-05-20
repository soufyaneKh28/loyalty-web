import React from "react";
import Slider from "./ui/Slider";
import Image from "next/image";
import { Marketing } from "../../public";
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

function Services() {
  return (
    <div className="container">
      <Slider>
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
      </Slider>
    </div>
  );
}

export default Services;
