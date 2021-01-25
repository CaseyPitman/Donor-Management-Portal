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

import { trackPromise } from "react-promise-tracker";
import redirectToList from "../helper-funcs/redirect";

// Retreive list of donors
export const fetchDonorList = () => async dispatch => {
  try {
    const response = await trackPromise(DMP.get("/donors/"));
    dispatch({ type: FETCH_DONOR_LIST, payload: response.data });
  } catch (error) {
    //Add error handling
    console.log(error);
  }
};

//Create new donor record
export const createDonor = (formData, props) => {
  return async dispatch => {
    const response = await DMP.post("/donors", formData);
    dispatch({ type: CREATE_DONOR, payload: response.data });
    redirectToList(props);
  };
};

// Retrieve record for single donor
export const fetchDonorDetails = id => async dispatch => {
  try {
    const response = await DMP.get(`/donors/${id}`);
    dispatch({ type: FETCH_DONOR_DETAILS, payload: response.data });
  } catch (error) {
    //Add Error handling
    console.log(error);
  }
};

//Edit a recored for a specified donor
export const editDonor = (id, formData, props) => async dispatch => {
  const response = await DMP.patch(`donors/${id}`, formData);
  dispatch({ type: EDIT_DONOR, payload: response.data });
  redirectToList(props);
};

//Delete a donor record
export const deleteDonor = (id, props) => async dispatch => {
  await DMP.delete(`/donors/${id}`);
  dispatch({ type: DELETE_DONOR, payload: id });
  redirectToList(props);
};
