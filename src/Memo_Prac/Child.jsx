import React from "react";

function Child({ value }) {
  console.log("Child rendered");
  return <h2>{value}</h2>;
}


//click on  Change Text, Child still re-renders even though its value didn’t change.
// export default Child;



// click Change Text, Child does not re-render.
//click Increase Count, Child re-renders (because value changed).
export default React.memo(Child);

