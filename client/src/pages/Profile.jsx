import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import defaultUser from "../img/default-user.png";
import { DataContext } from "../context/DataContext";
import CommentMessage from "../components/CommentMessage";
import BreedDetailItem from "../components/BreedDetailItem";

const Profile = props => {
  const { user, myFavorites } = useContext(LoginContext);
  const { comments, getComments } = useContext(DataContext);

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
                key={comment._id}
                commentId={comment._id}
                getComments={getComments}
                date={comment.createdAt}
                message={comment.comment}
                breedName={comment.breedName}
              />
            )
        )}
      </div>
      <div className="breeds">
        {myFavorites.map(breed => {
          return (
            <BreedDetailItem
              id={breed.id}
              key={breed.id}
              name={breed.name}
              type={breed.type}
              size={breed.size}
              img={breed.image}
              personality={breed.personality}
              toConsider={breed.toConsider}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
