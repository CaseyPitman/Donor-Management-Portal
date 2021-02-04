/* 
This component renders the main view of the app - a list of donors and their basic
contact information, along with action choices for each entry.
*/

import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Actions
import { fetchDonorList, showModal, hideModal } from "../../actions";

//Components
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import ModalContainer from "../Modal/ModalRoot";
import Search from "../Search";
import Loader from "react-promise-loader";
import { usePromiseTracker } from "react-promise-tracker";

//Helper functions
import formatAmount from "../../helper-funcs/formatAmount";
import sortData from "../../helper-funcs/sortData";

// Styles
import "../../css/donor-list.css";

class DonorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sortBy: "alphabet" };
  }

  //Fetch the list on mount
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchDonorList();
  }

  //Renders action buttons.
  renderActions = id => {
    return (
      // <div className='donor-list-action-buttons'>
      <ButtonGroup size='sm'>
        <Link to={`/donor-details/${id}`}>
          <Button variant='info' size='sm' className='action-button'>
            Details
          </Button>
        </Link>
        <Link to={`/edit-donor/${id}`} className='mx-3'>
          <Button variant='success' size='sm' className='action-button'>
            Edit
          </Button>
        </Link>
        <div>
          <Button
            className='action-button'
            variant='danger'
            size='sm'
            onClick={() => this.openDeleteModal(id)}>
            Delete
          </Button>
        </div>
      </ButtonGroup>
      // </div>
    );
  };

  onSort = e => {
    this.setState({ sortBy: e.target.value });
    return;
  };

  //Render the list of donors.
  renderList = () => {
    const newList = Object.values(this.props.donors);

    //Sort list of donors by either alphabetcial or totalDonations descending
    //Default to alphabetcial
    sortData(newList, "donor list", this.state.sortBy);

    return newList.map((donor, idx) => {
      return (
        <tr key={donor.id}>
          <td className='text-dark'>
            {donor.firstName} {donor.lastName}
          </td>
          <td className='text-dark'>{formatAmount(donor.totalDonations)}</td>
          <td>
            <a
              href={`mailto:${donor.email}`}
              target='blank'
              className='text-dark'
              >
              {donor.email}
            </a>
          </td>
          <td className='text-dark text-nowrap'>{donor.phone}</td>
          <td>{this.renderActions(donor.id)}</td>
        </tr>
      );
    });
  };

  //Open delete modal
  openDeleteModal = id => {
    const donorToDelete = this.props.donors[id];
    this.props.showModal(
      {
        open: true,
        donor: donorToDelete,
        closeModal: this.closeModal,
      },
      "delete donor"
    );
  };

  //Close delete modal
  closeModal = () => {
    this.props.hideModal();
  };

  render() {
    return (
      <div className='donor-list'>
        <div className='donor-list-wrapper'>
          <div className='donor-list-container'>
            <h1 className='display-5 donor-list-title'>Donor History</h1>
            <div className='donor-list-global-actions'>
              <Link to='/create-donor'>
                <Button variant='dark' size='sm' className='add-donor-button'>
                  + Add New Donor
                </Button>
              </Link>

              <div className='donation-list-sort-search'>
                <InputGroup className='donation-list-sort'>
                  <Form.Control size='sm' as='select' onChange={this.onSort}>
                    <option defaultValue>Sort Donors</option>
                    <option value='alphabet'>Alphabetized</option>
                    <option value='totalDonations'>Total Donations</option>
                  </Form.Control>
                </InputGroup>
                <Search />
              </div>
            </div>

            <div className='donor-list-table rounded'>
              <Table
                striped
                bordered
                responsive
                text='center'
                className='rounded'>
                <thead className='rounded'>
                  <tr className='table-primary table-heading'>
                    <th>Name</th>
                    <th>Total Donations</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>{this.renderList()}</tbody>
              </Table>
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
  fetchDonorList: () => dispatch(fetchDonorList()),
  // fetchDonorDetails: () =>
  //   dispatch(fetchDonorDetails(ownProps.match.params.id)),
});

const mapStateToProps = state => {
  return { donors: state.donors };
};

export default connect(mapStateToProps, mapDispatchToProps)(DonorList);
