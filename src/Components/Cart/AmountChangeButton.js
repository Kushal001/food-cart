import classes from "./AmountChangeButton.module.css";

const AmountChangeButton = (props) => {
  return (
    <button className={classes.btn}>
      {props.children}
    </button>
  );
};

export default AmountChangeButton;
