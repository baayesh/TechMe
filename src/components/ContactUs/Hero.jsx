import React from "react";
import "./styles/Hero.css";
import contactUs from "../../Assets/Contact us/CONTACT.mp4";
import facebookLogo from "../../Assets/Social Media/facebook-logo.png";
import instagramLogo from "../../Assets/Social Media/Instagram-logo.png";
import twitterLogo from "../../Assets/Social Media/twitter-logo.png";
import gitHubLogo from "../../Assets/Social Media/git-hub-logo.png";
import talk from "../../Assets/Contact us/talk.png"
import {motion} from "framer-motion";



const Hero = () => {

  return (
<div>
      <div className="row contact-us-hero-m-div">
        
          <video autoPlay muted src={contactUs} type="video/mp4"></video>
      </div>
      <div className="col">
        <div className="row map-f-div">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204305.97107301102!2d174.54131432256708!3d-36.859697088791016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47fb5a9ce6fb%3A0x500ef6143a29917!2sAuckland%2C%20New%20Zealand!5e0!3m2!1sen!2slk!4v1709256700326!5m2!1sen!2slk"
            width="1920"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="row details-div pt-3">
          <div className="row">
            <div className="col pt-2 d-flex justify-content-center align-items-center content-map ">
              <p>20 Whitaker Place, Grafton Auckland</p>
            </div>
            <div className="col d-flex align-items-center">
              <div className="row  d-flex align-items-center">
                <p className="d-flex justify-content-center content-map">
                  +64 (275) 989989
                </p>
                <p className="d-flex justify-content-center content-map">
                  +64 (224) 506713
                </p>
              </div>
            </div>
            <div className="col ">
              <p className="d-flex justify-content-center content-map">techme@techme.com</p>
              <p className=" d-flex justify-content-center content-map">
                techme@techme.com
              </p>
            </div>
          </div>
          <div className="row d-flex align-items-center justify-content-center pt-3 pb-3">
            <div className="col-auto">
              <img
                src={facebookLogo}
                alt="Facebook logo"
                className="social-media"
              />
            </div>
            <div className="col-auto">
              <img
                src={instagramLogo}
                alt="Facebook logo"
                className="social-media"
              />
            </div>
            <div className="col-auto">
              <img
                src={twitterLogo}
                alt="Facebook logo"
                className="social-media"
              />
            </div>
            <div className="col-auto git-logo">
              <img
                src={gitHubLogo}
                alt="Facebook logo"
                className="social-media"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
