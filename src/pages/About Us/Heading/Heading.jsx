import React from "react";
import "./Heading.css";

const Heading = () => {
  const introHeading = "SIMPLE SOLUTIONS FOR DIFFICULT PROBLEMS";

  return (
    <div className="about-heading-mdiv">
      <div className="about-intro">
        <h3>Welcome To TechME</h3>
        <div className="about-line"></div>

        <p>
          Welcome to TechMe, where we're dedicated to Creating Better IT
          Solutions. With a passion for innovation and a knack for simplifying
          complex challenges, we specialise in crafting intuitive digital
          experiences that elevate businesses to new heights. At the heart of
          our ethos lies a genuine love for building simple solutions to
          intricate problems. Our team of skilled professionals thrives on
          transforming ideas into reality, blending creativity with cutting-edge
          technology to deliver exceptional results. Whether it's designing
          sleek websites or developing robust applications, we're committed to
          providing tailored solutions that exceed expectations. Let us help you
          navigate the digital landscape with confidence and clarity.
        </p>
      </div>
      <div className="about-info">
        <div className="about-info-row">
          <div className="about-info-col about-info-border-1">
            <h5>3.5</h5>
            <p>Years of Experience</p>
          </div>
          <div className="about-info-col about-info-border-2">
            <h5>20</h5>
            <p>Completed Projects</p>
          </div>
        </div>
        <div className="about-info-row">
          <div className="about-info-col about-info-border-3">
         
            <h5>100+</h5>
            <p>Positive reviews</p>
          </div>
          <div className="about-info-col about-info-border-4">
            <h5>200</h5>
            <p>Trusted Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
