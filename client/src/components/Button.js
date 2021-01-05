// This reusable component renders buttons throughout the app.
// Button style and size are passed via props from parent.
// onClick function passed via props from parent.

import React from "react";

//Styles
import "../css/button.css";

const Button = ({btnColor, btnSize, onClick, btnText }) => {

  const handleClick = () => {
    if (!onClick){
      return 
    } else {
      onClick()
    }
  }

  return (
    <button type='button' className={`button ${btnSize} ${btnColor}`} onClick={() => handleClick()}>
      {btnText}
    </button>
  );
};

export default Button;
