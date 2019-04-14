/* eslint-disable no-undef */
import { createStore } from "redux";

import reducers from "./reducers";

export const makeStore = () => {
  const enhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__();

  return createStore(
    reducers,
    enhancer,
  );
};

export default makeStore();
