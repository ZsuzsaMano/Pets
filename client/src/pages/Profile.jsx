import React, { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import defaultUser from '../img/default-user.png';
const Profile = (props) => {
  const { user } = useContext(LoginContext);
  return (
    <div className="profile">
      <div className="profile__personal">
        <div className="profile__img">
          <img src={user.img ? user.img : defaultUser} alt="user" className="profile__img"/>
        </div>
        <div className="profile__info">
        <h3 className="profile_name">{user.name}</h3>
        <p className="profile__email">{user.email}</p>
      </div>
      </div>
    </div>
  );
};

export default Profile;
