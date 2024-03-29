import React from "react";
import "./Services.css";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import webdev from "../../../Assets/Home/Services/webdev.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import brandingAndLogoCreation from "../../../Assets/Home/Services/branding.png";
import webMaintain from "../../../Assets/Home/Services/webMaintain.png";
import remoteSupport from "../../../Assets/Home/Services/remoteSupport.png";
import computerAndLaptopepairs from "../../../Assets/Home/Services/laptopRepair.png";
import compUpAndServicing from "../../../Assets/Home/Services/laptopUpgrade.png";
import compVirusRemove from "../../../Assets/Home/Services/virusRemove.png"



const Services = () => {
  const handleDragStart = (e) => e.preventDefault();
  return (
    <div className="hm-sv-container">
      <div className="hm-sv-title-container">
        <h1 className="hm-sv-title">WHAT YOU GET FROM TECHME</h1>
      </div>
      <div className="hm-sv-card-container">
        <div className="hm-sv-card">
          <div className="hm-sv-card-tagcontainer">
            <p>Web Service</p>
          </div>
          <h3 className="hm-sv-card-title">WEB DEVELOPMENT & HOSTING</h3>
          <img
            src={webdev}
            className="hm-sv-card-img"
            alt="Web developement icon"
          />
          <p className="hm-sv-card-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor in Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor in
          </p>
        </div>
        <div className="hm-sv-card">
          <div className="hm-sv-card-tagcontainer">
            <p>Web Service</p>
          </div>
          <h3 className="hm-sv-card-title">BRANDING AND LOGO CREATION</h3>
          <img
            src={brandingAndLogoCreation}
            className="hm-sv-card-img"
            alt="Web developement icon"
          />
          <p className="hm-sv-card-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor in Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor in
          </p>
        </div>

        <div className="hm-sv-card">
          <div className="hm-sv-card-tagcontainer">
            <p>Web Service</p>
          </div>
          <h3 className="hm-sv-card-title">WEBSITE MAINTANANCE</h3>
          <img
            src={webMaintain}
            className="hm-sv-card-img"
            alt="Web developement icon"
          />
          <p className="hm-sv-card-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor in Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor in
          </p>
        </div>

        <div className="hm-sv-card">
          <div className="hm-sv-card-tagcontainer">
            <p>IT Service</p>
          </div>
          <h3 className="hm-sv-card-title">REMOTE SUPPORT</h3>
          <img
            src={remoteSupport}
            className="hm-sv-card-img"
            alt="Web developement icon"
          />
          <p className="hm-sv-card-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor in Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor in
          </p>
        </div>

        <div className="hm-sv-card">
          <div className="hm-sv-card-tagcontainer">
            <p>IT Service</p>
          </div>
          <h3 className="hm-sv-card-title">COMPUTER & LAPTOP REPAIRS</h3>
          <img
            src={computerAndLaptopepairs}
            className="hm-sv-card-img"
            alt="Web developement icon"
          />
          <p className="hm-sv-card-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor in Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor in
          </p>
        </div>

        <div className="hm-sv-card">
          <div className="hm-sv-card-tagcontainer">
            <p>IT Service</p>
          </div>
          <h3 className="hm-sv-card-title">COMPUTER UPGRADE AND SERVICING</h3>
          <img
            src={compUpAndServicing}
            className="hm-sv-card-img"
            alt="Web developement icon"
          />
          <p className="hm-sv-card-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor in Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor in
          </p>
        </div>

        <div className="hm-sv-card">
          <div className="hm-sv-card-tagcontainer">
            <p>IT Service</p>
          </div>
          <h3 className="hm-sv-card-title">COMPUTER VIRUS REMOVAL</h3>
          <img
            src={compVirusRemove}
            className="hm-sv-card-img"
            alt="Web developement icon"
          />
          <p className="hm-sv-card-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor in Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor in
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
