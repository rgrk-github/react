import { CLOUDINARY_IMG_ENDPOINT } from "../utils/constants";

const RestaurantCard = (props) => {
  const { info } = props.product;
  const { name, cuisines, cloudinaryImageId, avgRating, areaName } = info;

  return (
    <div className="card">
      <img
        src={CLOUDINARY_IMG_ENDPOINT + cloudinaryImageId}
        alt="Product Image"
      ></img>
      <div className="card-content">
        <div className="card-title">{name}</div>
        <div className="card-rating">Rating: {avgRating}</div>
        <div className="card-description">{cuisines.join(", ")}</div>
        <div className="card-price">{areaName}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
