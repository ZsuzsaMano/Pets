import React, { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const { isLoggedIn, registration } = useContext(LoginContext);
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/types">Types</NavLink>
        </li>
        <li>
          <NavLink to={isLoggedIn ? '/profile' : '/login'}>{isLoggedIn ? registration.name : 'Login'}</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
