import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../Assets/logo512.png";


function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <div
          id="menu-bar"
          className={isMenuOpen ? "t1 change" : "t1"}
          onClick={menuOnClick}
        >
          <div id="bar1" className="bar"></div>
          <div id="bar2" className="bar"></div>
          <div id="bar3" className="bar"></div>
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
            <li>
              <a href="">(+64)&nbsp;27&nbsp;598&nbsp;9998</a>
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
          <div className="   d-flex justify-content-center align-items-center">
            <div className="row ">
              <nav>
                {/* For Web */}

                <div className="nav-container-div">
                  <ul className="nav-container-items mt-2">
                    <Link to="/">
                      <li className="nav-icon">
                        <img src={logo} alt="logo" className="nav-logo" />
                      </li>
                    </Link>
                    <Link className="link ps-2 pe-2" to="/">
                      Tech<span>ME</span>
                    </Link>
                    <Link className="link ps-2 pe-2" to="/services">
                      Services
                    </Link>
                    <Link className="link ps-2 pe-2" to="/contact-us">
                      Contact&nbsp;Us
                    </Link>
                    <Link className="link ps-2 pe-2 " to="/about-us">
                      About&nbsp;Us
                    </Link>
                  </ul>

                  {/* Mobile and Email icons */}
                  <div className="nav-contact-ph">
                    <div className="nav-contact-email">
                      <svg
                        height="50px"
                        width="50px"
                        fill="white"
                        version="1.1"
                        id="_x32_"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <style type="text/css"></style>
                        <g>
                          <path
                            class="st0"
                            d="M510.678,112.275c-2.308-11.626-7.463-22.265-14.662-31.054c-1.518-1.915-3.104-3.63-4.823-5.345
		c-12.755-12.818-30.657-20.814-50.214-20.814H71.021c-19.557,0-37.395,7.996-50.21,20.814c-1.715,1.715-3.301,3.43-4.823,5.345
		C8.785,90.009,3.63,100.649,1.386,112.275C0.464,116.762,0,121.399,0,126.087V385.92c0,9.968,2.114,19.55,5.884,28.203
		c3.497,8.26,8.653,15.734,14.926,22.001c1.59,1.586,3.169,3.044,4.892,4.494c12.286,10.175,28.145,16.32,45.319,16.32h369.958
		c17.18,0,33.108-6.145,45.323-16.384c1.718-1.386,3.305-2.844,4.891-4.43c6.27-6.267,11.425-13.741,14.994-22.001v-0.064
		c3.769-8.653,5.812-18.171,5.812-28.138V126.087C512,121.399,511.543,116.762,510.678,112.275z M46.509,101.571
		c6.345-6.338,14.866-10.175,24.512-10.175h369.958c9.646,0,18.242,3.837,24.512,10.175c1.122,1.129,2.179,2.387,3.112,3.637
		L274.696,274.203c-5.348,4.687-11.954,7.002-18.696,7.002c-6.674,0-13.276-2.315-18.695-7.002L43.472,105.136
		C44.33,103.886,45.387,102.7,46.509,101.571z M36.334,385.92V142.735L176.658,265.15L36.405,387.435
		C36.334,386.971,36.334,386.449,36.334,385.92z M440.979,420.597H71.021c-6.281,0-12.158-1.651-17.174-4.552l147.978-128.959
		l13.815,12.018c11.561,10.046,26.028,15.134,40.36,15.134c14.406,0,28.872-5.088,40.432-15.134l13.808-12.018l147.92,128.959
		C453.137,418.946,447.26,420.597,440.979,420.597z M475.666,385.92c0,0.529,0,1.051-0.068,1.515L335.346,265.221L475.666,142.8
		V385.92z"
                          />
                        </g>
                      </svg>
                    </div>

                    {/* Mobile phone */}
                    <div className="nav-contact-phone">
                    <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 9V3M17 9V3M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z" stroke="#f2f2f2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
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
