import { useState } from "react";

import { IngredientControl } from "../../components";
import { BurgerBody } from "../../components";

import "./control.css";

function Control() {
  const [lettuce, setLettuce] = useState(0);
  const [bacon, setBacon] = useState(0);
  const [meat, setMeat] = useState(0);
  const [cheese, setCheese] = useState(0);

  const buttons = [
    {
      label: "Lettuce",
      disabled: lettuce === 0,
      onLess() {
        if (lettuce > 0) setLettuce(lettuce - 0.5);
      },
      onMore() {
        setLettuce(lettuce + 0.5);
      },
    },
    {
      label: "Bacon",
      disabled: bacon === 0,
      onLess() {
        if (bacon > 0) setBacon(bacon - 0.7);
      },
      onMore() {
        setBacon(bacon + 0.7);
      },
    },
    {
      label: "Cheese",
      disabled: cheese === 0,
      onLess() {
        if (cheese > 0) setCheese(cheese - 0.4);
      },
      onMore() {
        setCheese(cheese + 0.4);
      },
    },
    {
      label: "Meat",
      disabled: meat === 0,
      onLess() {
        if (meat > 0) setMeat(meat - 1.3);
      },
      onMore() {
        setMeat(meat + 1.3);
      },
    },
  ];
  const ingredients = buttons.map((ing, i) => (
    <IngredientControl
      label={ing.label}
      onLess={ing.onLess}
      onMore={ing.onMore}
      isDisabled={ing.disabled}
      key={i}
    />
  ));

  return (
    <>
      <BurgerBody lettuce={lettuce} meat={meat} cheese={cheese} bacon={bacon} />
      <div className="container-fluid bg-controls p-0 m-2 text-center">
        Current Price:
        <strong>${lettuce + meat + cheese + bacon}</strong>
        {ingredients}
        <br />
        <button className="justify-content-center btn-order">ORDER</button>
      </div>
    </>
  );
}

export default Control;
