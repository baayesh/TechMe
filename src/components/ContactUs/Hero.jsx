  import React from "react";
import "./styles/Hero.css";
import contactUs from "../../Assets/Contact us/Contact.png";
import facebookLogo from "../../Assets/Social Media/facebook-logo.png";
import instagramLogo from "../../Assets/Social Media/Instagram-logo.png";
import twitterLogo from "../../Assets/Social Media/twitter-logo.png";
import gitHubLogo from "../../Assets/Social Media/git-hub-logo.png";
import { motion } from "framer-motion";
import LetsTalk from "../WebDevelopment/LetsTalk";
import SocialMedia from "../AboutUS/SocialMedia";

const Hero = () => {
  return (
    <div>
      <div className="row c-us-hero">
        <img src={contactUs} alt="" className="img-fluid" />
        <div className="c-us-hero-div typewriter">
          <h2 className="c-us-hero-text">
            if ->   complement || concern
            
          </h2>

        </div>
        <div className="c-us-hero-div-2 typewriter mt-5">
          <h2 className="c-us-hero-text">
          We are here to help; => 24/7
            
          </h2>

        </div>
      </div>
      {/* Lets Talk component */}
      <LetsTalk />
      <div className="c-us-map-cd-mdiv">
        <div className="c-us-map-div">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204305.97107301102!2d174.54131432256708!3d-36.859697088791016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47fb5a9ce6fb%3A0x500ef6143a29917!2sAuckland%2C%20New%20Zealand!5e0!3m2!1sen!2slk!4v1710345205272!5m2!1sen!2slk"
            className="c-us-map"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"

          ></iframe>
        </div>
        <div className="c-us-conde-div c-us-def">
          <div className="c-us-conde-row">
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className="c-us-conde-icon c-us-conde-icon-color ms-4"
            >
              <defs id="defs2" />

              <g id="layer1" transform="translate(-396,-52)">
                <path
                  d="m 357,54 c -1.6447,0 -3,1.355301 -3,3 v 3 h -2 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 2 v 5 h -2 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 2 v 4.999997 h -2 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 2 v 3 c 0,1.6447 1.3553,3 3,3 h 17 c 1.6447,0 3,-1.3553 3,-3 V 57 c 0,-1.644699 -1.3553,-3 -3,-3 z m 48,0 c -1.6447,0 -3,1.355301 -3,3 v 3 h -2 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 2 v 5 h -2 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 2 v 4.999997 h -2 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 2 v 3 c 0,1.6447 1.3553,3 3,3 h 17 c 1.6447,0 3,-1.3553 3,-3 V 57 c 0,-1.644699 -1.3553,-3 -3,-3 z m -48,2 h 17 c 0.5713,0 1,0.428704 1,1 v 21.999997 c 0,0.5713 -0.4287,1 -1,1 h -17 c -0.5713,0 -1,-0.4287 -1,-1 v -3 h 1 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 h -1 V 69 h 1 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 h -1 v -5 h 1 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 h -1 v -3 c 0,-0.571296 0.4287,-1 1,-1 z m 48,0 h 17 c 0.5713,0 1,0.428704 1,1 v 21.999997 c 0,0.5713 -0.4287,1 -1,1 h -17 c -0.5713,0 -1,-0.4287 -1,-1 v -3 h 1 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 h -1 V 69 h 1 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 h -1 v -5 h 1 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 h -1 v -3 c 0,-0.571296 0.4287,-1 1,-1 z m -40,3 c -2.19729,0 -4,1.802713 -4,4 0,2.197287 1.80271,4 4,4 2.19729,0 4,-1.802713 4,-4 0,-2.197287 -1.80271,-4 -4,-4 z m 0,2 c 1.11642,0 2,0.883586 2,2 0,1.116414 -0.88358,2 -2,2 -1.11642,0 -2,-0.883586 -2,-2 0,-1.116414 0.88358,-2 2,-2 z m 49,0 c -3.85414,-10e-7 -7,3.145863 -7,7 0,3.854137 3.14586,6.999997 7,6.999997 a 0.99999499,0.99999499 0 0 0 1,-1 0.99999499,0.99999499 0 0 0 -1,-1 c -2.77327,0 -5,-2.22673 -5,-4.999997 0,-2.773265 2.22673,-5.000001 5,-5 2.77327,-10e-7 5.00002,2.226743 5,5 v 2 c 0,0.564133 -0.43587,0.999997 -1,0.999997 -0.56413,0 -1,-0.435866 -1,-0.999997 v -2 c 0,-1.645003 -1.35499,-2.999997 -3,-3 -1.64501,3e-6 -3,1.354997 -3,3 0,1.645003 1.35499,2.999997 3,2.999997 0.39113,0 0.76536,-0.0779 1.10938,-0.21679 0.34849,1.27043 1.51634,2.21679 2.89062,2.21679 1.64501,1e-5 3,-1.35499 3,-2.999997 v -2 c 2e-5,-3.854137 -3.14586,-7.000001 -7,-7 z m 0,6 c 0.56413,10e-7 1,0.435868 1,1 0,0.564132 -0.43587,0.999999 -1,1 -0.56413,-10e-7 -1,-0.435868 -1,-1 0,-0.564132 0.43587,-0.999999 1,-1 z m -51,1 c -2.1987,0 -4,1.801301 -4,3.999997 0,2.1987 1.8013,4 4,4 h 4 c 2.1987,0 4,-1.8013 4,-4 C 371,69.801301 369.1987,68 367,68 Z m 0,2 h 4 c 1.1253,0 2,0.874707 2,1.999997 0,1.1253 -0.8747,2 -2,2 h -4 c -1.1253,0 -2,-0.8747 -2,-2 C 361,70.874707 361.8747,70 363,70 Z"
                  className="test"
                />
              </g>
            </svg>

            <p className="ps-3 pt-2 c-us-conde-font">T.Me@techme.com</p>
          </div>
          <div className="c-us-conde-row">
            <svg
           
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="c-us-conde-icon"
            >
              <path
                d="M12 18H12.01M11 6H13M9.2 21H14.8C15.9201 21 16.4802 21 16.908 20.782C17.2843 20.5903 17.5903 20.2843 17.782 19.908C18 19.4802 18 18.9201 18 17.8V6.2C18 5.0799 18 4.51984 17.782 4.09202C17.5903 3.71569 17.2843 3.40973 16.908 3.21799C16.4802 3 15.9201 3 14.8 3H9.2C8.0799 3 7.51984 3 7.09202 3.21799C6.71569 3.40973 6.40973 3.71569 6.21799 4.09202C6 4.51984 6 5.07989 6 6.2V17.8C6 18.9201 6 19.4802 6.21799 19.908C6.40973 20.2843 6.71569 20.5903 7.09202 20.782C7.51984 21 8.07989 21 9.2 21Z"
                stroke="#f2f2f2"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="c-us-conde-icon"
              />
            </svg>
            <p className="ps-2 pt-2 c-us-conde-font">+99 954095 949</p>
          
          </div>
            {/* Location */}
          <div className="c-us-conde-row ps-4">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="c-us-conde-icon ms-4"
            >
              <path
                d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                stroke="#f2f2f2"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                stroke="#f2f2f2"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="ps-3 mt-2 c-us-conde-font">Aukland, New Zeland</p>
          </div>

        </div>
      </div>
      <div className="c-us-conde-git"><SocialMedia/></div>
    </div>
  );
};

export default Hero;
