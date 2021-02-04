//Creates the CRUD actions

import {
  FETCH_DONOR_LIST,
  CREATE_DONOR,
  FETCH_DONOR_DETAILS,
  EDIT_DONOR,
  DELETE_DONOR,
  SHOW_MODAL,
  HIDE_MODAL,
} from "./types";

//Use for axios calls.
import DMP from "../axios/DMP";

import { trackPromise } from "react-promise-tracker";
import redirect from "../helper-funcs/redirect";
// import redirect from "../helper-funcs/redirect";

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
export const createDonor = formData => {
  return async dispatch => {
    try {
      const response = await DMP.post("/donors", formData);
      dispatch({ type: CREATE_DONOR, payload: response.data });
    } catch (error) {
      console.log(error);
    }
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
  try {
    const response = await DMP.patch(`donors/${id}`, formData);
    dispatch({ type: EDIT_DONOR, payload: response.data });
  } catch (error) {
    console.log(error);
  }
  //Take user back to page they clicked in from.
  if (props) {
    props.history.goBack();
  }
};

//Delete a donor record
export const deleteDonor = (id, props) => async dispatch => {
  await trackPromise(DMP.delete(`/donors/${id}`));
  dispatch({ type: DELETE_DONOR, payload: id });
  // redirect(props, "/donor-list");
};

// SHOW A MODAL

export const showModal = ({ modalProps, modalType }) => dispatch => {
  dispatch({ type: SHOW_MODAL, modalProps, modalType });
};

export const hideModal = () => dispatch => {
  dispatch({ type: HIDE_MODAL });
};
