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

const ListDonors = () => {
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
  }, []);

  //Render the list of donors:
  const renderList = () => {
    const newList = Object.values(list);
    return newList.map(donor => {
      return (
        <div key={donor.id}>
          {donor.firstName} {donor.lastName} {donor.email} {donor.phone}
        </div>
      );
    });
  };

  return (
    <div>
      <UserProfile />
      <h1>Donor List</h1>
      {renderList()}
    </div>
  );
};

export default ListDonors;
