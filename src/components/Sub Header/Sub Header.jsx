import React from "react";
import "./Sub Header.css";
import { Link } from "react-router-dom";

const SubHeader = ({ headerText }) => {
  return (
    <div className="subhead-mdiv">
      <div className="subhead-title">
        <div className="subhead-line"></div>
        <h2>{headerText}</h2>
        <Link to="/services">
          {" "}
          <p>All&nbsp;Services</p>{" "}
        </Link>
      </div>
    </div>
  );
};

export default SubHeader;
