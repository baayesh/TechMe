import React from "react";
import "../Hero/hero.css";
import hmmimg from "../../../Assets/Home/hm-mimg-1.png";
import hmmimg2 from "../../../Assets/Home/hm-mimg-2.png";
import Button from "../../../components/Button/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Hero = () => {
  const settings = {
    dots: true,
    fade: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <div >
    <Slider {...settings}>
      {/* content 1 */}
      <div className="hm-hr-mdiv hm-hr-background-img-1">
       
          <p className="hm-hr-mtext">
          Elevate your <span>online presence</span> with development, branding and maintenance <span>solutions</span>.
          </p>
          
       
        <Button text={"TECHME SERVICES"} />
      </div>
      {/* Content 2 */}
      <div className="hm-hr-mdiv hm-hr-background-img-2">
        
          <p className="hm-hr-mtext">Comprehensive <span>IT services</span>:
          <br />support, repairs, upgrades and virus removals.</p>
          <Button text={"OUR SERVICES"} />
        
      </div>
      {/* Content 3 */}
      
        <div className="hm-hr-mdiv hm-hr-background-img-3">
            <p className="hm-hr-mtext"><span>Get in touch </span>for all your digital, branding and <span>tech needs.</span></p>
            <Button text={"Contact Us"} />
        </div>
      
    </Slider>
  </div>
  );
};

export default Hero;
