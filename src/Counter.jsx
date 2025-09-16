import { useState } from "react";
function Counter() {
    const [count,setCount]=useState(0)
    const[Att,setAtt]=useState(10)
return(
    <div>
        <h1>Counter Value Increment:  {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment Count</button>
        <button onClick={()=>setCount(count-1)}>Decrement Count</button>
        <button onClick={()=>setCount(0)}>Reset Count</button>
        <h1>Att Value:  {Att}</h1>
        <button onClick={()=>setAtt(Att+1)}>Att Count</button>

    </div>
)
}
export default Counter; 