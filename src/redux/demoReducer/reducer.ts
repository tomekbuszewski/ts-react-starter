import { ReduxAction } from "@typings";

import { DemoReducerReducer } from "./typings";
import { EXAMPLE_ACTION } from "./actions";

const initialState: DemoReducerReducer = "";

export default function (
  state = initialState,
  action: ReduxAction,
): DemoReducerReducer {
  const { type } = action;

  switch (type) {
    case EXAMPLE_ACTION:
      return state;
    default:
      return state;
  }
}
