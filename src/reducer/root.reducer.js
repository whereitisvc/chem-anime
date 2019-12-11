import { combineReducers } from "redux";

import beakerReducer from "./beaker.reducer";
import navReducer from "./nav.reducer";


export default combineReducers({ 
    beaker: beakerReducer,
    nav: navReducer
});