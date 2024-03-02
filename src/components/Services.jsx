import React, { useRef, useEffect } from "react";
import "./styles/Services.css";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

function Services() {
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      const elementTop = element.offsetTop;
      const elementHeight = element.offsetHeight;
      const scrollY = window.scrollY;

      if (scrollY > elementTop - window.innerHeight + elementHeight / 2) {
        controls.start({ opacity: 1, y: -50 });
      } else {
        controls.start({ opacity: 0, y: 0 });
      }
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);
  return (
    <div className="col container-fluid d-flex align-items-center justify-content-center p-3 background1 pb-4">
      <div className="row">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, y: -100 }}
        >
          <div className="row align-items-center">
            <div className="col-md-4 pe-5 ">
              <div className="card glass-effect pe-5 ps-5 mb-3">
                <div className="card-body">
                  <h3 className="row d-flex justify-content-center">
                    Profrssional Web Design{" "}
                  </h3>
                  <h3 className="row d-flex justify-content-center mb-3">
                    & Development
                  </h3>
                  <p className="card-text">Design and Development</p>
                  <p className="card-text">Domain and Hosting</p>
                  <p className="card-text">SEO Optimization</p>
                  <p className="card-text">Analytics and SSL</p>
                  <p className="card-text">Web Security</p>
                  <Link to="/Contacts">
                    <button className="custom-button">GET IN TOUCH</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 pe-5 ">
              <div className="card glass-effect pe-5 ps-5 mb-3 ">
                <div className="card-body pt-4 pb-4">
                  <h3 className="row d-flex justify-content-center">
                    Premium Web Design,
                  </h3>
                  <h3 className="row d-flex justify-content-center mb-3">
                    Development and Branding
                  </h3>
                  <p className="card-text">Starter Business+</p>
                  <p className="card-text">UI UX Design</p>
                  <p className="card-text">Mobile Responsive</p>
                  <p className="card-text">Logo Design</p>
                  <p className="card-text">Business Cards</p>
                  <Link to="/Contacts">
                    <button className="custom-button">GET IN TOUCH</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 pe-5">
              <div className="card glass-effect pe-5 ps-5">
                <div className="card-body">
                  <h3 className="row d-flex justify-content-center">
                    E-Commerce Web Design
                  </h3>
                  <h3 className="row d-flex justify-content-center mb-3">
                    & Development
                  </h3>
                  <p className="card-text">Premium Feature+</p>
                  <p className="card-text">Server Configuration</p>
                  <p className="card-text">Audits and Website CRO</p>
                  <p className="card-text">Geo-Behavioral Targeting</p>
                  <p className="card-text">Analytical Evaluation</p>
                  <Link to="/Contacts">
                    <button className="custom-button">GET IN TOUCH</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
