import React from 'react';
import { Link } from 'react-router-dom';

const PetTypeListItem = ({ id, type, img }) => {
  return (
    <Link to ={type} className="petTypeListItem">
      <h2 className="petTypeListItem__title">{type}</h2>
      <p className="petTypeListItem__desc"></p>
      <div className="petTypeListItem__img-wrap">
        <img src={img} alt={type} className="petTypeListItem__img"/>
      </div>
    </Link>
  );
};

export default PetTypeListItem;
