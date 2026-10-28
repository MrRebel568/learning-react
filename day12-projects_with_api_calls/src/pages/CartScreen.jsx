import React, { useContext } from "react";
import { MyStore } from "../context/MyStore";
import CartItem from "../components/CartItem";

const CartScreen = () => {
  let { cartItem } = useContext(MyStore);
  return (
    <div className=" min-h-auto p-4 grid grid-cols-3 gap-3">
      {cartItem.map((elem) => {
        return <CartItem key={elem.id} product={elem} />;
      })}
    </div>
  );
};

export default CartScreen;
