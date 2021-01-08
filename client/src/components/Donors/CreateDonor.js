/* 
This component renders a form for a user to create a new recored with 
information on a new donor.
*/

import React from "react";



import UserProfile from "../Auth/UserProfile";
import DonorForm from './DonorForm'

const CreateDonor = () => {


  return (
    <div>
      <UserProfile />
      <h1>Create Donor</h1>
      <DonorForm/>
    </div>
  );
};

export default CreateDonor;

