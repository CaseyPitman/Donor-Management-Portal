//Creates the CRUD actions

import {
  FETCH_DONOR_LIST,
  CREATE_DONOR,
  FETCH_DONOR_DETAILS,
  EDIT_DONOR,
  DELETE_DONOR,
} from "./types";

//Use for axios calls.
import DMP from "../axios/DMP";


// import the useHistory so that I can push users to donor_list after edit or delete.


// Thought - make sign in and sign out action that will set state as isSignedIn. This may smooth out the rendering process on each CRUD view to avoid having to make a call for authorization on each render. 



export const fetchDonorsList =() =>{
// Retreive list of donors
export const fetchStreams = () => async dispatch => {
   const response = await donors.get("/donors");
   dispatch({ type: FETCH_DONOR_LIST, payload: response.data });
 };
}

export const createDonor = () => {
   //will create a new donor record
}

export const fetchDonorDetails = () =>{
   //will fetch record of a specific donor
}

export const editDonor = () => {
   //will edit a specific donor record.
}

export const deleteDonor =()=>{
   //will delete a specific donor.
}