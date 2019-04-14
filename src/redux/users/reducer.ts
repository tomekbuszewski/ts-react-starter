import { AnyAction } from "redux";
import { GET_USERS_FAIL, GET_USERS_SUCCESS } from "@redux/users/actions";

export interface IReduxUser {
  email: string;
  id: number;
  name: string;
  username: string;
}

export interface IReduxUserReducer {
  state: number | null;
  users: IReduxUser[];
}

const initialState: IReduxUserReducer = {
  state: null,
  users: [],
};

export default function reducer(
  store: IReduxUserReducer = initialState,
  action: AnyAction,
): IReduxUserReducer {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS_FAIL: {
      return {
        ...store,
        state: payload,
      };
    }

    case GET_USERS_SUCCESS: {
      return {
        ...store,
        state: 200,
        users: [...store.users, ...payload],
      };
    }

    default: {
      return store;
    }
  }
}
