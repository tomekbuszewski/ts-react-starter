import * as React from "react";
import { hot } from "react-hot-loader";

import Paragraph from "../Paragraph";

class Application extends React.Component {
  public render(): React.ReactNode {
    return (
      <Paragraph>Hello</Paragraph>
    );
  }
}

export default hot(module)(Application);
