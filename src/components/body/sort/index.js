import React from "react";
import "./sort.css";

import downArrow from '../../../assets/svgs/down-arrow.svg'

const Sort = () => {
  return (
    <div className="sort-tag">
      <p className="sort-label">
        Sort by:{" "}
        <mark style={{ color: "#5270e7", backgroundColor: "transparent" }}>
          Closest distance
        </mark>
        <img className="down-arrow" src={downArrow} alt="caret" />
      </p>
    </div>
  );
};

export default Sort;
