import * as React from "react";
import { Store } from "redux";
import { render, waitForElement } from "react-testing-library";
import { Provider } from "react-redux";

import { makeStore } from "@redux/store";
import Users from "@components/Users";

import {
  mockedAxios,
  defaultAxiosAnswer as defaultAnswer,
} from "__mocks__/axiosMock";
import { renderWithRedux } from "__mocks__/renderWithRedux";

let store: Store;

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

describe("Integration `UsersComponent` tests", () => {
  beforeEach(() => {
    store = makeStore();
  });

  it("should have empty state on mount", () => {
    const component = renderWithRedux(<Users />, store);

    expect(component.container.innerHTML).toBe(
      `<div data-testid="state-loading">Loading users...</div>`,
    );
    expect(component).toMatchSnapshot();
  });

  it("should display users on success", async () => {
    mockedAxios.get.mockResolvedValue({ ...successMockData });

    const component = renderWithRedux(<Users />, store);
    const mountedNode = await waitForElement(() =>
      component.getByTestId("state-success"),
    );

    expect(mountedNode.innerHTML).toBe("<li>One One</li><li>Two Two</li>");
    // expect(component).toMatchSnapshot();
  });

  it("should display error message on failure", async () => {
    mockedAxios.get.mockResolvedValueOnce({ ...failMockData });

    const component = renderWithRedux(<Users />, store);
    const mountedNode = await waitForElement(() =>
      component.getByTestId("state-error"),
    );

    expect(mountedNode.innerHTML).toBe("Error");
    // expect(component).toMatchSnapshot();
  });
});
