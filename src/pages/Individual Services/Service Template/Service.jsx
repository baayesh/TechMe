import React from "react";
import "./Service.css";
import Button from "../../../components/Button/Button";

const Service = ({
  point1,
  point2,
  point3,
  point4,
  point5,
  point6,
  point7,
  point8,
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
          <div className="indser-points">
            <ul>
              <li>{point1}</li>
              <li>{point2}</li>
              <li>{point3}</li>
              <li>{point4}</li>
            </ul>
            <ul>
              <li>{point5}</li>
              <li>{point6}</li>
              <li>{point7}</li>
              <li>{point8}</li>
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
