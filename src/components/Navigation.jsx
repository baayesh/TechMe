import React from "react";
import "./styles/Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header>
      <div className="row">
        <nav className="navigation">
          <h1 className="logo">TechMe</h1>
          <ul className="nav-items">
            <li>
              <Link to="/" className="font-main">
                Home
              </Link>
            </li>
            <li className="dropdown">
              <a href="#" className="font-main">
                Discover
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/Web">Web Development</Link>
                </li>
                <li>
                  <Link to="/Social">Social Media Marketing</Link>
                </li>
                <li>
                  <Link to="/Digital" >
                    Digital Marketing
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="Contacts">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;