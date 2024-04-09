import React from "react";
import "./ContactDetails.css";

const ContactDetails = () => {
  return (
    <div>
      <div className="conde-mdiv">
        <p>Explore all the ways to reach out to us.</p>
        <p>Let's Start the conversation.</p>
      </div>
      <div className="conde-details">
        <div className="conde-card">
          <div className="cc-circle"></div>
          <h2>Address</h2>
          <h4>No.263, Aukland, New-Zeland</h4>
          <p>View on Map</p>
        </div>
        <div className="conde-card">
          <div className="cc-circle"></div>
          <h2>Contact</h2>
          <h4>(97)23456789</h4>
          <h4>(97)23456789</h4>
         
        </div>
        <div className="conde-card">
          <div className="cc-circle"></div>
          <h2>Email</h2>
          <h4>techme-services@techme.com</h4>
          <h4>Info@techme.com</h4>
          
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
