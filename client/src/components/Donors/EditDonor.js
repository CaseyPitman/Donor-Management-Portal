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
import Button from "../Button";

class EditDonor extends React.Component {
  //MOVE TO FORM?
  state = { formData: {} };

  id = this.props.match.params.id;

  async componentDidMount() {
    //Fetch prexisting donor details
    await this.props.fetchDonorDetails(this.id);
  }

  onSubmitForm = updatedFormData => {
    this.props.editDonor(this.id, updatedFormData, this.props);
  };

  render() {
    return (
      <div>
        <UserProfile />
        <h1>Edit Donor</h1>
        <Link to='../../donor-list'>
          <Button
            btnColor='blue-button'
            btnSize='large-button'
            btnText='Cancel'
          />
        </Link>
        <Link to={`../../delete-donor/${this.props.match.params.id}`}>
          <Button
            btnColor='red-button'
            btnSize='large-button'
            btnText='Delete'
          />
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
