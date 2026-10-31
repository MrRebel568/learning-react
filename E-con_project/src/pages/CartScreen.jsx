import React, { useContext } from "react";
import { MyShop } from "../context/MyContext";
import CartItem from "../components/CartItem";

const CartScreen = () => {
  let { cartItem } = useContext(MyShop);
  console.log(cartItem)
  return (
    <div className=" min-h-auto p-4 grid grid-cols-3 gap-3">
      {cartItem.map((elem) => {
        return <CartItem key={elem.id} product={elem} />;
      })}
    </div>
  );
};

export default CartScreen;
