import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../hooks/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0189418&lng=77.7157467&page_type=DESKTOP_WEB_LISTING"
    );

    const data = await response.json();
    const restaurantData = data?.data?.cards[2]?.data?.data?.cards;
    if (restaurantData && Array.isArray(restaurantData)) {
      setRestaurantList(restaurantData);
      setFilteredRestaurantList(restaurantData);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline!!! Please check your internet connection.
      </h1>
    );
  }

  const handleFilter = () => {
    const filteredRestaurantList = restaurantList.filter(
      (restaurant) => restaurant.data.avgRating > 4
    );
    setFilteredRestaurantList(filteredRestaurantList);
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    console.log(searchText);
    const filteredRestaurantList = restaurantList.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurantList(filteredRestaurantList);
  };

  const handleReset = () => {
    setSearchText("");
    setFilteredRestaurantList(restaurantList);
  };

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => handleInputChange(e)}
          />
          <button className="filter-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated
        </button>
        <button className="filter-btn" onClick={handleReset}>
          Reset
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurantList.map((restaurant) => {
          return (
            <Link
              to={"/restaurants/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
