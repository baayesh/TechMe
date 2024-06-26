import React, { useEffect, useRef } from "react";
import "./Services.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet-async";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ServicesMain = () => {
  const [activeIndex, setActiveIndex] = useState(null); //create use state hook to deal with paragraphs
  // useState for animation change
  const [animatioKey, setAnimationKey] = useState(0);

  // Generate random animation number for changing content
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 10);
    setAnimationKey(randomNumber);
  }, []);

  //Handle click to handle whe user click on the text )

  //Handle click to handle whe user click on the text
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const [isFixed, setIsFixed] = useState(true);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const stopPosition = 400;

      if (scrollY > stopPosition) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      {/* SEO  */}
      <Helmet>
        <title>Services</title>
        <meta
          name="description"
          content='
"Discover top-notch web development services tailored to elevate your digital presence. At TechMe, we specialize in crafting dynamic and responsive websites that captivate audiences and drive results. From custom designs to seamless functionality, trust us to bring your vision to life. Explore our comprehensive suite of services today."'
        />

        <meta
          name="description"
          content="TechMe is a web development company that provides web development services and solutions."
        />
        <meta
          name="keywords"
          content="website development Christchurch  
make my company website Christchurch, 
build a website for my company Christchurch,
create a logo for my business Christchurch,
website development New Zealand,
make my company website New Zealand,
build a website for my company New Zealand,
create a logo for my business New Zealand"
        />
      </Helmet>
      <div>
        <div className="ser-mdiv ser-mdiv-desktop">
          <div id="ser-left" className="ser-left">
            <div className="ser-web-mdiv">
              <h2>WEB DEVELOPMENT AND HOSTING</h2>
              <p onClick={() => handleClick(0)} className={activeIndex === 0 ? "ser-active-index" : ""}>Web Development</p>
              <p onClick={() => handleClick(1)}>Hosting</p>
              <p onClick={() => handleClick(2)}>Branding and Logo Creation</p>
              <p onClick={() => handleClick(3)}>Website Maintenance</p>
            </div>
            <div className="ser-it-mdiv">
              <h2>IT SERVICES</h2>
              <p onClick={() => handleClick(4)}>Remote Support</p>
              <p onClick={() => handleClick(5)}>Laptop Repair</p>
              <p onClick={() => handleClick(6)}>
                Computer Upgrade and Servicing
              </p>
              <p onClick={() => handleClick(7)}>Virus Removal</p>
            </div>
          </div>
          <div className="ser-right ser-animated-para">
            <div
              className={`ser-paragraphs ${
                isFixed ? "ser-paragraphs-fixed" : "ser-paragraphs-absolute"
              }`}
            >
              {activeIndex === null ? (
                <p>
                  Elevate your online presence with <strong>TechMe</strong>,
                  your premier destination for web and IT services. From expert
                  web development and reliable hosting to branding, maintenance,
                  remote support, and virus removal, we've got you covered. With
                  our skilled team and commitment to customer satisfaction,
                  experience seamless solutions tailored to your needs. Get
                  started today and unlock the full potential of your digital
                  presence with <strong>TechMe.</strong>
                </p>
              ) : activeIndex === 0 ? (
                <p className="ser-animated-para">
                  We specialise in creating custom websites that cater to your
                  unique requirements, whether you need a simple informational
                  site or a complex e-commerce platform. Our team collaborates
                  closely with you to <strong>design and develop</strong> a
                  <strong> professional, user-friendly website</strong> that
                  reflects your brand identity and{" "}
                  <strong>engages your audience </strong>
                  effectively.
                </p>
              ) : activeIndex === 1 ? (
                <p className="ser-animated-para">
                  In addition to website development, we provide
                  <strong> reliable hosting solutions </strong> to ensure your
                  website is <strong> accessible and secure </strong> on the
                  internet. With our hosting services, you can trust that your
                  website will have the
                  <strong> performance and stability </strong> it needs to
                  <strong> support your online presence </strong> and business
                  objectives.
                </p>
              ) : activeIndex === 2 ? (
                <p className="ser-animated-para">
                  Our branding and logo designing service helps businesses
                  establish a <strong> unique and memorable identity. </strong>{" "}
                  We collaborate with clients to create
                  <strong> distinctive logos </strong> and develop comprehensive
                  branding strategies that
                  <strong>
                    {" "}
                    reflect your values, vision, and target audience.{" "}
                  </strong>
                  Our goal is to help businesses stand out in a competitive
                  market and leave a lasting impression on your customers.
                </p>
              ) : activeIndex === 3 ? (
                <p>
                  Keeping your website updated and optimised is essential for
                  its performance and security. Our website maintenance service
                  ensures that your
                  <strong>
                    {" "}
                    site remains functional, secure, and up-to-date{" "}
                  </strong>
                  with the latest trends and technologies. From
                  <strong> regular content updates </strong> to software patches
                  and security scans, we take care of all aspects of maintaining
                  your website so you can focus on running your business.
                </p>
              ) : activeIndex === 4 ? (
                <p>
                  Our remote support service allows us to assist you with
                  <strong> technical issues </strong> and{" "}
                  <strong> troubleshooting </strong>
                  without the need for an on-site visit. Using
                  <strong> secure remote access tools, </strong> our experienced
                  technicians can diagnose and resolve a wide range of IT
                  problems quickly and efficiently. Whether you're experiencing{" "}
                  <strong>
                    software glitches, network issues, or hardware malfunctions,{" "}
                  </strong>
                  we're here to provide prompt and reliable support from
                  anywhere.
                </p>
              ) : activeIndex === 5 ? (
                <p>
                  When your computer or laptop encounters problems, our skilled
                  technicians are here to help. We offer
                  <strong>
                    {" "}
                    comprehensive repair services for both hardware and software
                    issues,
                  </strong>
                  including fixing hardware malfunctions, replacing damaged
                  components, and resolving software errors. Our goal is to get
                  your <strong>devices back up and running smoothly</strong> as
                  quickly as possible,
                  <strong>minimising downtime and disruption</strong> to your
                  productivity.
                </p>
              ) : activeIndex === 6 ? (
                <p>
                  Keeping your computer hardware up-to-date and well-maintained
                  is essential for optimal performance and longevity. Our
                  computer upgrades and servicing service helps ensure that your
                  <strong> devices are operating at their best.</strong> Whether
                  you need to upgrade your hardware for
                  <strong> better performance</strong> or simply require
                  <strong> routine maintenance to prevent issues,</strong> our
                  technicians have the expertise to handle all your upgrade and
                  servicing needs.
                </p>
              ) : (
                <p>
                  Dealing with computer viruses and malware can be frustrating
                  and potentially damaging to your system and data. Our virus
                  removal service helps
                  <strong>
                    {" "}
                    identify and eliminate malicious software
                  </strong>{" "}
                  from your computers, ensuring they're
                  <strong> safe and secure from cyber threats.</strong> Our
                  technicians use <strong>advanced tools and techniques</strong>{" "}
                  to thoroughly scan and remove viruses,
                  <strong>
                    restoring your system to its optimal state
                  </strong>{" "}
                  and providing peace of mind.
                </p>
              )}
              <Button text={"Contact US"} link={"/contact-us"}></Button>
            </div>
          </div>
        </div>
        <div className="ser-mdiv ser-mdiv-mobile">
          <div className="ser-left">
            <div className="ser-web-mdiv">
              <h2>WEB DEVELOPMENT AND HOSTING</h2>
              <Link to="/web-development">
                <p>Web Development</p>
              </Link>
              <Link to="/hosting">
                <p>Hosting</p>
              </Link>
              <Link to="/branding">
                <p>Branding and Logo Creation</p>
              </Link>
              <Link to="/web-maintain">
                <p>Website Maintenance</p>
              </Link>
            </div>
            <div className="ser-it-mdiv">
              <h2>IT SERVICES</h2>
              <Link to="/remote-support">
                <p>Remote Support</p>
              </Link>
              <Link to="/computer-and-laptop-repair">
                <p>Laptop Repair</p>
              </Link>
              <Link to="/computer-upgrade-and-servicing">
                <p>Computer Upgrade and Servicing</p>
              </Link>
              <Link to="/virus-removal">
                <p>Virus Removal</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesMain;
