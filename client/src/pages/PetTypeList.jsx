import React, { useContext } from 'react';
import PetTypeListItem from '../components/PetTypeListItem';
import { DataContext } from '../context/DataContext';

const PetTypeList = () => {
  const { types } = useContext(DataContext);

  return (
    <div className="petTypeList">
{  types.map(petType => {
    return <PetTypeListItem
   key = {petType._id}
   type = {petType.type}
   img= {petType.img} />;
  }
  )}
</div>
  );
};

export default PetTypeList;
