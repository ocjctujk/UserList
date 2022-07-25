import React, { useState } from "react";
import AddUser from "./components/User/addUser";
import UserList from "./components/User/UsersList";

const dummyUsers = [
  { id: "1", username: "Maharshi", age: 22 },
  { id: "2", username: "Mike", age: 29 },
];

function App() {
  const [users, setUsers] = useState(dummyUsers);

  function addUserHandler(username, age) {
    setUsers((prevUsersList) => {
      return [
        { id: Math.random().toString(), username: username, age: age },
        ...prevUsersList,
      ];
    });
  }
  function deleteUserHandler(id) {
    setUsers((prevUsersList) => {
      return prevUsersList.filter((user) => {
        return user.id !== id;
      });
    });
  }

  return (
    <div>
      <AddUser addUserHandler={addUserHandler} />
      <UserList userList={users} deleteUserHandler={deleteUserHandler} />
    </div>
  );
}

export default App;
