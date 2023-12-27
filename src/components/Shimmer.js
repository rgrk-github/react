const Shimmer = () => {
  const cardList = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="main-container">
      <div className="search-container">
        <button name="Top Rated Restaurants">Top Rated Restaurants</button>
        <button name="All Restaurants">All Restaurants</button>
      </div>
      <div className="product-container">
        {cardList.map((card, index) => (
          <div key={index} className="card">
            <img className="shimmer-img" src=""></img>
            <div className="shimmer-content">
              <div className="card-title"></div>
              <div className="card-rating"></div>
              <div className="card-description"></div>
              <div className="card-price"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
