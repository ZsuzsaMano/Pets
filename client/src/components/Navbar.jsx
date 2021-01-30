import React, { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import { NavLink } from 'react-router-dom';
import exit  from '../img/exit.png';

const Navbar = () => {
  const { user, setIsLoggedIn, isLoggedIn, registration } = useContext(LoginContext);
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
          <NavLink to={isLoggedIn ? '/profile' : '/login'}>{isLoggedIn ? user.name : 'Login'}</NavLink>
        </li>
        <li>
          <p>{isLoggedIn ? <img src={exit} alt="exit" onClick={()=>setIsLoggedIn(false)}/> : ''}</p>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
