import React from "react";
import "../Service Template/Service.css";
import Button from "../../../components/Button/Button";

const ComputerVirus = () => {
  return (
    <div className="indser-main">
      <div className="indser-content">
        <div className="indser-img indser-cvRem"></div>
        <div className="indser-cta">
          <div className="indser-description">
            <p>
            Dealing with computer viruses and malware can be frustrating and potentially damaging to your system and data. Our virus removal service helps <span>identify and eliminate malicious software</span> from your computers, ensuring they're <span>safe and secure from cyber threats.</span> Our technicians use <span>advanced tools and techniques</span> to thoroughly scan and remove viruses, <span>restoring your system to its optimal state</span> and providing peace of mind.

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

export default ComputerVirus;
