import React from "react";
import "./CustomerReviews.css";
import TheNinjas from "../../../Assets/Home/CustomerReviews/TheNinjas.png";
import GemiTea from "../../../Assets/Home/CustomerReviews/GemiTea.png";
import TheNinjas_mob from "../../../Assets/Home/CustomerReviews/TheNinjas_mob.png";
import GemiTea_mob from "../../../Assets/Home/CustomerReviews/GemiTea_mob.png";
const CustomerReviews = () => {
  return (
    <div>
      <div className="hm-customer-reviews-mdiv">
        <div className="hm-customer-reviews-heading">
          <p>Hear It form Our Customers</p>
        </div>
        <div className="hm-customer-reviews-background">
          <div className="hm-customer-reviews-card">
            <a target="_blank" href="https://theninjas.co.nz/">
              <div className="hm-customer-reviews-title">
                <p>THE NINJAS</p>
              </div>
            </a>
            {/* <div className="hm-customer-reviews-stars">
              <img src={stars} alt="" />
             
            </div> */}

            <a target="_blank" className="hm-customer-reviews-desk" href="https://theninjas.co.nz/">
              <div className="hm-customer-reviews-img">
                <img src={TheNinjas} alt="" />
              </div>
            </a>

            <a target="_blank" className="hm-customer-reviews-mob" href="https://theninjas.co.nz/">
              <div className="hm-customer-reviews-img">
                <img src={TheNinjas_mob} alt="" />
              </div>
            </a>
          </div>
          <div className="hm-customer-reviews-card">
            <a target="_blank" href="tps://gemiteas.com/">
              <div className="hm-customer-reviews-title">
                <p>Gemi Tea</p>
              </div>
            </a>
            {/* <div className="hm-customer-reviews-stars">
              <img src={stars} alt="" />
              
            </div> */}

            <a target="_blank" className="hm-customer-reviews-desk" href="https://gemiteas.com/">
              <div className="hm-customer-reviews-img">
                <img src={GemiTea} alt="" />
              </div>
            </a>
            <a target="_blank" className="hm-customer-reviews-mob" href="https://gemiteas.com/">
              <div className="hm-customer-reviews-img">
                <img src={GemiTea_mob} alt="" />
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
