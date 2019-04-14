import axios from "axios";
import { ReduxThunkAction, ReduxThunkDispatch } from "@redux/types";

export const GET_USERS = "@@USERS/GET_USERS";
export const GET_USERS_FAIL = "@@USERS/GET_USERS_FAIL";
export const GET_USERS_SUCCESS = "@@USERS/GET_USERS_SUCCESS";

export const getUsers: ReduxThunkAction = () => async (
  dispatch: ReduxThunkDispatch,
) => {
  dispatch({ type: GET_USERS });

  const { data, status } = await axios.get(
    "https://jsonplaceholder.typicode.com/users",
  );

  if (status === 200) {
    return dispatch({
      type: GET_USERS_SUCCESS,
      payload: data,
    });
  }

  return dispatch({
    type: GET_USERS_FAIL,
    payload: status,
  });
};
