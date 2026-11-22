import React, { useContext } from "react";
import { MainContext } from "../context/MainContext";
import CartItem from "../components/CartItem";

const CartPages = () => {
  const { cartItem, setCartItem } = useContext(MainContext);
  return (
    <div className="grid grid-cols-3 gap-4 mt-3 p-3">
      {cartItem.map((val) => (
        <CartItem key={val.id} product={val} />
      ))}
    </div>
  );
};

export default CartPages;
