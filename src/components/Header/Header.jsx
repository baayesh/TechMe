import React from "react";
import "./Header.css";
import mig from "../../Assets/Contact us/Main Images/Mig.png";

const Header = () => {
  return <div className="header-mdiv">
    <img src={mig} alt="" />
    <h2>
        LET'S TALK
    </h2>
  </div>;
};

export default Header;
