import React from "react";

const NavigationBar = ({ userSignedIn, login }) => {
  const signout = <p onClick={() => login(false)}>Sign out</p>;
  const regsignin = <div style={{ display: "flex" }}><p onClick={() => login(false, "signin")}>Sign in</p> <p onClick={() => login(false, "register")}>Register</p></div>

  return (
    <div className="navContainer">
      {userSignedIn ? signout : regsignin}
    </div>
  )
}
export default NavigationBar