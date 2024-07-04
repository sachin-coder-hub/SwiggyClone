import { useEffect, useState } from "react";
import Shimmer from "./ShimmerUI";
import { CDN_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import { resMenu_URL } from "../utils/constant";

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

  //Returning Component

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h2>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{"  ₹"}
            {(item.card.info.price || item.card.info.defaultPrice) / 100}
            {/* <span>
              <img className="resMenu" src={CDN_URL + item.card.info.imageId} />
            </span> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
