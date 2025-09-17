import React, { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState(null)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []); // runs once after component mounts

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((items) => (
          <li key={items.id}>{items.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default UserList;





 

