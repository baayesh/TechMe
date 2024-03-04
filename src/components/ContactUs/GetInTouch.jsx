import React from "react";
import "./styles/GetInTouch.css";
const GetInTouch = () => {
  return (
    <div>
      <div className=" mt-5 mb-5 pt-5 pb-5">
        <div className="contact-bottom ">
          <div className="row ms-5 me-3 ">
            <div className="col-lg-4 col-md-6 col-sm-12 bottom-text ">
              <h5 className="margin-bottom-30 first-row">GET IN TOUCH</h5>
              <div className="get-in-touch-des">
                <p>
                Ready to take the next step in your online journey? Our team is eager to turn your ideas into reality. Reach out, and let's create something extraordinary.
                </p>
                <p>
                Whether you have a specific project in mind or just want to explore the possibilities, we're here to chat. From concept to code, we're passionate about bringing your digital dreams to life. Your success is our mission, and it all begins with a simple conversation. Let's connect and craft a tailored strategy that propels your brand to new heights.
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
