import React from "react";
import "./styles/WhoAreWe.css";
import sideImg from "../Assets/SideContent.gif"

function WhoAreWe() {
  return (
    <div className="container">
      <div className="box one">
        <h2>WHO ARE WE </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
          tortor augue. Maecenas iaculis arcu vel elit suscipit blandit.
        </p>
      </div>
      <div className="box two">
        <img src={sideImg} alt="Web Development" />
      </div>
    </div>
  );
}

export default WhoAreWe;
