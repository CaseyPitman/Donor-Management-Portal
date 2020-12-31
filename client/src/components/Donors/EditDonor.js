/* 
This component renders a form that allows a user to edit the 
record for a selected donor. They may edit all fields, as well as add or 
delete new donations. 
 */

import React from "react";

//Hooks
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";

//Components
import UserProfile from "../Auth/UserProfile";

const EditDonor = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const history = useHistory();

  if (!isAuthenticated && !isLoading) {
    history.push("/");
  }
  return (
    <div>
      <UserProfile />
      <h1>Edit Donor</h1>
    </div>
  );
};

export default EditDonor;
