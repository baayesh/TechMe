import React from "react";
import "../Hero/styles.css";
import hmmimg from "../../../Assets/Home/hm-mimg-1.png";
const Hero = () => {
  return (
    <div className="hm-hr-mdiv">
      <div className="hm-hr-mdivtext">
        <p className="hm-hr-mtext">
          Transform your digital presence with expert web development and social
          media marketing
        </p>
      </div>
      <div className="hm-hr-mimgdiv">
            <img className="hm-hr-mimg" src={hmmimg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
