//Combines reducers

import { combineReducers } from "redux";
import donorReducer from "./donorReducer";


export default combineReducers({ donors: donorReducer});
