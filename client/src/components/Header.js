/* 
This component renders a header that will persist throughout app usage. 
The login button will dynamically render based on user login status.
 */

import React from "react";

//Assets
import { BookHalf } from "react-bootstrap-icons";

//Components
import Button from "./Button";

const Header = () => {
  const handleLogin = () => {
    console.log("login button has been clicked.");
  };

  return (
    <div className='header'>
      <h1>Header</h1>
      <BookHalf />
      <Button btnStyle='primary' btnSize={"sm"} onClick={handleLogin} />
    </div>
  );
};

export default Header;
