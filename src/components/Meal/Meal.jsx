import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Meal.css";

const Meal = (props) => {
  const { strMeal, strMealThumb, strInstructions, idMeal } = props.meal;
  const { meal } = props;
  const navigate = useNavigate();
  const handleAddToOrder = () => {
    const path = `/restaurant/${idMeal}`;
    navigate(path);
  };
  return (
    <div>
      <div className="meal">
        <img src={strMealThumb} alt={strMeal} />
        <h4>{strMeal}</h4>
        <p>{strInstructions.slice(0, 100)}</p>
        <button target="_blank" onClick={handleAddToOrder}>
          See more details
        </button>
        <Link target="_blank" to={`/restaurant/${idMeal}`}>
          {strMeal}
        </Link>
      </div>
    </div>
  );
};

export default Meal;
