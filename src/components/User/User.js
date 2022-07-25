import classes from "./User.module.css";

const User = (props) => {
  function deleteUserHandler() {
    console.log(props.user.id);
    props.deleteUserHandler(props.user.id);
  }
  return (
    <div className={classes.user} onClick={deleteUserHandler}>
      <h3>{props.user.username}</h3>
      <span>Age : {props.user.age}</span>
    </div>
  );
};

export default User;
