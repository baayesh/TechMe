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
    dots: false,
    infinite: true,
    arrows: true,
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 4000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,  
        }
      },
      {
        breakpoint: 552,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  
  return (
    <div className="hm-sv-container">
      <div className="hm-sv-title-container">
        <h1 className="hm-sv-title">OUR SERVICES</h1>
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
    title: "WEBSITE DEVELOPMENT & HOSTING",
    img: webdev,
    para: "We create custom websites tailored to your needs and provide reliable hosting solutions for online visibility and security.",
  },
  {
    tag: "Web Service",
    title: "BRANDING AND LOGO DESIGNING",
    img: brandingAndLogoCreation,
    para: "Our team craft unique logos and develop branding strategies to help your business stand out and leave a lasting impression.",
  },
  {
    tag: "Web Service",
    title: "WEBSITE MAINTENANCE",
    img: webMaintain,
    para: "We keep your website secure and up-to-date, handling everything from content updates to security scans for smooth online performance.",
  },
  {
    tag: "IT Service",
    title: "REMOTE SUPPORT",
    img: remoteSupport,
    para: "Our skilled technicians offer efficient troubleshooting and technical assistance remotely, resolving IT issues without the need for an on-site visit.",
  },
  {
    tag: "IT Service",
    title: "COMPUTER AND LAPTOP REPAIRS",
    img: computerAndLaptopepairs,
    para: "Our experienced technicians provide comprehensive repair services for hardware and software issues, minimising downtime and ensuring device functionality.",
  },
  {
    tag: "IT Service",
    title: "COMPUTER UPGRADE AND SERVICING",
    img: compUpAndServicing,
    para: "We optimise your computer's performance with hardware upgrades and routine maintenance to extend its longevity and efficiency.",
  },
  {
    tag: "IT Service",
    title: "VIRUS REMOVAL",
    img: compVirusRemove,
    para: " Our advanced tools and techniques effectively identify and eliminate viruses, safeguarding your system and data from cyber threats.",
  },
];

export default Services;
