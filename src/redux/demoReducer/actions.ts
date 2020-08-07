import { Dispatch } from "redux";
import { ReduxAction } from "@typings";

export const EXAMPLE_ACTION = "DEMO_REDUCER/EXAMPLE_ACTION";

export const exampleAction = (dispatch: Dispatch): ReduxAction =>
  dispatch({ type: EXAMPLE_ACTION });
