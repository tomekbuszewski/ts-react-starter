import { combineReducers } from "redux";

import counter, { ICounterReducer } from "./counter/reducer";
import users, { IReduxUserReducer } from "./users/reducer";

export interface IReduxStore {
  counter: ICounterReducer;
  users: IReduxUserReducer;
}

export const appReducers = {
  counter,
  users,
};

export default combineReducers(appReducers);
