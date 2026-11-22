import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { MainContext } from "../context/MainContext";
import { axiosInstance } from "../config/axiosinstance";

const ProductsPage = () => {
  let { productsData, setProductsData, isLoading, setisLoading } =
    useContext(MainContext);
  const getProductData = async () => {
    try {
      const res = await axiosInstance.get("/products");
      setProductsData(res.data);
      setisLoading(false);
    } catch (error) {
      console.log("error in product api", error);
    }
  };
  useEffect(() => {
    getProductData();
  }, [setProductsData]);

  if (isLoading) return <h1 className="text-4xl">Loading Data...</h1>;
  return (
    <div className="grid grid-cols-4 gap-3 mt-3 p-3">
      {productsData.map((val) => {
        return <ProductCard key={val.id} product={val} />;
      })}
    </div>
  );
};

export default ProductsPage;
