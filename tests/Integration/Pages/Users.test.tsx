import * as React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { setupServer } from "msw/node";

import usersMock from "@mocks/users";
import { usersSuccessHandler } from "@mocks/handlers";
import { Users } from "@pages/Users";
import { View as UsersView } from "@pages/Users/Users.view";
import { PAGE_USERS_TESTING_IDS } from "@pages/Users/Users.typings";

const server = setupServer();

describe("`Users` page tests", () => {
  afterAll(() => server.resetHandlers());
  afterEach(() => server.close());

  it("should properly render users list", async () => {
    server.use(usersSuccessHandler);
    server.listen();
    render(<Users />);

    await waitFor(() => screen.getByTestId(PAGE_USERS_TESTING_IDS.USERS_LIST));

    expect(
      screen
        .getByTestId(PAGE_USERS_TESTING_IDS.USERS_LIST)
        .querySelectorAll("li").length,
    ).toBe(usersMock.length);
  });
});

describe("`Users` view tests", () => {
  it("should display `no users` info", async () => {
    render(<UsersView users={[]} />);

    await waitFor(() => screen.queryByTestId(PAGE_USERS_TESTING_IDS.NO_USERS));

    expect(
      screen.getByTestId(PAGE_USERS_TESTING_IDS.NO_USERS),
    ).toBeInTheDocument();
  });
});
