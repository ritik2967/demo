import React, { useState } from "react";

const IncreDecre = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>The Count is {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button
        onClick={() => (count > 0 ? setCount(count - 1) : setCount(count))}
      >
        -
      </button>
    </>
  );
};

export default IncreDecre;
