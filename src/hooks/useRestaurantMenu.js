import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MENU_API_URL } from "../utils/constants";

export const useRestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(`${MENU_API_URL}${resId}`);
    const data = await response.json();
    setRestaurantInfo(data?.data);
  };

  return restaurantInfo;
};
