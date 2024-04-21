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
    autoplay: false,
    autoplaySpeed: 7000,
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

          <div >
            <Link to="/services" className="hm-hr-mlink">
              Our Services
            </Link>
            <div>
              <svg
                width="50px"
                height="50px"
                viewBox="-2.4 -2.4 28.80 28.80"
                fill="none"
                className="hm-hr-marrow"
                xmlns="http://www.w3.org/2000/svg"
                transform="rotate(0)"
                stroke="#000000"
              >
                <g  stroke-width="0" />

                <g
                
                  stroke-linecap="round"
                  stroke-linejoin="round" 
                  stroke="#000000"
                  stroke-width="0.048"
                />

                <g >
                  {" "}
                  <path
                    d="M12 4V20M12 4L8 8M12 4L16 8"
                    stroke="#f2f2f2"
                    stroke-width="0.768"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{" "}
                </g>
              </svg>
            </div>
          </div>
        </div>
        {/* Content 2 */}
        <div className="hm-hr-mdiv hm-hr-background-img-2">
          <p className="hm-hr-mtext">
            Comprehensive <span>IT services</span>:
            <br />
            support, repairs, upgrades and virus removals.
          </p>
          <Link to="/services" className="hm-hr-mlink">
            Our Services
          </Link>
        </div>
        {/* Content 3 */}

        <div className="hm-hr-mdiv hm-hr-background-img-3">
          <p className="hm-hr-mtext">
            <span>Get in touch </span>for all your digital, branding and{" "}
            <span>tech needs.</span>
          </p>
          <Link to="/contact-us" className="hm-hr-mlink">
            Contact Us
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
