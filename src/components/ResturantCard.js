import { CDN_URL } from "../utils/constant";

const ResturantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  return (
    <div className="resCard m-6 p-4 w-72 h-96 rounded-lg bg-gray-100 hover:bg-gray-300 shadow-lg">
      <img
        className="reslogo rounded-lg w-full h-48 object-cover"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <div className="resDetails flex justify-between">
        <h4>{avgRating} Stars</h4>
        <h4>{resData.info.sla.slaString}</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

//Higher order component to return restaurantcard with promoted label

export const withPromotedLabel = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-slate-700 text-white p-2 m-2 rounded-lg">
          Promoted
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
