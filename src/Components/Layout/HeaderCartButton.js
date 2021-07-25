import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button
      className={classes["header-button"]}
      onClick={props.clicked}
    >
      <span className={classes["button-title"]}>
        Your Cart
      </span>

      <span className={classes["cart-number"]}>5</span>
    </button>
  );
};

export default HeaderCartButton;
