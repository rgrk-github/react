import { useState, useEffect } from "react";
import { RESTAURANTS_MENU_ENDPOINT } from "./constants";

const useRestaurantInfo = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchResInfoData();
  }, []);

  const fetchResInfoData = async () => {
    const data = await fetch(RESTAURANTS_MENU_ENDPOINT + resId);
    const json = await data.json();

    const restaurantdetails = json.data.cards[0].card.card;
    console.log("Res Info....");

    console.log(restaurantdetails);
    setResInfo(restaurantdetails);
  };

  return resInfo;
};

export default useRestaurantInfo;
