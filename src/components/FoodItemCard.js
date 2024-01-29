import { FOOD_ITEM_ASSET_BASE_URL } from "../utils/constants";

const FoodItemCard = (props) => {
  const { info } = props.foodItem.card;

  //console.log(info);
  const { id, name, description, price, imageId } = info;

  return (
    <div className="flex bg-white rounded-md m-2">
      <div className="p-3">
        <div className="font-bold">{name}</div>
        <div className="font-bold text-green-500">
          Rs. {(price / 100).toFixed(2)}
        </div>
        <div className="text-gray-400 text-xs">{description}</div>
      </div>
      <div className="w-36 p-1">
        <img src={FOOD_ITEM_ASSET_BASE_URL + imageId} alt={name}></img>
      </div>
    </div>
  );
};

export default FoodItemCard;
