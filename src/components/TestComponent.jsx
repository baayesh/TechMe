import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import HeroVid from "../Assets/TechMe.mp4";

const YourComponent = () => {
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
      <div
        className="video-container"
        style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <video
          autoPlay
          muted
          loop
          src={HeroVid}
          type="video/mp4"
          style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default YourComponent;
