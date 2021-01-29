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
import Table from "react-bootstrap/Table";

//Styles
import "../../css/donor-details.css";

//Helper functions
import formatAmount from "../../helper-funcs/formatAmount";
import formatDate from "../../helper-funcs/formatDate";

class DonorDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDonorDetails(this.props.match.params.id);
  }

  //Only show notes field if notes exist
  renderNotes = () => {
    if (this.props.donor.notes !== "none") {
      return (
        <div className='donor-detail-notes'>
          <h2 className='donor-details-section-heading'>Notes</h2>
          <p className='text-dark'>{`${this.props.donor.notes}`}</p>
          <hr></hr>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  renderDonationHistory = () => {
    return this.props.donor.donations.map((donation, idx) => {
      //Don't forget to format donation amounts.
      return (
        <tr key={idx}>
          <td className='text-dark'>{formatDate(donation.date)}</td>
          <td className='text-dark'>{formatAmount(donation.amount)}</td>
          <td className='text-dark'> {donation.type}</td>
        </tr>
      );
    });
  };

  addDonation = () => {
    console.log('you wish to add donation.')
  }


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
              <hr></hr>

              <div className='donor-details-contact'>
                <div className='contact-block-left'>
                  <div className='donor-detail-name'>
                    <h4>Name</h4>
                    <p className='text-dark'>{`${this.props.donor.firstName} ${this.props.donor.lastName}`}</p>
                  </div>
                  <div className='donor-detail-organization'>
                    <h4>Organization</h4>
                    <p className='text-dark'>{`${this.props.donor.organization}`}</p>
                  </div>
                </div>

                <div className='contact-block-center'>
                  <div className='donor-detail-email'>
                    <h4>Email</h4>
                    {/* <a href = 'mailto:' */}
                    {/* <p className = "text-dark">{`${this.props.donor.email}`}</p> */}
                    <a href={`mailto:${this.props.donor.email}`} target='blank'>
                      <p className='text-dark'>{`${this.props.donor.email}`}</p>
                    </a>
                  </div>

                  <div className='donor-detail-phone'>
                    <h4>Phone</h4>
                    <p className='text-dark'>{`${this.props.donor.phone}`}</p>
                  </div>
                </div>

                <div className='contact-block-right'>
                  <div className='donor-detail-address'>
                    <h4>Address</h4>
                    <p className='text-dark'>
                      {`${this.props.donor.street}`}
                      <br></br>
                      {`${this.props.donor.city}`},{" "}
                      {`${this.props.donor.state}`} <br></br>
                      {`${this.props.donor.zip}`}
                    </p>
                  </div>
                </div>
              </div>
              <hr></hr>
              {this.renderNotes()}

              <div className='donor-detail-donations'>
                <div className='donor-detail-donation-heading-container'>
                  <h2 className='donor-details-section-heading'>Donations</h2>
                  <h5>
                    Total Donations:{" "}
                    {formatAmount(this.props.donor.totalDonations)}
                  </h5>
                </div>

                <div className='donor-history-table'>
                  <Table striped responsive bordered text='center'>
                    <thead>
                      <tr className='table-primary'>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Type</th>
                      </tr>
                    </thead>
                    <tbody>{this.renderDonationHistory()}</tbody>
                  </Table>
                  <div className='donor-details-add-donation-button-container'>
                    <Button
                      variant='secondary'
                      size='sm'
                      className='donor-details-add-donation-button'
                      onClick={this.addDonation}>
                      + Add Donation
                    </Button>
                  </div>
                </div>
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
