import React from "react";
import PropTypes from "prop-types";

const PostComment = props => {
  return (
    <from className="post-comment">
      <textarea
        name="comment"
        id=""
        rows="2"
        placeholder="your comment"
      ></textarea>
      <button>Send</button>
    </from>
  );
};

export default PostComment;
