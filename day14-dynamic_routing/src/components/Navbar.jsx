import {
  ShoppingBag,
  Home,
  ShoppingCart,
  Info,
  ShoppingBasket,
} from "lucide-react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">ShopEase</span>
          </a>

          <div className="flex items-center gap-6 sm:gap-8">
            {/* <p className="flex items-center cursor-pointer gap-2 text-indigo-600 font-medium hover:text-indigo-700 transition">
              <Home size={19} />
              Home
            </p> */}

            <NavLink
              className="flex items-center cursor-pointer gap-2 text-indigo-600 font-medium hover:text-indigo-700 transition"
              to="/"
            >
              <Home size={19} /> Home
            </NavLink>
            {/* <p className="flex items-center cursor-pointer gap-2  font-medium hover:text-indigo-700 transition">
              <Info size={19} />
              About
            </p> */}

            <NavLink
              className="flex items-center cursor-pointer gap-2  font-medium hover:text-indigo-700 transition"
              to="/about"
            >
              <Info size={19} /> About
            </NavLink>

            {/* <p className="flex items-center cursor-pointer gap-2 text-gray-600 font-medium hover:text-indigo-600 transition">
              <ShoppingBasket size={20} />
              Products
            </p> */}

            <NavLink
              className="flex items-center cursor-pointer gap-2 text-gray-600 font-medium hover:text-indigo-600 transition"
              to="/products"
            >
              <ShoppingBasket size={20} /> Products
            </NavLink>

            {/* Login Button */}

            <p className="rounded-lg cursor-pointer  bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition duration-200">
              login
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
