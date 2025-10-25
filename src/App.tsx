import { useEffect, useState } from "react";
import { calculateString } from "./stringCalculator";

import "./styles/app.css";

const App = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const sum = calculateString(input);
    setResult(sum);
  };

  const handleClear = () => {
    setInput("");
    setResult(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setInput("");
        setResult(null);
      }
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleCalculate();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [input]);

  return (
    <main>
      <header>
        <img
          src="https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={600}
          height={400}
          alt="ball of string"
        />

        <h2>String Calculator</h2>
      </header>

      <section>
        <h1>Enter numbers</h1>

        <label htmlFor="calculator-input">
          Input your string of numbers and delimiters:
        </label>

        <textarea
          id="calculator-input"
          name="calculator-input"
          aria-label="String calculator input"
          aria-describedby="input-hint"
          placeholder="Enter numbers"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleCalculate();
            }
          }}
        />

        <p id="input-hint" className="input-hint">
          You can use commas, newlines, or custom delimiters (e.g.{" "}
          <code>//[***]</code>).
        </p>

        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <button type="button" onClick={handleCalculate}>
            Calculate
          </button>
          <button className="button btn-clear" onClick={handleClear}>
            Clear
          </button>
        </div>
      </section>

      <section role="status" aria-live="polite" className="result">
        <p>
          Result: <span aria-live="polite">{result ?? 0}</span>
        </p>
      </section>
      <div role="alert">
        <p>Make sure you enter numbers correctly!</p>
      </div>
      <details>
        <summary>Keyboard Shortcuts — expand for details</summary>
        <ul>
          <li>
            <kbd>Enter</kbd> - Calculate result
          </li>
          <li>
            <kbd>Shift</kbd> + <kbd>Enter</kbd> - Add new line in textarea
          </li>
          <li>
            <kbd>Escape</kbd> - Clear input and result
          </li>
        </ul>
      </details>
    </main>
  );
};

export default App;
