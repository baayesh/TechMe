import React from "react";
import "../Service Template/Service.css";
import Button from "../../../components/Button/Button";

const ComputerAndLaptop = () => {
  return (
    <div className="indser-main">
      <div className="indser-content">
        <div className="indser-img indser-web-dev"></div>
        <div className="indser-cta">
          <div className="indser-description">
            <p>
            When your computer or laptop encounters problems, our skilled technicians are here to help. We offer <span>comprehensive repair services for both hardware and software issues,</span> including fixing hardware malfunctions, replacing damaged components, and resolving software errors. Our goal is to get your <span>devices back up and running smoothly</span> as quickly as possible, <span>minimising downtime and disruption</span> to your productivity.
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

export default ComputerAndLaptop;
