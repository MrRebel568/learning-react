import React, { useContext } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { MyShop } from "../context/MyContext";

const CartItem = ({ product }) => {
  let { cartItem, setCartItem, increementQuantity, dicreementQuantity } =
    useContext(MyShop);

  const deleteCartItem = () => {
    let filterCarts = cartItem.filter((val) => {
      return val.id !== product.id;
    });
    setCartItem(filterCarts);
  };
  console.log(cartItem);

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col sm:flex-row gap-5">
      {/* Product Image */}
      <div className="w-full sm:w-32 h-36 bg-gray-50 rounded-lg flex items-center justify-center p-4 shrink-0">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between gap-4">
          <div>
            <p className="text-xs text-indigo-600 font-semibold uppercase">
              {product.category}
            </p>

            <h2 className="text-base font-semibold text-gray-900 mt-1 line-clamp-2">
              {product.title}
            </h2>

            <p className="text-sm text-gray-500 mt-2">{product.description}</p>
          </div>

          {/* Remove Button */}
          <button
            onClick={deleteCartItem}
            className="text-gray-400 hover:text-red-500 transition shrink-0"
          >
            <Trash2 size={19} />
          </button>
        </div>

        {/* Price and Quantity */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-5">
          <h3 className="text-lg font-bold text-gray-900">${product.price}</h3>

          {/* Quantity Controls */}
          <div className="flex items-center border border-gray-200 rounded-lg">
            <button
              onClick={() => dicreementQuantity(product.id)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-l-lg"
            >
              <Minus size={15} />
            </button>

            <span className="px-4 text-sm font-semibold">
              {product.quantity}
            </span>

            <button
              onClick={() => increementQuantity(product.id)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-r-lg"
            >
              <Plus size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
