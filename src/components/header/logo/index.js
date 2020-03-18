import React from "react";
import logo from "../../../assets/svgs/health.svg";
import "./logo.css";

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="logo-img" src={logo} alt="logo" />
      <p className="logo-text">
        FIT
        <mark style={{ color: "#5270e7", backgroundColor: "transparent" }}>
          ME
        </mark>
      </p>
    </div>
  );
};

export default Logo;
