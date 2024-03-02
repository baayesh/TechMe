import React from "react";
import "./styles/GetInTouch.css";
const GetInTouch = () => {
  return (
    <div>
      <div className=" main-div mt-2">
        <div className="contact-bottom ">
          <div className="row ms-5 me-3 ">
            <div className="col-lg-4 col-md-6 col-sm-12 bottom-text ">
              <h5 className="margin-bottom-30 title">GET IN TOUCH</h5>
              <div className="">
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

            <div className="col-lg-8 col-md-6 col-sm-12 mt-4 mb-4">
              <div className="user-input">
                <div className="row ">
                  <div className="col-lg-6 mt-3 col-md-12 col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name, surname"
                    />
                  </div>
                  <div className="col-lg-6 col-md-12 mt-3 col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="E-Mail"
                    />
                  </div>
                  <div className="col-lg-12 mt-3">
                    <textarea
                      placeholder="Your message"
                      className="form-control"
                    ></textarea>
                  </div>
                  <div className="col-lg-12 mt-3 ">
                    <button type="button" class="btn btn-light custom-button-2">
                     SEND
                    </button>
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
