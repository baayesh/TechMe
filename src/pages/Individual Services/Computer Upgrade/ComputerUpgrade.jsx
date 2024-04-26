import React from "react";
import "../Service Template/Service.css";
import Button from "../../../components/Button/Button";

const ComputerUpgrade = () => {
  return (
    <div className="indser-main">
      <div className="indser-content">
        <div className="indser-img indser-cuSer"></div>
        <div className="indser-cta">
          <div className="indser-description">
            <p>
            Keeping your computer hardware up-to-date and well-maintained is essential for optimal performance and longevity. Our computer upgrades and servicing service helps ensure that your <span>devices are operating at their best.</span> Whether you need to upgrade your hardware for <span>better performance</span> or simply require <span>routine maintenance to prevent issues,</span> our technicians have the expertise to handle all your upgrade and servicing needs.
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

export default ComputerUpgrade;
