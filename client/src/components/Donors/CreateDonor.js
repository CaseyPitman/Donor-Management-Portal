/* 
This component renders a form for a user to create a new recored with 
information on a new donor.
*/

import React from "react";
import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";
// import { connect } from "react-redux";
import { createDonor } from "../../actions";
import dayjs from "dayjs";

import DonorForm from "./DonorForm";

import UserProfile from "../Auth/UserProfile";

const CreateDonor = () => {
  const onSubmitForm = formData => {
    //Dispatch the action from here.

    //Creates id for newly created record
    formData.id = `${formData.firstName}-${formData.lastName}`;

    console.log(formData);
    console.log(" create form submitted");
  };

  return (
    <div>
      <UserProfile />
      <h1>Create Donor</h1>
      <Link to='./donor-list'>
        <button>Cancel</button>
      </Link>
      <DonorForm onSubmitForm={onSubmitForm} action='create' />
    </div>
  );
};

export default CreateDonor;

//export default connect(null, { createStream })(StreamCreate);
