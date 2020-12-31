/* 
This component renders the main view of the app - a list of donors and their basic
contact information, along with action choices for each entry.
*/

import React from "react";

//Hooks
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";

//Components
import UserProfile from "../Auth/UserProfile";

const ListDonors = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const history = useHistory();

  if (!isAuthenticated && !isLoading) {
    history.push("/");
  }

  return (
    <div>
      <UserProfile />
      <h1>Donor List</h1>
    </div>
  );
};

export default ListDonors;
