import React, { useRef, useState } from "react";
import "./CusForm.css";

import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";
import ReCAPTCHA from "react-google-recaptcha";

// Email.js code

const CusForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [verified, setVerified] = useState(false);
  // Address for google maps redirection
  const address =
    "252 Lichfield Street, Christchurch Central City, Christchurch 8011, New Zealand";

  // Recaptcha funtion...
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified = true;
  }

  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

    emailjs
      .sendForm("service_dj6irzn", "template_12mk9dk", form.current, {
        publicKey: "NNfl_drQ9bCidxu5y",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    const data = { name, email, message };
  };

  return (
    <>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>

      <div>
        <div className="cus-frm-main">
          {/* <div className="cus-frm-label">
            <h4>Ready to take the next Step?</h4>
          </div> */}
          {/* Contact Us details */}
        </div>
        <div className="contact-us-mdiv">
          <div className="cus-contact-details">
            {/* Email */}

            <div className="cus-contact-details-col">
              <div>
                <a href="mailto:info@techme.co.nz">
                  <svg
                    width="50px"
                    height="50px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 9.00005L10.2 13.65C11.2667 14.45 12.7333 14.45 13.8 13.65L20 9"
                      stroke="#4b3db2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3 9.17681C3 8.45047 3.39378 7.78123 4.02871 7.42849L11.0287 3.5396C11.6328 3.20402 12.3672 3.20402 12.9713 3.5396L19.9713 7.42849C20.6062 7.78123 21 8.45047 21 9.17681V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V9.17681Z"
                      stroke="#4b3db2"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </a>
              </div>
              <div>
                <a href="mailto:info@techme.co.nz">
                  <h5>Email</h5>
                </a>
                <a href="mailto:info@techme.co.nz">
                  <p>info@techme.co.nz</p>
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="cus-contact-details-col">
              <div>
                <a href="tel:+64275989998">
                  <svg
                    width="50px"
                    height="50px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 7V3M21 3H17M21 3L15 9M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z"
                      stroke="#4b3db2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
              <div>
                <a href="tel:+64275989998">
                  <h5>Phone</h5>
                </a>
                <a href="tel:+64275989998">
                  <p>027&nbsp;598&nbsp;9989</p>
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="cus-contact-details-col">
              <div>
              <a href="https://maps.app.goo.gl/Ejcpin8qwbgkEMzP7" target="_blank">
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                    stroke="#4b3db2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19 9.75C19 15.375 12 21 12 21C12 21 5 15.375 5 9.75C5 6.02208 8.13401 3 12 3C15.866 3 19 6.02208 19 9.75Z"
                    stroke="#4b3db2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                </a>
              </div>

              <div>
              <a href="https://maps.app.goo.gl/Ejcpin8qwbgkEMzP7" target="_blank">
                  <h5>Address</h5>
                  </a>
                <a href="https://maps.app.goo.gl/Ejcpin8qwbgkEMzP7" target="_blank">
                  <p>
                    252&nbsp;Lichfield&nbsp;Steet,
                    <br />
                    Christchurch&nbsp;Central&nbsp;City, <br />
                    Christchurch&nbsp;8011
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-us-form">
            <form ref={form} onSubmit={handleSubmit}>
              <div className="">
                <div className="">
                  <label htmlFor="name">Your&nbsp;Name</label>
                  <input
                    id="name"
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="user_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="">
                  <label htmlFor="name">Email&nbsp;Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="E-Mail"
                    value={email}
                    name="user_email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="">
                  <label htmlFor="name">Reach&nbsp;to&nbsp;us</label>
                  <textarea
                    placeholder="Your message"
                    className="form-control"
                    rows="10"
                    value={message}
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>

                <ReCAPTCHA
                  className="cus-recaptcha"
                  sitekey="6LfT59IpAAAAAAshV4B1vkX1WCguaruO7Cb2Xw8r"
                  onChange={onChange}
                />

                <button
                  type="submit"
                  disabled={verified}
                  class=" custom-button-2"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="con-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.459063499307!2d172.6439462925603!3d-43.53447179661239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d3189e6915c9db3%3A0xe926f715ce61caa7!2sTechMe%20Limited!5e0!3m2!1sen!2slk!4v1716045233512!5m2!1sen!2slk"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default CusForm;
