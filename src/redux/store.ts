import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const makeStore = () => {
  const enhancer = composeEnhancers(applyMiddleware(thunk));

  return createStore(reducers, enhancer);
};

export default makeStore();
