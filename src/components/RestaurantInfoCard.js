const RestaurantInfoCard = (props) => {
  console.log(props);
  const { info } = props.restaurantDetails;
  //console.log(info);
  const { id, name, avgRating, cuisines } = info;

  return (
    <div className="res-details">
      <div className="res-item">
        <div className="item-details">
          <div className="item-name">{name}</div>
          <div className="item-description">{cuisines.join(", ")}</div>
          <div className="item-price">$10.99</div>
        </div>
        <div className="res-rating-sec">
          <div className="res-rating">{avgRating}</div>
          <div className="res-no-of-ratings">10+K ratings</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfoCard;
