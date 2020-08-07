import * as React from "react";
import ky from "ky-universal";

import { API_URL } from "@config/config";
import { USERS_ENDPOINT } from "@config/endpoints";

import { View } from "./Users.view";
import { IUser } from "@pages/Users/Users.typings";

const Users: React.FunctionComponent = () => {
  const [users, setUsers] = React.useState<IUser[]>([]);

  React.useEffect(() => {
    (async () => {
      const data = await ky(`${API_URL}/${USERS_ENDPOINT}`);

      setUsers(await data.json());
    })();
  }, []);

  return <View users={users} />;
};

export { Users };
