// This component renders a login button linked to Auth0 universal login page.

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

//Components
import Button from "react-bootstrap/Button";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      variant='primary'
      size='lg'
      onClick={() => loginWithRedirect()}
      className='auth-button'>
      Log In
    </Button>
  );
};

export default LoginButton;
