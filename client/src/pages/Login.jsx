import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';

const Login = () => {
  const {
    errorMessage,
    login,
    setLogin,
    sendLogin,
  } = useContext(LoginContext);

  const handleChange = e => {
    const { name, value } = e.target;
    setLogin(prevState => ({
        ...prevState,
        [name]: value,
      }));
  };

  return (
    <div className="login">
      <h1>Please Login to continue </h1>
      <form action="" className="login__form">
        <input
          type="text"
          placeholder="email"
          name = "email"
          value = {login.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={login.password}
          onChange={handleChange}
          required
        />
        <p className="error">{errorMessage}</p>
        <button type="submit" className="submit" onClick={sendLogin}>
          Login
        </button>
      </form>
      <Link to="/register">
        <p>New here? Create an account. </p>
      </Link>
    </div>
  );
};

export default Login;
