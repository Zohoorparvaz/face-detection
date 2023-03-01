import React from "react";

const Register = ({ login }) => {
  return (
    <div className="regContainer">
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" minLength="4" />
      <label htmlFor="password">Password</label>
      <input type="text" id="password" name="password" minLength="4" />
      <button type="submit" onClick={() => login(false, "signin")}>Register</button>
    </div>
  )
}
export default Register