import React, { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import defaultUser from "../img/default-user.png";
import * as BiIcons from "react-icons/bi";
import { IconContext } from "react-icons";

const ProfilePersonal = () => {
  const { user, setUser } = useContext(LoginContext);

  const [edit, setEdit] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const sendUserInfo = e => {
    e.preventDefault();
    setEdit(false);
    console.log("userinfo sent");
  };

  return (
    <div className="profile__personal">
      <div className="profile__img">
        <img
          src={user.img ? user.img : defaultUser}
          alt="user"
          className="profile__img"
        />
      </div>

      {edit ? (
        <div className="profile__info">
          {" "}
          <form action="" className=" profile__edit">
            <input
              type="text"
              name="name"
              placeholder="name"
              value={user.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              value={user.email}
              onChange={handleChange}
            />
            <button type="submit" onClick={sendUserInfo}>
              Save
            </button>
          </form>
        </div>
      ) : (
        <div className="profile__info">
          <div className="edit-icon__wrap" onClick={() => setEdit(true)}>
            <IconContext.Provider value={{ className: "edit-icon" }}>
              <BiIcons.BiEdit />
            </IconContext.Provider>
          </div>
          <h3 className="profile__name">{user.name}</h3>
          <p className="profile__email">{user.email}</p>
        </div>
      )}
    </div>
  );
};

export default ProfilePersonal;
