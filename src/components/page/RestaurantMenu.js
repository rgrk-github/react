import { useEffect, useState } from "react";
import FoodItemCard from "../FoodItemCard";
import RestaurantInfoCard from "../RestaurantInfoCard";
import { useParams } from "react-router-dom";
import Shimmer from "../Shimmer";
import { RESTAURANTS_MENU_ENDPOINT } from "./../../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [foodItems, setFoodItems] = useState([]);
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  useEffect(() => {
    fetchFoodItemsData();
  }, []);

  // Function to fetch data (replace with your API call or data-fetching logic)
  const fetchFoodItemsData = async () => {
    const data = await fetch(RESTAURANTS_MENU_ENDPOINT + resId);
    const json = await data.json();
    console.log(json);
    const foodItems =
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards;
    const restaurantdetails = json.data.cards[0].card.card;
    console.log(restaurantdetails);

    setFoodItems(foodItems);
    setRestaurantInfo(restaurantdetails);
  };
  return restaurantInfo == null ? (
    <Shimmer />
  ) : (
    <>
      <RestaurantInfoCard
        restaurantDetails={restaurantInfo}
      ></RestaurantInfoCard>

      <main className="menu-items">
        {foodItems.map((item) => (
          <FoodItemCard key={item.card.info.id} foodItem={item}></FoodItemCard>
        ))}
      </main>
    </>
  );
};

export default RestaurantMenu;
