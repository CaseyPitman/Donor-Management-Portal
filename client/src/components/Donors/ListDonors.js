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

  //MAKE A CALL FOR LIST
  useEffect(() => {
    dispatch(fetchDonorList());
  }, []);


  // console.log(list);

  //Grab the list and manipulate it for display.
  
    // sort by last name
    



  return (
    <div>
      <UserProfile />
      <h1>Donor List</h1>
    </div>
  );
};

export default ListDonors;
