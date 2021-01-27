import { combineReducers } from "redux";

import demoReducer from "./demoReducer/reducer";

export const reducers = {
  demoReducer,
};

export default combineReducers(reducers);
