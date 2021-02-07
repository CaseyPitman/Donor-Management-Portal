//This reducer handles loding data status in order to display loading spinner.

import { REQUEST_DATA , RECEIVED_DATA} from "../actions/types";

const fetchingReducer = (state = { isFetching: false }, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return { ...state, isFetching: true };
    case RECEIVED_DATA:
      return { ...state, isFetching: false };
    default:
      return state;
  }
};

export default fetchingReducer;
