import React, { useState, useRef } from "react";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountValid, setAmountValid] = useState(true);
  const amountRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountRef.current.value;
    const amount = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      amount > 5 ||
      amount < 1
    ) {
      setAmountValid(false);
      return;
    }
    alert("form submited" + typeof amount);
  };

  return (
    <form
      className={classes.form}
      onSubmit={onSubmitHandler}
    >
      <div className={classes.inputs}>
        <label className={classes.label}>Amount</label>
        <input
          className={classes.input}
          size="1"
          ref={amountRef}
          max="5"
          min="1"
          defaultValue="1"
        />
        {!amountValid && (
          <p className={classes.invalid}>
            Please enter amount from 1 - 5
          </p>
        )}
      </div>

      <button className={classes.button}>
        Add To Cart
      </button>
    </form>
  );
};

export default MealItemForm;
