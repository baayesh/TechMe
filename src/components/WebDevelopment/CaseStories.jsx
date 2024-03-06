import React from "react";
import "./styles/CaseStories.css";
import chamzLogo from "../../Assets/Web Developement/Case Stories/Chamz_logo.png";

const CaseStories = () => {
  return (
    <div>
      {/* Start of Chamz */}
      <div className="row background-1">
        {/* Chamz Icon Start */}
        <div className="col-md-4 pt-5 pb-5">
          <img src={chamzLogo} alt="chamz logo" className=" chamz-logo" />
        </div>
        {/* Chamz Icon End */}
        {/* Chamz Description Start */}

        <div className="col-md glass-effect d-flex justify-content-center align items-center  me-5 p-5 ">
          <p className="d-flex justify-content-center align-items-center para-web-customer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Chamz Description End */}
      </div>
      {/* End of Chamz */}

      {/* Start of Chamz */}
      <div className="row background-2">
        {/* Chamz Icon Start */}
        <div className="col-md-4 pt-5 pb-5">
          <img src={chamzLogo} alt="chamz logo" className=" chamz-logo" />
        </div>
        {/* Chamz Icon End */}
        {/* Chamz Description Start */}

        <div className="col-md glass-effect d-flex justify-content-center align items-center me-5 p-5 ">
          <p className="d-flex justify-content-center align-items-center para-web-customer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Chamz Description End */}
      </div>
      {/* End of Chamz */}

      {/* Start of Chamz */}
      <div className="row background-3 ">
        {/* Chamz Icon Start */}
        <div className="col-md-4 pt-5 pb-5">
          <img src={chamzLogo} alt="chamz logo" className=" chamz-logo" />
        </div>
        {/* Chamz Icon End */}
        {/* Chamz Description Start */}
        <div className="col-md glass-effect d-flex justify-content-center align items-center me-5 p-5 me-5 ">
          <p className="d-flex justify-content-center align-items-center para-web-customer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        {/* Chamz Description End */}
      </div>
      {/* End of Chamz */}
    </div>
  );
};

export default CaseStories;
