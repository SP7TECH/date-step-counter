import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date(new Date().toDateString());
  date.setDate(date.getDate() + count);

  return (
    <>
      <h1>Play with the step and the count</h1>
      <div className="card">
        <button onClick={() => setStep((step) => step + 1)}>
          Step: {step}
        </button>
      </div>

      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count - step);
          }}
        >
          -
        </button>

        <button style={{ margin: "0 10px" }}>Count: {count}</button>

        <button
          onClick={() => {
            setCount((count) => count + step);
          }}
        >
          +
        </button>
      </div>
      <p className="read-the-docs">
        {count === 0
          ? `Today is`
          : count > 0
          ? `${count} ${count === 1 ? "day" : "days"} from today is`
          : `${Math.abs(count)} days ago was`}{" "}
        {date.toDateString()}
      </p>
    </>
  );
}

export default App;
