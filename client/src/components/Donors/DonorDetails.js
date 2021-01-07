/* 
This class component renders a detailed view of a donor, including contact information
and a record of past donations including amount and type. 
*/

import React from "react";
import { connect } from "react-redux";

//Actions
import { fetchDonorDetails } from "../../actions/index.js";

//Components
import UserProfile from "../Auth/UserProfile";
import Button from "../Button";

class DonorDetails extends React.Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params;
  }

  componentDidMount() {
    // const { id } = this.props.match.params;
    this.props.fetchDonorDetails(this.id);
  }

  // USE INPUTS AND MAKE THEM READ ONLY SO THAT I CAN MATCH FORMS AND HAVE UNITY OF DESIGN.
  //See: https://www.w3schools.com/tags/att_input_readonly.asp

  render() {
    return (
      <div className='donor-details'>
        <UserProfile />
        <h1>DonorDetails</h1>
        <div className='donor-details-action-buttons'>
          <Button
            btnColor='blue-button'
            btnSize='medium-button'
            btnText='Back'
          />
          <Button
            btnColor='yellow-button'
            btnSize='medium-button'
            btnText='Edit'
          />
          <Button
            btnColor='red-button'
            btnSize='medium-button'
            btnText='Delete'
          />
        </div>
        <div className='donor-details-container'>
          <div className='donor-detail-name'>
            <h3>Name</h3>
            <p>{`${this.props.donor.firstName} ${this.props.donor.lastName}`}</p>
          </div>
          <div className='donor-detail-organization'></div>
          <h3>Organization</h3>
          <p>{`${this.props.donor.organization}`}</p>
          <div className='donor-detail-email'>
            <h3>Email</h3>
            <p>{`${this.props.donor.email}`}</p>
          </div>

          <div className='donor-detail-phone'>
            <h3>Phone</h3>
            <p>{`${this.props.donor.phone}`}</p>
          </div>

          <div className='donor-detail-address'>
            <h3>Address</h3>
            <p>{`${this.props.donor.address.street}`}</p>
            <p>{`${this.props.donor.address.city}`}</p>
            <p>{`${this.props.donor.address.state} ${this.props.donor.address.zip}`}</p>
          </div>

          <div className='donor-detail-donations'>
            
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { donor: state.donors[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchDonorDetails })(DonorDetails);
