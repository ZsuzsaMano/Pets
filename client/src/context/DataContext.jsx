import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DataContext = createContext();

const DataContextProvider = (props) => {

  const  [loading, setLoading] = useState(false);
  const [types, setTypes] = useState([]);

  const getTypes = () => {
    axios.get('http://localhost:5000/api/types')
    .then(res => setTypes(res.data))
    .catch(err=>console.log(err));
  };

  useEffect(()=> {
    getTypes();
  }, []);

  return (
<DataContext.Provider value = {{ loading, types }}>
{props.children}
</DataContext.Provider>
  );
};

export default DataContextProvider;
