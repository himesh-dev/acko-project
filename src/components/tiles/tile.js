import React from "react";

const Tile = props => {
  const { label, img } = props.item;
  return (
    <div
      className={`tile-container ${
        props.activeTile == label ? `selected` : ""
      }`}
      onClick={props.onClick}
    >
      <img className="tile-img" src={img} alt={label} />
      <p className="tile-label">{label}</p>
    </div>
  );
};

export default Tile;
