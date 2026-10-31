import React, { useContext } from "react";
import { Star, ShoppingCart, Minus, Plus } from "lucide-react";
import { MyShop } from "../context/MyContext";

const MainProduct = ({ product, isInCart }) => {
  let { cartItem, setCartItem, increementQuantity, dicreementQuantity } =
    useContext(MyShop);

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition">
      {/* Product Image */}
      <div className="w-full h-52 bg-gray-50 rounded-lg flex items-center justify-center p-5">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="mt-4">
        <p className="text-xs uppercase tracking-wide text-indigo-600 font-semibold">
          {product.category}
        </p>

        <h2 className="text-base font-semibold text-gray-900 mt-2 line-clamp-2 min-h-12">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <Star size={16} fill="#facc15" className="text-yellow-400" />

          <span className="text-sm font-medium text-gray-700">
            {product.rating?.rate}
          </span>

          <span className="text-xs text-gray-400">
            ({product.rating?.count} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="mt-3">
          <h3 className="text-xl font-bold text-gray-900">${product.price}</h3>

          <p className="text-xs text-green-600 mt-1">Inclusive of all taxes</p>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 mt-3 line-clamp-2 leading-6">
          {product.description}
        </p>

        {/* Button */}

        {isInCart ? (
          <div className="flex w-full mt-4 p-1 rounded-2xl border-2 border-indigo-200 items-center justify-center gap-3">
            <button
              onClick={() => dicreementQuantity(product.id)}
              className="p-1 text-gray-600 hover:text-indigo-600 transition"
            >
              <Minus size={16} />
            </button>

            <span className="min-w-8 text-center text-xl font-semibold text-gray-900">
              {isInCart.quantity}
            </span>

            <button
              onClick={() => increementQuantity(product.id)}
              className="p-1 text-gray-600 hover:text-indigo-600 transition"
            >
              <Plus size={16} />
            </button>
          </div>
        ) : (
          <button
            onClick={() =>
              setCartItem((prev) => [...prev, { ...product, quantity: 1 }])
            }
            className="w-full mt-4 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-lg text-sm font-semibold transition"
          >
            <ShoppingCart size={17} />
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default MainProduct;
