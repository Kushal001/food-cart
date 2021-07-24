import React from "react";

import classes from "./CartItem.module.css";

import { ReactComponent as PlusSvg } from "../../Assets/SVG/plus.svg";
import { ReactComponent as MinusSvg } from "../../Assets/SVG/minus.svg";

import AmountChangeButton from "./AmountChangeButton";

const CartItem = (props) => {
  return (
    <li className={classes["cart-item"]}>
      <div className={classes.left}>
        <div className={classes.image}>
          <img src={props.image} alt={props.name} />
        </div>

        <div className={classes["food-descriptions"]}>
          <div className={classes["food-name"]}>
            {props.name}
          </div>
          <div className={classes["food-description"]}>
            {props.description}
          </div>
          <div className={classes["food-price"]}>
            {props.price}
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.amount}>
          Amount: <span className={classes.number}>1</span>
        </div>
        <div className={classes.changeAmount}>
          <AmountChangeButton>
            <PlusSvg />
          </AmountChangeButton>
          <AmountChangeButton>
            <MinusSvg />
          </AmountChangeButton>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
