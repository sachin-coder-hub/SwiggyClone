import { LOG_URL } from "../utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import "font-awesome/css/font-awesome.min.css"; // Import Font Awesome CSS

const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  const [menuOpen, setMenuOpen] = useState(false); // State to manage mobile menu visibility

  return (
    <div className="header flex justify-between items-center bg-slate-50 shadow-lg m-2 p-2">
      <div className="logo-container">
        <img
          className="logo w-32 sm:w-20 md:w-24 lg:w-28 xl:w-32"
          src={LOG_URL}
          alt="Logo"
        />
      </div>

      <div className="nav-items flex items-center">
        {/* Hamburger Icon for mobile devices */}
        <div className="block md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation items */}
        <ul
          className={`flex-col md:flex md:flex-row ${
            menuOpen ? "flex" : "hidden"
          } md:items-center`}
        >
          {/* <li className="px-4 p-2 font-bold">{loggedInUser}</li> */}

          {/* Icons for mobile devices */}
          <div className="flex md:hidden">
            <Link to="/" className="px-4 hover:bg-orange-300 rounded-lg p-2">
              <i className="fa fa-home" aria-hidden="true"></i>
            </Link>
            <Link
              to="/about"
              className="px-4 hover:bg-orange-300 rounded-lg p-2"
            >
              <i className="fa fa-info-circle" aria-hidden="true"></i>
            </Link>
            <Link
              to="/contact"
              className="px-4 hover:bg-orange-300 rounded-lg p-2"
            >
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </Link>
            <Link
              to="/cart"
              className="px-4 hover:bg-orange-300 rounded-lg p-2"
            >
              <i className="fa fa-shopping-cart" aria-hidden="true"></i> (
              {cartItems.length})
            </Link>
          </div>

          {/* Text for larger devices */}
          <div className="hidden md:flex md:items-center">
            <li className="px-4 hover:bg-orange-300 rounded-lg p-2">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4 hover:bg-orange-300 rounded-lg p-2">
              <Link to="/about">About Us</Link>
            </li>
            <li className="px-4 hover:bg-orange-300 rounded-lg p-2">
              <Link to="/contact">Contact us</Link>
            </li>
            <li className="px-4 hover:bg-orange-300 rounded-lg p-2">
              <Link to="/cart">Cart({cartItems.length})</Link>
            </li>
          </div>

          <button
            className="login-btn bg-slate-900 text-white rounded-md p-1 mx-2 text-sm"
            onClick={() => {
              setLoginButton(loginButton === "Login" ? "Logout" : "Login");
            }}
          >
            {loginButton}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
