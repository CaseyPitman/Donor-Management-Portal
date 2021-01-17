/* 
This component renders a modal that allows the user to 
delete a record of a donor. 
*/

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//Actions
import { fetchDonorDetails, deleteDonor } from "../../actions";

//Helper funcs
import redirectToList from "../../helper-funcs/redirect";

//Components
// import Modal from "../Modal";

class DeleteDonor extends React.Component {
  id = this.props.match.params.id;

  componentDidMount() {
    this.props.fetchDonorDetails(this.id);
  }

  renderContent = () => {
    if (!this.props.donor) {
      return "Are you sure you want to delete this donor?";
    }
    return `Are you sure you want to delete donor: ${this.props.donor.firstName} ${this.props.donor.lastName}`;
  };

  //onclick for confirm delete
  onConfirmDelete = () => {
    this.props.deleteDonor(this.id, this.props);
  };

  renderActions = () => {
    return (
      <div>
        <button className='confirm-delete' onClick={this.onConfirmDelete}>
          Delete
        </button>
        <Link to='/donor-list' className='cancel-delete'>
          <button className='cancel-delete-button'>Cancel</button>
        </Link>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.renderContent()}
        {this.renderActions()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { donor: state.donors[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchDonorDetails, deleteDonor })(
  DeleteDonor
);
