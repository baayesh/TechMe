import React from "react";
import "../Hero/hero.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Button from "../../../components/Button/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Hero = () => {
  const settings = {
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <div>
      <Slider {...settings}>
        {/* content 1 */}
        <div className="hm-hr-mdiv hm-hr-background-img-1">
          <p className="hm-hr-mtext">
            Elevate your <span>online presence</span> with development, branding
            and maintenance <span>solutions</span>.
          </p>

          <Link to='/coming-soon'className="hm-hr-mlink">Our Services</Link>
        </div>
        {/* Content 2 */}
        <div className="hm-hr-mdiv hm-hr-background-img-2">
          <p className="hm-hr-mtext">
            Comprehensive <span>IT services</span>:
            <br />
            support, repairs, upgrades and virus removals.
          </p>
          <Link to='/coming-soon'className="hm-hr-mlink">Our Services</Link>
        </div>
        {/* Content 3 */}

        <div className="hm-hr-mdiv hm-hr-background-img-3">
          <p className="hm-hr-mtext">
            <span>Get in touch </span>for all your digital, branding and{" "}
            <span>tech needs.</span>
          </p>
          <Link to='/coming-soon'className="hm-hr-mlink">Contact Us</Link>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
