import React from "react";
import "../Hero/hero.css";
import hmmimg from "../../../Assets/Home/hm-mimg-1.png";
import Button from "../../../components/Button/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Hero = () => {
  const settings = {
    dots: true,
    fade: true,
    autoplay: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false

  };
  return (
    <div>
      <Slider {...settings}>
        {/* content 1 */}
        <div className="hm-hr-mdiv hm-hr-background-img-1">
          <div className="hm-hr-mdivtext">
            <p className="hm-hr-mtext">
            Elevate your online presence with development, branding, and maintenance solutions.
            </p>
            <Button text={"EXPLORE T.ME SERVICES"} />
          </div>
        </div>
        {/* Content 2 */}
        <div className="hm-hr-mdiv hm-hr-background-img-2">
          <div className="hm-hr-mdivtext">
            <p className="hm-hr-mtext">Comprehensive IT services: support, repairs, upgrades and virus removal solutions.</p>
            <Button text={"EXPLORE T.ME SERVICES"} />
          </div>
        </div>
        {/* Content 3 */}
        <div className="hm-hr-mdiv hm-hr-background-img-3">
          <div className="hm-hr-mdivtext">
            <p className="hm-hr-mtext">Get in touch for all your digital, branding, and tech needs.</p>
            <Button text={"Contact Us"} />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
