import React from "react";
import "../Service Template/Service.css";
import Button from "../../../components/Button/Button";

const Hosting = () => {
  return (
    <div className="indser-main">
      <div className="indser-content">
        <div className="indser-img indser-web-dev"></div>
        <div className="indser-cta">
          <div className="indser-description">
            <p>
            In addition to website development, we provide <span>reliable hosting solutions </span>to ensure your website is <span>accessible and secure</span> on the internet. With our hosting services, you can trust that your website will have the<span> performance and stability</span> it needs to <span>support your online presence</span> and business objectives.
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

export default Hosting;
