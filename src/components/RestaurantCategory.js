import ItemList from "./ItemList";

const RestaurantCategory = ({ categoryData, key, showItems, setShowItems }) => {
  return (
    <div key={key}>
      {/* Header */}
      <div className="w-7/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => {
            setShowItems();
          }}
        >
          <span className="font-bold text-base">
            {categoryData?.title} ({categoryData?.itemCards.length})
          </span>
          {showItems ? <span>⬆️</span> : <span>⬇️</span>}
        </div>

        {/* Accordion Body */}
        {showItems && <ItemList items={categoryData?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
