import React from 'react';
import { Link } from 'react-router-dom';

const PetTypeListItem = ({ id, type, img }) => {
  return (
    <div className="petTypeListItem">
    <Link to ={'breeds/' + type} className="petTypeListItem__link">
      <h2 className="petTypeListItem__title">{type}</h2>
      <p className="petTypeListItem__desc"></p>
      <div className="petTypeListItem__img-wrap">
  <img src={img} alt={type} className="petTypeListItem__img"/>
      </div>
    </Link>
    </div>
  );
};

export default PetTypeListItem;
