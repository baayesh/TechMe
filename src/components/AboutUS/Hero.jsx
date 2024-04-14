import React from "react";
import "./Styles/Hero.css";
import heroImg from "../../Assets/AboutUs/About_hero.png";
import visImg from "../../Assets/AboutUs/Vision_mission.png";
import OurTeam from "../OurTeam";


const Hero = () => {
  return (
    <div>
        {/* Our Mission Area */}
      <div className="row component-body-hero-web">
        <img src={heroImg} alt="Web development image" className="img-fluid" />
      </div>
        {/* About TechMe*/}
        <div className="row content-area pt-4">
        
            <p className="a-us-tech-para">
            Lorem ipsum dolor sit amet, <strong>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</strong>consectetur  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        
        </div>

        {/* Vision Mision Image */}
        <div className="row">
          <div className="ms-5 mt-5 pt-5 col-md-4"><img src={visImg} alt="Vision and Mission" className="img-fluid a-us-vis-img" /></div>
          <div className="col mt-5 pt-5">
            <div className="row-md-12">
            <h1 className="a-us-tech-title">Our Vision and Mission</h1>
            </div>
            <div className="row-md-12">
            <p className="ps-5 pe-5 a-us-vis-para ">   Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.consectetur  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit <strong> Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud anim id est laborum.
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.consectetur </strong> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            </div>
          </div>
         
        </div>

        {/* Our Team */}
        <OurTeam/>
        
    </div>  
  );
};

export default Hero;
