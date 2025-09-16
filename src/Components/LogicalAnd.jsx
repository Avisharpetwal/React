function Logical() {
  let name = "Avishar";

  return (
    <div>
      <h1>Welcome</h1>

      {/* if name is not empty, show greeting */}
      {name && <h2>Hello, {name} </h2>}
    </div>
  );
}

export default Logical;

export function Ternary() {
  let name = "";

  return (
    <div>
      <h1>Welcome</h1>
      {name ? <h2>Hello, {name}</h2> : <h2>No value </h2>}
    </div>
  );



}


export function LogicalOR() {
  let name = "";

  return (
    <div>
      <h1>Welcome</h1>
      <h2>{name || "No value "}</h2>
    </div>
  );
}




