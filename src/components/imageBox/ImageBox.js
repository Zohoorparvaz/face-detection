import React from "react";

const ImageBox = ({ imageURL }) => {
  return (
    <div className="imgContainer">
      <img className="imgBox" src={imageURL} alt="Your Image will be shown here" />
    </div>
  )
}
export default ImageBox