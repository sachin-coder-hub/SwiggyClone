import ResturantCard, { withPromotedLabel } from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { restaurantListJson } from "../utils/constant";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [notFoundMessage, setNotFoundMessage] = useState("");

  const ResturantCardPromoted = withPromotedLabel(ResturantCard);

  const handleShimmer = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
    handleShimmer();
  }, []);

  const fetchData = () => {
    const json = restaurantListJson;
    setListOfResturants(json);
    setFilteredRestaurants(json);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1 className="text-center text-red-500">
        Looks like you are offline please check your internet connection!!
      </h1>
    );

  return loading ? (
    <Shimmer />
  ) : (
    <div className="body p-4">
      <div className="filter flex flex-col sm:flex-row justify-between items-center mb-4">
        <div className="search flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
          <input
            type="search"
            className="search-box border border-solid border-black rounded-lg p-2 mb-2 sm:mb-0 sm:mr-2"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn px-3 py-1 bg-orange-300 rounded-lg hover:bg-orange-400"
            onClick={() => {
              const filteredRestaurants = listOfResturants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
              setNotFoundMessage(
                filteredRestaurants.length === 0
                  ? "The restaurant you are trying to reach is currently unavailable!!"
                  : ""
              );
            }}
          >
            Search
          </button>
          {notFoundMessage && <p className="text-red-500">{notFoundMessage}</p>}
        </div>
        <div className="m-4">
          <button
            className="filter-btn px-3 py-2 bg-gray-900 text-white rounded-lg hover:bg-slate-700"
            onClick={() => {
              const resListTop = listOfResturants.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilteredRestaurants(resListTop);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap gap-6">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.avgRating === 4.3 ? (
              <ResturantCardPromoted resData={restaurant} />
            ) : (
              <ResturantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
