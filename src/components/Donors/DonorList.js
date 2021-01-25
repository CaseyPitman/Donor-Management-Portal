/* 
This component renders the main view of the app - a list of donors and their basic
contact information, along with action choices for each entry.
*/

import { React, useEffect } from "react";
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
// import Loader from 'react-promise-loader';
// import { usePromiseTracker } from 'react-promise-tracker';


//Helper functions

// Styles
import "../../css/donor-list.css";

const DonorList = () => {
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
            <Button variant='warning' size='sm'>
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

  //Render the list of donors.
  const renderList = () => {
    const newList = Object.values(list);
    return newList.map((donor, idx) => {
      return (
        <tr key={donor.id}>
          <td className='text-dark'>
            {donor.firstName} {donor.lastName}
          </td>
          <td>
            <a
              href={`mailto:${donor.email}`}
              target='blank'
              className='text-dark'>
              {donor.email}
            </a>
          </td>
          <td className='text-dark'>{donor.phone}</td>
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
            <InputGroup className='search-form'>
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

          <div className='donor-list-table'>
            <Table striped responsive bordered text='center'>
              <thead className=''>
                <tr className='table-primary'>
                  <th>Name</th>
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
