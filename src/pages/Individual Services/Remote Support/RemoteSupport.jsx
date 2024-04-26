import React from "react";
import "../Service Template/Service.css";
import Button from "../../../components/Button/Button";

const RemoteSupport = () => {
  return (
    <div className="indser-main">
      <div className="indser-content">
        <div className="indser-img indser-remSup"></div>
        <div className="indser-cta">
          <div className="indser-description">
            <p>
            Our remote support service allows us to assist you with <span>technical issues</span> and <span>troubleshooting</span> without the need for an on-site visit. Using <span>secure remote access tools,</span> our experienced technicians can diagnose and resolve a wide range of IT problems quickly and efficiently. Whether you're experiencing <span>software glitches, network issues, or hardware malfunctions,</span> we're here to provide prompt and reliable support from anywhere.
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

export default RemoteSupport;
