import React, { useContext } from "react";
import { ShoppingCart, Trash2, ArrowRight } from "lucide-react";
import { MyShop } from "../context/MyWebsite";

const Cart = () => {
  let { cartItem, deleteUser } = useContext(MyShop);
  // Calculate total price of all products
  let totalPrice = cartItem.reduce((total, item) => {
    return total + item.price;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          My Cart {cartItem.length}
        </h1>

        {/* Check if cart is empty */}
        {cartItem.length === 0 ? (
          <div className="rounded-xl bg-white p-10 text-center shadow-sm">
            <ShoppingCart size={48} className="mx-auto mb-4 text-gray-400" />

            <h2 className="text-xl font-semibold text-gray-800">
              Your cart is empty
            </h2>

            <p className="mt-2 text-gray-500">
              Add some products to see them here.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Products Section */}
            <div className="space-y-4 lg:col-span-2">
              {cartItem.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-5 rounded-xl bg-white p-5 shadow-sm sm:flex-row"
                >
                  {/* Product Image */}
                  <div className="flex h-40 items-center justify-center rounded-lg bg-gray-50 p-4 sm:w-40">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="text-sm capitalize text-indigo-600">
                        {item.category}
                      </p>

                      <h2 className="mt-2 text-lg font-semibold text-gray-900">
                        {item.title}
                      </h2>

                      <p className="mt-2 text-sm text-gray-500">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-xl font-bold text-green-600">
                        ${item.price}
                      </p>

                      <button
                        type="button"
                        className="flex cursor-pointer items-center gap-2 text-sm text-red-500 hover:text-red-700"
                        onClick={() => deleteUser(item.id)}
                      >
                        <Trash2 size={17} />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="h-fit rounded-xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>

              <div className="mt-6 flex justify-between text-gray-600">
                <span>Total Products</span>
                <span>{cartItem.length}</span>
              </div>

              <div className="my-6 border-t border-gray-200"></div>

              <div className="flex justify-between text-lg font-bold text-gray-900">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <button
                type="button"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700"
              >
                Checkout
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
