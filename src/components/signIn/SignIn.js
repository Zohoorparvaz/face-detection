import React from "react";

const SignIn = ({ login }) => {
  return (
    <div className="signInContainer">
      <label for="username">Username</label>
      <input type="text" id="username" name="username" minlength="4" />
      <label for="password">Password</label>
      <input type="text" id="password" name="password" minlength="4" />
      <button type="submit" onClick={() => login(true)}>Sign In</button>
    </div>
  )
}
export default SignIn