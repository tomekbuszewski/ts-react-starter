import React from "react";

import { API_URL } from "@config/config";
import { USERS_ENDPOINT } from "@config/endpoints";

import { fetch } from "@services/fetch.worker";

import { IUser } from "./Users.typings";
import { View } from "./Users.view";

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
