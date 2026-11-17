import { useContext, useEffect } from "react";
import { MyShop } from "../context/MyContext";
import Login from "./Login";
import Register from "./Register";
import MainProduct from "../layouts/MainProduct";
import axios from "axios";
import CartScreen from "./CartScreen";

const Home = () => {
  const {
    toggleLoginPages,
    isCartOpen,
    isLoggedIn,
    setProductData,
    productData,
    cartItem,
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

  if (isCartOpen) {
    return <CartScreen />;
  }

  if (!isLoggedIn) {
    return toggleLoginPages ? <Register /> : <Login />;
  }
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {productData.map((elem) => {
        let isInCart = cartItem.find((val) => val.id === elem.id);
        return <MainProduct key={elem.id} product={elem} isInCart={isInCart} />;
      })}
    </div>
  );
};

export default Home;
