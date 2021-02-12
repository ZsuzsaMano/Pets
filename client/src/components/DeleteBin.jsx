import React, { useState } from "react";
import * as ImIcons from "react-icons/im";
import { IconContext } from "react-icons";

const DeleteBin = () => {
  const { showDelete, setShowDelete } = useState(true);

  return (
    <p className="bin-icon__wrap" onClick={() => setShowDelete(true)}>
      {showDelete ? <p className="askdelete">Delete comment</p> : ""}
      <IconContext.Provider value={{ color: "red", className: "bin-icon" }}>
        <ImIcons.ImBin />
      </IconContext.Provider>
    </p>
  );
};

export default DeleteBin;
