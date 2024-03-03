import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import "./styles/WhoAreWe.css";
import sideImg2 from "../Assets/SideContent.png";

const WhoAreWe = () => {
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      const elementTop = element.offsetTop;
      const elementHeight = element.offsetHeight;
      const scrollY = window.scrollY;

      // Make a control according to element

      if (scrollY > elementTop - (window.innerHeight+400) + elementHeight / 3) {
        controls.start({ opacity: 1, x: 0 });
      }
    };

    // Event listener
    window.addEventListener("scroll", handleScroll);

    // Clean event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <div className="p-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 ">
            <div className="text-11">
              <h3 className="animate-charcter rowdies-bold">
                Transform Your Digital Presence with Expert Web Development &
                Social Media Marketing
              </h3>
            </div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -100 }}
              animate={controls}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0, x: 100 }}
            >
              <p className="main-heading-description exo-2">
                Revamp your online presence with our skilled team in web
                development and social media marketing. Think of it as a
                makeover for your digital identity. We'll make your website
                top-notch and ensure your brand shines across social media. It's
                like giving your online story a fresh and appealing look!
              </p>
            </motion.div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -100 }}
              animate={controls}
              transition={{ duration: 1 }}
              exit={{ opacity: 0, x: 100 }}
            >
              <button className="custom-button exo-2">Explore Our Services</button>
            </motion.div>
          </div>

          <div className="col-md-4">
            <img src={sideImg2} alt="Image Description" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
