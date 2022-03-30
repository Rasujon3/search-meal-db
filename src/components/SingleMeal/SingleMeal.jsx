import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleMeal = () => {
  const { mealId } = useParams();
  console.log(mealId);
  const [singleMeal, setSingleMeal] = useState({});
  useEffect(() => {
    const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSingleMeal(data.meals[0]));
  }, [mealId]);
  return (
    <div>
      <h1>More Details for {singleMeal.strMeal}</h1>
      <h2>Name: {singleMeal.strMeal}</h2>
      <h3>Category: {singleMeal.strCategory}</h3>
      <h4>Area: {singleMeal.strArea}</h4>
      <p>Description: {singleMeal.strInstructions}</p>
      <img src={singleMeal.strMealThumb} alt={singleMeal.strMeal} />
    </div>
  );
};

export default SingleMeal;
