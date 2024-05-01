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
            <div className="hm-cus-cus-link">
              <p>Contact Us</p>
                <svg
                  className="hm-hr-m-arrow"
                    width="50px"
                    height="50px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    transform="rotate(90)"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M12 4V20M12 4L8 8M12 4L16 8"
                        stroke="#000000"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />{" "}
                    </g>
                  </svg>
            </div>
          
          </Link>
     
       
      </div>
    </div>
  );
};

export default ContactUs;
