import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";
import "./Restaurant.css";

const Restaurant = () => {
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState([]);

  const searchFood = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);

  return (
    <div>
      <h2>Find the food u want</h2>
      <input onChange={searchFood} type="text" />
      <br />
      <h3>Result found: {meals.length}</h3>
      <div className="meal-container">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
