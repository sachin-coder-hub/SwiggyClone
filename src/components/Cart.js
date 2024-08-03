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
      <div className="flex justify-center items-center m-2">
        <h1 className="text-lg font-bold mr-96">
          Cart 🛒 - {cartItems.length} Items
        </h1>
        <button
          className="bg-black text-white p-2 rounded-lg"
          onClick={handleClearCart}
        >
          Clear cart
        </button>
      </div>
      {cartItems.length === 0 && (
        <div className="flex flex-col items-center">
          <img
            className="w-60 rounded-lg"
            src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png?f=webp"
          />
          <button className="bg-slate-100 p-2 rounded-lg shadow-md">
            <Link to="/">🫤 Cart is empty, Please add items to the cart</Link>
          </button>
        </div>
      )}
      <div className="w-6/12 m-auto shadow-lg">
        <ItemLists items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
