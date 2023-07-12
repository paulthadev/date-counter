import { useState } from "react";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  // STEP
  function handleStepChange(e) {
    setStep(Number(e.target.value));
  }
  //

  // COUNT
  function handleCountChange(e) {
    setCount(Number(e.target.value));
  }

  function countMinus() {
    setCount((count) => count - step);
  }
  function countPlus() {
    setCount((count) => count + step);
  }
  //
  // RESET
  function reset() {
    setCount(0);
    setStep(1);
  }

  const date = new Date(); // today
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={handleStepChange}
        />
        {step}
      </div>

      <div>
        <button className="btn" onClick={countMinus}>
          -
        </button>
        <input
          className="count-type"
          type="text"
          value={count}
          onChange={handleCountChange}
        />
        <button className="btn" onClick={countPlus}>
          +
        </button>
      </div>

      <div>
        <p>
          {count === 0 ? "Today" : `${count} days from today`} is{" "}
          {date.toDateString()}
        </p>

        {count !== 0 || step !== 1 ? (
          <button className="btn" onClick={reset}>
            RESET
          </button>
        ) : null}
      </div>
    </div>
  );
}
