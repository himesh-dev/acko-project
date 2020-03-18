import React from "react";
import NavBar from "./navBar";
import SearchBox from './searchBox'
import "./header.css";

const Header = props => {
  return (
    <div className="header-container">
      <NavBar />
      <div className="tag">
        <p className="heading-tag">
          Let us find your perfect <i style={{ color: "green" }}>fitness</i>{" "}
          classes!
        </p>
      </div>
      <SearchBox/>
    </div>
  );
};

export default Header;
