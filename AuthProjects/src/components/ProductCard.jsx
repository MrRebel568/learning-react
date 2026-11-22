import React, { useContext } from "react";
import { ShoppingCart, Star } from "lucide-react";
import { MainContext } from "../context/MainContext";

const ProductCard = ({ product }) => {
  const { setCartItem } = useContext(MainContext);
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group">
      {/* Product Image */}
      <div className="h-64 bg-gray-50 flex items-center justify-center p-6 relative">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain group-hover:scale-105 transition duration-300"
        />

        <span className="absolute top-4 left-4 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-full capitalize">
          {product.category}
        </span>
      </div>

      {/* Product Details */}
      <div className="p-5">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span className="text-sm font-semibold text-gray-800">
              {product.rating.rate}
            </span>
          </div>

          <span className="text-xs text-gray-400">
            ({product.rating.count} Reviews)
          </span>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900 line-clamp-2 min-h-14">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
          {product.description}
        </p>

        {/* Price & Button */}
        <div className="flex items-center justify-between mt-5">
          <div>
            <p className="text-xs text-gray-400">Price</p>
            <h3 className="text-2xl font-bold text-gray-900">
              ${product.price}
            </h3>
          </div>

          <button
            onClick={() =>
              setCartItem((prev) => [...prev, { ...product, quantity: 1 }])
            }
            className="flex items-center gap-2 bg-gray-900 text-white px-4 py-3 rounded-xl hover:bg-blue-600 transition duration-200"
          >
            <ShoppingCart size={18} />
            <span className="text-sm font-medium">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
