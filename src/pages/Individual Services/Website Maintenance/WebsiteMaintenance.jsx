import React from "react";
import "../Service Template/Service.css";
import Button from "../../../components/Button/Button";

const WebMaintain = () => {
  return (
    <div className="indser-main">
      <div className="indser-content">
        <div className="indser-img indser-webMaintain"></div>
        <div className="indser-cta">
          <div className="indser-description">
            <p>
            Keeping your website updated and optimised is essential for its performance and security. Our website maintenance service ensures that your<span> site remains functional, secure, and up-to-date</span> with the latest trends and technologies. From <span>regular content updates</span> to software patches and security scans, we take care of all aspects of maintaining your website so you can focus on running your business.
            </p>
          </div>
          <div className="indser-button">
          <Button className="indser-button" text={"Contact Us"} link={"/contact-us"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebMaintain;
