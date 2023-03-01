import React from "react";

const SignIn = ({ login }) => {
  return (
    <div className="signInContainer">
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" minLength="4" />
      <label htmlFor="password">Password</label>
      <input type="text" id="password" name="password" minLength="4" />
      <button onClick={() => login(true)}>Sign In</button>
    </div>
  )
}
export default SignIn