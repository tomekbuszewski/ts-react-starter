import { Store } from "redux";

import { makeStore } from "@redux/store";
import { increaseCounter, decreaseCounter } from "@redux/counter/actions";

describe("Redux `counter` tests", () => {
  let store: Store;

  beforeEach(() => {
    store = makeStore();
  });

  it("should have reducer set as 0 on init", () => {
    expect(store.getState().counter).toBe(0);
  });

  it("should increase the value when proper function is dispatched", () => {
    expect(store.getState().counter).toBe(0);
    store.dispatch(increaseCounter());
    expect(store.getState().counter).toBe(1);
  });

  it("should decrease the value when proper function is dispatched", () => {
    expect(store.getState().counter).toBe(0);
    store.dispatch(decreaseCounter());
    expect(store.getState().counter).toBe(-1);
  });
});
