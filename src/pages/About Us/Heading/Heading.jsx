import React from "react";
import "./Heading.css";
import { Helmet } from "react-helmet-async";

const Heading = () => {
  const introHeading = "SIMPLE SOLUTIONS FOR DIFFICULT PROBLEMS";

  return (
    <>
    {/* SEO */}
      <Helmet>
        <title>About US</title>
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
      {/* SEO End */}
      <div className="about-heading-mdiv">
        <div className="about-intro">
          <h3>Welcome To TechME</h3>
          <div className="about-line"></div>

          <p>
            where we're dedicated to Creating Better IT Solutions. With a
            passion for innovation and a knack for simplifying complex
            challenges, we specialise in crafting intuitive digital experiences
            that elevate businesses to new heights. At the heart of our ethos
            lies a genuine love for building simple solutions to intricate
            problems. Our team of skilled professionals thrives on transforming
            ideas into reality, blending creativity with cutting-edge technology
            to deliver exceptional results. Whether it's designing sleek
            websites or developing robust applications, we're committed to
            providing tailored solutions that exceed expectations. Let us help
            you navigate the digital landscape with confidence and clarity.
          </p>
        </div>
        <div className="about-info">
          <div className="about-info-row">
            <div className="about-info-col about-info-border-1">
              <h5>4+</h5>
              <p>Years of Experience</p>
            </div>
            <div className="about-info-col about-info-border-2">
              <h5>10+</h5>
              <p>Completed Projects</p>
            </div>
          </div>
          <div className="about-info-row">
            <div className="about-info-col about-info-border-3">
              <h5>20</h5>
              <p>Employees</p>
            </div>
            <div className="about-info-col about-info-border-4">
              <h5>50</h5>
              <p>Trusted Clients</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;
