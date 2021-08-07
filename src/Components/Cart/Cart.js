import { useContext } from "react";

import classes from "./Cart.module.css";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";

import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const foodAmount = parseInt(cartCtx.totalAmount);
  const tax = 1;

  console.log(typeof cartCtx.totalAmount.toFixed(2));

  const totalAmount = foodAmount + tax;

  const onCartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const onCartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const onSubmit = () => {
    alert("ordering...");
  };

  const cartItem = (
    <ul className={classes.content}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          image={item.image}
          amount={item.amount}
          onCartItemAddHandler={onCartItemAddHandler.bind(null, item)}
          onCartItemRemoveHandler={onCartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.cart}>
        <div className={classes.header}>
          <div className={classes.heading}>Your Cart</div>
          <div className={classes["header-caption"]}>
            Food that you have selected.
          </div>
        </div>

        {cartItem}

        <div className={classes.totals}>
          <div className={classes["total-amount"]}>
            <p className={classes["total-amount-title"]}>Subtotal</p>
            <p className={classes["total-amount-number"]}>
              ${foodAmount.toFixed(2)}
            </p>
          </div>

          <div className={classes["total-amount"]}>
            <p className={classes["total-amount-title"]}>Delivery</p>
            <p className={classes["total-amount-number"]}>${tax}</p>
          </div>

          <div className={classes["total-seperator"]}></div>

          <div className={classes["total-amount"]}>
            <p className={classes["total-amount-title"]}>Total</p>
            <p className={classes["total-amount-number"]}>
              ${totalAmount.toFixed(2)}
            </p>
          </div>
        </div>

        <div className={classes.buttons}>
          <button
            className={[classes.btn, classes["btn-submit"]].join(" ")}
            onClick={onSubmit}
          >
            Place Order
          </button>
          <button
            className={[classes.btn, classes["btn-cancel"]].join(" ")}
            onClick={props.onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
