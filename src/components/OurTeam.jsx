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

      if (
        scrollY >
        elementTop - (window.innerHeight + 1500) + elementHeight / 2
      ) {
        controls.start({ opacity: 1, x: 0 });
      }
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);


  const text = "Crafting Digital Excellence. Where Innovation Meets Imagination, and Every Pixel Tells a Story. We Design, We Develop, We Transform Ideas into Digital Reality. Your Vision, Our Expertise -Building Tomorrow's Web Today".split(" ");
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
              <h5 className="montserrat-title">OUR TEAM</h5>
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
            </motion.div>
            <div className="team-description exo-2-title-description">
              {text.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 2,
                    delay: i /6,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </div>
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
        <div className="row ms-5 me-5 mt-5 d-flex justify-content-center">
          <div className="col-sm-12 col-md-6 col-lg-3 mb-5 mb-sm-2 column-1">
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
                <div className="ps-2 pe-2 pt-4 member-description">
                  <p>
                    I am UI/UX Designer. I am UI/UX Designer. I am UI/UX
                    Designer
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3  mb-5  mb-sm-2 column-1 ">
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
                <div className="ps-2 pe-2 pt-4 member-description">
                  <p>
                    I am UI/UX Designer. I am UI/UX Designer. I am UI/UX
                    Designer
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mb-5 mb-sm-2 column-1 ">
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
                <div className="ps-2 pe-2 pt-4 member-description">
                  <p>
                    I am UI/UX Designer. I am UI/UX Designer. I am UI/UX
                    Designer
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mb-sm-2 column-1">
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
                <div className="ps-2 pe-2 pt-4 member-description">
                  <p>
                    I am UI/UX Designer. I am UI/UX Designer. I am UI/UX
                    Designer
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
