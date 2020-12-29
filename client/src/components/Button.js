//This reusable component renders buttons throughout the app.

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
