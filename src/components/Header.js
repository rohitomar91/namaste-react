import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { LOGO_URL } from "../utils/constants";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-md mb-2">
      <div className="">
        <img className="w-36 m-1 p-1" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex gap-8 p-4 m-4">
          <li>
            Online Status: {onlineStatus ? "✅" : "🔴"} <b>{loggedInUser}</b>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Instamart</Link>
          </li>
          <li className="font-bold text-lg">
            <Link to="/cart">
              Cart - <span>({cartItems.length} items)</span>
            </Link>
          </li>
          <button
            className="login"
            onClick={() => {
              setIsLoggedIn(!isLoggedIn);
            }}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
