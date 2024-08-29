import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const data = await response.json();
    const restaurantData =
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    if (restaurantData && Array.isArray(restaurantData)) {
      setRestaurantList(restaurantData);
    }
  };
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    setFilteredRestaurantList(restaurantList);
  }, [restaurantList]);

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline!!! Please check your internet connection.
      </h1>
    );
  }

  const handleFilter = () => {
    const filteredRestaurantList = restaurantList.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setFilteredRestaurantList(filteredRestaurantList);
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    const filteredRestaurantList = restaurantList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
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
    <div className="">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => handleInputChange(e)}
          />
          <button className="px-4 py-1 bg-green-100 m-4" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="flex m-4 p-4 items-center gap-4">
          <button
            className="bg-gray-100 rounded-lg px-2 py-1"
            onClick={handleFilter}
          >
            Top Rated
          </button>
          <button
            className="bg-gray-100 rounded-lg px-2 py-1"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurantList.map((restaurant) => {
          return (
            <Link
              to={"/restaurants/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              {restaurant.info.promoted ? (
                <RestaurantCardPromoted resData={restaurant?.info} />
              ) : (
                <RestaurantCard resData={restaurant?.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
