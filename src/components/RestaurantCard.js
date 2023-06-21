import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData?.data;
  return (
    <div className="res-card">
      <img
        alt="res-logo"
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating} stars</p>
      <p>{deliveryTime} mins</p>
      <p>₹ {costForTwo / 100} For Two</p>
    </div>
  );
};

export default RestaurantCard;
