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
              TechMe is a friendly Digital Agency based in New Zealand.<br/> We love
              building simple solutions to complex challenges.
            </p>
            <SocialMedia />
          </div>

          {/* Contact details */}
          <div className="footer-column small">
            <h4>Contact</h4>
            <div>
              <div className="footer-contact-details">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                    stroke="#f2f2f2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19 9.75C19 15.375 12 21 12 21C12 21 5 15.375 5 9.75C5 6.02208 8.13401 3 12 3C15.866 3 19 6.02208 19 9.75Z"
                    stroke="#f2f2f2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h4>
                  252 Lichfield Street,
                  <br />
                  Christchurch Central City,
                  <br />
                  Christchurch 8011
                </h4>
              </div>
              <div className="footer-contact-details">
                {" "}
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 7V3M21 3H17M21 3L15 9M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z"
                    stroke="#f2f2f2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h4>(027)598 9989</h4>
              </div>
              <div className="footer-contact-details">
                {" "}
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 9.00005L10.2 13.65C11.2667 14.45 12.7333 14.45 13.8 13.65L20 9"
                    stroke="#f2f2f2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 9.17681C3 8.45047 3.39378 7.78123 4.02871 7.42849L11.0287 3.5396C11.6328 3.20402 12.3672 3.20402 12.9713 3.5396L19.9713 7.42849C20.6062 7.78123 21 8.45047 21 9.17681V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V9.17681Z"
                    stroke="#f2f2f2"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                <h4>info@techme.co.nz</h4>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column extra-small">
            <h4>Quick Links</h4>
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

          {/* Services */}
          <div className="footer-column small">
            <h4>Our&nbsp;Services</h4>
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
        </div>
      </footer>
    </div>
  );
}

export default Footer;
