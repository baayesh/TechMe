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

      if (scrollY > elementTop - (window.innerHeight+600) + elementHeight / 2) {
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
    <div className="col container-fluid d-flex align-items-center justify-content-center background1 pb-4 pt-5">
      <div className="row">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, y: -100 }}
        >
          <div className="row align-items-center">
            <div className="col-md-4  mb-3">
              <div className="card glass-effect">
                <div className="card-body">
                  <h3 className="row d-flex title-start-service justify-content-center exo-2-title">
                    Professional Web Design and Development
                  </h3>
                  {/* <h3 className="row  title-start-service d-flex justify-content-center mb-3 exo-2-title">
                    & Development
                  </h3> */}
                  <p className="card-text title-service exo-2">Design and Development</p>
                  <p className="card-text title-service exo-2">Domain and Hosting</p>
                  <p className="card-text title-service exo-2">SEO Optimization</p>
                  <p className="card-text title-service exo-2">Analytics and SSL</p>
                  <p className="card-text title-service exo-2">Web Security</p>
                  <Link to="/Contacts">
                    <button className="custom-button ">GET IN TOUCH</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3 ">
              <div className="card glass-effect">
                <div className="card-body">
                  <h3 className="row d-flex title-middle-service justify-content-center exo-2-title">
                    Premium Web Design and Development
                  </h3>
                  {/* <h3 className="row d-flex title-middle-service justify-content-center mb-3 exo-2-title">
                    Development and Branding
                  </h3> */}
                  <p className="card-text title-service exo-2">Starter Business+</p>
                  <p className="card-text title-service exo-2">UI UX Design</p>
                  <p className="card-text title-service exo-2">Mobile Responsive</p>
                  <p className="card-text title-service exo-2">Logo Design</p>
                  <p className="card-text title-service exo-2">Business Cards</p>
                  <Link to="/Contacts">
                    <button className="custom-button ">GET IN TOUCH</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card glass-effect ">
                <div className="card-body">
                  <h3 className="row title-end-service d-flex justify-content-center exo-2-title">
                    E-Commerce Web Design and Development
                  </h3>
                  {/* <h3 className="row title-end-service d-flex justify-content-center mb-3 exo-2-title">
                    & Development
                  </h3> */}
                  <p className="card-text title-service exo-2">Premium Feature+</p>
                  <p className="card-text title-service exo-2">Server Configuration</p>
                  <p className="card-text title-service exo-2">Audits and Website CRO</p>
                  <p className="card-text title-service exo-2">Geo-Behavioral Targeting</p>
                  <p className="card-text title-service exo-2">Analytical Evaluation</p>
                  <Link to="/Contacts">
                    <button className="custom-button ">GET IN TOUCH</button>
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
