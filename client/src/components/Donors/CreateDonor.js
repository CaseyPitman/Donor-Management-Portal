/* 
This component renders a form for a user to create a new recored with 
information on a new donor.
*/

import React from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";

//3rd Party modules
import dayjs from "dayjs";

//Actions
import { createDonor } from "../../actions";

//Components
import DonorForm from "./DonorForm";
import UserProfile from "../Auth/UserProfile";

const CreateDonor = (props) => {
 
  const dispatch = useDispatch();

  //Dispatch CREATE_DONOR action and then redirect to DonorList
  const onSubmitForm = formData => {
    //Creates id for newly created record
    formData.id = `${formData.firstName}-${formData.lastName}`;
    dispatch(createDonor(formData, props));

  
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

// export default CreateDonor;

export default connect(null, { createDonor })(CreateDonor);
