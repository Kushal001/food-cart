import classes from "./Meals.module.css";

import AvailableMeals from "./AvalilableMeal";
import MealsSummary from "./MealsSummary";

const Meals = (props) => {
  return (
    <div className={classes.meals}>
      <MealsSummary />
      <AvailableMeals />
    </div>
  );
};

export default Meals;
