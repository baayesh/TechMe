import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import web2Img from "../../../Assets/Our Services/Slider/img1.png";
import services2 from "../../../Assets/Our Services/Slider/Services2.png";
import services3 from "../../../Assets/Our Services/Slider/Services3.png";
import { Helmet } from "react-helmet-async";

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
    <>
    {/* For SEO Purpose */}
    <Helmet>
      <title>TechMe Services</title>
      <meta name='description' content='
"Discover top-notch web development services tailored to elevate your digital presence. At TechMe, we specialize in crafting dynamic and responsive websites that captivate audiences and drive results. From custom designs to seamless functionality, trust us to bring your vision to life. Explore our comprehensive suite of services today."'/>
    </Helmet>
    <div className="ser-mdiv">
      <div className="ser-left">
        <div className="ser-web-mdiv">
   
            <h2>WEB DEVELOPMENT AND HOSTING.</h2>
     
          <Link to='/web-development' className='ser-mlink'>
            <p>Web Development</p>
          </Link>
          <Link to='/hosting' className='ser-mlink' >
            <p>Hosting</p>
          </Link>
          <Link to='/branding'className='ser-mlink'>
            <p>Branding and Logo Creation</p>
          </Link>
          <Link to='web-maintain' className='ser-mlink'>
            <p>Website Maintenance</p>
          </Link>
        </div>
        <div className="ser-it-mdiv">
       
            <h2>IT SERVICES</h2>
   
          <Link to='/remote-support' className='ser-mlink'>
            <p>Remote Support</p>
          </Link>
          <Link to='/computer-and-laptop-repair' className='ser-mlink'>
            <p>Laptop Repair</p>
          </Link>
          <Link to='/computer-upgrade-and-servicing' className='ser-mlink'>
            <p>Computer Upgrade and Servicing</p>
          </Link>
          <Link to='/virus-removal' className='ser-mlink'>
            <p>Virus Removal</p>
          </Link>
        </div>
      </div>
      <div className="ser-right">
        <Slider {...settings}>
          <div className="ser-slider-img">
            <img src={web2Img} alt="" />
          </div>
          <div className="ser-slider-img">
            <img src={services2} alt="" />
          </div>
          <div className="ser-slider-img">
            <img src={services3} alt="" />
          </div>
        </Slider>
      </div>
    </div>
    </>
  );
};

export default ServicesMain;
