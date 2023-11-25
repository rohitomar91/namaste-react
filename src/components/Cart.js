import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleNavHome = () => {
    navigate("/");
  };

  if (cartItems.length === 0) {
    return (
      <div className="w-7/12 p-4 mx-auto my-4 flex-row gap-2 text-center">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
          className="w-72 h-56 m-auto"
        ></img>
        <div className="m-3">
          <h1 className="text-lg text-gray-800 font-bold">
            Your cart is empty
          </h1>
          <p className="text-sm text-gray-700">
            You can go to home page to view more restaurants
          </p>
        </div>
        <button
          className="py-2 my-2 px-6 mx-6 text-sm text-white bg-orange-500 text-bold uppercase"
          onClick={handleNavHome}
        >
          See restaurants near you
        </button>
      </div>
    );
  }

  return (
    <div className="w-7/12 p-4 mx-auto my-4 flex-row gap-2">
      <h1 className="text-2xl font-bold text-center">Cart</h1>
      <button
        className="p-2 m-2 bg-gray-600 text-white rounded-lg text-sm"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <ItemList items={cartItems} />
    </div>
  );
};

export default Cart;
