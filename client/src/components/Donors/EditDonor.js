/* 
This component renders a form that allows a user to edit the 
record for a selected donor. They may edit all fields, as well as add or 
delete new donations. 
 */

import React from "react";
import { Link } from "react-router-dom";
//Hooks
// import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";

//Components
import UserProfile from "../Auth/UserProfile";
import DonorForm from "./DonorForm";

const EditDonor = () => {
  const history = useHistory();

  const onSubmitForm = formData => {
    //Dispatch the action from here.

    console.log(formData);
    console.log("edit form sumbitted.");
  };

  return (
    <div>
      <UserProfile />
      <h1>Edit Donor</h1>
      <Link to='../../donor-list'>
        <button>Cancel</button>
      </Link>
      <DonorForm onSubmitForm={onSubmitForm} action='edit' />
    </div>
  );
};

export default EditDonor;
