import React, { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';

const Register = () => {
  const {
    errorMessage,
    sendRegistration,
    registration,
    setRegistration,
  } = useContext(LoginContext);

  const handleChange = e => {
    const { name, value } = e.target;
    setRegistration(prevState => ({
        ...prevState,
        [name]: value,
      }));
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <form className="register__form" action="">
        <input
          type="text"
          placeholder="name"
          name = "name"
          value={registration.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="email"
          value={registration.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="password"
          value={registration.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="repeat password"
          value={registration.password2}
          onChange={handleChange}
          required
        />
        <p className="error">{errorMessage}</p>
        <button className="register__button" onClick={sendRegistration}>
          Save
        </button>
      </form>
    </div>
  );
};

export default Register;
