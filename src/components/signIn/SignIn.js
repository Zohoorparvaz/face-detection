import React, { useState } from "react";

const SignIn = ({ login }) => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const changeEmail = (e) => {
    setEmail(e.target.value)
  }

  const changePass = (e) => {
    setPass(e.target.value)
  }

  return (
    <div className="signInContainer">
      <h3>Sign In</h3>
      <label htmlFor="username">Email</label>
      <input type="text" id="username" name="username" minLength="4" onChange={changeEmail} />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" minLength="4" onChange={changePass} />
      <button onClick={() => login(email, pass)}>Sign In</button>
    </div>
  )
}
export default SignIn