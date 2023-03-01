import React from "react";
import Tilt from 'react-parallax-tilt';
import logo from "./logo.png"

const Logo = () => {
  return (
    <Tilt className="tiltContainer">
      <img src={logo} alt="logo" />
    </Tilt>
  )
}
export default Logo



