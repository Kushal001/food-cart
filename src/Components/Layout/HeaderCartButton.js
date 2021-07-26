import { useContext } from "react";

import classes from "./HeaderCartButton.module.css";

import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const cartNumber = cartCtx.items.reduce(
    (curNum, item) => {
      return curNum + item.amount;
    },
    0
  );

  return (
    <button
      className={classes["header-button"]}
      onClick={props.clicked}
    >
      <span className={classes["button-title"]}>
        Your Cart
      </span>

      <span className={classes["cart-number"]}>
        {cartNumber}
      </span>
    </button>
  );
};

export default HeaderCartButton;
