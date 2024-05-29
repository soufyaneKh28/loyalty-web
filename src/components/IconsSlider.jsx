"use client";
// import {
//   PrevButton,
//   NextButton,
//   usePrevNextButtons,
// } from "./ui/EmblaCarouselArrowButtons";
// import EmblaCarousel from "./ui/EmblaCarousel";
// import Slider from "react-slick";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import React from "react";
import Slider from "react-infinite-logo-slider";
import Image from "next/image";

function IconsSlider() {
  const settings = {
    dots: false, // Show dots for navigation
    infinite: true, // Infinite loop sliding
    speed: 500, // Transition speed
    slidesToShow: 4, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Auto play
    autoplaySpeed: 2000, // Auto play speed
    pauseOnHover: true, // Pause on hover
  };

  return (
    <div className="container">
      <div className="icon-carousel">
        {/* <EmblaCarousel>
          <div className="embla__slide">
            <div className="embla__slide__number">
              {" "}
              <div className="slider-icon">
                <FaFacebook size={50} />
              </div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__slide__number">
              {" "}
              <div className="slider-icon">
                <FaFacebook size={50} />
              </div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__slide__number">
              {" "}
              <div className="slider-icon">
                <FaFacebook size={50} />
              </div>
            </div>
          </div>

          <div className="  slider-icon">
            <FaTwitter size={50} />
          </div>
          <div className="slider-icon">
            <FaInstagram size={50} />
          </div>
          <div className="slider-icon">
            <FaLinkedin size={50} />
          </div>
          {/* Add more icons as needed */}
        {/* <div className="embla__slide" key={index}>
              <div className="embla__slide__number">{index + 1}</div>
            </div> 
        </EmblaCarousel> */}

        <Slider
          width="250px"
          duration={40}
          pauseOnHover={true}
          blurBorders={false}
          blurBoderColor={"#fff"}
        >
          <Slider.Slide>
            <FaTwitter size={50} />
          </Slider.Slide>
          <Slider.Slide>
            <FaFacebook size={50} />
          </Slider.Slide>
          <Slider.Slide>
            <FaInstagram size={50} />
          </Slider.Slide>
          <Slider.Slide>
            <FaLinkedin size={50} />
          </Slider.Slide>
          <Slider.Slide>
            <FaTwitter size={50} />
          </Slider.Slide>
          <Slider.Slide>
            <FaFacebook size={50} />
          </Slider.Slide>
          <Slider.Slide>
            <FaInstagram size={50} />
          </Slider.Slide>
          <Slider.Slide>
            <FaLinkedin size={50} />
          </Slider.Slide>
        </Slider>
      </div>
    </div>
  );
}

export default IconsSlider;
