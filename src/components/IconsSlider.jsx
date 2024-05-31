"use client";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import React from "react";
import Slider from "react-infinite-logo-slider";
import Image from "next/image";
import { Iso, ce, google, wipo, zoho } from "../../public";

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
        <Slider
          width="250px"
          duration={40}
          pauseOnHover={true}
          blurBorders={false}
          blurBoderColor={"#fff"}
        >
          <Slider.Slide>
            <Image src={google} alt="google" />
          </Slider.Slide>
          <Slider.Slide>
            <Image src={Iso} alt="google" />
          </Slider.Slide>
          <Slider.Slide>
            <Image src={ce} alt="ce" />
          </Slider.Slide>
          <Slider.Slide>
            <Image src={wipo} alt="wipo" />
          </Slider.Slide>
          <Slider.Slide>
            <Image src={zoho} alt="zoho" />
          </Slider.Slide>
        </Slider>
      </div>
    </div>
  );
}

export default IconsSlider;
