import { Action, ActionCreator, AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { IReduxStore } from "@redux/reducers";

export type ReduxThunkAction = ActionCreator<
  ThunkAction<Promise<Action>, IReduxStore, void, AnyAction>
>;

export type ReduxThunkDispatch = ThunkDispatch<IReduxStore, void, AnyAction>;
