/* 
This component renders a header that will persist throughout app usage. 
The login button will dynamically render based on user login status.
 */

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

//Components
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

// Assets
import logo from "../images/logo.svg";

// Styles
import "../css/header.css";

const Header = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  // Determine whether to show sign in or sign out button.
  const renderButton = () => {
    //If loading show empty div
    if (isLoading) {
      return <div>Loading...</div>;
    }
    //After load show button.
    return isAuthenticated ? <LogoutButton /> : <LoginButton />;
  };

  return (
    <div className='header'>
      <div className='header-content'>
        <div className='header-branding'>
          <div className='logo-container'>
            <img src={logo} className='logo' alt='Child reading in wonder.' />
          </div>

          <h1 className='header-title'>
            Krakoa Literacy Council
            <br></br>
            <span className='header-title-secondary'>
              Donor Management Portal
            </span>
          </h1>
        </div>

        {renderButton()}
      </div>
    </div>
  );
};

export default Header;
