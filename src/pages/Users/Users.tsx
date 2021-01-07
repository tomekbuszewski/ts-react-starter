import * as React from "react";
import { fetch } from "@services/fetch.worker";

import { API_URL } from "@config/config";
import { USERS_ENDPOINT } from "@config/endpoints";

import { View } from "./Users.view";
import { IUser } from "@pages/Users/Users.typings";

const Users: React.FunctionComponent = () => {
  const [users, setUsers] = React.useState<IUser[]>([]);

  React.useEffect(() => {
    (async () => {
      const data = await fetch<IUser[]>(`${API_URL}/${USERS_ENDPOINT}`);

      setUsers(data);
    })();
  }, []);

  return <View users={users} />;
};

export { Users };
