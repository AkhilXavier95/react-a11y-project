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
});
