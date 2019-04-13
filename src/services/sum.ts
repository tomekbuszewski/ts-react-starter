export default function sum(a: number, b: number): number {
  if (!a || !b) {
    throw new Error("Both arguments needs to be provided!");
  }

  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments has to be numbers!");
  }

  return a + b;
}
