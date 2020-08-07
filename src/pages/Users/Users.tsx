import * as React from "react";
import ky from "ky-universal";
import { View } from "./Users.view";

const Users: React.FunctionComponent = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const data = await ky("https://test-endpoint.com/users");
      setUsers(await data.json());
    })();
  }, []);

  return <View users={users} />;
};

export { Users };
