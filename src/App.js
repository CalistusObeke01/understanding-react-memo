import { useState } from "react";
import { Bar } from "./Bar";
import "./styles.css";

/**
 * By default, React.memo() does a
 * shallow comparison of props and
 * objects of props for tracking props change.
 */

/**
 * At first render, the app consoles:
 * Mounting... (from the App.js file)
 * Bartender, can i have a bottle of whiskey (from the Bar.js file)
 *
 * Subsequent rendering is on demand
 * Mounting... (on every change made to the app)
 * Bartender, can i have a bottle of {chosen from ["Margarita"."Cosmopolitan","Whiskey","Mojito"]} (Only if the props is changed)
 *
 * Change in the counter state in App.js file will console
 * Mounting... (since the props in Bar.js is unchange)
 * **/

const options = [
  {
    label: "Margarita",
    value: "margarita"
  },
  {
    label: "Cosmopolitan",
    value: "cosmopolitan"
  },
  {
    label: "Whiskey",
    value: "whiskey"
  },
  {
    label: "Mojito",
    value: "mojito"
  }
];

export default function App() {
  const [order, setOrder] = useState("whiskey");
  const [counter, setCounter] = useState(0);

  console.log("Mounting...");
  return (
    <div>
      <h2 className="App">React memo</h2>
      <p>
        React memo is a Higher Order Component (HOC) that skips re-rendering a
        component if the props is unchange.
      </p>
      <hr />
      <br />
      <div>
        <b>Customer:</b>&nbsp; Can i have a bottle of &nbsp;
        <select value={order} onChange={(e) => setOrder(e.target.value)}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <Bar order={order} />

      <br />
      <button onClick={() => setCounter((c) => c + 1)}>
        Counter: &nbsp; {counter}
      </button>
    </div>
  );
}
