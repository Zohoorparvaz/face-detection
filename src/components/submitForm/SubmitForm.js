import React from "react";

const SubmitForm = ({ onInputChange, onSubmit }) => {
  return (
    <div className="submitFormContainer">
      <div className="row1">
        <p>Enter your image for face detect</p>
      </div>
      <div className="row2">
        <input onChange={onInputChange} type="text" placeholder="Copy the URL" />
        <button onClick={onSubmit}>Find Face</button>
      </div>
    </div>
  )
}
export default SubmitForm