import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";

const ServicesMain = () => {
  return (
    <div>
      <div className="ser-web">
        <h1>Web Development and Hosting</h1>
        <div className="ser-web-services">
          <Link className="link-web">Branding</Link>
          <Link className="link-web">Logo Creation</Link>
          <Link className="link-web">SEO</Link>
          <Link className="link-web">Email Domain</Link>
          <Link className="link-web">Maintanance</Link>
        </div>
      </div>
      <div className="ser-web">
        <h1>IT Services</h1>
        <div className="ser-web-services">
          <Link className="link-web">Remote Support</Link>
          <Link className="link-web">Computer and Laptop Repairs</Link>
          <Link className="link-web">Computer Upgrade and Servicing</Link>
          <Link className="link-web">Virus Removal</Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesMain;
