import React from "react";

const NavigationBar = ({ userSignedIn }) => {
  const signout = <p>Sign out</p>;
  const regsignin = <div style={{ display: "flex" }}><p>Sign in</p> <p>Register</p></div>

  return (
    <div className="navContainer">
      {userSignedIn ? signout : regsignin}
    </div>
  )
}
export default NavigationBar