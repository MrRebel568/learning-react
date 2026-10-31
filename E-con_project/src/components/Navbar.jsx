import React, { useContext } from "react";
import { ShoppingBag, Menu, User } from "lucide-react";
import { MyShop } from "../context/MyContext";

const Navbar = () => {
  let { setIsCartOpen, cartItem } = useContext(MyShop);
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-600 tracking-tight">
          Shop<span className="text-gray-900">Ease.</span>
        </h1>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <p
            onClick={() => setIsCartOpen(false)}
            className="text-sm font-medium text-indigo-600 cursor-pointer"
          >
            Home
          </p>
        </div>

        {/* Right Section */}
        <div className="  flex items-center gap-4">
          <button
            onClick={() => setIsCartOpen(true)}
            className=" cursor-pointer relative p-2 text-gray-600 hover:text-indigo-600 transition"
          >
            <ShoppingBag size={21} />
            <span className="absolute  -top-0.5 -right-0.5 w-4 h-4 bg-indigo-600 text-white text-[10px] rounded-full flex items-center justify-center">
              {cartItem.length}
            </span>
          </button>

          <button className="hidden sm:flex cursor-pointer items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition">
            <User size={17} />
            Login here
          </button>

          {/* Mobile Menu Icon */}
          <button className="md:hidden p-2 text-gray-700">
            <Menu size={23} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
