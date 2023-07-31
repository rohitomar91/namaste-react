import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:shadow-lg hover:bg-gray-200">
      <img
        alt="res-logo"
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating} stars</p>
      <p>{deliveryTime} mins</p>
      <p>{costForTwo}</p>
    </div>
  );
};

export default RestaurantCard;
