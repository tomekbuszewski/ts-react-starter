import { combineReducers } from "redux";
import demoReducer from "./demoReducer/reducer";

export const reducers = {
  demoReducer,
};

export type Reducers = typeof reducers;

export default combineReducers(reducers);
