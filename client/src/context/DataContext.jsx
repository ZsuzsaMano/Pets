import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import dotenv from "dotenv";
import { config } from "../config.js";

dotenv.config();

const initContext = {
  loading: false,
  types: [],
  breeds: [],
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

  const getTypes = () => {
    setLoading(true);
    axios
      .get("https://petpersonalities.herokuapp.com/api/types")
      .then(res => setTypes(res.data))
      .catch(err => console.log(err));
    setLoading(false);
  };

  const getBreeds = () => {
    setLoading(true);
    axios
      .get("https://petpersonalities.herokuapp.com/api/breeds")
      .then(res => setBreeds(res.data))
      .catch(err => console.log(err));
    setLoading(false);
  };

  useEffect(() => {
    getTypes();
  }, []);

  useEffect(() => {
    getBreeds();
  }, []);

  return (
    <DataContext.Provider
      value={{ loading, types, breeds, getBreeds, postBreed, setPostBreed }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
