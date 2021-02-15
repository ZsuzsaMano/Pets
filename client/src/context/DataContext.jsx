import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { config } from "../config.js";

const initContext = {
  loading: false,
  types: [],
  breeds: [],
  comments: [],
  postBreed: {
    type: "",
    size: "",
    img: "",
    personality: "",
    toConsider: ""
  }
};

export const DataContext = createContext(initContext);

const DataContextProvider = props => {
  const [loading, setLoading] = useState(initContext.loading);
  const [types, setTypes] = useState(initContext.types);
  const [breeds, setBreeds] = useState(initContext.breeds);
  const [postBreed, setPostBreed] = useState(initContext.postBreed);
  const [comments, setComments] = useState(initContext.comments);

  const getTypes = () => {
    setLoading(true);
    axios
      .get(`${config.serverURL}/api/types`)
      .then(res => setTypes(res.data))
      .catch(err => console.log(err));
    setLoading(false);
  };

  const getBreeds = () => {
    setLoading(true);
    axios
      .get(`${config.serverURL}/api/breeds`)
      .then(res => setBreeds(res.data))
      .catch(err => console.log(err));
    setLoading(false);
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
  // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    getBreeds();
  }, []);
  // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <DataContext.Provider
      value={{
        loading,
        setLoading,
        types,
        breeds,
        getBreeds,
        getTypes,
        postBreed,
        setPostBreed,
        comments,
        setComments,
        getComments
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
