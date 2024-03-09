import React from "react";
import "./styles/CaseStories.css";
import chamzLogo from "../../Assets/Web Developement/Case Stories/Chamz_logo.png";
import { motion } from "framer-motion";

const CaseStories = () => {
  // Title of the page
  const title = "What Our Customers Say About US";
  const desChamz =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <div className="main-container">
      {/* Start of title */}
      <div className="row title-cus d-flex justify-content-center m-2 mb-md-5">
        {title}
      </div>

      <div className="row d-flex justify-content-center align-items-center mb-5">
        {/* Start of first card */}
        <motion.div
          initial={{ opacity: 0, x:-200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, type: "spring", stiffness:120}}
          viewport={{ once: false, amount: 0.5 }}
          className=" mb-3 col-xl-4 col-lg-6 col-md-12 "
        >
          <div className="card glass-effect">
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <div className="pt-5 pb-5">
                <img
                  src={chamzLogo}
                  alt="chamz logo "
                  className=" chamz-logo"
                />
              </div>
              <h3 className="row d-flex title-start-service justify-content-center exo-2-title">
                Chamz.co.nz
              </h3>
              <p>{desChamz}</p>
            </div>
          </div>
        </motion.div>

        {/* Start of second card */}
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness:120}}
          viewport={{ once: false, amount: 0.09 }}
          className="mb-3 col-xl-4 col-lg-6 col-md-12"
        >
          <div className="card glass-effect">
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <div className=" pt-5 pb-5">
                <img
                  src={chamzLogo}
                  alt="chamz logo "
                  className=" chamz-logo"
                />
              </div>
              <h3 className="row d-flex title-start-service justify-content-center exo-2-title">
                Chamz.co.nz
              </h3>
              <p>{desChamz}</p>
            </div>
          </div>
        </motion.div>

        {/* Start of third card  */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, type: "spring", stiffness:120}}
          viewport={{ once: false, amount: 0.5 }}
          className="mb-3 col-xl-4 col-lg-12  col-md-12"
        >
          <div className="card glass-effect">
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <div className=" pt-5 pb-5">
                <img
                  src={chamzLogo}
                  alt="chamz logo "
                  className=" chamz-logo"
                />
              </div>
              <h3 className="row d-flex title-start-service justify-content-center exo-2-title">
                Chamz.co.nz
              </h3>
              <p>{desChamz}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStories;
