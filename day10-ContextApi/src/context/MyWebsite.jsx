import { createContext, useState } from "react";

export let MyShop = createContext();

export const MyShopProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);

  const deleteUser = (id) => {
    const filterUser = cartItem.filter((val) => {
      return val.id !== id;
    });
    setCartItem(filterUser);
  };

  return (
    <MyShop.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItem,
        setCartItem,
        deleteUser,
        isLoggedIn,
        setIsLoggedIn,
        setUsers,
        users,
      }}
    >
      {children}
    </MyShop.Provider>
  );
};
