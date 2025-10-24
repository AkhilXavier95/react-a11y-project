import { describe, test, expect } from "vitest";
import { calculateString } from "./stringCalculator";

describe("String Calculator", () => {
  test("empty string returns 0", () => {
    const result = calculateString("");
    expect(result).toBe(0);
  });
});
