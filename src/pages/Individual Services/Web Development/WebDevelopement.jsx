import React from "react";
import "../Service Template/Service.css";
import Button from "../../../components/Button/Button";

const WebDevelopement = () => {
  return (
    <div className="indser-main">
      <div className="indser-content">
        <div className="indser-img indser-web-dev"></div>
        <div className="indser-cta">
          <div className="indser-description">
            <p>
                We specialise in creating custom websites that cater to your unique
                requirements, whether you need a simple informational site or a
                complex e-commerce platform. Our team collaborates closely with you
                to <span>design and develop</span> a<span> professional, user-friendly website</span> that
                reflects your brand identity and <span>engages your audience</span> effectively.
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

export default WebDevelopement;
