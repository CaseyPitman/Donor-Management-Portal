/* 
This class component renders a detailed view of a donor, including contact information
and a record of past donations including amount and type. 
*/

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//Actions
import { fetchDonorDetails } from "../../actions/index.js";

//Components
import Button from "react-bootstrap/Button";

//Styles
import "../../css/donor-details.css";

//Helper functions
import formatAmount from "../../helper-funcs/formatAmount";
import formatDate from "../../helper-funcs/formatDate";

class DonorDetails extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.fetchDonorDetails(this.props.match.params.id);
  }

  //Only show notes field if notes exist
  renderNotes = () => {
    if (this.props.donor.notes !== "none") {
      return (
        <div className='donor-detail-notes'>
          <h2 className='donor-details-section-heading'>Notes</h2>
          <p>{`${this.props.donor.notes}`}</p>
        </div>
      );
    } else {
      return <div></div>
    }
  };

  //Determines total amount a donor has given.
  renderTotalDonations = () => {
    const donations = this.props.donor.donations.map(
      donation => donation.amount
    );
    return formatAmount(donations.reduce((a, b) => a + b));
  };

  donationHistory = () => {
    return this.props.donor.donations.map((donation, idx) => {
      //Don't forget to format donation amounts.
      return (
        <div key={idx}>
          <p>{formatDate(donation.date)}</p>
          <p>{formatAmount(donation.amount)}</p>
          <p>{donation.type}</p>
        </div>
      );
    });
  };

  render() {
    //Avoids error on refreshing page.
    if (!this.props.donor) {
      return <div></div>;
    }

    return (
      <div className='donor-details'>
        <div className='donor-details-wrapper'>
          <div className='donor-details-container'>
            <div className='donor-details-heading'>
              <h1 className='donor-details-title'>Donor Details</h1>
              <div className='donor-details-action-buttons'>
                <Link to='/donor-list' className='donor-details-back-btn'>
                  <Button variant='info'>Back</Button>
                </Link>

                <Link
                  to={`/edit-donor/${this.props.match.params.id}`}
                  className='donor-details-edit-btn'>
                  <Button variant='success'>Edit</Button>
                </Link>
                <Link
                  to={`/delete-donor/${this.props.match.params.id}`}
                  className='donor-details-delete-btn'>
                  <Button variant='danger'>Delete</Button>
                </Link>
              </div>
            </div>
            <div className='donor-details-contents'>
              <h2 className='donor-details-section-heading'>Contact Info</h2>
              <div className='donor-detail-name'>
                <h4>Name</h4>
                <p>{`${this.props.donor.firstName} ${this.props.donor.lastName}`}</p>
              </div>
              <div className='donor-detail-organization'></div>
              <h4>Organization</h4>
              <p>{`${this.props.donor.organization}`}</p>
              <div className='donor-detail-email'>
                <h4>Email</h4>
                <p>{`${this.props.donor.email}`}</p>
              </div>

              <div className='donor-detail-phone'>
                <h4>Phone</h4>
                <p>{`${this.props.donor.phone}`}</p>
              </div>

              <div className='donor-detail-address'>
                <h4>Address</h4>
                <p>{`${this.props.donor.street}`}</p>
                <p>{`${this.props.donor.city}`}</p>
                <p>{`${this.props.donor.state}, ${this.props.donor.zip}`}</p>
              </div>

              {/* <div className='donor-detail-notes'>
              <h2 className='donor-details-section-heading'>Notes</h2>
                <p>{`${this.props.donor.notes}`}</p>
              </div> */}
              {this.renderNotes()}

              <div className='donor-detail-donations'>
                <h2 className='donor-details-section-heading'>Donations</h2>
                <h3>Total Donations {this.renderTotalDonations()}</h3>

                {this.donationHistory()}
              </div>
            </div>
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
