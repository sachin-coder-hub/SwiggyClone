import { useDispatch, useSelector } from "react-redux";
import ItemLists from "./ItemLists";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-5 p-5">
      <div className="flex flex-col md:flex-row justify-between items-center m-2">
        <h1 className="text-lg font-bold md:mr-4">
          Cart 🛒 - {cartItems.length} Items
        </h1>
        <button
          className="bg-black text-white p-2 rounded-lg mt-2 md:mt-0"
          onClick={handleClearCart}
        >
          Clear cart
        </button>
      </div>

      {cartItems.length === 0 && (
        <div className="flex flex-col items-center mt-5">
          <img
            className="w-60 rounded-lg"
            src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png?f=webp"
            alt="Empty Cart"
          />
          <button className="bg-slate-100 p-2 rounded-lg shadow-md mt-4">
            <Link to="/">🫤 Cart is empty, Please add items to the cart</Link>
          </button>
        </div>
      )}

      <div className="w-full md:w-6/12 m-auto shadow-lg mt-5">
        {cartItems.map((item) => (
          <ItemLists
            key={item.id}
            item={item}
            name={item.name}
            imageId={item.imageId}
            price={item.price}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
