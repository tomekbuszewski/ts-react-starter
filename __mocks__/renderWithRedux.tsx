import * as React from "react";
import { Provider } from "react-redux";
import { render } from "react-testing-library";

import { Store } from "redux";

export function renderWithRedux(content: React.ReactNode, store: Store) {
  return {
    ...render(<Provider store={store}>{content}</Provider>),
  };
}