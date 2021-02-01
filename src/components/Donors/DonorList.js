/* 
This component renders the main view of the app - a list of donors and their basic
contact information, along with action choices for each entry.
*/

import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Hooks
import { useDispatch, useSelector } from "react-redux";

//Actions
import { fetchDonorList } from "../../actions";

//Components
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/DropdownButton";
// import Loader from 'react-promise-loader';
// import { usePromiseTracker } from 'react-promise-tracker';

//Helper functions
import formatAmount from "../../helper-funcs/formatAmount";
import sortData from "../../helper-funcs/sortData";

// Styles
import "../../css/donor-list.css";

const DonorList = () => {
  const [sortBy, setSortBy] = useState('alphabet');

  const list = useSelector(state => state.donors);
  const dispatch = useDispatch();

  //MAKE A CALL FOR LIST OF DONORS
  useEffect(() => {
    dispatch(fetchDonorList());
  }, [dispatch]);

  //Renders action buttons.
  const renderActions = id => {
    return (
      <div className='donor-list-action-buttons'>
        <ButtonGroup size='sm'>
          <Link to={`/donor-details/${id}`}>
            <Button variant='info' size='sm'>
              Details
            </Button>
          </Link>
          <Link to={`/edit-donor/${id}`} className='mx-2'>
            <Button variant='success' size='sm'>
              Edit
            </Button>
          </Link>
          <Link to={`/delete-donor/${id}`}>
            <Button variant='danger' size='sm'>
              Delete
            </Button>
          </Link>
        </ButtonGroup>
      </div>
    );
  };

  const onSort = e => {
    setSortBy(e.target.value);
    return;
  };

  //Render the list of donors.
  const renderList = () => {
    const newList = Object.values(list);

    //Sort list of donors by either alphabetcial or totalDonations descending
    //Default to alphabetcial
    sortData(newList, 'donor list', sortBy);

    return newList.map((donor, idx) => {
      return (
        <tr key={donor.id}>
          <td className='text-dark'>
            {donor.firstName} {donor.lastName}
          </td>
          <td className = 'text-dark'>{formatAmount(donor.totalDonations)}</td>
          <td>
            <a
              href={`mailto:${donor.email}`}
              target='blank'
              className = 'text-muted'>
              {donor.email}
            </a>
          </td>
          <td className='text-dark text-nowrap'>{donor.phone}</td>
          <td>{renderActions(donor.id)}</td>
        </tr>
      );
    });
  };

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
                <Form.Control size='sm' as='select' onChange={onSort}>
                  <option defaultValue>Sort Donors</option>
                  <option value='alphabet'>Alphabetized</option>
                  <option value='totalDonations'>Total Donations</option>
                </Form.Control>
              </InputGroup>

              <InputGroup className='donation-list-search'>
                <Form.Control
                  placeholder='Search Coming Soon'
                  aria-label='Search Donor'
                  aria-describedby='basic-addon2'
                  size='sm'
                  className='donor-search-field'
                />
                <InputGroup.Append>
                  <Button
                    variant='dark'
                    size='sm'
                    className='search-donor-button'>
                    Search
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </div>
          </div>

          <div className='donor-list-table border border-info rounded'>
            <Table striped responsive text='center' className = 'rounded'>
              <thead className='rounded'>
                <tr className='table-primary table-heading'>
                  <th>Name</th>
                  <th>Total Donations</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>{renderList()}</tbody>
              {/* <Loader promiseTracker={usePromiseTracker}> Loading </Loader> */}
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorList;
