import React from "react";

const ImageBox = ({ imageURL }) => {
  return (
    <div className="imgContainer">
      <img className="imgBox" src={imageURL} alt="box" />
    </div>
  )
}
export default ImageBox