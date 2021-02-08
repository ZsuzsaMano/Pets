import React, { createContext, useState } from "react";
import axios from "axios";
import { config } from "../config";

const initContext = {
  registration: { name: "", email: "", password: "" },
  login: { email: "", password: "" },
  user: "",
  errorMessage: "",
  isLoggedIn: false,
  myFavorites: [],
  sendRegistration: () => {
    throw new Error("sendRegistration() not implemented");
  }
};

export const LoginContext = createContext(initContext);

const LoginContextProvider = props => {
  const [registration, setRegistration] = useState(initContext.registration);
  const [login, setLogin] = useState(initContext.login);
  const [errorMessage, setErrorMessage] = useState(initContext.errorMessage);
  const [isLoggedIn, setIsLoggedIn] = useState(initContext.isLoggedIn);
  const [user, setUser] = useState(initContext.user);
  const [myFavorites, setMyFavorites] = useState(initContext.myFavorites);

  const sendRegistration = e => {
    e.preventDefault();
    axios
      .post(
        `${config.serverURL}/api/signup/`,

        JSON.stringify({
          name: registration.name,
          email: registration.email,
          password: registration.password,
          password_confirmation: registration.password
        }),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(res => setIsLoggedIn(true))
      .catch(err => console.log(err));
  };

  const sendLogin = e => {
    e.preventDefault();
    axios
      .post(
        `${config.serverURL}/api/signin/`,
        JSON.stringify({
          email: login.email,
          password: login.password
        }),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(res => {
        setUser(res.data.message);
        setIsLoggedIn(true);
        setMyFavorites(JSON.parse(res.data.message.myFavorites));
      })
      .catch(err => console.log(err.message));
  };

  return (
    <LoginContext.Provider
      value={{
        login,
        setLogin,
        sendLogin,
        user,
        registration,
        setRegistration,
        errorMessage,
        isLoggedIn,
        setIsLoggedIn,
        sendRegistration,
        myFavorites,
        setMyFavorites
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
