import React from "react";
import "./CusForm.css";

const CusForm = () => {
  return (
    <div>
      <div className="cus-frm-main">
        <div className="cus-frm-label">
          <h4>Ready to take the next Step?</h4>
          <p>Submit Your Request through our <span>Contact form</span> Today!</p>
        </div>
        {/* Contact Us Form */}
        <div className="cus-frm-form">
          <form action="">
            <input type="text" placeholder="First Name" />

            <input type="text" placeholder="Last Name" />
            <div>
              <input type="text" placeholder="Email" />
            </div>
            <div>
              <input
                type="text"
                placeholder="Your Requiremnents
              "
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CusForm;
