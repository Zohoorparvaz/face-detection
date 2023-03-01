import React from "react";

const Register = ({ login }) => {
  return (
    <div className="regContainer">
      <label for="username">Username</label>
      <input type="text" id="username" name="username" minlength="4" />
      <label for="password">Password</label>
      <input type="text" id="password" name="password" minlength="4" />
      <button type="submit" onClick={() => login(false, "signin")}>Register</button>
    </div>
  )
}
export default Register