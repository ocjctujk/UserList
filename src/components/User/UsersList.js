import User from "./User";



const UserList = (props) => {

  return (
    <div>
    <h1>Users</h1>
      {props.userList.map((user) => {
        return (<User user={user} key={user.id} deleteUserHandler={props.deleteUserHandler}></User>);
      })}
    </div>
  );
};

export default UserList;
