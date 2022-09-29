import { cheeseImg, baconImg, meatImg, lettuceImg } from "../../assets";

export const initialPrice = 3;

export const foodItemsRate = {
  lettuce: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
};

export const itemImages = {
  lettuce: lettuceImg,
  bacon: baconImg,
  cheese: cheeseImg,
  meat: meatImg,
};

export const reducePrice = (label, priceRate, foodPrice, setFoodPrice) => {
  if (foodPrice[label] > 0)
    setFoodPrice((prevState) => {
      return {
        ...prevState,
        [label]: parseFloat(
          (
            parseFloat(foodPrice[label].toFixed(2)) -
            parseFloat(priceRate.toFixed(2))
          ).toFixed(2)
        ),
      };
    });
};

export const increasePrice = (label, priceRate, foodPrice, setFoodPrice) => {
  setFoodPrice((prevState) => {
    return { ...prevState, [label]: foodPrice[label] + priceRate };
  });
};
