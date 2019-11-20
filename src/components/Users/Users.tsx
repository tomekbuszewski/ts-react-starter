import * as React from "react";
import { connect } from "react-redux";

import { getUsers } from "@redux/users/actions";
import { IReduxUser } from "@redux/users/reducer";
import { IReduxStore } from "@redux/reducers";

interface Props {
  get: () => void;
  state: number | null;
  users: IReduxUser[];
}

export const UsersComponent = (props: Props) => {
  React.useEffect(() => {
    if (props.state === null) {
      props.get();
    }
  }, []);

  if (props.state === null) {
    return <div data-testid="state-loading">Loading users...</div>;
  }

  if (props.state !== 200) {
    return <div data-testid="state-error">Error</div>;
  }

  return (
    <React.Fragment>
      <h2>Users:</h2>
      <ul data-testid="state-success">
        {props.users.map((user: IReduxUser) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

const mapState = (state: IReduxStore) => state.users;

const mapDispatch = {
  get: getUsers,
};

export const Users = connect(mapState, mapDispatch)(UsersComponent);
