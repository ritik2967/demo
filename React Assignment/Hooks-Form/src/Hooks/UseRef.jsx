import React, { useRef, useState } from "react";

const UseRef = () => {
  const [count, setCount] = useState(0);
  const renderRef = useRef(0);
  const inputRef = useRef(null);
  const IncrementCount = () => {
    setCount((pre) => pre + 1);
  };
  const focusInput = () => {
    inputRef.current.focus();
  };

  renderRef.current += 1;
  return (
    <>
      <h1>Input Useref Example</h1>
      <p>The Count is {count}</p>
      <p>The Component is render:.... {renderRef.current}</p>
      <button onClick={IncrementCount}>Increment</button>
      <input
        ref={inputRef}
        type="text"
        name="count"
        id="count"
        placeholder="click to focus"
      />
      <button onClick={focusInput}>Focus</button>
    </>
  );
};

export default UseRef;
