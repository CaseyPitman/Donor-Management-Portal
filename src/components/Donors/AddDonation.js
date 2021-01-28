/* This component renders the modal to add a single donation to a 
donor's record without going through full edit process. */

import React from "react";
import { connect } from "react-redux";
import Modal from "../Modal";

import { connect } from "react-redux";
//Actions
import fetchDonorDetails from "../../actions/index.js";

class AddDonation extends React.Component {
  render() {
    return (
      <div>
        <h1>Add Donation</h1>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { donor: state.donors[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchDonorDetails })(AddDonation);
