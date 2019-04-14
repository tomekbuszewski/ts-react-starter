import { makeStore } from "@redux/store";

describe("Redux `store` tests", () => {
  it ("should create store", () => {
    const store = Object.keys(makeStore());
    expect(store).toContain("dispatch");
    expect(store).toContain("getState");
    expect(store).toContain("replaceReducer");
    expect(store).toContain("subscribe");
  })
});
