import { useState } from "react"
import College from "./College"
import { SubjectContext } from "./ContextDatas"

function ContextApi(){
    const[subject,setSubject]=useState()

    return (
    <div style={{background:"grey", padding:10}}>
        <SubjectContext.Provider value={subject}>
            <select onChange={(event)=>setSubject(event.target.value)}>
                <option value="">Select Subject</option>
                <option value="Maths">Maths</option>
                <option value="Hindi"> Hindi</option>
                <option value="History">History</option>
            </select>
            <h1>Context Api</h1>
            <College/>
        </SubjectContext.Provider>
    </div>
    )

}

export default ContextApi