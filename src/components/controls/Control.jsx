import { useState } from "react";

import { IngredientControl } from "../../components";
import { BurgerBody } from "../../components";

import "./control.css";

function Control() {
  const [foodPrice, setFoodPrice] = useState({
    lettuce: 0,
    bacon: 0,
    meat: 0,
    cheese: 0,
  });

  const ingredients = Object.keys(foodPrice).map((label, i) => (
    <IngredientControl
      label={label}
      foodPrice={foodPrice}
      setFoodPrice={setFoodPrice}
      key={i}
    />
  ));

  const price = Object.values(foodPrice).reduce((prev, curr) => prev + curr, 3);

  return (
    <>
      <BurgerBody {...foodPrice} price={price} />
      <div className="container-fluid bg-controls p-0 m-0 text-center">
        Current Price:
        <strong>${price}</strong>
        {ingredients}
        <br />
        <button className="justify-content-center btn-order">ORDER</button>
      </div>
    </>
  );
}

export default Control;
