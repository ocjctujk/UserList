import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./User.module.css";

const AddUser = (props) => {
  const [username, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [validity, setValidity] = useState({ message: "", valid: true });

  function addUserHandler(event) {
    event.preventDefault();
    if (username.trim() === "" || age.trim() === "") {
      setValidity({message: `Input can't be empty`,valid: false});
      return;
    }
    if (+age < 1) {
        setValidity({message: `Not a valid age, valid age is (1-120 years)`,valid: false});

      return;
    }
    console.log(username, age);
    props.addUserHandler(username, age);
    setUserName("");
    setAge("");
  }
  function usernameChangeHandler(event) {
    setUserName(event.target.value);
  }
  function ageChangeHandler(event) {
    setAge(event.target.value);
  }

  return (
    <div>
      <ErrorModal
        setValidity={setValidity}
        header="Error"
        message={validity.message}
        buttonText="Okay"
        className={validity.valid ? classes.hidden : ""}
      />
      <Card>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Name</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={usernameChangeHandler}
          ></input>
          <label htmlFor="age">Age (years)</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
