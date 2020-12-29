/* 
This component renders a header that will persist throughout app usage. 
The login button will dynamically render based on user login status.
 */

import React from "react";

//Assets
import { BookHalf } from "react-bootstrap-icons";

//Components
import Button from "./Button";

// Styles
import "../css/header.css";

const Header = () => {
  const handleLogin = () => {
    console.log("login button has been clicked.");
  };

  return (
    <div className='header'>
      <div className='header-content'>
        <h1 className='header-title'>
          <i class='fas fa-book-reader logo'></i>
          Krakoa Literacy Council Donor Management Portal
        </h1>
        <Button
          btnStyle='primary'
          btnSize={"sm"}
          btnText='Sign In'
          onClick={handleLogin}
        />
      </div>
    </div>
  );
};

export default Header;
