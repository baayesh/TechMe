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
              TechMe is a friendly Digital Agency based in New Zealand.
              <br /> We love building simple solutions to complex challenges.
            </p>
            <div className="footer-social-media-desk">
              <SocialMedia  />
            </div>
          </div>

          {/* Contact details */}
          <div>
            <div className="footer-contact-details-quick-links">
              <div className="footer-column small">
                <h4>Contact</h4>
                <div className="">
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
                              width="35px"
                              height="40px"
              
                              viewBox="-2.64 -2.64 29.28 29.28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              stroke="none"
                              transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
                            >
                              <g
                                stroke-width=""
                                transform="translate(0,0), scale(1)"
                              >
                                <rect
                                  x="-2.64"
                                  y="-2.64"
                                  width="29.28"
                                  height="29.28"
                                  rx="0"
                                  fill="none"
                                  strokewidth="0"
                                />
                              </g>
                              <g stroke-linecap="round"  strstroke-linejoin="round" />
                              <g>
                                {" "}
                                <path
                                  d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                                  stroke="#ffffff"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                />{" "}
                              </g>
                            </svg>
                    <a href="tel:+64275989998">
                      <h4>027 598 9989</h4>
                    </a>
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
                    <a href="mailto:info@techme.co.nz">
                      <h4>info@techme.co.nz</h4>
                    </a>
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
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/contact-us"> Contact Us </Link>
                  </li>
                  <li>
                    <Link to="/about-us"> About Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-social-media-mob">
              <SocialMedia  />
            </div>
          </div>

          {/* Services */}
          <div className="footer-column small">
            <h4 className="footer-our-services">Our&nbsp;Services</h4>
            <ul className="footer-font">
              <li>
                <Link to="/web-development">Website development and hosting</Link>
              </li>
              <li>
                <Link to="/branding">Branding and Logo Creation</Link>
              </li>
              <li>
                <Link to="/web-maintain">Website Maintenance</Link>
              </li>
              <li>
                <Link to="/remote-support">Remote Support</Link>
              </li>
              <li>
                <Link to="/computer-and-laptop-repair">Computer and Laptop Repairs</Link>
              </li>
              <li>
                <Link to="/computer-upgrade-and-servicing">Computer upgrade and Servicing</Link>
              </li>
              <li>
                <Link to="/virus-removal">Computer Virus Removal</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
