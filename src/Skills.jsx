import { useState } from "react"
function Skills() {
    const[skills,setSkills]=useState([])
    const Handleskills=(event)=>{
        if(event.target.checked){
            setSkills([...skills,event.target.value])
        }
        else{
            setSkills([...skills.filter((items)=>items!=event.target.value)])
        }

    }
    return (
        <div>
            <h1>Check Box</h1>
            <input onChange={Handleskills} type="checkbox" placeholder="Enter Your Name" id="php" value="Php"></input>
            <label htmlFor="php">PHP</label>
            <br></br>

            <input onChange={Handleskills} type="checkbox" placeholder="Enter Your Name" id="js" value="Js"></input>
            <label htmlFor="js">JAVASCRIPT</label>
            <br></br>

            <input onChange={Handleskills} type="checkbox" placeholder="Enter Your Name" id="react" value="React"></input>
            <label htmlFor="react">REACT</label>
            <br></br>

            <input  onChange={Handleskills} type="checkbox" placeholder="Enter Your Name" id="java" value="Java"></input>
            <label htmlFor="Java">JAVA</label>
            <br></br>

            <input onChange={Handleskills} type="checkbox" placeholder="Enter Your Name" id="c++" value="C++"></input>
            <label htmlFor="c++">C++</label>
            <h3>{skills.toString()}</h3>

        </div>
    )
}
export default Skills