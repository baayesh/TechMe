import React from "react";
import "./styles/Navigation.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { getElementError } from "@testing-library/react";
import logo from '../Assets/logo512.png';

function Navigation() {
  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 0);
  });

  // const navRef = useRef();

  // const showNavBar = () => {
  //   console.log("clicked bars");
  //   navRef.current.classList.toggle("sidebar");
  // };

  // const closeNavBar = () => {
  //   console.log("Close Nav Bar");
  //   navRef.current.classList.toggle("sidebar");
  // }
  // Navigation actiovator
  // const [isClassChanged, setIsClassChanged] = useState(false);

  // const clickHandler = () => {
  //   setIsClassChanged(!isClassChanged);
  //  };

  // const [isClassChanged, setClassChanged] = React.useState(false);

  // const handleClick = () => {
  //   setClassChanged(!isClassChanged);
  // }

  // const element = document.getElementById("sideBar");

  //   if(!isClassChanged){
  //     element.classList.add("sidebar");
  //     console.log('Class is changed')
  //   }
  //   else{
  //     element.classList.remove("sidebar");
  //     console.log("class list removed")
  //   }

  return (
    <header className="container-header">
      <div>
        <div className="  container-fluid d-flex justify-content-center align-items-center">
          <div className="row  middle-header">
            <nav>
              {/* For Web */}
              <ul className="nav-web mt-3">
                <li className="nav-icon"><img src={logo} alt="" /></li>
                <Link className="link pt-1 pb-1 pe-3 " to="/">
                  TechMe
                </Link>
                <Link className="link ps-2  pt-1 pb-1 pe-3 " to="/web">
                  Services
                </Link>
                <Link className="link ps-2  pt-1 pb-1 pe-3" to="/Contacts">
                  Contacts
                </Link>
                <Link className="link ps-2  pt-1 pb-1" to="/AboutUs">
                  About Us
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
