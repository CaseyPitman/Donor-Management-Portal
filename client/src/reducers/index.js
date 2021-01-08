//Combines reducers

import { combineReducers } from "redux";
import donorReducer from "./donorReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({ donors: donorReducer, form: formReducer });
