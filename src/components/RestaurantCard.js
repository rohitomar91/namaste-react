import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData;
  return (
    <div
      data-testid="restaurantCard"
      className="m-4 w-[250px] rounded-lg hover:shadow-lg hover:bg-gray-200"
    >
      <img
        alt="res-logo"
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="ml-3 text-base">
        <h3 className="font-bold pt-4 pb-1 text-xl">{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRating} stars</p>
        <p>{sla?.deliveryTime} mins</p>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-4 p-2 ml-8 text-xs rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
