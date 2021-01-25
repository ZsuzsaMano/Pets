import React from 'react';

const BreedDetailItem = ({ name,
                          height,
                           type,
                         personality,
                       img,
                     toConsider, }) => {
  return (
    <div className="breedDetailItem">
      <h2> {name}</h2>
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
