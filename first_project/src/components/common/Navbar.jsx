import React from "react";

const Navbar = ({ cartCount }) => {
  return (
    <header className="mb-6 flex flex-wrap items-center justify-between gap-2 border-b border-gray-200 py-4">
      <h1 className="text-2xl font-bold">Product Inventory and Cart Manager</h1>
      <p className="text-gray-500">Cart items: {cartCount}</p>
    </header>
  );
};

export default Navbar;