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

class Users extends React.Component<Props> {
  public componentDidMount() {
    if (this.props.state === null) {
      this.props.get();
    }
  }

  public render() {
    if (this.props.state === null) {
      return <div data-testid="state-loading">Loading users...</div>;
    }

    if (this.props.state !== 200) {
      return <div data-testid="state-error">Error</div>;
    }

    return (
      <React.Fragment>
        <h2>Users:</h2>
        <ul data-testid="state-success">
          {this.props.users.map((user: IReduxUser) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

const mapState = (state: IReduxStore) => ({
  ...state.users,
});

const mapDispatch = {
  get: getUsers,
};

export default connect(
  mapState,
  mapDispatch,
)(Users);
