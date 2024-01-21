import { useState, useEffect } from "react";
import { RESTAURANTS_MENU_ENDPOINT } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchFoodItemsData();
  }, []);

  const fetchFoodItemsData = async () => {
    const data = await fetch(RESTAURANTS_MENU_ENDPOINT + resId);
    const json = await data.json();

    console.log(json);

    const foodItems =
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards;

    setResMenu(foodItems);
  };

  return resMenu;
};

export default useRestaurantMenu;
