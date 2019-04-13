import * as React from "react";
import { render } from "react-testing-library";

import Application from "@components/Application";

describe("`Application` component tests", () => {
  it("matches snapshot", () => {
    const component = render(<Application />);

    expect(component).toMatchSnapshot();
  });
});
