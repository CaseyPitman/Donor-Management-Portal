/* 
This component renders a form for a user to create a new recored with 
information on a new donor.
*/

import React from "react";
// import { connect } from "react-redux";
// import { createDonor } from "../../actions";
import DonorForm from "./DonorForm";

import UserProfile from "../Auth/UserProfile";

class CreateDonor extends React.Component {

  render() {
    return (
      <div>
        <UserProfile />
        <h1>Create Donor</h1>
        <DonorForm />
      </div>
    );
  }
}

export default (CreateDonor);

//export default connect(null, { createStream })(StreamCreate);
