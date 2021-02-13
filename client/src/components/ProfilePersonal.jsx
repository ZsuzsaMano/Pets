import React, { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import defaultUser from "../img/default-user.png";
import * as BiIcons from "react-icons/bi";
import { IconContext } from "react-icons";

const ProfilePersonal = () => {
  const { user } = useContext(LoginContext);

  const [edit, setEdit] = useState(false);
  return;
  <div className="profile__personal">
    <div className="profile__img">
      <img
        src={user.img ? user.img : defaultUser}
        alt="user"
        className="profile__img"
      />
    </div>
    <div className="profile__info">
      <div className="edit-icon__wrap" onClick={() => console.log("edit info")}>
        <IconContext.Provider value={{ className: "edit-icon" }}>
          <BiIcons.BiEdit />
        </IconContext.Provider>
      </div>
      <h3 className="profile__name">{user.name}</h3>
      <p className="profile__email">{user.email}</p>
    </div>
  </div>;
};

export default ProfilePersonal;
