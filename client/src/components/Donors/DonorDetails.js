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

class DonorDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchDonorDetails(id);
  }

  render() {
    return (
      <div>
        <UserProfile />
        <h1>DonorDetails</h1>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { donor: state.donors[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchDonorDetails })(DonorDetails);
