import React from "react";
import "../Hero/hero.css";
import hmmimg from "../../../Assets/Home/hm-mimg-1.png";
import hmmimg2 from "../../../Assets/Home/hm-mimg-2.png"
import Button from "../../../components/Button/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Hero = () => {
  const settings = {
    dots: true,
    fade: true,
    autoplay: true,
    autoplay: false,
    autoplaySpeed: 2500,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="hm-hr-mdiv-1">
          <div className="hm-hr-mdiv-1-text">
            <p>
              Elevate your <span>online presence </span>with development,
              branding, and maintenance <span>solutions.</span>
            </p>
            <Button text="Get Started" />
          </div>
          <div className="hm-hr-mdiv-1-img">
            <img src={hmmimg} alt="" />
          </div>
        </div>
        <div className="hm-hr-mdiv-2">
          <div className="hm-hr-mdiv-2-img"><img src={hmmimg2} alt="" /></div>
          <div className="hm-hr-mdiv-2-text">
            <p>
              Comprehensive IT services: support, repairs, upgrades and virus
              removal solutions.
            </p>
            <Button text="Get Started" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
