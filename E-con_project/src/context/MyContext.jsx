import { createContext, useState } from "react";

export let MyShop = createContext();

export let MyShopProvider = ({ children }) => {
  const [toggleLoginPages, setToggleLoginPages] = useState(false);
  const [registerUserIn, setRegisterUserIn] = useState([]);
  const [isLogginError, setIsLogginError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [productData, setProductData] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItem, setCartItem] = useState([]);

  const increementQuantity = (cartItemID) => {
    setCartItem((prev) => {
      console.log(prev);
      return prev.map((val) => {
        console.log(val);
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
          console.log(val);
          return val.id === cartItemID
            ? { ...val, quantity: val.quantity - 1 }
            : val;
        })
        .filter((val) => val.quantity > 0);
    });
  };

  return (
    <MyShop.Provider
      value={{
        toggleLoginPages,
        setToggleLoginPages,
        registerUserIn,
        setRegisterUserIn,
        isLogginError,
        setIsLogginError,
        isLoggedIn,
        setIsLoggedIn,
        productData,
        setProductData,
        isCartOpen,
        setIsCartOpen,
        cartItem,
        setCartItem,
        increementQuantity,
        dicreementQuantity,
      }}
    >
      {children}
    </MyShop.Provider>
  );
};
