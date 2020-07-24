import { applyMiddleware, createStore, compose, Store } from "redux";
import thunk from "redux-thunk";

import reducers from "@redux/reducers";
import { Reducers } from "@redux/typings";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const makeStore = (initialStore = {}): Store<Reducers> => {
  return createStore(
    reducers,
    initialStore,
    composeEnhancers(applyMiddleware(thunk)),
  );
};

export default makeStore();
