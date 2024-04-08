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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuOnClick = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("clicked");
  };

  // Old navigation
  // function toggler() {
  //   // Display side navigation
  //   var element = document.getElementById("side-nav");
  //   element.classList.toggle("side-nav-active");
  //   // Hide toggler
  //   var toggler = document.getElementById("toggler");
  //   toggler.classList.toggle("nav-sm-toggler-deactive");
  // }

  window.addEventListener("scroll", function () {
    var header = document.querySelector(".container-header");
    var navContact = document.querySelector(".nav-contact-ph");
    var navContact2 = document.querySelector(".nav-contact-details");
    var scroll = window.scrollY;

    if (scroll > 100) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }

    // if (scroll > 500) {
    //   navContact2.classList.add("nav-contact-details-t");
  
    // } else {
    //   navContact2.classList.remove("nav-contact-details-t");
    // }
  });
  function backToToggler() {
    //web scroller

    // Display side navigation
    var toggler = document.getElementById("toggler");
    toggler.classList.toggle("nav-sm-toggler-deactive");
    console.log("Function running");

    var element = document.getElementById("side-nav");
    element.classList.toggle("side-nav-active");
  }
  return (
    <div>
      {/* <div className="nav-sm-toggler">
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
            <Link to="/coming-soon" className="side-nav-list-item">
              Services
            </Link>
          </li>
          <li>
            <Link to="/coming-soon" className="side-nav-list-item">
              Contact Us
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/coming-soon" className="side-nav-list-item">
              About Us
            </Link>
          </li>
        </ul>
        <div>
          <button className="close-btn" onClick={backToToggler}>
            <FaTimes />
          </button>
        </div>
      </div> */}

      <div id="menu" className="side-menu">
        <div
          id="menu-bar"
          className={isMenuOpen ? "t1 change" : "t1"}
          onClick={menuOnClick}
        >
          <div id="bar1" className="bar"></div>
          <div id="bar2" className="bar"></div>
          <div id="bar3" className="bar"></div>
        </div>
        <nav className={isMenuOpen ? "nav change" : "nav"} id="nav">
          <ul>
            <li>
              <a href="#">TechMe</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>

      <div
        className={isMenuOpen ? "change-bg menu-bg" : "menu-bg"}
        id="menu-bg"
      ></div>

      <header className="container-header">
        <div>
          {/* Toggle Btn */}
          <div className="   d-flex justify-content-center align-items-center">
            <div className="row ">
              <nav>
                {/* For Web */}
                <div className="nav-contact-details">
                  <li className="nav-icon">
                    <img src={logo} alt="logo" className="nav-logo" />
                  </li>
                  <h5 className="nav-contact-ph">+97 455 3944</h5>
                </div>
                <div className="nav-container-div">
                  <ul className="nav-container-items mt-2">
                    <Link className="link ps-2 pe-2" to="/">
                      TECH<span>ME</span>
                    </Link>
                    <Link className="link ps-2 pe-2" to="/coming-soon">
                      Services
                    </Link>
                    <Link className="link ps-2 pe-2" to="/coming-soon">
                      Contact Us
                    </Link>
                    <Link className="link ps-2 pe-2 " to="/coming-soon">
                      About Us
                    </Link>
                  </ul>
                </div>
                {/* <div className="nav-container-contact">
                  <h5 className="nav-phone-number">+97 455 3944</h5>
                  <img className="img-fluid nav-phone" src={Phone} alt="" />
                </div> */}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navigation;
