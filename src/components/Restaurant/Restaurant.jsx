import React from "react";

const Restaurant = () => {
  const searchFood = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <h2>Find the food u want</h2>
      <input onChange={searchFood} type="text" />
    </div>
  );
};

export default Restaurant;
