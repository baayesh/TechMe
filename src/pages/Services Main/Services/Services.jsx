import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const ServicesMain = () => {
  // web development handler
  const [content, setContent] = useState("Intial content");

  const webDevelopment = "Web development content";
  const hosting = "Hosting content";
  const brandingAndLogoCreation = "Branding and Logo Creation content";
  const websiteMaintenance = "Website Maintenance content";

  // Handlers
  const handleWebDevelopment = () => {
    setContent(webDevelopment);
  };
  const handleHosting = () => {
    setContent(hosting);
  };
  const handleBrandingAndLogoCreation = () => {
    setContent(brandingAndLogoCreation);
  };
  const handleMaintenance = () => {
    setContent(websiteMaintenance);
  };

  // It service handler
  const [contentIT, setContentIT] = useState("Intial content");

  // Handlers
  const handleRemoteSupport = () => {
    setContentIT("Remote Support content");
  };
  const handleComputerAndLaptopepairs = () => {
    setContentIT("Computer and Laptop repairs content");
  };
  const handleComputerUpgradeAndServicing = () => {
    setContentIT("Computer Upgrade and Servicing content");
  };

  const handleComputerVirusRemoval = () => {
    setContentIT("Computer Virus Removal content");
  };

  return (
    <div className="ser-mdiv">
      <div className="ser-web">
        <div className="ser-titles">
          <h1>Web&nbsp;Development&nbsp;and&nbsp;Hosting</h1>
          <div className="ser-web-services">
            <p className="link-web" onClick={handleWebDevelopment}>
              Web Development
            </p>
            <p className="link-web" onClick={handleHosting}>
              Hosting
            </p>
            <p className="link-web" onClick={handleBrandingAndLogoCreation}>
              Branding and Logo Creation
            </p>
            <p className="link-web" onClick={handleMaintenance}>
              Website Maintenance
            </p>
          </div>
        </div>
        <div className="ser-individual-service">
          <p>{content}</p>
          <Link to="/coming-soon">
            <p>
              <span>See More</span>
            </p>
          </Link>
        </div>
      </div>
      <div className="ser-web">
        <div className="ser-titles">
          <h1>IT-Services</h1>
          <div className="ser-web-services">
            <p className="link-web" onClick={handleRemoteSupport}>
              Remote Support
            </p>
            <p className="link-web" onClick={handleComputerAndLaptopepairs}>
              Computer and Laptop Repair
            </p>
            <p className="link-web" onClick={handleComputerUpgradeAndServicing}>
              Compuer Upgrade and Servicing
            </p>
            <p className="link-web" onClick={handleComputerVirusRemoval}>
              Virus Removal
            </p>
          </div>
        </div>
        <div className="ser-individual-service ">
          <p>{contentIT}</p>
          <Link to="/web-development">
            <p>
              <span>See More</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesMain;
