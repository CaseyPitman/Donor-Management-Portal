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
import Button from "react-bootstrap/Button";

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
      <div className='edit-donor'>
        <div className='edit-donor-wrapper'>
          <div className='edit-donor-container'>
            <div className='edit-donor-heading'>
              <h1 className='edit-donor-title'>Edit Donor</h1>
              <div className='edit-donor-actions'>
                <Link to='../../donor-list'>
                  <Button variant='info'>Cancel</Button>
                </Link>
                {/* <Link
                  to={`../../delete-donor/${this.props.match.params.id}`}
                  className='edit-donor-delete-button'>
                  <Button variant='danger'>Delete</Button>
                </Link> */}
              </div>
            </div>
            <DonorForm
              onSubmitForm={this.onSubmitForm}
              action='edit'
              donorInfo={this.props.donor}
            />
          </div>
        </div>
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
