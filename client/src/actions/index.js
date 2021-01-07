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

// Retreive list of donors
export const fetchDonorList = () => async dispatch => {
  const response = await DMP.get("/donors/");
  dispatch({ type: FETCH_DONOR_LIST, payload: response.data });
};

export const createDonor = () => {
  //will create a new donor record
};

// Retrieve record for single donor
export const fetchDonorDetails = id => async dispatch => {
  const response = await DMP.get(`/donors/${id}`);
  dispatch({ type: FETCH_DONOR_DETAILS, payload: response.data });
};

export const editDonor = () => {
  //will edit a specific donor record.
};

export const deleteDonor = () => {
  //will delete a specific donor.
};
