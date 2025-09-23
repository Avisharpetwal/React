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
import Prac_useEffect from "./Components/prac_useEffect";
import UserList from "./Components/Fetching_data";
import DataFetching from "./Components/Fetching_data";
import College from "./Components/ContextApi/College";
import ContextApi from "./Components/ContextApi/ContextApi";
import All from "./Product_list/All";

import MiniSignupForm from "./Mini_Project/Mini_Sign_up";
import Counter_use_Reducer from "./Components/Use_Reducer/Counter_use_Reducer";
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


    const[count1,setCounter1]=useState(0);
    const[data1,setData1]=useState(0)

    return (
        <div>
      {/* <h1>Hello World</h1> */}
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



      {/* <Skills/>
      <Logical/>
      <Listapp/> */}





      {/* <Prac_useEffect count={count1} data={data1} />
      <button onClick={()=>setCounter1(count1+1)}> Counter Button</button> 
      <button onClick={()=>setData1(data1+1)}>Data Button</button>  */}





    {/* <Sign_up/> */}




    {/* <UserList/> */}




    {/* <All/> */}





     
    {/* <ContextApi/> */}
  
    <MiniSignupForm/>




 

{/* <Counter_use_Reducer/> */}












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
