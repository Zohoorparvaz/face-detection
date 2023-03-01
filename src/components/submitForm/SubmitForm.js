import React from "react";

const SubmitForm = () => {
  return (
    <div className="submitFormContainer">
      <div className="row1">
        <p>Enter your image for face detect</p>
      </div>
      <div className="row2">
        <input type="text" placeholder="Copy the URL" />
        <button type="submit">Find Face</button>
      </div>
    </div>
  )
}
export default SubmitForm