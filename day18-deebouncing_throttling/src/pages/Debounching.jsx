import axios from "axios";
import React, { useEffect, useState } from "react";

const Debounching = () => {
  const [productsData, setProductsData] = useState([]);
  const [searchData, setSearchData] = useState(null);
  const getProducts = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setProductsData(res.data);
  };

  let filteredData = () => {
    console.log("filter Running");
    let result = productsData.filter((val) => {
      return val.title.toLowerCase().includes(searchData.toLowerCase());
    });
    setProductsData(result);
  };

  // debounching...

  // debounching mein hameshaaa ek change ke bad chlata rahenga
  useEffect(() => {
    if (!searchData) return;
    let timerout = setTimeout(() => {
      filteredData();
    }, 700);

    return () => clearTimeout(timerout);
  }, [searchData]);

  useEffect(() => {
    getProducts();
  }, [setProductsData]);
  return (
    <div>
      <h1>Debouncing...</h1>
      <input
        style={{ padding: "10px 30px" }}
        onChange={(e) => setSearchData(e.target.value)}
        type="text"
        placeholder="Search products"
      />
      {productsData.map((val) => {
        return <h1 key={val.id}>{val.title}</h1>;
      })}
    </div>
  );
};

export default Debounching;
