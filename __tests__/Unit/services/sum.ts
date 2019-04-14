import sum from "@services/sum";

describe("`Sum` service tests", () => {
  it("should add two numbers", () => {
    expect(sum(2, 2)).toBe(4);
  });

  it("should throw an error when one of the arguments is missing", () => {
    expect(() => {
      // @ts-ignore
      sum();
    }).toThrow("Both arguments needs to be provided!");
  });

  it("should throw an error when parameters have wrong type", () => {
    expect(() => {
      // @ts-ignore – I am disabling this to test erroneous execution
      sum("a", "b");
    }).toThrow("Both arguments has to be numbers");
  });
});
