import React from "react";
import "./Meal.css";

const Meal = (props) => {
  const { strMeal, strMealThumb, strInstructions } = props.meal;
  const { handleAddToOrder, meal } = props;
  return (
    <div>
      <div className="meal">
        <img src={strMealThumb} alt={strMeal} />
        <h4>{strMeal}</h4>
        <p>{strInstructions.slice(0, 100)}</p>
        <button onClick={() => handleAddToOrder(meal)}>Add this Food</button>
      </div>
    </div>
  );
};

export default Meal;
