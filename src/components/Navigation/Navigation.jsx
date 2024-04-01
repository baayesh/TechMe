import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { getElementError } from "@testing-library/react";
import logo from "../../Assets/logo512.png";
import Phone from "../../Assets/Navigation/Phone.png";

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
              TECHME
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
          <div className="   d-flex justify-content-center align-items-center">
            <div className="row ">
              <nav >
                {/* For Web */}
                <div className="">
                  <ul className="nav-container-items mt-2">
                    <li className="nav-icon">
                      <img src={logo} alt="logo" className="nav-logo"/>
                    </li>
                    <Link className="link pe-5   " to="/">
                      TECH<span>ME</span>
                    </Link>
                    <Link className="link ps-2   pe-5 " to="/services">
                      Services
                    </Link>
                    <Link
                      className="link ps-2 pe-5"
                      to="/contact-us"
                    >
                      Contact Us
                    </Link>
                    <Link className="link ps-2  " to="/about-us">
                      About Us
                    </Link>
                    
                  </ul>
                </div>
                <div className="nav-container-contact">
                  <h5 className="nav-phone-number">+97 455 3944</h5>
                  <img className="img-fluid nav-phone" src={Phone} alt="" />
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navigation;
