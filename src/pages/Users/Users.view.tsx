import * as React from "react";
import { PAGE_USERS_TESTING_IDS } from "@pages/Users/Users.typings";

const View: React.FunctionComponent<{
  users: { name: string; id: number }[];
}> = ({ users }) => {
  if (users.length > 0) {
    return (
      <ul data-testid={PAGE_USERS_TESTING_IDS.USERS_LIST}>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }

  return (
    <div data-testid={PAGE_USERS_TESTING_IDS.NO_USERS}>No users available</div>
  );
};

export { View };
