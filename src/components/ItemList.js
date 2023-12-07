import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div className="">
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          data-testid="foodItems"
          className="p-2 m-2 border-b border-gray-200 text-left flex justify-between py-6"
        >
          <div className="flex-col">
            <div className="py-2">
              <div>
                <h3 className="font-semibold" data-testid="foodItemName">
                  {item?.card?.info?.name}
                </h3>
              </div>
              <div className="text-sm py-1" data-testid="foodItemPrice">
                ₹
                {(item?.card?.info?.price
                  ? item?.card?.info?.price
                  : item?.card?.info?.defaultPrice) / 100}
              </div>
            </div>
            <p className="text-xs text-gray-400">
              {item?.card?.info?.description}
            </p>
          </div>
          <div>
            <div className="absolute">
              <button
                className="p-2 mx-12 my-16 rounded-lg border border-gray bg-white text-green-500 text-sm cursor-pointer hover:shadow-lg"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img src={CDN_URL + item?.card?.info?.imageId} className="w-36" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
