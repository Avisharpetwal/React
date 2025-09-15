import Login from "./UserComponents"
import {Profile,Userkey} from "./UserComponents"
function App() {

  function callFunc(){
    alert("Friut Click")
  }
  // function callFunc(){
  //   alert("Friut  Not Click")
  // }
  function callFunc1(name){
    alert(name)
  }
    return (
        <div>
      <h1>Hello World</h1>
      {/* {sum()} */}
      {/* <Fruit/> */}
      {/* <Login/>
      <Profile/>
      <Userkey/>
      <Abc/> */}
      <button onClick={callFunc}>Fruit Button</button>
      <button onClick={()=>callFunc1("Avishar")}>Name Button</button>
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
