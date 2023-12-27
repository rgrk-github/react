import { restaurants } from "../utils/restaurantData";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { SWIGGY_RESTAURANTS_ENDPOINT } from "../utils/constants";
import Shimmer from "./Shimmer";

const MainContent = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);

  //
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data (replace with your API call or data-fetching logic)
  const fetchData = async () => {
    const data = await fetch(SWIGGY_RESTAURANTS_ENDPOINT);
    const json = await data.json();
    console.log(json);
    setRestaurantsList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  // Event handler for the button click
  const handleTopRatedRestaurantsClick = () => {
    const topRatedRestaurants = restaurantsList.filter(
      (restaurant) => restaurant.info.avgRating >= 4.0
    );
    setRestaurantsList(topRatedRestaurants);
  };

  const handleAllRestaurantsClick = () => {
    console.log("All Restaurants");
    setRestaurantsList(restaurants);
  };

  if (restaurantsList.length === 0) {
    return <Shimmer></Shimmer>;
  }

  return (
    <div className="main-container">
      <div className="search-container">
        <button
          name="Top Rated Restaurants"
          onClick={handleTopRatedRestaurantsClick}
        >
          Top Rated Restaurants
        </button>
        <button name="All Restaurants" onClick={handleAllRestaurantsClick}>
          All Restaurants
        </button>
      </div>
      <div className="product-container">
        {restaurantsList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            product={restaurant}
          ></RestaurantCard>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
