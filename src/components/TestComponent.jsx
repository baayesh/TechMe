import React, { useEffect, useRef, useState } from "react";
import "./styles/TestComponent.css";
import { Link } from "react-router-dom";




const YourComponent = () => {
  window.onScroll = function() {
    onScrollFunction();
  }

  function onScrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("header").className = "container-header-scr";
    }
}
  return (
    <div >
      <div id = "header" className="row  container-header ">
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
        <h1>
          This is a test  This is a test  This is a test  This is a test  This is a test  This is a test This is a test  This is a test  This is a test  This is a test  This is a test  This is a test  This is a test  This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test
        </h1>
      </div>
    </div>
  );
};

export default YourComponent;
