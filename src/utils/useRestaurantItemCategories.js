import { useState, useEffect } from "react";
import { RESTAURANTS_MENU_ENDPOINT } from "./constants";

const useRestaurantItemCategories = (resId) => {
  const [restaurantItemCategories, setRestaurantItemCategories] =
    useState(null);

  useEffect(() => {
    fetchRestaurantItemCategories();
  }, []);

  const fetchRestaurantItemCategories = async () => {
    const data = await fetch(RESTAURANTS_MENU_ENDPOINT + resId);
    const json = await data.json();
    const regularCards =
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;

    const itemCategories = regularCards.filter(
      (item) =>
        item.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log("itemCategories");
    console.log(itemCategories);
    setRestaurantItemCategories(itemCategories);
  };

  return restaurantItemCategories;
};

export default useRestaurantItemCategories;
