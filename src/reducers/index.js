//Combines reducers

import { combineReducers } from "redux";
import donorReducer from "./donorReducer";
import modalReducer from "./modalReducer";

export default combineReducers({ donors: donorReducer, modal: modalReducer });
