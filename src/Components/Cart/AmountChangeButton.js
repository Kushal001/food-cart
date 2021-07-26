import classes from "./AmountChangeButton.module.css";

const AmountChangeButton = (props) => {
  return (
    <button className={classes.btn} onClick={props.clicked}>
      {props.children}
    </button>
  );
};

export default AmountChangeButton;
