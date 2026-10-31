import React, { useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import { MyShop } from "./context/MyContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainProduct from "./layouts/MainProduct";
import axios from "axios";
import CartScreen from "./pages/CartScreen";

const App = () => {
  const {
    toggleLoginPages,
    isCartOpen,
    isLoggedIn,
    setProductData,
    productData,
    cartItem
  } = useContext(MyShop);

  useEffect(() => {
    const getProductsData = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProductData(res.data);
        console.log(res.data);
      } catch (error) {
        console.log("error in api", error);
      }
    };
    getProductsData();
  }, [setProductData]);
  return (
    <div className="h-screen p-4 gap-10 flex flex-col">
      <Navbar />
      {isCartOpen ? (
        <CartScreen />
      ) : (
        <div>
          {" "}
          {isLoggedIn ? (
            <div className="grid grid-cols-4 gap-4 p-4">
              {productData.map((elem) => {
                let isInCart = cartItem.find((val) => val.id === elem.id);
                return <MainProduct key={elem.id} product={elem} isInCart={isInCart} />;
              })}
            </div>
          ) : toggleLoginPages ? (
            <Register />
          ) : (
            <Login />
          )}
        </div>
      )}
    </div>
  );
};

export default App;
