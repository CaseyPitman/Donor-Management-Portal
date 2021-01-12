/* 
This component renders a form for a user to create a new recored with 
information on a new donor.
*/

import React from "react";
import { Link } from "react-router-dom";

// import { connect } from "react-redux";
// import { createDonor } from "../../actions";
import dayjs from "dayjs";

import DonorForm from "./DonorForm";

import UserProfile from "../Auth/UserProfile";

class CreateDonor extends React.Component {
  onSubmitForm = formData => {
    //Dispatch the action from here.


    //MAKE SURE TO PUT IN THE ID FIELD BEFORE SENDING IT OFF. 
    formData.id = 'insert id here'

    const thisDate = formData.donations[0].date;
   

    const testDate = dayjs(thisDate).format('MM/DD/YYYY')
    console.log(testDate);
    console.log(" create form submitted");
  };

  render() {
    return (
      <div>
        <UserProfile />
        <h1>Create Donor</h1>
        <Link to='./donor-list'>
          <button>Cancel</button>
        </Link>
        <DonorForm onSubmitForm={this.onSubmitForm} action='create' />
      </div>
    );
  }
}

export default CreateDonor;

//export default connect(null, { createStream })(StreamCreate);
