import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { LoginContext } from "../context/LoginContext";
import { config } from "../config.js";

const PostComment = ({ breedId, getComments }) => {
  const { user, isLoggedIn } = useContext(LoginContext);
  const [postComment, setPostComment] = useState("");

  const history = useHistory();

  const addComment = e => {
    e.preventDefault();
    axios
      .post(
        `${config.serverURL}/api/comments`,
        JSON.stringify({
          chatName: user.name,
          comment: postComment,
          userId: user._id,
          breedId: breedId
        }),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(res => getComments())
      .catch(err => console.log(err.message));
    setPostComment("");
  };

  return (
    <form className="post-comment">
      <p className="post-comment__name">
        {isLoggedIn ? user.name : "login to add comment"}
      </p>
      <textarea
        value={postComment}
        onChange={e => setPostComment(e.target.value)}
        name="comment"
        id=""
        rows="2"
        placeholder="your comment"
      ></textarea>
      <button onClick={isLoggedIn ? addComment : () => history.push("/login")}>
        {isLoggedIn ? "Send" : "Go to login page"}
      </button>
    </form>
  );
};

export default PostComment;
