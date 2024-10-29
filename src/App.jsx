import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import LoadingComponent from "./components/LoadingComponent";

const FETCH_API =
  "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/counter1.json";

const PUT_API =
  "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json";

async function getCount(setCount) {
  try {
    const resp = await fetch(FETCH_API);
    const data = await resp.json();
    setCount(data || 0);
  } catch (err) {
    console.error(err);
  }
}

export default function App() {
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    getCount(setCount);
  }, []);

  async function handleModifyCount(newCount) {
    setLoading(true);
    try {
      const resp = await fetch(PUT_API, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ count: newCount }),
      });
      const data = await resp.json();
      console.log("kj", data);
      setCount(newCount);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  console.log(count);
  return (
    <div className="main-container">
      <div className="counter-container">
        <LoadingComponent loading={loading} />
        <Counter countSetter={handleModifyCount} count={count} />
        <h2>Counter Value : {count}</h2>
      </div>
    </div>
  );
}
