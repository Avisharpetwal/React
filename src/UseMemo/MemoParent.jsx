import React, { useState } from "react";
import ExpensiveComponent from "./ExpensiveComponent";

export default function MemoParent() {
  const [count, setCount] = useState(0);

  return (
    <div> 
      <ExpensiveComponent/>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <h2>Count: {count}</h2>

      
    </div>
  );
}
