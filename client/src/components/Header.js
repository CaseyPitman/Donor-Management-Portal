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
      return <div> BUTTON W/ SPINNER</div>;
    }
    //After load show button.
    return isAuthenticated ? <LogoutButton /> : <LoginButton />;
  };

  return (
    <nav className='navbar navbar-dark bg-dark header' expand='sm'>
      <div className='header-content'>
        <div className='header-branding'>
          <div className='logo-container'>
            <img src={logo} className='logo' alt='Literacy Council Logo' />
          </div>

          <h1 className='header-title light'>
            The Literacy Council
            <br></br>
            <small className='text-muted'>Donor Management Portal</small>
          </h1>
        </div>
        <div className='auth-button-container'>{renderButton()}</div>
      </div>
    </nav>

    // <nav class='navbar navbar-dark bg-dark'>
    //   <Navbar.Brand>
    //     <img
    //       alt='Literacy Council Logo'
    //       src={logo}
    //       fluid='true'
    //       width='50'
    //       height='50'
    //       className='d-inline-block align-top'
    //     />
    //     <div className='d-inline-block'>
    //       <span className='header-title'>The Literacy Council</span>
    //       <br></br>
    //       <small class='text-muted'>Donor Management Portal</small>
    //     </div>
    //   </Navbar.Brand>
    //   {renderButton()}
    // </nav>
  );
};

{
  /* <h3>
  Heading
  <small class="text-muted">with muted text</small>
</h3> */
}

export default Header;
