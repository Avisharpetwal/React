import React, { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div>
      <Child value={count} />
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setText(text + "a")}>Change Text</button>
      <p>Text: {text}</p>
    </div>
  );
}
