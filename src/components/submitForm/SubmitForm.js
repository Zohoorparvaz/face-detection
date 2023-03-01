import React from "react";
import "./submitForm.css"

const SubmitForm = () => {
  return (
    <div class="submitFormContainer">
      <div class="row1">
        <p>Enter your image for face detect</p>
      </div>
      <div class="row2">
        <input type="text" placeholder="Copy the URL" />
        <button type="submit">Find Face</button>
      </div>
    </div>
  )
}
export default SubmitForm