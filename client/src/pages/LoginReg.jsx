import React from "react";
import Login from "../components/Login";
import Register from "../components/Register";

const LoginReg = props => {
  return (
    <div className="loginreg">
      <Login />
      <div className="verticalline"></div>
      <Register />
    </div>
  );
};

export default LoginReg;
