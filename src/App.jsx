import Login from "./UserComponents"
import {Profile,Userkey} from "./UserComponents"
import { use, useState } from "react"
import Counter from "./Counter";
import Hide from "./Hide";
import Condtion from "./Conditions";
import User from "./User";
import Student from "./Student";
import Wrapper from "./Wrapper";
import Skills from "./Skills";
import Logical from "./Components/LogicalAnd";
import Listapp from "./Components/Exercise3";
function App() {

  // const [fruit,setFruit]=useState("Apple");
  // const handlefruit=()=>{
  //   setFruit("Banana")
  // }


  // function callFunc(){
    // alert("Friut Click")
  // }
  // function callFunc(){
  //   alert("Friut  Not Click")
  // }
  // function callFunc1(name){
  //   alert(name)
  // }
     let username="Avishar Petwal";
     let age=21;

    let Userobj={
      name:"Avp",
      age:22
    }
    let Userobj2={
      name:"Sonu",
      age:24
    }
    let collageName=["Graphic Era","IIT","NIT","MIT","DIT"]
    const [student,setStudent]=useState("Avishar")

    return (
        <div>
      <h1>Hello World</h1>
      {/* {sum()} */}
      {/* <Fruit/> */}
      {/* <Login/>
      <Profile/>
      <Userkey/>
      <Abc/> */}
      {/* <button onClick={callFunc}>Fruit Button</button> */}
      {/* <button onClick={()=>callFunc1("Avishar")}>Name Button</button> */}
      {/* <h1>{fruit}</h1> */}
      {/* <button onClick={handlefruit}>change Fruit Button</button> */}
      {/* <Counter/>
      <Hide/> */}
      {/* <Condtion/> */}
      
      {/* <User name={"Avishar"} age={22}/> */}
      {/* <User name={username} age={age}/> */}
      {/* <User user={Userobj}/>
      <User user={Userobj2}/> */}
      {/* <User names={collageName}/>   */}
      {/* <Student name={student}/>
      <button onClick={()=>setStudent("Tarun")}>Change Name</button> */}



      {/* <Wrapper>
        <h1>Hello Everyone </h1>
        <h1>Hello Everyone </h1>
        <h1>Hello Everyone </h1>
      </Wrapper>
      <Wrapper>
        <h1>I Am Avishar Petwal How Are You</h1>
      </Wrapper> */}
      <Skills/>
      <Logical/>
      <Listapp/>

    </div>
  
   

  )
}

// function Fruit(){
//   return(
//     <h1>Apple</h1> 
//   )
// }

// function sum (){
//   return 10+10
// }


function Abc(){
  const name="Avishar";
  const x=10;
  const y=20;
  return(
    <div>
      <h1>Hello {name}</h1>
      <h2>{x*y}</h2>
    </div>

  )
}

export default App
