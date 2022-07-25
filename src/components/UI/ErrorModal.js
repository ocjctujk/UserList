import Button from "./Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  function closeModalhandler() {
    props.setValidity({ message: "", valid: true });
  }

  return (
    <div className={`${classes.modal} ${props.className}`}>
      <h2>{props.header}</h2>
      <p>{props.message}</p>
      <Button onClick={closeModalhandler}>{props.buttonText}</Button>
    </div>
  );
};

export default ErrorModal;
