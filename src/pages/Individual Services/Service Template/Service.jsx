import React from "react";
import "./Service.css";
import Button from "../../../components/Button/Button";

const Service = ({
para,
backgroundImage,
}) => {

  if (backgroundImage === "Web-dev") {
    backgroundImage = "indser-web-dev";
  }
  if (backgroundImage === "hosting") {
    backgroundImage = "indser-hosting";
  }
  if (backgroundImage === "brandingLogo") {
    backgroundImage = "indser-brandingLogo";
  }
  if (backgroundImage === "webMaintain") {
    backgroundImage = "indser-webMaintain";
  }
  if (backgroundImage === "remSup") {
    backgroundImage = "indser-remSup";
  }
  if (backgroundImage === "clRep") {
    backgroundImage = "indser-clRep";
  }
  if (backgroundImage === "cuSer") {
    backgroundImage = "indser-cuSer";
  }
  if (backgroundImage === "cvRem") {
    backgroundImage = "indser-cvRem";
  }
 
  return (
    <div className="indser-main">
      <div className="indser-content">
        <div className={`indser-img ${backgroundImage}`}></div>
        <div className="indser-cta">
          <div className="indser-description">
            <p>{para}</p>
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
