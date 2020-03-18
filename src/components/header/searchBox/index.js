import React from "react";
import "./searchBox.css";

const SearchBox = () => {
  return (
    <div className="search-box">
      <input className="input-box" placeholder="Enter your location" />
      <button className="search-button">SEARCH</button>
    </div>
  );
};

export default SearchBox;
