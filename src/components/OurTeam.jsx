import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import "./styles/OurTeam.css";
import dummyImg from "../Assets/Team Members/dummy-img.png";

const OurTeam = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className=" pt-5">
            <h5 className="team">OUR TEAM</h5>
          </div>
        </div>
        <div className="row">
          <div className=" team-description-div">
            <h5 className="team-description">
              Crafting Digital Excellence. Where Innovation Meets Imagination,
              and Every Pixel Tells a Story. We Design, We Develop, We Transform
              Ideas into Digital Reality. Your Vision, Our Expertise — Building
              Tomorrow's Web Today
            </h5>
          </div>
        </div>
      </div>
      <div className="row ms-5 me-5 mt-5">
        <div className="col justify-content-center column-1">
          <div class="card card-style shadow mb-5">
            <img
              src={dummyImg}
              class="card-img-top image mx-auto mt-5"
              alt="..."
            />
            <div class="card-body">
              <div className="name-and-title pt-2 pb-2">
                <h5 class="card-title">Person 1</h5>
                <p class="card-text">UI/UX Designer</p>
              </div>
              <div className="ps-2 pe-2 pt-4">
                <p>
                  I am UI/UX Designer. I am UI/UX Designer. I am UI/UX Designer
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col justify-content-center column-1 ">
          <div class="card card-style shadow mb-5">
            <img
              src={dummyImg}
              class="card-img-top image mx-auto mt-5"
              alt="..."
            />
            <div class="card-body">
              <div className="name-and-title pt-2 pb-2">
                <h5 class="card-title">Person 1</h5>
                <p class="card-text">UI/UX Designer</p>
              </div>
              <div className="ps-2 pe-2 pt-4">
                <p>
                  I am UI/UX Designer. I am UI/UX Designer. I am UI/UX Designer
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col justify-content-center column-1 ">
          <div class="card card-style shadow mb-5">
            <img
              src={dummyImg}
              class="card-img-top image mx-auto mt-5"
              alt="..."
            />
            <div class="card-body">
              <div className="name-and-title pt-2 pb-2">
                <h5 class="card-title">Person 1</h5>
                <p class="card-text">UI/UX Designer</p>
              </div>
              <div className="ps-2 pe-2 pt-4">
                <p>
                  I am UI/UX Designer. I am UI/UX Designer. I am UI/UX Designer
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col justify-content-center column-1">
          <div class="card card-style shadow mb-5">
            <img
              src={dummyImg}
              class="card-img-top image mx-auto mt-5"
              alt="..."
            />
            <div class="card-body">
              <div className="name-and-title pt-2 pb-2">
                <h5 class="card-title">Person 1</h5>
                <p class="card-text">UI/UX Designer</p>
              </div>
              <div className="ps-2 pe-2 pt-4">
                <p>
                  I am UI/UX Designer. I am UI/UX Designer. I am UI/UX Designer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
