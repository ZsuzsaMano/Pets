import React from 'react';
import { Link } from 'react-router-dom';
import PetTypeListItem from '../components/PetTypeListItem';

const PetTypeList = () => {
  const petTypes = [{ id: 1, type: 'dogs', img: 'https://www.cheatsheet.com/wp-content/uploads/2017/10/corgi-dog-puppies.jpg' },
     { id: 2, type: 'cats', img: 'https://www.rover.com/blog/wp-content/uploads/2019/02/multiple_cats.jpg' },
     { id: 3, type: 'small animals', img: 'https://www.petlandwichita.com/wp-content/uploads/1970/01/small-animals-1.jpg' },
     { id: 4, type: 'reptiles', img: 'https://www.petlandwichita.com/wp-content/uploads/1970/01/small-animals-1.jpg' },
     { id: 5, type: 'birds', img: 'https://www.petlandwichita.com/wp-content/uploads/1970/01/small-animals-1.jpg' },
     { id: 6, type: 'insects', img: 'https://www.petlandwichita.com/wp-content/uploads/1970/01/small-animals-1.jpg' },
     { id: 7, type: 'fishes', img: 'https://www.petlandwichita.com/wp-content/uploads/1970/01/small-animals-1.jpg' },
      ];
  return (
    <Link className="petTypeList">
{  petTypes.map(petType => {
    return <PetTypeListItem
    key = {petType.id}
    type = {petType.type}
    img= {petType.img} />;}
  )}
</Link>
  );
};

export default PetTypeList;
