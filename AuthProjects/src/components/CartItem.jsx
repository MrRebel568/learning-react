import React, { useContext } from "react";
import { Plus, Minus, Trash2, CarIcon } from "lucide-react";
import { MainContext } from "../context/MainContext";

const CartItem = ({ product }) => {
  const { cartItem, setCartItem } = useContext(MainContext);

  const deleteCartItem = () => {
    setCartItem(
        cartItem.filter((item) => item.id !== product.id)
    );
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl p-4 flex flex-col sm:flex-row items-center gap-5 shadow-sm hover:shadow-md transition duration-300">
      {/* Product Image */}
      <div className="w-28 h-28 bg-gray-50 rounded-lg flex items-center justify-center p-3 shrink-0">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 w-full">
        <p className="text-xs text-blue-600 font-medium uppercase tracking-wide">
          {product.category}
        </p>

        <h2 className="text-base font-semibold text-gray-900 mt-1 line-clamp-2">
          {product.title}
        </h2>

        <p className="text-lg font-bold text-gray-900 mt-2">${product.price}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-3 border border-gray-200 rounded-lg p-1">
        <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 transition">
          <Minus size={16} />
        </button>

        <span className="text-sm font-semibold w-5 text-center">
          {product.quantity || 1}
        </span>

        <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 transition">
          <Plus size={16} />
        </button>
      </div>

      {/* Subtotal & Remove */}
      <div className="flex items-center justify-between sm:flex-col sm:items-end gap-4 w-full sm:w-auto">
        <p className="text-lg font-bold text-gray-900">
          ${(product.price * (product.quantity || 1)).toFixed(2)}
        </p>

        <button
          onClick={deleteCartItem}
          className="flex items-center gap-1 text-red-500 hover:text-red-700 transition text-sm"
        >
          <Trash2 size={17} />
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
