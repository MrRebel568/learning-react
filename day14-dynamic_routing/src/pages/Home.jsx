import axios from "axios";
import React, { useContext, useEffect } from "react";
import { MyShop } from "../context/MyContext";
import ProductCard from "../components/ProductCard";

const Home = () => {
  let { productsData, setProductsData } = useContext(MyShop);

  useEffect(() => {
    let getProductData = async () => {
      try {
        let res = await axios.get("https://fakestoreapi.com/products");
        setProductsData(res.data);
      } catch (error) {
        console.log("Errors in api", error);
      }
    };
    getProductData();
  }, [setProductsData]);
  return (
    <div className="p-4 grid grid-cols-4 gap-4">
      {productsData.map((val) => {
        return <ProductCard key={val.id} product={val} />;
      })}
    </div>
  );
};

export default Home;
