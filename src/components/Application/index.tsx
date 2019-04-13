import * as React from "react";
import { hot } from "react-hot-loader";

class Application extends React.Component {
  public render(): React.ReactNode {
    return <div>Hello there</div>
  }
}

export default hot(module)(Application);
