/* This component renders the logout button.  */

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

//Components
import Button from "./Button";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
      btnColor='dark-button'
      btnSize='medium-button'
      btnText='Sign Out'
      onClick={() => logout({ returnTo: window.location.origin })}
    />
  );
};

export default LogoutButton;
