//This reusable component renders buttons throughout the app.

import React from "react";

const Button = ({btnStyle}) => {
  return (
    <div>
      <button type = 'button' className = {`btn btn-${btnStyle}`}>Button</button>
    </div>
  );
};

export default Button;
