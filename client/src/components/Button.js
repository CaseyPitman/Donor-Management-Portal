// This reusable component renders buttons throughout the app.
// Button style and size are passed via props from parent.
// onClick function passed via props from parent.

import React from "react";

const Button = ({ btnStyle, btnSize, onClick }) => {
  return (
    <div>
      <button
        type='button'
        className={`btn btn-${btnStyle} btn-${btnSize}`}
        onClick={() => onClick()}>
        Button
      </button>
    </div>
  );
};

export default Button;
