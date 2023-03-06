import React from "react";

const Register = ({ login }) => {
  return (
    <div className="regContainer">
      <h3>Register</h3>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" minLength="4" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" minLength="4" />
      <button onClick={() => login(false, "signin")}>Register</button>
    </div>
  )
}
export default Register