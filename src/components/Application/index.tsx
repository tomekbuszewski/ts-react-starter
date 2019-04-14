import * as React from "react";
import { hot } from "react-hot-loader";
import { Provider } from "react-redux";

import store from "@redux/store";

import Paragraph from "../Paragraph";
import Counter from "../Counter";
import Async from "../AsyncComponent";

class Application extends React.Component {
  public render(): React.ReactNode {
    return (
      <Provider store={store}>
        <Paragraph>Hello</Paragraph>
        <Counter />
        <Async />
      </Provider>
    );
  }
}

export default hot(module)(Application);
