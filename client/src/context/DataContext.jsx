import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const initContext = {
  loading: false,
  types: [],
  breeds: []
};

export const DataContext = createContext(initContext);

const DataContextProvider = props => {
  const [loading, setLoading] = useState(initContext.loading);
  const [types, setTypes] = useState(initContext.types);
  const [breeds, setBreeds] = useState(initContext.breeds);

  const getTypes = () => {
    axios
      .get("http://localhost:5000/api/types")
      .then(res => setTypes(res.data))
      .catch(err => console.log(err));
  };

  const getBreeds = () => {
    axios
      .get("http://localhost:5000/api/breeds")
      .then(res => setBreeds(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getTypes();
  }, []);

  useEffect(() => {
    getBreeds();
  }, []);

  return (
    <DataContext.Provider value={{ loading, types, breeds }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
