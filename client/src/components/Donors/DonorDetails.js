/* 
This component renders a detailed view of a donor, including contact information
and a record of past donations including amount and type. 
*/

import React from "react";

//Hooks
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";

//Components
import UserProfile from "../Auth/UserProfile";

const DonorDetails = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const history = useHistory();

  if (!isAuthenticated && !isLoading) {
    history.push("/");
  }
  return (
    <div>
      <UserProfile />
      <h1>DonorDetails</h1>
    </div>
  );
};

export default DonorDetails;
