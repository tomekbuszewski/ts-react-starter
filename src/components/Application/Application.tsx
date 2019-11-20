import * as React from "react";
import { hot } from "react-hot-loader";
import { Provider } from "react-redux";

import store from "@redux/store";

import { AsyncComponent, Paragraph, Users } from "@components";

export const ApplicationComponent = () => (
  <Provider store={store}>
    <Paragraph>Hello</Paragraph>
    <Users />
    <AsyncComponent />
  </Provider>
);

export const Application = hot(module)(ApplicationComponent);
