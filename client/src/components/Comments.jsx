import React, { useState, useEffect } from "react";
import CommentMessage from "./CommentMessage";
import PostComment from "./PostComment";
import axios from "axios";
import { config } from "../config.js";

const Comments = ({ breedId }) => {
  const [showComments, toggleShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const toggleComments = () => {
    toggleShowComments(!showComments);
  };

  const getComments = () => {
    axios
      .get(`${config.serverURL}/api/comments`)
      .then(res => setComments(res.data))
      .catch(err => console.log(err.message));
  };

  useEffect(() => {
    getComments();
  }, []);
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
        <PostComment breedId={breedId} getComments={getComments} />

        {comments.map(
          comment =>
            breedId === comment.breedId && (
              <CommentMessage
                key={comment.id}
                chatName={comment.chatName}
                date={comment.createdAt}
                message={comment.comment}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Comments;
