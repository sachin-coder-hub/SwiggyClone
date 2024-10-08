import { useDispatch, useSelector } from "react-redux";
import ItemLists from "./ItemLists";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import emptyCart from "../components/assets/emptyCart.png";
import { useState } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const cartTotal = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const [isCheckedOut, setIsCheckedOut] = useState(false);

  const handleCheckout = () => {
    setIsCheckedOut((prevState) => !prevState);
  };
  const handleBack = () => {
    setIsCheckedOut((prevState) => !prevState);
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleOrderNow = () => {
    handleClearCart();
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
          <img className="w-60 rounded-lg" src={emptyCart} alt="Empty Cart" />
          <button className="bg-slate-100 p-2 rounded-lg shadow-md mt-4">
            <Link to="/">🫤 Cart is empty, Please add items to the cart</Link>
          </button>
        </div>
      )}
      {!isCheckedOut && cartItems.length !== 0 && (
        <section>
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
          <button
            className="bg-green-500  text-white  hover:bg-green-400 px-3 py-1 font-bold rounded-lg mt-5"
            onClick={handleCheckout}
          >
            Checkout & Pay
          </button>
        </section>
      )}
      {isCheckedOut && (
        <section
          aria-labelledby="summary-heading"
          className="mt-16 rounded-md bg-white lg:col-span-4 lg:mx-96 lg:px-10"
        >
          <h2
            id="summary-heading"
            className=" border-b font-bold  border-gray-200 px-4 py-3 text-lg text-gray-900 sm:p-4"
          >
            Price Details
          </h2>
          <div>
            <dl className=" space-y-1 px-2 py-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm  text-gray-800">
                  Price ({cartItems?.length} item)
                </dt>
                <dd className="text-sm font-medium text-gray-900">
                  ₹{cartTotal?.total / 100}
                </dd>
              </div>

              <div className="flex items-center justify-between py-4">
                <dt className="flex text-sm text-gray-800">
                  <span>Delivery Charges</span>
                </dt>
                <dd className="text-sm font-bold ml-2   text-green-700">
                  Free
                </dd>
              </div>
              <div className="flex items-center justify-between border-y border-dashed py-4 ">
                <dt className="text-base font-medium  text-gray-900">
                  Total Amount
                </dt>
                <dd className="text-base font-medium  ml-2 text-gray-900">
                  ₹{cartTotal?.total / 100}
                </dd>
              </div>
            </dl>
            <div className="flex justify-between">
              <button
                className="bg-slate-200  text-black hover:bg-slate-300 px-3 py-1 font-bold rounded-lg mt-5 mx-2"
                onClick={handleBack}
              >
                Back to Cart
              </button>
              <Link to={"/OrderConfirm"}>
                <button
                  onClick={handleOrderNow}
                  className="bg-green-500 text-white  hover:bg-green-400 px-3 py-1 font-bold rounded-lg mt-5 mx-2"
                >
                  ORDER NOW
                </button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Cart;
