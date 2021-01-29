/* This component renders the modal to add a single donation to a 
donor's record without going through full edit process. */

import React from "react";

import { connect } from "react-redux";
import Modal from "../Modal";

import redirect from "../../helper-funcs/redirect";

//Actions
import { fetchDonorDetails, editDonor } from "../../actions/index.js";

//Styles
// import "../../css/modal.css";

class AddDonation extends React.Component {
  id = this.props.match.params.id;

  componentDidMount() {
    this.props.fetchDonorDetails(this.id);
  }

  onDismiss() {
    console.log('you wish to dismiss');
  }

  render() {
    return (
      <div>
        <Modal />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { donor: state.donors[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchDonorDetails, editDonor })(AddDonation);
