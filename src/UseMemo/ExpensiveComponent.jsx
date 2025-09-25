import React, { useMemo } from "react";

export default function ExpensiveComponent() {
 
  const sum = () => {
    console.log("Calculating sum...");
    let i = 0;
    for (i = 0; i <= 1000000000; i++) {
      i+=1
    }
    return i;
  };

  const total=useMemo(()=>sum(),[])
  // const total=sum()

  return (
    <div>
      <h3>Expensive Calculation Result: {total}</h3>
    </div>
  );
}
