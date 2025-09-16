import { useState } from "react"
function Hide(){
    const [display,setdisplay]=useState(false)
    return(
        <div>
           
        <h1>Toggle In Js</h1>
        {
            // display? <h1>Avishar Petwal</h1>:<h1>No User Name</h1>  
            display? <h1>Avishar Petwal</h1>:null
        }
        <button onClick={()=>setdisplay(!display)}>Toogle </button>
        
        </div>
    )

}
export default Hide