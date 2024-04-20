import React from "react";
import "../Service Template/Service.css";
import Button from "../../../components/Button/Button";

const Branding = () => {
  return (
    <div className="indser-main">
      <div className="indser-content">
        <div className="indser-img indser-brandingLogo"></div>
        <div className="indser-cta">
          <div className="indser-description">
            <p>
            Our branding and logo designing service helps businesses establish a <span>unique and memorable identity. </span>We collaborate with clients to create <span>distinctive logos</span> and develop comprehensive branding strategies that <span>reflect your values, vision, and target audience.</span> Our goal is to help businesses stand out in a competitive market and leave a lasting impression on your customers.
            </p>
          </div>
          <div className="indser-button">
            <Button className="indser-button" text={"Contact Us"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branding;
