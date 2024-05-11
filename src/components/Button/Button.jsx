import React from "react";
import "../Button/styles.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Button = ({ text, link }) => {
  return (
    <div>
      <Link to={link}>
        <button className="button-explore">{text}</button>
      </Link>
    </div>
  );
};

export default Button;
