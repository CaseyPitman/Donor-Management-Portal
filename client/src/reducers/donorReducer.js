// This file contains reducers

import _ from "lodash";

import {
  FETCH_DONOR_LIST,
  CREATE_DONOR,
  FETCH_DONOR_DETAILS,
  EDIT_DONOR,
  DELETE_DONOR,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_DONOR_LIST:
      return { ...state, ..._.mapKeys(action.payload, "id") };

    case CREATE_DONOR:
      return { ...state, [action.payload.id]: action.payload };

    case FETCH_DONOR_DETAILS:
      return { ...state, [action.payload.id]: action.payload };

    case EDIT_DONOR:
      return { ...state, [action.payload.id]: action.payload };

    case DELETE_DONOR:
      return _.omit(state, action.payload);

      default:
         return state;
  }
};
