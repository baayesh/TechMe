import React from "react";
import "../WebDevelopment/styles/Hero.css";
import React1 from "../../Assets/Web Developement/react.png";
import WordPress from "../../Assets/Web Developement/Wordpress.png";
import ssh from "../../Assets/Web Developement/ssh.png";
import cloud from "../../Assets/Web Developement/Cloud.png";
import VPS from "../../Assets/Web Developement/VPS.png";  
import mysql from "../../Assets/Web Developement/mysql.png";
import ssl from "../../Assets/Web Developement/SSL.png";
import php from "../../Assets/Web Developement/php.png";
import JavaScript from "../../Assets/Web Developement/JS.png";
import CMS from "../../Assets/Web Developement/CMS.png";
import heroIMG from "../../Assets/Web Developement/HeroIMG.png";
import AliceCarousel from "react-alice-carousel";





const items = [
  <img src={React1} alt="javascript" className="tech-row ps-4 pe-4" />,
  <img src={JavaScript} alt="javascript" className="tech-row ps-4 pe-4" />,
  <img src={CMS} alt="javascript" className="tech-row ps-4 pe-4" />,
  <img src={VPS} alt="javascript" className="tech-row ps-4 pe-4" />,
  <img src={ssl} alt="javascript" o className="tech-row ps-4 pe-4" />,
  <img src={WordPress} alt="javascript" className="tech-row ps-4 pe-4" />,
  <img src={mysql} alt="javascript" className="tech-row ps-4 pe-4" />,
  <img src={php} alt="javascript" className="tech-row ps-4 pe-4" />,
  <img src={cloud} alt="javascript" className="tech-row ps-4 pe-4" />,
  <img src={ssh} alt="javascript" className="tech-row ps-4 pe-4" />,
];

const Hero = () => {
  const mainText = "We Love What We are Doing!".split(" ");

  // responsiveness of carousal
  const cRes = {
    0: { items: 3 },
    552: { items: 4 },
    768: { items: 7 },
  };
  return (
    <div>
      {/* Start of the Hero Section */}
      <div className="row component-body-hero-web-services">
        <img src={heroIMG} alt="Web development image" className="img-fluid" />
        <div className="hero-main-text-services">
          <h2 className="hero-main-text-fonts-services">
          Lorem ipsum dolor sit amet, consectetur adipiscing 
          </h2>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn-web  ">
            Let's Talk
          </button>
        </div>

      </div>

      {/* Start of the Technologies row */}

      <div className="row d-flex justify-content-center align-items-center mt-5 mb-5 tech-row">
        <div className="col-md-12">
          <AliceCarousel
            mouseTracking
            responsive={cRes}
            items={items}
            animationDuration={900}
            autoPlay={true}
            autoPlayInterval={1}
            infinite={true}
            animationType="fade"
            animationEasingFunction="ease"
            disableDotsControls={true}
            disableButtonsControls={true}
          />
        </div>
      </div>
      {/* End of the Technologies row  */}
    </div>
  );
};

export default Hero;
