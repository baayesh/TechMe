import React from "react";
import "./CusForm.css";

const CusForm = () => {
  return (
    <div>
      <div className="cus-frm-main">
        <div className="cus-frm-label">
          <h4>Ready to take the next Step?</h4>
          <p>
            Submit Your Request through our <span>Contact form</span> Today!
          </p>
        </div>
        {/* Contact Us Form */}
        <div className="cus-frm-form">
          <div className="col-lg-8 col-md-6 col-sm-12 mt-4 mb-4">
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
                <button type="button" class="btn  custom-button-2">
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CusForm;
