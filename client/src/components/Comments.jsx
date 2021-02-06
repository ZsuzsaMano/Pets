import React, { useState, useEffect, useContext } from "react";
import CommentMessage from "./CommentMessage";
import PostComment from "./PostComment";
import { DataContext } from "../context/DataContext";

const Comments = ({ breedId, breedName }) => {
  const { comments, setComments, getComments } = useContext(DataContext);
  const [showComments, toggleShowComments] = useState(false);
  const toggleComments = () => {
    toggleShowComments(!showComments);
  };

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
        <PostComment
          breedId={breedId}
          breedName={breedName}
          getComments={getComments}
        />

        {comments.map(
          comment =>
            breedId === comment.breedId && (
              <CommentMessage
                key={comment.id}
                chatName={comment.chatName}
                date={comment.createdAt}
                message={comment.comment}
                breedName={comment.breadName}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Comments;
