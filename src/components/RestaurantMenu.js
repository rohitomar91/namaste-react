import { useState } from "react";
import { useRestaurantMenu } from "../hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const restaurantInfo = useRestaurantMenu();

  const [showIndex, setShowIndex] = useState(0);

  if (restaurantInfo === null) {
    return <Shimmer />;
  }

  const handleAccordionClick = (accordionIndex) => {
    // handle all accordion close with -1 index
    setShowIndex(showIndex === accordionIndex ? -1 : accordionIndex);
  };

  const { name, cuisines, costForTwoMessage } =
    restaurantInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  const categories =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-4 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/** Categories Accordions */}
      {categories.map((category, index) => (
        <RestaurantCategory
          categoryData={category?.card?.card}
          key={category?.card?.card?.title}
          showItems={index === showIndex}
          setShowItems={() => handleAccordionClick(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
