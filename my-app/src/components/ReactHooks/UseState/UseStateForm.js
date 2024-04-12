import React, { Component, useState } from "react";
import stylesheet from "./UseStateForm.css";

function Form2() {
  const [show, setShow] = useState(false);

  return (
    <div>
      {show ? (
        <div className="center">
          <div className="modal">
            <form action="/action_page.php">
              <label>
                <div>
                  <h1>Name:</h1>
                  <input className="formInputField" type="text" name="name" />
                </div>
                <div>
                  <h1>Email:</h1>
                  <input className="formInputField" type="email" name="name" />
                </div>
              </label>
              <div>
                <input
                  className="insideSaveButton"
                  type="submit"
                  value="CONFIRM"
                  onClick={() => setShow(false)}
                />
              </div>
            </form>
          </div>
        </div>
      ) : null}
      <button className="outsideSaveButton" onClick={() => setShow(!show)}>
        OPEN
      </button>
    </div>
  );
}

export default Form2;
