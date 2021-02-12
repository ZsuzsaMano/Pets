import React, { useState } from "react";
import * as ImIcons from "react-icons/im";
import { IconContext } from "react-icons";
import axios from "axios";
import { config } from "../config.js";

const DeleteBin = ({ commentId, getComments }) => {
  const [showDelete, setShowDelete] = useState(false);

  const deleteComment = () => {
    axios
      .delete(`${config.serverURL}/api/comments/${commentId}`)
      .then(() => getComments())
      .catch(err => console.log(err.message));
  };

  return (
    <div className="delete">
      {showDelete && (
        <p className="delete-confirm">
          {" "}
          <span className="askdelete">Delete comment?</span>
          <span className="answerdelete yes" onClick={deleteComment}>
            YES
          </span>
          <span
            className="answerdelete no"
            onClick={() => setShowDelete(false)}
          >
            NO
          </span>{" "}
        </p>
      )}
      {!showDelete && (
        <div className="bin-icon__wrap" onClick={() => setShowDelete(true)}>
          <IconContext.Provider value={{ color: "red", className: "bin-icon" }}>
            <ImIcons.ImBin />
          </IconContext.Provider>
        </div>
      )}
    </div>
  );
};

export default DeleteBin;
