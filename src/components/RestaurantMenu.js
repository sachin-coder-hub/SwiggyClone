import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./ShimmerUI";
import { menuCards } from "../utils/constant";
import ItemLists from "./ItemLists";
const RestaurantMenu = () => {
  const [loading, setLoading] = useState(false);
  // how to read a dynamic URL params
  const { resId } = useParams();
  // Use proper names
  const [filteredMenu, setFilteredMenu] = useState(menuCards);
  const [allMenu, setAllMenu] = useState(menuCards);
  const [searchText, setSearchText] = useState("");

  return loading ? (
    <Shimmer />
  ) : (
    <>
      <div className="container mx-auto  dark:text-brand-beige md:mx-auto">
        {filteredMenu.map((item) => (
          <ItemLists
            key={item?.card?.info?.id}
            {...item?.card?.info}
            item={item?.card?.info}
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
