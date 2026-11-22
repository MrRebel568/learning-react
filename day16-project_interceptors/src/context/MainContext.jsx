import { createContext, useState } from "react";

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [productsData, setProductsData] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  return (
    <MainContext.Provider
      value={{
        usersData,
        setUsersData,
        isLoading,
        setisLoading,
        productsData,
        setProductsData,
        cartItem,
        setCartItem,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
