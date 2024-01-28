//import { restaurants } from "../utils/restaurantData";
import RestaurantCard, { RestaurantCardWithDeal } from "./RestaurantCard";
import { useEffect, useState } from "react";
import { SWIGGY_RESTAURANTS_ENDPOINT } from "../utils/constants";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const MainContent = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filteredRestaurantsList, setFilteredRestaurantsList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardDeal = RestaurantCardWithDeal(RestaurantCard);
  //var allRestuarants =

  //
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data (replace with your API call or data-fetching logic)
  const fetchData = async () => {
    const data = await fetch(SWIGGY_RESTAURANTS_ENDPOINT);
    const json = await data.json();
    console.log(json);
    const allRestuarants =
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    setRestaurantsList(allRestuarants);
    setFilteredRestaurantsList(allRestuarants);
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
    setRestaurantsList(restaurantsList);
  };

  if (restaurantsList.length === 0) {
    return <Shimmer></Shimmer>;
  }
  console.log(restaurantsList);

  return (
    <div className=" bg-gray-400 mb-1 p-4">
      <div className="search-container">
        <div className="search-sec">
          <input
            name="searchText"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            name="Search"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurants = restaurantsList.filter((restaurant) =>
                restaurant.info.name.includes(searchText)
              );
              setFilteredRestaurantsList(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
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
      <div className="grid gap-5 grid-cols-5">
        {filteredRestaurantsList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.aggregatedDiscountInfoV3 ? (
              <RestaurantCardDeal product={restaurant}></RestaurantCardDeal>
            ) : (
              <RestaurantCard product={restaurant}></RestaurantCard>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
