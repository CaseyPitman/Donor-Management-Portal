/* 
This component renders a form that allows a user to edit the 
record for a selected donor. They may edit all fields, as well as add or 
delete new donations. 
 */

import React from "react";
import { connect } from "react-redux";

//Actions
import { fetchDonorDetails, editDonor } from "../../actions";

//Components
import DonorForm from "./DonorForm";
import Button from "react-bootstrap/Button";

class EditDonor extends React.Component {
  state = { formData: {} };
  id = this.props.match.params.id;

  //Fetch prexisting donor details on mount
  async componentDidMount() {
    window.scrollTo(0, 0);
    await this.props.fetchDonorDetails(this.id);
  }

  //Takes user back to from whence she came.
  goBack = () => {
    this.props.history.goBack();
  };

  //User submits form
  onSubmitForm = updatedFormData => {
    //Call the edit action
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
                <Button
                  variant='info'
                  onClick={() => this.props.history.goBack()}>
                  Cancel
                </Button>
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
