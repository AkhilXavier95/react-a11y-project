import { describe, test, expect } from "vitest";
import { calculateString } from "./stringCalculator";

describe("String Calculator", () => {
  test("empty string returns 0", () => {
    const result = calculateString("");
    expect(result).toBe(0);
  });

  test("single number returns the value itself", () => {
    const result = calculateString("5");
    expect(result).toBe(5);
  });

  test("string with multiple numbers with comma delimited returns sum", () => {
    expect(calculateString("1,2,3")).toBe(6);
    expect(calculateString("1,3,5")).toBe(9);
  });

  test("supports newline as delimiter", () => {
    expect(calculateString("1\n2,3")).toBe(6);
  });
});
