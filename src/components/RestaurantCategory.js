import { useState } from "react";
import ItemLists from "./ItemLists";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 p-4 bg-gray-50 shadow-lg ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="">🔻</span>
        </div>
        {showItems && <ItemLists items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
