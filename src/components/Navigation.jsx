import React from "react";
import "./styles/Navigation.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navigation() {
  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 0);
  });

  // Navigation actiovator
  const [isClassChanged, setIsClassChanged] = useState(false);

  const clickHandler = () => {
    setIsClassChanged(!isClassChanged);
  };

  return (
    <header className="container-header" >
      <div className="  container-fluid d-flex justify-content-center align-items-center">
        <div className="row  middle-header">
          <nav>
            <ul className="side-op-mob">
              <li onClick={clickHandler}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
              </li>
            </ul>
            {/* Side bar for mobile devices */}
            <ul className={isClassChanged ? 'sidebar-active': 'sidebar'}>
              <Link className="link ps-2 pe-2 pt-1 pb-1 me-5" to="/">
                TechMe
              </Link>
              <Link className="link ps-2 pe-2 pt-1 pb-1 me-5" to="/web">
                Services
              </Link>
              <Link className="link ps-2 pe-2 pt-1 pb-1 me-5" to="/Contacts">
                Contacts
              </Link>
              <Link className="link ps-2 pe-2 pt-1 pb-1" to="/AboutUs">
                About Us
              </Link>
            </ul>

            {/* Side bar for web browsers */}
            <ul className="side-web mt-3">
              <Link className="link ps-2 pe-2 pt-1 pb-1 me-5" to="/">
                TechMe
              </Link>
              <Link className="link ps-2 pe-2 pt-1 pb-1 me-5" to="/web">
                Services
              </Link>
              <Link className="link ps-2 pe-2 pt-1 pb-1" to="/Contacts">
                Contacts
              </Link>
              <Link className="link ps-2 pe-2 pt-1 pb-1" to="/AboutUs">
                About Us
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
