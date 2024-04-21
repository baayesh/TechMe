import React from "react";
import Button from "../../../components/Button/Button";
import "../Contact Us/ContactUs.css";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>
      <div className="hm-cus-mdiv">
        <h3>Reach out to us and let's explore the possibilities together!</h3>
        <div className="hm-cus-button">
          <div>
            <svg
              width="50px"
              height="50px"
              viewBox="-2.4 -2.4 28.80 28.80"
              fill="none"
              className="hm-cus-left-arrow"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(90)"
              stroke="#000000"
              id="Ayesh"
            >
              <g stroke-width="0" />

              <g
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#000000"
                stroke-width="0.048"
                id="Ayesh"
              />

              <g>
                {" "}
                <path
                  d="M12 4V20M12 4L8 8M12 4L16 8"
                  stroke="#000000"
                  stroke-width="0.768"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  id="Ayesh"
                />{" "}
              </g>
            </svg>
          </div>
          <Link to="/contact-us" className="hm-cus-mlink">
            <p>Contact Us</p>
          </Link>
          <div>
            <svg
              width="50px"
              height="50px"
              viewBox="-2.4 -2.4 28.80 28.80"
              fill="none"
              className="hm-cus-right-arrow"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(270)"
              stroke="#000000"
            >
              <g stroke-width="0" />

              <g
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#000000"
                stroke-width="0.048"
              />

              <g>
                {" "}
                <path
                  d="M12 4V20M12 4L8 8M12 4L16 8"
                  stroke="#000000"
                  stroke-width="0.768"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
