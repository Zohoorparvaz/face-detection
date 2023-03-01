import React from "react";

const ImageBox = ({ imageURL, faceBox }) => {

  return (
    <div className="imgContainer">
      <img id="face" className="imgBox" src={imageURL} alt="The URL file will be shown here" />
      <div className="bounding-box">
      </div>
      {/* style={{ top: faceBox.topSide, right: faceBox.rightSide, bottom: faceBox.bottomSide, left: faceBox.leftSide }} */}
    </div>
  )
}
export default ImageBox