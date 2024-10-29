/* eslint-disable react/prop-types */
import "./Counter.css";

export default function Counter({ count, countSetter }) {
  function handleSetNumber(inp) {
    if (inp >= 0 && inp <= 1000 && inp % 1 === 0) {
      countSetter(inp);
    }
  }
  return (
    <div className="counter-box">
      <button
        className="counter-elements dec"
        onClick={() => handleSetNumber(count - 1)}
      >
        -
      </button>
      <input
        className="counter-elements inp"
        type="number"
        value={count || 0}
        onChange={(e) => handleSetNumber(+e.target.value)}
      />
      <button
        className="counter-elements inc"
        onClick={() => handleSetNumber(count + 1)}
      >
        +
      </button>
    </div>
  );
}
