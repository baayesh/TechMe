import React from "react";
import "../WebDevelopment/styles/Hero.css";
import { motion } from "framer-motion";
import mainIMG from "../../Assets/Web Developement/main.png";
import React1 from "../../Assets/Web Developement/react.png";
import WordPress from "../../Assets/Web Developement/Wordpress.png";
import ssh from "../../Assets/Web Developement/ssh.png";
import cloud from "../../Assets/Web Developement/Cloud.png";
import VPS from "../../Assets/Web Developement/vps.png";
import mysql from "../../Assets/Web Developement/mysql.png";
import ssl from "../../Assets/Web Developement/SSL.png";
import php from "../../Assets/Web Developement/php.png";
import JavaScript from "../../Assets/Web Developement/JS.png";
import CMS from "../../Assets/Web Developement/CMS.png";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// import { act } from "@testing-library/react";

const handleDragStart = (e) => e.preventDefault();

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
  <img src={ssh} alt="javascript" className="tech-row ps-4 pe-4" />
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
      {/* Start of full height container */}
      <div className="component-body-hero-web">
        <div className="row ">
          {/* Start of first column */}
          <div className="col-lg-6 first-col d-flex justify-content-center align-items-center main-text">
            <div className="p-3 mb-3">
              {/* Start of span animation */}
              {mainText.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 2,
                    delay: i / 3,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
              {/* End of span Animation */}
            </div>
          </div>
          {/* End of first Column */}
          {/* Start of second column */}
          <div className="col-lg-6 second-col no-gutters">
            <img
              src={mainIMG}
              alt="Web Development image"
              className="img-fluid main-img"
            />
          </div>
        </div>
        {/* End of the second column */}
      </div>
      {/* End of full height container */}

      {/* Start of the Technologies row */}

      <div className="row d-flex justify-content-center align-items-center mt-5 mb-5 tech-row">
        <div className="col-md-12">
          <AliceCarousel
            mouseTracking
            responsive={cRes}
            items={items}
            animationDuration={900}
            autoPlay={true}
            autoPlayInterval={2000}
            infinite={true}
            animationType="fade"
            animationEasingFunction="ease"
            disableDotsControls={true}
          />
        </div>
      </div>
      {/* End of the Technologies row  */}
    </div>
  );
};

export default Hero;
