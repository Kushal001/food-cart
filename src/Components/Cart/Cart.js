import classes from "./Cart.module.css";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";

// Temporary
import Sushi from "../../Assets/Img/Sushi.jpg";
import Schnitzel from "../../Assets/Img/Schnitzel.jpg";
import BarbequeBurger from "../../Assets/Img/BarbequeBurger.jpg";

const Cart = (props) => {
  const temporaryList = [
    {
      id: "f001",
      name: "Sushi",
      description: "finesh fish and veggies",
      price: "22.9",
      image: Sushi,
    },

    {
      id: "f002",
      name: "Schnitzel",
      description: "a german speciality",
      price: "15.5",
      image: Schnitzel,
    },
    {
      id: "f003",
      name: "Barbeque burger",
      description: "barbeque greatness with bread",
      price: "13",
      image: BarbequeBurger,
    },
  ];

  const cartItem = (
    <ul className={classes.content}>
      {temporaryList.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          image={item.image}
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
            <p className={classes["total-amount-title"]}>
              Subtotal
            </p>
            <p className={classes["total-amount-number"]}>
              $25
            </p>
          </div>

          <div className={classes["total-amount"]}>
            <p className={classes["total-amount-title"]}>
              Delivery
            </p>
            <p className={classes["total-amount-number"]}>
              $1.25
            </p>
          </div>

          <div className={classes["total-seperator"]}></div>

          <div className={classes["total-amount"]}>
            <p className={classes["total-amount-title"]}>
              Total
            </p>
            <p className={classes["total-amount-number"]}>
              $26.25
            </p>
          </div>
        </div>

        <div className={classes.buttons}>
          <button
            className={[
              classes.btn,
              classes["btn-submit"],
            ].join(" ")}
          >
            Place Order
          </button>
          <button
            className={[
              classes.btn,
              classes["btn-cancel"],
            ].join(" ")}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
