import React from "react";
import "./styles/Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <header className="container-fluid">
        <nav className="navbar navbar-expand-lg navigation navbar-dark  d-flex align-items-center ">
          <h1 className="logo">TechMe</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mx-auto" id="navbarNav">
            <ul className="navbar-nav nav-items justify-content-center">
              <li className="nav-item">
                <Link to="/" className="nav-link font-main">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link font-main dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Discover
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/Web" className="dropdown-item">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/Social" className="dropdown-item">
                      Social Media Marketing
                    </Link>
                  </li>
                  <li>
                    <Link to="/Digital" className="dropdown-item">
                      Digital Marketing
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="Contacts" className="nav-link font-main">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navigation;
