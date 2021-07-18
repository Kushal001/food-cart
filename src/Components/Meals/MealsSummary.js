import classes from "./MealsSummary.module.css";

const MealsSummary = (props) => {
  return (
    <div className={classes["meal-summary"]}>
      <h1 className={classes.header}>
        Delicious Food, Delivered To You
      </h1>
      <p className={classes.paragraph}>
        Choose your favorite meal from our broad selection
        of available meals and enjoy a delicious lunch or
        dinner at home.
      </p>
    </div>
  );
};

export default MealsSummary;
