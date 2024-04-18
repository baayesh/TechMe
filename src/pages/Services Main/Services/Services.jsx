import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import web2Img from "../../../Assets/Our Services/Slider/img1.png";

const ServicesMain = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="ser-mdiv">
      <div className="ser-left">
        <div className="ser-web-mdiv">
          <h2>WEB DEVELOPMENT AND HOSTING.</h2>
          <p>Web Development.</p>
          <p>Hosting.</p>
          <p>Branding and Logo Creation.</p>
          <p>Website Maintenance.</p>
        </div>
        <div className="ser-it-mdiv">
          <h2>IT SERVICES.</h2>
          <p>Remote Support.</p>
          <p>Laptop Repair.</p>
          <p>Computer Upgrade and Servicing.</p>
          <p>Virus Removal.</p>
        </div>
      </div>
      <div className="ser-right">
        <Slider {...settings}>
          <div className="ser-slider-img">
            <img src={web2Img} alt="" />
          </div>
          <div className="ser-slider-img">
            <img src={web2Img} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ServicesMain;
