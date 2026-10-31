import React from "react";

import axios from "axios";
import { useContext, useEffect } from "react";
import { MyStore } from "./context/MyStore";
import Navbar from "./Components/Navbar";
import ProductCards from "./Components/ProductCards";
import CartScreen from "./pages/CartScreen";

const App = () => {
  const { setProductsData, productsData, isCartOpen, cartItem } =
    useContext(MyStore);
  useEffect(() => {
    const getProductsData = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProductsData(res.data);
      } catch (error) {
        console.log("error in api", error);
      }
    };

    getProductsData();
  }, [setProductsData]);

  return (
    <div>
      <Navbar />
      {isCartOpen ? (
        <div>
          <CartScreen />
        </div>
      ) : (
        <div className="p-4 grid grid-cols-4 gap-4">
          {productsData.map((elem) => {
            let isInCart = cartItem.find((val) => val.id === elem.id);

            return (
              <ProductCards key={elem.id} product={elem} isInCart={isInCart} />
            );
          })}
        </div>
      )}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 p-3 sm:grid-cols-2 sm:gap-5 sm:p-4 lg:grid-cols-3 xl:grid-cols-4"></div>
    </div>
  );
};

export default App;
