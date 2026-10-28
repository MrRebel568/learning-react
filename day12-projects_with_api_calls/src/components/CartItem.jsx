import React, { useContext } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { MyStore } from "../context/MyStore";

const CartItem = ({ product }) => {
  const { cartItem, setCartItem, increementQuantity, dicreementQuantity } =
    useContext(MyStore);

  const deleteCartItem = () => {
    let filterCarts = cartItem.filter((val) => {
      return val.id !== product.id;
    });
    setCartItem(filterCarts);
  };

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center">
      {/* Product Image */}
      <div className="flex h-28 w-full shrink-0 items-center justify-center rounded-xl bg-gray-50 p-3 sm:w-28">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="min-w-0 flex-1">
        <p className="mb-1 text-xs font-medium uppercase tracking-wide text-indigo-600">
          {product.category}
        </p>

        <h3 className="line-clamp-2 text-base font-semibold text-gray-900">
          {product.title}
        </h3>

        <p className="mt-2 text-lg font-bold text-gray-900">
          ${Number(product.price).toFixed(2)}
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
        <div className="flex items-center rounded-lg border border-gray-200">
          <button
            onClick={() => dicreementQuantity(product.id)}
            className="p-2 text-gray-600 transition hover:text-indigo-600 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Decrease quantity"
          >
            <Minus size={16} />
          </button>

          <span className="min-w-8 text-center text-sm font-semibold text-gray-900">
            {product.quantity}
          </span>

          <button
            onClick={() => increementQuantity(product.id)}
            className="p-2 text-gray-600 transition hover:text-indigo-600"
            aria-label="Increase quantity"
          >
            <Plus size={16} />
          </button>
        </div>

        <p className="text-sm font-semibold text-gray-700">
          ${Number(product.price * product.quantity).toFixed(2)}
        </p>
      </div>

      {/* Remove Button */}
      <button
        onClick={deleteCartItem}
        className="flex items-center justify-center gap-2 self-start rounded-lg p-2 text-red-500 transition hover:bg-red-50 sm:self-center"
        aria-label="Remove item"
        title="Remove item"
      >
        <Trash2 size={18} />
        <span className="text-sm sm:hidden">Remove item</span>
      </button>
    </div>
  );
};

export default CartItem;
