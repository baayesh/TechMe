import React from "react";
import "../Hero/hero.css";
import hmmimg from "../../../Assets/Home/hm-mimg-1.png";
import Button from "../../../components/Button/Button";
const Hero = () => {
  return (
    <div className="hm-hr-mdiv">
      <div className="hm-hr-mdivtext">
        <p className="hm-hr-mtext">
          Transform your digital presence with expert<span> web development</span>  and<span> social
          media marketing</span> 
        </p>
        <Button 
        text={"EXPLORE T.ME SERVICES"}/>
      </div>
      <div className="hm-hr-mimgdiv">
            <img className="img-fluid hm-hr-mimg" src={hmmimg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
