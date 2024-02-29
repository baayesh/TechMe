import React from "react";
import "./styles/Services.css";

function Services() {
  return (
    <div className="container-fluid d-flex justify-content-center p-3 background1 pb-4">
      <div class="row">
        <div class="row align-items-center">
          <div class="col-md-4 pe-5">
            <div class="card glass-effect pe-5 ps-5 mb-3">
              <div class="card-body">
                <h3 className="row d-flex justify-content-center">Profrssional Web Design </h3>
                <h3 className="row d-flex justify-content-center mb-3">
                  & Development
                </h3>
                <p class="card-text">Design and Development</p>
                <p class="card-text">Domain and Hosting</p>
                <p class="card-text">SEO Optimization</p>
                <p class="card-text">Analytics and SSL</p>
                <p class="card-text">Web Security</p>
                <a href="#" class="btn   btn-primary">
                  Button
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 pe-5 ">
            <div class="card glass-effect pe-5 ps-5 mb-3 ">
              <div class="card-body pt-4 pb-4">
                <h3 className="row d-flex justify-content-center">
                 Premium Web Design, 
                </h3>
                <h3 className="row d-flex justify-content-center mb-3">
                Development and Branding
                </h3>
                <p class="card-text">Starter Business+</p>
                <p class="card-text">UI UX Design</p>
                <p class="card-text">Mobile Responsive</p>
                <p class="card-text">Logo Design</p>
                <p class="card-text">Business Cards</p>
                <a href="#" class="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 pe-5">
            <div class="card glass-effect pe-5 ps-5">
              <div class="card-body">
              <h3 className="row d-flex justify-content-center">E-Commerce Web Design</h3>
                <h3 className="row d-flex justify-content-center mb-3">& Development</h3>    
                <p class="card-text">Premium Feature+</p>
                <p class="card-text">Server Configuration</p>
                <p class="card-text">Audits and Website CRO</p>
                <p class="card-text">Geo-Behavioral Targeting</p>
                <p class="card-text">Analytical Evaluation</p>
                <a href="#" class="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
