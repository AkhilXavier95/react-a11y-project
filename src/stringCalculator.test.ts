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

  test("ignores non-numeric values", () => {
    expect(calculateString("1,abc,3")).toBe(4);
  });

  test("supports custom single-character delimiter", () => {
    expect(calculateString("//;\n1;2")).toBe(3);
  });

  test("negatives throw error with all negatives listed", () => {
    expect(() => calculateString("1,-2,3,-4")).toThrow(
      "Negatives not allowed: -2,-4"
    );
  });

  test("numbers >1000 are ignored", () => {
    expect(calculateString("2,1001")).toBe(2);
    expect(calculateString("1000,1001,5")).toBe(1005);
  });

  test("supports custom delimiters of any length", () => {
    expect(calculateString("//[***]\n1***2***3")).toBe(6);
    expect(calculateString("//[***][%%%]\n1***2%%%3")).toBe(6);
  });
});
