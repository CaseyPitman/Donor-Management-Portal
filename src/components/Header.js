/* 
This component renders a header that will persist throughout app usage. 
The login button will dynamically render based on user login status.
 */

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

//Components
import LoginButton from "./Auth/LoginButton";
import LogoutButton from "./Auth/LogoutButton";
import Navbar from "react-bootstrap/Navbar";
import Spinner from "react-bootstrap/Spinner";

// Assets
import UserProfile from "../components/Auth/UserProfile";

// Styles
import "../css/header.css";

const Header = () => {
  //Determine auth and loading status
  const { isAuthenticated, isLoading } = useAuth0();

  // Determine whether to show sign in or sign out button.
  const renderButton = () => {
    //If loading show spinner
    if (isLoading) {
      return (
        <Spinner animation='border' variant='light' role='login status'>
          <span className='sr-only'>Loading Login Status</span>
        </Spinner>
      );
    }
    //After load show button.
    return isAuthenticated ? <LogoutButton /> : <LoginButton />;
  };

  //User thumbnail image.
  const renderUserImage = () => {
    return isAuthenticated ? <UserProfile /> : <div></div>;
  };

  return (
    <Navbar className='navbar bg-primary navbar-dark header' expand='lg'>
      <div className='header-content'>
        <div className='header-branding'>
          <div className='logo-container'>
            <i className='fas fa-book-reader text-light logo'></i>
          </div>
          <h1 className='header-title text-light'>
            The Literacy Council
            <br></br>
            <small className='text-dark'>Donor Management Portal</small>
          </h1>
        </div>
        <div className='auth-container'>
          {renderUserImage()}
          {renderButton()}
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
