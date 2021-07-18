import classes from "./AvailableMeal.module.css";

import Sushi from "../../Assets/Img/Sushi.jpg";
import Schnitzel from "../../Assets/Img/Schnitzel.jpg";
import BarbequeBurger from "../../Assets/Img/BarbequeBurger.jpg";
import GreenBowl from "../../Assets/Img/GreenBowl.jpg";

import MealItem from "./MealItem/MealItem";

const AvailableMeals = (props) => {
  const meals = [
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
    {
      id: "f003",
      name: "Green bowl",
      description: "healthy & green",
      price: "18.99",
      image: GreenBowl,
    },
  ];

  return (
    <div className={classes["meals-container"]}>
      {meals.map((meal) => (
        <MealItem
          name={meal.name}
          image={meal.image}
          description={meal.description}
          price={meal.price}
        />
      ))}
    </div>
  );
};

export default AvailableMeals;
