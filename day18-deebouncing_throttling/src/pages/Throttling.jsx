import axios from "axios";
import React, { useEffect, useState } from "react";

const Throttling = () => {
  const [productsData, setProductsData] = useState([]);
  const [searchData, setSearchData] = useState(null);
  const [scrolly, setScrolly] = useState(null);
  const getProducts = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setProductsData(res.data);
  };

  let throttle = false;

  let filteredData = () => {
    console.log("filter Running");
    let result = productsData.filter((val) => {
      return val.title.toLowerCase().includes(searchData.toLowerCase());
    });
    setProductsData(result);
  };

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

  // Throttling...

  useEffect(() => {
    const handleScroll = () => {
      if (throttle) return;
      throttle = true
      console.log("scrolling here");
      setScrolly(window.scrollY);

      setTimeout(() => {
        throttle = false
      }, 2000);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

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

export default Throttling;
