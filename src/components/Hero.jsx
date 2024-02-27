import React from "react";
import HeroVid from "../Assets/TechMe.mp4";
import "./styles/Hero.css";

function Hero() {
  return (
    <div>
     <div className="video-container" >
      <video autoPlay muted loop src={HeroVid} type="video/mp4"></video>
    </div>
    </div>
  );
}

export default Hero;
