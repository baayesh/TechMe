import React from "react";
import "../Hero/hero.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Button from "../../../components/Button/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet-async";
const Hero = () => {
  const settings = {
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <>
    <Helmet>
      <title>TechMe</title>
    </Helmet>
    <div>
      <Slider {...settings}>
        {/* content 1 */}
        <div className="hm-hr-mdiv hm-hr-background-img-1">
          <p className="hm-hr-mtext">
            Elevate your <span>online presence</span> with development, branding
            and maintenance <span>solutions</span>.
          </p>

          <div className="link-and-icon">
            <Link to="/services" className="hm-hr-mlink">
              Our Services
            </Link>

            {/* Arrow */}
            <div>
              <svg
              className="hm-hr-m-arrow"
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="rotate(90)"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M12 4V20M12 4L8 8M12 4L16 8"
                    stroke="#ffffff"
                    stroke-width="1"
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

          <div className="link-and-icon">
            <Link to="/services" className="hm-hr-mlink">
              Our Services
            </Link>
            {/* Arrow */}
            <div>
            <svg
                className="hm-hr-m-arrow"
                  width="50px"
                  height="50px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(90)"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 4V20M12 4L8 8M12 4L16 8"
                      stroke="#ffffff"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />{" "}
                  </g>
                </svg>
            </div>
          </div>
        </div>
        {/* Content 3 */}

        <div className="hm-hr-mdiv hm-hr-background-img-3">
          <p className="hm-hr-mtext">
            <span>Get in touch </span>for all your digital, branding and{" "}
            <span>tech needs.</span>
          </p>
          <div className="link-and-icon">
            <Link to="/contact-us" className="hm-hr-mlink">
              Contact Us
            </Link>
            {/* Arrow */}
            <div>
            <svg
                className="hm-hr-m-arrow"
                  width="50px"
                  height="50px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(90)"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 4V20M12 4L8 8M12 4L16 8"
                      stroke="#ffffff"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />{" "}
                  </g>
                </svg>
            </div>
          </div>
        </div>
      </Slider>
    </div>
    </>
  );
};

export default Hero;
