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

//Helper
import redirectToList from "../../helper-funcs/redirect";

//Components
import UserProfile from "../Auth/UserProfile";
import DonorForm from "./DonorForm";

class EditDonor extends React.Component {
  //MOVE TO FORM?
  state = { formData: {} };

  id = this.props.match.params.id;

  // WAIT...SHOULD I DO ALL OF THIS IN THE ACTUAL FORM? (ALL EXCEPT FETCH DATA) - I THINK SO. 
  async componentDidMount() {
    //Fetch prexisting donor details
    await this.props.fetchDonorDetails(this.id);
    console.log(this.props.donor);
    //Set the prexisting donor details in state as formData
    this.setState({ formData: this.props.donor });
    console.log(this.state);
  }



  onSubmitForm = formData => {
    //Dispatch the action from here.
    console.log(formData);
    formData.id = `${formData.firstName}-${formData.lastName}`;
    this.props.editDonor(this.id, this.formData);
    redirectToList(this.props);
  };

  render() {
    return (
      <div>
        <UserProfile />
        <h1>Edit Donor</h1>
        <Link to='../../donor-list'>
          <button>Cancel</button>
        </Link>
        <DonorForm
          onSubmitForm={this.onSubmitForm}
          action='edit'
          donorInfo={this.props.donor}
        />
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
