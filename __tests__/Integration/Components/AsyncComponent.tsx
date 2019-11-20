import * as React from "react";
import { render, waitForElement } from "@testing-library/react";
import { AsyncComponent } from "@components";

jest.mock("axios", () => ({
  get: jest.fn(() =>
    Promise.resolve({
      data: [
        {
          id: 1,
          userId: 1,
          completed: false,
          title: "one",
        },
        {
          id: 2,
          userId: 1,
          completed: false,
          title: "two",
        },
      ],
    }),
  ),
}));

describe("Integration `AsyncComponent` tests", () => {
  it("should have empty state on mount", () => {
    const component = render(<AsyncComponent />);

    expect(component.container.innerHTML).toBe("<div>Loading...</div>");
  });

  it("should fetch data", async () => {
    const component = render(<AsyncComponent />);
    const todosNode = await waitForElement(() =>
      component.getByTestId("todos"),
    );

    expect(todosNode.innerHTML).toBe("<li>one</li><li>two</li>");
  });
});
