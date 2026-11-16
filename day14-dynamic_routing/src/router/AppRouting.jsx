import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import { Route, Routes } from "react-router";
import ProductDetails from "../pages/ProductDetails";

const AppRouting = () => {
  return (
    <div className="h-screen" >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/detail/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default AppRouting;
