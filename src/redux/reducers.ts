import { combineReducers } from "redux";

import counter, { CounterReducer } from "./counter/reducer";

export interface Store {
  counter: CounterReducer;
}

export const appReducers = {
  counter,
};

export default combineReducers(appReducers);
