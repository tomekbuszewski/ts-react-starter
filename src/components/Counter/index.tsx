import * as React from "react";
import { connect } from "react-redux";

import { increaseCounter, decreaseCounter } from "@redux/counter/actions";
import { IReduxStore } from "@redux/reducers";

interface Props {
  inc: () => void;
  dec: () => void;
  counter: number;
}

class Counter extends React.Component<Props> {
  public render() {
    return (
      <React.Fragment>
        <p>Counter state: {this.props.counter}</p>
        <p>
          <button onClick={this.props.inc}>+</button>
          <button onClick={this.props.dec}>-</button>
        </p>
      </React.Fragment>
    );
  }
}

const mapState = (state: IReduxStore) => ({
  counter: state.counter,
});

const mapDispatch = {
  inc: increaseCounter,
  dec: decreaseCounter,
};

export default connect(
  mapState,
  mapDispatch,
)(Counter);
