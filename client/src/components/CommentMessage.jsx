import React from "react";
import { LoginContext } from "../context/LoginContext";

import moment from "moment";

const CommentMessage = ({ message, chatName, date }) => {
  const { user } = useContext(LoginContext);
  const dateFrom = moment(date).fromNow();
  return (
    <div className={chatName === user.name ? " myMessage" : "message"}>
      <p className="bubble__name">{chatName === user.name ? "Me" : chatName}</p>
      <p className="bubble__text">{message}</p>
      <p className="bubble__time">{dateFrom}</p>
    </div>
  );
};

export default CommentMessage;
