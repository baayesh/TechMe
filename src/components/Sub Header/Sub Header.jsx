import React from "react";
import "./Sub Header.css";

const SubHeader = ({headerText}) => {
  
  return (
    <div className="subhead-mdiv">
      <div className="subhead-title">
        <div className="subhead-line"></div>
        <h2>{headerText}</h2>
        <p>All&nbsp;TechME&nbsp;Services</p>
      </div>
    </div>
  );
};

export default SubHeader;
