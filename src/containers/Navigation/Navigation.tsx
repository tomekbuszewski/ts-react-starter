import * as React from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "@config/routes";

const Navigation: React.FunctionComponent = () => (
  <nav>
    <Link to={ROUTES.HOME}>Index</Link>
    <Link to={ROUTES.ABOUT}>About</Link>
    <Link to={ROUTES.USERS}>Users (fetch)</Link>
  </nav>
);

export { Navigation };
