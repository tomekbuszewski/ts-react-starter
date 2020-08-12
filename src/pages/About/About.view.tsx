import * as React from "react";
import { Helmet } from "react-helmet";

const View: React.FunctionComponent = () => (
  <React.Fragment>
    <Helmet title="about" />
    Hello there
  </React.Fragment>
);

export { View };
