import React, { useState } from "react";
import "./Tiles.css";
import yoga from "../../assets/svgs/lotus.svg";
import fitness from "../../assets/svgs/sport.svg";
import dance from "../../assets/svgs/audio-system.svg";
import pilates from "../../assets/svgs/weightlifting.svg";

import Tile from "./tile";
const tilesItems = [
  { label: "Yoga", img: yoga },
  { label: "Fitness", img: fitness },
  { label: "Dance", img: dance },
  { label: "Pilates", img: pilates }
];

const Tiles = () => {
  const [activeTile, setActiveTile] = useState("Fitness");
  return (
    <div className="tiles-container">
      <div className="tiles-box">
        {tilesItems.map(item => {
          return (
            <Tile
              key={item.label}
              item={item}
              activeTile={activeTile}
              onClick={() => setActiveTile(item.label)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tiles;
