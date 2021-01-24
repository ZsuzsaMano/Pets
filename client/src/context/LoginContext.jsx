import React, { createContext, useState } from 'react';

const initContext = {
  registration: { name: '',
                  email: '',
                  password: '',
                },
  login: { email: '',
          password: '',
        },
  errorMessage: '',
  isLoggedIn: false,
  //  sendRegistration: ()=> throw new Error('clearXY() not implemented')
};

export const LoginContext = createContext(initContext);

const  LoginContextProvider = (props) => {
  const [registration, setRegistration] = useState(initContext.registration);
  const [login, setLogin] = useState(initContext.login);
  const [errorMessage, setErrorMessage] = useState(initContext.errorMessage);
  const [isLoggedIn, setIsLoggedIn] = useState(initContext.isLoggedIn);
  const sendRegistration = () => {
    console.log('reg sent');
  };

  const sendLogin = () => console.log('login sent');
  return (
    <LoginContext.Provider value={{ login,
                                    setLogin,
                                    sendLogin,
                                    registration,
                                    setRegistration,
                                    errorMessage,
                                    isLoggedIn,
                                    sendRegistration, }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
