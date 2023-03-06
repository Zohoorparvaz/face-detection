import React from "react";

const NavigationBar = ({ logout, userSignedIn, login, user, setIntent }) => {
  const signout = <p onClick={() => logout()}>Sign out</p>;
  const regsignin = <div style={{ display: "flex" }}><p onClick={() => setIntent("signin")}>Sign in</p> <p onClick={() => setIntent("register")}>Register</p></div>

  return (
    <div className="navContainer">
      {userSignedIn ? signout : regsignin}
    </div>
  )
}
export default NavigationBar