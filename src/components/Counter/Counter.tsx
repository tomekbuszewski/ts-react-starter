import * as React from "react";
import { connect } from "react-redux";

import { increaseCounter, decreaseCounter } from "@redux/counter/actions";
import { IReduxStore } from "@redux/reducers";

interface Props {
  inc: () => void;
  dec: () => void;
  counter: number;
}

const CounterComponent = (props: Props) => (
  <React.Fragment>
    <p>Counter state: {props.counter}</p>
    <p>
      <button onClick={props.inc}>+</button>
      <button onClick={props.dec}>-</button>
    </p>
  </React.Fragment>
);

const mapState = (state: IReduxStore) => ({
  counter: state.counter,
});

const mapDispatch = {
  inc: increaseCounter,
  dec: decreaseCounter,
};

export const Counter = connect(mapState, mapDispatch)(CounterComponent);
