import React from "react";
import "./styles/GetInTouch.css";
const GetInTouch = () => {
  return (
    <div>
      <div class=" main-div">
        <div class="contact-bottom">
          <div class="row ms-5 me-3 ">
            <div class="col-lg-4 col-md-6 col-sm-12 ">
              <h5 class="margin-bottom-30">Get in touch</h5>
              <div class="contact-text">
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
                <p>
                  Sed blandit tempus purus, sed sodales leo rutrum vel. Nam
                  vulputate ipsum ac est congue, eget commodo magna lobortis.
                </p>
              </div>
            </div>

            <div class="col-lg-8 col-md-6 col-sm-12 mt-4">
              <div class="contact-form">
                <div class="row">
                  <div class="col-lg-6 col-md-12 col-sm-12">
                    <input type="text" placeholder="Name, surname" />
                  </div>
                  <div class="col-lg-6 col-md-12 col-sm-12">
                    <input type="text" placeholder="E-Mail" />
                  </div>
                  <div class="col-lg-12">
                    <textarea placeholder="Your message"></textarea>
                  </div>
                  <div class="col-lg-12">
                    <button class="btn-primary-line">SEND</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
