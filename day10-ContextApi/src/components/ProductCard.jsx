import React, { isValidElement, useContext } from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { MyStore } from "../context/MyContext";
import { MyShop } from "../context/MyWebsite";

const ProductCard = ({ product }) => {
  let { cartItem, setCartItem } = useContext(MyShop);
  const { title, price, description, category, image, rating } = product;
  const isAdded = cartItem.some((item) => {
    return item.id === product.id;
  });

  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image */}
      <div className="relative flex h-64 items-center justify-center bg-gray-50 p-6">
        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-medium capitalize text-gray-600 shadow-sm">
          {category}
        </span>

        <button
          type="button"
          aria-label="Add to wishlist"
          className="absolute right-4 top-4 rounded-full bg-white p-2 text-gray-500 shadow-sm transition hover:text-red-500"
        >
          <Heart size={20} strokeWidth={1.8} />
        </button>

        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        <h2 className="line-clamp-2 min-h-12 text-lg font-semibold text-gray-900">
          {title}
        </h2>

        <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-gray-500">
          {description}
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">
          <Star size={17} className="fill-amber-400 text-amber-400" />

          <span className="text-sm font-semibold text-gray-800">
            {rating.rate}
          </span>

          <span className="text-sm text-gray-400">
            ({rating.count} reviews)
          </span>
        </div>

        {/* Price and Add to Cart */}
        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
          <span className="text-2xl font-bold text-gray-900">
            ${price.toFixed(2)}
          </span>

          <button
            type="button"
            onClick={() => {
              if (!isAdded) {
                setCartItem((prev) => [...prev, product]);
              }
            }}
            className="flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-indigo-600 active:scale-95"
          >
            <ShoppingCart size={18} strokeWidth={2} />
            {isAdded ? "Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
