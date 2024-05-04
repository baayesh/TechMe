import React from "react";
import "./Services.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet-async";
import Button from "../../../components/Button/Button";
import { useState } from "react";

const ServicesMain = () => {
  const [activeIndex, setActiveIndex] = useState(null); //create use state hook to deal with paragraphs

  //Handle click to handle whe user click on the text
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      {/* For SEO Purpose */}
      <Helmet>
        <title>Services</title>
        <meta
          name="description"
          content='
"Discover top-notch web development services tailored to elevate your digital presence. At TechMe, we specialize in crafting dynamic and responsive websites that captivate audiences and drive results. From custom designs to seamless functionality, trust us to bring your vision to life. Explore our comprehensive suite of services today."'
        />
      </Helmet>
      <div className="ser-mdiv">
        <div className="ser-left">
          <div className="ser-web-mdiv">
            <h2>WEB DEVELOPMENT AND HOSTING</h2>

            <p onClick={() => handleClick(0)}>Web Development</p>

            <p onClick={() => handleClick(1)}>Hosting</p>

            <p onClick={() => handleClick(2)}>Branding and Logo Creation</p>

            <p onClick={() => handleClick(3)}>Website Maintenance</p>
          </div>
          <div className="ser-it-mdiv">
            <h2>IT SERVICES</h2>

            <p onClick={() => handleClick(4)}>Remote Support</p>

            <p onClick={() => handleClick(5)}>Laptop Repair</p>

            <p onClick={() => handleClick(6)}>Computer Upgrade and Servicing</p>

            <p onClick={() => handleClick(7)}>Virus Removal</p>
          </div>
        </div>
        <div className="ser-right">
          <div className="ser-paragraphs">
            {activeIndex === null ? (
              <p>Default Para</p>
            ) : activeIndex === 0 ? (
              <p>
                We specialise in creating custom websites that cater to your
                unique requirements, whether you need a simple informational
                site or a complex e-commerce platform. Our team collaborates
                closely with you to <span>design and develop</span> a
                <span> professional, user-friendly website</span> that reflects
                your brand identity and <span>engages your audience</span>
                effectively.
              </p>
            ) : activeIndex === 1 ? (
              <p>
                In addition to website development, we provide
                <span>reliable hosting solutions </span>to ensure your website
                is <span>accessible and secure</span> on the internet. With our
                hosting services, you can trust that your website will have the
                <span> performance and stability</span> it needs to
                <span>support your online presence</span> and business
                objectives.
              </p>
            ) : activeIndex === 2 ? (
              <p>
                Our branding and logo designing service helps businesses
                establish a <span>unique and memorable identity. </span>We
                collaborate with clients to create
                <span>distinctive logos</span> and develop comprehensive
                branding strategies that
                <span>reflect your values, vision, and target audience.</span>
                Our goal is to help businesses stand out in a competitive market
                and leave a lasting impression on your customers.
              </p>
            ) : activeIndex === 3 ? (
              <p>
                Keeping your website updated and optimised is essential for its
                performance and security. Our website maintenance service
                ensures that your
                <span>site remains functional, secure, and up-to-date</span>
                with the latest trends and technologies. From
                <span>regular content updates</span> to software patches and
                security scans, we take care of all aspects of maintaining your
                website so you can focus on running your business.
              </p>
            ) : activeIndex === 4 ? (
              <p>
                Our remote support service allows us to assist you with
                <span>technical issues</span> and <span>troubleshooting</span>
                without the need for an on-site visit. Using
                <span>secure remote access tools,</span> our experienced
                technicians can diagnose and resolve a wide range of IT problems
                quickly and efficiently. Whether you're experiencing
                <span>
                  software glitches, network issues, or hardware malfunctions,
                </span>
                we're here to provide prompt and reliable support from anywhere.
              </p>
            ) : activeIndex === 5 ? (
              <p>
                When your computer or laptop encounters problems, our skilled
                technicians are here to help. We offer
                <span>
                  comprehensive repair services for both hardware and software
                  issues,
                </span>
                including fixing hardware malfunctions, replacing damaged
                components, and resolving software errors. Our goal is to get
                your <span>devices back up and running smoothly</span> as
                quickly as possible,
                <span>minimising downtime and disruption</span> to your
                productivity.
              </p>
            ) : activeIndex === 6 ? (
              <p>
                Keeping your computer hardware up-to-date and well-maintained is
                essential for optimal performance and longevity. Our computer
                upgrades and servicing service helps ensure that your
                <span>devices are operating at their best.</span> Whether you
                need to upgrade your hardware for
                <span>better performance</span> or simply require
                <span>routine maintenance to prevent issues,</span> our
                technicians have the expertise to handle all your upgrade and
                servicing needs.
              </p>
            ) : (
              <p>
                Dealing with computer viruses and malware can be frustrating and
                potentially damaging to your system and data. Our virus removal
                service helps
                <span>identify and eliminate malicious software</span> from your
                computers, ensuring they're
                <span>safe and secure from cyber threats.</span> Our technicians
                use <span>advanced tools and techniques</span> to thoroughly
                scan and remove viruses,
                <span>restoring your system to its optimal state</span> and
                providing peace of mind.
              </p>
            )}

            <Button text={"Contact US"} link={"/contact-us"}></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesMain;
