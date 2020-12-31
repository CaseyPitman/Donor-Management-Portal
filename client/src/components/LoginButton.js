// This component renders a login button linked to Auth0 universal login page.

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";



const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Sign In</button>;
};

export default LoginButton;
