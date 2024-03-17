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
                <Link to="/services"> T.Me Services </Link>
              </li>
              <li>
                <Link to="/contact-us"> Contact Us </Link>
              </li>
              <li>
                <Link to="/about-us"> About Us</Link>
              </li>
    
            </ul>
          </div>
          <div className="footer-column small">
            <h4>Support</h4>
            <ul className="footer-exo-2">
              <li >
                <a href="#">Let's Talk</a>
              </li>
              <li>
                <a href="#">Where Are We</a>
              </li>
              <li>
                <a href="#">Get in Touch</a>
              </li>
            </ul>
          </div>
          <div className="footer-column small">
            <h4>Contact</h4>
            <ul className="footer-exo-2">
              <li>T.Me@techme.com</li>
              <li>+99 954095 949</li>
              <li>Aukland, New Zeland</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
