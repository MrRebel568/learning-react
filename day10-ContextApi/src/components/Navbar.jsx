import React, { useContext } from "react";
import { MyShop } from "../context/MyWebsite";
import { Heart, ShoppingCart, Star } from "lucide-react";

const Navbar = () => {
  let { users, cartItem, setIsCartOpen } = useContext(MyShop);
  const currentUser = users[users.length - 1];

  return (
    <div className="flex item-center justify-between p-5 bg-black rounded-xl text-white">
      <div className="font-bold">{currentUser ? currentUser?.name : "Users Name"}</div>
      <div className="flex gap-10 text-xl">
        <p onClick={() => setIsCartOpen(false)} className="cursor-pointer">
          Home
        </p>
        <p onClick={() => setIsCartOpen(true)} className="cursor-pointer">
          Cart{" "}
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-white">
            {cartItem.length}
          </span>
        </p>
      </div>
      <button>{currentUser ? "Logged" : "Login"}</button>
    </div>
  );
};

export default Navbar;
