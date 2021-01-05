/* 
This component renders the main view of the app - a list of donors and their basic
contact information, along with action choices for each entry.
*/

import { React, useEffect } from "react";

//Hooks
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";

//Actions
import { fetchDonorList } from "../../actions";

//Components
import UserProfile from "../Auth/UserProfile";

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

  const renderActions = () => {
    return (
      <div>
        <button>Details</button>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    );
  };

  //Render the list of donors:
  const renderList = () => {
    const newList = Object.values(list);
    return newList.map(donor => {
      return (
        <div key={donor.id}>
          {donor.firstName} {donor.lastName} {donor.email} {donor.phone} {renderActions()}
        </div>
      );
    });
  };

  return (
    <div className='donor-list'>
      <UserProfile />
      <h1>Donor List</h1>
      <button>Add Donor</button>
      <input placeholder='Search Donors' />
      <div className='donor-list-headings'>
        <h2>Name</h2>
        <h2>Email</h2>
        <h2>Phone</h2>
        <h2>Actions</h2>
      </div>

      {renderList()}
    </div>
  );
};

export default DonorList;
