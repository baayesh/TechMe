import React from "react";
import "./styles/OurServices.css";
import webDesign from "../../Assets/Web Developement/WebDesign.png";

const OurServices = () => {
  return (
    <div>
        <h1 className="font-h-exo-2">
            Our Services
        </h1>
        <div className="our-services ">
          <div class="card-container ">
            <div class="card">
              <div class="front-content">
                <p className="font-h-exo-2">Website Design</p>
              </div>
              <div class="content">
                <p class="heading ">Website Design</p>
                <p className="font-p-exo-2">
                  Our expertise lies in crafting dynamic and visually appealing
                  websites that align with the unique identities of our clients. We
                  focus on creating user-friendly and responsive platforms that
                  leave a lasting impression.
                </p>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <div class="front-content">
              
                <p className="font-h-exo-2">SEO Optimization</p>
              </div>
              <div class="content">
                <p class="heading">Website Design</p>
                <p className="font-p-exo-2">
                Understanding the importance of visibility in the digital landscape, we implement robust Search Engine Optimization (SEO) strategies. This ensures that our clients' websites rank higher in search engine results, driving increased traffic and enhancing online presence.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="our-services ">
          <div class="card-container ">
            <div class="card">
              <div class="front-content">
                <p className="font-h-exo-2">Email Domain</p>
              </div>
              <div class="content">
                <p class="heading">Email Domain</p>
                <p className="font-p-exo-2">
                As part of our services, we facilitate the establishment of professional and personalised email domains for our clients. This not only enhances their brand image but also contributes to effective communication with customers and stakeholders.
                </p>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <div class="front-content">
                <p className="font-h-exo-2">Maintenance and Security</p>
              </div>
              <div class="content">
                <p class="heading">Maintenance and Security</p>
                <p className="font-p-exo-2">
                Recognizing the dynamic nature of the online environment, we provide ongoing maintenance services to keep websites running smoothly. Our commitment to security ensures that client websites are protected against potential threats, guaranteeing a secure online experience for both businesses and their customers.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="our-services ">
            <div class="card-container-final">
                <div class="card">
                  <div class="front-content">
                    <p className="font-h-exo-2">Branding and Logo Creation</p>
                  </div>
                  <div class="content">
                    <p class="heading">Branding and Logo Creation</p>
                    <p className="font-p-exo-2-final">
                    We go beyond just building websites by offering comprehensive branding solutions. Our team is skilled in creating distinctive logos and establishing cohesive brand identities that resonate with the target audience, fostering brand recognition and loyalty.
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        
        
    
    
  );
};

export default OurServices;
