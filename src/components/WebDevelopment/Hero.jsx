import React from "react";
import "../WebDevelopment/styles/Hero.css";
import { motion } from "framer-motion";
import mainIMG from "../../Assets/Web Developement/main.png";
import CMS from "../../Assets/Web Developement/CMS.png";
import JavaScript from "../../Assets/Web Developement/JavaScript.png";
import API from "../../Assets/Web Developement/API.png";
import VPS from "../../Assets/Web Developement/VPS.png";
import SSL from "../../Assets/Web Developement/SSL.png";
import WordPress from "../../Assets/Web Developement/Wordpress.png";
import React1 from "../../Assets/Web Developement/React1.png";

const Hero = () => {
  const mainText = "We Love What We are Doing!".split(" ");
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
      <div className="row d-flex justify-content-center align-items-center mt-5 mb-5">
        <div className="col-md-12">
          <img src={React1} alt="javascript" className="tech-row ps-4 pe-4" />
          <img src={JavaScript} alt="javascript" className="tech-row ps-4 pe-4" />
          <img src={CMS} alt="javascript" className="tech-row ps-4 pe-4" />
          <img src={API} alt="javascript" className="tech-row ps-4 pe-4" />
          <img src={VPS} alt="javascript" className="tech-row ps-4 pe-4" />
          <img src={SSL} alt="javascript" className="tech-row ps-4 pe-4" />
          <img src={WordPress} alt="javascript" className="tech-row ps-4 pe-4" />
        </div>
      </div>
      {/* End of the Technologies row  */}
    </div>
  );
};

export default Hero;
