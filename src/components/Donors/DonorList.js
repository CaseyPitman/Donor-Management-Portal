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
import UserProfile from "../Auth/UserProfile";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/Form";

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
            <Button variant='info'>Details</Button>
          </Link>
          <Link to={`/edit-donor/${id}`}>
            <Button variant='warning'>Edit</Button>
          </Link>
          <Link to={`/delete-donor/${id}`}>
            <Button variant='danger'>Delete</Button>
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
          <h1 className='donor-list-title'>Donor List</h1>
          <div className='donor-list-global-actions'>
            <Link to='/create-donor' className='create-donor-button'>
              <Button variant='info' size='sm'>
                + Add New Donor
              </Button>
            </Link>
          </div>

          <form class='form-inline my-2 my-lg-0'>
            <input
              class='form-control'
              type='text'
              placeholder='Search Donors'
            />
            <button class='btn btn-info' type='submit'>
              Search
            </button>
          </form>

          <div className='donor-list-table'>
            <Table striped responsive text='center'>
              <thead className=''>
                <tr className='table-info'>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>{renderList()}</tbody>
            </Table>
          </div>

          {/* <div className='donor-list-table'> */}
          {/* <div className='donor-list-headings'> */}
          {/*               <h2 className='donor-list-heading-item'>Name</h2>
          <h2 className='donor-list-heading-item'>Email</h2>
          <h2 className='donor-list-heading-item'>Phone</h2>
          <h2 className='donor-list-heading-item'>Actions</h2> */}
          {/* </div> */}
          {/* <div className='donor-list-content'>{renderList()}</div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default DonorList;
