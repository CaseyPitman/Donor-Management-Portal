/* 
This class component renders a detailed view of a donor, including contact information
and a record of past donations including amount and type. 
*/

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//Actions
import {
  fetchDonorDetails,
  showModal,
  hideModal,
} from "../../actions/index.js";

//Components
import ModalContainer from "../Modal/ModalRoot";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

//Styles
import "../../css/donor-details.css";

//Helper functions
import formatAmount from "../../helper-funcs/formatAmount";
import formatDate from "../../helper-funcs/formatDate";
import sortData from "../../helper-funcs/sortData";

import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-promise-loader";

class DonorDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sortBy: "date descending" };
  }

  //Fetch donor details on mount
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchDonorDetails();
  }

  //Only show notes field if notes extant
  renderNotes = () => {
    if (this.props.donor.notes !== "none") {
      return (
        <div className='donor-detail-notes'>
          <h3 className='donor-details-section-heading'>Notes</h3>
          <p className='text-dark'>{`${this.props.donor.notes}`}</p>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  renderDonationHistory = () => {
    //Sort donation history
    const sortedDonationHistory = sortData(
      this.props.donor.donations,
      "donations",
      this.state.sortBy
    );
    //Render sorted donation history
    return sortedDonationHistory.map((donation, idx) => {
      return (
        <tr key={idx}>
          <td className='text-dark'>{formatDate(donation.date)}</td>
          <td className='text-dark'>{formatAmount(donation.amount)}</td>
          <td className='text-dark'> {donation.type}</td>
        </tr>
      );
    });
  };

  //Set criteria for sorting
  onSort = e => {
    this.setState({ sortBy: e.target.value });
  };

  //Close a modal
  closeModal = () => {
    this.props.hideModal();
  };

  //Show a modal
  openDeleteModal = donor => {
    this.props.showModal(
      {
        open: true,
        donor: this.props.donor,
        closeModal: this.closeModal,
      },
      "delete donor"
    );
  };

  //Open the add donation modal
  openAddDonationModal = () => {
    this.props.showModal(
      {
        open: true,
        donor: this.props.donor,
        closeModal: this.closeModal,
      },
      "add donation"
    );
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
                <Button variant='danger' onClick={this.openDeleteModal}>
                  Delete
                </Button>
              </div>
            </div>
            <div className='donor-details-contents border border-primary rounded'>
              <h3 className='donor-details-section-heading'>Contact Info</h3>
              <div className='donor-details-contact mt-3'>
                <div className='contact-block-left'>
                  <div className='donor-detail-name'>
                    <h6 className='font-weight-bold'>NAME</h6>
                    <p className='text-dark'>{`${this.props.donor.firstName} ${this.props.donor.lastName}`}</p>
                  </div>
                  <div className='donor-detail-organization'>
                    <h6 className='font-weight-bold '>ORGANIZATION</h6>
                    <p className='text-dark'>{`${this.props.donor.organization}`}</p>
                  </div>
                </div>
                <div className='contact-block-center'>
                  <div className='donor-detail-email'>
                    <h6 className='font-weight-bold'>EMAIL</h6>
                    <a href={`mailto:${this.props.donor.email}`} target='blank'>
                      <p className='text-dark'>{`${this.props.donor.email}`}</p>
                    </a>
                  </div>
                  <div className='donor-detail-phone'>
                    <h6 className='font-weight-bold '>PHONE</h6>
                    <p className='text-dark'>{`${this.props.donor.phone}`}</p>
                  </div>
                </div>
                <div className='contact-block-right'>
                  <div className='donor-detail-address'>
                    <h6 className='font-weight-bold '>ADDRESS</h6>
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
              {this.renderNotes()}
              <div className='donor-detail-donations'>
                <div className='donor-detail-donation-heading-container'>
                  <h3 className='donor-details-section-heading'>Donations</h3>
                  <div className='donation-history-actions'>
                    <InputGroup className='sort-donations-field'>
                      <Form.Control
                        size='sm'
                        as='select'
                        onChange={this.onSort}>
                        <option defaultValue>Sort Donations</option>
                        <option value='date descending'>
                          Date - Newest First
                        </option>
                        <option value='date ascending'>
                          Date - Oldest First
                        </option>
                        <option value='donation amount'>Amount</option>
                        <option value='donation type'>Type</option>
                      </Form.Control>
                    </InputGroup>
                    <h6 className='font-weight-bold total-donations-field'>
                      TOTAL DONATIONS:{" "}
                      {formatAmount(this.props.donor.totalDonations)}
                    </h6>
                  </div>
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
                      onClick={this.openAddDonationModal}>
                      + Add Donation
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Loader promiseTracker={usePromiseTracker}> Loading </Loader>
        <ModalContainer hideModal={this.props.hideModal} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  hideModal: () => dispatch(hideModal()),
  showModal: (modalProps, modalType) => {
    dispatch(showModal({ modalProps, modalType }));
  },
  fetchDonorDetails: () =>
    dispatch(fetchDonorDetails(ownProps.match.params.id)),
});

const mapStateToProps = (state, ownProps) => {
  return { donor: state.donors[ownProps.match.params.id] };
};

export default connect(mapStateToProps, mapDispatchToProps)(DonorDetails);
