import React, { useState } from "react";
import CommentMessage from "./CommentMessage";

const Comments = props => {
  const [showComments, toggleShowComments] = useState(false);

  const toggleComments = () => {
    toggleShowComments(!showComments);
  };
  const messages = [
    {
      id: 1,
      chatName: "dev",
      date: "2021.01.30",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
      id: 2,
      chatName: "dev2",
      date: "2021.02.04",
      message: "Lorem ipsum dolor sit amet. Lorem ipsum dolor."
    },
    {
      id: 3,
      chatName: "dev3",
      date: "2021.02.05",
      message: "Lorem ipsum dolor sit amet."
    },
    {
      id: 4,
      chatName: "dev4",
      date: "2021.02.06",
      message:
        "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    }
  ];
  return (
    <div className="comments">
      <p className="open-comments" onClick={toggleComments}>
        {showComments ? "hide comments..." : "see comments..."}
      </p>
      <div
        className={
          showComments ? "messages messages-open" : "messages messages-closed"
        }
      >
        {messages.map(message => (
          <CommentMessage
            key={message.id}
            chatName={message.chatName}
            date={message.date}
            message={message.message}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
