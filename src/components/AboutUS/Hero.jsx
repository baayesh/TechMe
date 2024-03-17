import React from "react";
import "./Styles/Hero.css";
import heroImg from "../../Assets/AboutUs/About_hero.png";
import CaseStories from "../WebDevelopment/CaseStories";
import OurTeam from "../OurTeam";


const Hero = () => {
  return (
    <div>
        {/* Our Mission Area */}
      <div className="row component-body-hero-web">
        <img src={heroImg} alt="Web development image" className="img-fluid" />
        <div className="hero-main-text">
          <h2 className="hero-main-text-fonts">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        </div>
      </div>

        {/* Our Vision area */}
        <div className="row content-area">
          <h3 className="vision-text mt-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
        </div>
        {/* Imported from web development */}
        <CaseStories/>

        {/* Our Team */}
        <OurTeam/>
        
    </div>  
  );
};

export default Hero;
