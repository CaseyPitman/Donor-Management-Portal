/* 
This component renders a detailed view of a donor, including contact information
and a record of past donations including amount and type. 
*/

import React, { useEffect } from "react";

//Hooks
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//Actions
import {fetchDonorDetails} from "../../actions/index.js"

//Components
import UserProfile from "../Auth/UserProfile";


const DonorDetails = (props) => {
  const { isAuthenticated, isLoading } = useAuth0();
  const history = useHistory();
  //If not authenticated, push to home.
  if (!isAuthenticated && !isLoading) {
    history.push("/");
  }

  console.log(props);
  const id = useSelector(state => state.donors)
  const dispatch = useDispatch();

  //If authenticated, call for donor details.
 


  useEffect(() => {
    dispatch(fetchDonorDetails(4))
  }, [])

  return (
    <div>
      <UserProfile />
      <h1>DonorDetails</h1>
    </div>
  );
};

export default DonorDetails;
