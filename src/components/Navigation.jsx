import React from "react";
import "./styles/Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
 
      <div className="row  container-header  ">
        <ul
          className="flexnav d-flex justify-content-center align-items-center mt-3"
          data-breakpoint="768"
        >
          <Link className="link ps-2 pe-2 pt-1 pb-1 me-5" to="/">
            TechMe
          </Link>
          <Link className="link ps-2 pe-2 pt-1 pb-1 me-5" to="/web">
            Discover
          </Link>
          <Link className="link ps-2 pe-2 pt-1 pb-1" to="/Contacts">
            Contacts
          </Link>
        </ul>
      </div>
  
  );
}

export default Navigation;
