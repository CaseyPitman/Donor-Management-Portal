/* 
This component renders a form that allows a user to edit the 
record for a selected donor. They may edit all fields, as well as add or 
delete new donations. 
 */

import React from "react";

import UserProfile from "../Auth/UserProfile";

const EditDonor = () => {
  return (
    <div>
      <UserProfile />
      <h1>Edit Donor</h1>
    </div>
  );
};

export default EditDonor;
