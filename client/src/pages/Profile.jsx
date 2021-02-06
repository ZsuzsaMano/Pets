import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import defaultUser from "../img/default-user.png";
import { DataContext } from "../context/DataContext";
import CommentMessage from "../components/CommentMessage";

const Profile = props => {
  const { user } = useContext(LoginContext);
  const { comments, setComments } = useContext(DataContext);

  return (
    <div className="profile">
      <div className="profile__personal">
        <div className="profile__img">
          <img
            src={user.img ? user.img : defaultUser}
            alt="user"
            className="profile__img"
          />
        </div>
        <div className="profile__info">
          <h3 className="profile_name">{user.name}</h3>
          <p className="profile__email">{user.email}</p>
        </div>
      </div>

      <div className="comments profile-comments">
        <h3>My Comments</h3>
        {comments.map(
          comment =>
            user._id === comment.userId && (
              <CommentMessage
                key={comment.id}
                date={comment.createdAt}
                message={comment.comment}
                breedName={comment.breedName}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Profile;
