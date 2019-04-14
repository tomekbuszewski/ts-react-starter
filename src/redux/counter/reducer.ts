import { Action } from "redux";
import { INCREASE_COUNTER, DECREASE_COUNTER } from "./actions";

const initialState = 0;
export type CounterReducer = number;

export default (store: CounterReducer = initialState, action: Action) => {
  const { type } = action;

  switch (type) {
    case INCREASE_COUNTER: {
      return store + 1;
    }

    case DECREASE_COUNTER: {
      return store - 1;
    }

    default: {
      return store;
    }
  }
};
