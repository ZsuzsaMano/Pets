import React from "react";
import ToggleFavorite from "../components/ToggleFavorite";
import Comments from "../components/Comments";

const BreedDetailItem = ({
  id,
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
        <ToggleFavorite id={id} name={name} image={img} />
      </header>
      <div className="breedDetailItem__img">
        <img src={img} alt={name} />
      </div>
      <ul>
        <li>Height: {height}</li>
        <li>Personality: {personality}</li>
        <li>To consider: {toConsider} </li>
      </ul>
      <Comments />
    </div>
  );
};

export default BreedDetailItem;
