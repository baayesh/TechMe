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
                <h3 className="row d-flex justify-content-center">Web </h3>
                <h3 className="row d-flex justify-content-center mb-3">Development</h3>    
                <p class="card-text">UI UX Design</p>
                <p class="card-text">Back-End Security</p>
                <p class="card-text">API Intergration</p>
                <p class="card-text">Database Management</p>
                <p class="card-text">Line 5 of Information</p>
                <a href="#" class="btn   btn-primary">
                  Button
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 pe-5">
            <div class="card glass-effect pe-5 ps-5 mb-3 ">
              <div class="card-body">
                <p class="card-text">Line 1 of Information</p>
                <p class="card-text">Line 2 of Information</p>
                <p class="card-text">Line 3 of Information</p>
                <p class="card-text">Line 4 of Information</p>
                <p class="card-text">Line 5 of Information</p>
                <a href="#" class="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 pe-5">
            <div class="card glass-effect pe-5 ps-5">
              <div class="card-body">
                <p class="card-text">Line 1 of Information</p>
                <p class="card-text">Line 2 of Information</p>
                <p class="card-text">Line 3 of Information</p>
                <p class="card-text">Line 4 of Information</p>
                <p class="card-text">Line 5 of Information</p>
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
