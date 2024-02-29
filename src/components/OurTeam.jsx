import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import "./styles/OurTeam.css";
import dummyImg from "../Assets/Team Members/dummy-img.png";

const OurTeam = () => {
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      const elementTop = element.offsetTop;
      const elementHeight = element.offsetHeight;
      const scrollY = window.scrollY;

      if (scrollY > elementTop - window.innerHeight + elementHeight / 2) {
        controls.start({ opacity: 1, x: 0 });
      } else {
        controls.start({ opacity: 0, x: -100 });
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
    <div>
      <div className="container-fluid">
        <div className="row">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={controls}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, x: 100 }}
          >
            <div className=" pt-5">
              <h5 className="team">OUR TEAM</h5>
            </div>
          </motion.div>
        </div>
        <div className="row">
          <div className=" team-description-div">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -100 }}
              animate={controls}
              transition={{ duration: 1 }}
              exit={{ opacity: 0, x: 100 }}
            >
              <h5 className="team-description">
                Crafting Digital Excellence. Where Innovation Meets Imagination,
                and Every Pixel Tells a Story. We Design, We Develop, We
                Transform Ideas into Digital Reality. Your Vision, Our Expertise
                — Building Tomorrow's Web Today
              </h5>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={controls}
      transition={{ duration: 1 }}
      exit={{ opacity: 0, x: 100 }}
      >
        <div className="row ms-5 me-5 mt-5">
          <div className="col justify-content-center column-1">
            <div class="card card-style shadow mb-5">
              <img
                src={dummyImg}
                class="card-img-top image mx-auto mt-5"
                alt="..."
              />
              <div class="card-body">
                <div className="name-and-title pt-2 pb-2">
                  <h5 class="card-title">Person 1</h5>
                  <p class="card-text">UI/UX Designer</p>
                </div>
                <div className="ps-2 pe-2 pt-4">
                  <p>
                    I am UI/UX Designer. I am UI/UX Designer. I am UI/UX Designer
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col justify-content-center column-1 ">
            <div class="card card-style shadow mb-5">
              <img
                src={dummyImg}
                class="card-img-top image mx-auto mt-5"
                alt="..."
              />
              <div class="card-body">
                <div className="name-and-title pt-2 pb-2">
                  <h5 class="card-title">Person 1</h5>
                  <p class="card-text">UI/UX Designer</p>
                </div>
                <div className="ps-2 pe-2 pt-4">
                  <p>
                    I am UI/UX Designer. I am UI/UX Designer. I am UI/UX Designer
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col justify-content-center column-1 ">
            <div class="card card-style shadow mb-5">
              <img
                src={dummyImg}
                class="card-img-top image mx-auto mt-5"
                alt="..."
              />
              <div class="card-body">
                <div className="name-and-title pt-2 pb-2">
                  <h5 class="card-title">Person 1</h5>
                  <p class="card-text">UI/UX Designer</p>
                </div>
                <div className="ps-2 pe-2 pt-4">
                  <p>
                    I am UI/UX Designer. I am UI/UX Designer. I am UI/UX Designer
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col justify-content-center column-1">
            <div class="card card-style shadow mb-5">
              <img
                src={dummyImg}
                class="card-img-top image mx-auto mt-5"
                alt="..."
              />
              <div class="card-body">
                <div className="name-and-title pt-2 pb-2">
                  <h5 class="card-title">Person 1</h5>
                  <p class="card-text">UI/UX Designer</p>
                </div>
                <div className="ps-2 pe-2 pt-4">
                  <p>
                    I am UI/UX Designer. I am UI/UX Designer. I am UI/UX Designer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OurTeam;
