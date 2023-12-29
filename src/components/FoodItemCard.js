import { FOOD_ITEM_ASSET_BASE_URL } from "../utils/constants";

const FoodItemCard = (props) => {
  const { info } = props.foodItem.card;

  //console.log(info);
  const { id, name, price, imageId } = info;

  return (
    <div className="menu-item">
      <img
        className="item-image"
        src={FOOD_ITEM_ASSET_BASE_URL + imageId}
        alt="Dish Image 1"
      ></img>
      <div className="item-details">
        <div className="item-name">{name}</div>
        <div className="item-description">
          A delicious description of the dish goes here.
        </div>
        <div className="item-price">Rs. {(price / 100).toFixed(2)}</div>
      </div>
    </div>
  );
};

export default FoodItemCard;
