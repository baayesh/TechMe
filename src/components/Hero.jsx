import React from "react";
import HeroVid from "../Assets/TechMe.mp4";
import "./styles/Hero.css";

function Hero() {
  return (
    <div>
      <div
        className="video-container"
        // style={{ position: "relative", top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <video
          autoPlay
          muted
          loop
          src={HeroVid}
          type="video/mp4"
        />
      </div>
    </div>
  );
}

export default Hero;
