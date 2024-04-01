import React from "react";
import "./Services.css";
import webdev from "../../../Assets/Home/Services/webdev.png";
import "react-alice-carousel/lib/alice-carousel.css";
import brandingAndLogoCreation from "../../../Assets/Home/Services/branding.png";
import webMaintain from "../../../Assets/Home/Services/webMaintain.png";
import remoteSupport from "../../../Assets/Home/Services/remoteSupport.png";
import computerAndLaptopepairs from "../../../Assets/Home/Services/laptopRepair.png";
import compUpAndServicing from "../../../Assets/Home/Services/laptopUpgrade.png";
import compVirusRemove from "../../../Assets/Home/Services/virusRemove.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay:true,
    autoplaySpeed:1750
  };
  return (
    <div className="hm-sv-container">
      <div className="hm-sv-title-container">
        <h1 className="hm-sv-title">WHAT YOU GET FROM TECHME</h1>
      </div>

      {/* Card */}
        <div className="hm-sv-card-container">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="hm-sv-card">
              {/* <div className="hm-sv-card-tagcontainer">
                <p>{d.tag}</p>
              </div> */}
              <div className="hm-sv-card-content">
                <h3 className="hm-sv-card-title">{d.title}</h3>
                <img
                  src={d.img}
                  className="hm-sv-card-img"
                  alt="Web developement icon"
                />
                <p className="hm-sv-card-para">{d.para}</p>
              </div>
            </div>
          ))}
           </Slider>
        </div>
       
  

      {/* <div className="hm-sv-card">
          <div className="hm-sv-card-tagcontainer">
            <p>Web Service</p>
          </div>
          <h3 className="hm-sv-card-title">BRANDING AND LOGO CREATION</h3>
          <img
            src={brandingAndLogoCreation}
            className="hm-sv-card-img"
            alt="Web developement icon"
          />
          <p className="hm-sv-card-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor in Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor in
          </p>
        </div>

        <div className="hm-sv-card">
          <div className="hm-sv-card-tagcontainer">
            <p>Web Service</p>
          </div>
          <h3 className="hm-sv-card-title">WEBSITE MAINTANANCE</h3>
          <img
            src={webMaintain}
            className="hm-sv-card-img"
            alt="Web developement icon"
          />
          <p className="hm-sv-card-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor in Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor in
          </p>
        </div>

        <div className="hm-sv-card">
          <div className="hm-sv-card-tagcontainer">
            <p>IT Service</p>
          </div>
          <h3 className="hm-sv-card-title">REMOTE SUPPORT</h3>
          <img
            src={remoteSupport}
            className="hm-sv-card-img"
            alt="Web developement icon"
          />
          <p className="hm-sv-card-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor in Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor in
          </p>
        </div>

        <div className="hm-sv-card">
          <div className="hm-sv-card-tagcontainer">
            <p>IT Service</p>
          </div>
          <h3 className="hm-sv-card-title">COMPUTER & LAPTOP REPAIRS</h3>
          <img
            src={computerAndLaptopepairs}
            className="hm-sv-card-img"
            alt="Web developement icon"
          />
          <p className="hm-sv-card-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor in Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor in
          </p>
        </div>

        <div className="hm-sv-card">
          <div className="hm-sv-card-tagcontainer">
            <p>IT Service</p>
          </div>
          <h3 className="hm-sv-card-title">COMPUTER UPGRADE AND SERVICING</h3>
          <img
            src={compUpAndServicing}
            className="hm-sv-card-img"
            alt="Web developement icon"
          />
          <p className="hm-sv-card-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor in Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor in
          </p>
        </div>

        <div className="hm-sv-card">
          <div className="hm-sv-card-tagcontainer">
            <p>IT Service</p>
          </div>
          <h3 className="hm-sv-card-title">COMPUTER VIRUS REMOVAL</h3>
          <img
            src={compVirusRemove}
            className="hm-sv-card-img"
            alt="Web developement icon"
          />
          <p className="hm-sv-card-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor in Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor in
          </p>
        </div> */}
    </div>
  );
};

// Dataset for cards...
const data = [
  {
    tag: "Web Service",
    title: "WEB DEVELOPMENT & HOSTING",
    img: webdev,
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
  },
  {
    tag: "Web Service",
    title: "BRANDING AND LOGO CREATION",
    img: brandingAndLogoCreation,
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
  },
  {
    tag: "Web Service",
    title: "WEBSITE MAINTANANCE",
    img: webMaintain,
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
  },
  {
    tag: "IT Service",
    title: "REMOTE SUPPORT",
    img: remoteSupport,
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
  },
  {
    tag: "IT Service",
    title: "COMPUTER AND LAPTOP REPAIRS",
    img: computerAndLaptopepairs,
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
  },
  {
    tag: "IT Service",
    title: "COMPUTER UPGRADE AND SERVICING",
    img: compUpAndServicing,
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
  },
  {
    tag: "IT Service",
    title: "COMPUTER VIRUS REMOVAL",
    img: compVirusRemove,
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
  },
];

export default Services;
