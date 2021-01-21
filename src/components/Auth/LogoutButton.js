/* This component renders the logout button.  */

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

//Components
import Button from "react-bootstrap/Button";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
      variant='secondary'
      size='sm'
      className='auth-button'
      onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </Button>
  );
};

export default LogoutButton;
