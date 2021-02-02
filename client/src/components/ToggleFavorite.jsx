import React, { useContext, useState, useEffect } from "react";
import { LoginContext } from "../context/LoginContext";

const ToggleFavorite = ({ id, name, image }) => {
  const { myFavorites, setMyFavorites, isLoggedin } = useContext(LoginContext);
  const [selected, toggleSelected] = useState(false);

  const toggleFavorite = () => {
    if (myFavorites.find(inv => inv.id === id)) {
      setMyFavorites(myFavorites.filter(item => item.id !== id));
      toggleSelected(false);
    } else {
      setMyFavorites(myFavorites => [
        ...myFavorites,
        { id: id, name: name, image: image }
      ]);
      toggleSelected(true);
    }
  };

  useEffect(() => {
    if (myFavorites.find(inv => inv.id === id)) {
      toggleSelected(true);
    } else {
      toggleSelected(false);
    }
  }, []);

  return (
    <div>
      <svg
        className={`toggleFavorite ${selected ? "toggleFavorite-active" : ""}`}
        onClick={toggleFavorite}
        xmlns="http://www.w3.org/2000/svg"
        id="svg1"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 475.82 442.01"
        version="1.0"
      >
        <g id="layer1" transform="translate(-134.07 -225.8)">
          <path
            id="path7"
            d="m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.75 135.93 170.08 228.56 303.3 87.57-132.4 228.56-172.85 228.56-303.3 0-66.24-53.76-120-120-120-48.05 0-89.4 28.37-108.56 69.18-19.16-40.81-60.52-69.18-108.56-69.18z"
          />
        </g>
      </svg>
    </div>
  );
};

export default ToggleFavorite;
