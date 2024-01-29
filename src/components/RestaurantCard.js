import { CLOUDINARY_IMG_ENDPOINT } from "../utils/constants";

const RestaurantCard = (props) => {
  const { info } = props.product;
  const { name, cuisines, cloudinaryImageId, avgRating, areaName } = info;

  return (
    <div className="card border border-gray-300 rounded overflow-hidden shadow-md">
      <img
        className="w-full h-40  object-cover"
        src={CLOUDINARY_IMG_ENDPOINT + cloudinaryImageId}
        alt="Product Image"
      ></img>
      <div className="p-4">
        <div className="card-title">{name}</div>
        <div className="card-rating">Rating: {avgRating}</div>
        <div className="card-description">{cuisines.join(", ")}</div>
        <div className="card-price">{areaName}</div>
      </div>
    </div>
  );
};

export const RestaurantCardWithDeal = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-transparent text-white font-bold p-2 m-2 round-lg">
          {props.product.info.aggregatedDiscountInfoV3.header +
            " " +
            props.product.info.aggregatedDiscountInfoV3.subHeader}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
