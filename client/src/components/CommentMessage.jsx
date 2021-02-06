import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const CommentMessage = ({ message, chatName, date, breedName }) => {
  const { user } = useContext(LoginContext);

  return (
    <div className="message">
      <div className="message__head">
        {chatName ? (
          <p className="message__name">
            {chatName === user.name ? "Me" : chatName}
          </p>
        ) : (
          <p className="message__name">{breedName}</p>
        )}

        <p className="message__time">{date.slice(0, 10)}</p>
      </div>
      <p className="message__text">{message}</p>
    </div>
  );
};

export default CommentMessage;
