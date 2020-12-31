/* 
This component renders a form for a user to create a new recored with 
information on a new donor.
*/

import React from "react";

//Hooks
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";

import UserProfile from "../Auth/UserProfile";

const CreateDonor = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const history = useHistory();

  if (!isAuthenticated && !isLoading) {
    history.push("/");
  }
  return (
    <div>
      <UserProfile />
      <h1>Create Donor</h1>
    </div>
  );
};

export default CreateDonor;

