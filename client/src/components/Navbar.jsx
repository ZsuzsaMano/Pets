import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { NavLink } from "react-router-dom";
import exit from "../img/exit.png";

const Navbar = () => {
  const { user, setIsLoggedIn, isLoggedIn } = useContext(LoginContext);
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/types" activeClassName="active">
            Pets
          </NavLink>
        </li>
        <li>
          <NavLink to="/addPet" activeClassName="active">
            Add Pet
          </NavLink>
        </li>
        <li>
          <NavLink
            to={isLoggedIn ? "/profile" : "/login"}
            activeClassName="active"
          >
            {isLoggedIn ? user.name : "Login"}
          </NavLink>
        </li>
        <li>
          <p>
            {isLoggedIn ? (
              <img src={exit} alt="exit" onClick={() => setIsLoggedIn(false)} />
            ) : (
              ""
            )}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
