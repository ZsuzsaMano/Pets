import React from 'react';

const PetTypeListItem = ({ id, type, img }) => {
  return (
    <div className="petTypeListItem">
      <h2 className="petTypeListItem__title"></h2>
      <p className="petTypeListItem__desc"></p>
      <img src="" alt="" className="petTypeListItem__img"/>
    </div>
  );
};

export default PetTypeListItem;
