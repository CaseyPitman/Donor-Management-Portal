/* This component renders the modal to add a single donation to a 
donor's record without going through full edit process. */

import React from "react";

import { connect } from "react-redux";
import Modal from "../Modal";

//Actions
import { fetchDonorDetails } from "../../actions/index.js";

class AddDonation extends React.Component {
  id = this.props.match.params.id;

  componentDidMount() {
    this.props.fetchDonorDetails(this.id);
  }

  render() {
    return (
      <div>
        <Modal/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { donor: state.donors[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchDonorDetails })(AddDonation);
