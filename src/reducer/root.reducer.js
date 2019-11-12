import { combineReducers } from "redux";

import beakerReducer from "./beaker.reducer";


export default combineReducers({ 
    beaker: beakerReducer,
});