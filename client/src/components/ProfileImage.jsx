import React from "react";
import defaultUser from "../img/default-user.png";
import axios from "axios";
import { config } from "../config.js";
import Loader from "./Loader";

const ProfileImage = ({ user, setUser, loading, setLoading }) => {
  const uploadImage = async e => {
    setLoading(true);
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "petproject");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/zsuzsa/image/upload",
      {
        method: "POST",
        body: data
      }
    );

    const file = await res.json();

    setUser(prevState => ({
      ...prevState,
      img: file.secure_url
    }));

    axios
      .patch(
        `${config.serverURL}/api/users/${user._id}`,
        {
          name: user.name,
          email: user.email,
          img: file.secure_url
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(res => setLoading(false))
      .catch(error => console.log(error));
  };

  return (
    <div className="profile__img">
      {loading ? (
        <Loader />
      ) : (
        <div className="profile__img">
          <img
            src={user.img ? user.img : defaultUser}
            alt="user"
            className="profile__img"
          />
          <input
            type="file"
            name="file"
            placeholder="change image"
            onChange={uploadImage}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileImage;
