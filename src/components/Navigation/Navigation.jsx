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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuOnClick = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("clicked");
  };

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
                
                <div className="nav-container-div">
                  <ul className="nav-container-items mt-2">
                    <li className="nav-icon">
                      <img src={logo} alt="logo" className="nav-logo" />
                    </li>
                    <Link className="link ps-2 pe-2" to="/">
                      TECH<span>ME</span>
                    </Link>
                    <Link className="link ps-2 pe-2" to="/services">
                      Services
                    </Link>
                    <Link className="link ps-2 pe-2" to="/contact-us">
                      Contact&nbsp;Us
                    </Link>
                    <Link className="link ps-2 pe-2 " to="/coming-soon">
                      About&nbsp;Us
                    </Link>
                
                  </ul>
                  <h5 className="nav-contact-ph">+97 455 3944</h5>
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
