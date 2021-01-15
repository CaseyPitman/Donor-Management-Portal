/* 
This component renders a form that allows a user to edit the 
record for a selected donor. They may edit all fields, as well as add or 
delete new donations. 
 */

import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Actions
import { fetchDonorDetails, editDonor } from "../../actions";

//Components
import UserProfile from "../Auth/UserProfile";
import DonorForm from "./DonorForm";

class EditDonor extends React.Component {
  //GET DONOR DETAILS - PASS TO FORM?
  id = this.props.match.params.id;

  componentDidMount() {
    this.props.fetchDonorDetails(this.id);
  }

  onSubmitForm = formData => {
    //Dispatch the action from here.

    console.log(formData);
    console.log("edit form sumbitted.");
  };

  render() {
    return (
      <div>
        <UserProfile />
        <h1>Edit Donor</h1>
        <Link to='../../donor-list'>
          <button>Cancel</button>
        </Link>
        <DonorForm onSubmitForm={this.onSubmitForm} action='edit' donorInfo = {this.props.donor}/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { donor: state.donors[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchDonorDetails, editDonor })(
  EditDonor
);
