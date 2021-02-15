import React, { useContext, useEffect } from "react";
import PetTypeListItem from "../components/PetTypeListItem";
import { DataContext } from "../context/DataContext";
import Loader from "../components/Loader";

const PetTypeList = () => {
  const { types, getTypes, loading } = useContext(DataContext);

  useEffect(() => {
    getTypes();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="petTypeList">
      {loading ? (
        <Loader />
      ) : (
        types &&
        types.map(petType => {
          return (
            <PetTypeListItem
              key={petType._id}
              type={petType.type}
              img={petType.img}
            />
          );
        })
      )}
    </div>
  );
};

export default PetTypeList;
