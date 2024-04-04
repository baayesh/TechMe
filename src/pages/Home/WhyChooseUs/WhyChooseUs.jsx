import React from "react";
import "./WhyChooseUs.css";
import whyChooseUs from "../../../Assets/Home/WhyChooseUs/WhyChooseUs.png";

const WhyChooseUs = () => {
  return (
    <div className="hm-why-choose-mdiv">
      <div className="hm-why-choose-titlediv">
        <h3>Why TechMe</h3>
      </div>

      {/* Start of the content */}

      {whyChooseUsCont.map((d) => (
        <div>
          <div className="hm-why-choose-content">
            <div className="hm-why-choose-contenttitlediv">
              {/* <p>{d.number1}</p> */}
              <p>{d.title1}</p>
            </div>
            <div className="hm-why-choose-line"></div>
            <div className="hm-why-choose-contentdiv">
              <p>{d.content1}</p>
            </div>
          </div>

          <div className="hm-why-choose-content">
            <div className="hm-why-choose-contentdiv2">
              <p>{d.content2}</p>
            </div>
            <div className="hm-why-choose-line2"></div>  
            <div className="hm-why-choose-contenttitlediv2">
              <p>{d.title2}</p>
              {/* <p>{d.number2}</p> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const whyChooseUsCont = [
  {
    number1: "1",
    title1: "Tailored Solutions",
    content1:
      "We understand that every business is unique, which is why we offer customised solutions tailored to your specific requirements and objectives. From website development to computer repairs, our personalised approach ensures that you get the right solution for your needs.",
    number2: "2",
    title2: "Expertise",
    content2:
      "Our team consists of highly skilled professionals with extensive experience in various aspects of IT services, including website development, and hardware repairs. We leverage our expertise to deliver top-quality solutions that meet your specific needs and exceed your expectations.",
  },
  {
    number1: "3",
    title1: "Timely Support",
    content1:
      "With our responsive support team, you can expect quick and efficient assistance whenever you encounter technical issues or need advice. We prioritise timely responses and resolutions to minimise disruptions to your operations and keep your business running smoothly.",
    number2: "4",
    title2: "Cutting Edge Technology",
    content2:
      "We stay abreast of the latest technological advancements to provide you with innovative solutions that drive efficiency and productivity. From advanced virus removal techniques to state-of-the-art website development tools, we leverage cutting-edge technology to deliver superior results.",
  },
];

export default WhyChooseUs;
