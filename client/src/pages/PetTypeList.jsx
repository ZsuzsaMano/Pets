import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PetTypeListItem from '../components/PetTypeListItem';
import { DataContext } from '../context/DataContext';

const PetTypeList = () => {
  const { types } = useContext(DataContext);

  return (
    <Link className="petTypeList">
{  types.map(petType => {
    return <PetTypeListItem
    key = {petType._id}
    type = {petType.type}
    img= {petType.img} />;}
  )}
</Link>
  );
};

export default PetTypeList;
