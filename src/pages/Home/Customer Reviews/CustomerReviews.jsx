import React from "react";
import "./CustomerReviews.css";
import TheNinjas from "../../../Assets/Home/CustomerReviews/TheNinjas.png";
import GemiTea from "../../../Assets/Home/CustomerReviews/GemiTea.png";
const CustomerReviews = () => {
  return (
    <div>
      <div className="hm-customer-reviews-mdiv">
        <div className="hm-customer-reviews-background">
          <div className="hm-customer-reviews-card">
            <a href="https://theninjas.co.nz/">
              <div className="hm-customer-reviews-title"><p>THE NINJAS</p></div>
            </a>
            {/* <div className="hm-customer-reviews-stars">
              <img src={stars} alt="" />
             
            </div> */}

            <a href="https://theninjas.co.nz/">
              <div className="hm-customer-reviews-img">
                <img src={TheNinjas} alt="" />
              </div>
            </a>
          </div>
          <div className="hm-customer-reviews-card">
            <a href="tps://gemiteas.com/">
              <div className="hm-customer-reviews-title"><p>Gemi Tea</p></div>
            </a>
            {/* <div className="hm-customer-reviews-stars">
              <img src={stars} alt="" />
              
            </div> */}

            <a href="https://gemiteas.com/">
              <div className="hm-customer-reviews-img">
                <img src={GemiTea} alt="" />
              </div>
            </a>
          </div>
          {/* <div className="hm-customer-reviews-card">
            <div className="hm-customer-reviews-title">Chamz.co.nz</div> */}
            {/* <div className="hm-customer-reviews-stars">
              <img src={stars} alt="" />
              
            </div> */}

            {/* <div className="hm-customer-reviews-img">
              <img src={TheNinjas} alt="" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
