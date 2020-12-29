// This reusable component renders buttons throughout the app.
// Button style and size are passed via props from parent.
// onClick function passed via props from parent.

import React from "react";

//Styles
import "../css/button.css";

const Button = ({btnColor, btnSize, onClick, btnText }) => {
  return (
    <button type='button' className={`button ${btnSize} ${btnColor}`} onClick={() => onClick()}>
      {btnText}
    </button>
  );
};

export default Button;
