import React from "react";
import "./styles/Navigation.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { getElementError } from "@testing-library/react";
import logo from "../Assets/logo512.png";

function Navigation() {
  // window.addEventListener("scroll", function () {
  //   var header = document.querySelector("header");
  //   header.classList.toggle("scrolled", window.scrollY > 0);
  // });

  function toggler() {
    // Display side navigation
    var element = document.getElementById("side-nav");
    element.classList.toggle("side-nav-active");
    // Hide toggler
    var toggler = document.getElementById("toggler");
    toggler.classList.toggle("nav-sm-toggler-deactive");
  }

  function backToToggler() {
    // Display side navigation
    var toggler = document.getElementById("toggler");
    toggler.classList.toggle("nav-sm-toggler-deactive");
    console.log("Function running");

    var element = document.getElementById("side-nav");
    element.classList.toggle("side-nav-active");
  }
  return (
    <div>
      <div className="nav-sm-toggler">
        <button id="toggler" onClick={toggler} className="toggle-btn">
          <FaBars />
        </button>
      </div>
      <div id="side-nav" className="side-nav">
        <ul className="side-nav-list">
          <li className="mt-3">
            <Link className="side-nav-list-item" to="/">
              Techme
            </Link>
          </li>
          <li>
            <Link to="/services" className="side-nav-list-item">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="side-nav-list-item">
              Contact Us
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/about-us" className="side-nav-list-item">
              About Us
            </Link>
          </li>
        </ul>
        <div>
          <button className="close-btn" onClick={backToToggler}>
            <FaTimes />
          </button>
        </div>
      </div>

      <header className="container-header">
        <div>
          {/* Toggle Btn */}
          <div className="  container-fluid d-flex justify-content-center align-items-center">
            <div className="row ">
              <nav>
                {/* For Web */}
                <ul className="nav-web mt-3">
                  <li className="nav-icon">
                    <img src={logo} alt="" />
                  </li>
                  <Link className="link pt-1 pb-1 pe-3 " to="/">
                    TechMe
                  </Link>
                  <Link className="link ps-2  pt-1 pb-1 pe-3 " to="/services">
                    Services
                  </Link>
                  <Link className="link ps-2  pt-1 pb-1 pe-3" to="/contact-us">
                    Contact Us
                  </Link>
                  <Link className="link ps-2  pt-1 pb-1" to="/about-us">
                    About Us
                  </Link>

                  <svg
           
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className="a-us-conde-icon a-us-conde-icon-color ms-4"
            >
              <defs id="defs2" />

              <g id="layer1" transform="translate(-396,-52)">
                <path
                  d="m 357,54 c -1.6447,0 -3,1.355301 -3,3 v 3 h -2 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 2 v 5 h -2 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 2 v 4.999997 h -2 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 2 v 3 c 0,1.6447 1.3553,3 3,3 h 17 c 1.6447,0 3,-1.3553 3,-3 V 57 c 0,-1.644699 -1.3553,-3 -3,-3 z m 48,0 c -1.6447,0 -3,1.355301 -3,3 v 3 h -2 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 2 v 5 h -2 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 2 v 4.999997 h -2 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 2 v 3 c 0,1.6447 1.3553,3 3,3 h 17 c 1.6447,0 3,-1.3553 3,-3 V 57 c 0,-1.644699 -1.3553,-3 -3,-3 z m -48,2 h 17 c 0.5713,0 1,0.428704 1,1 v 21.999997 c 0,0.5713 -0.4287,1 -1,1 h -17 c -0.5713,0 -1,-0.4287 -1,-1 v -3 h 1 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 h -1 V 69 h 1 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 h -1 v -5 h 1 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 h -1 v -3 c 0,-0.571296 0.4287,-1 1,-1 z m 48,0 h 17 c 0.5713,0 1,0.428704 1,1 v 21.999997 c 0,0.5713 -0.4287,1 -1,1 h -17 c -0.5713,0 -1,-0.4287 -1,-1 v -3 h 1 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 h -1 V 69 h 1 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 h -1 v -5 h 1 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 h -1 v -3 c 0,-0.571296 0.4287,-1 1,-1 z m -40,3 c -2.19729,0 -4,1.802713 -4,4 0,2.197287 1.80271,4 4,4 2.19729,0 4,-1.802713 4,-4 0,-2.197287 -1.80271,-4 -4,-4 z m 0,2 c 1.11642,0 2,0.883586 2,2 0,1.116414 -0.88358,2 -2,2 -1.11642,0 -2,-0.883586 -2,-2 0,-1.116414 0.88358,-2 2,-2 z m 49,0 c -3.85414,-10e-7 -7,3.145863 -7,7 0,3.854137 3.14586,6.999997 7,6.999997 a 0.99999499,0.99999499 0 0 0 1,-1 0.99999499,0.99999499 0 0 0 -1,-1 c -2.77327,0 -5,-2.22673 -5,-4.999997 0,-2.773265 2.22673,-5.000001 5,-5 2.77327,-10e-7 5.00002,2.226743 5,5 v 2 c 0,0.564133 -0.43587,0.999997 -1,0.999997 -0.56413,0 -1,-0.435866 -1,-0.999997 v -2 c 0,-1.645003 -1.35499,-2.999997 -3,-3 -1.64501,3e-6 -3,1.354997 -3,3 0,1.645003 1.35499,2.999997 3,2.999997 0.39113,0 0.76536,-0.0779 1.10938,-0.21679 0.34849,1.27043 1.51634,2.21679 2.89062,2.21679 1.64501,1e-5 3,-1.35499 3,-2.999997 v -2 c 2e-5,-3.854137 -3.14586,-7.000001 -7,-7 z m 0,6 c 0.56413,10e-7 1,0.435868 1,1 0,0.564132 -0.43587,0.999999 -1,1 -0.56413,-10e-7 -1,-0.435868 -1,-1 0,-0.564132 0.43587,-0.999999 1,-1 z m -51,1 c -2.1987,0 -4,1.801301 -4,3.999997 0,2.1987 1.8013,4 4,4 h 4 c 2.1987,0 4,-1.8013 4,-4 C 371,69.801301 369.1987,68 367,68 Z m 0,2 h 4 c 1.1253,0 2,0.874707 2,1.999997 0,1.1253 -0.8747,2 -2,2 h -4 c -1.1253,0 -2,-0.8747 -2,-2 C 361,70.874707 361.8747,70 363,70 Z"
                  className="test"
                />
              </g>
            </svg>

                  <Link to="/" className="link email ps-1  pt-2 pb-1">
                    techme@techme.com
                  </Link>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navigation;
