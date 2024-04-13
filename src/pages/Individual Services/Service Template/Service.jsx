import React from "react";
import "./Service.css";
import Button from "../../../components/Button/Button";

const Service = () => {
  return (
    <div className="indser-main">
      <div className="indser-content">
        <div className="indser-img"></div>
        <div className="indser-cta">
          <div className="indser-points">
            <ul >
              <li>Point 1</li>
              <li>Point 2</li>
              <li>Point 3</li>
              <li>Point 4</li>
            </ul>
            <ul>
              <li>Point 5</li>
              <li>Point 6</li>
              <li>Point 7</li>
              <li>Point 8</li>
            </ul>
          </div>
          <div className="indser-button">
          <Button className="indser-button" text={"Contact Us"} />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Service;
