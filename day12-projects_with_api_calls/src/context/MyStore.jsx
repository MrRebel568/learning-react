import { useState } from "react";
import { createContext } from "react";

export let MyStore = createContext();

export let MyStoreProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItem, setCartItem] = useState([]);

  const increementQuantity = (cartItemID) => {
    setCartItem((prev) => {
      console.log(prev);
      return prev.map((val) => {
        return val.id === cartItemID
          ? { ...val, quantity: val.quantity + 1 }
          : val;
      });
    });
  };

  const dicreementQuantity = (cartItemID) => {
    setCartItem((prev) => {
      console.log(prev);
      return prev
        .map((val) => {
          return val.id === cartItemID
            ? { ...val, quantity: val.quantity - 1 }
            : val;
        })
        .filter((val) => val.quantity > 0);
    });
  };

  return (
    <MyStore.Provider
      value={{
        productsData,
        setProductsData,
        setIsCartOpen,
        isCartOpen,
        cartItem,
        setCartItem,
        increementQuantity,
        dicreementQuantity,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
