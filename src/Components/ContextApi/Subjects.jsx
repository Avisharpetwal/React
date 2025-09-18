import { useContext } from "react"
import { SubjectContext } from "./ContextDatas"

function SubjectComponent(){   
    const subjects=useContext(SubjectContext) 
    // const subject=useContext(SubjectContext)
    return(
        <div style={{backgroundColor:"yellow", padding:10}}>
            <h1>Student Subject is: {SubjectContext}</h1>
        </div>
    )
}

export default SubjectComponent