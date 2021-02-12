import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import DeleteBin from "./DeleteBin";

const CommentMessage = ({ message, chatName, date, breedName }) => {
  const { user } = useContext(LoginContext);

  return (
    <div className="message">
      <div className="message__head">
        {//on Profile page breedName is passed down, on Breed page chatName
        //depending on what page we are, displayslighly different content
        chatName ? (
          <p className="message__name">
            {chatName === user.name ? "Me" : chatName}
          </p>
        ) : (
          <p className="message__name">{breedName}</p>
        )}

        <p className="message__time">{date.slice(0, 10)}</p>
      </div>
      <div className="message__text">
        {breedName ? <DeleteBin /> : ""}
        <p>{message}</p>
      </div>
    </div>
  );
};

export default CommentMessage;
