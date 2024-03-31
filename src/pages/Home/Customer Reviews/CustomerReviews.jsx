import React from "react";
import "./CustomerReviews.css";
import stars from "../../../Assets/Home/CustomerReviews/Stars.png";
import chamz from "../../../Assets/Home/CustomerReviews/Chamz.png";
const CustomerReviews = () => {
  return (
    <div>
      <div className="hm-customer-reviews-mdiv">
        <div className="hm-customer-reviews-background">
          <div className="hm-customer-reviews-card">
            <div className="hm-customer-reviews-title">Chamz.co.nz</div>
            <div className="hm-customer-reviews-stars">
              <img src={stars} alt="" />
              <p>Read More</p>
            </div>

            <div className="hm-customer-reviews-img">
              <img src={chamz} alt="" />
            </div>
          </div>
          <div className="hm-customer-reviews-card">
            <div className="hm-customer-reviews-title">Chamz.co.nz</div>
            <div className="hm-customer-reviews-stars">
              <img src={stars} alt="" />
              <p>Read More</p>
            </div>

            <div className="hm-customer-reviews-img">
              <img src={chamz} alt="" />
            </div>
          </div>
          <div className="hm-customer-reviews-card">
            <div className="hm-customer-reviews-title">Chamz.co.nz</div>
            <div className="hm-customer-reviews-stars">
              <img src={stars} alt="" />
              <p>Read More</p>
            </div>

            <div className="hm-customer-reviews-img">
              <img src={chamz} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
