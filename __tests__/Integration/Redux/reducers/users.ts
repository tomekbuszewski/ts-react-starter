import axios from "axios";

import { Store } from "redux";
import { ReduxThunkDispatch } from "@redux/types";

import { makeStore } from "@redux/store";
import { getUsers } from "@redux/users/actions";
import {
  mockedAxios,
  defaultAxiosAnswer as defaultAnswer,
} from "__mocks__/axiosMock";

const successMockData = {
  ...defaultAnswer,
  status: 200,
  data: [
    {
      id: 1,
      email: "one@one.com",
      username: "one",
      name: "One One",
    },
    {
      id: 2,
      email: "two@two.com",
      username: "two",
      name: "Two Two",
    },
  ],
};

const failMockData = {
  ...defaultAnswer,
  status: 500,
  data: {},
};

jest.mock("axios");

describe("Redux `users` tests", () => {
  let store: Store;
  let dispatch: ReduxThunkDispatch;

  beforeEach(() => {
    store = makeStore();
    dispatch = store.dispatch;
  });

  it("should have proper initial state", () => {
    expect(store.getState().users).toMatchObject({
      state: null,
      users: [],
    });
  });

  it("should add users to state on success", async () => {
    mockedAxios.get.mockResolvedValue({ ...successMockData });
    await dispatch(getUsers());

    expect(axios.get as jest.Mock).toHaveBeenCalled();
    expect(store.getState().users.state).toBe(successMockData.status);
    expect(store.getState().users.users.length).toBe(
      successMockData.data.length,
    );
  });

  it("should set state to other than 200 on failure", async () => {
    mockedAxios.get.mockResolvedValue({ ...failMockData });
    await dispatch(getUsers());

    expect(axios.get as jest.Mock).toHaveBeenCalled();
    expect(store.getState().users.state).toBe(failMockData.status);
    expect(store.getState().users.users.length).toBe(0);
  });
});
