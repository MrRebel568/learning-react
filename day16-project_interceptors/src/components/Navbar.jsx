import React, { useContext } from "react";
import { ShoppingCart, Menu, User } from "lucide-react";
import { NavLink } from "react-router";
import { MainContext } from "../context/MainContext";
import { Auth } from "../context/AuthContext";

const Navbar = () => {
    const {cartItem} = useContext(MainContext)
    const {setLoggedUser} = useContext(Auth)
  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-gray-900">
          My<span className="text-blue-600">Shop.</span>
        </NavLink>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink
            to="/main"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-medium transition"
                : "text-gray-600 hover:text-blue-600 transition"
            }
            end
          >
            Home
          </NavLink>

          <NavLink
            to="/main/products"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-medium transition"
                : "text-gray-600 hover:text-blue-600 transition"
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/main/user"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-medium transition"
                : "text-gray-600 hover:text-blue-600 transition"
            }
          >
            User
          </NavLink>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          {/* Cart */}
          <NavLink
            to="/main/cart"
            className={({ isActive }) =>
              isActive
                ? " relative text-blue-600 font-medium transition"
                : "relative text-gray-600 hover:text-blue-600 transition"
            }
          >
            <ShoppingCart size={23} />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartItem.length}
            </span>
          </NavLink>

          {/* Login */}
          <NavLink
            onClick={() => {
              localStorage.removeItem("logged_User");
              setLoggedUser(null)
            }}
            className="hidden sm:flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-lg hover:bg-blue-600 transition"
          >
            <User size={18} />
            Logout
          </NavLink>

          {/* Mobile Menu Icon */}
          <button className="md:hidden text-gray-700">
            <Menu size={25} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
