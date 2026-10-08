const Cart = ({ cartItems, products }) => {
  return (
    <aside
      className="rounded-lg border border-gray-200 bg-white p-4"
      aria-labelledby="cart-heading"
    >
      <h2 id="cart-heading" className="mb-2 text-xl font-semibold">
        Cart
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Cart abhi khaali hai.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {cartItems.map((item) => {
            const product = products.find((p) => p.id === item.productId);

            return (
              <li
                key={item.productId}
                className="flex items-center justify-between py-2"
              >
                <div>
                  <p className="font-medium">{product.title}</p>
                  <p className="text-sm text-gray-500">
                    ₹{product.price.toLocaleString("en-IN")} × {item.quantity}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </aside>
  );
};

export default Cart;