import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("String Calculator - Accessibility", () => {
  test("renders input with proper label and hint", () => {
    render(<App />);
    const input = screen.getByLabelText(/string calculator input/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("aria-describedby", "input-hint");
  });

  test("renders calculate button with accessible role", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /calculate/i });
    expect(button).toBeInTheDocument();
  });

  test("result section is announced via aria-live region", () => {
    render(<App />);
    const resultRegion = screen.getByRole("status");
    expect(resultRegion).toBeInTheDocument();
  });

  test("supports keyboard interaction (Enter and Escape)", () => {
    render(<App />);
    const input = screen.getByLabelText(/string calculator input/i);
    const button = screen.getByRole("button", { name: /calculate/i });

    fireEvent.change(input, { target: { value: "1,2,3" } });
    expect(input).toHaveValue("1,2,3");

    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
    expect(button).toBeEnabled();

    fireEvent.keyDown(input, { key: "Escape", code: "Escape" });
    expect(input).toHaveValue("");
  });
});
