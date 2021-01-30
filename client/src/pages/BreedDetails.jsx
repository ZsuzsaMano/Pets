import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { DataContext } from "../context/DataContext";
import BreedDetailItem from "../components/BreedDetailItem";

const BreadDetails = () => {
  const { breeds } = useContext(DataContext);
  const { typeParam } = useParams();
  return (
    <div className="breeds">
      {breeds.map(breed => {
        return (
          breed.type === typeParam && (
            <BreedDetailItem
              key={breed._id}
              name={breed.name}
              type={breed.type}
              height={breed.height}
              img={breed.img}
              personality={breed.personality}
              toConsider={breed.toConsider}
            />
          )
        );
      })}
    </div>
  );
};

export default BreadDetails;
