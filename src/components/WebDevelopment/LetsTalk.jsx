import React from "react";
import "../WebDevelopment/styles/LetsTalk.css";

const LetsTalk = () => {
  return (
    <div>
      <div>
        <h3 className="title mt-5">Let's Talk</h3>
      </div>
      <div className="row d-flex justify-content-center mt-sm-5 cont-lt-tlk">
        <div className="card-lt-tlk">
          <form className="form">
            <div className="group">
              <input type="text" required=""></input>
              <label for="name">Name</label>
            </div>
            <div class="group">
              <input type="email" id="email" name="email" required=""></input>
              <label for="email">Email</label>
            </div>
            <div className="group">
              <textarea
                id="comment"
                name="comment"
                rows="5"
                required=""
              ></textarea>
              <label for="comment">Your Requirements</label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
