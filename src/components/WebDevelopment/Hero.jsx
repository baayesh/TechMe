import React from "react";
import "../WebDevelopment/styles/Hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  const mainText = "We Love What We are Doing!".split(" ");
  return (
    <div>
      {/* Start of full height container */}
      <div className="component-body-hero-web">
        <div className="row ">
          {/* Start of first column */}
          <div className="col-md-6 first-col d-flex justify-content-center align-items-center main-text">
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
          <div className="col-md-6 second-col"></div>
        </div>
        {/* End of the second column */}
      </div>
      {/* End of full height container */}
    </div>
  );
};

export default Hero;
