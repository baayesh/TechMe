import React from "react";
import "./styles/Footer.css";
import { Link } from "react-router-dom";
import SocialMedia from "../components/AboutUS/SocialMedia";

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
            <SocialMedia />
          </div>
          <div className="footer-column small">
            <h4>Site Map</h4>
            <ul className="footer-font">
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
              <Link to="/coming-soon">Services</Link>
              </li>
              <li>
                <Link to="/coming-soon"> Contact Us </Link>
              </li>
              <li>
                <Link to="/coming-soon"> About Us</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column small">
            <h4>Services</h4>
            <ul className="footer-font">
              <li>
                <Link to="/coming-soon">Website development and hosting</Link>
              </li>
              <li>
                <Link to="/coming-soon">Branding and Logo Creation</Link>
              </li>
              <li>
                <Link to="/coming-soon">Website Maintenance</Link>
              </li>
              <li>
                <Link to="/coming-soon">Remote Support</Link>
              </li>
              <li>
                <Link to="/coming-soon">Computer and Laptop Repairs</Link>
              </li>
              <li>
                <Link to="/coming-soon">Computer upgrade and Servicing</Link>
              </li>
              <li>
                <Link to="/coming-soon">Computer Virus Removal</Link>
              </li>
            </ul>
          </div>
            {/* <div className="footer-column small">
              <h4>Contact</h4>
              <ul className="footer-font">
                <li>T.Me@techme.com</li>
                <li>+99 954095 949</li>
                <li>Aukland, New Zeland</li>
              </ul>
            </div> */}
        </div>
      </footer>
    </div>
  );
}

export default Footer;
