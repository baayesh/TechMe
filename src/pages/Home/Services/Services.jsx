import React from "react";
import "./Services.css";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import webdev from "../../../Assets/Home/Services/webdev.png";
import Button from "../../../components/Button/Button";

const Services = () => {
  return (
    <div className="hm-sv-container">
      <div>
        <h1 className="hm-sv-title">WHAT YOU GET FROM TECHME</h1>
      </div>
      <div className="hm-sv-card-container">
        <div className="hm-sv-card">
          <h3 className="hm-sv-card-title">WEB </h3>
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
          <Button
          text={"Explore"}/>
        </div>
        <div className="hm-sv-card">
          <h3 className="hm-sv-card-title">WEB DEVELOPMENT</h3>
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
          <Button
          text={"Explore"}/>
        </div>
        <div className="hm-sv-card">
          <h3 className="hm-sv-card-title">WEB DEVELOPMENT</h3>
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
          <Button
          text={"Explore"}/>
        </div>
        
        <div className="hm-sv-card">
          <h3 className="hm-sv-card-title">WEB DEVELOPMENT</h3>
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
          <Button 
          text={"Explore"}
          className="hm-sv-card-btn"/>
        </div>

        
        <div className="hm-sv-card">
          <h3 className="hm-sv-card-title">WEB DEVELOPMENT</h3>
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
          <Button 
          text={"Explore"}
          className="hm-sv-card-btn"/>
        </div>

        
        <div className="hm-sv-card">
          <h3 className="hm-sv-card-title">WEB DEVELOPMENT</h3>
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
          <Button 
          text={"Explore"}
          className="hm-sv-card-btn"/>
        </div>
   
      </div>
    </div>
  );
};

export default Services;
