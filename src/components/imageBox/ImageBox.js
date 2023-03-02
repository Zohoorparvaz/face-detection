import React from "react";

const ImageBox = ({ imageURL, box }) => {
  return (
    <div className="imgContainer">
      <div className="center">
        <img id="face" className="imgBox" src={imageURL} alt="The URL file will be shown here" />
        <span className="bounding-box" style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}>
        </span>
      </div>
    </div>
  )
}
export default ImageBox


