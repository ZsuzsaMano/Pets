import React from "react";
import PropTypes from "prop-types";

const PostBreed = props => {
  return (
    <div className="postBreed">
      <form action="" className="postBreed__form">
        <h3 className="postBreed__title">
          <label htmlFor="name">name</label>
          <input name="name" type="text" placeholder="name" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </h3>
      </form>
    </div>
  );
};

export default PostBreed;
