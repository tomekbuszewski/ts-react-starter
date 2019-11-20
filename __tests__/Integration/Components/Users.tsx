import * as React from "react";
import { Store } from "redux";
import { waitForElement, render } from "@testing-library/react";

import { makeStore } from "@redux/store";
import { Users, UsersComponent } from "@components";

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

const componentConfig = {
  state: null,
  users: [],
  get: async () => Promise.resolve(),
};

jest.mock("axios");

describe("Integration `UsersComponent` tests", () => {
  beforeEach(() => {
    store = makeStore();
  });

  it("should have empty state on mount", () => {
    const component = render(<UsersComponent {...componentConfig} />);

    expect(component.container.innerHTML).toBe(
      `<div data-testid="state-loading">Loading users...</div>`,
    );
  });

  it("should display users on success", async () => {
    const component = render(
      <UsersComponent
        {...componentConfig}
        state={successMockData.status}
        users={successMockData.data}
      />,
    );
    const mountedNode = await waitForElement(() =>
      component.getByTestId("state-success"),
    );

    expect(mountedNode.innerHTML).toBe("<li>One One</li><li>Two Two</li>");
  });

  it("should display error message on failure", async () => {
    const component = renderWithRedux(
      <UsersComponent {...componentConfig} state={500} />,
      store,
    );
    const mountedNode = await waitForElement(() =>
      component.getByTestId("state-error"),
    );

    expect(mountedNode.innerHTML).toBe("Error");
  });
});
