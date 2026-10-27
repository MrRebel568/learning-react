import { createContext } from "react";

export let MyShop = createContext();

export let MyShopProvider = ({ children }) => {
    console.log("context rendering..")
  return <MyShop.Provider>{children}</MyShop.Provider>;
};
