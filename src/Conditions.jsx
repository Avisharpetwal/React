import { useState } from "react";
function Condtion(){
    const[count,setCount]=useState(0)
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Counter</button>
            <button onClick={()=>setCount(0)}> Rseset Counter</button>

            <h1>Counter Value{count}</h1>
            {
            count==0?<h1>Condtion 1</h1>
            :count==1?<h1>Condtion 1</h1>
            :count==2?<h1>Condtion 2</h1>
            :count==3?<h1>Condtion 3</h1>
            :count==4?<h1>Condtion 4</h1>
            :null
            }
        </div>
    )
}

export default Condtion