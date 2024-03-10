import React from "react";
import "./styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="container-fluid footer f-color">
        <div className="container">
          <div className="footer-column large">
            <h3>TechMe</h3>
            <p className="footer-description">
              TechMe is a friendly Digital Agency based in New Zealand. We love
              building simple solutions to complex challenges.
            </p>
          </div>
          <div className="footer-column small">
            <h4>Navigate</h4>
            <ul className="footer-exo-2 ">
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/web"> Web Development </Link>
              </li>
              <li>
                <Link to="/social"> Social Media Markeing </Link>
              </li>
              <li>
                <Link to="/Digital"> Digital Marketing</Link>
              </li>
              <li>
                <Link to="/Contacts"> Contacts </Link>
              </li>
            </ul>
          </div>
          <div className="footer-column small">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">Footer 1</a>
              </li>
              <li>
                <a href="#">Footer 2</a>
              </li>
              <li>
                <a href="#">Footer 3</a>
              </li>
            </ul>
          </div>
          <div className="footer-column small">
            <h4>Contact</h4>
            <ul>
              <li>+971 50 555 0101</li>
              <li>contact@yourbrand.com</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
