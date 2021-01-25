/* 
This component renders a modal that allows the user to 
delete a record of a donor. 
*/

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//Actions
import { fetchDonorDetails, deleteDonor } from "../../actions";

//Components
import Button from "react-bootstrap/Button";

//Styles
import "../../css/deleteDonor.css";

class DeleteDonor extends React.Component {
  id = this.props.match.params.id;

  componentDidMount() {
    this.props.fetchDonorDetails(this.id);
  }

  renderContent = () => {
    if (!this.props.donor) {
      return <h4 className = 'delete-donor-text'>"Are you sure you want to delete this donor?"</h4>;
    }
    return (
      <h4 className = 'delete-donor-text'>{`Are you sure you want to delete donor ${this.props.donor.firstName} ${this.props.donor.lastName}?`}</h4>
    );
  };

  //onclick for confirm delete
  onConfirmDelete = () => {
    this.props.deleteDonor(this.id, this.props);
  };

  renderActions = () => {
    return (
      <div className='delete-button-container'>
        <Link to='/donor-list' className='cancel-delete'>
          <Button variant='info'>Cancel</Button>
        </Link>
        <Button variant='danger' onClick={this.onConfirmDelete}>Delete</Button>
      </div>
    );
  };

  render() {
    return (
      <div className='delete-donor'>
        <div className='delete-donor-wrapper'>
          <div className='delete-donor-container'>
            {this.renderContent()}
            {this.renderActions()}
          </div>
        </div>
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
