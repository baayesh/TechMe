import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

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
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </h1>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, x: 100 }}
        className="test"
      >
        <button className="custom-button">Explore Our Services</button>
      </motion.div>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </h1>
    </div>
  );
};

export default YourComponent;
