import React, { useContext } from "react";
import { Star, ShoppingCart, Minus, Plus } from "lucide-react";
import { MyStore } from "../context/MyStore";

const ProductCard = ({ product, isInCart }) => {
  const { title, price, description, category, image, rating } = product;
  let { setCartItem, increementQuantity, dicreementQuantity } =
    useContext(MyStore);

  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image */}
      <div className="relative flex h-64 items-center justify-center bg-gray-50 p-6">
        <span className="absolute left-4 top-4 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold capitalize text-indigo-700">
          {category}
        </span>

        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        {/* Rating */}
        <div className="mb-3 flex items-center gap-2">
          <div className="flex items-center gap-1 text-amber-500">
            <Star size={17} fill="currentColor" />
            <span className="text-sm font-semibold text-gray-800">
              {rating.rate}
            </span>
          </div>

          <span className="text-sm text-gray-500">
            ({rating.count} reviews)
          </span>
        </div>

        {/* Title */}
        <h2 className="mb-2 line-clamp-2 min-h-12 text-lg font-bold text-gray-900">
          {title}
        </h2>

        {/* Description */}
        <p className="mb-5 line-clamp-2 min-h-10 text-sm leading-5 text-gray-500">
          {description}
        </p>

        {/* Price and Button */}
        <div className="flex items-center justify-between gap-3 border-t border-gray-100 pt-4">
          <div>
            <p className="text-xs text-gray-500">Price</p>
            <p className="text-2xl font-bold text-gray-900">
              ${price.toFixed(2)}
            </p>
          </div>

          {isInCart ? (
            <div className="flex w-[40%] p-1 rounded-2xl  border-2 border-gray-300 flex items-center justify-center gap-3 ">
              <button onClick={() => dicreementQuantity(product.id)}>
                <Minus size={16} />
              </button>
              <span className="min-w-8 text-center text-xl font-semibold text-gray-900">
                {isInCart.quantity}
              </span>
              <button onClick={() => increementQuantity(product.id)}>
                <Plus size={16} />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() =>
                setCartItem((prev) => [...prev, { ...product, quantity: 1 }])
              }
              className="flex cursor-pointer items-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 active:scale-95"
            >
              <ShoppingCart size={18} />
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
