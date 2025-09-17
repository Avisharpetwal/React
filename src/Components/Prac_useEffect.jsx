// function prac(){
//     // function handleCounter(){
//     //     console.log("Counter Clicked");
        
//     // }
//     // function handleData(){
//     //     console.log("Data Clicked");
        
//     // }
//     return (
//         <div>
//         <h1>Use Effect</h1>
//         {/* <h1>Counter:{count}</h1> */}
//         {/* <h2>Data:{data}</h2> */}
//         </div>
//     )
// }

// export default prac

import React, { useEffect } from 'react'

export default function Prac_useEffect({count,data}) {
    const handleCounter=()=>{
        console.log("Counter Clicked")
    }

    const handleData=()=>{
        console.log("Data Clicked");
    }
    //run Only One Time
    useEffect(()=>{
        handleCounter();
        handleData();

    },[])

    //Run when Count State Chnages
    useEffect(()=>{
        handleCounter();
    },[count])

    // Run Both Function When Data State Changes
    useEffect(()=>{
        handleCounter();
        handleData();

    },[data])
    

  return (
    <div>
      <h1>Use Effect</h1>
      <h1>Counter:{count}</h1>
      <h2>Data:{data}</h2>
    </div>
  )
}
