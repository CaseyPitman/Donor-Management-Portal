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


              <h1 className='donor-details-title'>DonorDetails</h1>
              <div className='donor-details-action-buttons'>
                <Link to='/donor-list' className = "donor-details-back-btn">
                  <Button variant='info'>Back</Button>
                </Link>

                <Link to={`/edit-donor/${this.props.match.params.id}`} className = "donor-details-edit-btn">
                  <Button variant='success'>Edit</Button>
                </Link>
                <Link to={`/delete-donor/${this.props.match.params.id}`} className = "donor-details-delete-btn">
                  <Button variant='danger'>Delete</Button>
                </Link>
              </div>


            </div>
            <div className='donor-details-contents'>
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
                <p>{`${this.props.donor.street}`}</p>
                <p>{`${this.props.donor.city}`}</p>
                <p>{`${this.props.donor.state}, ${this.props.donor.zip}`}</p>
              </div>

              <div className='donor-detail-notes'>
                <h3>Notes</h3>
                <p>{`${this.props.donor.notes}`}</p>
              </div>

              <div className='donor-detail-donations'>
                <h3>Donations</h3>
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
