import { useEffect, useState } from "react";
import Shimmer from "./ShimmerUI";
import { CDN_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import { resMenu_URL } from "../utils/constant";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  //Fetching Data

  const fetchMenu = async () => {
    const data = await fetch(resMenu_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  //  loading Shimmer
  if (resInfo === null) return <Shimmer />;

  //Destructuring Info

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;

  //Fetching restaurant menu consisting only itemcategory as heading

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  //Returning Component

  return (
    <div className="menu text-center">
      <h1 className="font-bold my-6 text-2xl font-serif">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category.card.card}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
