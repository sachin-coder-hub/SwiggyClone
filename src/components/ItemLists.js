import { CDN_URL } from "../utils/constant";

const ItemLists = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-4 border-gray-300 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
              </span>
            </div>
            <p className="text-sm text-gray-600">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 p-2">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full rounded-lg"
            />
            <button className="p-2 ml-16 bg-white rounded-lg shadow-lg text-green-600 font-bold">
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemLists;
