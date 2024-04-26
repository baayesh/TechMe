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
          <img src={GemiTeas} alt="" />
        </div>
        <div className="slider-mdiv">
          <img src={TheNinjas} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default CustomerReviews;
