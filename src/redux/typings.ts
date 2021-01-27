import { CombinedState } from "redux";

import { DemoReducerReducer } from "@redux/demoReducer/typings";

export type Reducers = CombinedState<{
  demoReducer: DemoReducerReducer;
}>;
