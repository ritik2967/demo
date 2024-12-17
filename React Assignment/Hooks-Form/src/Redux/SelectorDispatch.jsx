import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./store";

const SelectorDispatch = () => {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>React Redux Counter</h1>
        <h2>Count: {count}</h2>
        <div style={{ margin: "20px" }}>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button
            onClick={() => dispatch(decrement())}
            style={{ margin: "0 10px" }}
          >
            Decrement
          </button>
          <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default SelectorDispatch;
