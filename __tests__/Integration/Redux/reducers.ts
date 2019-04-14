import { appReducers } from "@redux/reducers";

describe("Redux `reducers` tests", () => {
  it("should contain `counter` reducer", () => {
    expect(Object.keys(appReducers)).toContain("counter");
  });

  it("should contain `users` reducer", () => {
    expect(Object.keys(appReducers)).toContain("users");
  });
});
