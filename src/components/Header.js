import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useOnlineStatus } from "../hooks/useOnlineStatus";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between shadow-md mb-2">
      <div className="">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex gap-8 p-4 m-4">
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
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
          <li>Cart</li>
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
