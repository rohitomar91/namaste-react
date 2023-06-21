import { useState } from "react";
import resData from "../utils/data.json";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState(resData.cards);

  const handleFilter = () => {
    const updatedRestaurantData = restaurantData.filter(
      (restaurant) => restaurant.data.avgRating > 4
    );
    setRestaurantData(updatedRestaurantData);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated
        </button>
        <button
          className="filter-btn"
          onClick={() => setRestaurantData(resData.cards)}
        >
          Reset
        </button>
      </div>
      <div className="res-container">
        {restaurantData.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
