/* 
This component renders a modal that allows the user to 
delete a record of a donor. 
*/

import React from "react";

//Hooks
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";

const DeleteDonor = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const history = useHistory();

  if (!isAuthenticated && !isLoading) {
    history.push("/");
  }
  return (
    <div>
      <h1>Delete Donor</h1>
    </div>
  );
};

export default DeleteDonor;


