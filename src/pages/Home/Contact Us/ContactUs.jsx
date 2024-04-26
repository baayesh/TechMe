import React from "react";
import Button from "../../../components/Button/Button";
import "../Contact Us/ContactUs.css";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>
      <div className="hm-cus-mdiv">
        <h3>Reach out to us and let's explore the possibilities together!</h3>
      
    
          <Link to="/contact-us" className="hm-cus-mlink">
            <p>Contact Us</p>
          </Link>
     
       
      </div>
    </div>
  );
};

export default ContactUs;
