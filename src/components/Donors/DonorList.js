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
        <ButtonGroup size='lg'>
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
      let background = idx % 2 === 0 ? "grey" : "white";

      return (
    
        <div key={donor.id} className={`donor-list-item ${background}`}>
          <div className='donor-list-name'>
            {donor.firstName} {donor.lastName}
          </div>
          <div className='donor-list-email-container'>
            <a
              href={`mailto:${donor.email}`}
              target='blank'
              className='donor-list-email'>
              {donor.email}
            </a>
          </div>
          <div className='donor-list-phone'>{donor.phone}</div>
          <div className='donor-list-actions'>{renderActions(donor.id)}</div>
        </div>
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
              <Button variant='primary'>+ Add New Donor</Button>
            </Link>
            <input className='donor-search' placeholder='Search Donors' />
          </div>

          <Table striped responsive className = "donor-list-table">
            <thead className = ''>
              <tr>
                <th>Name</th>
                <th>Email</th>
                {/* <th>Phone</th> */}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark Jenkins</td>
                <td>Mark.jenkins@gmail.com</td>
                {/* <td>907-888-9989</td> */}
                <td>Details Edit Delete</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                {/* <td>Thornton</td> */}
                <td>@fat</td>
              </tr>
            </tbody>
          </Table>

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
