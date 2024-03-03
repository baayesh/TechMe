import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import HeroVid from "../Assets/TechMe.mp4";
import { Link } from "react-router-dom";
import ScrollTrigger from "react-scroll-trigger";

const YourComponent = () => {
  const text = "This is the text you should focus on".split(""); 
  return (
  
 
      <div className="test-2">
          <h1>
            Lorem Ipsum ISt ammet jdiisjoaj jufoe iallan fjfurkkaifjfnaoko isajjak aiosfhaso hfohgoua hgouehgro hqawohgosdh gvhdsfghvvehgfhehgfvfhvhdsfvefhfve fheohj f hfhjdsfofvjhdsoh gdosgfhg owrjhfoiwajhfoisahgouehgouwhgoijqfouhgojdsfnbvopdsfjhfpwanfiodfhgosadhgoupeshfnowa fowajh  fopuefhgoesfhj gedsfog josidf gsdfog jhosedf gose jhg hdsfgh edsofgjh osedfjh gdsjh fsud fjgfuj eshn
          

          </h1>



          <div >
      {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </div>
        </div>

  );
};

export default YourComponent;
