import { createContext, useState } from "react";

// setup our black store---
export const MyStore = createContext();

// make a provider of our store who handle data and serves to the customers
export const ContextProvider = ({ children }) => {
  const [sona, setSona] = useState(
    "ki sonaa sabse jayda cute and pyaari hai mera chhota sa baccha",
  );
  return <MyStore.Provider value={sona}>{children}</MyStore.Provider>;
};
