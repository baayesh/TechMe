import React from "react";
import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../../Assets/logo512.png";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
      {/* Logo */}
      <div id="menu" className="side-menu">
        <div className="toggler-and-icons">
          <div
            id="menu-bar"
            className={isMenuOpen ? "t1 change" : "t1"}
            onClick={menuOnClick}
          >
            <div id="bar1" className="bar"></div>
            <div id="bar2" className="bar"></div>
            <div id="bar3" className="bar"></div>
          </div>

          <div className="nav-contact-ph">
            <div className="nav-contact-email">
              <a href="mailto:info@techme.co.nz">
                <svg
                  height="50px"
                  className="nav-contact-email"
                  width="50px"
                  version="1.1"
                  id="_x32_"
                  viewBox="-107.52 -107.52 727.04 727.04"
                  fill="#4b3db2"
                  stroke="#4b3db2"
                  stroke-width="0.00512"
                >
                  <g
                    id="SVGRepo_bgCarrier"
                    stroke-width="0"
                    transform="translate(20.47999999999999,20.47999999999999), scale(0.92)"
                  />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <style type="text/css"> </style>{" "}
                    <g>
                      {" "}
                      <path
                        class="st0"
                        d="M510.746,110.361c-2.128-10.754-6.926-20.918-13.926-29.463c-1.422-1.794-2.909-3.39-4.535-5.009 c-12.454-12.52-29.778-19.701-47.531-19.701H67.244c-17.951,0-34.834,7-47.539,19.708c-1.608,1.604-3.099,3.216-4.575,5.067 c-6.97,8.509-11.747,18.659-13.824,29.428C0.438,114.62,0,119.002,0,123.435v265.137c0,9.224,1.874,18.206,5.589,26.745 c3.215,7.583,8.093,14.772,14.112,20.788c1.516,1.509,3.022,2.901,4.63,4.258c12.034,9.966,27.272,15.45,42.913,15.45h377.51 c15.742,0,30.965-5.505,42.967-15.56c1.604-1.298,3.091-2.661,4.578-4.148c5.818-5.812,10.442-12.49,13.766-19.854l0.438-1.05 c3.646-8.377,5.497-17.33,5.497-26.628V123.435C512,119.06,511.578,114.649,510.746,110.361z M34.823,99.104 c0.951-1.392,2.165-2.821,3.714-4.382c7.689-7.685,17.886-11.914,28.706-11.914h377.51c10.915,0,21.115,4.236,28.719,11.929 c1.313,1.327,2.567,2.8,3.661,4.272l2.887,3.88l-201.5,175.616c-6.212,5.446-14.21,8.443-22.523,8.443 c-8.231,0-16.222-2.99-22.508-8.436L32.19,102.939L34.823,99.104z M26.755,390.913c-0.109-0.722-0.134-1.524-0.134-2.341V128.925 l156.37,136.411L28.199,400.297L26.755,390.913z M464.899,423.84c-6.052,3.492-13.022,5.344-20.145,5.344H67.244 c-7.127,0-14.094-1.852-20.142-5.344l-6.328-3.668l159.936-139.379l17.528,15.246c10.514,9.128,23.922,14.16,37.761,14.16 c13.89,0,27.32-5.032,37.827-14.16l17.521-15.253L471.228,420.18L464.899,423.84z M485.372,388.572 c0,0.803-0.015,1.597-0.116,2.304l-1.386,9.472L329.012,265.409l156.36-136.418V388.572z"
                      />{" "}
                    </g>{" "}
                  </g>
                </svg>
              </a>
            </div>

            {/* Mobile phone */}
            <div className="nav-contact-phone">
              <a href="tel:+64275989998">
                <svg
                  width="50px"
                  height="50px"
                  className="nav-contact-phone"
                  viewBox="-2.64 -2.64 29.28 29.28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#4b3db2"
                  transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
                >
                  <g stroke-width="0" transform="translate(0,0), scale(1)">
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
                  <g stroke-linecap="round" stroke-linejoin="round" />
                  <g>
                    {" "}
                    <path
                      d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                      stroke="#4b3db2"
                      stroke-width="1"
                      stroke-miterlimit="10"
                    />{" "}
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <nav className={isMenuOpen ? "nav change" : "nav"} id="nav">
          <ul>
            <li>
              <a href="/">TechMe</a>
            </li>
            <li>
              <a href="services">Services</a>
            </li>
            <li>
              <a href="about-us">About&nbsp;Us</a>
            </li>
            <li>
              <a href="contact-us ">Contact&nbsp;Us</a>
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
          <div className="   nav-container-header-sub">
            <div className="row ">
              <nav>
                {/* ????????WEB VERSION?????? */}

                <div className="nav-container-div">
                  <ul className="nav-container-items mt-2">
                    <Link to="/">
                      <li className="nav-icon">
                        <img src={logo} alt="logo" className="nav-logo" />
                      </li>
                    </Link>
                    <Link
                      onClick={menuOnClick}
                      className={`link ps-2 pe-2 ${
                        location.pathname === "/" && "active"
                      }`}
                      to="/"
                    >
                      Tech<span>Me</span>
                    </Link>
                    <Link
                      onClick={menuOnClick}
                      className={`link ps-2 pe-2 ${
                        location.pathname === "/services" && "active"
                      }`}
                      to="/services"
                    >
                      Services
                    </Link>
                    <Link
                      onClick={menuOnClick}
                      className={`link ps-2 pe-2 ${
                        location.pathname === "/contact-us" && "active"
                      }`}
                      to="/contact-us"
                    >
                      Contact&nbsp;Us
                    </Link>
                    <Link
                      onClick={menuOnClick}
                      className={`link ps-2 pe-2 ${
                        location.pathname === "/about-us" && "active"
                      }`}
                      to="/about-us"
                    >
                      About&nbsp;Us
                    </Link>
                  </ul>

                  {/* Mobile and Email icons */}
                  {/* Email */}
                  <div className="nav-contact-ph">
                    <div className="nav-contact-email">
                      <a href="mailto:info@techme.co.nz">
                        <svg
                          height="50px"
                          className="nav-contact-email"
                          width="50px"
                          version="1.1"
                          id="_x32_"
                          viewBox="-107.52 -107.52 727.04 727.04"
                          fill="#4b3db2"
                          stroke="#4b3db2"
                          stroke-width="0.00512"
                        >
                          <g
                            id="SVGRepo_bgCarrier"
                            stroke-width="0"
                            transform="translate(20.47999999999999,20.47999999999999), scale(0.92)"
                          />

                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />

                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <style type="text/css"> </style>{" "}
                            <g>
                              {" "}
                              <path
                                class="st0"
                                d="M510.746,110.361c-2.128-10.754-6.926-20.918-13.926-29.463c-1.422-1.794-2.909-3.39-4.535-5.009 c-12.454-12.52-29.778-19.701-47.531-19.701H67.244c-17.951,0-34.834,7-47.539,19.708c-1.608,1.604-3.099,3.216-4.575,5.067 c-6.97,8.509-11.747,18.659-13.824,29.428C0.438,114.62,0,119.002,0,123.435v265.137c0,9.224,1.874,18.206,5.589,26.745 c3.215,7.583,8.093,14.772,14.112,20.788c1.516,1.509,3.022,2.901,4.63,4.258c12.034,9.966,27.272,15.45,42.913,15.45h377.51 c15.742,0,30.965-5.505,42.967-15.56c1.604-1.298,3.091-2.661,4.578-4.148c5.818-5.812,10.442-12.49,13.766-19.854l0.438-1.05 c3.646-8.377,5.497-17.33,5.497-26.628V123.435C512,119.06,511.578,114.649,510.746,110.361z M34.823,99.104 c0.951-1.392,2.165-2.821,3.714-4.382c7.689-7.685,17.886-11.914,28.706-11.914h377.51c10.915,0,21.115,4.236,28.719,11.929 c1.313,1.327,2.567,2.8,3.661,4.272l2.887,3.88l-201.5,175.616c-6.212,5.446-14.21,8.443-22.523,8.443 c-8.231,0-16.222-2.99-22.508-8.436L32.19,102.939L34.823,99.104z M26.755,390.913c-0.109-0.722-0.134-1.524-0.134-2.341V128.925 l156.37,136.411L28.199,400.297L26.755,390.913z M464.899,423.84c-6.052,3.492-13.022,5.344-20.145,5.344H67.244 c-7.127,0-14.094-1.852-20.142-5.344l-6.328-3.668l159.936-139.379l17.528,15.246c10.514,9.128,23.922,14.16,37.761,14.16 c13.89,0,27.32-5.032,37.827-14.16l17.521-15.253L471.228,420.18L464.899,423.84z M485.372,388.572 c0,0.803-0.015,1.597-0.116,2.304l-1.386,9.472L329.012,265.409l156.36-136.418V388.572z"
                              />{" "}
                            </g>{" "}
                          </g>
                        </svg>
                      </a>
                    </div>

                    {/* Mobile phone */}
                    <div className="nav-contact-phone">
                      <a href="tel:+64275989998">
                        <svg
                          width="50px"
                          height="50px"
                          className="nav-contact-phone"
                          viewBox="-2.64 -2.64 29.28 29.28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          stroke="#4b3db2"
                          transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
                        >
                          <g
                            stroke-width="0"
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
                          <g stroke-linecap="round" stroke-linejoin="round" />
                          <g>
                            {" "}
                            <path
                              d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                              stroke="#4b3db2"
                              stroke-width="1"
                              stroke-miterlimit="10"
                            />{" "}
                          </g>
                        </svg>
                      </a>
                    </div>
                  </div>
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
