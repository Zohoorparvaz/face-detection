import React, { useState } from "react";

const Register = ({ register }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const changeName = (e) => {
    setName(e.target.value)
  }

  const changeEmail = (e) => {
    setEmail(e.target.value)
  }

  const changePass = (e) => {
    setPass(e.target.value)
  }
  return (
    <div className="regContainer">
      <h3>Register</h3>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" onChange={changeName} />
      <label htmlFor="username">Email</label>
      <input type="text" id="username" name="username" minLength="4" onChange={changeEmail} />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" minLength="4" onChange={changePass} />
      <button onClick={() => register(name, email, pass)}>Register</button>
    </div>
  )
}
export default Register