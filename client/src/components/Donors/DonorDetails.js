/* 
This component renders a detailed view of a donor, including contact information
and a record of past donations including amount and type. 
*/

import React from "react";

import UserProfile from "../Auth/UserProfile";

const DonorDetails = () => {
  return (
    <div>
      <UserProfile />
      <h1>DonorDetails</h1>
    </div>
  );
};

export default DonorDetails;
