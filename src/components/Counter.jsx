import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./styles/Counter.css";


const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div>
          <div className="container-fluid d-flex justify-content-center align-items-center pt-5 pb-5 background ">
            <div className="row row-container ">
              <div className="col" style={{overflow:"hidden"}}>
              
                  <h1 className="cormorant-garamond-bold ">
                    {counterOn && (
                      <CountUp start={0} end={20} duration={3} delay={0} />
                    )}
                    +
                  </h1>
                  <h4 className="cormorant-garamond-bold-des">Projects Completed</h4>
               
              </div>
              <div className="col " style={{overflow:"hidden"}}>
                
                  <h1 className="number cormorant-garamond-bold">
                    {counterOn && (
                      <CountUp start={0} end={50} duration={3} delay={0} />
                    )}
                    +
                  </h1>
                  <h4 className="cormorant-garamond-bold-des">Happy Customers</h4>
                
              </div>
              <div className="col " style={{overflow:"hidden"}}>
                
                  <h1 className="number cormorant-garamond-bold ">
                    {counterOn && (
                      <CountUp start={0} end={30} duration={3} delay={0} />
                    )}
                    +
                  </h1>
                  <h4 className="cormorant-garamond-bold-des">Skilled Talent</h4>
              </div>
            </div>
          </div>
        
      </div>
    </ScrollTrigger>
  );
};

export default Counter;
