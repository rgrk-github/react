import { useEffect, useState } from "react";
import FoodItemCard from "../FoodItemCard";
import RestaurantInfoCard from "../RestaurantInfoCard";
import { useParams } from "react-router-dom";
import Shimmer from "../Shimmer";

//import useRestaurantMenu from "./../../utils/useRestaurantMenu";
//import useRestaurantInfo from "../../utils/useRestaurantInfo";
import useRestaurantItemCategories from "../../utils/useRestaurantItemCategories";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [openSection, setOpenSection] = useState(null);

  const handleToggle = (index) => {
    setOpenSection((prevOpenSection) =>
      prevOpenSection === index ? null : index
    );
  };

  //const foodItems = useRestaurantMenu(resId);
  const itemCategories = useRestaurantItemCategories(resId);

  return itemCategories == null ? (
    <Shimmer />
  ) : (
    <div className="max-w-3xl mx-auto mt-8 bg-slate-300">
      {itemCategories.map((item, index) => (
        <div key={index} className="border rounded-md overflow-hidden mb-2">
          <button
            onClick={() => handleToggle(index)}
            className="w-full p-4 text-left focus:outline-none"
          >
            {item.card.card.title}
          </button>
          {openSection === index && (
            <div className="p-4">
              <div className="max-w-screen-md m-auto my-3 px-3 bg-slate-300">
                {item.card.card.itemCards.map((item) => (
                  <FoodItemCard
                    key={item.card.info.id}
                    foodItem={item}
                  ></FoodItemCard>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
