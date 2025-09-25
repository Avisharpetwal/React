import React, { useState, useCallback } from "react";

export default function UseCallbackDemo() {
  const [count, setCount] = useState(0);

  // function will never be recreated on re-renders
  const increment = useCallback(() => {
    setCount((prev) => prev + 1); 
  }, []);


  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increase</button>
    </div>
  );
}
