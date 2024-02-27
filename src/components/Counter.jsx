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
       
        <div class="container d-flex justify-content-center mt-5">
          <div class="row ">
            <div class="col equal-height">
              <div class="p-5 ">
                <h1>
                  {counterOn && (
                    <CountUp start={0} end={10} duration={3} delay={0} />
                  )}
                  +
                </h1>
                <h4>Projects Completed</h4>
              </div>
            </div>
            <div class="col equal-height">
              <div class="p-5  ">
                <h1>
                  {counterOn && (
                    <CountUp start={0} end={50} duration={3} delay={0} />
                  )}
                  +
                </h1>
                <h4>Happy Customers</h4>
              </div>
            </div>
            <div class="col equal-height">
              <div class="p-5 ">
                <h1>
                  {counterOn && (
                    <CountUp start={0} end={30} duration={3} delay={0} />
                  )}
                  +
                </h1>
                <h4>Skilled Talent</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Counter;
