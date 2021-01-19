import React from 'react';

const PetTypeListItem = ({ id, type, img }) => {
  return (
    <div className="petTypeListItem">
      <h2 className="petTypeListItem__title">{type}</h2>
      <p className="petTypeListItem__desc"></p>
      <div className="petTypeListItem__img-wrap">
        <img src={img} alt={type} className="petTypeListItem__img"/>
      </div>
    </div>
  );
};

export default PetTypeListItem;
