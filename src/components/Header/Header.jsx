import React from "react";
import "./Header.css";


const Header = ({headerText,varient}) => {
// Declaring the vatiable to store class name
var backgroundimg = "default";

// check what is the input
if(varient==="contact-us"){
  backgroundimg = "header-contact-us"
}
if(varient==="services"){
  var backgroundimg = "header-services"
}




  return <div className={`header-mdiv ${backgroundimg}`}>
    {/* <img src={mig} alt="" /> */}
    <h2>
        {headerText}
    </h2>
  </div>;
};

export default Header;
