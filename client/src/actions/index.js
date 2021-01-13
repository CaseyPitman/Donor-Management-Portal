//Creates the CRUD actions

import {
  FETCH_DONOR_LIST,
  CREATE_DONOR,
  FETCH_DONOR_DETAILS,
  EDIT_DONOR,
  DELETE_DONOR,
} from "./types";

import history from "../history";

//Use for axios calls.
import DMP from "../axios/DMP";
import { ViewStreamSharp } from "@material-ui/icons";

// Retreive list of donors
export const fetchDonorList = () => async dispatch => {
  const response = await DMP.get("/donors/");
  dispatch({ type: FETCH_DONOR_LIST, payload: response.data });
};

//Create new donor record
export const createDonor = formData => {
  return async dispatch => {
    const response = await DMP.post("/donors", { ...formData });
    dispatch({ type: CREATE_DONOR, payload: response.data });
    history.push("/donor-list");
  };
};

// Retrieve record for single donor
export const fetchDonorDetails = id => async dispatch => {
  const response = await DMP.get(`/donors/${id}`);
  dispatch({ type: FETCH_DONOR_DETAILS, payload: response.data });
};

export const editDonor = () => {
  //will edit a specific donor record.
  //push to list when complete
};

export const deleteDonor = () => {
  //will delete a specific donor.
  //push to list
};
