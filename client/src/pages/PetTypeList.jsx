import React, { useContext, useEffect } from "react";
import PetTypeListItem from "../components/PetTypeListItem";
import { DataContext } from "../context/DataContext";

const PetTypeList = () => {
  const { types, getTypes } = useContext(DataContext);

  useEffect(() => {
    getTypes();
  }, []);

  return (
    <div className="petTypeList">
      {types &&
        types.map(petType => {
          return (
            <PetTypeListItem
              key={petType._id}
              type={petType.type}
              img={petType.img}
            />
          );
        })}
    </div>
  );
};

export default PetTypeList;
