import React, { useEffect, useRef, useState } from "react";
import "./styles/TestComponent.css";
import { Link } from "react-router-dom";
const YourComponent = () => {
  return (
    <div >
      <div className="row  container-header ">
        <ul className="flexnav d-flex justify-content-center align-items-center mt-3" data-breakpoint="768">
          <Link className="link pe-5" to="/">
            Home
          </Link>
          <Link className="link pe-5" to="/web">
            Discover
          </Link>
          <Link className="link" to="/Contacts">
          Contacts
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default YourComponent;
