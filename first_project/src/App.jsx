import React, { useState } from "react";
import { initialProducts } from "./data/initialProducts";
import Navbar from "./components/common/Navbar";
import ProductCard from "./components/products/ProductCard";
import Cart from "./components/cart/Cart";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (productId) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.productId === productId,
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prevItems, { productId, quantity: 1 }];
    });
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="mx-auto max-w-6xl p-4">
        <Navbar cartCount={cartCount} />

        <main className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <section className="rounded-lg border-gray-200 bg-white p-4 md:col-span-2">
            <h2 id="products-heading" className="mb-4 text-xl font-semibold">
              Product
            </h2>
            <div>
              {initialProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </section>
          <Cart cartItems={cartItems} products={initialProducts} />
        </main>
      </div>
    </div>
  );
};

export default App;
