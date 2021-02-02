import React from "react";
import ToggleFavorite from "../components/ToggleFavorite";

const BreedDetailItem = ({
  name,
  height,
  type,
  personality,
  img,
  toConsider
}) => {
  return (
    <div className="breedDetailItem">
      <header>
        <h2> {name}</h2>
        <ToggleFavorite />
      </header>
      <div className="breedDetailItem__img">
        <img src={img} alt={name} />
      </div>
      <ul>
        <li>Height: {height}</li>
        <li>Personality: {personality}</li>
        <li>To consider: {toConsider} </li>
      </ul>
    </div>
  );
};

export default BreedDetailItem;
