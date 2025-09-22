import { useReducer } from "react";
const initialState = { count: 0 };

function reducer(data, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: data.count + 1 };
    case "DECREMENT":
      return { count: data.count - 1 };
    case "RESET":
      return {count:data.count=0}
  }
}

function Counter_use_Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}

export default Counter_use_Reducer;