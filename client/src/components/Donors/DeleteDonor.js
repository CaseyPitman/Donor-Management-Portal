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
import Modal from "../Modal";

class DeleteDonor extends React.Component {
  id = this.props.match.params.id;

  componentDidMount() {
    this.props.fetchDonorDetails(this.id);
  }

  renderActions = () => {
    
  }

  renderContent = () => {}

  

  render() {
    return (
      <div>
        <h1>Delete Donor</h1>
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
