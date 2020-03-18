import React from "react";
import "./body.css";
import Sort from "./sort";
import Card from "./card";

const Body = () => {
  let cards = [];
  for (let i = 0; i < 6; i++) {
    cards.push(<Card />);
  }
  return (
    <div className="body-container">
      <Sort />
      <div className="cards-container">{cards}</div>
    </div>
  );
};

export default Body;
