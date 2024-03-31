import React from "react";
import "./WhyChooseUs.css";
import whyChooseUs from "../../../Assets/Home/WhyChooseUs/WhyChooseUs.png";

const WhyChooseUs = () => {
  return (
    <div>
      <div className="hm-why-choose-titlediv">

            <h3>WE CAN DO it together</h3>
          </div>
 

      {/* Start of the content */}

      {whyChooseUsCont.map((d) => (
        <div>
          <div className="hm-why-choose-content">
            <div className="hm-why-choose-contenttitlediv">
              <p>{d.title1}</p>
            </div>
            <div className="hm-why-choose-contentdiv">
              <p>
              {d.content1}
              </p>
            </div>
          </div>

          <div className="hm-why-choose-content">
            <div className="hm-why-choose-contentdiv2">
              <p>{d.content2}</p>
            </div>
            <div className="hm-why-choose-contenttitlediv2">
              <p>
              {d.title2}
              </p>
            </div>
          </div>
          
        </div>
        
        
      ))}
    </div>
  );
};

const whyChooseUsCont = [
  {
    title1: "Why Choose Us 1",
    content1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    title2: "Why Choose Us 2",
    content2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title1: "Why Choose Us 3",
    content1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    title2: "Why Choose Us 4",
    content2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  }
];


export default WhyChooseUs;
