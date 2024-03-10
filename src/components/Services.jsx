
import "./styles/Services.css";
import { motion} from "framer-motion";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../hooks/utils";

function Services() {
  // const controls = useAnimation();
  // const ref = useRef();

  // useEffect(() => {
  // const handleScroll = () => {
  //     const element = ref.current;
  //     const elementTop = element.offsetTop;
  //     const elementHeight = element.offsetHeight;
  //     const scrollY = window.scrollY;

  //     if (
  //       scrollY >
  //       elementTop - (window.innerHeight + 600) + elementHeight / 2
  //     ) {
  //       controls.start({ opacity: 1, y: -50 });
  //     } else {
  //       controls.start({ opacity: 0, y: 0 });
  //     }
  //   };

  //   // Attach the event listener
  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [controls]);

// Create responsive design for animation


  return (
    <div className="col max-w container-fluid d-flex align-items-center justify-content-center background1 pb-4 pt-5">
      <div className="row">
        <div>
          <div className="row align-items-center">
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, type: "spring", stiffness: 120 }}
              viewport={{ once: false, amount: 0.5 }}
              className="col-md-4  mb-3"
            >
              <div className="card glass-effect">
                <div className="card-body">
                  <h3 className="row d-flex title-start-service justify-content-center exo-2-title">
                    Professional Web Design and Development
                  </h3>
                  {/* <h3 className="row  title-start-service d-flex justify-content-center mb-3 exo-2-title">
                    & Development
                  </h3> */}
                  <p className=" title-service services-exo-2">
                    Design and Development
                  </p>
                  <p className="title-service services-exo-2">
                    Domain and Hosting
                  </p>
                  <p className=" title-service services-exo-2">
                    SEO Optimization
                  </p>
                  <p className=" title-service services-exo-2">
                    Analytics and SSL
                  </p>
                  <p className=" title-service services-exo-2">Web Security</p>
                  <Link to="/Contacts">
                    {/* Framer motion scale effect to the button */}
                    <motion.button
                      whileTap={{ scale: 0.7 }}
                      className="custom-button "
                    >
                      GET IN TOUCH
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 300 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, type: "spring", stiffness: 120 }}
              viewport={{ once: false, amount: 0.5 }}
              className="col-md-4 mb-3 "
            >
              <div className="card glass-effect">
                <div className="card-body">
                  <h3 className="row d-flex title-middle-service justify-content-center exo-2-title">
                    Premium Web Design and Development
                  </h3>
                  {/* <h3 className="row d-flex title-middle-service justify-content-center mb-3 exo-2-title">
                    Development and Branding
                  </h3> */}
                  <p className=" title-service services-exo-2">
                    Starter Business+
                  </p>
                  <p className=" title-service services-exo-2">UI UX Design</p>
                  <p className=" title-service services-exo-2">
                    Mobile Responsive
                  </p>
                  <p className="title-service services-exo-2">Logo Design</p>
                  <p className=" title-service services-exo-2">
                    Business Cards
                  </p>
                  <Link to="/Contacts">
                    <motion.button
                      whileTap={{ scale: 0.7 }}
                      className="custom-button "
                    >
                      GET IN TOUCH
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, type: "spring", stiffness: 120 }}
              exit={{ opacity: 0, x: -200 }}
              viewport={{ once: false, amount: 0.5 }}
              className="col-md-4 mb-3"
            >
              <div className="card glass-effect ">
                <div className="card-body">
                  <h3 className="row title-end-service d-flex justify-content-center exo-2-title">
                    E-Commerce Web Design and Development
                  </h3>
                  {/* <h3 className="row title-end-service d-flex justify-content-center mb-3 exo-2-title">
                    & Development
                  </h3> */}
                  <p className=" title-service services-exo-2">
                    Premium Feature+
                  </p>
                  <p className="title-service services-exo-2">
                    Server Configuration
                  </p>
                  <p className=" title-service services-exo-2">
                    Audits and Website CRO
                  </p>
                  <p className=" title-service services-exo-2">
                    Geo-Behavioral Targeting
                  </p>
                  <p className="title-service exo-2">Analytical Evaluation</p>
                  <Link to="/Contacts">
                    <motion.button
                      whileTap={{ scale: 0.7 }}
                      className="custom-button "
                    >
                      GET IN TOUCH
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
