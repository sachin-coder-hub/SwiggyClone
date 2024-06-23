import { CDN_URL } from "../utils/constant";

const ResturantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  return (
    <div className="resCard" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="reslogo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <div className="resDetails">
        <h4>{avgRating} Stars</h4>
        <h4>{resData.info.sla.slaString}</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export default ResturantCard;
