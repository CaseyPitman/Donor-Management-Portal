/* 
This component renders the main view of the app - a list of donors and their basic
contact information, along with action choices for each entry.
*/

import { React, useEffect } from "react";
import { Link } from "react-router-dom";

//Hooks
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";

//Actions
import { fetchDonorList } from "../../actions";

//Components
import UserProfile from "../Auth/UserProfile";
import Button from "../Button";

// Styles
import "../../css/donor-list.css";
// import "../../css/button.css";

const DonorList = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const history = useHistory();

  if (!isAuthenticated && !isLoading) {
    history.push("/");
  }

  const list = useSelector(state => state.donors);
  const dispatch = useDispatch();

  //MAKE A CALL FOR LIST OF DONORS
  useEffect(() => {
    dispatch(fetchDonorList());
  }, [dispatch]);

  //Renders action buttons. (These will be <Link/> to actions).
  const renderActions = id => {
    return (
      <div className='donor-list-action-buttons'>
        <Link to='/donor-details'>
          <Button
            btnColor='teal-button'
            btnSize='large-button'
            btnText='Details'
            id={id}
          />
        </Link>
        <Link to='/edit-donor'>
          <Button
            btnColor='yellow-button'
            btnSize='large-button'
            btnText='Edit'
            id={id}
          />
        </Link>
        <Link to='/delete-donor'>
          <Button
            btnColor='red-button'
            btnSize='large-button'
            btnText='Delete'
            id={id}
          />
        </Link>
      </div>
    );
  };

  //Render the list of donors.
  const renderList = () => {
    const newList = Object.values(list);
    return newList.map(donor => {
      return (
        // Add logic here that adds alternating colors for the rows. Perhaps use even/odd status of the id.

        <div key={donor.id} className='donor-list-item'>
          <div className='donor-list-name'>
            {donor.firstName} {donor.lastName}
          </div>
          <div className='donor-list-email'>{donor.email} </div>
          <div className='donor-list-phone'>{donor.phone}</div>
          <div className='donor-list-actions'>{renderActions(donor.id)}</div>
        </div>
      );
    });
  };

  return (
    <div className='donor-list'>
      <UserProfile />
      <div className='donor-list-container'>
        <h1 className='donor-list-title'>Donor List</h1>
        <div className='donor-list-global-actions'>
          <Link to='/create-donor' className = "create-donor-button">
            <Button
              btnColor='blue-button'
              btnSize='xl-button'
              btnText='+ New Donor'
            />
          </Link>
          <input className = "donor-search" placeholder='Search Donors' />
        </div>
        {/* <div className='donor-list-headings'>
          <h2>Name</h2>
          <h2>Email</h2>
          <h2>Phone</h2>
          <h2>Actions</h2>
        </div> */}
        <div className='donor-list-content'>{renderList()}</div>
      </div>
    </div>
  );
};

export default DonorList;
