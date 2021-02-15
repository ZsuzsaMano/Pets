import React from "react";
import ToggleFavorite from "../components/ToggleFavorite";
import Comments from "../components/Comments";
import { config } from "../config.js";

const BreedDetailItem = ({
  id,
  name,
  size,
  type,
  personality,
  img,
  toConsider
}) => {
  return (
    <div className="breedDetailItem">
      <header>
        <h2> {name}</h2>
        <ToggleFavorite
          id={id}
          name={name}
          image={img}
          size={size}
          personality={personality}
          toConsider={toConsider}
        />
      </header>
      <div className="breedDetailItem__img">
        <img
          src={img[0] === "h" ? img : `${config.serverURL}/${img}`}
          alt={name}
        />
      </div>
      <ul>
        <li>Size: {size}</li>
        <li>Personality: {personality}</li>
        <li>To consider: {toConsider} </li>
      </ul>
      <Comments breedId={id} breedName={name} />
    </div>
  );
};

export default BreedDetailItem;
