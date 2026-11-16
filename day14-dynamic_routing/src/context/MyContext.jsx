import { createContext, useState } from "react";

export const MyShop = createContext();

export const ContextProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const [singleProductData, setSingleProductData] = useState({});
  return (
    <MyShop.Provider
      value={{
        productsData,
        setProductsData,
        singleProductData,
        setSingleProductData,
      }}
    >
      {children}
    </MyShop.Provider>
  );
};
