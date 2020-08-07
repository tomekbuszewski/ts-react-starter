import * as React from "react";
import { Switch, Route } from "react-router-dom";

import { index, about, users } from "@config/routes";

const Routes: React.FunctionComponent = () => (
  <main>
    <Switch>
      <Route {...index} />
      <Route {...about} />
      <Route {...users} />
    </Switch>
  </main>
);

export { Routes };
