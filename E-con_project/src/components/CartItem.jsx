
import React, { useContext } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { MyShop } from "../context/MyContext";

const CartItem = ({ product }) => {
  const {
    cartItem,
    setCartItem,
    increementQuantity,
    dicreementQuantity,
  } = useContext(MyShop);

  const deleteCartItem = () => {
    setCartItem(
      cartItem.filter((item) => item.id !== product.id)
    );
  };

  return (
    <div className="flex gap-3 p-3 border border-gray-100 rounded-xl">

      {/* Image */}
      <div className="w-20 h-24 bg-gray-50 rounded-lg p-2 shrink-0">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">

        <div className="flex justify-between gap-2">
          <div className="min-w-0">
            <p className="text-[10px] uppercase text-indigo-600 font-semibold">
              {product.category}
            </p>

            <h2 className="text-sm font-semibold text-gray-900 mt-1 line-clamp-2">
              {product.title}
            </h2>
          </div>

          <button
            onClick={deleteCartItem}
            className="text-gray-400 hover:text-red-500 shrink-0"
          >
            <Trash2 size={17} />
          </button>
        </div>

        <div className="flex justify-between items-center mt-4">

          <h3 className="font-bold text-sm">
            ${Number(product.price).toFixed(2)}
          </h3>

          <div className="flex items-center border border-gray-200 rounded-lg">

            <button
              onClick={() => dicreementQuantity(product.id)}
              className="p-1.5 hover:bg-gray-100"
            >
              <Minus size={13} />
            </button>

            <span className="px-3 text-xs font-semibold">
              {product.quantity}
            </span>

            <button
              onClick={() => increementQuantity(product.id)}
              className="p-1.5 hover:bg-gray-100"
            >
              <Plus size={13} />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
