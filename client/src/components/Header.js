/* 
This component renders a header that will persist throughout app usage. 
The login button will dynamically render based on user login status.
 */

import React from "react";

//Components
import Button from "./Button";

// Assets

import logo from "../images/logo.svg";

// Styles
import "../css/header.css";

const Header = () => {
  const handleLogin = () => {
    console.log("login button has been clicked.");
  };

  return (
    <div className='header'>
      <div className='header-content'>
      
        <div className='logo-container'>
          <img src={logo} className='logo' />
        </div>

        <h1 className='header-title'>
          {/* <i className='fas fa-book-reader logo'></i> */}
          Krakoa Literacy Council
          <br></br>Donor Management Portal
        </h1>
        
        <Button
          btnColor='blue-button'
          btnSize='small-button'
          btnText='Sign In'
          onClick={handleLogin}
        />
      </div>
    </div>
  );
};

export default Header;
