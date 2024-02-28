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
          <div className="container-fluid d-flex justify-content-center pt-5 pb-5 background">
            <div className="row row-container ">
              <div className="col mr-1" style={{overflow:"hidden"}}>
                <div className="p-5 ">
                  <h1 className="number">
                    {counterOn && (
                      <CountUp start={0} end={10} duration={3} delay={0} />
                    )}
                    +
                  </h1>
                  <h4 className="des">Projects Completed</h4>
                </div>
              </div>
              <div className="col " style={{overflow:"hidden"}}>
                <div className=" p-5 ">
                  <h1 className="number">
                    {counterOn && (
                      <CountUp start={0} end={50} duration={3} delay={0} />
                    )}
                    +
                  </h1>
                  <h4 className="des">Happy Customers</h4>
                </div>
              </div>
              <div className="col " style={{overflow:"hidden"}}>
                <div className="p-5 ">
                  <h1 className="number">
                    {counterOn && (
                      <CountUp start={0} end={30} duration={3} delay={0} />
                    )}
                    +
                  </h1>
                  <h4 className="des">Skilled Talent</h4>
                </div>
              </div>
            </div>
          </div>
        
      </div>
    </ScrollTrigger>
  );
};

export default Counter;
