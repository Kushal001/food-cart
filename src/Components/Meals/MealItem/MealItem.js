import { useContext } from "react";

import classes from "./MealItem.module.css";

import MealItemForm from "./MealItemForm";

import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartContext = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      description: props.description,
      price: props.price,
      image: props.image,
      amount: amount,
    });
  };

  return (
    <div className={classes.meals}>
      <div className={classes.left}>
        <div className={classes.image}>
          <img src={props.image} alt={`${props.name}`} />
        </div>

        <div className={classes["food-descriptions"]}>
          <h2 className={classes["food-title"]}>
            {props.name}
          </h2>
          <p className={classes["food-description"]}>
            {props.description}
          </p>
          <p className={classes["food-price"]}>
            ${`${props.price}`}
          </p>
        </div>
      </div>
      <div className={classes.cart}>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </div>
  );
};

export default MealItem;
