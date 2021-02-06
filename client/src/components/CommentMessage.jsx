import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const CommentMessage = ({ message, chatName, date }) => {
  const { user } = useContext(LoginContext);

  return (
    <div className={chatName === user.name ? " myMessage" : "message"}>
      <div className="message__head">
        <p className="bubble__name">
          {chatName === user.name ? "Me" : chatName}
        </p>
        <p className="bubble__time">{date.slice(0, 10)}</p>
      </div>
      <p className="message__text">{message}</p>
    </div>
  );
};

export default CommentMessage;
