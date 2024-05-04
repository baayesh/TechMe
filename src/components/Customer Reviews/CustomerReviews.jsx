import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CustomerReviews.css";
import GemiTeas from "../../Assets/Home/CustomerReviews/Gemi_Teas.png";
import TheNinjas from "../../Assets/Home/CustomerReviews/The_Ninjas.png";

const CustomerReviews = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    arrows:false,
    autoplaySpeed: 3000,
    speed: 1000,
  };
  return (
    <div className="ayesh">
      <Slider {...settings}>
        <div className="slider-mdiv">
          <a href="http://gemiteas.com" target="_blank"><img src={GemiTeas} alt="" /></a>
        </div>
        <div className="slider-mdiv">
          <a href="http://theninjas.co.nz" target="_blank"><img src={TheNinjas} alt="" /></a>
        </div>
      </Slider>
    </div>
  );
};

export default CustomerReviews;
